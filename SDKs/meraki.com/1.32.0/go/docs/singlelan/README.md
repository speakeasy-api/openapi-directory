# SingleLan

### Available Operations

* [GetNetworkApplianceSingleLan](#getnetworkappliancesinglelan) - Return single LAN configuration
* [UpdateNetworkApplianceSingleLan](#updatenetworkappliancesinglelan) - Update single LAN configuration

## GetNetworkApplianceSingleLan

Return single LAN configuration

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
    res, err := s.SingleLan.GetNetworkApplianceSingleLan(ctx, operations.GetNetworkApplianceSingleLanRequest{
        NetworkID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSingleLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSingleLan

Update single LAN configuration

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
    res, err := s.SingleLan.UpdateNetworkApplianceSingleLan(ctx, operations.UpdateNetworkApplianceSingleLanRequest{
        RequestBody: &operations.UpdateNetworkApplianceSingleLanRequestBody{
            ApplianceIP: sdk.String("perferendis"),
            Ipv6: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6{
                Enabled: sdk.Bool(false),
                PrefixAssignments: []UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                    operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "soluta",
                                "amet",
                            },
                            Type: operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("tempore"),
                        StaticPrefix: sdk.String("accusamus"),
                    },
                    operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "et",
                                "similique",
                                "distinctio",
                                "excepturi",
                            },
                            Type: operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("quisquam"),
                        StaticPrefix: sdk.String("expedita"),
                    },
                    operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "natus",
                            },
                            Type: operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("voluptas"),
                        StaticPrefix: sdk.String("nemo"),
                    },
                },
            },
            MandatoryDhcp: &operations.UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp{
                Enabled: sdk.Bool(false),
            },
            Subnet: sdk.String("mollitia"),
        },
        NetworkID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSingleLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```
