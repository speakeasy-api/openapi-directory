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
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesCreate(ctx, operations.DatapipelinesProjectsLocationsPipelinesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatapipelinesV1PipelineInput: &shared.GoogleCloudDatapipelinesV1PipelineInput{
            DisplayName: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
            PipelineSources: map[string]string{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            ScheduleInfo: &shared.GoogleCloudDatapipelinesV1ScheduleSpecInput{
                Schedule: sdk.String("delectus"),
                TimeZone: sdk.String("tempora"),
            },
            SchedulerServiceAccountEmail: sdk.String("suscipit"),
            State: shared.GoogleCloudDatapipelinesV1PipelineStateEnumStateActive.ToPointer(),
            Type: shared.GoogleCloudDatapipelinesV1PipelineTypeEnumPipelineTypeStreaming.ToPointer(),
            Workload: &shared.GoogleCloudDatapipelinesV1Workload{
                DataflowFlexTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest{
                    LaunchParameter: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter{
                        ContainerSpecGcsPath: sdk.String("placeat"),
                        Environment: &shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "iusto",
                                "excepturi",
                                "nisi",
                            },
                            AdditionalUserLabels: map[string]string{
                                "temporibus": "ab",
                                "quis": "veritatis",
                                "deserunt": "perferendis",
                                "ipsam": "repellendus",
                            },
                            EnableStreamingEngine: sdk.Bool(false),
                            FlexrsGoal: shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsCostOptimized.ToPointer(),
                            IPConfiguration: shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPPrivate.ToPointer(),
                            KmsKeyName: sdk.String("odit"),
                            MachineType: sdk.String("at"),
                            MaxWorkers: sdk.Int(870088),
                            Network: sdk.String("maiores"),
                            NumWorkers: sdk.Int(473608),
                            ServiceAccountEmail: sdk.String("quod"),
                            Subnetwork: sdk.String("quod"),
                            TempLocation: sdk.String("esse"),
                            WorkerRegion: sdk.String("totam"),
                            WorkerZone: sdk.String("porro"),
                            Zone: sdk.String("dolorum"),
                        },
                        JobName: sdk.String("dicta"),
                        LaunchOptions: map[string]string{
                            "officia": "occaecati",
                            "fugit": "deleniti",
                            "hic": "optio",
                        },
                        Parameters: map[string]string{
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                        TransformNameMappings: map[string]string{
                            "esse": "ipsum",
                            "excepturi": "aspernatur",
                            "perferendis": "ad",
                        },
                        Update: sdk.Bool(false),
                    },
                    Location: sdk.String("natus"),
                    ProjectID: sdk.String("sed"),
                    ValidateOnly: sdk.Bool(false),
                },
                DataflowLaunchTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest{
                    GcsPath: sdk.String("iste"),
                    LaunchParameters: &shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters{
                        Environment: &shared.GoogleCloudDatapipelinesV1RuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "natus",
                            },
                            AdditionalUserLabels: map[string]string{
                                "hic": "saepe",
                                "fuga": "in",
                            },
                            BypassTempDirValidation: sdk.Bool(false),
                            EnableStreamingEngine: sdk.Bool(false),
                            IPConfiguration: shared.GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnumWorkerIPPublic.ToPointer(),
                            KmsKeyName: sdk.String("iste"),
                            MachineType: sdk.String("iure"),
                            MaxWorkers: sdk.Int(902349),
                            Network: sdk.String("quidem"),
                            NumWorkers: sdk.Int(99280),
                            ServiceAccountEmail: sdk.String("ipsa"),
                            Subnetwork: sdk.String("reiciendis"),
                            TempLocation: sdk.String("est"),
                            WorkerRegion: sdk.String("mollitia"),
                            WorkerZone: sdk.String("laborum"),
                            Zone: sdk.String("dolores"),
                        },
                        JobName: sdk.String("dolorem"),
                        Parameters: map[string]string{
                            "explicabo": "nobis",
                            "enim": "omnis",
                        },
                        TransformNameMapping: map[string]string{
                            "minima": "excepturi",
                            "accusantium": "iure",
                        },
                        Update: sdk.Bool(false),
                    },
                    Location: sdk.String("culpa"),
                    ProjectID: sdk.String("doloribus"),
                    ValidateOnly: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "repellat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.DatapipelinesProjectsLocationsPipelinesCreateSecurity{
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