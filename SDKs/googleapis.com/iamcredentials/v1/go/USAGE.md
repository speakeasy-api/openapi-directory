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
            Name: "non",
        },
        QueryParams: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams{
            DollarXgafv: "1",
            AccessToken: "laboriosam",
            Alt: "json",
            Callback: "beatae",
            Fields: "itaque",
            Key: "amet",
            OauthToken: "ex",
            PrettyPrint: false,
            QuotaUser: "sapiente",
            UploadType: "dolores",
            UploadProtocol: "voluptatem",
        },
        Request: &shared.GenerateAccessTokenRequest{
            Delegates: []string{
                "odit",
            },
            Lifetime: "voluptatem",
            Scope: []string{
                "laboriosam",
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