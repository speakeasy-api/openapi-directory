# ThirdPartyVPNPeers

### Available Operations

* [GetOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [UpdateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization

## GetOrganizationApplianceVPNThirdPartyVPNPeers

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
    res, err := s.ThirdPartyVPNPeers.GetOrganizationApplianceVPNThirdPartyVPNPeers(ctx, operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest{
        OrganizationID: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceVPNThirdPartyVPNPeers

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
    res, err := s.ThirdPartyVPNPeers.UpdateOrganizationApplianceVPNThirdPartyVPNPeers(ctx, operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest{
        RequestBody: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody{
            Peers: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumTwo.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumTripledes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes192,
                        },
                        ChildLifetime: sdk.Int64(338109),
                        ChildPfsGroup: []string{
                            "deserunt",
                            "assumenda",
                            "distinctio",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumDes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes192,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumDes,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "ut",
                        },
                        IkeLifetime: sdk.Int64(595672),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumDefault,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("labore"),
                    LocalID: sdk.String("qui"),
                    Name: "Lawrence Bernier",
                    NetworkTags: []string{
                        "tempore",
                        "ad",
                        "perspiciatis",
                        "pariatur",
                    },
                    PrivateSubnets: []string{
                        "minus",
                        "culpa",
                        "doloribus",
                    },
                    PublicIP: sdk.String("quisquam"),
                    RemoteID: sdk.String("quidem"),
                    Secret: "explicabo",
                },
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumOne.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumNull,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumDes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumNull,
                        },
                        ChildLifetime: sdk.Int64(656044),
                        ChildPfsGroup: []string{
                            "hic",
                            "ratione",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumMd5,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes192,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes128,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumTripledes,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "sint",
                            "enim",
                            "maiores",
                        },
                        IkeLifetime: sdk.Int64(921026),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumDefault,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfmd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfmd5,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("temporibus"),
                    LocalID: sdk.String("saepe"),
                    Name: "Pearl Kessler",
                    NetworkTags: []string{
                        "facere",
                        "et",
                    },
                    PrivateSubnets: []string{
                        "eveniet",
                        "eum",
                        "illo",
                    },
                    PublicIP: sdk.String("ullam"),
                    RemoteID: sdk.String("praesentium"),
                    Secret: "facilis",
                },
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumTwo.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes192,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumNull,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes192,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes256,
                        },
                        ChildLifetime: sdk.Int64(465478),
                        ChildPfsGroup: []string{
                            "fugiat",
                            "asperiores",
                            "aut",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes256,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "vero",
                            "eos",
                            "fugit",
                        },
                        IkeLifetime: sdk.Int64(775000),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumDefault,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("nemo"),
                    LocalID: sdk.String("tenetur"),
                    Name: "Tanya Welch",
                    NetworkTags: []string{
                        "adipisci",
                        "beatae",
                        "fugit",
                    },
                    PrivateSubnets: []string{
                        "veritatis",
                        "quis",
                        "eius",
                    },
                    PublicIP: sdk.String("autem"),
                    RemoteID: sdk.String("blanditiis"),
                    Secret: "ipsum",
                },
            },
        },
        OrganizationID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
