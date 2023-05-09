# SDK

## Overview

This api converts file formats of OpenXml and OpenOffice documents formats to vector files (e.g., svg)

### Available Operations

* [Svgconvert](#svgconvert) - converts pptx file to svg image

## Svgconvert

converts pptx file to svg image

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
    res, err := s.SDK.Svgconvert(ctx, operations.SvgconvertFileToConvert{
        File: &operations.SvgconvertFileToConvertFile{
            Content: []byte("distinctio"),
            File: "quibusdam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileURL != nil {
        // handle response
    }
}
```
