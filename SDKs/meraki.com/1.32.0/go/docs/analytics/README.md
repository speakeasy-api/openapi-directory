# Analytics

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
    res, err := s.Analytics.GetDeviceCameraAnalyticsLive(ctx, operations.GetDeviceCameraAnalyticsLiveRequest{
        Serial: "voluptatibus",
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
    res, err := s.Analytics.GetDeviceCameraAnalyticsOverview(ctx, operations.GetDeviceCameraAnalyticsOverviewRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsOverviewObjectTypeEnumVehicle.ToPointer(),
        Serial: "itaque",
        T0: sdk.String("alias"),
        T1: sdk.String("nisi"),
        Timespan: sdk.Float32(9315.05),
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
    res, err := s.Analytics.GetDeviceCameraAnalyticsRecent(ctx, operations.GetDeviceCameraAnalyticsRecentRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsRecentObjectTypeEnumPerson.ToPointer(),
        Serial: "laborum",
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
    res, err := s.Analytics.GetDeviceCameraAnalyticsZoneHistory(ctx, operations.GetDeviceCameraAnalyticsZoneHistoryRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnumPerson.ToPointer(),
        Resolution: sdk.Int64(224467),
        Serial: "iusto",
        T0: sdk.String("sit"),
        T1: sdk.String("doloremque"),
        Timespan: sdk.Float32(74.68),
        ZoneID: "officia",
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
    res, err := s.Analytics.GetDeviceCameraAnalyticsZones(ctx, operations.GetDeviceCameraAnalyticsZonesRequest{
        Serial: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsZones200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
