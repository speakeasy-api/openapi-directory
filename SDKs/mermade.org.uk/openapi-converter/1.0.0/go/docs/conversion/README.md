# Conversion

## Overview

Conversion functions

### Available Operations

* [Convert](#convert) - Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 
* [ConvertURL](#converturl) - Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

## Convert

Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 

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
    res, err := s.Conversion.Convert(ctx, operations.ConvertRequestBody{
        Filename: sdk.String("distinctio"),
        Source: sdk.String("quibusdam"),
        Validate: operations.ConvertRequestBodyValidateEnumOn.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Convert200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## ConvertURL

Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

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
    res, err := s.Conversion.ConvertURL(ctx, operations.ConvertURLRequest{
        URL: "https://tidy-mascara.org",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConvertURL200ApplicationJSONAny != nil {
        // handle response
    }
}
```
