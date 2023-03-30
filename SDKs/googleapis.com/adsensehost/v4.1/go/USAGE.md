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
        Security: operations.AdsensehostAccountsAdclientsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AdsensehostAccountsAdclientsGetPathParams{
            AccountID: "corrupti",
            AdClientID: "provident",
        },
        QueryParams: operations.AdsensehostAccountsAdclientsGetQueryParams{
            Alt: "json",
            Fields: "quibusdam",
            Key: "unde",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "corrupti",
            UserIP: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AdsensehostAccountsAdclientsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClient != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->