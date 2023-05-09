# Resources

## Overview

Global Search

### Available Operations

* [GetResourcesJSON](#getresourcesjson) - Get Resources by search query

## GetResourcesJSON

Global search

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
    res, err := s.Resources.GetResourcesJSON(ctx, operations.GetResourcesJSONRequest{
        Q: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceWrappeds != nil {
        // handle response
    }
}
```
