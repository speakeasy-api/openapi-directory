# Tba

## Overview

Calls that expose TBA internals or status.

### Available Operations

* [GetStatus](#getstatus) - Returns API status, and TBA status information.

## GetStatus

Returns API status, and TBA status information.

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
    res, err := s.Tba.GetStatus(ctx, operations.GetStatusRequest{
        IfNoneMatch: sdk.String("provident"),
    }, operations.GetStatusSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIStatus != nil {
        // handle response
    }
}
```
