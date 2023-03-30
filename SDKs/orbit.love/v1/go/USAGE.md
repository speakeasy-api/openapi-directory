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
    s := sdk.New()

    req := operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDRequest{
        Security: operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDSecurity{
            Bearer: shared.SchemeBearer{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        PathParams: operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDPathParams{
            ID: "unde",
            MemberSlug: "deserunt",
            WorkspaceSlug: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.Activities.DeleteWorkspaceSlugMembersMemberSlugActivitiesID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->