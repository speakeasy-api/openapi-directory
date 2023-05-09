# Organizations

### Available Operations

* [ClaimIntoOrganization](#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [CloneOrganization](#cloneorganization) - Create a new organization by cloning the addressed organization
* [GetOrganization](#getorganization) - Return an organization
* [GetOrganizationDeviceStatuses](#getorganizationdevicestatuses) - List the status of every Meraki device in the organization
* [GetOrganizationInventory](#getorganizationinventory) - Return the inventory for an organization
* [GetOrganizationThirdPartyVPNPeers](#getorganizationthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [GetOrganizationUplinksLossAndLatency](#getorganizationuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [GetOrganizations](#getorganizations) - List the organizations that the user has privileges on
* [UpdateOrganizationThirdPartyVPNPeers](#updateorganizationthirdpartyvpnpeers) - Update the third party VPN peers for an organization

## ClaimIntoOrganization

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

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
    res, err := s.Organizations.ClaimIntoOrganization(ctx, operations.ClaimIntoOrganizationRequest{
        RequestBody: &operations.ClaimIntoOrganizationRequestBody{
            Licenses: []ClaimIntoOrganizationRequestBodyLicenses{
                operations.ClaimIntoOrganizationRequestBodyLicenses{
                    Key: "beatae",
                    Mode: operations.ClaimIntoOrganizationRequestBodyLicensesModeEnumRenew.ToPointer(),
                },
                operations.ClaimIntoOrganizationRequestBodyLicenses{
                    Key: "omnis",
                    Mode: operations.ClaimIntoOrganizationRequestBodyLicensesModeEnumAddDevices.ToPointer(),
                },
            },
            Orders: []string{
                "est",
                "culpa",
                "voluptatem",
            },
            Serials: []string{
                "officiis",
                "architecto",
                "fuga",
                "pariatur",
            },
        },
        OrganizationID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimIntoOrganization200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CloneOrganization

Create a new organization by cloning the addressed organization

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
    res, err := s.Organizations.CloneOrganization(ctx, operations.CloneOrganizationRequest{
        RequestBody: operations.CloneOrganizationRequestBody{
            Name: "Mary Leuschke",
        },
        OrganizationID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneOrganization201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganization

Return an organization

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
    res, err := s.Organizations.GetOrganization(ctx, operations.GetOrganizationRequest{
        OrganizationID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganization200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationDeviceStatuses

List the status of every Meraki device in the organization

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
    res, err := s.Organizations.GetOrganizationDeviceStatuses(ctx, operations.GetOrganizationDeviceStatusesRequest{
        OrganizationID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDeviceStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInventory

Return the inventory for an organization

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
    res, err := s.Organizations.GetOrganizationInventory(ctx, operations.GetOrganizationInventoryRequest{
        IncludeLicenseInfo: sdk.Bool(false),
        OrganizationID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationThirdPartyVPNPeers

Return the third party VPN peers for an organization

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
    res, err := s.Organizations.GetOrganizationThirdPartyVPNPeers(ctx, operations.GetOrganizationThirdPartyVPNPeersRequest{
        OrganizationID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationThirdPartyVPNPeers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

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
    res, err := s.Organizations.GetOrganizationUplinksLossAndLatency(ctx, operations.GetOrganizationUplinksLossAndLatencyRequest{
        IP: sdk.String("ratione"),
        OrganizationID: "ullam",
        T0: sdk.String("perferendis"),
        T1: sdk.String("illum"),
        Timespan: sdk.Float32(5181.5),
        Uplink: operations.GetOrganizationUplinksLossAndLatencyUplinkEnumWan2.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationUplinksLossAndLatency200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizations

List the organizations that the user has privileges on

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organizations.GetOrganizations(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizations200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationThirdPartyVPNPeers

Update the third party VPN peers for an organization

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
    res, err := s.Organizations.UpdateOrganizationThirdPartyVPNPeers(ctx, operations.UpdateOrganizationThirdPartyVPNPeersRequest{
        RequestBody: operations.UpdateOrganizationThirdPartyVPNPeersRequestBody{
            Peers: []UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers{
                operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumTwo.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []string{
                            "culpa",
                            "dolor",
                        },
                        ChildCipherAlgo: []string{
                            "inventore",
                            "deleniti",
                        },
                        ChildLifetime: sdk.Int64(85311),
                        ChildPfsGroup: []string{
                            "dolor",
                            "consequatur",
                        },
                        IkeAuthAlgo: []string{
                            "sit",
                        },
                        IkeCipherAlgo: []string{
                            "fugit",
                            "ab",
                        },
                        IkeDiffieHellmanGroup: []string{
                            "quae",
                            "dolor",
                            "fugiat",
                        },
                        IkeLifetime: sdk.Int64(369490),
                        IkePrfAlgo: []UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumDefault,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("quas"),
                    Name: "Edmund Torp",
                    NetworkTags: []string{
                        "veniam",
                    },
                    PrivateSubnets: []string{
                        "expedita",
                    },
                    PublicIP: "eum",
                    RemoteID: sdk.String("vel"),
                    Secret: "voluptatum",
                },
                operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumOne.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []string{
                            "ab",
                            "porro",
                        },
                        ChildCipherAlgo: []string{
                            "nobis",
                            "laboriosam",
                        },
                        ChildLifetime: sdk.Int64(927212),
                        ChildPfsGroup: []string{
                            "voluptatem",
                        },
                        IkeAuthAlgo: []string{
                            "necessitatibus",
                            "quasi",
                        },
                        IkeCipherAlgo: []string{
                            "at",
                            "vero",
                        },
                        IkeDiffieHellmanGroup: []string{
                            "harum",
                            "sequi",
                            "doloribus",
                        },
                        IkeLifetime: sdk.Int64(918092),
                        IkePrfAlgo: []UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfmd5,
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfmd5,
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("officia"),
                    Name: "Marjorie Hickle",
                    NetworkTags: []string{
                        "ducimus",
                    },
                    PrivateSubnets: []string{
                        "fuga",
                    },
                    PublicIP: "laudantium",
                    RemoteID: sdk.String("incidunt"),
                    Secret: "quasi",
                },
                operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumTwo.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []string{
                            "dicta",
                            "nisi",
                            "consequuntur",
                            "consectetur",
                        },
                        ChildCipherAlgo: []string{
                            "cupiditate",
                        },
                        ChildLifetime: sdk.Int64(970732),
                        ChildPfsGroup: []string{
                            "alias",
                            "omnis",
                            "eos",
                        },
                        IkeAuthAlgo: []string{
                            "iste",
                            "magni",
                            "inventore",
                        },
                        IkeCipherAlgo: []string{
                            "accusamus",
                            "voluptatibus",
                            "distinctio",
                        },
                        IkeDiffieHellmanGroup: []string{
                            "delectus",
                            "minima",
                            "praesentium",
                        },
                        IkeLifetime: sdk.Int64(802692),
                        IkePrfAlgo: []UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("commodi"),
                    Name: "Leslie Lebsack",
                    NetworkTags: []string{
                        "vero",
                        "voluptatem",
                        "ipsam",
                    },
                    PrivateSubnets: []string{
                        "alias",
                        "quasi",
                    },
                    PublicIP: "non",
                    RemoteID: sdk.String("maiores"),
                    Secret: "enim",
                },
                operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumTwo.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []string{
                            "deserunt",
                            "esse",
                            "nemo",
                            "reprehenderit",
                        },
                        ChildCipherAlgo: []string{
                            "quis",
                            "sint",
                            "accusamus",
                        },
                        ChildLifetime: sdk.Int64(774684),
                        ChildPfsGroup: []string{
                            "necessitatibus",
                            "asperiores",
                            "ex",
                            "voluptas",
                        },
                        IkeAuthAlgo: []string{
                            "delectus",
                            "quae",
                            "minus",
                            "fuga",
                        },
                        IkeCipherAlgo: []string{
                            "consectetur",
                            "velit",
                            "atque",
                        },
                        IkeDiffieHellmanGroup: []string{
                            "impedit",
                        },
                        IkeLifetime: sdk.Int64(166047),
                        IkePrfAlgo: []UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                            operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfmd5,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("iusto"),
                    Name: "Lillian Kunde",
                    NetworkTags: []string{
                        "quibusdam",
                        "iure",
                        "odit",
                    },
                    PrivateSubnets: []string{
                        "vel",
                        "magnam",
                        "quibusdam",
                        "inventore",
                    },
                    PublicIP: "facere",
                    RemoteID: sdk.String("libero"),
                    Secret: "architecto",
                },
            },
        },
        OrganizationID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationThirdPartyVPNPeers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
