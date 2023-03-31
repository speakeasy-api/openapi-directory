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
        RequestBody: &operations.CreateActivityCreateActivityRequest{
            Available: false,
            FriendlyName: "corrupti",
        },
        WorkspaceSid: "provident",
    }

    ctx := context.Background()
    res, err := s.CreateActivity(ctx, req, operations.CreateActivitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceActivity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->