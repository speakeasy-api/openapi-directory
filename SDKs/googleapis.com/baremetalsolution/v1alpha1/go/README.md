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
            Location: "accusamus",
            Project: "et",
        },
        QueryParams: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams{
            DollarXgafv: "2",
            AccessToken: "consequatur",
            Alt: "proto",
            Callback: "ipsa",
            Fields: "voluptatem",
            Key: "velit",
            OauthToken: "expedita",
            PrettyPrint: false,
            QuotaUser: "maiores",
            UploadType: "sunt",
            UploadProtocol: "odio",
        },
        Request: &shared.SubmitProvisioningConfigRequest{
            Email: "quo",
            ProvisioningConfig: &shared.ProvisioningConfig{
                Instances: []shared.InstanceConfig{
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "eos",
                            ExistingNetworkID: "perspiciatis",
                            NetworkID: "similique",
                        },
                        Hyperthreading: false,
                        ID: "voluptatem",
                        InstanceType: "ut",
                        Location: "rerum",
                        OsImage: "labore",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "quasi",
                            ExistingNetworkID: "occaecati",
                            NetworkID: "voluptatem",
                        },
                        UserNote: "delectus",
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "excepturi",
                            ExistingNetworkID: "consequuntur",
                            NetworkID: "provident",
                        },
                        Hyperthreading: false,
                        ID: "eos",
                        InstanceType: "sapiente",
                        Location: "sit",
                        OsImage: "quos",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "numquam",
                            ExistingNetworkID: "neque",
                            NetworkID: "ullam",
                        },
                        UserNote: "qui",
                    },
                },
                Networks: []shared.NetworkConfig{
                    shared.NetworkConfig{
                        Bandwidth: "BW_1_GBPS",
                        Cidr: "ex",
                        ID: "excepturi",
                        Location: "esse",
                        ServiceCidr: "DISABLED",
                        Type: "PRIVATE",
                        UserNote: "doloremque",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "quis",
                                PairingKey: "repellat",
                            },
                        },
                    },
                },
                TicketID: "omnis",
                Volumes: []shared.VolumeConfig{
                    shared.VolumeConfig{
                        ID: "aperiam",
                        Location: "omnis",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 458688950231060521,
                                SizeGb: 5181082227017011102,
                            },
                            shared.LunRange{
                                Quantity: 4760998959768933036,
                                SizeGb: 8113560356109833465,
                            },
                        },
                        MachineIds: []string{
                            "maxime",
                            "a",
                            "magni",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "qui",
                                MachineID: "hic",
                                NetworkID: "excepturi",
                                NoRootSquash: false,
                                Permissions: "READ_WRITE",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "est",
                                MachineID: "ad",
                                NetworkID: "voluptatem",
                                NoRootSquash: true,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                            shared.NfsExport{
                                AllowDev: true,
                                AllowSuid: false,
                                Cidr: "quaerat",
                                MachineID: "placeat",
                                NetworkID: "numquam",
                                NoRootSquash: true,
                                Permissions: "READ_ONLY",
                            },
                        },
                        Protocol: "PROTOCOL_NFS",
                        SizeGb: 8901295938499372629,
                        SnapshotsEnabled: false,
                        Type: "DISK",
                        UserNote: "et",
                    },
                    shared.VolumeConfig{
                        ID: "hic",
                        Location: "eaque",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 6914298819298796509,
                                SizeGb: 1342322133068639698,
                            },
                            shared.LunRange{
                                Quantity: 1173538578675765645,
                                SizeGb: 1370582653008256608,
                            },
                        },
                        MachineIds: []string{
                            "ab",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: true,
                                Cidr: "sit",
                                MachineID: "omnis",
                                NetworkID: "qui",
                                NoRootSquash: false,
                                Permissions: "READ_WRITE",
                            },
                        },
                        Protocol: "PROTOCOL_FC",
                        SizeGb: 6582010836045928126,
                        SnapshotsEnabled: false,
                        Type: "DISK",
                        UserNote: "minus",
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
