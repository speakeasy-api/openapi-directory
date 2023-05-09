# ActivityTypes

### Available Operations

* [GetWorkspaceSlugActivityTypes](#getworkspaceslugactivitytypes) - List all activity types for a workspace

## GetWorkspaceSlugActivityTypes

List all activity types for a workspace

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
    res, err := s.ActivityTypes.GetWorkspaceSlugActivityTypes(ctx, operations.GetWorkspaceSlugActivityTypesRequest{
        WorkspaceSlug: "labore",
    }, operations.GetWorkspaceSlugActivityTypesSecurity{
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
