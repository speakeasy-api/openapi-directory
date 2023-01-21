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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.BillingAccountInput{
            DisplayName: "rerum",
            MasterBillingAccount: "dicta",
        },
    }
    
    res, err := s.BillingAccounts.CloudbillingBillingAccountsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAccount != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->