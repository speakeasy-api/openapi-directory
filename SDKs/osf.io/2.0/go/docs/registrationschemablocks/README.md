# RegistrationSchemaBlocks

## Overview

Registration Schema Blocks are read-only entities, they represent question prompts and form inputs known as "blocks" that make up a Registration Schemas. Each block has a designated `block_type` that determines what type of information that Schema Block's corresponding block in the Schema Response.

### Available Operations

* [GetSchemaResponsesSchemaResponseIDSchemaBlocksSchemaResponseBlockID](#getschemaresponsesschemaresponseidschemablocksschemaresponseblockid) - Retrieve a Registration Schema Block
* [SchemaResponseBlocksRead](#schemaresponseblocksread) - Retrieve a list of Registration Schema Blocks for a Schema Response

## GetSchemaResponsesSchemaResponseIDSchemaBlocksSchemaResponseBlockID

This returns a Registration Schema Block by it's ID.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
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
    res, err := s.RegistrationSchemaBlocks.GetSchemaResponsesSchemaResponseIDSchemaBlocksSchemaResponseBlockID(ctx, operations.GetSchemaResponsesSchemaResponseIDSchemaBlocksSchemaResponseBlockIDRequest{
        SchemaResponseBlockID: "perferendis",
        SchemaResponseID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## SchemaResponseBlocksRead

This returns a list of all the Registration Schema Blocks are contained in Registration Schema.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
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
    res, err := s.RegistrationSchemaBlocks.SchemaResponseBlocksRead(ctx, operations.SchemaResponseBlocksReadRequest{
        SchemaResponseID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
