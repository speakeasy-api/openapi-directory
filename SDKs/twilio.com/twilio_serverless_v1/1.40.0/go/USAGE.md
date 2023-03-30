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
        Security: operations.CreateAssetSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateAssetPathParams{
            ServiceSid: "unde",
        },
        Request: &operations.CreateAssetCreateAssetRequest{
            FriendlyName: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.CreateAsset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceAsset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->