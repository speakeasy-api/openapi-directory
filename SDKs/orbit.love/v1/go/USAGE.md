<!-- Start SDK Example Usage -->
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
    res, err := s.Activities.DeleteWorkspaceSlugMembersMemberSlugActivitiesID(ctx, operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        MemberSlug: "deserunt",
        WorkspaceSlug: "perferendis",
    }, operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDSecurity{
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