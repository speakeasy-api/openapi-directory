# preprints

### Available Operations

* [preprintsBibliographicContributorsList](#preprintsbibliographiccontributorslist) - List all Bibliographic Contributors
* [preprintsCitationList](#preprintscitationlist) - Retrieve citation details
* [preprintsCitationRead](#preprintscitationread) - Retrieve a styled citation
* [preprintsContributorRead](#preprintscontributorread) - Retrieve a contributor
* [preprintsContributorsCreate](#preprintscontributorscreate) - Create a Contributor
* [preprintsContributorsList](#preprintscontributorslist) - List all Contributors for a Preprint
* [preprintsCreate](#preprintscreate) - Create a preprint
* [preprintsList](#preprintslist) - List all preprints
* [preprintsPartialUpdate](#preprintspartialupdate) - Update a preprint
* [preprintsRead](#preprintsread) - Retrieve a preprint

## preprintsBibliographicContributorsList

A paginated list of the Preprint's Bibliographic Contributors, sorted by their index.
Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsBibliographicContributorsListRequest;
import org.openapis.openapi.models.operations.PreprintsBibliographicContributorsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsBibliographicContributorsListRequest req = new PreprintsBibliographicContributorsListRequest("nihil");            

            PreprintsBibliographicContributorsListResponse res = sdk.preprints.preprintsBibliographicContributorsList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprintsCitationList

The citation details for a preprint, in CSL format.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsCitationListRequest;
import org.openapis.openapi.models.operations.PreprintsCitationListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsCitationListRequest req = new PreprintsCitationListRequest("repellat");            

            PreprintsCitationListResponse res = sdk.preprints.preprintsCitationList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprintsCitationRead

The citation for a preprint in a specific style.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsCitationReadRequest;
import org.openapis.openapi.models.operations.PreprintsCitationReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsCitationReadRequest req = new PreprintsCitationReadRequest("quibusdam", "sed");            

            PreprintsCitationReadResponse res = sdk.preprints.preprintsCitationRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprintsContributorRead

Retrieves the details of a contributor on this Preprint.
Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsContributorReadRequest;
import org.openapis.openapi.models.operations.PreprintsContributorReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsContributorReadRequest req = new PreprintsContributorReadRequest("saepe", "pariatur");            

            PreprintsContributorReadResponse res = sdk.preprints.preprintsContributorRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprintsContributorsCreate

Adds a contributor to a Preprint, effectively creating a relationship between the Preprint and a user.

Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Permissions
Only project administrators can add contributors to a Preprint.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.

All attributes describing the relationship between the Preprint and the user are optional.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsContributorsCreateContributorAttributesInput;
import org.openapis.openapi.models.operations.PreprintsContributorsCreateContributorAttributesPermissionEnum;
import org.openapis.openapi.models.operations.PreprintsContributorsCreateContributorInput;
import org.openapis.openapi.models.operations.PreprintsContributorsCreateRequest;
import org.openapis.openapi.models.operations.PreprintsContributorsCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsContributorsCreateRequest req = new PreprintsContributorsCreateRequest(                new PreprintsContributorsCreateContributorInput() {{
                                attributes = new PreprintsContributorsCreateContributorAttributesInput() {{
                                    bibliographic = false;
                                    index = 37559L;
                                    permission = PreprintsContributorsCreateContributorAttributesPermissionEnum.READ;
                                }};;
                            }};, "praesentium");            

            PreprintsContributorsCreateResponse res = sdk.preprints.preprintsContributorsCreate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprintsContributorsList

A paginated list of the Preprint's Contributors, sorted by their index.

Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of Contributors, the user relationship will not be exposed and the Contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsContributorsListRequest;
import org.openapis.openapi.models.operations.PreprintsContributorsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsContributorsListRequest req = new PreprintsContributorsListRequest("natus");            

            PreprintsContributorsListResponse res = sdk.preprints.preprintsContributorsList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprintsCreate

Creates a new preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsCreatePreprintAttributesInput;
import org.openapis.openapi.models.operations.PreprintsCreatePreprintInput;
import org.openapis.openapi.models.operations.PreprintsCreatePreprintRelationshipsInput;
import org.openapis.openapi.models.operations.PreprintsCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsCreatePreprintInput req = new PreprintsCreatePreprintInput(                new PreprintsCreatePreprintRelationshipsInput("magni", "sunt", "quo") {{
                                bibliographicContributors = "illum";
                                license = "pariatur";
                            }};, "maxime") {{
                attributes = new PreprintsCreatePreprintAttributesInput() {{
                    doi = "ea";
                    licenseRecord = "excepturi";
                    subjects = new String[]{{
                        add("ea"),
                    }};
                }};;
            }};            

            PreprintsCreateResponse res = sdk.preprints.preprintsCreate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprintsList


A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsListResponse res = sdk.preprints.preprintsList();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprintsPartialUpdate

Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsPartialUpdateRequest;
import org.openapis.openapi.models.operations.PreprintsPartialUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsPartialUpdateRequest req = new PreprintsPartialUpdateRequest(                new java.util.HashMap<String, Object>() {{
                                put("ab", "maiores");
                            }}, "quidem");            

            PreprintsPartialUpdateResponse res = sdk.preprints.preprintsPartialUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprintsRead

Retrieves the details of a preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprintsReadRequest;
import org.openapis.openapi.models.operations.PreprintsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprintsReadRequest req = new PreprintsReadRequest("ipsam");            

            PreprintsReadResponse res = sdk.preprints.preprintsRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
