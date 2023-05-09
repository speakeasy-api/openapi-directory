# Installer

### Available Operations

* [ProdTtSasportalInstallerGenerateSecret](#prodttsasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [ProdTtSasportalInstallerValidate](#prodttsasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

## ProdTtSasportalInstallerGenerateSecret

Generates a secret to be used with the ValidateInstaller.

### Example Usage

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
    res, err := s.Installer.ProdTtSasportalInstallerGenerateSecret(ctx, operations.ProdTtSasportalInstallerGenerateSecretRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "at": "at",
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.ProdTtSasportalInstallerGenerateSecretSecurity{
        Option1: &operations.ProdTtSasportalInstallerGenerateSecretSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalGenerateSecretResponse != nil {
        // handle response
    }
}
```

## ProdTtSasportalInstallerValidate

Validates the identity of a Certified Professional Installer (CPI).

### Example Usage

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
    res, err := s.Installer.ProdTtSasportalInstallerValidate(ctx, operations.ProdTtSasportalInstallerValidateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SasPortalValidateInstallerRequest: &shared.SasPortalValidateInstallerRequest{
            EncodedSecret: sdk.String("officia"),
            InstallerID: sdk.String("occaecati"),
            Secret: sdk.String("fugit"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("totam"),
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("qui"),
    }, operations.ProdTtSasportalInstallerValidateSecurity{
        Option1: &operations.ProdTtSasportalInstallerValidateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalValidateInstallerResponse != nil {
        // handle response
    }
}
```
