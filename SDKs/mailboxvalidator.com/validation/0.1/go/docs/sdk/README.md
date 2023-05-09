# SDK

## Overview

The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format. Refer to https://www.mailboxvalidator.com for further information.

### Available Operations

* [GetV1ValidationSingle](#getv1validationsingle) - The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.

## GetV1ValidationSingle

The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.

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
    res, err := s.SDK.GetV1ValidationSingle(ctx, operations.GetV1ValidationSingleRequest{
        Email: "Linda.Oberbrunner@yahoo.com",
        Format: operations.GetV1ValidationSingleFormatEnumJSON.ToPointer(),
        Key: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1ValidationSingle200ApplicationJSONString != nil {
        // handle response
    }
}
```
