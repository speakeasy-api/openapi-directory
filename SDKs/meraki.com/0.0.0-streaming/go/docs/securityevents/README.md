# SecurityEvents

### Available Operations

* [GetNetworkSecurityEvents](#getnetworksecurityevents) - List the security events (intrusion detection only) for a network
* [GetOrganizationSecurityEvents](#getorganizationsecurityevents) - List the security events (intrusion detection only) for an organization

## GetNetworkSecurityEvents

List the security events (intrusion detection only) for a network

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
    res, err := s.SecurityEvents.GetNetworkSecurityEvents(ctx, operations.GetNetworkSecurityEventsRequest{
        EndingBefore: sdk.String("neque"),
        NetworkID: "facere",
        PerPage: sdk.Int64(307173),
        StartingAfter: sdk.String("quos"),
        T0: sdk.String("doloribus"),
        T1: sdk.String("fugiat"),
        Timespan: sdk.Float32(6685.77),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSecurityEvents

List the security events (intrusion detection only) for an organization

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
    res, err := s.SecurityEvents.GetOrganizationSecurityEvents(ctx, operations.GetOrganizationSecurityEventsRequest{
        EndingBefore: sdk.String("delectus"),
        OrganizationID: "velit",
        PerPage: sdk.Int64(110522),
        StartingAfter: sdk.String("nesciunt"),
        T0: sdk.String("similique"),
        T1: sdk.String("illo"),
        Timespan: sdk.Float32(9979.95),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
