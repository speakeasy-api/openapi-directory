# schemaResponses

## Overview

Schema Responses contain user supplied responses to a Registration Schema. A Schema Response aggregates all of the the responses for a given version of a Registration's Registration Schema. Schema Responses are created when a Registration is completed. Once a Registration is completed the Schema Responses for a Registration can be revisied and updated by using it's associated action endpoints.

There are a few states for Schema Responses:

  - `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you
  must create a Schema Response Action that triggers a new submission.

  - `in_progess` is the state of a Schema Response where the response is editable and still private, Schema
  Responses are editted via a PATCH request as specified below.

  - `unapproved` is the state of a Schema Response where edits have been made and "locked-in", now contributors
  have the ability to reject the changes, however if they are not rejected changes are automatically approved
  after 48 hours. If `unapproved` Schema Responses are rejected, they are returned to the `in_progress` state. If
  `unapproved` Schema Responses are approved they either enter an `approved` state or go into a
  `pending_moderation` to be accepted or denied by a moderator.

  - `pending_moderation` is the state of a Schema Response where moderators have an opportunity to reject or
  approve a Schema Response that has been approved by it's contributors. This state is only reachable for Schema
  Responses that are associated with a Registration that has Registration Provider a moderated workflow.

  - `approved` is the state of a Schema Response where it is public and immutable, in order to update an approved
  Schema Response a new one must be created.

### Available Operations

* [schemaResponseDelete](#schemaresponsedelete) - Delete a Incomplete Schema Response
* [schemaResponsePatch](#schemaresponsepatch) - Update a Registration's Schema Response
* [schemaResponsePpost](#schemaresponseppost) - Create a new Schema Response
* [schemaResponsesList](#schemaresponseslist) - List all Schema Responses
* [schemaResponsesRead](#schemaresponsesread) - Retrieve a Schema Response

## schemaResponseDelete

This endpoint deletes a new Schema Response. Schema Responses can only be deleted in the `in_progress` state. Once a Schema Response is transitioned to an `approved` it is immutable and another Schema Response must be created to update the Schema Response for that registration.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SchemaResponseDeleteRequest;
import org.openapis.openapi.models.operations.SchemaResponseDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SchemaResponseDeleteRequest req = new SchemaResponseDeleteRequest("facilis");            

            SchemaResponseDeleteResponse res = sdk.schemaResponses.schemaResponseDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## schemaResponsePatch

Patching to this endpoint allows one to directly edit the revision responses on the Schema Response of a Registration if that Schema Response is in an `in_progress` state.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SchemaResponsePatchRequest;
import org.openapis.openapi.models.operations.SchemaResponsePatchResponse;
import org.openapis.openapi.models.operations.SchemaResponsePatchSchemaResponsesAttributesInput;
import org.openapis.openapi.models.operations.SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum;
import org.openapis.openapi.models.operations.SchemaResponsePatchSchemaResponsesInput;
import org.openapis.openapi.models.operations.SchemaResponsePatchSchemaResponsesLinks;
import org.openapis.openapi.models.operations.SchemaResponsePatchSchemaResponsesRelationships;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SchemaResponsePatchRequest req = new SchemaResponsePatchRequest(                new SchemaResponsePatchSchemaResponsesInput(                new SchemaResponsePatchSchemaResponsesAttributesInput() {{
                                                dateCreated = 596656L;
                                                dateModified = 31838L;
                                                dateSubmitted = 783645L;
                                                isOriginalResponse = false;
                                                isPendingCurrentUserApproval = false;
                                                reviewsState = SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum.INITIAL;
                                                revisionJustification = "blanditiis";
                                                revisionResponses = new java.util.HashMap<String, Object>() {{
                                                    put("eaque", "occaecati");
                                                    put("rerum", "adipisci");
                                                    put("asperiores", "earum");
                                                }};
                                            }};, "modi") {{
                                links = new SchemaResponsePatchSchemaResponsesLinks() {{
                                    self = "iste";
                                }};;
                                relationships = new SchemaResponsePatchSchemaResponsesRelationships() {{
                                    actions = "dolorum";
                                    initiatedBy = "deleniti";
                                    registration = "pariatur";
                                    registrationSchema = "provident";
                                }};;
                            }};, "nobis");            

            SchemaResponsePatchResponse res = sdk.schemaResponses.schemaResponsePatch(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## schemaResponsePpost

This endpoint creates a new Schema Response with an `in_progress` state. A new response can only be created if the current schema response is in an `approved` state.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SchemaResponsePpostResponse;
import org.openapis.openapi.models.operations.SchemaResponsePpostSchemaResponsesAttributesInput;
import org.openapis.openapi.models.operations.SchemaResponsePpostSchemaResponsesAttributesReviewsStateEnum;
import org.openapis.openapi.models.operations.SchemaResponsePpostSchemaResponsesInput;
import org.openapis.openapi.models.operations.SchemaResponsePpostSchemaResponsesLinks;
import org.openapis.openapi.models.operations.SchemaResponsePpostSchemaResponsesRelationships;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SchemaResponsePpostSchemaResponsesInput req = new SchemaResponsePpostSchemaResponsesInput(                new SchemaResponsePpostSchemaResponsesAttributesInput() {{
                                dateCreated = 730122L;
                                dateModified = 964490L;
                                dateSubmitted = 311945L;
                                isOriginalResponse = false;
                                isPendingCurrentUserApproval = false;
                                reviewsState = SchemaResponsePpostSchemaResponsesAttributesReviewsStateEnum.APPROVED;
                                revisionJustification = "aliquid";
                                revisionResponses = new java.util.HashMap<String, Object>() {{
                                    put("dolorem", "dolor");
                                }};
                            }};, "qui") {{
                links = new SchemaResponsePpostSchemaResponsesLinks() {{
                    self = "ipsum";
                }};;
                relationships = new SchemaResponsePpostSchemaResponsesRelationships() {{
                    actions = "hic";
                    initiatedBy = "excepturi";
                    registration = "cum";
                    registrationSchema = "voluptate";
                }};;
            }};            

            SchemaResponsePpostResponse res = sdk.schemaResponses.schemaResponsePpost(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## schemaResponsesList

This retrieves a paginated list of all active Schema Responses that are public.
#### Returns
Returns a JSON object containing `data` and `links` keys. The `data` key contains an array of 10 Schema Responses. Each resource in the array is a separate Registration Schemas object. The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SchemaResponsesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SchemaResponsesListResponse res = sdk.schemaResponses.schemaResponsesList();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## schemaResponsesRead

This retrieves a single Schema response using it's id.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SchemaResponsesReadRequest;
import org.openapis.openapi.models.operations.SchemaResponsesReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SchemaResponsesReadRequest req = new SchemaResponsesReadRequest("dignissimos");            

            SchemaResponsesReadResponse res = sdk.schemaResponses.schemaResponsesRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
