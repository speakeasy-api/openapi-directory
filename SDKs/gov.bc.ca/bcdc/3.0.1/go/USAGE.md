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
            GithubAccessCode: &shared.SchemeGithubAccessCode{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.GetActionOrganizationActivityListRequest{
        QueryParams: operations.GetActionOrganizationActivityListQueryParams{
            ID: "unde",
        },
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