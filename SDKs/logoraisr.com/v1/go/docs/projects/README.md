# Projects

### Available Operations

* [ProjectsCreate](#projectscreate) - Create a new project.
* [ProjectsList](#projectslist) - Get user project list.
* [ProjectsRead](#projectsread) - Get project details.

## ProjectsCreate

This POST-Method creates a new project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Projects.ProjectsCreate(ctx, shared.ProjectRequest{
        FileID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
        Process: &shared.Process{
            Crop: sdk.String("ipsam"),
            Flip: sdk.Bool(false),
            Mirror: sdk.Bool(false),
            ProcessingAlgorithm: "repellendus",
            Resize: sdk.String("sapiente"),
            Rotate: sdk.Int64(778157),
        },
        ProjectTitle: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectResponse != nil {
        // handle response
    }
}
```

## ProjectsList

This GET-Method lists the user's projects.

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Projects.ProjectsList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## ProjectsRead

This GET-Method returns a specific project.

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Projects.ProjectsRead(ctx, operations.ProjectsReadRequest{
        ProjectNumber: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
