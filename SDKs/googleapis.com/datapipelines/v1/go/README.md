# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datapipelines/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.DatapipelinesProjectsLocationsPipelinesCreateRequest{
        DollarXgafv: "2",
        GoogleCloudDatapipelinesV1PipelineInput: &shared.GoogleCloudDatapipelinesV1PipelineInput{
            DisplayName: "provident",
            Name: "distinctio",
            PipelineSources: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            ScheduleInfo: &shared.GoogleCloudDatapipelinesV1ScheduleSpecInput{
                Schedule: "iure",
                TimeZone: "magnam",
            },
            SchedulerServiceAccountEmail: "debitis",
            State: "STATE_UNSPECIFIED",
            Type: "PIPELINE_TYPE_STREAMING",
            Workload: &shared.GoogleCloudDatapipelinesV1Workload{
                DataflowFlexTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest{
                    LaunchParameter: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter{
                        ContainerSpecGcsPath: "tempora",
                        Environment: &shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "molestiae",
                                "minus",
                            },
                            AdditionalUserLabels: map[string]string{
                                "voluptatum": "iusto",
                                "excepturi": "nisi",
                                "recusandae": "temporibus",
                                "ab": "quis",
                            },
                            EnableStreamingEngine: false,
                            FlexrsGoal: "FLEXRS_UNSPECIFIED",
                            IPConfiguration: "WORKER_IP_PUBLIC",
                            KmsKeyName: "perferendis",
                            MachineType: "ipsam",
                            MaxWorkers: 832620,
                            Network: "sapiente",
                            NumWorkers: 778157,
                            ServiceAccountEmail: "odit",
                            Subnetwork: "at",
                            TempLocation: "at",
                            WorkerRegion: "maiores",
                            WorkerZone: "molestiae",
                            Zone: "quod",
                        },
                        JobName: "quod",
                        LaunchOptions: map[string]string{
                            "totam": "porro",
                            "dolorum": "dicta",
                        },
                        Parameters: map[string]string{
                            "officia": "occaecati",
                            "fugit": "deleniti",
                            "hic": "optio",
                        },
                        TransformNameMappings: map[string]string{
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                        Update: false,
                    },
                    Location: "cum",
                    ProjectID: "esse",
                    ValidateOnly: false,
                },
                DataflowLaunchTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest{
                    GcsPath: "ipsum",
                    LaunchParameters: &shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters{
                        Environment: &shared.GoogleCloudDatapipelinesV1RuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "aspernatur",
                                "perferendis",
                                "ad",
                            },
                            AdditionalUserLabels: map[string]string{
                                "sed": "iste",
                                "dolor": "natus",
                                "laboriosam": "hic",
                            },
                            BypassTempDirValidation: false,
                            EnableStreamingEngine: false,
                            IPConfiguration: "WORKER_IP_PRIVATE",
                            KmsKeyName: "fuga",
                            MachineType: "in",
                            MaxWorkers: 359508,
                            Network: "iste",
                            NumWorkers: 437032,
                            ServiceAccountEmail: "saepe",
                            Subnetwork: "quidem",
                            TempLocation: "architecto",
                            WorkerRegion: "ipsa",
                            WorkerZone: "reiciendis",
                            Zone: "est",
                        },
                        JobName: "mollitia",
                        Parameters: map[string]string{
                            "dolores": "dolorem",
                            "corporis": "explicabo",
                            "nobis": "enim",
                        },
                        TransformNameMapping: map[string]string{
                            "nemo": "minima",
                            "excepturi": "accusantium",
                            "iure": "culpa",
                        },
                        Update: false,
                    },
                    Location: "doloribus",
                    ProjectID: "sapiente",
                    ValidateOnly: false,
                },
            },
        },
        AccessToken: "architecto",
        Alt: "media",
        Callback: "dolorem",
        Fields: "culpa",
        Key: "consequuntur",
        OauthToken: "repellat",
        Parent: "mollitia",
        PrettyPrint: false,
        QuotaUser: "occaecati",
        UploadType: "numquam",
        UploadProtocol: "commodi",
    }

    ctx := context.Background()
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesCreate(ctx, req, operations.DatapipelinesProjectsLocationsPipelinesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatapipelinesV1Pipeline != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `DatapipelinesProjectsLocationsPipelinesCreate` - Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
* `DatapipelinesProjectsLocationsPipelinesDelete` - Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
* `DatapipelinesProjectsLocationsPipelinesGet` - Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `DatapipelinesProjectsLocationsPipelinesJobsList` - Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `DatapipelinesProjectsLocationsPipelinesList` - Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `DatapipelinesProjectsLocationsPipelinesPatch` - Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
* `DatapipelinesProjectsLocationsPipelinesRun` - Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
* `DatapipelinesProjectsLocationsPipelinesStop` - Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
