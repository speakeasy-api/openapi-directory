# Fields

### Available Operations

* [UpdateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device

## UpdateNetworkSmDevicesFields

Modify the fields of a device

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
    res, err := s.Fields.UpdateNetworkSmDevicesFields(ctx, operations.UpdateNetworkSmDevicesFieldsRequest{
        RequestBody: operations.UpdateNetworkSmDevicesFieldsRequestBody{
            DeviceFields: operations.UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields{
                Name: sdk.String("Lawrence Legros"),
                Notes: sdk.String("fugit"),
            },
            ID: sdk.String("bc9c3221-697b-4188-8fcb-b2b93c15f670"),
            Serial: sdk.String("libero"),
            WifiMac: sdk.String("at"),
        },
        NetworkID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSmDevicesFields200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
