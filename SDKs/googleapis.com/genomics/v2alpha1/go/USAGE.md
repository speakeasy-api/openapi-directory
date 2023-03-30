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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.RunPipelineRequest{
            Labels: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Pipeline: &shared.Pipeline{
                Actions: []shared.Action{
                    shared.Action{
                        Commands: []string{
                            "molestiae",
                            "minus",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "placeat",
                            KeyName: "voluptatum",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "iusto",
                            KeyName: "excepturi",
                        },
                        Entrypoint: "nisi",
                        Environment: map[string]string{
                            "temporibus": "ab",
                            "quis": "veritatis",
                            "deserunt": "perferendis",
                            "ipsam": "repellendus",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "DISABLE_STANDARD_ERROR_CAPTURE",
                            "IGNORE_EXIT_STATUS",
                            "DISABLE_STANDARD_ERROR_CAPTURE",
                            "DISABLE_STANDARD_ERROR_CAPTURE",
                        },
                        ImageURI: "maiores",
                        Labels: map[string]string{
                            "quod": "quod",
                            "esse": "totam",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "dolorum",
                                Path: "dicta",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "nam",
                                Path: "officia",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "occaecati",
                                Path: "fugit",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "deleniti",
                                Path: "hic",
                                ReadOnly: false,
                            },
                        },
                        Name: "optio",
                        PidNamespace: "totam",
                        PortMappings: map[string]int{
                            "commodi": 473600,
                        },
                        Timeout: "modi",
                    },
                    shared.Action{
                        Commands: []string{
                            "impedit",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "cum",
                            KeyName: "esse",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "ipsum",
                            KeyName: "excepturi",
                        },
                        Entrypoint: "aspernatur",
                        Environment: map[string]string{
                            "ad": "natus",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "PUBLISH_EXPOSED_PORTS",
                        },
                        ImageURI: "dolor",
                        Labels: map[string]string{
                            "laboriosam": "hic",
                            "saepe": "fuga",
                            "in": "corporis",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "iure",
                                Path: "saepe",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "quidem",
                                Path: "architecto",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "ipsa",
                                Path: "reiciendis",
                                ReadOnly: false,
                            },
                        },
                        Name: "est",
                        PidNamespace: "mollitia",
                        PortMappings: map[string]int{
                            "dolores": 210382,
                            "corporis": 128926,
                            "nobis": 315428,
                        },
                        Timeout: "omnis",
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: "nemo",
                    KeyName: "minima",
                },
                Environment: map[string]string{
                    "accusantium": "iure",
                    "culpa": "doloribus",
                    "sapiente": "architecto",
                },
                Resources: &shared.Resources{
                    ProjectID: "mollitia",
                    Regions: []string{
                        "culpa",
                    },
                    VirtualMachine: &shared.VirtualMachine{
                        Accelerators: []shared.Accelerator{
                            shared.Accelerator{
                                Count: "repellat",
                                Type: "mollitia",
                            },
                        },
                        BootDiskSizeGb: 581850,
                        BootImage: "numquam",
                        CPUPlatform: "commodi",
                        Disks: []shared.Disk{
                            shared.Disk{
                                Name: "molestiae",
                                SizeGb: 244425,
                                SourceImage: "error",
                                Type: "quia",
                            },
                            shared.Disk{
                                Name: "quis",
                                SizeGb: 110375,
                                SourceImage: "laborum",
                                Type: "animi",
                            },
                        },
                        DockerCacheImages: []string{
                            "odit",
                            "quo",
                        },
                        EnableStackdriverMonitoring: false,
                        Labels: map[string]string{
                            "tenetur": "ipsam",
                        },
                        MachineType: "id",
                        Network: &shared.Network{
                            Name: "possimus",
                            Subnetwork: "aut",
                            UsePrivateAddress: false,
                        },
                        NvidiaDriverVersion: "quasi",
                        Preemptible: false,
                        Reservation: "error",
                        ServiceAccount: &shared.ServiceAccount{
                            Email: "Margie_Boyer87@hotmail.com",
                            Scopes: []string{
                                "praesentium",
                                "voluptatibus",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "omnis",
                                },
                                NfsMount: &shared.NFSMount{
                                    Target: "voluptate",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 739264,
                                    SourceImage: "perferendis",
                                    Type: "doloremque",
                                },
                                Volume: "reprehenderit",
                            },
                        },
                    },
                    Zones: []string{
                        "maiores",
                        "dicta",
                    },
                },
                Timeout: "corporis",
            },
            PubSubTopic: "dolore",
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