<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SubmitProvisioningConfigRequest: &shared.SubmitProvisioningConfigRequest{
            Email: sdk.String("Micheal_Sporer@yahoo.com"),
            ProvisioningConfig: &shared.ProvisioningConfig{
                Instances: []shared.InstanceConfig{
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("466 Hunter Fort"),
                            ExistingNetworkID: sdk.String("debitis"),
                            NetworkID: sdk.String("ipsa"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("f467cc87-96ed-4151-a05d-fc2ddf7cc78c"),
                        InstanceType: sdk.String("dolorum"),
                        Location: sdk.String("dicta"),
                        OsImage: sdk.String("nam"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("5159 Lebsack Common"),
                            ExistingNetworkID: sdk.String("commodi"),
                            NetworkID: sdk.String("molestiae"),
                        },
                        UserNote: sdk.String("modi"),
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("77425 Aiden Glen"),
                            ExistingNetworkID: sdk.String("natus"),
                            NetworkID: sdk.String("sed"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("9396fea7-596e-4b10-baaa-2352c5955907"),
                        InstanceType: sdk.String("culpa"),
                        Location: sdk.String("doloribus"),
                        OsImage: sdk.String("sapiente"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("62619 McCullough Flat"),
                            ExistingNetworkID: sdk.String("commodi"),
                            NetworkID: sdk.String("quam"),
                        },
                        UserNote: sdk.String("molestiae"),
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("61316 Hamill Cove"),
                            ExistingNetworkID: sdk.String("quo"),
                            NetworkID: sdk.String("sequi"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("f5ad019d-a1ff-4e78-b097-b0074f15471b"),
                        InstanceType: sdk.String("enim"),
                        Location: sdk.String("accusamus"),
                        OsImage: sdk.String("commodi"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("026 Mante Throughway"),
                            ExistingNetworkID: sdk.String("modi"),
                            NetworkID: sdk.String("praesentium"),
                        },
                        UserNote: sdk.String("rem"),
                    },
                },
                Networks: []shared.NetworkConfig{
                    shared.NetworkConfig{
                        Bandwidth: shared.NetworkConfigBandwidthEnumBandwidthUnspecified.ToPointer(),
                        Cidr: sdk.String("repudiandae"),
                        ID: sdk.String("91e450ad-2abd-4442-a980-2d502a94bb4f"),
                        Location: sdk.String("eum"),
                        ServiceCidr: shared.NetworkConfigServiceCidrEnumDisabled.ToPointer(),
                        Type: shared.NetworkConfigTypeEnumPrivate.ToPointer(),
                        UserNote: sdk.String("sint"),
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: sdk.String("9e9a3efa-77df-4b14-8d66-ae395efb9ba8"),
                                PairingKey: sdk.String("deleniti"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("f3a66997-074b-4a44-a9b6-e2141959890a"),
                                PairingKey: sdk.String("reiciendis"),
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: shared.NetworkConfigBandwidthEnumBw5Gbps.ToPointer(),
                        Cidr: sdk.String("ad"),
                        ID: sdk.String("63e2516f-e4c8-4b71-9e5b-7fd2ed028921"),
                        Location: sdk.String("quo"),
                        ServiceCidr: shared.NetworkConfigServiceCidrEnumHigh28.ToPointer(),
                        Type: shared.NetworkConfigTypeEnumPrivate.ToPointer(),
                        UserNote: sdk.String("maxime"),
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: sdk.String("92601fb5-76b0-4d5f-8d30-c5fbb2587053"),
                                PairingKey: sdk.String("eos"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb"),
                                PairingKey: sdk.String("delectus"),
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: shared.NetworkConfigBandwidthEnumBw1Gbps.ToPointer(),
                        Cidr: sdk.String("quos"),
                        ID: sdk.String("633323f9-b77f-43a4-9006-74ebf69280d1"),
                        Location: sdk.String("soluta"),
                        ServiceCidr: shared.NetworkConfigServiceCidrEnumHigh27.ToPointer(),
                        Type: shared.NetworkConfigTypeEnumClient.ToPointer(),
                        UserNote: sdk.String("voluptate"),
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: sdk.String("89ebf737-ae42-403c-a5e6-a95d8a0d446c"),
                                PairingKey: sdk.String("officiis"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("2af7a73c-f3be-4453-b870-b326b5a73429"),
                                PairingKey: sdk.String("maxime"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("db1a8422-bb67-49d2-b227-15bf0cbb1e31"),
                                PairingKey: sdk.String("nobis"),
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: shared.NetworkConfigBandwidthEnumBw2Gbps.ToPointer(),
                        Cidr: sdk.String("tempore"),
                        ID: sdk.String("90f3443a-1108-4e0a-9cf4-b921879fce95"),
                        Location: sdk.String("ipsum"),
                        ServiceCidr: shared.NetworkConfigServiceCidrEnumHigh28.ToPointer(),
                        Type: shared.NetworkConfigTypeEnumClient.ToPointer(),
                        UserNote: sdk.String("consectetur"),
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: sdk.String("f7fbc7ab-d74d-4d39-80f5-d2cff7c70a45"),
                                PairingKey: sdk.String("ea"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("26d43681-3f16-4d9f-9fce-6c556146c3e2"),
                                PairingKey: sdk.String("minima"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("0fb008c4-2e14-41aa-8366-c8dd6b144290"),
                                PairingKey: sdk.String("molestiae"),
                            },
                            shared.VlanAttachment{
                                ID: sdk.String("474778a7-bd46-46d2-8c10-ab3cdca42519"),
                                PairingKey: sdk.String("consequatur"),
                            },
                        },
                    },
                },
                TicketID: sdk.String("tempora"),
                Volumes: []shared.VolumeConfig{
                    shared.VolumeConfig{
                        ID: sdk.String("523c7e0b-c717-48e4-b96f-2a70c688282a"),
                        Location: sdk.String("mollitia"),
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: sdk.Int(539224),
                                SizeGb: sdk.Int(128860),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(325685),
                                SizeGb: sdk.Int(392676),
                            },
                        },
                        MachineIds: []string{
                            "sapiente",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("ratione"),
                                MachineID: sdk.String("explicabo"),
                                NetworkID: sdk.String("saepe"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadOnly.ToPointer(),
                            },
                        },
                        Protocol: shared.VolumeConfigProtocolEnumProtocolFc.ToPointer(),
                        SizeGb: sdk.Int(92260),
                        SnapshotsEnabled: sdk.Bool(false),
                        Type: shared.VolumeConfigTypeEnumFlash.ToPointer(),
                        UserNote: sdk.String("eveniet"),
                    },
                    shared.VolumeConfig{
                        ID: sdk.String("e17cbe61-e6b7-4b95-bc0a-b3c20c4f3789"),
                        Location: sdk.String("a"),
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: sdk.Int(557811),
                                SizeGb: sdk.Int(457223),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(97468),
                                SizeGb: sdk.Int(951875),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(621679),
                                SizeGb: sdk.Int(575751),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(863023),
                                SizeGb: sdk.Int(820767),
                            },
                        },
                        MachineIds: []string{
                            "eveniet",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("facere"),
                                MachineID: sdk.String("veritatis"),
                                NetworkID: sdk.String("consequuntur"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumPermissionsUnspecified.ToPointer(),
                            },
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("similique"),
                                MachineID: sdk.String("culpa"),
                                NetworkID: sdk.String("aliquid"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadWrite.ToPointer(),
                            },
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("quae"),
                                MachineID: sdk.String("earum"),
                                NetworkID: sdk.String("vel"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadOnly.ToPointer(),
                            },
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("eius"),
                                MachineID: sdk.String("libero"),
                                NetworkID: sdk.String("illum"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadWrite.ToPointer(),
                            },
                        },
                        Protocol: shared.VolumeConfigProtocolEnumProtocolUnspecified.ToPointer(),
                        SizeGb: sdk.Int(306986),
                        SnapshotsEnabled: sdk.Bool(false),
                        Type: shared.VolumeConfigTypeEnumDisk.ToPointer(),
                        UserNote: sdk.String("dicta"),
                    },
                    shared.VolumeConfig{
                        ID: sdk.String("5756082d-68ea-419f-9d17-051339d08086"),
                        Location: sdk.String("mollitia"),
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: sdk.Int(544591),
                                SizeGb: sdk.Int(251941),
                            },
                        },
                        MachineIds: []string{
                            "dolor",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("numquam"),
                                MachineID: sdk.String("impedit"),
                                NetworkID: sdk.String("explicabo"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadOnly.ToPointer(),
                            },
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("aut"),
                                MachineID: sdk.String("dignissimos"),
                                NetworkID: sdk.String("dicta"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadWrite.ToPointer(),
                            },
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("natus"),
                                MachineID: sdk.String("velit"),
                                NetworkID: sdk.String("voluptatibus"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadOnly.ToPointer(),
                            },
                        },
                        Protocol: shared.VolumeConfigProtocolEnumProtocolNfs.ToPointer(),
                        SizeGb: sdk.Int(45659),
                        SnapshotsEnabled: sdk.Bool(false),
                        Type: shared.VolumeConfigTypeEnumFlash.ToPointer(),
                        UserNote: sdk.String("quaerat"),
                    },
                    shared.VolumeConfig{
                        ID: sdk.String("2dac7af5-15cc-4413-aa63-aae8d67864db"),
                        Location: sdk.String("cum"),
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: sdk.Int(447144),
                                SizeGb: sdk.Int(360545),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(968904),
                                SizeGb: sdk.Int(828657),
                            },
                        },
                        MachineIds: []string{
                            "recusandae",
                            "aliquid",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("cum"),
                                MachineID: sdk.String("consectetur"),
                                NetworkID: sdk.String("in"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadOnly.ToPointer(),
                            },
                        },
                        Protocol: shared.VolumeConfigProtocolEnumProtocolNfs.ToPointer(),
                        SizeGb: sdk.Int(814967),
                        SnapshotsEnabled: sdk.Bool(false),
                        Type: shared.VolumeConfigTypeEnumTypeUnspecified.ToPointer(),
                        UserNote: sdk.String("doloribus"),
                    },
                },
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("necessitatibus"),
        Location: "dolore",
        OauthToken: sdk.String("sunt"),
        PrettyPrint: sdk.Bool(false),
        Project: "asperiores",
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("amet"),
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
<!-- End SDK Example Usage -->