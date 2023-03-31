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

    req := operations.AdsenseAccountsAdclientsGetAdCodeRequest{
        AccountID: "corrupti",
        AdClientID: "provident",
        Alt: "json",
        Fields: "quibusdam",
        Key: "unde",
        OauthToken: "nulla",
        PrettyPrint: false,
        QuotaUser: "corrupti",
        TagPartner: "illum",
        UserIP: "vel",
    }

    ctx := context.Background()
    res, err := s.Accounts.AdsenseAccountsAdclientsGetAdCode(ctx, req, operations.AdsenseAccountsAdclientsGetAdCodeSecurity{
        Option1: &operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdCode != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->