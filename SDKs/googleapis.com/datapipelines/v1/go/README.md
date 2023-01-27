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
            Parent: "sit",
        },
        QueryParams: operations.DatapipelinesProjectsLocationsPipelinesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudDatapipelinesV1PipelineInput{
            DisplayName: "dicta",
            Name: "debitis",
            PipelineSources: map[string]string{
                "et": "ut",
            },
            ScheduleInfo: &shared.GoogleCloudDatapipelinesV1ScheduleSpecInput{
                Schedule: "dolorem",
                TimeZone: "et",
            },
            SchedulerServiceAccountEmail: "voluptate",
            State: "STATE_PAUSED",
            Type: "PIPELINE_TYPE_UNSPECIFIED",
            Workload: &shared.GoogleCloudDatapipelinesV1Workload{
                DataflowFlexTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest{
                    LaunchParameter: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter{
                        ContainerSpecGcsPath: "totam",
                        Environment: &shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "illum",
                            },
                            AdditionalUserLabels: map[string]string{
                                "vel": "odio",
                            },
                            EnableStreamingEngine: true,
                            FlexrsGoal: "FLEXRS_SPEED_OPTIMIZED",
                            IPConfiguration: "WORKER_IP_UNSPECIFIED",
                            KmsKeyName: "accusantium",
                            MachineType: "totam",
                            MaxWorkers: 6745438398739480977,
                            Network: "quis",
                            NumWorkers: 3398579248012586914,
                            ServiceAccountEmail: "aut",
                            Subnetwork: "odit",
                            TempLocation: "non",
                            WorkerRegion: "voluptas",
                            WorkerZone: "omnis",
                            Zone: "aut",
                        },
                        JobName: "illo",
                        LaunchOptions: map[string]string{
                            "officiis": "autem",
                            "consectetur": "nobis",
                            "odio": "qui",
                        },
                        Parameters: map[string]string{
                            "at": "ipsum",
                            "eveniet": "modi",
                            "sint": "inventore",
                        },
                        TransformNameMappings: map[string]string{
                            "exercitationem": "aut",
                            "reprehenderit": "tempore",
                            "maiores": "incidunt",
                        },
                        Update: false,
                    },
                    Location: "beatae",
                    ProjectID: "veritatis",
                    ValidateOnly: true,
                },
                DataflowLaunchTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest{
                    GcsPath: "et",
                    LaunchParameters: &shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters{
                        Environment: &shared.GoogleCloudDatapipelinesV1RuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "ipsum",
                                "ex",
                            },
                            AdditionalUserLabels: map[string]string{
                                "placeat": "vel",
                                "rerum": "mollitia",
                                "voluptas": "quam",
                            },
                            BypassTempDirValidation: false,
                            EnableStreamingEngine: true,
                            IPConfiguration: "WORKER_IP_UNSPECIFIED",
                            KmsKeyName: "unde",
                            MachineType: "in",
                            MaxWorkers: 7132033595893905170,
                            Network: "qui",
                            NumWorkers: 35604086129376003,
                            ServiceAccountEmail: "itaque",
                            Subnetwork: "ab",
                            TempLocation: "neque",
                            WorkerRegion: "ullam",
                            WorkerZone: "et",
                            Zone: "accusantium",
                        },
                        JobName: "esse",
                        Parameters: map[string]string{
                            "quam": "velit",
                            "cumque": "soluta",
                        },
                        TransformNameMapping: map[string]string{
                            "voluptates": "magni",
                            "et": "optio",
                        },
                        Update: true,
                    },
                    Location: "earum",
                    ProjectID: "illo",
                    ValidateOnly: true,
                },
            },
        },
    }
    
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatapipelinesV1Pipeline != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

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
