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
    
    req := operations.GenomicsPipelinesRunRequest{
        Security: operations.GenomicsPipelinesRunSecurity{
            Option1: &operations.GenomicsPipelinesRunSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.GenomicsPipelinesRunQueryParams{
            DollarXgafv: "2",
            AccessToken: "id",
            Alt: "proto",
            Callback: "iste",
            Fields: "pariatur",
            Key: "eos",
            OauthToken: "quia",
            PrettyPrint: false,
            QuotaUser: "atque",
            UploadType: "dolorem",
            UploadProtocol: "dolorem",
        },
        Request: &shared.RunPipelineRequest{
            Labels: map[string]string{
                "sit": "est",
                "alias": "qui",
                "quidem": "est",
            },
            Pipeline: &shared.Pipeline{
                Actions: []shared.Action{
                    shared.Action{
                        Commands: []string{
                            "voluptate",
                            "consequatur",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "molestiae",
                            KeyName: "id",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "repudiandae",
                            KeyName: "laborum",
                        },
                        Entrypoint: "ipsam",
                        Environment: map[string]string{
                            "qui": "impedit",
                            "consequatur": "voluptatem",
                            "dolores": "molestias",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "ALWAYS_RUN",
                            "BLOCK_EXTERNAL_NETWORK",
                        },
                        ImageURI: "neque",
                        Labels: map[string]string{
                            "velit": "magnam",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "provident",
                                Path: "ipsum",
                                ReadOnly: true,
                            },
                            shared.Mount{
                                Disk: "vel",
                                Path: "aperiam",
                                ReadOnly: true,
                            },
                        },
                        Name: "ut",
                        PidNamespace: "aliquid",
                        PortMappings: map[string]int32{
                            "sapiente": 1143508241167913904,
                        },
                        Timeout: "et",
                    },
                    shared.Action{
                        Commands: []string{
                            "quia",
                            "laboriosam",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "aspernatur",
                            KeyName: "delectus",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "error",
                            KeyName: "quas",
                        },
                        Entrypoint: "quidem",
                        Environment: map[string]string{
                            "unde": "dicta",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "IGNORE_EXIT_STATUS",
                            "RUN_IN_BACKGROUND",
                        },
                        ImageURI: "quasi",
                        Labels: map[string]string{
                            "suscipit": "tempore",
                            "corporis": "minima",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "veniam",
                                Path: "totam",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "aut",
                                Path: "distinctio",
                                ReadOnly: true,
                            },
                        },
                        Name: "quod",
                        PidNamespace: "aut",
                        PortMappings: map[string]int32{
                            "unde": 4389851703793246450,
                            "labore": 4778500505820559968,
                            "quod": 6206679695015972069,
                        },
                        Timeout: "voluptatem",
                    },
                    shared.Action{
                        Commands: []string{
                            "impedit",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "ea",
                            KeyName: "qui",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "dicta",
                            KeyName: "cumque",
                        },
                        Entrypoint: "ut",
                        Environment: map[string]string{
                            "nihil": "sit",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "ALWAYS_RUN",
                        },
                        ImageURI: "id",
                        Labels: map[string]string{
                            "magni": "alias",
                            "sint": "voluptates",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "doloribus",
                                Path: "hic",
                                ReadOnly: true,
                            },
                            shared.Mount{
                                Disk: "inventore",
                                Path: "est",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "unde",
                                Path: "quia",
                                ReadOnly: true,
                            },
                        },
                        Name: "tempora",
                        PidNamespace: "ipsa",
                        PortMappings: map[string]int32{
                            "ducimus": 9021147083455187159,
                            "natus": 3200989815766506694,
                            "deserunt": 377739180183339068,
                        },
                        Timeout: "sit",
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: "fuga",
                    KeyName: "repellendus",
                },
                Environment: map[string]string{
                    "quis": "itaque",
                    "nostrum": "eaque",
                    "nostrum": "cumque",
                },
                Resources: &shared.Resources{
                    ProjectID: "molestiae",
                    Regions: []string{
                        "dolorem",
                        "enim",
                    },
                    VirtualMachine: &shared.VirtualMachine{
                        Accelerators: []shared.Accelerator{
                            shared.Accelerator{
                                Count: "mollitia",
                                Type: "ex",
                            },
                        },
                        BootDiskSizeGb: 8990962201144210255,
                        BootImage: "et",
                        CPUPlatform: "nihil",
                        Disks: []shared.Disk{
                            shared.Disk{
                                Name: "tempore",
                                SizeGb: 7881272142187045715,
                                SourceImage: "nostrum",
                                Type: "et",
                            },
                            shared.Disk{
                                Name: "est",
                                SizeGb: 8093939891763351998,
                                SourceImage: "at",
                                Type: "corrupti",
                            },
                            shared.Disk{
                                Name: "ipsam",
                                SizeGb: 3446404157605498765,
                                SourceImage: "doloribus",
                                Type: "ab",
                            },
                        },
                        DockerCacheImages: []string{
                            "iure",
                            "explicabo",
                            "et",
                        },
                        EnableStackdriverMonitoring: false,
                        Labels: map[string]string{
                            "quia": "est",
                        },
                        MachineType: "perferendis",
                        Network: &shared.Network{
                            Name: "fugit",
                            Subnetwork: "earum",
                            UsePrivateAddress: false,
                        },
                        NvidiaDriverVersion: "magni",
                        Preemptible: false,
                        Reservation: "eos",
                        ServiceAccount: &shared.ServiceAccount{
                            Email: "repudiandae",
                            Scopes: []string{
                                "placeat",
                                "vel",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "et",
                                },
                                NfsMount: &shared.NfsMount{
                                    Target: "est",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 7282752345265345301,
                                    SourceImage: "pariatur",
                                    Type: "hic",
                                },
                                Volume: "suscipit",
                            },
                        },
                    },
                    Zones: []string{
                        "est",
                    },
                },
                Timeout: "cupiditate",
            },
            PubSubTopic: "ut",
        },
    }
    
    res, err := s.Pipelines.GenomicsPipelinesRun(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->