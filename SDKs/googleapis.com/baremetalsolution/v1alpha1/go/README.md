# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Location: "autem",
            Project: "quam",
        },
        QueryParams: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams{
            DollarXgafv: "2",
            AccessToken: "sunt",
            Alt: "json",
            Callback: "sed",
            Fields: "omnis",
            Key: "ut",
            OauthToken: "voluptatem",
            PrettyPrint: true,
            QuotaUser: "quaerat",
            UploadType: "ut",
            UploadProtocol: "sed",
        },
        Request: &shared.SubmitProvisioningConfigRequest{
            Email: "reprehenderit",
            ProvisioningConfig: &shared.ProvisioningConfig{
                Instances: []shared.InstanceConfig{
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "incidunt",
                            ExistingNetworkID: "hic",
                            NetworkID: "et",
                        },
                        Hyperthreading: true,
                        ID: "provident",
                        InstanceType: "aut",
                        Location: "voluptas",
                        OsImage: "dolor",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "tenetur",
                            ExistingNetworkID: "blanditiis",
                            NetworkID: "cum",
                        },
                        UserNote: "illum",
                    },
                },
                Networks: []shared.NetworkConfig{
                    shared.NetworkConfig{
                        Bandwidth: "BW_1_GBPS",
                        Cidr: "quia",
                        ID: "est",
                        Location: "enim",
                        ServiceCidr: "SERVICE_CIDR_UNSPECIFIED",
                        Type: "TYPE_UNSPECIFIED",
                        UserNote: "velit",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "est",
                                PairingKey: "ipsam",
                            },
                            shared.VlanAttachment{
                                ID: "ut",
                                PairingKey: "quod",
                            },
                        },
                    },
                },
                TicketID: "dolor",
                Volumes: []shared.VolumeConfig{
                    shared.VolumeConfig{
                        ID: "voluptates",
                        Location: "cupiditate",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 1064548070932088692,
                                SizeGb: 5046743337199082681,
                            },
                            shared.LunRange{
                                Quantity: 920984617889488428,
                                SizeGb: 1899631958773007453,
                            },
                            shared.LunRange{
                                Quantity: 1982896037752148993,
                                SizeGb: 1163460210123834606,
                            },
                        },
                        MachineIds: []string{
                            "cum",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "odit",
                                MachineID: "quos",
                                NetworkID: "tempore",
                                NoRootSquash: true,
                                Permissions: "READ_WRITE",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "consequuntur",
                                MachineID: "praesentium",
                                NetworkID: "est",
                                NoRootSquash: true,
                                Permissions: "READ_ONLY",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: true,
                                Cidr: "et",
                                MachineID: "dolor",
                                NetworkID: "vero",
                                NoRootSquash: false,
                                Permissions: "READ_ONLY",
                            },
                        },
                        Protocol: "PROTOCOL_NFS",
                        SizeGb: 6959316382840154727,
                        SnapshotsEnabled: true,
                        Type: "DISK",
                        UserNote: "doloribus",
                    },
                    shared.VolumeConfig{
                        ID: "in",
                        Location: "et",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 2734397367293067162,
                                SizeGb: 8286295675980987265,
                            },
                            shared.LunRange{
                                Quantity: 8905867906250618115,
                                SizeGb: 3491575351482382980,
                            },
                            shared.LunRange{
                                Quantity: 7727273337241565830,
                                SizeGb: 8825811285398786472,
                            },
                        },
                        MachineIds: []string{
                            "rerum",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: true,
                                AllowSuid: true,
                                Cidr: "consequatur",
                                MachineID: "commodi",
                                NetworkID: "aspernatur",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                        },
                        Protocol: "PROTOCOL_NFS",
                        SizeGb: 8063688569461522182,
                        SnapshotsEnabled: true,
                        Type: "DISK",
                        UserNote: "voluptatum",
                    },
                    shared.VolumeConfig{
                        ID: "quas",
                        Location: "voluptatem",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 2781848901938685670,
                                SizeGb: 7473878719530729647,
                            },
                            shared.LunRange{
                                Quantity: 5786982471228804135,
                                SizeGb: 1535012604873118548,
                            },
                        },
                        MachineIds: []string{
                            "sapiente",
                            "alias",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: true,
                                Cidr: "voluptatem",
                                MachineID: "repellendus",
                                NetworkID: "eos",
                                NoRootSquash: true,
                                Permissions: "READ_WRITE",
                            },
                        },
                        Protocol: "PROTOCOL_UNSPECIFIED",
                        SizeGb: 2130058147858464100,
                        SnapshotsEnabled: true,
                        Type: "FLASH",
                        UserNote: "porro",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.BaremetalsolutionProjectsLocationsSubmitProvisioningConfig(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisioningConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `BaremetalsolutionProjectsLocationsSubmitProvisioningConfig` - Submit a provisiong configuration for a given project.
* `BaremetalsolutionProjectsProvisioningQuotasList` - List the budget details to provision resources on a given project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
