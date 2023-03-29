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
        Security: operations.CloudbillingBillingAccountsCreateSecurity{
            Option1: &operations.CloudbillingBillingAccountsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.CloudbillingBillingAccountsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.BillingAccountInput{
            DisplayName: "facilis",
            MasterBillingAccount: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.CloudbillingBillingAccountsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAccount != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->