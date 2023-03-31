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

    req := operations.AdsenseAccountsAdclientsAdunitsCreateRequest{
        DollarXgafv: "2",
        AdUnitInput: &shared.AdUnitInput{
            ContentAdsSettings: &shared.ContentAdsSettings{
                Size: "provident",
                Type: "MATCHED_CONTENT",
            },
            DisplayName: "quibusdam",
            State: "ACTIVE",
        },
        AccessToken: "nulla",
        Alt: "media",
        Callback: "illum",
        Fields: "vel",
        Key: "error",
        OauthToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Accounts.AdsenseAccountsAdclientsAdunitsCreate(ctx, req, operations.AdsenseAccountsAdclientsAdunitsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->