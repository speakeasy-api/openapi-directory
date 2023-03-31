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
        DollarXgafv: "2",
        RunPipelineRequest: &shared.RunPipelineRequest{
            Labels: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            Pipeline: &shared.Pipeline{
                Actions: []shared.Action{
                    shared.Action{
                        Commands: []string{
                            "deserunt",
                            "suscipit",
                            "iure",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "magnam",
                            KeyName: "debitis",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "ipsa",
                            KeyName: "delectus",
                        },
                        Entrypoint: "tempora",
                        Environment: map[string]string{
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "PUBLISH_EXPOSED_PORTS",
                            "ALWAYS_RUN",
                        },
                        ImageURI: "recusandae",
                        Labels: map[string]string{
                            "ab": "quis",
                            "veritatis": "deserunt",
                            "perferendis": "ipsam",
                            "repellendus": "sapiente",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "odit",
                                Path: "at",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "at",
                                Path: "maiores",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "molestiae",
                                Path: "quod",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "quod",
                                Path: "esse",
                                ReadOnly: false,
                            },
                        },
                        Name: "totam",
                        PidNamespace: "porro",
                        PortMappings: map[string]int{
                            "dicta": 720633,
                            "officia": 582020,
                            "fugit": 537373,
                        },
                        Timeout: "hic",
                    },
                    shared.Action{
                        Commands: []string{
                            "totam",
                            "beatae",
                            "commodi",
                            "molestiae",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "modi",
                            KeyName: "qui",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "impedit",
                            KeyName: "cum",
                        },
                        Entrypoint: "esse",
                        Environment: map[string]string{
                            "excepturi": "aspernatur",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "RUN_IN_BACKGROUND",
                        },
                        ImageURI: "natus",
                        Labels: map[string]string{
                            "iste": "dolor",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "laboriosam",
                                Path: "hic",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "saepe",
                                Path: "fuga",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "in",
                                Path: "corporis",
                                ReadOnly: false,
                            },
                        },
                        Name: "iste",
                        PidNamespace: "iure",
                        PortMappings: map[string]int{
                            "quidem": 99280,
                            "ipsa": 969810,
                            "est": 653140,
                            "laborum": 170909,
                        },
                        Timeout: "dolorem",
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: "corporis",
                    KeyName: "explicabo",
                },
                Environment: map[string]string{
                    "enim": "omnis",
                    "nemo": "minima",
                    "excepturi": "accusantium",
                    "iure": "culpa",
                },
                Resources: &shared.Resources{
                    ProjectID: "doloribus",
                    Regions: []string{
                        "architecto",
                        "mollitia",
                        "dolorem",
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
        AccessToken: "iusto",
        Alt: "json",
        Callback: "harum",
        Fields: "enim",
        Key: "accusamus",
        OauthToken: "commodi",
        PrettyPrint: false,
        QuotaUser: "repudiandae",
        UploadType: "quae",
        UploadProtocol: "ipsum",
    }

    ctx := context.Background()
    res, err := s.Pipelines.GenomicsPipelinesRun(ctx, req, operations.GenomicsPipelinesRunSecurity{
        Option1: &operations.GenomicsPipelinesRunSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->