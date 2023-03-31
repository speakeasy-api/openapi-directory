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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest{
        DollarXgafv: "2",
        GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest{
            DisplayName: "provident",
            IDToken: "distinctio",
            PhoneVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo{
                AndroidVerificationProof: "quibusdam",
                Code: "unde",
                PhoneNumber: "nulla",
                SessionInfo: "corrupti",
            },
            TenantID: "illum",
            TotpVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo{
                SessionInfo: "vel",
                VerificationCode: "error",
            },
        },
        AccessToken: "deserunt",
        Alt: "media",
        Callback: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        UploadType: "tempora",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Accounts.IdentitytoolkitAccountsMfaEnrollmentFinalize(ctx, req, operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity{
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


### Accounts

* `IdentitytoolkitAccountsMfaEnrollmentFinalize` - Finishes enrolling a second factor for the user.
* `IdentitytoolkitAccountsMfaEnrollmentStart` - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* `IdentitytoolkitAccountsMfaEnrollmentWithdraw` - Revokes one second factor from the enrolled second factors for an account.
* `IdentitytoolkitAccountsMfaSignInFinalize` - Verifies the MFA challenge and performs sign-in
* `IdentitytoolkitAccountsMfaSignInStart` - Sends the MFA challenge

### DefaultSupportedIdps

* `IdentitytoolkitDefaultSupportedIdpsList` - List all default supported Idps.

### Projects

* `IdentitytoolkitProjectsIdentityPlatformInitializeAuth` - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* `IdentitytoolkitProjectsTenantsCreate` - Create a tenant. Requires write permission on the Agent project.
* `IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate` - Create a default supported Idp configuration for an Identity Toolkit project.
* `IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList` - List all default supported Idp configurations for an Identity Toolkit project.
* `IdentitytoolkitProjectsTenantsGetIamPolicy` - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* `IdentitytoolkitProjectsTenantsInboundSamlConfigsCreate` - Create an inbound SAML configuration for an Identity Toolkit project.
* `IdentitytoolkitProjectsTenantsInboundSamlConfigsList` - List all inbound SAML configurations for an Identity Toolkit project.
* `IdentitytoolkitProjectsTenantsList` - List tenants under the given agent project. Requires read permission on the Agent project.
* `IdentitytoolkitProjectsTenantsOauthIdpConfigsCreate` - Create an Oidc Idp configuration for an Identity Toolkit project.
* `IdentitytoolkitProjectsTenantsOauthIdpConfigsDelete` - Delete an Oidc Idp configuration for an Identity Toolkit project.
* `IdentitytoolkitProjectsTenantsOauthIdpConfigsGet` - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* `IdentitytoolkitProjectsTenantsOauthIdpConfigsList` - List all Oidc Idp configurations for an Identity Toolkit project.
* `IdentitytoolkitProjectsTenantsOauthIdpConfigsPatch` - Update an Oidc Idp configuration for an Identity Toolkit project.
* `IdentitytoolkitProjectsTenantsSetIamPolicy` - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* `IdentitytoolkitProjectsTenantsTestIamPermissions` - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
