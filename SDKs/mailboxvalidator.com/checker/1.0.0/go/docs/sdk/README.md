# SDK

## Overview

The MailboxValidator Free Email Checker checks if a single email address is from a free email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-freem for further information.

### Available Operations

* [GetV1EmailFree](#getv1emailfree) - The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.

## GetV1EmailFree

The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.

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
    res, err := s.SDK.GetV1EmailFree(ctx, operations.GetV1EmailFreeRequest{
        Email: "Linda.Oberbrunner@yahoo.com",
        Format: operations.GetV1EmailFreeFormatEnumJSON.ToPointer(),
        Key: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1EmailFree200ApplicationJSONString != nil {
        // handle response
    }
}
```
