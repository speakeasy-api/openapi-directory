# Schedules

### Available Operations

* [GetNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [GetNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [UpdateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID

## GetNetworkCameraSchedules

Returns a list of all camera recording schedules.

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
    res, err := s.Schedules.GetNetworkCameraSchedules(ctx, operations.GetNetworkCameraSchedulesRequest{
        NetworkID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraSchedules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidSchedules

List the outage schedule for the SSID

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
    res, err := s.Schedules.GetNetworkWirelessSsidSchedules(ctx, operations.GetNetworkWirelessSsidSchedulesRequest{
        NetworkID: "quo",
        Number: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidSchedules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

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
    res, err := s.Schedules.UpdateNetworkWirelessSsidSchedules(ctx, operations.UpdateNetworkWirelessSsidSchedulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidSchedulesRequestBody{
            Enabled: sdk.Bool(false),
            Ranges: []UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "impedit",
                    EndTime: "temporibus",
                    StartDay: "libero",
                    StartTime: "aliquam",
                },
            },
            RangesInSeconds: []UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 167447,
                    Start: 120809,
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 390349,
                    Start: 379758,
                },
            },
        },
        NetworkID: "quasi",
        Number: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidSchedules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
