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

    req := operations.ContentAccountsAuthinfoRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PrettyPrint: false,
        QuotaUser: "illum",
        UploadType: "vel",
        UploadProtocol: "error",
    }

    ctx := context.Background()
    res, err := s.Accounts.ContentAccountsAuthinfo(ctx, req, operations.ContentAccountsAuthinfoSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsAuthInfoResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->