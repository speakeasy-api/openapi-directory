# Schemas

### Available Operations

* [GetSchema](#getschema) - Get XSD schema
* [GetSchemas](#getschemas) - Get a list of all available schemas

## GetSchema

Returns the XSD schema for the specified data type

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
    res, err := s.Schemas.GetSchema(ctx, operations.GetSchemaRequest{
        APIVersion: "officia",
        Authorization: "saepe",
        DtoDataType: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSchema200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetSchemas

Returns a collection of links to all the available data object schemas

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
    res, err := s.Schemas.GetSchemas(ctx, operations.GetSchemasRequest{
        APIVersion: "repudiandae",
        Authorization: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```
