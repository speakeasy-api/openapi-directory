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
            Parent: "corrupti",
        },
        QueryParams: operations.DatapipelinesProjectsLocationsPipelinesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleCloudDatapipelinesV1PipelineInput{
            DisplayName: "suscipit",
            Name: "iure",
            PipelineSources: map[string]string{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
            ScheduleInfo: &shared.GoogleCloudDatapipelinesV1ScheduleSpecInput{
                Schedule: "suscipit",
                TimeZone: "molestiae",
            },
            SchedulerServiceAccountEmail: "minus",
            State: "STATE_ARCHIVED",
            Type: "PIPELINE_TYPE_BATCH",
            Workload: &shared.GoogleCloudDatapipelinesV1Workload{
                DataflowFlexTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest{
                    LaunchParameter: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter{
                        ContainerSpecGcsPath: "iusto",
                        Environment: &shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "nisi",
                                "recusandae",
                                "temporibus",
                            },
                            AdditionalUserLabels: map[string]string{
                                "quis": "veritatis",
                            },
                            EnableStreamingEngine: false,
                            FlexrsGoal: "FLEXRS_SPEED_OPTIMIZED",
                            IPConfiguration: "WORKER_IP_UNSPECIFIED",
                            KmsKeyName: "ipsam",
                            MachineType: "repellendus",
                            MaxWorkers: 957156,
                            Network: "quo",
                            NumWorkers: 140350,
                            ServiceAccountEmail: "at",
                            Subnetwork: "at",
                            TempLocation: "maiores",
                            WorkerRegion: "molestiae",
                            WorkerZone: "quod",
                            Zone: "quod",
                        },
                        JobName: "esse",
                        LaunchOptions: map[string]string{
                            "porro": "dolorum",
                            "dicta": "nam",
                            "officia": "occaecati",
                        },
                        Parameters: map[string]string{
                            "deleniti": "hic",
                        },
                        TransformNameMappings: map[string]string{
                            "totam": "beatae",
                            "commodi": "molestiae",
                            "modi": "qui",
                            "impedit": "cum",
                        },
                        Update: false,
                    },
                    Location: "esse",
                    ProjectID: "ipsum",
                    ValidateOnly: false,
                },
                DataflowLaunchTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest{
                    GcsPath: "excepturi",
                    LaunchParameters: &shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters{
                        Environment: &shared.GoogleCloudDatapipelinesV1RuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "perferendis",
                            },
                            AdditionalUserLabels: map[string]string{
                                "natus": "sed",
                                "iste": "dolor",
                            },
                            BypassTempDirValidation: false,
                            EnableStreamingEngine: false,
                            IPConfiguration: "WORKER_IP_PUBLIC",
                            KmsKeyName: "laboriosam",
                            MachineType: "hic",
                            MaxWorkers: 902599,
                            Network: "fuga",
                            NumWorkers: 449950,
                            ServiceAccountEmail: "corporis",
                            Subnetwork: "iste",
                            TempLocation: "iure",
                            WorkerRegion: "saepe",
                            WorkerZone: "quidem",
                            Zone: "architecto",
                        },
                        JobName: "ipsa",
                        Parameters: map[string]string{
                            "est": "mollitia",
                            "laborum": "dolores",
                            "dolorem": "corporis",
                            "explicabo": "nobis",
                        },
                        TransformNameMapping: map[string]string{
                            "omnis": "nemo",
                            "minima": "excepturi",
                        },
                        Update: false,
                    },
                    Location: "accusantium",
                    ProjectID: "iure",
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