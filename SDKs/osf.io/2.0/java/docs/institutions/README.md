# institutions

### Available Operations

* [institutionsDetail](#institutionsdetail) - Retrieve an institution
* [institutionsList](#institutionslist) - List all institutions
* [institutionsNodeList](#institutionsnodelist) - List all affiliated nodes
* [institutionsRegistrationList](#institutionsregistrationlist) - List all affiliated registrations
* [institutionsUsersList](#institutionsuserslist) - List all affiliated users

## institutionsDetail

Retrieves the details of an institution
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionsDetailRequest;
import org.openapis.openapi.models.operations.InstitutionsDetailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InstitutionsDetailRequest req = new InstitutionsDetailRequest("ipsa");            

            InstitutionsDetailResponse res = sdk.institutions.institutionsDetail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## institutionsList


A paginated list of all verified institutions.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.

Institutions may be filtered by their `id`, `name`, and `auth_url`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InstitutionsListResponse res = sdk.institutions.institutionsList();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## institutionsNodeList

A paginated list of all nodes affiliated with an institution.
#### Versioning
As of version `2.2`, affiliated components (in addition to affiliated top-level projects) are returned from this endpoint.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 nodes. Each resource in the array is a separate nodes object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.

Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionsNodeListRequest;
import org.openapis.openapi.models.operations.InstitutionsNodeListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InstitutionsNodeListRequest req = new InstitutionsNodeListRequest("omnis");            

            InstitutionsNodeListResponse res = sdk.institutions.institutionsNodeList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## institutionsRegistrationList

A paginated list of all registrations affiliated with an institution.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registrations. Each resource in the array is a separate users object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/registrations?filter[title]=science.

Registrations may be filtered by their  `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionsRegistrationListRequest;
import org.openapis.openapi.models.operations.InstitutionsRegistrationListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InstitutionsRegistrationListRequest req = new InstitutionsRegistrationListRequest("voluptate");            

            InstitutionsRegistrationListResponse res = sdk.institutions.institutionsRegistrationList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## institutionsUsersList

A paginated list of all users affiliated with an institution.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 users. Each resource in the array is a separate users object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Filtering
You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.

Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstitutionsUsersListRequest;
import org.openapis.openapi.models.operations.InstitutionsUsersListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InstitutionsUsersListRequest req = new InstitutionsUsersListRequest("cum");            

            InstitutionsUsersListResponse res = sdk.institutions.institutionsUsersList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
