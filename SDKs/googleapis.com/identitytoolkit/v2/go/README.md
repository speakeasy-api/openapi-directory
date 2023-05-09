# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/identitytoolkit/v2/go
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
    res, err := s.Accounts.IdentitytoolkitAccountsMfaEnrollmentFinalize(ctx, operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest{
            DisplayName: sdk.String("provident"),
            IDToken: sdk.String("distinctio"),
            PhoneVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo{
                AndroidVerificationProof: sdk.String("quibusdam"),
                Code: sdk.String("unde"),
                PhoneNumber: sdk.String("nulla"),
                SessionInfo: sdk.String("corrupti"),
            },
            TenantID: sdk.String("illum"),
            TotpVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo{
                SessionInfo: sdk.String("vel"),
                VerificationCode: sdk.String("error"),
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [IdentitytoolkitAccountsMfaEnrollmentFinalize](docs/accounts/README.md#identitytoolkitaccountsmfaenrollmentfinalize) - Finishes enrolling a second factor for the user.
* [IdentitytoolkitAccountsMfaEnrollmentStart](docs/accounts/README.md#identitytoolkitaccountsmfaenrollmentstart) - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* [IdentitytoolkitAccountsMfaEnrollmentWithdraw](docs/accounts/README.md#identitytoolkitaccountsmfaenrollmentwithdraw) - Revokes one second factor from the enrolled second factors for an account.
* [IdentitytoolkitAccountsMfaSignInFinalize](docs/accounts/README.md#identitytoolkitaccountsmfasigninfinalize) - Verifies the MFA challenge and performs sign-in
* [IdentitytoolkitAccountsMfaSignInStart](docs/accounts/README.md#identitytoolkitaccountsmfasigninstart) - Sends the MFA challenge
* [IdentitytoolkitAccountsPasskeyEnrollmentFinalize](docs/accounts/README.md#identitytoolkitaccountspasskeyenrollmentfinalize) - Finishes enrolling a passkey credential for the user.
* [IdentitytoolkitAccountsPasskeyEnrollmentStart](docs/accounts/README.md#identitytoolkitaccountspasskeyenrollmentstart) - Step one of the passkey enrollment process. Returns a challenge and parameters for creation of the passkey credential.
* [IdentitytoolkitAccountsPasskeySignInFinalize](docs/accounts/README.md#identitytoolkitaccountspasskeysigninfinalize) - Verifies the passkey assertion and signs the user in.
* [IdentitytoolkitAccountsPasskeySignInStart](docs/accounts/README.md#identitytoolkitaccountspasskeysigninstart) - Creates and returns the passkey challenge
* [IdentitytoolkitAccountsRevokeToken](docs/accounts/README.md#identitytoolkitaccountsrevoketoken) - Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

### [DefaultSupportedIdps](docs/defaultsupportedidps/README.md)

* [IdentitytoolkitDefaultSupportedIdpsList](docs/defaultsupportedidps/README.md#identitytoolkitdefaultsupportedidpslist) - List all default supported Idps.

### [Projects](docs/projects/README.md)

* [IdentitytoolkitProjectsIdentityPlatformInitializeAuth](docs/projects/README.md#identitytoolkitprojectsidentityplatforminitializeauth) - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* [IdentitytoolkitProjectsTenantsCreate](docs/projects/README.md#identitytoolkitprojectstenantscreate) - Create a tenant. Requires write permission on the Agent project.
* [IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate](docs/projects/README.md#identitytoolkitprojectstenantsdefaultsupportedidpconfigscreate) - Create a default supported Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList](docs/projects/README.md#identitytoolkitprojectstenantsdefaultsupportedidpconfigslist) - List all default supported Idp configurations for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsGetIamPolicy](docs/projects/README.md#identitytoolkitprojectstenantsgetiampolicy) - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* [IdentitytoolkitProjectsTenantsInboundSamlConfigsCreate](docs/projects/README.md#identitytoolkitprojectstenantsinboundsamlconfigscreate) - Create an inbound SAML configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsInboundSamlConfigsList](docs/projects/README.md#identitytoolkitprojectstenantsinboundsamlconfigslist) - List all inbound SAML configurations for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsList](docs/projects/README.md#identitytoolkitprojectstenantslist) - List tenants under the given agent project. Requires read permission on the Agent project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsCreate](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigscreate) - Create an Oidc Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsDelete](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigsdelete) - Delete an Oidc Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsGet](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigsget) - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsList](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigslist) - List all Oidc Idp configurations for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsOauthIdpConfigsPatch](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigspatch) - Update an Oidc Idp configuration for an Identity Toolkit project.
* [IdentitytoolkitProjectsTenantsSetIamPolicy](docs/projects/README.md#identitytoolkitprojectstenantssetiampolicy) - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* [IdentitytoolkitProjectsTenantsTestIamPermissions](docs/projects/README.md#identitytoolkitprojectstenantstestiampermissions) - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

### [V2](docs/v2/README.md)

* [IdentitytoolkitGetRecaptchaConfig](docs/v2/README.md#identitytoolkitgetrecaptchaconfig) - Gets parameters needed for reCAPTCHA analysis.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
