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
        Security: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams{
            Location: "corrupti",
            Project: "provident",
        },
        QueryParams: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams{
            DollarXgafv: "2",
            AccessToken: "quibusdam",
            Alt: "media",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.SubmitProvisioningConfigRequest{
            Email: "Eli96@yahoo.com",
            ProvisioningConfig: &shared.ProvisioningConfig{
                Instances: []shared.InstanceConfig{
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "4785 Kenyon Hollow",
                            ExistingNetworkID: "recusandae",
                            NetworkID: "temporibus",
                        },
                        Hyperthreading: false,
                        ID: "ab",
                        InstanceType: "quis",
                        Location: "veritatis",
                        OsImage: "deserunt",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "38971 Strosin Wall",
                            ExistingNetworkID: "molestiae",
                            NetworkID: "quod",
                        },
                        UserNote: "quod",
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "5761 Nikolaus Orchard",
                            ExistingNetworkID: "fugit",
                            NetworkID: "deleniti",
                        },
                        Hyperthreading: false,
                        ID: "hic",
                        InstanceType: "optio",
                        Location: "totam",
                        OsImage: "beatae",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "4217 Klocko Extension",
                            ExistingNetworkID: "excepturi",
                            NetworkID: "aspernatur",
                        },
                        UserNote: "perferendis",
                    },
                },
                Networks: []shared.NetworkConfig{
                    shared.NetworkConfig{
                        Bandwidth: "BW_5_GBPS",
                        Cidr: "sed",
                        ID: "iste",
                        Location: "dolor",
                        ServiceCidr: "HIGH_27",
                        Type: "CLIENT",
                        UserNote: "hic",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "fuga",
                                PairingKey: "in",
                            },
                            shared.VlanAttachment{
                                ID: "corporis",
                                PairingKey: "iste",
                            },
                            shared.VlanAttachment{
                                ID: "iure",
                                PairingKey: "saepe",
                            },
                            shared.VlanAttachment{
                                ID: "quidem",
                                PairingKey: "architecto",
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: "BANDWIDTH_UNSPECIFIED",
                        Cidr: "reiciendis",
                        ID: "est",
                        Location: "mollitia",
                        ServiceCidr: "HIGH_27",
                        Type: "TYPE_UNSPECIFIED",
                        UserNote: "dolorem",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "explicabo",
                                PairingKey: "nobis",
                            },
                            shared.VlanAttachment{
                                ID: "enim",
                                PairingKey: "omnis",
                            },
                        },
                    },
                },
                TicketID: "nemo",
                Volumes: []shared.VolumeConfig{
                    shared.VolumeConfig{
                        ID: "excepturi",
                        Location: "accusantium",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 634274,
                                SizeGb: 988374,
                            },
                            shared.LunRange{
                                Quantity: 958950,
                                SizeGb: 102044,
                            },
                        },
                        MachineIds: []string{
                            "dolorem",
                            "culpa",
                            "consequuntur",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "mollitia",
                                MachineID: "occaecati",
                                NetworkID: "numquam",
                                NoRootSquash: false,
                                Permissions: "READ_ONLY",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "quam",
                                MachineID: "molestiae",
                                NetworkID: "velit",
                                NoRootSquash: false,
                                Permissions: "READ_ONLY",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "quia",
                                MachineID: "quis",
                                NetworkID: "vitae",
                                NoRootSquash: false,
                                Permissions: "READ_WRITE",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "animi",
                                MachineID: "enim",
                                NetworkID: "odit",
                                NoRootSquash: false,
                                Permissions: "READ_WRITE",
                            },
                        },
                        Protocol: "PROTOCOL_UNSPECIFIED",
                        SizeGb: 949572,
                        SnapshotsEnabled: false,
                        Type: "FLASH",
                        UserNote: "id",
                    },
                    shared.VolumeConfig{
                        ID: "possimus",
                        Location: "aut",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 622846,
                                SizeGb: 837945,
                            },
                        },
                        MachineIds: []string{
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "nihil",
                                MachineID: "praesentium",
                                NetworkID: "voluptatibus",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "omnis",
                                MachineID: "voluptate",
                                NetworkID: "cum",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "doloremque",
                                MachineID: "reprehenderit",
                                NetworkID: "ut",
                                NoRootSquash: false,
                                Permissions: "READ_WRITE",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "dicta",
                                MachineID: "corporis",
                                NetworkID: "dolore",
                                NoRootSquash: false,
                                Permissions: "READ_ONLY",
                            },
                        },
                        Protocol: "PROTOCOL_UNSPECIFIED",
                        SizeGb: 688661,
                        SnapshotsEnabled: false,
                        Type: "TYPE_UNSPECIFIED",
                        UserNote: "accusamus",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsSubmitProvisioningConfig(ctx, req)
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
## SDK Available Operations


### Projects

* `BaremetalsolutionProjectsLocationsSubmitProvisioningConfig` - Submit a provisiong configuration for a given project.
* `BaremetalsolutionProjectsProvisioningQuotasList` - List the budget details to provision resources on a given project.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
