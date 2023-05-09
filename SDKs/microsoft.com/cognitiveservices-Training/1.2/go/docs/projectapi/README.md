# ProjectAPI

### Available Operations

* [CreateProject](#createproject) - Create a project
* [DeleteIteration](#deleteiteration) - Delete a specific iteration of a project
* [DeleteProject](#deleteproject) - Delete a specific project
* [ExportIteration](#exportiteration) - Export a trained iteration
* [GetExports](#getexports) - Get the list of exports for a specific iteration
* [GetIteration](#getiteration) - Get a specific iteration
* [GetIterationPerformance](#getiterationperformance) - Get detailed performance information about a trained iteration
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
        TrainingKey: "dicta",
        Description: sdk.String("quia"),
        DomainID: sdk.String("63d48e93-5c2c-49e8-9f30-be3e43202d72"),
        Name: "Beth Hand",
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
        TrainingKey: "minima",
        IterationID: "06641870-d9d2-41f9-ad03-0c4ecc11a083",
        ProjectID: "6429068b-8502-4a55-a7f7-3bc845e320a3",
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
        TrainingKey: "veritatis",
        ProjectID: "9f4badf9-47c9-4a86-bbc4-2426665816dd",
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
        TrainingKey: "impedit",
        IterationID: "a8ef51fc-b4c5-493e-812c-daad0ec7afed",
        Platform: "nobis",
        ProjectID: "d80df448-a47f-4939-8c58-880983dabf9e",
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
        TrainingKey: "a",
        IterationID: "3ffdd9f7-f079-4af4-9357-24cdb0f4d281",
        ProjectID: "187d5684-4ede-4d85-a906-5e628bdfc203",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Exports != nil {
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
        TrainingKey: "quia",
        IterationID: "b6c87992-3b7e-4135-84f7-ae12c6891f82",
        ProjectID: "ce115717-2305-4377-9cfa-89df975e3566",
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

Get detailed performance information about a trained iteration

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
        TrainingKey: "rem",
        IterationID: "6092e9c3-ddc5-4f11-9dea-1026d541a4d1",
        ProjectID: "90feb217-80bc-4cc0-9bbd-db484708fb4e",
        Threshold: 2274.24,
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
        TrainingKey: "natus",
        ProjectID: "1e6bc158-c4c4-4e54-999e-a342260e9b20",
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
        TrainingKey: "consequatur",
        ProjectID: "ce78a1bd-8fb7-4a0a-916c-e723d4097fa3",
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
        TrainingKey: "ipsa",
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
        TrainingKey: "debitis",
        ProjectID: "9af725b2-9122-4030-983f-5aeb7799d22e",
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
            Name: sdk.String("Lucas Boyle"),
        },
        TrainingKey: "magnam",
        IterationID: "93825fdc-42c8-476c-ac2d-fb4cfc1c7623",
        ProjectID: "0f841fb1-bd23-4fdb-94db-6be5a685998e",
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
            Name: sdk.String("Wanda Osinski"),
        },
        TrainingKey: "voluptatem",
        IterationID: "da16fc2b-271a-4289-857e-854e90439d22",
        ProjectID: "24656946-2407-4084-b7ab-37cef0222519",
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
        RequestBody: []byte("labore"),
        TrainingKey: "fugiat",
        IterationID: "b55410ad-c669-4af9-8a26-c7cdc981f068",
        ProjectID: "981d6bb3-3cfa-4a34-8c31-bf407ee4fcf0",
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
            Description: sdk.String("impedit"),
            Name: sdk.String("Judy Rohan"),
            Settings: &shared.ProjectSettings{
                DomainID: sdk.String("f1562639-8a0d-4c76-a324-ccb06c8ca12d"),
            },
        },
        TrainingKey: "sit",
        ProjectID: "2529270b-8d57-422d-9895-b8bcf24db959",
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
            Description: sdk.String("nisi"),
            Name: sdk.String("Vincent Ernser"),
            Settings: &shared.ProjectSettings{
                DomainID: sdk.String("f7453399-4d78-4de3-b6e9-389f5abb7f66"),
            },
        },
        TrainingKey: "fugit",
        ProjectID: "550a2838-2ac4-483a-bd23-15bba650164e",
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
        RequestBody: []byte("quae"),
        TrainingKey: "ea",
        ProjectID: "f5bf6ae5-91bc-48bd-af36-12b63c205fda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
