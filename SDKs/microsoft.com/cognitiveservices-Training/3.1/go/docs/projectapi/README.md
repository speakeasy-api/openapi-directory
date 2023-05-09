# ProjectAPI

### Available Operations

* [CreateProject](#createproject) - Create a project.
* [DeleteIteration](#deleteiteration) - Delete a specific iteration of a project.
* [DeleteProject](#deleteproject) - Delete a specific project.
* [ExportIteration](#exportiteration) - Export a trained iteration.
* [GetExports](#getexports) - Get the list of exports for a specific iteration.
* [GetImagePerformanceCount](#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* [GetImagePerformances](#getimageperformances) - Get image with its prediction for a given project iteration.
* [GetIteration](#getiteration) - Get a specific iteration.
* [GetIterationPerformance](#getiterationperformance) - Get detailed performance information about an iteration.
* [GetIterations](#getiterations) - Get iterations for the project.
* [GetProject](#getproject) - Get a specific project.
* [GetProjects](#getprojects) - Get your projects.
* [PublishIteration](#publishiteration) - Publish a specific iteration.
* [TrainProject](#trainproject) - Queues project for training.
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.CreateProject(ctx, operations.CreateProjectRequest{
        TrainingKey: "ducimus",
        ClassificationType: operations.CreateProjectClassificationTypeEnumMulticlass.ToPointer(),
        Description: sdk.String("voluptatibus"),
        DomainID: sdk.String("77b4848b-d6a6-4f04-81d2-c3b808094373"),
        Name: "Mrs. Larry Hoppe",
        TargetExportPlatforms: []CreateProjectTargetExportPlatformsEnum{
            operations.CreateProjectTargetExportPlatformsEnumOnnx,
            operations.CreateProjectTargetExportPlatformsEnumVaidk,
            operations.CreateProjectTargetExportPlatformsEnumOnnx,
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.DeleteIteration(ctx, operations.DeleteIterationRequest{
        TrainingKey: "cum",
        IterationID: "ad02f258-6bcf-4152-958d-aa95be6cd027",
        ProjectID: "56c354aa-432b-447e-9763-c5208c23e980",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.DeleteProject(ctx, operations.DeleteProjectRequest{
        TrainingKey: "magni",
        ProjectID: "d82f0d45-eb4a-48b6-b4ee-5cfc18edc7f7",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.ExportIteration(ctx, operations.ExportIterationRequest{
        TrainingKey: "quos",
        Flavor: operations.ExportIterationFlavorEnumOnnx12.ToPointer(),
        IterationID: "e32e04b3-d3ed-40c5-a70e-f42bd3c9f1cc",
        Platform: operations.ExportIterationPlatformEnumTensorFlow,
        ProjectID: "03f6c39b-cd0a-4629-8f95-7f385189ad7e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Export != nil {
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.GetExports(ctx, operations.GetExportsRequest{
        TrainingKey: "reiciendis",
        IterationID: "807aae03-f33c-4a79-bb9d-e4032ba26fd3",
        ProjectID: "68ba9216-bcb4-4158-b5c7-3641723133ed",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.GetImagePerformanceCount(ctx, operations.GetImagePerformanceCountRequest{
        TrainingKey: "quod",
        IterationID: "046bc516-3bbc-4a49-a27c-42c22c553504",
        ProjectID: "95c5dbb3-c57c-41e4-981e-8aa257ddc191",
        TagIds: []string{
            "ebde64bf-cc54-469d-8015-dfa796206bef",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.GetImagePerformances(ctx, operations.GetImagePerformancesRequest{
        TrainingKey: "consequuntur",
        IterationID: "b0a3e42c-1aa0-410e-9aac-2e9135586d18",
        OrderBy: operations.GetImagePerformancesOrderByEnumOldest.ToPointer(),
        ProjectID: "9f97a4bf-ad2b-4f7d-a7ca-84ad99b41d61",
        Skip: sdk.Int(167089),
        TagIds: []string{
            "3531870c-f68b-403a-9421-bd43d1f0cb0a",
            "0003eb22-d9b3-4a70-994f-aa741c57d1fe",
        },
        Take: sdk.Int(845082),
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.GetIteration(ctx, operations.GetIterationRequest{
        TrainingKey: "maxime",
        IterationID: "2050d38d-c3ce-4185-872f-9ee69166a8be",
        ProjectID: "3444eac8-b3a2-4875-86c1-fe606d07d2a9",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.GetIterationPerformance(ctx, operations.GetIterationPerformanceRequest{
        TrainingKey: "impedit",
        IterationID: "87ae50c1-6661-4a1d-9136-a7e8d53213f3",
        OverlapThreshold: sdk.Float32(9944.96),
        ProjectID: "658752db-764c-459f-8a56-cebcada29ca7",
        Threshold: sdk.Float32(6204.21),
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.GetIterations(ctx, operations.GetIterationsRequest{
        TrainingKey: "ab",
        ProjectID: "81c95671-663c-4530-b566-5163a3638512",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.GetProject(ctx, operations.GetProjectRequest{
        TrainingKey: "id",
        ProjectID: "b2521b9f-2e07-4246-bb8a-40bc05fab0d6",
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.GetProjects(ctx, operations.GetProjectsRequest{
        TrainingKey: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Projects != nil {
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.PublishIteration(ctx, operations.PublishIterationRequest{
        TrainingKey: "perferendis",
        IterationID: "edf22a94-d20e-4c90-aa41-d1f465e85156",
        PredictionID: "repellat",
        ProjectID: "ff73fdf5-4fdd-45ea-9543-398dafb42a8d",
        PublishName: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishIteration200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## TrainProject

Queues project for training.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.TrainProject(ctx, operations.TrainProjectRequest{
        TrainingKey: "dolorem",
        ForceTrain: sdk.Bool(false),
        NotificationEmailAddress: sdk.String("neque"),
        ProjectID: "88e4d803-9ea5-4f9b-98a2-44fd619039da",
        ReservedBudgetInHours: sdk.Int(804333),
        TrainingType: operations.TrainProjectTrainingTypeEnumAdvanced.ToPointer(),
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.UnpublishIteration(ctx, operations.UnpublishIterationRequest{
        TrainingKey: "velit",
        IterationID: "8ed0dc67-1dc7-4f1e-baf1-5920c90d1b49",
        ProjectID: "01f2bd89-c8a3-4263-9da5-b7b6902b881a",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateIterationForm(ctx, operations.UpdateIterationFormRequest{
        IterationInput: shared.IterationInput{
            Name: "Barry Wuckert",
        },
        TrainingKey: "sequi",
        IterationID: "664a8f0a-f8c6-491d-b32d-9fbaf9476a2a",
        ProjectID: "e8dcc50c-8a35-412c-b378-48930750a00e",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateIterationJSON(ctx, operations.UpdateIterationJSONRequest{
        IterationInput: shared.IterationInput{
            Name: "Leslie Hodkiewicz",
        },
        TrainingKey: "ducimus",
        IterationID: "36d43194-398c-4783-8923-98ed3d3ab7ca",
        ProjectID: "3c5ca864-9a70-4cfd-9d69-89b720645107",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateIterationRaw(ctx, operations.UpdateIterationRawRequest{
        RequestBody: []byte("voluptate"),
        TrainingKey: "illum",
        IterationID: "19ea83d4-92ed-414b-8a2c-1954545e955d",
        ProjectID: "cc185ea4-901c-47c4-bad2-daa784aba3d2",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateProjectForm(ctx, operations.UpdateProjectFormRequest{
        ProjectInput: shared.ProjectInput{
            Description: "amet",
            Name: "Silvia Stoltenberg",
            Settings: shared.ProjectSettingsInput{
                ClassificationType: shared.ProjectSettingsClassificationTypeEnumMulticlass.ToPointer(),
                DomainID: sdk.String("811a1153-82bd-47ed-9650-7621c58f4d73"),
                ImageProcessingSettings: &shared.ImageProcessingSettings{
                    AugmentationMethods: map[string]bool{
                        "voluptas": false,
                        "nostrum": false,
                        "eum": false,
                    },
                },
                TargetExportPlatforms: []shared.ProjectSettingsTargetExportPlatformsEnum{
                    shared.ProjectSettingsTargetExportPlatformsEnumOnnx,
                    shared.ProjectSettingsTargetExportPlatformsEnumCoreMl,
                },
            },
        },
        TrainingKey: "accusantium",
        ProjectID: "a0711a96-1d24-4a7d-bb8f-532d892cf781",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateProjectJSON(ctx, operations.UpdateProjectJSONRequest{
        ProjectInput: shared.ProjectInput{
            Description: "dolores",
            Name: "Mr. Alton Heidenreich",
            Settings: shared.ProjectSettingsInput{
                ClassificationType: shared.ProjectSettingsClassificationTypeEnumMultilabel.ToPointer(),
                DomainID: sdk.String("78240bf5-48f8-48f8-b1bf-0bc8e1f206d5"),
                ImageProcessingSettings: &shared.ImageProcessingSettings{
                    AugmentationMethods: map[string]bool{
                        "quas": false,
                        "sequi": false,
                        "illo": false,
                        "temporibus": false,
                    },
                },
                TargetExportPlatforms: []shared.ProjectSettingsTargetExportPlatformsEnum{
                    shared.ProjectSettingsTargetExportPlatformsEnumCoreMl,
                },
            },
        },
        TrainingKey: "laudantium",
        ProjectID: "1090f670-6673-4f3a-a81c-5768dce74240",
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProjectAPI.UpdateProjectRaw(ctx, operations.UpdateProjectRawRequest{
        RequestBody: []byte("excepturi"),
        TrainingKey: "deserunt",
        ProjectID: "215e0860-1489-4a5f-a3e3-af3dd9dda33d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
