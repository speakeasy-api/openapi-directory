# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/iamcredentials/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `IamcredentialsProjectsServiceAccountsGenerateAccessToken` - Generates an OAuth 2.0 access token for a service account.
* `IamcredentialsProjectsServiceAccountsGenerateIDToken` - Generates an OpenID Connect ID token for a service account.
* `IamcredentialsProjectsServiceAccountsSignBlob` - Signs a blob using a service account's system-managed private key.
* `IamcredentialsProjectsServiceAccountsSignJwt` - Signs a JWT using a service account's system-managed private key.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
