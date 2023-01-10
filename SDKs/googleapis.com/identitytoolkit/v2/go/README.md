# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    
    req := operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest{
        Security: operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams{
            DollarXgafv: "2",
            AccessToken: "in",
            Alt: "proto",
            Callback: "et",
            Fields: "nisi",
            Key: "aspernatur",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "nobis",
            UploadType: "ex",
            UploadProtocol: "repellat",
        },
        Request: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest{
            DisplayName: "in",
            IDToken: "voluptatibus",
            PhoneVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo{
                AndroidVerificationProof: "consequatur",
                Code: "et",
                PhoneNumber: "nihil",
                SessionInfo: "in",
            },
            TenantID: "dolorum",
        },
    }
    
    res, err := s.Accounts.IdentitytoolkitAccountsMfaEnrollmentFinalize(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `IdentitytoolkitAccountsMfaEnrollmentFinalize` - Finishes enrolling a second factor for the user.
* `IdentitytoolkitAccountsMfaEnrollmentStart` - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* `IdentitytoolkitAccountsMfaEnrollmentWithdraw` - Revokes one second factor from the enrolled second factors for an account.
* `IdentitytoolkitAccountsMfaSignInFinalize` - Verifies the MFA challenge and performs sign-in
* `IdentitytoolkitAccountsMfaSignInStart` - Sends the MFA challenge

### defaultSupportedIdps

* `IdentitytoolkitDefaultSupportedIdpsList` - List all default supported Idps.

### projects

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
