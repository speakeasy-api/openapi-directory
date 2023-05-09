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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IamcredentialsProjectsServiceAccountsGenerateAccessToken(ctx, operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GenerateAccessTokenRequest: &shared.GenerateAccessTokenRequest{
            Delegates: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Lifetime: sdk.String("nulla"),
            Scope: []string{
                "illum",
                "vel",
                "error",
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("debitis"),
        Name: "Lucia Goldner",
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity{
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


### [Projects](docs/projects/README.md)

* [IamcredentialsProjectsServiceAccountsGenerateAccessToken](docs/projects/README.md#iamcredentialsprojectsserviceaccountsgenerateaccesstoken) - Generates an OAuth 2.0 access token for a service account.
* [IamcredentialsProjectsServiceAccountsGenerateIDToken](docs/projects/README.md#iamcredentialsprojectsserviceaccountsgenerateidtoken) - Generates an OpenID Connect ID token for a service account.
* [IamcredentialsProjectsServiceAccountsSignBlob](docs/projects/README.md#iamcredentialsprojectsserviceaccountssignblob) - Signs a blob using a service account's system-managed private key.
* [IamcredentialsProjectsServiceAccountsSignJwt](docs/projects/README.md#iamcredentialsprojectsserviceaccountssignjwt) - Signs a JWT using a service account's system-managed private key.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
