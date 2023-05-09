# VoiceConversion

## Overview

Voice Conversion Request

### Available Operations

* [VoiceConversion](#voiceconversion) - Tell Nexmo if your voice call was successful

## VoiceConversion

Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.

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
    res, err := s.VoiceConversion.VoiceConversion(ctx, operations.VoiceConversionRequest{
        Delivered: shared.DeliveredEnumZero,
        MessageID: "illum",
        Timestamp: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
