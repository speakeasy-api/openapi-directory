# PiiKeys

### Available Operations

* [GetNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier

## GetNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
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
    res, err := s.PiiKeys.GetNetworkPiiPiiKeys(ctx, operations.GetNetworkPiiPiiKeysRequest{
        BluetoothMac: sdk.String("delectus"),
        Email: sdk.String("Ernesto98@hotmail.com"),
        Imei: sdk.String("provident"),
        Mac: sdk.String("nesciunt"),
        NetworkID: "nihil",
        Serial: sdk.String("accusamus"),
        Username: sdk.String("Chadrick_Goldner43"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiPiiKeys200ApplicationJSONObject != nil {
        // handle response
    }
}
```
