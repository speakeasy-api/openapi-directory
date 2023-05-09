# Projects

### Available Operations

* [BaremetalsolutionProjectsLocationsSubmitProvisioningConfig](#baremetalsolutionprojectslocationssubmitprovisioningconfig) - Submit a provisiong configuration for a given project.
* [BaremetalsolutionProjectsProvisioningQuotasList](#baremetalsolutionprojectsprovisioningquotaslist) - List the budget details to provision resources on a given project.

## BaremetalsolutionProjectsLocationsSubmitProvisioningConfig

Submit a provisiong configuration for a given project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsSubmitProvisioningConfig(ctx, operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SubmitProvisioningConfigRequest: &shared.SubmitProvisioningConfigRequest{
            Email: sdk.String("Valerie35@yahoo.com"),
            ProvisioningConfig: &shared.ProvisioningConfig{
                Instances: []shared.InstanceConfig{
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("0971 Murray Forest"),
                            ExistingNetworkID: sdk.String("aspernatur"),
                            NetworkID: sdk.String("voluptas"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("555ba3c2-8744-4ed5-bb88-f3a8d8f5c0b2"),
                        InstanceType: sdk.String("reiciendis"),
                        Location: sdk.String("explicabo"),
                        OsImage: sdk.String("asperiores"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("470 Greenholt Points"),
                            ExistingNetworkID: sdk.String("sed"),
                            NetworkID: sdk.String("in"),
                        },
                        UserNote: sdk.String("commodi"),
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("136 Geovany Vista"),
                            ExistingNetworkID: sdk.String("debitis"),
                            NetworkID: sdk.String("illo"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("f08f4294-e369-48f4-87f6-03e8b445e80c"),
                        InstanceType: sdk.String("error"),
                        Location: sdk.String("veniam"),
                        OsImage: sdk.String("minima"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("981 Stephany Flat"),
                            ExistingNetworkID: sdk.String("veniam"),
                            NetworkID: sdk.String("in"),
                        },
                        UserNote: sdk.String("officiis"),
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("53573 Lehner Passage"),
                            ExistingNetworkID: sdk.String("hic"),
                            NetworkID: sdk.String("expedita"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("e3a5aa8e-4824-4d0a-b407-5088e5186206"),
                        InstanceType: sdk.String("nostrum"),
                        Location: sdk.String("saepe"),
                        OsImage: sdk.String("error"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("29261 Kitty Fork"),
                            ExistingNetworkID: sdk.String("quidem"),
                            NetworkID: sdk.String("atque"),
                        },
                        UserNote: sdk.String("laborum"),
                    },
                },
                Networks: []shared.NetworkConfig{
                    shared.NetworkConfig{
                        Bandwidth: shared.NetworkConfigBandwidthEnumBw10Gbps.ToPointer(),
                        Cidr: sdk.String("laboriosam"),
                        ID: sdk.String("03a79f9d-fe0a-4b7d-a8a5-0ce187f86bc1"),
                        Location: sdk.String("esse"),
                        ServiceCidr: shared.NetworkConfigServiceCidrEnumDisabled.ToPointer(),
                        Type: shared.NetworkConfigTypeEnumPrivate.ToPointer(),
                        UserNote: sdk.String("ea"),
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: sdk.String("9eee9526-f8d9-486e-881e-ad4f0e101256"),
                                PairingKey: sdk.String("velit"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("f94e29e9-73e9-422a-97a1-5be3e060807e"),
                                PairingKey: sdk.String("qui"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("b6e3ab88-45f0-4597-a60f-f2a54a31e947"),
                                PairingKey: sdk.String("ex"),
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: shared.NetworkConfigBandwidthEnumBw1Gbps.ToPointer(),
                        Cidr: sdk.String("culpa"),
                        ID: sdk.String("3e865e79-56f9-4251-a5a9-da660ff57bfa"),
                        Location: sdk.String("laborum"),
                        ServiceCidr: shared.NetworkConfigServiceCidrEnumHigh28.ToPointer(),
                        Type: shared.NetworkConfigTypeEnumTypeUnspecified.ToPointer(),
                        UserNote: sdk.String("voluptatibus"),
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: sdk.String("efc1b451-2c10-4326-88dc-2f615199ebfd"),
                                PairingKey: sdk.String("eaque"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("e9fe6c63-2ca3-4aed-8117-996312fde047"),
                                PairingKey: sdk.String("molestiae"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("1778ff61-d017-4476-b60a-15db6a660659"),
                                PairingKey: sdk.String("id"),
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: shared.NetworkConfigBandwidthEnumBandwidthUnspecified.ToPointer(),
                        Cidr: sdk.String("error"),
                        ID: sdk.String("deaab585-1d6c-4645-b08b-61891baa0fe1"),
                        Location: sdk.String("fuga"),
                        ServiceCidr: shared.NetworkConfigServiceCidrEnumHigh28.ToPointer(),
                        Type: shared.NetworkConfigTypeEnumPrivate.ToPointer(),
                        UserNote: sdk.String("voluptatem"),
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: sdk.String("8e6f8c5f-350d-48cd-b5a3-418143010421"),
                                PairingKey: sdk.String("laudantium"),
                            },
                        },
                    },
                },
                TicketID: sdk.String("quae"),
                Volumes: []shared.VolumeConfig{
                    shared.VolumeConfig{
                        ID: sdk.String("d5208ece-7e25-43b6-a845-1c6c6e205e16"),
                        Location: sdk.String("at"),
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: sdk.Int(667593),
                                SizeGb: sdk.Int(690785),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(192718),
                                SizeGb: sdk.Int(987349),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(918092),
                                SizeGb: sdk.Int(759283),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(579681),
                                SizeGb: sdk.Int(364544),
                            },
                        },
                        MachineIds: []string{
                            "blanditiis",
                            "officia",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("numquam"),
                                MachineID: sdk.String("nemo"),
                                NetworkID: sdk.String("quos"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumPermissionsUnspecified.ToPointer(),
                            },
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("aspernatur"),
                                MachineID: sdk.String("ducimus"),
                                NetworkID: sdk.String("nesciunt"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadWrite.ToPointer(),
                            },
                        },
                        Protocol: shared.VolumeConfigProtocolEnumProtocolFc.ToPointer(),
                        SizeGb: sdk.Int(277340),
                        SnapshotsEnabled: sdk.Bool(false),
                        Type: shared.VolumeConfigTypeEnumTypeUnspecified.ToPointer(),
                        UserNote: sdk.String("rem"),
                    },
                },
            },
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("consectetur"),
        Location: "aperiam",
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        Project: "reiciendis",
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisioningConfig != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsProvisioningQuotasList

List the budget details to provision resources on a given project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsProvisioningQuotasList(ctx, operations.BaremetalsolutionProjectsProvisioningQuotasListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("accusamus"),
        PageSize: sdk.Int64(976802),
        PageToken: sdk.String("distinctio"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.BaremetalsolutionProjectsProvisioningQuotasListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvisioningQuotasResponse != nil {
        // handle response
    }
}
```
