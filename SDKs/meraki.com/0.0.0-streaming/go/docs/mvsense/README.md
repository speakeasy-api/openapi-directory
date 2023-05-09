# MVSense

### Available Operations

* [GetDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [GetDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [GetDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [GetDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera

## GetDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MVSense.GetDeviceCameraAnalyticsLive(ctx, operations.GetDeviceCameraAnalyticsLiveRequest{
        Serial: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsLive200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MVSense.GetDeviceCameraAnalyticsOverview(ctx, operations.GetDeviceCameraAnalyticsOverviewRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsOverviewObjectTypeEnumVehicle.ToPointer(),
        Serial: "temporibus",
        T0: sdk.String("ullam"),
        T1: sdk.String("adipisci"),
        Timespan: sdk.Float32(7383.91),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsOverview200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MVSense.GetDeviceCameraAnalyticsRecent(ctx, operations.GetDeviceCameraAnalyticsRecentRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsRecentObjectTypeEnumVehicle.ToPointer(),
        Serial: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsRecent200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsZoneHistory

Return historical records for analytic zones

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MVSense.GetDeviceCameraAnalyticsZoneHistory(ctx, operations.GetDeviceCameraAnalyticsZoneHistoryRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnumVehicle.ToPointer(),
        Resolution: sdk.Int64(201517),
        Serial: "culpa",
        T0: sdk.String("corrupti"),
        T1: sdk.String("pariatur"),
        Timespan: sdk.Float32(5196.43),
        ZoneID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsZones

Returns all configured analytic zones for this camera

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MVSense.GetDeviceCameraAnalyticsZones(ctx, operations.GetDeviceCameraAnalyticsZonesRequest{
        Serial: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsZones200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
