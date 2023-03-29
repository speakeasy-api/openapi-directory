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
        Security: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams{
            Name: "unde",
        },
        QueryParams: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GenerateAccessTokenRequest{
            Delegates: []string{
                "iusto",
                "ullam",
            },
            Lifetime: "saepe",
            Scope: []string{
                "sapiente",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.IamcredentialsProjectsServiceAccountsGenerateAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->