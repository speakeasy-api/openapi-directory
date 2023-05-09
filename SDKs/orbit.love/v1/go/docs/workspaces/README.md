# Workspaces

### Available Operations

* [GetWorkspaces](#getworkspaces) - Get all workspaces for the current user
* [GetWorkspacesWorkspaceSlug](#getworkspacesworkspaceslug) - Get a workspace

## GetWorkspaces

Get all workspaces for the current user

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
    res, err := s.Workspaces.GetWorkspaces(ctx, operations.GetWorkspacesSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceSlug

Get a workspace

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
    res, err := s.Workspaces.GetWorkspacesWorkspaceSlug(ctx, operations.GetWorkspacesWorkspaceSlugRequest{
        IncludeOrbitLevelCounts: sdk.Bool(false),
        WorkspaceSlug: "ducimus",
    }, operations.GetWorkspacesWorkspaceSlugSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
