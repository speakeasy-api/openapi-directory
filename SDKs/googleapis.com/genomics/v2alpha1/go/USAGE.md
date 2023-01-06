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
            DollarXgafv: "1",
            AccessToken: "quos",
            Alt: "proto",
            Callback: "veniam",
            Fields: "laboriosam",
            Key: "deserunt",
            OauthToken: "quibusdam",
            PrettyPrint: true,
            QuotaUser: "perspiciatis",
            UploadType: "eos",
            UploadProtocol: "nobis",
        },
        Request: &shared.RunPipelineRequest{
            Labels: map[string]string{
                "dolor": "odio",
            },
            Pipeline: &shared.Pipeline{
                Actions: []shared.Action{
                    shared.Action{
                        Commands: []string{
                            "adipisci",
                            "deserunt",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "iure",
                            KeyName: "aut",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "omnis",
                            KeyName: "qui",
                        },
                        Entrypoint: "odio",
                        Environment: map[string]string{
                            "minima": "dicta",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "BLOCK_EXTERNAL_NETWORK",
                        },
                        ImageURI: "dolorem",
                        Labels: map[string]string{
                            "delectus": "dolore",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "aut",
                                Path: "placeat",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "est",
                                Path: "ut",
                                ReadOnly: true,
                            },
                        },
                        Name: "odit",
                        PidNamespace: "saepe",
                        PortMappings: map[string]int32{
                            "maxime": 7997996156776222842,
                        },
                        Timeout: "aut",
                    },
                    shared.Action{
                        Commands: []string{
                            "fugit",
                            "nostrum",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "quia",
                            KeyName: "numquam",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "quia",
                            KeyName: "molestiae",
                        },
                        Entrypoint: "assumenda",
                        Environment: map[string]string{
                            "quia": "sint",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "DISABLE_IMAGE_PREFETCH",
                            "ENABLE_FUSE",
                            "ALWAYS_RUN",
                        },
                        ImageURI: "et",
                        Labels: map[string]string{
                            "dignissimos": "est",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "ut",
                                Path: "quo",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "in",
                                Path: "sint",
                                ReadOnly: true,
                            },
                        },
                        Name: "sapiente",
                        PidNamespace: "harum",
                        PortMappings: map[string]int32{
                            "impedit": 374383637338744014,
                        },
                        Timeout: "nulla",
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: "praesentium",
                    KeyName: "nulla",
                },
                Environment: map[string]string{
                    "blanditiis": "inventore",
                    "voluptas": "rerum",
                },
                Resources: &shared.Resources{
                    ProjectID: "quibusdam",
                    Regions: []string{
                        "perspiciatis",
                    },
                    VirtualMachine: &shared.VirtualMachine{
                        Accelerators: []shared.Accelerator{
                            shared.Accelerator{
                                Count: "dolorem",
                                Type: "quos",
                            },
                            shared.Accelerator{
                                Count: "exercitationem",
                                Type: "aliquam",
                            },
                        },
                        BootDiskSizeGb: 2818138203026478916,
                        BootImage: "quaerat",
                        CPUPlatform: "atque",
                        Disks: []shared.Disk{
                            shared.Disk{
                                Name: "architecto",
                                SizeGb: 8074191434310262846,
                                SourceImage: "quas",
                                Type: "sed",
                            },
                        },
                        DockerCacheImages: []string{
                            "ratione",
                        },
                        EnableStackdriverMonitoring: false,
                        Labels: map[string]string{
                            "ipsam": "repellat",
                            "consequuntur": "consectetur",
                            "est": "pariatur",
                        },
                        MachineType: "sed",
                        Network: &shared.Network{
                            Name: "non",
                            Subnetwork: "fuga",
                            UsePrivateAddress: false,
                        },
                        NvidiaDriverVersion: "eum",
                        Preemptible: true,
                        Reservation: "est",
                        ServiceAccount: &shared.ServiceAccount{
                            Email: "in",
                            Scopes: []string{
                                "vitae",
                                "reprehenderit",
                                "quia",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "voluptatem",
                                },
                                NfsMount: &shared.NfsMount{
                                    Target: "sit",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 8220186604699685187,
                                    SourceImage: "earum",
                                    Type: "animi",
                                },
                                Volume: "aut",
                            },
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "ex",
                                },
                                NfsMount: &shared.NfsMount{
                                    Target: "et",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 6191106153869714010,
                                    SourceImage: "non",
                                    Type: "consequatur",
                                },
                                Volume: "cumque",
                            },
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "autem",
                                },
                                NfsMount: &shared.NfsMount{
                                    Target: "et",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 2390235954540224131,
                                    SourceImage: "iure",
                                    Type: "exercitationem",
                                },
                                Volume: "molestiae",
                            },
                        },
                    },
                    Zones: []string{
                        "deleniti",
                    },
                },
                Timeout: "vel",
            },
            PubSubTopic: "commodi",
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