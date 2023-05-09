# ProjectAPI

### Available Operations

* [CreateProject](#createproject) - Create a project.
* [DeleteIteration](#deleteiteration) - Delete a specific iteration of a project.
* [DeleteProject](#deleteproject) - Delete a specific project.
* [ExportIteration](#exportiteration) - Export a trained iteration.
* [ExportProject](#exportproject) - Exports a project.
* [GetExports](#getexports) - Get the list of exports for a specific iteration.
* [GetImagePerformanceCount](#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* [GetImagePerformances](#getimageperformances) - Get image with its prediction for a given project iteration.
* [GetIteration](#getiteration) - Get a specific iteration.
* [GetIterationPerformance](#getiterationperformance) - Get detailed performance information about an iteration.
* [GetIterations](#getiterations) - Get iterations for the project.
* [GetProject](#getproject) - Get a specific project.
* [GetProjects](#getprojects) - Get your projects.
* [ImportProject](#importproject) - Imports a project.
* [PublishIteration](#publishiteration) - Publish a specific iteration.
* [TrainProjectForm](#trainprojectform) - Queues project for training.
* [TrainProjectJSON](#trainprojectjson) - Queues project for training.
* [TrainProjectRaw](#trainprojectraw) - Queues project for training.
* [UnpublishIteration](#unpublishiteration) - Unpublish a specific iteration.
* [UpdateIterationForm](#updateiterationform) - Update a specific iteration.
* [UpdateIterationJSON](#updateiterationjson) - Update a specific iteration.
* [UpdateIterationRaw](#updateiterationraw) - Update a specific iteration.
* [UpdateProjectForm](#updateprojectform) - Update a specific project.
* [UpdateProjectJSON](#updateprojectjson) - Update a specific project.
* [UpdateProjectRaw](#updateprojectraw) - Update a specific project.

## CreateProject

Create a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.CreateProject(ctx, operations.CreateProjectRequest{
        ClassificationType: operations.CreateProjectClassificationTypeEnumMultilabel.ToPointer(),
        Description: sdk.String("deleniti"),
        DomainID: sdk.String("be3444ea-c8b3-4a28-b5c6-c1fe606d07d2"),
        Name: "Evan Russel",
        TargetExportPlatforms: []CreateProjectTargetExportPlatformsEnum{
            operations.CreateProjectTargetExportPlatformsEnumVaidk,
            operations.CreateProjectTargetExportPlatformsEnumTensorFlow,
            operations.CreateProjectTargetExportPlatformsEnumCoreMl,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## DeleteIteration

Delete a specific iteration of a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.DeleteIteration(ctx, operations.DeleteIterationRequest{
        IterationID: "c16661a1-d913-46a7-a8d5-3213f3f65875",
        ProjectID: "2db764c5-9f0a-456c-abca-da29ca79181c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteProject

Delete a specific project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.DeleteProject(ctx, operations.DeleteProjectRequest{
        ProjectID: "95671663-c530-4b56-a516-3a3638512ab2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportIteration

Export a trained iteration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.ExportIteration(ctx, operations.ExportIterationRequest{
        Flavor: operations.ExportIterationFlavorEnumOnnx10.ToPointer(),
        IterationID: "21b9f2e0-7246-47b8-a40b-c05fab0d650e",
        Platform: operations.ExportIterationPlatformEnumVaidk,
        ProjectID: "f22a94d2-0ec9-40ea-81d1-f465e85156ff",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Export != nil {
        // handle response
    }
}
```

## ExportProject

Exports a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.ExportProject(ctx, operations.ExportProjectRequest{
        ProjectID: "f73fdf54-fdd5-4ea9-9433-98dafb42a8d6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectExport != nil {
        // handle response
    }
}
```

## GetExports

Get the list of exports for a specific iteration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.GetExports(ctx, operations.GetExportsRequest{
        IterationID: "3388e4d8-039e-4a5f-9b18-a244fd619039",
        ProjectID: "dacd38ed-0dc6-471d-87f1-e3af15920c90",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Exports != nil {
        // handle response
    }
}
```

## GetImagePerformanceCount

The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.GetImagePerformanceCount(ctx, operations.GetImagePerformanceCountRequest{
        IterationID: "d1b4901f-2bd8-49c8-a326-39da5b7b6902",
        ProjectID: "b881a94f-6436-464a-8f0a-f8c691d732d9",
        TagIds: []string{
            "baf9476a-2ae8-4dcc-90c8-a3512c737848",
            "930750a0-0e96-46ec-b36d-43194398c783",
            "c92398ed-3d3a-4b7c-a3c5-ca8649a70cfd",
            "5d6989b7-2064-4510-b7d1-9ea83d492ed1",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImagePerformanceCount200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetImagePerformances

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.GetImagePerformances(ctx, operations.GetImagePerformancesRequest{
        IterationID: "4b8a2c19-5454-45e9-95dc-c185ea4901c7",
        OrderBy: operations.GetImagePerformancesOrderByEnumOldest.ToPointer(),
        ProjectID: "43ad2daa-784a-4ba3-9230-edf73811a115",
        Skip: sdk.Int(249071),
        TagIds: []string{
            "2bd7ed56-5076-421c-98f4-d7396564c20a",
            "0711a961-d24a-47db-b8f5-32d892cf7812",
            "cb512c87-8240-4bf5-88f8-8f8f1bf0bc8e",
        },
        Take: sdk.Int(120257),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePerformances != nil {
        // handle response
    }
}
```

## GetIteration

Get a specific iteration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.GetIteration(ctx, operations.GetIterationRequest{
        IterationID: "f206d5d8-31d0-4081-890f-6706673f3a68",
        ProjectID: "1c5768dc-e742-4409-a215-e08601489a5f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Iteration != nil {
        // handle response
    }
}
```

## GetIterationPerformance

Get detailed performance information about an iteration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.GetIterationPerformance(ctx, operations.GetIterationPerformanceRequest{
        IterationID: "63e3af3d-d9dd-4a33-9cd6-3483e4a7a98e",
        OverlapThreshold: sdk.Float32(2688.31),
        ProjectID: "df37e45b-8955-4d41-be13-a482310907bd",
        Threshold: sdk.Float32(1882.53),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IterationPerformance != nil {
        // handle response
    }
}
```

## GetIterations

Get iterations for the project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.GetIterations(ctx, operations.GetIterationsRequest{
        ProjectID: "54c092bd-734f-4024-89d8-6f4bb20fe5d9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Iterations != nil {
        // handle response
    }
}
```

## GetProject

Get a specific project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.GetProject(ctx, operations.GetProjectRequest{
        ProjectID: "11cbfe74-9caf-445a-a7f6-9e2c9e6d10e9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## GetProjects

Get your projects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.GetProjects(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Projects != nil {
        // handle response
    }
}
```

## ImportProject

Imports a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.ImportProject(ctx, operations.ImportProjectRequest{
        Token: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## PublishIteration

Publish a specific iteration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.PublishIteration(ctx, operations.PublishIterationRequest{
        IterationID: "b3ad4c6b-0310-48d9-8337-473082b94f2a",
        PredictionID: "distinctio",
        ProjectID: "1fd5671e-9c32-4635-8a46-7143789ce0e9",
        PublishName: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishIteration200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## TrainProjectForm

Queues project for training.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.TrainProjectForm(ctx, operations.TrainProjectFormRequest{
        TrainingParameters: &shared.TrainingParameters{
            SelectedTags: []string{
                "594d93a7-4c02-452f-a3b4-b4db8b778ebb",
            },
        },
        ForceTrain: sdk.Bool(false),
        NotificationEmailAddress: sdk.String("nisi"),
        ProjectID: "e1d2cf50-2baf-4b2c-bc46-35d5e65da028",
        ReservedBudgetInHours: sdk.Int(789760),
        TrainingType: operations.TrainProjectFormTrainingTypeEnumRegular.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Iteration != nil {
        // handle response
    }
}
```

## TrainProjectJSON

Queues project for training.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.TrainProjectJSON(ctx, operations.TrainProjectJSONRequest{
        TrainingParameters: &shared.TrainingParameters{
            SelectedTags: []string{
                "951a1e30-fda9-4664-89d7-b78673e13a12",
                "a6b99249-4594-4487-b5c8-43836b86b3cd",
                "f6415b04-49f9-4df1-bf4e-edbe78bf6068",
                "25894ea7-63d5-4c72-b95b-785148d6d549",
            },
        },
        ForceTrain: sdk.Bool(false),
        NotificationEmailAddress: sdk.String("debitis"),
        ProjectID: "5635b33b-c0f9-470c-82fc-9f4844225e75",
        ReservedBudgetInHours: sdk.Int(713720),
        TrainingType: operations.TrainProjectJSONTrainingTypeEnumRegular.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Iteration != nil {
        // handle response
    }
}
```

## TrainProjectRaw

Queues project for training.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.TrainProjectRaw(ctx, operations.TrainProjectRawRequest{
        RequestBody: []byte("excepturi"),
        ForceTrain: sdk.Bool(false),
        NotificationEmailAddress: sdk.String("eum"),
        ProjectID: "065c0efa-6f93-4b90-a1b8-c95be1254b73",
        ReservedBudgetInHours: sdk.Int(591998),
        TrainingType: operations.TrainProjectRawTrainingTypeEnumAdvanced.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Iteration != nil {
        // handle response
    }
}
```

## UnpublishIteration

Unpublish a specific iteration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.UnpublishIteration(ctx, operations.UnpublishIterationRequest{
        IterationID: "4fe77210-d1f6-4558-899c-722d2bc0f940",
        ProjectID: "87d9caae-042d-4d7c-aac9-b4caa1cfe9e1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateIterationForm

Update a specific iteration.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateIterationForm(ctx, operations.UpdateIterationFormRequest{
        IterationInput: shared.IterationInput{
            Name: "Betsy Witting I",
        },
        IterationID: "907f3783-1983-4d42-a54a-85466597c502",
        ProjectID: "33c1471d-51aa-4a6d-9f5a-bd6487c5fc2b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Iteration != nil {
        // handle response
    }
}
```

## UpdateIterationJSON

Update a specific iteration.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateIterationJSON(ctx, operations.UpdateIterationJSONRequest{
        IterationInput: shared.IterationInput{
            Name: "Marc Cole Jr.",
        },
        IterationID: "bef69e10-0157-4630-bda7-afded84a35a4",
        ProjectID: "1238e1a7-35ac-426a-a33b-ef971a8f46bc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Iteration != nil {
        // handle response
    }
}
```

## UpdateIterationRaw

Update a specific iteration.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateIterationRaw(ctx, operations.UpdateIterationRawRequest{
        RequestBody: []byte("mollitia"),
        IterationID: "1106fe96-5b71-41d0-8cf8-8ec9f7b99a55",
        ProjectID: "0a656ed3-33bb-40ce-8aa6-5432a986eb7e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Iteration != nil {
        // handle response
    }
}
```

## UpdateProjectForm

Update a specific project.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateProjectForm(ctx, operations.UpdateProjectFormRequest{
        ProjectInput: shared.ProjectInput{
            Description: "beatae",
            Name: "Alexandra O'Conner",
            Settings: shared.ProjectSettingsInput{
                ClassificationType: shared.ProjectSettingsClassificationTypeEnumMulticlass.ToPointer(),
                DomainID: sdk.String("08915009-7019-4a48-b88e-ce7bf904e011"),
                ImageProcessingSettings: &shared.ImageProcessingSettings{
                    AugmentationMethods: map[string]bool{
                        "ad": false,
                    },
                },
                TargetExportPlatforms: []shared.ProjectSettingsTargetExportPlatformsEnum{
                    shared.ProjectSettingsTargetExportPlatformsEnumCoreMl,
                    shared.ProjectSettingsTargetExportPlatformsEnumDockerFile,
                    shared.ProjectSettingsTargetExportPlatformsEnumDockerFile,
                    shared.ProjectSettingsTargetExportPlatformsEnumCoreMl,
                },
            },
            Status: shared.ProjectStatusEnumImporting.ToPointer(),
        },
        ProjectID: "162c6beb-68a0-4f65-bb7d-03a1480f8de3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## UpdateProjectJSON

Update a specific project.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateProjectJSON(ctx, operations.UpdateProjectJSONRequest{
        ProjectInput: shared.ProjectInput{
            Description: "voluptatem",
            Name: "Richard Jacobs",
            Settings: shared.ProjectSettingsInput{
                ClassificationType: shared.ProjectSettingsClassificationTypeEnumMultilabel.ToPointer(),
                DomainID: sdk.String("10618d97-e152-4297-910d-a80312292cc6"),
                ImageProcessingSettings: &shared.ImageProcessingSettings{
                    AugmentationMethods: map[string]bool{
                        "porro": false,
                    },
                },
                TargetExportPlatforms: []shared.ProjectSettingsTargetExportPlatformsEnum{
                    shared.ProjectSettingsTargetExportPlatformsEnumOnnx,
                },
            },
            Status: shared.ProjectStatusEnumImporting.ToPointer(),
        },
        ProjectID: "02bb97ee-102d-4a2d-a35f-8e01bf33eaab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## UpdateProjectRaw

Update a specific project.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateProjectRaw(ctx, operations.UpdateProjectRawRequest{
        RequestBody: []byte("ut"),
        ProjectID: "5402ac17-04bf-41cc-9fc6-1aae5eb5f0c4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
