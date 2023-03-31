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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
        IdentitytoolkitRelyingpartyCreateAuthURIRequest: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: "corrupti",
            AuthFlowType: "provident",
            ClientID: "distinctio",
            Context: "quibusdam",
            ContinueURI: "unde",
            CustomParameter: map[string]string{
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
            },
            HostedDomain: "debitis",
            Identifier: "ipsa",
            OauthConsumerKey: "delectus",
            OauthScope: "tempora",
            OpenidRealm: "suscipit",
            OtaApp: "molestiae",
            ProviderID: "minus",
            SessionID: "placeat",
            TenantID: "voluptatum",
            TenantProjectNumber: "iusto",
        },
        Alt: "json",
        Fields: "excepturi",
        Key: "nisi",
        OauthToken: "recusandae",
        PrettyPrint: false,
        QuotaUser: "temporibus",
        UserIP: "ab",
    }

    ctx := context.Background()
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyCreateAuthURI(ctx, req, operations.IdentitytoolkitRelyingpartyCreateAuthURISecurity{
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


### Relyingparty

* `IdentitytoolkitRelyingpartyCreateAuthURI` - Creates the URI used by the IdP to authenticate the user.
* `IdentitytoolkitRelyingpartyDeleteAccount` - Delete user account.
* `IdentitytoolkitRelyingpartyDownloadAccount` - Batch download user accounts.
* `IdentitytoolkitRelyingpartyEmailLinkSignin` - Reset password for a user.
* `IdentitytoolkitRelyingpartyGetAccountInfo` - Returns the account info.
* `IdentitytoolkitRelyingpartyGetOobConfirmationCode` - Get a code for user action confirmation.
* `IdentitytoolkitRelyingpartyGetProjectConfig` - Get project configuration.
* `IdentitytoolkitRelyingpartyGetPublicKeys` - Get token signing public key.
* `IdentitytoolkitRelyingpartyGetRecaptchaParam` - Get recaptcha secure param.
* `IdentitytoolkitRelyingpartyResetPassword` - Reset password for a user.
* `IdentitytoolkitRelyingpartySendVerificationCode` - Send SMS verification code.
* `IdentitytoolkitRelyingpartySetAccountInfo` - Set account info for a user.
* `IdentitytoolkitRelyingpartySetProjectConfig` - Set project configuration.
* `IdentitytoolkitRelyingpartySignOutUser` - Sign out user.
* `IdentitytoolkitRelyingpartySignupNewUser` - Signup new user.
* `IdentitytoolkitRelyingpartyUploadAccount` - Batch upload existing user accounts.
* `IdentitytoolkitRelyingpartyVerifyAssertion` - Verifies the assertion returned by the IdP.
* `IdentitytoolkitRelyingpartyVerifyCustomToken` - Verifies the developer asserted ID token.
* `IdentitytoolkitRelyingpartyVerifyPassword` - Verifies the user entered password.
* `IdentitytoolkitRelyingpartyVerifyPhoneNumber` - Verifies ownership of a phone number and creates/updates the user account accordingly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
