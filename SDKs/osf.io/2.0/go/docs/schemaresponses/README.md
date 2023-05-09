# SchemaResponses

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

* [SchemaResponseDelete](#schemaresponsedelete) - Delete a Incomplete Schema Response
* [SchemaResponsePatch](#schemaresponsepatch) - Update a Registration's Schema Response
* [SchemaResponsePpost](#schemaresponseppost) - Create a new Schema Response
* [SchemaResponsesList](#schemaresponseslist) - List all Schema Responses
* [SchemaResponsesRead](#schemaresponsesread) - Retrieve a Schema Response

## SchemaResponseDelete

This endpoint deletes a new Schema Response. Schema Responses can only be deleted in the `in_progress` state. Once a Schema Response is transitioned to an `approved` it is immutable and another Schema Response must be created to update the Schema Response for that registration.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SchemaResponses.SchemaResponseDelete(ctx, operations.SchemaResponseDeleteRequest{
        SchemaResponseID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SchemaResponsePatch

Patching to this endpoint allows one to directly edit the revision responses on the Schema Response of a Registration if that Schema Response is in an `in_progress` state.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SchemaResponses.SchemaResponsePatch(ctx, operations.SchemaResponsePatchRequest{
        RequestBody: operations.SchemaResponsePatchSchemaResponsesInput{
            Attributes: operations.SchemaResponsePatchSchemaResponsesAttributesInput{
                DateCreated: sdk.Int64(577229),
                DateModified: sdk.Int64(699098),
                DateSubmitted: sdk.Int64(237893),
                IsOriginalResponse: sdk.Bool(false),
                IsPendingCurrentUserApproval: sdk.Bool(false),
                ReviewsState: operations.SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnumPendingModeration.ToPointer(),
                RevisionJustification: sdk.String("earum"),
                RevisionResponses: map[string]interface{}{
                    "iste": "dolorum",
                    "deleniti": "pariatur",
                },
            },
            Links: &operations.SchemaResponsePatchSchemaResponsesLinks{
                Self: sdk.String("provident"),
            },
            Relationships: &operations.SchemaResponsePatchSchemaResponsesRelationships{
                Actions: sdk.String("nobis"),
                InitiatedBy: sdk.String("libero"),
                Registration: sdk.String("delectus"),
                RegistrationSchema: sdk.String("quaerat"),
            },
            Type: "quos",
        },
        SchemaResponseID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## SchemaResponsePpost

This endpoint creates a new Schema Response with an `in_progress` state. A new response can only be created if the current schema response is in an `approved` state.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SchemaResponses.SchemaResponsePpost(ctx, operations.SchemaResponsePpostSchemaResponsesInput{
        Attributes: operations.SchemaResponsePpostSchemaResponsesAttributesInput{
            DateCreated: sdk.Int64(212390),
            DateModified: sdk.Int64(209843),
            DateSubmitted: sdk.Int64(222443),
            IsOriginalResponse: sdk.Bool(false),
            IsPendingCurrentUserApproval: sdk.Bool(false),
            ReviewsState: operations.SchemaResponsePpostSchemaResponsesAttributesReviewsStateEnumInitial.ToPointer(),
            RevisionJustification: sdk.String("ipsum"),
            RevisionResponses: map[string]interface{}{
                "excepturi": "cum",
                "voluptate": "dignissimos",
                "reiciendis": "amet",
                "dolorum": "numquam",
            },
        },
        Links: &operations.SchemaResponsePpostSchemaResponsesLinks{
            Self: sdk.String("veritatis"),
        },
        Relationships: &operations.SchemaResponsePpostSchemaResponsesRelationships{
            Actions: sdk.String("ipsa"),
            InitiatedBy: sdk.String("ipsa"),
            Registration: sdk.String("iure"),
            RegistrationSchema: sdk.String("odio"),
        },
        Type: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## SchemaResponsesList

This retrieves a paginated list of all active Schema Responses that are public.
#### Returns
Returns a JSON object containing `data` and `links` keys. The `data` key contains an array of 10 Schema Responses. Each resource in the array is a separate Registration Schemas object. The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SchemaResponses.SchemaResponsesList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## SchemaResponsesRead

This retrieves a single Schema response using it's id.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SchemaResponses.SchemaResponsesRead(ctx, operations.SchemaResponsesReadRequest{
        SchemaResponseID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
