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