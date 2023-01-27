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