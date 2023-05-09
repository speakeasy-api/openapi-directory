# MediaTypes

## Overview

Information about media types

### Available Operations

* [GetResourcesMediaTypesFormat](#getresourcesmediatypesformat) - Get MediaTypes

## GetResourcesMediaTypesFormat

Information about media types

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
    res, err := s.MediaTypes.GetResourcesMediaTypesFormat(ctx, operations.GetResourcesMediaTypesFormatRequest{
        Format: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaTypeHolderWrappeds != nil {
        // handle response
    }
}
```
