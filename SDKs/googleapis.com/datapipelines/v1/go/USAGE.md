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