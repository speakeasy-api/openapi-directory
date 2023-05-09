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