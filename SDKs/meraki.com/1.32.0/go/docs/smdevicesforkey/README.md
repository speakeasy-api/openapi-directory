# SmDevicesForKey

### Available Operations

* [GetNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

## GetNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
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
    res, err := s.SmDevicesForKey.GetNetworkPiiSmDevicesForKey(ctx, operations.GetNetworkPiiSmDevicesForKeyRequest{
        BluetoothMac: sdk.String("voluptatem"),
        Email: sdk.String("Kacie.Crona@hotmail.com"),
        Imei: sdk.String("corrupti"),
        Mac: sdk.String("quibusdam"),
        NetworkID: "odio",
        Serial: sdk.String("in"),
        Username: sdk.String("Kellen13"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiSmDevicesForKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```
