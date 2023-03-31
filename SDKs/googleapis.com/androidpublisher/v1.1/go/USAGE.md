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
        Alt: "json",
        Fields: "corrupti",
        Key: "provident",
        OauthToken: "distinctio",
        PackageName: "quibusdam",
        PrettyPrint: false,
        ProductID: "unde",
        QuotaUser: "nulla",
        Token: "corrupti",
        UserIP: "illum",
    }

    ctx := context.Background()
    res, err := s.Inapppurchases.AndroidpublisherInapppurchasesGet(ctx, req, operations.AndroidpublisherInapppurchasesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->