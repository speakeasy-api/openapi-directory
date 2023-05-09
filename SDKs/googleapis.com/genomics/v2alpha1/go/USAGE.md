<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pipelines.GenomicsPipelinesRun(ctx, operations.GenomicsPipelinesRunRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
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
                            CipherText: sdk.String("magnam"),
                            KeyName: sdk.String("debitis"),
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: sdk.String("ipsa"),
                            KeyName: sdk.String("delectus"),
                        },
                        Entrypoint: sdk.String("tempora"),
                        Environment: map[string]string{
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            shared.ActionFlagsEnumPublishExposedPorts,
                            shared.ActionFlagsEnumAlwaysRun,
                        },
                        ImageURI: sdk.String("recusandae"),
                        Labels: map[string]string{
                            "ab": "quis",
                            "veritatis": "deserunt",
                            "perferendis": "ipsam",
                            "repellendus": "sapiente",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: sdk.String("odit"),
                                Path: sdk.String("at"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("at"),
                                Path: sdk.String("maiores"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("molestiae"),
                                Path: sdk.String("quod"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("quod"),
                                Path: sdk.String("esse"),
                                ReadOnly: sdk.Bool(false),
                            },
                        },
                        Name: sdk.String("Miss Lowell Parisian"),
                        PidNamespace: sdk.String("occaecati"),
                        PortMappings: map[string]int{
                            "deleniti": 944669,
                        },
                        Timeout: sdk.String("optio"),
                    },
                    shared.Action{
                        Commands: []string{
                            "beatae",
                            "commodi",
                            "molestiae",
                        },
                        Credentials: &shared.Secret{
                            CipherText: sdk.String("modi"),
                            KeyName: sdk.String("qui"),
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: sdk.String("impedit"),
                            KeyName: sdk.String("cum"),
                        },
                        Entrypoint: sdk.String("esse"),
                        Environment: map[string]string{
                            "excepturi": "aspernatur",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            shared.ActionFlagsEnumRunInBackground,
                        },
                        ImageURI: sdk.String("natus"),
                        Labels: map[string]string{
                            "iste": "dolor",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: sdk.String("laboriosam"),
                                Path: sdk.String("hic"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("saepe"),
                                Path: sdk.String("fuga"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("in"),
                                Path: sdk.String("corporis"),
                                ReadOnly: sdk.Bool(false),
                            },
                        },
                        Name: sdk.String("Brad Turcotte Jr."),
                        PidNamespace: sdk.String("reiciendis"),
                        PortMappings: map[string]int{
                            "mollitia": 670638,
                            "dolores": 210382,
                            "corporis": 128926,
                        },
                        Timeout: sdk.String("nobis"),
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: sdk.String("enim"),
                    KeyName: sdk.String("omnis"),
                },
                Environment: map[string]string{
                    "minima": "excepturi",
                    "accusantium": "iure",
                },
                Resources: &shared.Resources{
                    ProjectID: sdk.String("culpa"),
                    Regions: []string{
                        "sapiente",
                        "architecto",
                        "mollitia",
                        "dolorem",
                    },
                    VirtualMachine: &shared.VirtualMachine{
                        Accelerators: []shared.Accelerator{
                            shared.Accelerator{
                                Count: sdk.String("consequuntur"),
                                Type: sdk.String("repellat"),
                            },
                            shared.Accelerator{
                                Count: sdk.String("mollitia"),
                                Type: sdk.String("occaecati"),
                            },
                            shared.Accelerator{
                                Count: sdk.String("numquam"),
                                Type: sdk.String("commodi"),
                            },
                        },
                        BootDiskSizeGb: sdk.Int(466311),
                        BootImage: sdk.String("molestiae"),
                        CPUPlatform: sdk.String("velit"),
                        Disks: []shared.Disk{
                            shared.Disk{
                                Name: sdk.String("Beatrice Brown"),
                                SizeGb: sdk.Int(317202),
                                SourceImage: sdk.String("odit"),
                                Type: sdk.String("quo"),
                            },
                            shared.Disk{
                                Name: sdk.String("Mandy Hills"),
                                SizeGb: sdk.Int(13571),
                                SourceImage: sdk.String("quasi"),
                                Type: sdk.String("error"),
                            },
                            shared.Disk{
                                Name: sdk.String("Neal Boyer"),
                                SizeGb: sdk.Int(878194),
                                SourceImage: sdk.String("nihil"),
                                Type: sdk.String("praesentium"),
                            },
                        },
                        DockerCacheImages: []string{
                            "ipsa",
                            "omnis",
                            "voluptate",
                            "cum",
                        },
                        EnableStackdriverMonitoring: sdk.Bool(false),
                        Labels: map[string]string{
                            "doloremque": "reprehenderit",
                        },
                        MachineType: sdk.String("ut"),
                        Network: &shared.Network{
                            Name: sdk.String("Willie Hessel"),
                            Subnetwork: sdk.String("dicta"),
                            UsePrivateAddress: sdk.Bool(false),
                        },
                        NvidiaDriverVersion: sdk.String("harum"),
                        Preemptible: sdk.Bool(false),
                        Reservation: sdk.String("enim"),
                        ServiceAccount: &shared.ServiceAccount{
                            Email: sdk.String("Harry21@hotmail.com"),
                            Scopes: []string{
                                "molestias",
                                "excepturi",
                                "pariatur",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: sdk.String("praesentium"),
                                },
                                NfsMount: &shared.NFSMount{
                                    Target: sdk.String("rem"),
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: sdk.Int(916723),
                                    SourceImage: sdk.String("quasi"),
                                    Type: sdk.String("repudiandae"),
                                },
                                Volume: sdk.String("sint"),
                            },
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: sdk.String("veritatis"),
                                },
                                NfsMount: &shared.NFSMount{
                                    Target: sdk.String("itaque"),
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: sdk.Int(277718),
                                    SourceImage: sdk.String("enim"),
                                    Type: sdk.String("consequatur"),
                                },
                                Volume: sdk.String("est"),
                            },
                        },
                    },
                    Zones: []string{
                        "explicabo",
                        "deserunt",
                        "distinctio",
                        "quibusdam",
                    },
                },
                Timeout: sdk.String("labore"),
            },
            PubSubTopic: sdk.String("modi"),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("quos"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("alias"),
    }, operations.GenomicsPipelinesRunSecurity{
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