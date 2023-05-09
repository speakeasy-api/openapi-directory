# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/genomics/v2alpha1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Pipelines](docs/pipelines/README.md)

* [GenomicsPipelinesRun](docs/pipelines/README.md#genomicspipelinesrun) - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### [Projects](docs/projects/README.md)

* [GenomicsProjectsOperationsCancel](docs/projects/README.md#genomicsprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* [GenomicsProjectsOperationsList](docs/projects/README.md#genomicsprojectsoperationslist) - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* [GenomicsProjectsWorkersCheckIn](docs/projects/README.md#genomicsprojectsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### [Workers](docs/workers/README.md)

* [GenomicsWorkersCheckIn](docs/workers/README.md#genomicsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
