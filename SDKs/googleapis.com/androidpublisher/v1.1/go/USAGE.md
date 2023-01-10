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
    
    req := operations.AndroidpublisherInapppurchasesGetRequest{
        Security: operations.AndroidpublisherInapppurchasesGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AndroidpublisherInapppurchasesGetPathParams{
            PackageName: "molestiae",
            ProductID: "quas",
            Token: "assumenda",
        },
        QueryParams: operations.AndroidpublisherInapppurchasesGetQueryParams{
            Alt: "json",
            Fields: "eos",
            Key: "ut",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "cupiditate",
            UserIP: "dolores",
        },
    }
    
    res, err := s.Inapppurchases.AndroidpublisherInapppurchasesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->