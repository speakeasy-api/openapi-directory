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
            Name: "esse",
        },
        QueryParams: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams{
            DollarXgafv: "1",
            AccessToken: "rerum",
            Alt: "json",
            Callback: "voluptatem",
            Fields: "harum",
            Key: "qui",
            OauthToken: "quos",
            PrettyPrint: true,
            QuotaUser: "sunt",
            UploadType: "maiores",
            UploadProtocol: "et",
        },
        Request: &shared.GenerateAccessTokenRequest{
            Delegates: []string{
                "eligendi",
                "tenetur",
                "et",
            },
            Lifetime: "consectetur",
            Scope: []string{
                "quas",
                "consequuntur",
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