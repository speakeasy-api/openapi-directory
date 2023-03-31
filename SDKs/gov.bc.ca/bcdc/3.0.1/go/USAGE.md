<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    req := operations.GetActionOrganizationActivityListRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationActivityList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->