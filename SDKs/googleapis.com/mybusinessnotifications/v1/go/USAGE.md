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
            Name: "repellat",
        },
        QueryParams: operations.MybusinessnotificationsAccountsGetNotificationSettingQueryParams{
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "json",
            Callback: "eum",
            Fields: "repellendus",
            Key: "totam",
            OauthToken: "facilis",
            PrettyPrint: false,
            QuotaUser: "ut",
            UploadType: "dicta",
            UploadProtocol: "enim",
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