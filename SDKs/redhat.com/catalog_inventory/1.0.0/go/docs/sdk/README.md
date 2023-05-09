# SDK

## Overview

Catalog Inventory

### Available Operations

* [GetDocumentation](#getdocumentation) - Return this API document in JSON format
* [PostGraphQL](#postgraphql) - Perform a GraphQL Query

## GetDocumentation

Return this API document in JSON format

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDocumentation(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDocumentation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostGraphQL

Performs a GraphQL Query

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostGraphQL(ctx, shared.GraphQLRequest{
        OperationName: sdk.String("corrupti"),
        Query: "provident",
        Variables: map[string]interface{}{
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GraphQLResponse != nil {
        // handle response
    }
}
```
