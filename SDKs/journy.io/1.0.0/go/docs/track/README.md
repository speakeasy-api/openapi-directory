# Track

## Overview

Endpoints for tracking events.

### Available Operations

* [TrackEvent](#trackevent) - Track event

## TrackEvent

Endpoint used to track an event for a user or an account.

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
    res, err := s.Track.TrackEvent(ctx, operations.TrackEventRequestBody{
        Identification: operations.TrackEventRequestBodyIdentification{
            Account: &operations.TrackEventRequestBodyIdentificationAccount{
                AccountID: sdk.String("laborum"),
                Domain: sdk.String("dolores"),
            },
            User: &operations.TrackEventRequestBodyIdentificationUser{
                Email: sdk.String("Florian.Champlin60@gmail.com"),
                UserID: sdk.String("nemo"),
            },
        },
        Metadata: map[string]interface{}{
            "excepturi": "accusantium",
            "iure": "culpa",
        },
        Name: "doloribus",
        TriggeredAt: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrackEvent201ApplicationJSONObject != nil {
        // handle response
    }
}
```
