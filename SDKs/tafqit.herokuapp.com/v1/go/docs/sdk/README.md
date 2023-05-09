# SDK

## Overview

Convert numbers to their Arabic text representation

### Available Operations

* [Convert](#convert) - Convert the number into its Arabic text representation
حول العدد إلى ما يقابله كتابة

## Convert

Convert the number into its Arabic text representation
حول العدد إلى ما يقابله كتابة

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
    res, err := s.SDK.Convert(ctx, operations.ConvertRequestBody{
        HundredsForm: sdk.String("مائة"),
        TheNumber: sdk.String("2519.50"),
        Unit: sdk.String(" ريال سعودي"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
