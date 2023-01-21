# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.RunPipelineRequest{
            Labels: map[string]string{
                "dicta": "debitis",
                "voluptatum": "et",
                "ut": "dolorem",
            },
            Pipeline: &shared.Pipeline{
                Actions: []shared.Action{
                    shared.Action{
                        Commands: []string{
                            "iste",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "vitae",
                            KeyName: "totam",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "dolores",
                            KeyName: "illum",
                        },
                        Entrypoint: "debitis",
                        Environment: map[string]string{
                            "odio": "dolore",
                            "id": "aspernatur",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "PUBLISH_EXPOSED_PORTS",
                            "DISABLE_STANDARD_ERROR_CAPTURE",
                            "BLOCK_EXTERNAL_NETWORK",
                        },
                        ImageURI: "est",
                        Labels: map[string]string{
                            "odit": "non",
                            "voluptas": "omnis",
                            "aut": "illo",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "officiis",
                                Path: "autem",
                                ReadOnly: true,
                            },
                            shared.Mount{
                                Disk: "nobis",
                                Path: "odio",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "recusandae",
                                Path: "at",
                                ReadOnly: false,
                            },
                        },
                        Name: "eveniet",
                        PidNamespace: "modi",
                        PortMappings: map[string]int32{
                            "inventore": 7847956203786849690,
                        },
                        Timeout: "exercitationem",
                    },
                    shared.Action{
                        Commands: []string{
                            "reprehenderit",
                            "tempore",
                            "maiores",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "incidunt",
                            KeyName: "dolor",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "beatae",
                            KeyName: "veritatis",
                        },
                        Entrypoint: "in",
                        Environment: map[string]string{
                            "omnis": "ipsum",
                            "ex": "dolores",
                            "placeat": "vel",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "ENABLE_FUSE",
                            "ENABLE_FUSE",
                            "ALWAYS_RUN",
                        },
                        ImageURI: "reprehenderit",
                        Labels: map[string]string{
                            "qui": "unde",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "autem",
                                Path: "qui",
                                ReadOnly: false,
                            },
                            shared.Mount{
                                Disk: "itaque",
                                Path: "ab",
                                ReadOnly: false,
                            },
                        },
                        Name: "ullam",
                        PidNamespace: "et",
                        PortMappings: map[string]int32{
                            "esse": 5902760509050140210,
                            "quam": 3604381780091280195,
                            "cumque": 3331863358128628835,
                        },
                        Timeout: "sunt",
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: "voluptates",
                    KeyName: "magni",
                },
                Environment: map[string]string{
                    "optio": "qui",
                    "earum": "illo",
                    "omnis": "ut",
                },
                Resources: &shared.Resources{
                    ProjectID: "consequatur",
                    Regions: []string{
                        "commodi",
                        "error",
                    },
                    VirtualMachine: &shared.VirtualMachine{
                        Accelerators: []shared.Accelerator{
                            shared.Accelerator{
                                Count: "consectetur",
                                Type: "nostrum",
                            },
                        },
                        BootDiskSizeGb: 950400323440343118,
                        BootImage: "laboriosam",
                        CPUPlatform: "sed",
                        Disks: []shared.Disk{
                            shared.Disk{
                                Name: "soluta",
                                SizeGb: 7540276489530073149,
                                SourceImage: "quas",
                                Type: "consequuntur",
                            },
                        },
                        DockerCacheImages: []string{
                            "autem",
                        },
                        EnableStackdriverMonitoring: true,
                        Labels: map[string]string{
                            "doloremque": "perferendis",
                            "atque": "ratione",
                        },
                        MachineType: "quisquam",
                        Network: &shared.Network{
                            Name: "explicabo",
                            Subnetwork: "ea",
                            UsePrivateAddress: true,
                        },
                        NvidiaDriverVersion: "eum",
                        Preemptible: false,
                        Reservation: "et",
                        ServiceAccount: &shared.ServiceAccount{
                            Email: "rerum",
                            Scopes: []string{
                                "quis",
                                "cumque",
                                "minima",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "est",
                                },
                                NfsMount: &shared.NfsMount{
                                    Target: "quis",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 7478610059307147871,
                                    SourceImage: "labore",
                                    Type: "et",
                                },
                                Volume: "impedit",
                            },
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "ad",
                                },
                                NfsMount: &shared.NfsMount{
                                    Target: "expedita",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 4540487686588600123,
                                    SourceImage: "qui",
                                    Type: "modi",
                                },
                                Volume: "nihil",
                            },
                        },
                    },
                    Zones: []string{
                        "deserunt",
                        "eaque",
                        "sunt",
                    },
                },
                Timeout: "sit",
            },
            PubSubTopic: "autem",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### pipelines

* `GenomicsPipelinesRun` - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### projects

* `GenomicsProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* `GenomicsProjectsOperationsList` - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* `GenomicsProjectsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### workers

* `GenomicsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
