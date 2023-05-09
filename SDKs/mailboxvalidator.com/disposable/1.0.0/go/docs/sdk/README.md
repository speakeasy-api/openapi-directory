# SDK

## Overview

The MailboxValidator Disposable Email Checker API checks if a single email address is from a disposable email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-disposable for further information.

### Available Operations

* [GetV1EmailDisposable](#getv1emaildisposable) - The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.

## GetV1EmailDisposable

The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.

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
    res, err := s.SDK.GetV1EmailDisposable(ctx, operations.GetV1EmailDisposableRequest{
        Email: "Linda.Oberbrunner@yahoo.com",
        Format: operations.GetV1EmailDisposableFormatEnumJSON.ToPointer(),
        Key: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1EmailDisposable200ApplicationJSONString != nil {
        // handle response
    }
}
```
