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

    req := operations.MybusinessnotificationsAccountsGetNotificationSettingRequest{
        PathParams: operations.MybusinessnotificationsAccountsGetNotificationSettingPathParams{
            Name: "corrupti",
        },
        QueryParams: operations.MybusinessnotificationsAccountsGetNotificationSettingQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.MybusinessnotificationsAccountsGetNotificationSetting(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationSetting != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->