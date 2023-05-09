# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/identitytoolkit/v3/go
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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyCreateAuthURI(ctx, operations.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
        IdentitytoolkitRelyingpartyCreateAuthURIRequest: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: sdk.String("corrupti"),
            AuthFlowType: sdk.String("provident"),
            ClientID: sdk.String("distinctio"),
            Context: sdk.String("quibusdam"),
            ContinueURI: sdk.String("unde"),
            CustomParameter: map[string]string{
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
            },
            HostedDomain: sdk.String("debitis"),
            Identifier: sdk.String("ipsa"),
            OauthConsumerKey: sdk.String("delectus"),
            OauthScope: sdk.String("tempora"),
            OpenidRealm: sdk.String("suscipit"),
            OtaApp: sdk.String("molestiae"),
            ProviderID: sdk.String("minus"),
            SessionID: sdk.String("placeat"),
            TenantID: sdk.String("voluptatum"),
            TenantProjectNumber: sdk.String("iusto"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UserIP: sdk.String("ab"),
    }, operations.IdentitytoolkitRelyingpartyCreateAuthURISecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthURIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Relyingparty](docs/relyingparty/README.md)

* [IdentitytoolkitRelyingpartyCreateAuthURI](docs/relyingparty/README.md#identitytoolkitrelyingpartycreateauthuri) - Creates the URI used by the IdP to authenticate the user.
* [IdentitytoolkitRelyingpartyDeleteAccount](docs/relyingparty/README.md#identitytoolkitrelyingpartydeleteaccount) - Delete user account.
* [IdentitytoolkitRelyingpartyDownloadAccount](docs/relyingparty/README.md#identitytoolkitrelyingpartydownloadaccount) - Batch download user accounts.
* [IdentitytoolkitRelyingpartyEmailLinkSignin](docs/relyingparty/README.md#identitytoolkitrelyingpartyemaillinksignin) - Reset password for a user.
* [IdentitytoolkitRelyingpartyGetAccountInfo](docs/relyingparty/README.md#identitytoolkitrelyingpartygetaccountinfo) - Returns the account info.
* [IdentitytoolkitRelyingpartyGetOobConfirmationCode](docs/relyingparty/README.md#identitytoolkitrelyingpartygetoobconfirmationcode) - Get a code for user action confirmation.
* [IdentitytoolkitRelyingpartyGetProjectConfig](docs/relyingparty/README.md#identitytoolkitrelyingpartygetprojectconfig) - Get project configuration.
* [IdentitytoolkitRelyingpartyGetPublicKeys](docs/relyingparty/README.md#identitytoolkitrelyingpartygetpublickeys) - Get token signing public key.
* [IdentitytoolkitRelyingpartyGetRecaptchaParam](docs/relyingparty/README.md#identitytoolkitrelyingpartygetrecaptchaparam) - Get recaptcha secure param.
* [IdentitytoolkitRelyingpartyResetPassword](docs/relyingparty/README.md#identitytoolkitrelyingpartyresetpassword) - Reset password for a user.
* [IdentitytoolkitRelyingpartySendVerificationCode](docs/relyingparty/README.md#identitytoolkitrelyingpartysendverificationcode) - Send SMS verification code.
* [IdentitytoolkitRelyingpartySetAccountInfo](docs/relyingparty/README.md#identitytoolkitrelyingpartysetaccountinfo) - Set account info for a user.
* [IdentitytoolkitRelyingpartySetProjectConfig](docs/relyingparty/README.md#identitytoolkitrelyingpartysetprojectconfig) - Set project configuration.
* [IdentitytoolkitRelyingpartySignOutUser](docs/relyingparty/README.md#identitytoolkitrelyingpartysignoutuser) - Sign out user.
* [IdentitytoolkitRelyingpartySignupNewUser](docs/relyingparty/README.md#identitytoolkitrelyingpartysignupnewuser) - Signup new user.
* [IdentitytoolkitRelyingpartyUploadAccount](docs/relyingparty/README.md#identitytoolkitrelyingpartyuploadaccount) - Batch upload existing user accounts.
* [IdentitytoolkitRelyingpartyVerifyAssertion](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifyassertion) - Verifies the assertion returned by the IdP.
* [IdentitytoolkitRelyingpartyVerifyCustomToken](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifycustomtoken) - Verifies the developer asserted ID token.
* [IdentitytoolkitRelyingpartyVerifyPassword](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifypassword) - Verifies the user entered password.
* [IdentitytoolkitRelyingpartyVerifyPhoneNumber](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifyphonenumber) - Verifies ownership of a phone number and creates/updates the user account accordingly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
