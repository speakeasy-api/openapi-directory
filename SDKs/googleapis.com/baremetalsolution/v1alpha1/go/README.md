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
            Location: "sit",
            Project: "voluptas",
        },
        QueryParams: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            Alt: "proto",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.SubmitProvisioningConfigRequest{
            Email: "debitis",
            ProvisioningConfig: &shared.ProvisioningConfig{
                Instances: []shared.InstanceConfig{
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "et",
                            ExistingNetworkID: "ut",
                            NetworkID: "dolorem",
                        },
                        Hyperthreading: false,
                        ID: "voluptate",
                        InstanceType: "iste",
                        Location: "vitae",
                        OsImage: "totam",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "dolores",
                            ExistingNetworkID: "illum",
                            NetworkID: "debitis",
                        },
                        UserNote: "vel",
                    },
                },
                Networks: []shared.NetworkConfig{
                    shared.NetworkConfig{
                        Bandwidth: "BW_1_GBPS",
                        Cidr: "id",
                        ID: "aspernatur",
                        Location: "accusantium",
                        ServiceCidr: "SERVICE_CIDR_UNSPECIFIED",
                        Type: "CLIENT",
                        UserNote: "quis",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "aut",
                                PairingKey: "odit",
                            },
                            shared.VlanAttachment{
                                ID: "non",
                                PairingKey: "voluptas",
                            },
                        },
                    },
                },
                TicketID: "omnis",
                Volumes: []shared.VolumeConfig{
                    shared.VolumeConfig{
                        ID: "illo",
                        Location: "sed",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 771642788862502430,
                                SizeGb: 8514850266767180993,
                            },
                            shared.LunRange{
                                Quantity: 8683452355129068124,
                                SizeGb: 4345851588384648695,
                            },
                        },
                        MachineIds: []string{
                            "recusandae",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: true,
                                Cidr: "modi",
                                MachineID: "sint",
                                NetworkID: "inventore",
                                NoRootSquash: true,
                                Permissions: "READ_WRITE",
                            },
                            shared.NfsExport{
                                AllowDev: true,
                                AllowSuid: false,
                                Cidr: "tempore",
                                MachineID: "maiores",
                                NetworkID: "incidunt",
                                NoRootSquash: false,
                                Permissions: "READ_WRITE",
                            },
                        },
                        Protocol: "PROTOCOL_FC",
                        SizeGb: 2671030200101705776,
                        SnapshotsEnabled: false,
                        Type: "FLASH",
                        UserNote: "ipsum",
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
