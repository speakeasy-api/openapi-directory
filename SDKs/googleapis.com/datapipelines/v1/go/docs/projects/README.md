# Projects

### Available Operations

* [DatapipelinesProjectsLocationsPipelinesCreate](#datapipelinesprojectslocationspipelinescreate) - Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
* [DatapipelinesProjectsLocationsPipelinesDelete](#datapipelinesprojectslocationspipelinesdelete) - Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
* [DatapipelinesProjectsLocationsPipelinesGet](#datapipelinesprojectslocationspipelinesget) - Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [DatapipelinesProjectsLocationsPipelinesJobsList](#datapipelinesprojectslocationspipelinesjobslist) - Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [DatapipelinesProjectsLocationsPipelinesList](#datapipelinesprojectslocationspipelineslist) - Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [DatapipelinesProjectsLocationsPipelinesPatch](#datapipelinesprojectslocationspipelinespatch) - Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
* [DatapipelinesProjectsLocationsPipelinesRun](#datapipelinesprojectslocationspipelinesrun) - Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
* [DatapipelinesProjectsLocationsPipelinesStop](#datapipelinesprojectslocationspipelinesstop) - Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.

## DatapipelinesProjectsLocationsPipelinesCreate

Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.

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
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesCreate(ctx, operations.DatapipelinesProjectsLocationsPipelinesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatapipelinesV1PipelineInput: &shared.GoogleCloudDatapipelinesV1PipelineInput{
            DisplayName: sdk.String("quam"),
            Name: sdk.String("Shannon Mueller"),
            PipelineSources: map[string]string{
                "laborum": "animi",
            },
            ScheduleInfo: &shared.GoogleCloudDatapipelinesV1ScheduleSpecInput{
                Schedule: sdk.String("enim"),
                TimeZone: sdk.String("odit"),
            },
            SchedulerServiceAccountEmail: sdk.String("quo"),
            State: shared.GoogleCloudDatapipelinesV1PipelineStateEnumStateResuming.ToPointer(),
            Type: shared.GoogleCloudDatapipelinesV1PipelineTypeEnumPipelineTypeStreaming.ToPointer(),
            Workload: &shared.GoogleCloudDatapipelinesV1Workload{
                DataflowFlexTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest{
                    LaunchParameter: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter{
                        ContainerSpecGcsPath: sdk.String("ipsam"),
                        Environment: &shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "possimus",
                                "aut",
                                "quasi",
                            },
                            AdditionalUserLabels: map[string]string{
                                "temporibus": "laborum",
                                "quasi": "reiciendis",
                                "voluptatibus": "vero",
                            },
                            EnableStreamingEngine: sdk.Bool(false),
                            FlexrsGoal: shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsSpeedOptimized.ToPointer(),
                            IPConfiguration: shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPPublic.ToPointer(),
                            KmsKeyName: sdk.String("voluptatibus"),
                            MachineType: sdk.String("ipsa"),
                            MaxWorkers: sdk.Int(604846),
                            Network: sdk.String("voluptate"),
                            NumWorkers: sdk.Int(739264),
                            ServiceAccountEmail: sdk.String("perferendis"),
                            Subnetwork: sdk.String("doloremque"),
                            TempLocation: sdk.String("reprehenderit"),
                            WorkerRegion: sdk.String("ut"),
                            WorkerZone: sdk.String("maiores"),
                            Zone: sdk.String("dicta"),
                        },
                        JobName: sdk.String("corporis"),
                        LaunchOptions: map[string]string{
                            "iusto": "dicta",
                            "harum": "enim",
                        },
                        Parameters: map[string]string{
                            "commodi": "repudiandae",
                            "quae": "ipsum",
                            "quidem": "molestias",
                            "excepturi": "pariatur",
                        },
                        TransformNameMappings: map[string]string{
                            "praesentium": "rem",
                            "voluptates": "quasi",
                        },
                        Update: sdk.Bool(false),
                    },
                    Location: sdk.String("repudiandae"),
                    ProjectID: sdk.String("sint"),
                    ValidateOnly: sdk.Bool(false),
                },
                DataflowLaunchTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest{
                    GcsPath: sdk.String("veritatis"),
                    LaunchParameters: &shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters{
                        Environment: &shared.GoogleCloudDatapipelinesV1RuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "incidunt",
                                "enim",
                                "consequatur",
                                "est",
                            },
                            AdditionalUserLabels: map[string]string{
                                "explicabo": "deserunt",
                                "distinctio": "quibusdam",
                                "labore": "modi",
                                "qui": "aliquid",
                            },
                            BypassTempDirValidation: sdk.Bool(false),
                            EnableStreamingEngine: sdk.Bool(false),
                            IPConfiguration: shared.GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnumWorkerIPPublic.ToPointer(),
                            KmsKeyName: sdk.String("quos"),
                            MachineType: sdk.String("perferendis"),
                            MaxWorkers: sdk.Int(164940),
                            Network: sdk.String("assumenda"),
                            NumWorkers: sdk.Int(369808),
                            ServiceAccountEmail: sdk.String("alias"),
                            Subnetwork: sdk.String("fugit"),
                            TempLocation: sdk.String("dolorum"),
                            WorkerRegion: sdk.String("excepturi"),
                            WorkerZone: sdk.String("tempora"),
                            Zone: sdk.String("facilis"),
                        },
                        JobName: sdk.String("tempore"),
                        Parameters: map[string]string{
                            "delectus": "eum",
                            "non": "eligendi",
                        },
                        TransformNameMapping: map[string]string{
                            "aliquid": "provident",
                            "necessitatibus": "sint",
                            "officia": "dolor",
                        },
                        Update: sdk.Bool(false),
                    },
                    Location: sdk.String("debitis"),
                    ProjectID: sdk.String("a"),
                    ValidateOnly: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("illum"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("rerum"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("facere"),
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

## DatapipelinesProjectsLocationsPipelinesDelete

Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.

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
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesDelete(ctx, operations.DatapipelinesProjectsLocationsPipelinesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("non"),
        Key: sdk.String("occaecati"),
        Name: "Sophia Wintheiser",
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.DatapipelinesProjectsLocationsPipelinesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DatapipelinesProjectsLocationsPipelinesGet

Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

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
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesGet(ctx, operations.DatapipelinesProjectsLocationsPipelinesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("vel"),
        Key: sdk.String("natus"),
        Name: "Fernando Aufderhar",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.DatapipelinesProjectsLocationsPipelinesGetSecurity{
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

## DatapipelinesProjectsLocationsPipelinesJobsList

Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.

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
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesJobsList(ctx, operations.DatapipelinesProjectsLocationsPipelinesJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("vero"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("architecto"),
        PageSize: sdk.Int64(298282),
        PageToken: sdk.String("et"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("quos"),
    }, operations.DatapipelinesProjectsLocationsPipelinesJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatapipelinesV1ListJobsResponse != nil {
        // handle response
    }
}
```

## DatapipelinesProjectsLocationsPipelinesList

Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

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
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesList(ctx, operations.DatapipelinesProjectsLocationsPipelinesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("mollitia"),
        Filter: sdk.String("ad"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("dolor"),
        PageSize: sdk.Int64(896547),
        PageToken: sdk.String("odit"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.DatapipelinesProjectsLocationsPipelinesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatapipelinesV1ListPipelinesResponse != nil {
        // handle response
    }
}
```

## DatapipelinesProjectsLocationsPipelinesPatch

Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.

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
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesPatch(ctx, operations.DatapipelinesProjectsLocationsPipelinesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatapipelinesV1PipelineInput: &shared.GoogleCloudDatapipelinesV1PipelineInput{
            DisplayName: sdk.String("eius"),
            Name: sdk.String("Alfredo Prosacco Sr."),
            PipelineSources: map[string]string{
                "ullam": "expedita",
                "nihil": "repellat",
                "quibusdam": "sed",
                "saepe": "pariatur",
            },
            ScheduleInfo: &shared.GoogleCloudDatapipelinesV1ScheduleSpecInput{
                Schedule: sdk.String("accusantium"),
                TimeZone: sdk.String("consequuntur"),
            },
            SchedulerServiceAccountEmail: sdk.String("praesentium"),
            State: shared.GoogleCloudDatapipelinesV1PipelineStateEnumStateStopping.ToPointer(),
            Type: shared.GoogleCloudDatapipelinesV1PipelineTypeEnumPipelineTypeUnspecified.ToPointer(),
            Workload: &shared.GoogleCloudDatapipelinesV1Workload{
                DataflowFlexTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest{
                    LaunchParameter: &shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter{
                        ContainerSpecGcsPath: sdk.String("sunt"),
                        Environment: &shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "illum",
                                "pariatur",
                                "maxime",
                                "ea",
                            },
                            AdditionalUserLabels: map[string]string{
                                "odit": "ea",
                                "accusantium": "ab",
                                "maiores": "quidem",
                            },
                            EnableStreamingEngine: sdk.Bool(false),
                            FlexrsGoal: shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsSpeedOptimized.ToPointer(),
                            IPConfiguration: shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPPublic.ToPointer(),
                            KmsKeyName: sdk.String("autem"),
                            MachineType: sdk.String("nam"),
                            MaxWorkers: sdk.Int(50588),
                            Network: sdk.String("pariatur"),
                            NumWorkers: sdk.Int(365496),
                            ServiceAccountEmail: sdk.String("voluptatibus"),
                            Subnetwork: sdk.String("perferendis"),
                            TempLocation: sdk.String("fugiat"),
                            WorkerRegion: sdk.String("amet"),
                            WorkerZone: sdk.String("aut"),
                            Zone: sdk.String("cumque"),
                        },
                        JobName: sdk.String("corporis"),
                        LaunchOptions: map[string]string{
                            "libero": "nobis",
                            "dolores": "quis",
                            "totam": "dignissimos",
                            "eaque": "quis",
                        },
                        Parameters: map[string]string{
                            "eos": "perferendis",
                        },
                        TransformNameMappings: map[string]string{
                            "minus": "quam",
                        },
                        Update: sdk.Bool(false),
                    },
                    Location: sdk.String("dolor"),
                    ProjectID: sdk.String("vero"),
                    ValidateOnly: sdk.Bool(false),
                },
                DataflowLaunchTemplateRequest: &shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest{
                    GcsPath: sdk.String("nostrum"),
                    LaunchParameters: &shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters{
                        Environment: &shared.GoogleCloudDatapipelinesV1RuntimeEnvironment{
                            AdditionalExperiments: []string{
                                "recusandae",
                                "omnis",
                                "facilis",
                                "perspiciatis",
                            },
                            AdditionalUserLabels: map[string]string{
                                "porro": "consequuntur",
                            },
                            BypassTempDirValidation: sdk.Bool(false),
                            EnableStreamingEngine: sdk.Bool(false),
                            IPConfiguration: shared.GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnumWorkerIPPublic.ToPointer(),
                            KmsKeyName: sdk.String("error"),
                            MachineType: sdk.String("eaque"),
                            MaxWorkers: sdk.Int(577229),
                            Network: sdk.String("rerum"),
                            NumWorkers: sdk.Int(237893),
                            ServiceAccountEmail: sdk.String("asperiores"),
                            Subnetwork: sdk.String("earum"),
                            TempLocation: sdk.String("modi"),
                            WorkerRegion: sdk.String("iste"),
                            WorkerZone: sdk.String("dolorum"),
                            Zone: sdk.String("deleniti"),
                        },
                        JobName: sdk.String("pariatur"),
                        Parameters: map[string]string{
                            "nobis": "libero",
                            "delectus": "quaerat",
                            "quos": "aliquid",
                        },
                        TransformNameMapping: map[string]string{
                            "dolorem": "dolor",
                        },
                        Update: sdk.Bool(false),
                    },
                    Location: sdk.String("qui"),
                    ProjectID: sdk.String("ipsum"),
                    ValidateOnly: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("dignissimos"),
        Name: "Allen Parisian Jr.",
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UpdateMask: sdk.String("odio"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DatapipelinesProjectsLocationsPipelinesPatchSecurity{
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

## DatapipelinesProjectsLocationsPipelinesRun

Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.

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
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesRun(ctx, operations.DatapipelinesProjectsLocationsPipelinesRunRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptas": "natus",
            "eos": "atque",
            "sit": "fugiat",
            "ab": "soluta",
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("deleniti"),
        Name: "Terence Rau",
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.DatapipelinesProjectsLocationsPipelinesRunSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatapipelinesV1RunPipelineResponse != nil {
        // handle response
    }
}
```

## DatapipelinesProjectsLocationsPipelinesStop

Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.

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
    res, err := s.Projects.DatapipelinesProjectsLocationsPipelinesStop(ctx, operations.DatapipelinesProjectsLocationsPipelinesStopRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "perferendis": "amet",
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("suscipit"),
        Name: "Rene Hane",
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.DatapipelinesProjectsLocationsPipelinesStopSecurity{
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
