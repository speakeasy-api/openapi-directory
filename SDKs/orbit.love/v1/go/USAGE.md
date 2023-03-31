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
        ID: "corrupti",
        MemberSlug: "provident",
        WorkspaceSlug: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Activities.DeleteWorkspaceSlugMembersMemberSlugActivitiesID(ctx, req, operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDSecurity{
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
<!-- End SDK Example Usage -->