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

    req := operations.CreateAssetRequest{
        RequestBody: &operations.CreateAssetCreateAssetRequest{
            FriendlyName: "corrupti",
        },
        ServiceSid: "provident",
    }

    ctx := context.Background()
    res, err := s.CreateAsset(ctx, req, operations.CreateAssetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceAsset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->