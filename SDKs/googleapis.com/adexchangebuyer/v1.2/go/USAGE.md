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
    
    req := operations.AdexchangebuyerAccountsGetRequest{
        Security: operations.AdexchangebuyerAccountsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AdexchangebuyerAccountsGetPathParams{
            ID: 1370564907374010457,
        },
        QueryParams: operations.AdexchangebuyerAccountsGetQueryParams{
            Alt: "json",
            Fields: "ipsa",
            Key: "aspernatur",
            OauthToken: "nam",
            PrettyPrint: false,
            QuotaUser: "natus",
            UserIP: "ipsam",
        },
    }
    
    res, err := s.Accounts.AdexchangebuyerAccountsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->