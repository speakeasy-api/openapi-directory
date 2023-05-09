# Installer

### Available Operations

* [SasportalInstallerGenerateSecret](#sasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [SasportalInstallerValidate](#sasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

## SasportalInstallerGenerateSecret

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
    res, err := s.Installer.SasportalInstallerGenerateSecret(ctx, operations.SasportalInstallerGenerateSecretRequest{
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
    }, operations.SasportalInstallerGenerateSecretSecurity{
        Option1: &operations.SasportalInstallerGenerateSecretSecurityOption1{
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

## SasportalInstallerValidate

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
    res, err := s.Installer.SasportalInstallerValidate(ctx, operations.SasportalInstallerValidateRequest{
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
    }, operations.SasportalInstallerValidateSecurity{
        Option1: &operations.SasportalInstallerValidateSecurityOption1{
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
