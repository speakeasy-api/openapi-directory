# ProjectAPI

### Available Operations

* [CreateProject](#createproject) - Create a project
* [DeleteIteration](#deleteiteration) - Delete a specific iteration of a project
* [DeleteProject](#deleteproject) - Delete a specific project
* [ExportIteration](#exportiteration) - Export a trained iteration
* [GetExports](#getexports) - Get the list of exports for a specific iteration
* [GetImagePerformanceCount](#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}
* [GetImagePerformances](#getimageperformances) - Get image with its prediction for a given project iteration
* [GetIteration](#getiteration) - Get a specific iteration
* [GetIterationPerformance](#getiterationperformance) - Get detailed performance information about an iteration
* [GetIterations](#getiterations) - Get iterations for the project
* [GetProject](#getproject) - Get a specific project
* [GetProjects](#getprojects) - Get your projects
* [TrainProject](#trainproject) - Queues project for training
* [UpdateIterationForm](#updateiterationform) - Update a specific iteration
* [UpdateIterationJSON](#updateiterationjson) - Update a specific iteration
* [UpdateIterationRaw](#updateiterationraw) - Update a specific iteration
* [UpdateProjectForm](#updateprojectform) - Update a specific project
* [UpdateProjectJSON](#updateprojectjson) - Update a specific project
* [UpdateProjectRaw](#updateprojectraw) - Update a specific project

## CreateProject

Create a project

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
        TrainingKey: "earum",
        Description: sdk.String("occaecati"),
        DomainID: sdk.String("1b9a9f74-846e-42c3-b09d-b0536d9e75ca"),
        Name: "Betty Kerluke",
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

Delete a specific iteration of a project

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
        TrainingKey: "dolorem",
        IterationID: "92c11a25-a8bf-492f-9742-8ad9a9f8bf82",
        ProjectID: "21125359-d983-487f-ba79-cd72cd2484da",
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

Delete a specific project

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
        TrainingKey: "eos",
        ProjectID: "1729f2ac-41ef-4572-9f11-69ac1e41d8a2",
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

Export a trained iteration

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
        TrainingKey: "neque",
        Flavor: sdk.String("impedit"),
        IterationID: "23e34f2d-fa4a-4197-b6de-922151fe1712",
        Platform: "voluptatem",
        ProjectID: "99853e9f-543d-4854-839e-e224460443bc",
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

Get the list of exports for a specific iteration

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
        TrainingKey: "architecto",
        IterationID: "54188c2f-56e8-45da-b832-eabd617c3b0d",
        ProjectID: "51a44bf0-1bad-4870-ad46-082bfbdc41ff",
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
        TrainingKey: "nemo",
        IterationID: "d4e2ae4f-b5cb-435d-9763-8f1edb78359e",
        ProjectID: "cc5cb860-f8cd-4580-ba73-810e4fe44472",
        TagIds: []string{
            "esse",
            "cumque",
            "pariatur",
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
        TrainingKey: "non",
        IterationID: "b1dd3bbc-e247-4b76-84ef-f50126d71cff",
        OrderBy: operations.GetImagePerformancesOrderByEnumOldest.ToPointer(),
        ProjectID: "d0eb74b8-4219-453b-84bd-3c43159d33e5",
        Skip: sdk.Int(591367),
        TagIds: []string{
            "dolor",
            "quod",
        },
        Take: sdk.Int(7287),
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

Get a specific iteration

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
        TrainingKey: "accusantium",
        IterationID: "1139863a-a41e-46c3-9cc2-f1fcb51c9a41",
        ProjectID: "ffbe9cbd-795e-4e65-a076-cc7abf616ea5",
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

Get detailed performance information about an iteration

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
        TrainingKey: "porro",
        IterationID: "71641934-b90f-42e0-9d19-d2fc2f9e2e10",
        OverlapThreshold: sdk.Float32(3669.49),
        ProjectID: "944b935d-237a-472f-9084-9d6aed4aecb7",
        Threshold: sdk.Float32(3663.89),
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

Get iterations for the project

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
        TrainingKey: "neque",
        ProjectID: "7cd9222c-9ff5-4749-9aab-fa2e761f0ca4",
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

Get a specific project

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
        TrainingKey: "pariatur",
        ProjectID: "456ef103-1e68-499f-8c20-01e22cd55cc0",
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

Get your projects

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
        TrainingKey: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Projects != nil {
        // handle response
    }
}
```

## TrainProject

Queues project for training

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
        TrainingKey: "molestias",
        ProjectID: "4a184d76-d971-4fc8-a0c6-5b037bb8e0cc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Iteration != nil {
        // handle response
    }
}
```

## UpdateIterationForm

Update a specific iteration

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
            IsDefault: sdk.Bool(false),
            Name: sdk.String("Ms. Daryl Hermiston"),
        },
        TrainingKey: "officiis",
        IterationID: "4de04af2-8c5d-4ddb-86aa-1cfd6d828da0",
        ProjectID: "13191129-6466-445c-9d81-f29042f569b7",
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

Update a specific iteration

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
            IsDefault: sdk.Bool(false),
            Name: sdk.String("Dr. Boyd Wilderman"),
        },
        TrainingKey: "fugit",
        IterationID: "216cbe07-1bc1-463e-a79a-3b084da99257",
        ProjectID: "d04f4084-7a74-42d8-8496-cbdeecf6b99b",
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

Update a specific iteration

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
        TrainingKey: "commodi",
        IterationID: "3562ebfd-f55c-4294-8060-b06a1287764e",
        ProjectID: "ef6d0c6d-6ed9-4c73-9d63-4571509a8e87",
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

Update a specific project

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
            Description: sdk.String("doloremque"),
            Name: sdk.String("Jeff Schimmel"),
            Settings: &shared.ProjectSettings{
                DomainID: sdk.String("1f9c242c-7b66-4a1f-b0c7-3df5b6719890"),
            },
        },
        TrainingKey: "reiciendis",
        ProjectID: "42a4bb43-8d85-4b26-8591-d745e3c2059c",
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

Update a specific project

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
            Description: sdk.String("excepturi"),
            Name: sdk.String("Bryan Wolff"),
            Settings: &shared.ProjectSettings{
                DomainID: sdk.String("7e0e2527-65b1-4d62-bcda-ce1f01216ce2"),
            },
        },
        TrainingKey: "aspernatur",
        ProjectID: "39e8f25c-d0d1-49d9-99f4-39e39266cbd9",
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

Update a specific project

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
        RequestBody: []byte("quaerat"),
        TrainingKey: "delectus",
        ProjectID: "7aa2b241-1369-45d1-a669-8fcc4596217c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
