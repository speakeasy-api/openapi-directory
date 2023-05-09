# Pipelines

### Available Operations

* [GenomicsPipelinesRun](#genomicspipelinesrun) - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

## GenomicsPipelinesRun

Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunPipelineRequest: &shared.RunPipelineRequest{
            Labels: map[string]string{
                "excepturi": "tempora",
                "facilis": "tempore",
                "labore": "delectus",
            },
            Pipeline: &shared.Pipeline{
                Actions: []shared.Action{
                    shared.Action{
                        Commands: []string{
                            "eligendi",
                        },
                        Credentials: &shared.Secret{
                            CipherText: sdk.String("sint"),
                            KeyName: sdk.String("aliquid"),
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: sdk.String("provident"),
                            KeyName: sdk.String("necessitatibus"),
                        },
                        Entrypoint: sdk.String("sint"),
                        Environment: map[string]string{
                            "dolor": "debitis",
                            "a": "dolorum",
                            "in": "in",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            shared.ActionFlagsEnumBlockExternalNetwork,
                            shared.ActionFlagsEnumDisableImagePrefetch,
                            shared.ActionFlagsEnumIgnoreExitStatus,
                            shared.ActionFlagsEnumRunInBackground,
                        },
                        ImageURI: sdk.String("cumque"),
                        Labels: map[string]string{
                            "ea": "aliquid",
                            "laborum": "accusamus",
                            "non": "occaecati",
                            "enim": "accusamus",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: sdk.String("quidem"),
                                Path: sdk.String("provident"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("nam"),
                                Path: sdk.String("id"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("blanditiis"),
                                Path: sdk.String("deleniti"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("sapiente"),
                                Path: sdk.String("amet"),
                                ReadOnly: sdk.Bool(false),
                            },
                        },
                        Name: sdk.String("Tyler Kassulke"),
                        PidNamespace: sdk.String("molestiae"),
                        PortMappings: map[string]int{
                            "nihil": 301575,
                        },
                        Timeout: sdk.String("distinctio"),
                    },
                    shared.Action{
                        Commands: []string{
                            "labore",
                            "labore",
                            "suscipit",
                        },
                        Credentials: &shared.Secret{
                            CipherText: sdk.String("natus"),
                            KeyName: sdk.String("nobis"),
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: sdk.String("eum"),
                            KeyName: sdk.String("vero"),
                        },
                        Entrypoint: sdk.String("aspernatur"),
                        Environment: map[string]string{
                            "magnam": "et",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            shared.ActionFlagsEnumAlwaysRun,
                            shared.ActionFlagsEnumPublishExposedPorts,
                            shared.ActionFlagsEnumEnableFuse,
                        },
                        ImageURI: sdk.String("sint"),
                        Labels: map[string]string{
                            "mollitia": "reiciendis",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: sdk.String("ad"),
                                Path: sdk.String("eum"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("dolor"),
                                Path: sdk.String("necessitatibus"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("odit"),
                                Path: sdk.String("nemo"),
                                ReadOnly: sdk.Bool(false),
                            },
                        },
                        Name: sdk.String("Vera Wyman"),
                        PidNamespace: sdk.String("maxime"),
                        PortMappings: map[string]int{
                            "facilis": 447926,
                            "architecto": 99569,
                            "repudiandae": 352312,
                        },
                        Timeout: sdk.String("expedita"),
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: sdk.String("nihil"),
                    KeyName: sdk.String("repellat"),
                },
                Environment: map[string]string{
                    "sed": "saepe",
                    "pariatur": "accusantium",
                    "consequuntur": "praesentium",
                    "natus": "magni",
                },
                Resources: &shared.Resources{
                    ProjectID: sdk.String("sunt"),
                    Regions: []string{
                        "illum",
                        "pariatur",
                        "maxime",
                        "ea",
                    },
                    VirtualMachine: &shared.VirtualMachine{
                        Accelerators: []shared.Accelerator{
                            shared.Accelerator{
                                Count: sdk.String("odit"),
                                Type: sdk.String("ea"),
                            },
                            shared.Accelerator{
                                Count: sdk.String("accusantium"),
                                Type: sdk.String("ab"),
                            },
                            shared.Accelerator{
                                Count: sdk.String("maiores"),
                                Type: sdk.String("quidem"),
                            },
                        },
                        BootDiskSizeGb: sdk.Int(373291),
                        BootImage: sdk.String("voluptate"),
                        CPUPlatform: sdk.String("autem"),
                        Disks: []shared.Disk{
                            shared.Disk{
                                Name: sdk.String("Meredith Hickle PhD"),
                                SizeGb: sdk.Int(230742),
                                SourceImage: sdk.String("aut"),
                                Type: sdk.String("cumque"),
                            },
                            shared.Disk{
                                Name: sdk.String("Mindy Renner"),
                                SizeGb: sdk.Int(339404),
                                SourceImage: sdk.String("totam"),
                                Type: sdk.String("dignissimos"),
                            },
                            shared.Disk{
                                Name: sdk.String("Beatrice Dooley Sr."),
                                SizeGb: sdk.Int(793698),
                                SourceImage: sdk.String("quam"),
                                Type: sdk.String("dolor"),
                            },
                        },
                        DockerCacheImages: []string{
                            "nostrum",
                            "hic",
                            "recusandae",
                            "omnis",
                        },
                        EnableStackdriverMonitoring: sdk.Bool(false),
                        Labels: map[string]string{
                            "perspiciatis": "voluptatem",
                            "porro": "consequuntur",
                            "blanditiis": "error",
                        },
                        MachineType: sdk.String("eaque"),
                        Network: &shared.Network{
                            Name: sdk.String("Jean Ferry"),
                            Subnetwork: sdk.String("modi"),
                            UsePrivateAddress: sdk.Bool(false),
                        },
                        NvidiaDriverVersion: sdk.String("iste"),
                        Preemptible: sdk.Bool(false),
                        Reservation: sdk.String("dolorum"),
                        ServiceAccount: &shared.ServiceAccount{
                            Email: sdk.String("Sam_McLaughlin96@yahoo.com"),
                            Scopes: []string{
                                "quos",
                                "aliquid",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: sdk.String("dolorem"),
                                },
                                NfsMount: &shared.NFSMount{
                                    Target: sdk.String("dolor"),
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: sdk.Int(186193),
                                    SourceImage: sdk.String("ipsum"),
                                    Type: sdk.String("hic"),
                                },
                                Volume: sdk.String("excepturi"),
                            },
                        },
                    },
                    Zones: []string{
                        "voluptate",
                        "dignissimos",
                        "reiciendis",
                    },
                },
                Timeout: sdk.String("amet"),
            },
            PubSubTopic: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("quidem"),
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
