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
            Name: "unde",
        },
        QueryParams: operations.MybusinessnotificationsAccountsGetNotificationSettingQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
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