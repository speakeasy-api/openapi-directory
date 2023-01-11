# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest req = new IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest() {{
                security = new IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest() {{
                    displayName = "rerum";
                    idToken = "dicta";
                    phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo() {{
                        androidVerificationProof = "debitis";
                        code = "voluptatum";
                        phoneNumber = "et";
                        sessionInfo = "ut";
                    }};
                    tenantId = "dolorem";
                }};
            }};

            IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse res = sdk.accounts.identitytoolkitAccountsMfaEnrollmentFinalize(req);

            if (res.googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `identitytoolkitAccountsMfaEnrollmentFinalize` - Finishes enrolling a second factor for the user.
* `identitytoolkitAccountsMfaEnrollmentStart` - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* `identitytoolkitAccountsMfaEnrollmentWithdraw` - Revokes one second factor from the enrolled second factors for an account.
* `identitytoolkitAccountsMfaSignInFinalize` - Verifies the MFA challenge and performs sign-in
* `identitytoolkitAccountsMfaSignInStart` - Sends the MFA challenge

### defaultSupportedIdps

* `identitytoolkitDefaultSupportedIdpsList` - List all default supported Idps.

### projects

* `identitytoolkitProjectsIdentityPlatformInitializeAuth` - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* `identitytoolkitProjectsTenantsCreate` - Create a tenant. Requires write permission on the Agent project.
* `identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate` - Create a default supported Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList` - List all default supported Idp configurations for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsGetIamPolicy` - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* `identitytoolkitProjectsTenantsInboundSamlConfigsCreate` - Create an inbound SAML configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsInboundSamlConfigsList` - List all inbound SAML configurations for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsList` - List tenants under the given agent project. Requires read permission on the Agent project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsCreate` - Create an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsDelete` - Delete an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsGet` - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsList` - List all Oidc Idp configurations for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsPatch` - Update an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsSetIamPolicy` - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* `identitytoolkitProjectsTenantsTestIamPermissions` - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
