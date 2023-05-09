# SMSConversion

## Overview

SMS Conversion Request

### Available Operations

* [SmsConversion](#smsconversion) - Tell Nexmo if your SMS message was successful

## SmsConversion

Send a Conversion API request with information about the SMS message identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                APIKey: "YOUR_API_KEY_HERE",
                APISecret: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.SMSConversion.SmsConversion(ctx, operations.SmsConversionRequest{
        Delivered: shared.DeliveredEnumOne,
        MessageID: "unde",
        Timestamp: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
