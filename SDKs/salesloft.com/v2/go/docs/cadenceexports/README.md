# CadenceExports

## Overview

Cadence Exports

### Available Operations

* [GetV2CadenceExportsIDJSON](#getv2cadenceexportsidjson) - Export a cadence

## GetV2CadenceExportsIDJSON

Exports a cadence as JSON.


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
    res, err := s.CadenceExports.GetV2CadenceExportsIDJSON(ctx, operations.GetV2CadenceExportsIDJSONRequest{
        ID: "bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
