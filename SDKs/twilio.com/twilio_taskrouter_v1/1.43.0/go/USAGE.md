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
    res, err := s.CreateActivity(ctx, operations.CreateActivityRequest{
        RequestBody: &operations.CreateActivityCreateActivityRequest{
            Available: sdk.Bool(false),
            FriendlyName: "corrupti",
        },
        WorkspaceSid: "provident",
    }, operations.CreateActivitySecurity{
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