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

    req := operations.CreateActivityRequest{
        Security: operations.CreateActivitySecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateActivityPathParams{
            WorkspaceSid: "unde",
        },
        Request: &operations.CreateActivityCreateActivityRequest{
            Available: false,
            FriendlyName: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.CreateActivity(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceActivity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->