# Tracking

## Overview

[Track packages](https://www.shipengine.com/docs/tracking/) across any of our 20+ supported carrier accounts and create tracking events to keep your customers up-to-date. Easily integrate real-time tracking information for shipments into your app, email, or SMS.


Learn how to use ShipEngine to track any package with a carrier and a tracking number
<https://www.shipengine.com/docs/tracking/>
### Available Operations

* [GetTrackingLog](#gettrackinglog) - Get Tracking Information
* [StartTracking](#starttracking) - Start Tracking a Package
* [StopTracking](#stoptracking) - Stop Tracking a Package

## GetTrackingLog

Retrieve package tracking information

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tracking.GetTrackingLog(ctx, operations.GetTrackingLogRequest{
        CarrierCode: sdk.String("esse"),
        TrackingNumber: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTrackingLogResponseBody != nil {
        // handle response
    }
}
```

## StartTracking

Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package,
and receive notifications via webhooks whenever the shipping status changes.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tracking.StartTracking(ctx, operations.StartTrackingRequest{
        CarrierCode: sdk.String("a"),
        TrackingNumber: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## StopTracking

Unsubscribe from tracking updates for a package.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tracking.StopTracking(ctx, operations.StopTrackingRequest{
        CarrierCode: sdk.String("sint"),
        TrackingNumber: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```
