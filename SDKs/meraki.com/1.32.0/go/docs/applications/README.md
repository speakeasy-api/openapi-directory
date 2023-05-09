# Applications

### Available Operations

* [GetNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [GetOrganizationInsightApplications](#getorganizationinsightapplications) - List all Insight tracked applications

## GetNetworkInsightApplicationHealthByTime

Get application health by time

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
    res, err := s.Applications.GetNetworkInsightApplicationHealthByTime(ctx, operations.GetNetworkInsightApplicationHealthByTimeRequest{
        ApplicationID: "deleniti",
        NetworkID: "expedita",
        Resolution: sdk.Int64(944203),
        T0: sdk.String("excepturi"),
        T1: sdk.String("aliquid"),
        Timespan: sdk.Float32(1513.85),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkInsightApplicationHealthByTime200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInsightApplications

List all Insight tracked applications

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
    res, err := s.Applications.GetOrganizationInsightApplications(ctx, operations.GetOrganizationInsightApplicationsRequest{
        OrganizationID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInsightApplications200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
