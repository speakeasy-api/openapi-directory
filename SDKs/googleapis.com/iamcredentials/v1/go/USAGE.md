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
            Name: "sit",
        },
        QueryParams: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GenerateAccessTokenRequest{
            Delegates: []string{
                "debitis",
                "voluptatum",
                "et",
            },
            Lifetime: "ut",
            Scope: []string{
                "et",
                "voluptate",
                "iste",
            },
        },
    }
    
    res, err := s.Projects.IamcredentialsProjectsServiceAccountsGenerateAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->