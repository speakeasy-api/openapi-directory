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
            PackageName: "unde",
            ProductID: "deserunt",
            Token: "porro",
        },
        QueryParams: operations.AndroidpublisherInapppurchasesGetQueryParams{
            Alt: "json",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UserIP: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.Inapppurchases.AndroidpublisherInapppurchasesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->