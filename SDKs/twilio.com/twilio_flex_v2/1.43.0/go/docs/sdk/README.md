# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateWebChannel](#createwebchannel)

## CreateWebChannel

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
    res, err := s.SDK.CreateWebChannel(ctx, operations.CreateWebChannelCreateWebChannelRequest{
        AddressSid: "unde",
        ChatFriendlyName: sdk.String("nulla"),
        CustomerFriendlyName: sdk.String("corrupti"),
        PreEngagementData: sdk.String("illum"),
    }, operations.CreateWebChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV2WebChannel != nil {
        // handle response
    }
}
```
