# SDK

## Overview

The Messages API consolidates and normalises exchanges across all messaging channels. It allows you to use a single API to interact with our various channels such as SMS, MMS, WhatsApp, Viber and Facebook Messenger

### Available Operations

* [SendMessage](#sendmessage) - Send a message to the given channel.

## SendMessage

Send a Message

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/callbacks"
	"net/http"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.SendMessage(ctx, operations.SendMessageRequestBody{}, operations.SendMessageSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendMessage202ApplicationJSONObject != nil {
        // handle response
    }
}
```
