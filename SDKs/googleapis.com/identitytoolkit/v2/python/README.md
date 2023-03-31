# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/identitytoolkit/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest(
    dollar_xgafv="2",
    google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest(
        display_name="provident",
        id_token="distinctio",
        phone_verification_info=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo(
            android_verification_proof="quibusdam",
            code="unde",
            phone_number="nulla",
            session_info="corrupti",
        ),
        tenant_id="illum",
        totp_verification_info=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo(
            session_info="vel",
            verification_code="error",
        ),
    ),
    access_token="deserunt",
    alt="media",
    callback="iure",
    fields_="magnam",
    key="debitis",
    oauth_token="ipsa",
    pretty_print=False,
    quota_user="delectus",
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.accounts.identitytoolkit_accounts_mfa_enrollment_finalize(req, operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `identitytoolkit_accounts_mfa_enrollment_finalize` - Finishes enrolling a second factor for the user.
* `identitytoolkit_accounts_mfa_enrollment_start` - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* `identitytoolkit_accounts_mfa_enrollment_withdraw` - Revokes one second factor from the enrolled second factors for an account.
* `identitytoolkit_accounts_mfa_sign_in_finalize` - Verifies the MFA challenge and performs sign-in
* `identitytoolkit_accounts_mfa_sign_in_start` - Sends the MFA challenge

### default_supported_idps

* `identitytoolkit_default_supported_idps_list` - List all default supported Idps.

### projects

* `identitytoolkit_projects_identity_platform_initialize_auth` - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* `identitytoolkit_projects_tenants_create` - Create a tenant. Requires write permission on the Agent project.
* `identitytoolkit_projects_tenants_default_supported_idp_configs_create` - Create a default supported Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_default_supported_idp_configs_list` - List all default supported Idp configurations for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_get_iam_policy` - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* `identitytoolkit_projects_tenants_inbound_saml_configs_create` - Create an inbound SAML configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_inbound_saml_configs_list` - List all inbound SAML configurations for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_list` - List tenants under the given agent project. Requires read permission on the Agent project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_create` - Create an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_delete` - Delete an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_get` - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_list` - List all Oidc Idp configurations for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_patch` - Update an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_set_iam_policy` - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* `identitytoolkit_projects_tenants_test_iam_permissions` - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
