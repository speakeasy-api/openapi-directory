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

    req := operations.DeleteWorkspaceIDMembersMemberIDActivitiesIDRequest{
        Security: operations.DeleteWorkspaceIDMembersMemberIDActivitiesIDSecurity{
            Bearer: shared.SchemeBearer{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.DeleteWorkspaceIDMembersMemberIDActivitiesIDPathParams{
            ID: "unde",
            MemberID: "deserunt",
            WorkspaceID: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.Activities.DeleteWorkspaceIDMembersMemberIDActivitiesID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->