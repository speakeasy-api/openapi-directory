# BandwidthUsageHistory

### Available Operations

* [GetNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [GetOrganizationClientsBandwidthUsageHistory](#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

## GetNetworkClientsBandwidthUsageHistory

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

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
    res, err := s.BandwidthUsageHistory.GetNetworkClientsBandwidthUsageHistory(ctx, operations.GetNetworkClientsBandwidthUsageHistoryRequest{
        EndingBefore: sdk.String("cumque"),
        NetworkID: "aliquam",
        PerPage: sdk.Int64(677895),
        StartingAfter: sdk.String("deserunt"),
        T0: sdk.String("ad"),
        T1: sdk.String("reiciendis"),
        Timespan: sdk.Float32(1964.51),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationClientsBandwidthUsageHistory

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

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
    res, err := s.BandwidthUsageHistory.GetOrganizationClientsBandwidthUsageHistory(ctx, operations.GetOrganizationClientsBandwidthUsageHistoryRequest{
        OrganizationID: "porro",
        T0: sdk.String("laborum"),
        T1: sdk.String("nobis"),
        Timespan: sdk.Float32(8429.74),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
