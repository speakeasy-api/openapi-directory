# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [UpdateChannel](#updatechannel) - Update a specific Channel.

## UpdateChannel

Update a specific Channel.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateChannel(ctx, operations.UpdateChannelRequest{
        RequestBody: &operations.UpdateChannelUpdateChannelRequest{
            MessagingServiceSid: sdk.String("nulla"),
            Type: shared.ChannelEnumChannelTypeEnumPrivate.ToPointer(),
        },
        ServiceSid: "illum",
        Sid: "vel",
        XTwilioWebhookEnabled: shared.ChannelEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.UpdateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV3Channel != nil {
        // handle response
    }
}
```
