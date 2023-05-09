# CadenceImports

## Overview

Cadence Importing

### Available Operations

* [PostV2CadenceImportsJSON](#postv2cadenceimportsjson) - Import cadences from JSON

## PostV2CadenceImportsJSON

New cadences can be created or steps can be imported onto existing cadences which do not have steps.
<a href="/cadence-imports.html" target="_blank" rel="noopener noreferrer">Visit here for more details</a>.


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
    res, err := s.CadenceImports.PostV2CadenceImportsJSON(ctx, operations.PostV2CadenceImportsJSONRequestBody{
        CadenceContent: map[string]interface{}{
            "quasi": "similique",
        },
        Settings: map[string]interface{}{
            "aliquid": "tenetur",
            "quae": "earum",
            "vel": "in",
        },
        SharingSettings: map[string]interface{}{
            "libero": "illum",
            "soluta": "accusantium",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
