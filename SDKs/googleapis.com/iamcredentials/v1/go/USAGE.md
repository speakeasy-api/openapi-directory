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

    req := operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest{
        DollarXgafv: "2",
        GenerateAccessTokenRequest: &shared.GenerateAccessTokenRequest{
            Delegates: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Lifetime: "nulla",
            Scope: []string{
                "illum",
                "vel",
                "error",
            },
        },
        AccessToken: "deserunt",
        Alt: "media",
        Callback: "iure",
        Fields: "magnam",
        Key: "debitis",
        Name: "ipsa",
        OauthToken: "delectus",
        PrettyPrint: false,
        QuotaUser: "tempora",
        UploadType: "suscipit",
        UploadProtocol: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Projects.IamcredentialsProjectsServiceAccountsGenerateAccessToken(ctx, req, operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->