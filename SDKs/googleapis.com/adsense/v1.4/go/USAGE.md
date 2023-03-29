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
        Security: operations.AdsenseAccountsAdclientsGetAdCodeSecurity{
            Option1: &operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.AdsenseAccountsAdclientsGetAdCodePathParams{
            AccountID: "unde",
            AdClientID: "deserunt",
        },
        QueryParams: operations.AdsenseAccountsAdclientsGetAdCodeQueryParams{
            Alt: "json",
            Fields: "nulla",
            Key: "id",
            OauthToken: "vero",
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            TagPartner: "nulla",
            UserIP: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AdsenseAccountsAdclientsGetAdCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdCode != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->