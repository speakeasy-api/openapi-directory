# History

### Available Operations

* [GetDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [GetOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp

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
    res, err := s.History.GetDeviceCameraAnalyticsZoneHistory(ctx, operations.GetDeviceCameraAnalyticsZoneHistoryRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnumVehicle.ToPointer(),
        Resolution: sdk.Int64(127980),
        Serial: "totam",
        T0: sdk.String("sunt"),
        T1: sdk.String("magnam"),
        Timespan: sdk.Float32(7903.58),
        ZoneID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkAlertsHistory

Return the alert history for this network

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
    res, err := s.History.GetNetworkAlertsHistory(ctx, operations.GetNetworkAlertsHistoryRequest{
        EndingBefore: sdk.String("porro"),
        NetworkID: "aliquid",
        PerPage: sdk.Int64(672865),
        StartingAfter: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAlertsHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

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
    res, err := s.History.GetOrganizationSensorReadingsHistory(ctx, operations.GetOrganizationSensorReadingsHistoryRequest{
        EndingBefore: sdk.String("voluptatibus"),
        Metrics: []string{
            "reiciendis",
        },
        NetworkIds: []string{
            "libero",
            "omnis",
        },
        OrganizationID: "quibusdam",
        PerPage: sdk.Int64(220322),
        Serials: []string{
            "soluta",
            "inventore",
            "beatae",
            "similique",
        },
        StartingAfter: sdk.String("nihil"),
        T0: sdk.String("commodi"),
        T1: sdk.String("deleniti"),
        Timespan: sdk.Float32(4891.64),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSensorReadingsHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
