# registrations

### Available Operations

* [registrationsChildrenList](#registrationschildrenlist) - List all child registrations
* [registrationsCitationRead](#registrationscitationread) - Retrieve a citation
* [registrationsCitationsList](#registrationscitationslist) - List all citation styles
* [registrationsCommentsList](#registrationscommentslist) - List all comments
* [registrationsContributorsList](#registrationscontributorslist) - List all contributors
* [registrationsContributorsRead](#registrationscontributorsread) - Retrieve a contributor
* [registrationsFilesList](#registrationsfileslist) - List all files
* [registrationsFilesRead](#registrationsfilesread) - Retrieve a file
* [registrationsForksCreate](#registrationsforkscreate) - Create a fork
* [registrationsForksList](#registrationsforkslist) - List all forks
* [registrationsIdentifiersList](#registrationsidentifierslist) - List all identifiers
* [registrationsInstitutionsList](#registrationsinstitutionslist) - List all institutions
* [registrationsLinkedNodesList](#registrationslinkednodeslist) - List all linked nodes
* [registrationsList](#registrationslist) - List all registrations
* [registrationsLogsList](#registrationslogslist) - List all logs
* [registrationsPartialUpdate](#registrationspartialupdate) - Update a registration
* [registrationsProvidersList](#registrationsproviderslist) - List all storage providers
* [registrationsRead](#registrationsread) - Retrieve a registration
* [registrationsViewOnlyLinksList](#registrationsviewonlylinkslist) - List all view only links
* [registrationsViewOnlyLinksRead](#registrationsviewonlylinksread) - Retrieve a view only link
* [registrationsWikisList](#registrationswikislist) - List all wikis

## registrationsChildrenList


A paginated list of children of a registration.

The list consists of the next level child registrations for the given registration. The returned registrations are sorted by their `date_modified`, with the most recently updated child registrations appearing first.

The list will include child registrations that are public, as well as child registrations that are private, if the authenticated user has permission to view them.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 child registrations. If the given registration has zero child registrations, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the child registration.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/children/?filter[title]=reproducibility.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsChildrenListRequest;
import org.openapis.openapi.models.operations.RegistrationsChildrenListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsChildrenListRequest req = new RegistrationsChildrenListRequest("pariatur");            

            RegistrationsChildrenListResponse res = sdk.registrations.registrationsChildrenList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsCitationRead

Retrieves the citation style details for a registration, in CSL format.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the details necessary for the citation style.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsCitationReadRequest;
import org.openapis.openapi.models.operations.RegistrationsCitationReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsCitationReadRequest req = new RegistrationsCitationReadRequest("nemo", "voluptatibus");            

            RegistrationsCitationReadResponse res = sdk.registrations.registrationsCitationRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsCitationsList


A paginated list of the registration's alternative citation styles

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 citation styles. Each resource in the array is a separate citation styles object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/citations/?filter[title]=open.

Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsCitationsListRequest;
import org.openapis.openapi.models.operations.RegistrationsCitationsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsCitationsListRequest req = new RegistrationsCitationsListRequest("perferendis");            

            RegistrationsCitationsListResponse res = sdk.registrations.registrationsCitationsList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsCommentsList


A paginated list of the registration's comments.

The returned comments are sorted by their creation date, with the most recent comments appearing first.
#### Permissions
Comments of public registrations are given read-only access to everyone.

If the comment-level is `private`, only registration contributors have permission to comment.

If the comment-level is `public`, any logged-in OSF user can comment.

Comments of private registrations are only visible to contributors and administrators on the registration.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wuerf/comments/?filter[target]=wuerf

Comments may be filtered by their `deleted`, `target`, `date_created`, `date_modified`.

Most fields are string fields and will be filtered using simple substring matching. Deleted is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsCommentsListRequest;
import org.openapis.openapi.models.operations.RegistrationsCommentsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsCommentsListRequest req = new RegistrationsCommentsListRequest("fugiat");            

            RegistrationsCommentsListResponse res = sdk.registrations.registrationsCommentsList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsContributorsList

A paginated list of all contributors on this registration.
The returned contributors are sorted by their index.

Contributors are users who can make changes to the registration or, in the case of private registration, have read access to the registration.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed in the contributors list on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 contributors. Each resource in the array contains the full representation of the contributor. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsContributorsListRequest;
import org.openapis.openapi.models.operations.RegistrationsContributorsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsContributorsListRequest req = new RegistrationsContributorsListRequest("amet");            

            RegistrationsContributorsListResponse res = sdk.registrations.registrationsContributorsList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsContributorsRead

Retrieves the details of a contributor on this registration.

#### Returns
Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsContributorsReadRequest;
import org.openapis.openapi.models.operations.RegistrationsContributorsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsContributorsReadRequest req = new RegistrationsContributorsReadRequest("aut", "cumque");            

            RegistrationsContributorsReadResponse res = sdk.registrations.registrationsContributorsRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsFilesList

List of all the registration's files/folders for a given storage provider.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/files/osfstorage/?filter[kind]=file

Files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsFilesListRequest;
import org.openapis.openapi.models.operations.RegistrationsFilesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsFilesListRequest req = new RegistrationsFilesListRequest("corporis", "hic");            

            RegistrationsFilesListResponse res = sdk.registrations.registrationsFilesList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsFilesRead

Retrieves the details of a registration file for the given storage provider.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested registration file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsFilesReadRequest;
import org.openapis.openapi.models.operations.RegistrationsFilesReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsFilesReadRequest req = new RegistrationsFilesReadRequest("libero", "nobis", "dolores");            

            RegistrationsFilesReadResponse res = sdk.registrations.registrationsFilesRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsForksCreate

Creates a fork of the given registration.

Forking a project creates a copy of an existing registration and all of its contents. The fork always points back to the original registration, forming a network of registrations.

You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.

When creating a fork, your fork will only contain public components of the current registration and components for which you are a contributor. Private components that you do not have access to will not be forked.
#### Required
There are no required attributes when creating a fork, as all of the forked registration's attributes will be copied from the current registration.

The `title` field is optional, with the default title being "Fork of " prepended to the current registration's title.
#### Returns
Returns a JSON object with a `data` key containing the complete representation of the forked registration, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsForksCreateRequest;
import org.openapis.openapi.models.operations.RegistrationsForksCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsForksCreateRequest req = new RegistrationsForksCreateRequest("quis");            

            RegistrationsForksCreateResponse res = sdk.registrations.registrationsForksCreate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsForksList


A paginated list of the registration’s forks

The returned forks are sorted by their `forked_date`, with the most recent forks appearing first.

Forking a registration creates a copy of an existing registration and all of its contents.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 forks. If the current registration has no fork, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the registration's fork.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsForksListRequest;
import org.openapis.openapi.models.operations.RegistrationsForksListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsForksListRequest req = new RegistrationsForksListRequest("totam");            

            RegistrationsForksListResponse res = sdk.registrations.registrationsForksList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsIdentifiersList

A paginated list of the registration's identifiers.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/identifiers/?filter[category]=ark

Identifiers may be filtered by their `category` e.g `ark` or `doi`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsIdentifiersListRequest;
import org.openapis.openapi.models.operations.RegistrationsIdentifiersListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsIdentifiersListRequest req = new RegistrationsIdentifiersListRequest("dignissimos");            

            RegistrationsIdentifiersListResponse res = sdk.registrations.registrationsIdentifiersList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsInstitutionsList

A paginated list of institutions affiliated with the registration.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 affiliated institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsInstitutionsListRequest;
import org.openapis.openapi.models.operations.RegistrationsInstitutionsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsInstitutionsListRequest req = new RegistrationsInstitutionsListRequest("eaque");            

            RegistrationsInstitutionsListResponse res = sdk.registrations.registrationsInstitutionsList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsLinkedNodesList

List of all nodes linked to the registration.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/linked_nodes/?filter[title]=reproducibility/?filter[title]=reproducibility.

Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsLinkedNodesListRequest;
import org.openapis.openapi.models.operations.RegistrationsLinkedNodesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsLinkedNodesListRequest req = new RegistrationsLinkedNodesListRequest("quis");            

            RegistrationsLinkedNodesListResponse res = sdk.registrations.registrationsLinkedNodesList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsList

A paginated list of registrations on the OSF to which the user has access.

The returned registrations are those which are public or which the user has access to view.

Non-registered nodes cannot be accessed through this endpoint (use the [nodes](#Nodes_nodes_list) endpoints instead).

#### Registrations
A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.

Registrations can be made public immediately or embargoed for up to 4 years.

#### Withdrawals
Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsListResponse res = sdk.registrations.registrationsList();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsLogsList

A paginated list of the registration's logs.

The returned logs are sorted by their `date`, with the most recents logs appearing first.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/logs/?filter[action]=made_private.

Logs may be filtered by their `action`, and `date`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsLogsListRequest;
import org.openapis.openapi.models.operations.RegistrationsLogsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsLogsListRequest req = new RegistrationsLogsListRequest("nesciunt");            

            RegistrationsLogsListResponse res = sdk.registrations.registrationsLogsList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsPartialUpdate

Updates a registration's privacy from **private** to **public**.

Registrations can be updated with either a **PUT** or **PATCH** request. The `public` field is the only field that can be modified on a registration

Registrations can only be turned from private to public, not vice versa.
#### Permissions
Only project administrators may update a registration.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsPartialUpdateRequest;
import org.openapis.openapi.models.operations.RegistrationsPartialUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsPartialUpdateRequest req = new RegistrationsPartialUpdateRequest("eos");            

            RegistrationsPartialUpdateResponse res = sdk.registrations.registrationsPartialUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsProvidersList

A paginated list of storage providers enabled on the registration

Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.


#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 files. Each resource in the array is a separate file object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsProvidersListRequest;
import org.openapis.openapi.models.operations.RegistrationsProvidersListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsProvidersListRequest req = new RegistrationsProvidersListRequest("perferendis");            

            RegistrationsProvidersListResponse res = sdk.registrations.registrationsProvidersList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsRead

Retrieve the details of a given registration.
#### Permissions
Only project contributors may retrieve the details of a registration that is embargoed, or has not yet been made public. Attempting to retrieve a private registration for which you are not a contributor will result in a **403 Forbidden** response.

Authentication is not required to view the details of a public registration, as public registrations give read-only access to everyone.
#### Registrations
A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.

Registrations can be made public immediately or embargoed for up to 4 years.

#### Withdrawals
Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsReadRequest;
import org.openapis.openapi.models.operations.RegistrationsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsReadRequest req = new RegistrationsReadRequest("dolores");            

            RegistrationsReadResponse res = sdk.registrations.registrationsRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsViewOnlyLinksList

A paginated list of view only links created for this registration.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Permissions

View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.

#### Filtering

You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/view_only_links/?filter[anonymous]=true.

View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsViewOnlyLinksListRequest;
import org.openapis.openapi.models.operations.RegistrationsViewOnlyLinksListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsViewOnlyLinksListRequest req = new RegistrationsViewOnlyLinksListRequest("minus");            

            RegistrationsViewOnlyLinksListResponse res = sdk.registrations.registrationsViewOnlyLinksList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsViewOnlyLinksRead

Retrieves the details of a view only link created from this registration.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Permissions

View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsViewOnlyLinksReadRequest;
import org.openapis.openapi.models.operations.RegistrationsViewOnlyLinksReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsViewOnlyLinksReadRequest req = new RegistrationsViewOnlyLinksReadRequest("quam", "dolor");            

            RegistrationsViewOnlyLinksReadResponse res = sdk.registrations.registrationsViewOnlyLinksRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registrationsWikisList

A paginated list of the registration's wiki pages
#### Returns
A list of all registration's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Filtering
Wiki pages can be filtered based on their `name` and `date_modified` fields.
+ `filter[name]=<Str>` -- filter wiki pages by name
+ `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.

Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistrationsWikisListRequest;
import org.openapis.openapi.models.operations.RegistrationsWikisListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistrationsWikisListRequest req = new RegistrationsWikisListRequest("vero");            

            RegistrationsWikisListResponse res = sdk.registrations.registrationsWikisList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
