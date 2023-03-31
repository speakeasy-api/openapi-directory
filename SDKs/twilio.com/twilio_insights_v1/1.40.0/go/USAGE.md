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

    req := operations.FetchAccountSettingsRequest{
        SubaccountSid: "corrupti",
    }

    ctx := context.Background()
    res, err := s.FetchAccountSettings(ctx, req, operations.FetchAccountSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1AccountSettings != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->