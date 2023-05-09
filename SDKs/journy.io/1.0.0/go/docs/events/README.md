# Events

## Overview

Endpoints for listing events.

### Available Operations

* [GetEvents](#getevents) - Get events
* [~~TrackJourneyEvent~~](#trackjourneyevent) - Track event :warning: **Deprecated**

## GetEvents

Endpoint to list events.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.GetEvents(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~TrackJourneyEvent~~

Endpoint used to track an event for a user or an account.

This endpoint is moved to [Track](#operation/trackEvent).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Events.TrackJourneyEvent(ctx, operations.TrackJourneyEventRequestBody{
        Identification: operations.TrackJourneyEventRequestBodyIdentification{
            Account: &operations.TrackJourneyEventRequestBodyIdentificationAccount{
                AccountID: sdk.String("saepe"),
                Domain: sdk.String("fuga"),
            },
            User: &operations.TrackJourneyEventRequestBodyIdentificationUser{
                Email: sdk.String("Floy_Moore@yahoo.com"),
                UserID: sdk.String("quidem"),
            },
        },
        Metadata: map[string]interface{}{
            "ipsa": "reiciendis",
        },
        Name: "est",
        TriggeredAt: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrackJourneyEvent201ApplicationJSONObject != nil {
        // handle response
    }
}
```
