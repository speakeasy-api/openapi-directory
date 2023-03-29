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
            Location: "unde",
            Project: "deserunt",
        },
        QueryParams: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams{
            DollarXgafv: "2",
            AccessToken: "nulla",
            Alt: "media",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.SubmitProvisioningConfigRequest{
            Email: "Eli96@yahoo.com",
            ProvisioningConfig: &shared.ProvisioningConfig{
                Instances: []shared.InstanceConfig{
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "4785 Gladys Manor",
                            ExistingNetworkID: "molestiae",
                            NetworkID: "quo",
                        },
                        Hyperthreading: false,
                        ID: "quasi",
                        InstanceType: "laboriosam",
                        Location: "dicta",
                        OsImage: "est",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "38971 Wilford Track",
                            ExistingNetworkID: "rem",
                            NetworkID: "quibusdam",
                        },
                        UserNote: "et",
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "5761 Kristina Roads",
                            ExistingNetworkID: "qui",
                            NetworkID: "sed",
                        },
                        Hyperthreading: false,
                        ID: "rerum",
                        InstanceType: "possimus",
                        Location: "occaecati",
                        OsImage: "odit",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "4217 Emmerich Rue",
                            ExistingNetworkID: "similique",
                            NetworkID: "dolores",
                        },
                        UserNote: "sit",
                    },
                },
                Networks: []shared.NetworkConfig{
                    shared.NetworkConfig{
                        Bandwidth: "BW_5_GBPS",
                        Cidr: "voluptatem",
                        ID: "laborum",
                        Location: "modi",
                        ServiceCidr: "HIGH_27",
                        Type: "CLIENT",
                        UserNote: "earum",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "soluta",
                                PairingKey: "qui",
                            },
                            shared.VlanAttachment{
                                ID: "ea",
                                PairingKey: "laborum",
                            },
                            shared.VlanAttachment{
                                ID: "iusto",
                                PairingKey: "ut",
                            },
                            shared.VlanAttachment{
                                ID: "optio",
                                PairingKey: "aspernatur",
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: "BANDWIDTH_UNSPECIFIED",
                        Cidr: "ut",
                        ID: "libero",
                        Location: "et",
                        ServiceCidr: "HIGH_27",
                        Type: "TYPE_UNSPECIFIED",
                        UserNote: "non",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "magni",
                                PairingKey: "placeat",
                            },
                            shared.VlanAttachment{
                                ID: "ipsam",
                                PairingKey: "est",
                            },
                        },
                    },
                },
                TicketID: "commodi",
                Volumes: []shared.VolumeConfig{
                    shared.VolumeConfig{
                        ID: "similique",
                        Location: "eaque",
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
                            "non",
                            "quidem",
                            "neque",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "et",
                                MachineID: "culpa",
                                NetworkID: "aliquam",
                                NoRootSquash: false,
                                Permissions: "READ_ONLY",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "totam",
                                MachineID: "voluptatum",
                                NetworkID: "et",
                                NoRootSquash: false,
                                Permissions: "READ_ONLY",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "nesciunt",
                                MachineID: "laboriosam",
                                NetworkID: "aut",
                                NoRootSquash: false,
                                Permissions: "READ_WRITE",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "expedita",
                                MachineID: "ipsam",
                                NetworkID: "eos",
                                NoRootSquash: false,
                                Permissions: "READ_WRITE",
                            },
                        },
                        Protocol: "PROTOCOL_UNSPECIFIED",
                        SizeGb: 949572,
                        SnapshotsEnabled: false,
                        Type: "FLASH",
                        UserNote: "distinctio",
                    },
                    shared.VolumeConfig{
                        ID: "qui",
                        Location: "perferendis",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 622846,
                                SizeGb: 837945,
                            },
                        },
                        MachineIds: []string{
                            "explicabo",
                            "aut",
                            "reiciendis",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "totam",
                                MachineID: "molestias",
                                NetworkID: "reiciendis",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "id",
                                MachineID: "qui",
                                NetworkID: "quod",
                                NoRootSquash: false,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "eaque",
                                MachineID: "odio",
                                NetworkID: "veniam",
                                NoRootSquash: false,
                                Permissions: "READ_WRITE",
                            },
                            shared.NfsExport{
                                AllowDev: false,
                                AllowSuid: false,
                                Cidr: "sed",
                                MachineID: "ea",
                                NetworkID: "exercitationem",
                                NoRootSquash: false,
                                Permissions: "READ_ONLY",
                            },
                        },
                        Protocol: "PROTOCOL_UNSPECIFIED",
                        SizeGb: 688661,
                        SnapshotsEnabled: false,
                        Type: "TYPE_UNSPECIFIED",
                        UserNote: "aut",
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