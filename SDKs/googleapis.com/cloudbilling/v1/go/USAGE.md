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

    req := operations.CloudbillingBillingAccountsCreateRequest{
        DollarXgafv: "2",
        BillingAccountInput: &shared.BillingAccountInput{
            DisplayName: "provident",
            MasterBillingAccount: "distinctio",
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.CloudbillingBillingAccountsCreate(ctx, req, operations.CloudbillingBillingAccountsCreateSecurity{
        Option1: &operations.CloudbillingBillingAccountsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAccount != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->