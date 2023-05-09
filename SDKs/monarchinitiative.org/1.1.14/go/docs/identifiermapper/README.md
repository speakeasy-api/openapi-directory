# IdentifierMapper

## Overview

mapping and resolution of identifiers

### Available Operations

* [GetIdentifierMapper](#getidentifiermapper) - TODO maps a list of identifiers from a source to a target

## GetIdentifierMapper

TODO maps a list of identifiers from a source to a target

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
    res, err := s.IdentifierMapper.GetIdentifierMapper(ctx, operations.GetIdentifierMapperRequest{
        Source: "sapiente",
        Target: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```
