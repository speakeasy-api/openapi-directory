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

    req := operations.AdsensehostAccountsAdclientsGetRequest{
        AccountID: "corrupti",
        AdClientID: "provident",
        Alt: "json",
        Fields: "quibusdam",
        Key: "unde",
        OauthToken: "nulla",
        PrettyPrint: false,
        QuotaUser: "corrupti",
        UserIP: "illum",
    }

    ctx := context.Background()
    res, err := s.Accounts.AdsensehostAccountsAdclientsGet(ctx, req, operations.AdsensehostAccountsAdclientsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClient != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->