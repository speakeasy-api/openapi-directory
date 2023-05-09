# Projects

### Available Operations

* [LifesciencesProjectsLocationsList](#lifesciencesprojectslocationslist) - Lists information about the supported locations for this service.
* [LifesciencesProjectsLocationsOperationsCancel](#lifesciencesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.cancel`
* [LifesciencesProjectsLocationsOperationsGet](#lifesciencesprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.get`
* [LifesciencesProjectsLocationsOperationsList](#lifesciencesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.list`
* [LifesciencesProjectsLocationsPipelinesRun](#lifesciencesprojectslocationspipelinesrun) - Runs a pipeline. The returned Operation's metadata field will contain a google.cloud.lifesciences.v2beta.Metadata object describing the status of the pipeline execution. The response field will contain a google.cloud.lifesciences.v2beta.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the *Life Sciences Service Agent* must have access to your project. This is done automatically when the Cloud Life Sciences API is first enabled, but if you delete this permission you must disable and re-enable the API to grant the Life Sciences Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `lifesciences.workflows.run`

## LifesciencesProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.LifesciencesProjectsLocationsList(ctx, operations.LifesciencesProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.LifesciencesProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## LifesciencesProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.cancel`

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
    res, err := s.Projects.LifesciencesProjectsLocationsOperationsCancel(ctx, operations.LifesciencesProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "maiores": "molestiae",
            "quod": "quod",
            "esse": "totam",
            "porro": "dolorum",
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("fugit"),
        Name: "Irvin Rosenbaum III",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.LifesciencesProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## LifesciencesProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.get`

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
    res, err := s.Projects.LifesciencesProjectsLocationsOperationsGet(ctx, operations.LifesciencesProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        Name: "Faye Cormier",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.LifesciencesProjectsLocationsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## LifesciencesProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.list`

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
    res, err := s.Projects.LifesciencesProjectsLocationsOperationsList(ctx, operations.LifesciencesProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Filter: sdk.String("saepe"),
        Key: sdk.String("quidem"),
        Name: "Brenda Wisozk",
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(170909),
        PageToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.LifesciencesProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## LifesciencesProjectsLocationsPipelinesRun

Runs a pipeline. The returned Operation's metadata field will contain a google.cloud.lifesciences.v2beta.Metadata object describing the status of the pipeline execution. The response field will contain a google.cloud.lifesciences.v2beta.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the *Life Sciences Service Agent* must have access to your project. This is done automatically when the Cloud Life Sciences API is first enabled, but if you delete this permission you must disable and re-enable the API to grant the Life Sciences Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `lifesciences.workflows.run`

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
    res, err := s.Projects.LifesciencesProjectsLocationsPipelinesRun(ctx, operations.LifesciencesProjectsLocationsPipelinesRunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunPipelineRequest: &shared.RunPipelineRequest{
            Labels: map[string]string{
                "nemo": "minima",
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            Pipeline: &shared.Pipeline{
                Actions: []shared.Action{
                    shared.Action{
                        AlwaysRun: sdk.Bool(false),
                        BlockExternalNetwork: sdk.Bool(false),
                        Commands: []string{
                            "architecto",
                            "mollitia",
                            "dolorem",
                            "culpa",
                        },
                        ContainerName: sdk.String("consequuntur"),
                        Credentials: &shared.Secret{
                            CipherText: sdk.String("repellat"),
                            KeyName: sdk.String("mollitia"),
                        },
                        DisableImagePrefetch: sdk.Bool(false),
                        DisableStandardErrorCapture: sdk.Bool(false),
                        EnableFuse: sdk.Bool(false),
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: sdk.String("occaecati"),
                            KeyName: sdk.String("numquam"),
                        },
                        Entrypoint: sdk.String("commodi"),
                        Environment: map[string]string{
                            "molestiae": "velit",
                            "error": "quia",
                        },
                        IgnoreExitStatus: sdk.Bool(false),
                        ImageURI: sdk.String("quis"),
                        Labels: map[string]string{
                            "laborum": "animi",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: sdk.String("odit"),
                                Path: sdk.String("quo"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("sequi"),
                                Path: sdk.String("tenetur"),
                                ReadOnly: sdk.Bool(false),
                            },
                        },
                        PidNamespace: sdk.String("ipsam"),
                        PortMappings: map[string]int{
                            "possimus": 13571,
                            "quasi": 622846,
                            "temporibus": 673660,
                        },
                        PublishExposedPorts: sdk.Bool(false),
                        RunInBackground: sdk.Bool(false),
                        Timeout: sdk.String("quasi"),
                    },
                    shared.Action{
                        AlwaysRun: sdk.Bool(false),
                        BlockExternalNetwork: sdk.Bool(false),
                        Commands: []string{
                            "voluptatibus",
                            "vero",
                            "nihil",
                            "praesentium",
                        },
                        ContainerName: sdk.String("voluptatibus"),
                        Credentials: &shared.Secret{
                            CipherText: sdk.String("ipsa"),
                            KeyName: sdk.String("omnis"),
                        },
                        DisableImagePrefetch: sdk.Bool(false),
                        DisableStandardErrorCapture: sdk.Bool(false),
                        EnableFuse: sdk.Bool(false),
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: sdk.String("voluptate"),
                            KeyName: sdk.String("cum"),
                        },
                        Entrypoint: sdk.String("perferendis"),
                        Environment: map[string]string{
                            "reprehenderit": "ut",
                        },
                        IgnoreExitStatus: sdk.Bool(false),
                        ImageURI: sdk.String("maiores"),
                        Labels: map[string]string{
                            "corporis": "dolore",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: sdk.String("dicta"),
                                Path: sdk.String("harum"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("enim"),
                                Path: sdk.String("accusamus"),
                                ReadOnly: sdk.Bool(false),
                            },
                        },
                        PidNamespace: sdk.String("commodi"),
                        PortMappings: map[string]int{
                            "quae": 216822,
                            "quidem": 565189,
                            "excepturi": 865103,
                            "modi": 508969,
                        },
                        PublishExposedPorts: sdk.Bool(false),
                        RunInBackground: sdk.Bool(false),
                        Timeout: sdk.String("rem"),
                    },
                    shared.Action{
                        AlwaysRun: sdk.Bool(false),
                        BlockExternalNetwork: sdk.Bool(false),
                        Commands: []string{
                            "quasi",
                            "repudiandae",
                            "sint",
                            "veritatis",
                        },
                        ContainerName: sdk.String("itaque"),
                        Credentials: &shared.Secret{
                            CipherText: sdk.String("incidunt"),
                            KeyName: sdk.String("enim"),
                        },
                        DisableImagePrefetch: sdk.Bool(false),
                        DisableStandardErrorCapture: sdk.Bool(false),
                        EnableFuse: sdk.Bool(false),
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: sdk.String("consequatur"),
                            KeyName: sdk.String("est"),
                        },
                        Entrypoint: sdk.String("quibusdam"),
                        Environment: map[string]string{
                            "deserunt": "distinctio",
                        },
                        IgnoreExitStatus: sdk.Bool(false),
                        ImageURI: sdk.String("quibusdam"),
                        Labels: map[string]string{
                            "modi": "qui",
                            "aliquid": "cupiditate",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: sdk.String("perferendis"),
                                Path: sdk.String("magni"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("assumenda"),
                                Path: sdk.String("ipsam"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("alias"),
                                Path: sdk.String("fugit"),
                                ReadOnly: sdk.Bool(false),
                            },
                        },
                        PidNamespace: sdk.String("dolorum"),
                        PortMappings: map[string]int{
                            "tempora": 703737,
                            "tempore": 288476,
                            "delectus": 433288,
                        },
                        PublishExposedPorts: sdk.Bool(false),
                        RunInBackground: sdk.Bool(false),
                        Timeout: sdk.String("non"),
                    },
                    shared.Action{
                        AlwaysRun: sdk.Bool(false),
                        BlockExternalNetwork: sdk.Bool(false),
                        Commands: []string{
                            "sint",
                            "aliquid",
                            "provident",
                            "necessitatibus",
                        },
                        ContainerName: sdk.String("sint"),
                        Credentials: &shared.Secret{
                            CipherText: sdk.String("officia"),
                            KeyName: sdk.String("dolor"),
                        },
                        DisableImagePrefetch: sdk.Bool(false),
                        DisableStandardErrorCapture: sdk.Bool(false),
                        EnableFuse: sdk.Bool(false),
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: sdk.String("debitis"),
                            KeyName: sdk.String("a"),
                        },
                        Entrypoint: sdk.String("dolorum"),
                        Environment: map[string]string{
                            "in": "illum",
                            "maiores": "rerum",
                        },
                        IgnoreExitStatus: sdk.Bool(false),
                        ImageURI: sdk.String("dicta"),
                        Labels: map[string]string{
                            "cumque": "facere",
                            "ea": "aliquid",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: sdk.String("accusamus"),
                                Path: sdk.String("non"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("occaecati"),
                                Path: sdk.String("enim"),
                                ReadOnly: sdk.Bool(false),
                            },
                            shared.Mount{
                                Disk: sdk.String("accusamus"),
                                Path: sdk.String("delectus"),
                                ReadOnly: sdk.Bool(false),
                            },
                        },
                        PidNamespace: sdk.String("quidem"),
                        PortMappings: map[string]int{
                            "nam": 659669,
                            "blanditiis": 533206,
                            "sapiente": 230533,
                        },
                        PublishExposedPorts: sdk.Bool(false),
                        RunInBackground: sdk.Bool(false),
                        Timeout: sdk.String("deserunt"),
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: sdk.String("nisi"),
                    KeyName: sdk.String("vel"),
                },
                Environment: map[string]string{
                    "omnis": "molestiae",
                    "perferendis": "nihil",
                    "magnam": "distinctio",
                },
                Resources: &shared.Resources{
                    Regions: []string{
                        "labore",
                        "labore",
                        "suscipit",
                    },
                    VirtualMachine: &shared.VirtualMachine{
                        Accelerators: []shared.Accelerator{
                            shared.Accelerator{
                                Count: sdk.String("nobis"),
                                Type: sdk.String("eum"),
                            },
                            shared.Accelerator{
                                Count: sdk.String("vero"),
                                Type: sdk.String("aspernatur"),
                            },
                            shared.Accelerator{
                                Count: sdk.String("architecto"),
                                Type: sdk.String("magnam"),
                            },
                        },
                        BootDiskSizeGb: sdk.Int(92373),
                        BootImage: sdk.String("excepturi"),
                        CPUPlatform: sdk.String("ullam"),
                        Disks: []shared.Disk{
                            shared.Disk{
                                Name: sdk.String("Kirk Bartoletti"),
                                SizeGb: sdk.Int(652103),
                                SourceImage: sdk.String("ad"),
                                Type: sdk.String("eum"),
                            },
                            shared.Disk{
                                Name: sdk.String("Jana Connelly III"),
                                SizeGb: sdk.Int(984043),
                                SourceImage: sdk.String("debitis"),
                                Type: sdk.String("eius"),
                            },
                            shared.Disk{
                                Name: sdk.String("Alfredo Prosacco Sr."),
                                SizeGb: sdk.Int(919483),
                                SourceImage: sdk.String("ullam"),
                                Type: sdk.String("expedita"),
                            },
                        },
                        DockerCacheImages: []string{
                            "repellat",
                            "quibusdam",
                        },
                        EnableStackdriverMonitoring: sdk.Bool(false),
                        Labels: map[string]string{
                            "saepe": "pariatur",
                        },
                        MachineType: sdk.String("accusantium"),
                        Network: &shared.Network{
                            Network: sdk.String("consequuntur"),
                            Subnetwork: sdk.String("praesentium"),
                            UsePrivateAddress: sdk.Bool(false),
                        },
                        NvidiaDriverVersion: sdk.String("natus"),
                        Preemptible: sdk.Bool(false),
                        Reservation: sdk.String("magni"),
                        ServiceAccount: &shared.ServiceAccount{
                            Email: sdk.String("Orrin_Stanton41@gmail.com"),
                            Scopes: []string{
                                "odit",
                                "ea",
                                "accusantium",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: sdk.String("maiores"),
                                },
                                NfsMount: &shared.NFSMount{
                                    Target: sdk.String("quidem"),
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: sdk.Int(373291),
                                    SourceImage: sdk.String("voluptate"),
                                    Type: sdk.String("autem"),
                                },
                                Volume: sdk.String("nam"),
                            },
                        },
                    },
                    Zones: []string{
                        "pariatur",
                    },
                },
                Timeout: sdk.String("nemo"),
            },
            PubSubTopic: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("aut"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("corporis"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.LifesciencesProjectsLocationsPipelinesRunSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
