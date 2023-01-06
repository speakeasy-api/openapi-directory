<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.FetchAccountSettingsRequest{
        Security: operations.FetchAccountSettingsSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        QueryParams: operations.FetchAccountSettingsQueryParams{
            SubaccountSid: "voluptas",
        },
    }
    
    res, err := s.FetchAccountSettings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1AccountSettings != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->