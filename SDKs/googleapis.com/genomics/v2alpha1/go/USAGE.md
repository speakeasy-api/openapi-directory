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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.RunPipelineRequest{
            Labels: map[string]string{
                "eum": "iusto",
                "ullam": "saepe",
                "inventore": "sapiente",
            },
            Pipeline: &shared.Pipeline{
                Actions: []shared.Action{
                    shared.Action{
                        Commands: []string{
                            "voluptatum",
                            "autem",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "vel",
                            KeyName: "non",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "deleniti",
                            KeyName: "similique",
                        },
                        Entrypoint: "reprehenderit",
                        Environment: map[string]string{
                            "quo": "quasi",
                            "laboriosam": "dicta",
                            "est": "voluptatem",
                            "consequatur": "fugiat",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "DISABLE_STANDARD_ERROR_CAPTURE",
                            "IGNORE_EXIT_STATUS",
                            "DISABLE_STANDARD_ERROR_CAPTURE",
                            "DISABLE_STANDARD_ERROR_CAPTURE",
                        },
                        ImageURI: "reiciendis",
                        Labels: map[string]string{
                            "quibusdam": "et",
                            "praesentium": "occaecati",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "soluta",
                                Path: "sed",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "quisquam",
                                Path: "rerum",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "culpa",
                                Path: "qui",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "sed",
                                Path: "rerum",
                                ReadOnly: false,
                            },
                        },
                        Name: "possimus",
                        PidNamespace: "occaecati",
                        PortMappings: map[string]int{
                            "esse": 473600,
                        },
                        Timeout: "voluptatem",
                    },
                    shared.Action{
                        Commands: []string{
                            "est",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "id",
                            KeyName: "blanditiis",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "numquam",
                            KeyName: "similique",
                        },
                        Entrypoint: "dolores",
                        Environment: map[string]string{
                            "quia": "et",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "PUBLISH_EXPOSED_PORTS",
                        },
                        ImageURI: "modi",
                        Labels: map[string]string{
                            "iure": "earum",
                            "ut": "soluta",
                            "qui": "ea",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "iusto",
                                Path: "ut",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "optio",
                                Path: "aspernatur",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "inventore",
                                Path: "ut",
                                ReadOnly: false,
                            },
                        },
                        Name: "libero",
                        PidNamespace: "et",
                        PortMappings: map[string]int{
                            "ipsum": 210382,
                            "ea": 128926,
                            "placeat": 315428,
                        },
                        Timeout: "est",
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: "commodi",
                    KeyName: "quia",
                },
                Environment: map[string]string{
                    "eaque": "odio",
                    "harum": "doloribus",
                    "a": "aut",
                },
                Resources: &shared.Resources{
                    ProjectID: "et",
                    Regions: []string{
                        "quidem",
                    },
                    VirtualMachine: &shared.VirtualMachine{
                        Accelerators: []shared.Accelerator{
                            shared.Accelerator{
                                Count: "asperiores",
                                Type: "et",
                            },
                        },
                        BootDiskSizeGb: 581850,
                        BootImage: "aliquam",
                        CPUPlatform: "esse",
                        Disks: []shared.Disk{
                            shared.Disk{
                                Name: "voluptatum",
                                SizeGb: 244425,
                                SourceImage: "fuga",
                                Type: "nesciunt",
                            },
                            shared.Disk{
                                Name: "laboriosam",
                                SizeGb: 110375,
                                SourceImage: "cum",
                                Type: "expedita",
                            },
                        },
                        DockerCacheImages: []string{
                            "eos",
                            "omnis",
                        },
                        EnableStackdriverMonitoring: false,
                        Labels: map[string]string{
                            "hic": "consequatur",
                        },
                        MachineType: "distinctio",
                        Network: &shared.Network{
                            Name: "qui",
                            Subnetwork: "perferendis",
                            UsePrivateAddress: false,
                        },
                        NvidiaDriverVersion: "aspernatur",
                        Preemptible: false,
                        Reservation: "fuga",
                        ServiceAccount: &shared.ServiceAccount{
                            Email: "Marge_Boyer87@hotmail.com",
                            Scopes: []string{
                                "molestias",
                                "reiciendis",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "id",
                                },
                                NfsMount: &shared.NFSMount{
                                    Target: "qui",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 739264,
                                    SourceImage: "sit",
                                    Type: "eaque",
                                },
                                Volume: "odio",
                            },
                        },
                    },
                    Zones: []string{
                        "reiciendis",
                        "sed",
                    },
                },
                Timeout: "ea",
            },
            PubSubTopic: "exercitationem",
        },
    }

    ctx := context.Background()
    res, err := s.Pipelines.GenomicsPipelinesRun(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->