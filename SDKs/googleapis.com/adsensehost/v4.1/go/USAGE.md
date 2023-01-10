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
            AccountID: "qui",
            AdClientID: "necessitatibus",
        },
        QueryParams: operations.AdsensehostAccountsAdclientsGetQueryParams{
            Alt: "csv",
            Fields: "itaque",
            Key: "veniam",
            OauthToken: "nihil",
            PrettyPrint: true,
            QuotaUser: "est",
            UserIP: "placeat",
        },
    }
    
    res, err := s.Accounts.AdsensehostAccountsAdclientsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClient != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->