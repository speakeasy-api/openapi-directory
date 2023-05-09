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
        TrainingKey: "laboriosam",
        ClassificationType: operations.CreateProjectClassificationTypeEnumMultilabel.ToPointer(),
        Description: sdk.String("itaque"),
        DomainID: sdk.String("d4aecb75-37cd-4922-ac9f-f57491aabfa2"),
        Name: "Dr. Darren Kemmer DDS",
        TargetExportPlatforms: []CreateProjectTargetExportPlatformsEnum{
            operations.CreateProjectTargetExportPlatformsEnumTensorFlow,
            operations.CreateProjectTargetExportPlatformsEnumVaidk,
            operations.CreateProjectTargetExportPlatformsEnumTensorFlow,
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
        TrainingKey: "quis",
        IterationID: "6ef1031e-6899-4f0c-a001-e22cd55cc058",
        ProjectID: "4a184d76-d971-4fc8-a0c6-5b037bb8e0cc",
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
        TrainingKey: "corrupti",
        ProjectID: "85187e4d-e04a-4f28-85dd-db46aa1cfd6d",
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
        TrainingKey: "corrupti",
        Flavor: operations.ExportIterationFlavorEnumLinux.ToPointer(),
        IterationID: "8da01319-1129-4646-a45c-1d81f29042f5",
        Platform: operations.ExportIterationPlatformEnumTensorFlow,
        ProjectID: "9b7aff0e-a221-46cb-a071-bc163e279a3b",
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
        TrainingKey: "ipsa",
        IterationID: "84da9925-7d04-4f40-847a-742d84496cbd",
        ProjectID: "eecf6b99-bc63-4562-abfd-f55c294c060b",
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
        TrainingKey: "accusantium",
        IterationID: "6a128776-4eef-46d0-86d6-ed9c73dd6345",
        ProjectID: "71509a8e-870d-43c5-a1f9-c242c7b66a1f",
        TagIds: []string{
            "0c73df5b-6719-4890-b42a-4bb438d85b26",
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
        TrainingKey: "aperiam",
        IterationID: "591d745e-3c20-459c-9c3f-567e0e252765",
        OrderBy: operations.GetImagePerformancesOrderByEnumOldest.ToPointer(),
        ProjectID: "1d62fcda-ce1f-4012-96ce-2239e8f25cd0",
        Skip: sdk.Int(858857),
        TagIds: []string{
            "9d959f43-9e39-4266-8bd9-5f7aa2b24113",
        },
        Take: sdk.Int(391105),
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
        TrainingKey: "perspiciatis",
        IterationID: "5d1e6698-fcc4-4596-a17c-297767633425",
        ProjectID: "4038bfb5-971e-4981-9055-7389cedbac7f",
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
        TrainingKey: "quibusdam",
        IterationID: "a39594d6-6bc2-4ae4-8063-2b9954b6fa22",
        OverlapThreshold: sdk.Float32(368.42),
        ProjectID: "63698285-53cb-4100-86be-f4921ec2053b",
        Threshold: sdk.Float32(4741.24),
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
        TrainingKey: "eius",
        ProjectID: "9366ac8e-e0f2-4bf1-9588-d40d03f3deba",
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
        TrainingKey: "quia",
        ProjectID: "97be3e90-bc40-4df8-a8fd-52405cb331d4",
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
        TrainingKey: "provident",
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
        TrainingKey: "quia",
        IterationID: "f4f127fb-0e0b-4f1f-8217-978d0acca77a",
        PredictionID: "repudiandae",
        ProjectID: "b7b7021a-5204-46b6-8e99-fb0e67e094fd",
        PublishName: "tenetur",
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
        TrainingKey: "saepe",
        ForceTrain: sdk.Bool(false),
        NotificationEmailAddress: sdk.String("assumenda"),
        ProjectID: "5540ef53-a34a-41b8-be99-731adc05d85a",
        ReservedBudgetInHours: sdk.Int(908030),
        TrainingType: operations.TrainProjectTrainingTypeEnumRegular.ToPointer(),
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
        TrainingKey: "illum",
        IterationID: "fb70fb38-7429-40d3-b656-1eca16ef8945",
        ProjectID: "1bd76eee-b518-4c4d-a1fa-d35512f06d4e",
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
            Name: "Antoinette Kuhn",
        },
        TrainingKey: "alias",
        IterationID: "f548568a-0424-4e00-a1d6-eb9434645d03",
        ProjectID: "084fbba5-ccef-4f5c-b01f-e51e528a45ac",
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
            Name: "Roy Raynor",
        },
        TrainingKey: "maiores",
        IterationID: "8bc2caba-8da4-4127-9d59-7ff4711aa1bc",
        ProjectID: "74b86cec-c74f-477b-8848-bd6a6f0441d2",
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
        RequestBody: []byte("maxime"),
        TrainingKey: "ratione",
        IterationID: "b8080943-73e0-4604-99be-bbad02f2586b",
        ProjectID: "cf152558-daa9-45be-acd0-2756c354aa43",
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
            Description: "ratione",
            Name: "Oscar Kovacek IV",
            Settings: shared.ProjectSettings{
                ClassificationType: shared.ProjectSettingsClassificationTypeEnumMulticlass.ToPointer(),
                DomainID: sdk.String("3c5208c2-3e98-402d-82f0-d45eb4a8b674"),
                TargetExportPlatforms: []shared.ProjectSettingsTargetExportPlatformsEnum{
                    shared.ProjectSettingsTargetExportPlatformsEnumVaidk,
                    shared.ProjectSettingsTargetExportPlatformsEnumTensorFlow,
                    shared.ProjectSettingsTargetExportPlatformsEnumOnnx,
                    shared.ProjectSettingsTargetExportPlatformsEnumVaidk,
                },
            },
        },
        TrainingKey: "optio",
        ProjectID: "18edc7f7-87e3-42e0-8b3d-3ed0c5670ef4",
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
            Description: "aspernatur",
            Name: "Clint Ernser",
            Settings: shared.ProjectSettings{
                ClassificationType: shared.ProjectSettingsClassificationTypeEnumMultilabel.ToPointer(),
                DomainID: sdk.String("1cc503f6-c39b-4cd0-a629-0f957f385189"),
                TargetExportPlatforms: []shared.ProjectSettingsTargetExportPlatformsEnum{
                    shared.ProjectSettingsTargetExportPlatformsEnumVaidk,
                    shared.ProjectSettingsTargetExportPlatformsEnumDockerFile,
                    shared.ProjectSettingsTargetExportPlatformsEnumVaidk,
                },
            },
        },
        TrainingKey: "reiciendis",
        ProjectID: "807aae03-f33c-4a79-bb9d-e4032ba26fd3",
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
        RequestBody: []byte("eum"),
        TrainingKey: "rem",
        ProjectID: "ba9216bc-b415-4835-8736-41723133edc0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
