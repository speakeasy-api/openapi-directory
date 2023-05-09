# Workspaces

### Available Operations

* [DeleteWorkspace](#deleteworkspace) - Delete workspace
* [GetWorkspace](#getworkspace) - Get workspace

## DeleteWorkspace

Deletes the workspace

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
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Workspaces.DeleteWorkspace(ctx, operations.DeleteWorkspaceRequest{
        WorkspaceID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWorkspace

Returns workspace information

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
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Workspaces.GetWorkspace(ctx, operations.GetWorkspaceRequest{
        WorkspaceID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```
