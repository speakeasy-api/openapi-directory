# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/baremetalsolution/v1alpha1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest{
        DollarXgafv: "2",
        SubmitProvisioningConfigRequest: &shared.SubmitProvisioningConfigRequest{
            Email: "Micheal_Sporer@yahoo.com",
            ProvisioningConfig: &shared.ProvisioningConfig{
                Instances: []shared.InstanceConfig{
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "466 Hunter Fort",
                            ExistingNetworkID: "debitis",
                            NetworkID: "ipsa",
                        },
                        Hyperthreading: false,
                        ID: "delectus",
                        InstanceType: "tempora",
                        Location: "suscipit",
                        OsImage: "molestiae",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "854 Huel Via",
                            ExistingNetworkID: "temporibus",
                            NetworkID: "ab",
                        },
                        UserNote: "quis",
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "60389 Connelly Trace",
                            ExistingNetworkID: "at",
                            NetworkID: "maiores",
                        },
                        Hyperthreading: false,
                        ID: "molestiae",
                        InstanceType: "quod",
                        Location: "quod",
                        OsImage: "esse",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "7617 McCullough Coves",
                            ExistingNetworkID: "deleniti",
                            NetworkID: "hic",
                        },
                        UserNote: "optio",
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "1442 Ona River",
                            ExistingNetworkID: "esse",
                            NetworkID: "ipsum",
                        },
                        Hyperthreading: false,
                        ID: "excepturi",
                        InstanceType: "aspernatur",
                        Location: "perferendis",
                        OsImage: "ad",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "1626 Tyra Union",
                            ExistingNetworkID: "fuga",
                            NetworkID: "in",
                        },
                        UserNote: "corporis",
                    },
                },
                Networks: []shared.NetworkConfig{
                    shared.NetworkConfig{
                        Bandwidth: "BW_2_GBPS",
                        Cidr: "saepe",
                        ID: "quidem",
                        Location: "architecto",
                        ServiceCidr: "SERVICE_CIDR_UNSPECIFIED",
                        Type: "PRIVATE",
                        UserNote: "est",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "laborum",
                                PairingKey: "dolores",
                            },
                            shared.VlanAttachment{
                                ID: "dolorem",
                                PairingKey: "corporis",
                            },
                            shared.VlanAttachment{
                                ID: "explicabo",
                                PairingKey: "nobis",
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: "BW_1_GBPS",
                        Cidr: "omnis",
                        ID: "nemo",
                        Location: "minima",
                        ServiceCidr: "HIGH_26",
                        Type: "TYPE_UNSPECIFIED",
                        UserNote: "iure",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "doloribus",
                                PairingKey: "sapiente",
                            },
                            shared.VlanAttachment{
                                ID: "architecto",
                                PairingKey: "mollitia",
                            },
                            shared.VlanAttachment{
                                ID: "dolorem",
                                PairingKey: "culpa",
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: "BANDWIDTH_UNSPECIFIED",
                        Cidr: "repellat",
                        ID: "mollitia",
                        Location: "occaecati",
                        ServiceCidr: "DISABLED",
                        Type: "CLIENT",
                        UserNote: "quam",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "velit",
                                PairingKey: "error",
                            },
                            shared.VlanAttachment{
                                ID: "quia",
                                PairingKey: "quis",
                            },
                        },
                    },
                },
                TicketID: "vitae",
                Volumes: []shared.VolumeConfig{
                    shared.VolumeConfig{
                        ID: "animi",
                        Location: "enim",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 778346,
                                SizeGb: 196582,
                            },
                        },
                        MachineIds: []string{
                            "ipsam",
                            "id",
                            "possimus",
                            "aut",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "error",
                                MachineID: "temporibus",
                                NetworkID: "laborum",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                        },
                        Protocol: "PROTOCOL_NFS",
                        SizeGb: 976460,
                        SnapshotsEnabled: false,
                        Type: "DISK",
                        UserNote: "nihil",
                    },
                    shared.VolumeConfig{
                        ID: "praesentium",
                        Location: "voluptatibus",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 604846,
                                SizeGb: 451159,
                            },
                        },
                        MachineIds: []string{
                            "perferendis",
                            "doloremque",
                            "reprehenderit",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "maiores",
                                MachineID: "dicta",
                                NetworkID: "corporis",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "iusto",
                                MachineID: "dicta",
                                NetworkID: "harum",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                        },
                        Protocol: "PROTOCOL_NFS",
                        SizeGb: 414263,
                        SnapshotsEnabled: false,
                        Type: "DISK",
                        UserNote: "quae",
                    },
                    shared.VolumeConfig{
                        ID: "ipsum",
                        Location: "quidem",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 566602,
                                SizeGb: 865103,
                            },
                            shared.LunRange{
                                Quantity: 265389,
                                SizeGb: 508969,
                            },
                            shared.LunRange{
                                Quantity: 523248,
                                SizeGb: 916723,
                            },
                        },
                        MachineIds: []string{
                            "repudiandae",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "veritatis",
                                MachineID: "itaque",
                                NetworkID: "incidunt",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "consequatur",
                                MachineID: "est",
                                NetworkID: "quibusdam",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "deserunt",
                                MachineID: "distinctio",
                                NetworkID: "quibusdam",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                        },
                        Protocol: "PROTOCOL_UNSPECIFIED",
                        SizeGb: 183191,
                        SnapshotsEnabled: false,
                        Type: "FLASH",
                        UserNote: "cupiditate",
                    },
                },
            },
        },
        AccessToken: "quos",
        Alt: "json",
        Callback: "magni",
        Fields: "assumenda",
        Key: "ipsam",
        Location: "alias",
        OauthToken: "fugit",
        PrettyPrint: false,
        Project: "dolorum",
        QuotaUser: "excepturi",
        UploadType: "tempora",
        UploadProtocol: "facilis",
    }

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsSubmitProvisioningConfig(ctx, req, operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `BaremetalsolutionProjectsLocationsSubmitProvisioningConfig` - Submit a provisiong configuration for a given project.
* `BaremetalsolutionProjectsProvisioningQuotasList` - List the budget details to provision resources on a given project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
