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
    
    req := operations.MybusinessnotificationsAccountsGetNotificationSettingRequest{
        PathParams: operations.MybusinessnotificationsAccountsGetNotificationSettingPathParams{
            Name: "libero",
        },
        QueryParams: operations.MybusinessnotificationsAccountsGetNotificationSettingQueryParams{
            DollarXgafv: "1",
            AccessToken: "corrupti",
            Alt: "media",
            Callback: "sunt",
            Fields: "et",
            Key: "sed",
            OauthToken: "ut",
            PrettyPrint: false,
            QuotaUser: "velit",
            UploadType: "dolorum",
            UploadProtocol: "qui",
        },
    }
    
    res, err := s.Accounts.MybusinessnotificationsAccountsGetNotificationSetting(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationSetting != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->