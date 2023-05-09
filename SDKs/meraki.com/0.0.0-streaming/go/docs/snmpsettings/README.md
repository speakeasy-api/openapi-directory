# SNMPSettings

### Available Operations

* [GetNetworkSnmpSettings](#getnetworksnmpsettings) - Return the SNMP settings for a network
* [GetOrganizationSnmp](#getorganizationsnmp) - Return the SNMP settings for an organization

## GetNetworkSnmpSettings

Return the SNMP settings for a network

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
    res, err := s.SNMPSettings.GetNetworkSnmpSettings(ctx, operations.GetNetworkSnmpSettingsRequest{
        NetworkID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSnmpSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSnmp

Return the SNMP settings for an organization

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
    res, err := s.SNMPSettings.GetOrganizationSnmp(ctx, operations.GetOrganizationSnmpRequest{
        OrganizationID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```
