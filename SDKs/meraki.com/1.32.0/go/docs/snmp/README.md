# Snmp

### Available Operations

* [GetNetworkSnmp](#getnetworksnmp) - Return the SNMP settings for a network
* [GetOrganizationSnmp](#getorganizationsnmp) - Return the SNMP settings for an organization
* [UpdateNetworkSnmp](#updatenetworksnmp) - Update the SNMP settings for a network
* [UpdateOrganizationSnmp](#updateorganizationsnmp) - Update the SNMP settings for an organization

## GetNetworkSnmp

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
    res, err := s.Snmp.GetNetworkSnmp(ctx, operations.GetNetworkSnmpRequest{
        NetworkID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSnmp200ApplicationJSONObject != nil {
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
    res, err := s.Snmp.GetOrganizationSnmp(ctx, operations.GetOrganizationSnmpRequest{
        OrganizationID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSnmp

Update the SNMP settings for a network

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
    res, err := s.Snmp.UpdateNetworkSnmp(ctx, operations.UpdateNetworkSnmpRequest{
        RequestBody: &operations.UpdateNetworkSnmpRequestBody{
            Access: operations.UpdateNetworkSnmpRequestBodyAccessEnumNone.ToPointer(),
            CommunityString: sdk.String("dolorem"),
            Users: []UpdateNetworkSnmpRequestBodyUsers{
                operations.UpdateNetworkSnmpRequestBodyUsers{
                    Passphrase: "nam",
                    Username: "Matt_Gutmann18",
                },
                operations.UpdateNetworkSnmpRequestBodyUsers{
                    Passphrase: "repudiandae",
                    Username: "Shirley_Conn5",
                },
                operations.UpdateNetworkSnmpRequestBodyUsers{
                    Passphrase: "assumenda",
                    Username: "Stefanie_Bartoletti",
                },
                operations.UpdateNetworkSnmpRequestBodyUsers{
                    Passphrase: "quidem",
                    Username: "Rey.Shanahan",
                },
            },
        },
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationSnmp

Update the SNMP settings for an organization

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
    res, err := s.Snmp.UpdateOrganizationSnmp(ctx, operations.UpdateOrganizationSnmpRequest{
        RequestBody: &operations.UpdateOrganizationSnmpRequestBody{
            PeerIps: []string{
                "maxime",
                "maxime",
            },
            V2cEnabled: sdk.Bool(false),
            V3AuthMode: operations.UpdateOrganizationSnmpRequestBodyV3AuthModeEnumSha.ToPointer(),
            V3AuthPass: sdk.String("ipsam"),
            V3Enabled: sdk.Bool(false),
            V3PrivMode: operations.UpdateOrganizationSnmpRequestBodyV3PrivModeEnumDes.ToPointer(),
            V3PrivPass: sdk.String("animi"),
        },
        OrganizationID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```
