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
        Security: operations.DatapipelinesProjectsLocationsPipelinesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatapipelinesProjectsLocationsPipelinesCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.DatapipelinesProjectsLocationsPipelinesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudDatapipelinesV1PipelineInput{
            DisplayName: "eum",
            Name: "iusto",
            PipelineSources: map[string]string{
                "saepe": "inventore",
                "sapiente": "enim",
            },
            ScheduleInfo: &shared.GoogleCloudDatapipelinesV1ScheduleSpecInput{
                Schedule: "eum",
                TimeZone: "voluptatum",
            },
            SchedulerServiceAccountEmail: "autem",
            State: "STATE_ARCHIVED",
            Type: "PIPELINE_TYPE_BATCH",
            Workload: &shared.GoogleCloudDatapipelinesV1Workload{
                DataflowFlexTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest{
                    LaunchParameter: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter{
                        ContainerSpecGcsPath: "deleniti",
                        Environment: &shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "reprehenderit",
                                "molestiae",
                                "quo",
                            },
                            AdditionalUserLabels: map[string]string{
                                "laboriosam": "dicta",
                            },
                            EnableStreamingEngine: false,
                            FlexrsGoal: "FLEXRS_SPEED_OPTIMIZED",
                            IPConfiguration: "WORKER_IP_UNSPECIFIED",
                            KmsKeyName: "consequatur",
                            MachineType: "fugiat",
                            MaxWorkers: 957156,
                            Network: "omnis",
                            NumWorkers: 140350,
                            ServiceAccountEmail: "accusamus",
                            Subnetwork: "accusamus",
                            TempLocation: "reiciendis",
                            WorkerRegion: "rem",
                            WorkerZone: "quibusdam",
                            Zone: "et",
                        },
                        JobName: "praesentium",
                        LaunchOptions: map[string]string{
                            "dolor": "soluta",
                            "sed": "quisquam",
                            "rerum": "culpa",
                        },
                        Parameters: map[string]string{
                            "sed": "rerum",
                        },
                        TransformNameMappings: map[string]string{
                            "occaecati": "odit",
                            "esse": "rem",
                            "voluptatem": "amet",
                            "est": "id",
                        },
                        Update: false,
                    },
                    Location: "blanditiis",
                    ProjectID: "numquam",
                    ValidateOnly: false,
                },
                DataflowLaunchTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest{
                    GcsPath: "similique",
                    LaunchParameters: &shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters{
                        Environment: &shared.GoogleCloudDatapipelinesV1RuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "sit",
                            },
                            AdditionalUserLabels: map[string]string{
                                "et": "voluptatem",
                                "laborum": "modi",
                            },
                            BypassTempDirValidation: false,
                            EnableStreamingEngine: false,
                            IPConfiguration: "WORKER_IP_PUBLIC",
                            KmsKeyName: "iure",
                            MachineType: "earum",
                            MaxWorkers: 902599,
                            Network: "soluta",
                            NumWorkers: 449950,
                            ServiceAccountEmail: "ea",
                            Subnetwork: "laborum",
                            TempLocation: "iusto",
                            WorkerRegion: "ut",
                            WorkerZone: "optio",
                            Zone: "aspernatur",
                        },
                        JobName: "inventore",
                        Parameters: map[string]string{
                            "libero": "et",
                            "libero": "ipsum",
                            "non": "ea",
                            "magni": "placeat",
                        },
                        TransformNameMapping: map[string]string{
                            "est": "commodi",
                            "quia": "similique",
                        },
                        Update: false,
                    },
                    Location: "eaque",
                    ProjectID: "odio",
                    ValidateOnly: false,
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesCreate(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
