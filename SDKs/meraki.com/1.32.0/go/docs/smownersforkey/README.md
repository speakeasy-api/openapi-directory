# SmOwnersForKey

### Available Operations

* [GetNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

## GetNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

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
    res, err := s.SmOwnersForKey.GetNetworkPiiSmOwnersForKey(ctx, operations.GetNetworkPiiSmOwnersForKeyRequest{
        BluetoothMac: sdk.String("voluptates"),
        Email: sdk.String("Rowland.Johnson@gmail.com"),
        Imei: sdk.String("iste"),
        Mac: sdk.String("repellat"),
        NetworkID: "omnis",
        Serial: sdk.String("vero"),
        Username: sdk.String("Dayna31"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiSmOwnersForKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```
