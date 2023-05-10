# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest = new GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->displayName = 'provident';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->idToken = 'distinctio';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->androidVerificationProof = 'quibusdam';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->code = 'unde';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->phoneNumber = 'nulla';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->sessionInfo = 'corrupti';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->tenantId = 'illum';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->totpVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->totpVerificationInfo->sessionInfo = 'vel';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->totpVerificationInfo->verificationCode = 'error';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsMfaEnrollmentFinalize($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [identitytoolkitAccountsMfaEnrollmentFinalize](docs/accounts/README.md#identitytoolkitaccountsmfaenrollmentfinalize) - Finishes enrolling a second factor for the user.
* [identitytoolkitAccountsMfaEnrollmentStart](docs/accounts/README.md#identitytoolkitaccountsmfaenrollmentstart) - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* [identitytoolkitAccountsMfaEnrollmentWithdraw](docs/accounts/README.md#identitytoolkitaccountsmfaenrollmentwithdraw) - Revokes one second factor from the enrolled second factors for an account.
* [identitytoolkitAccountsMfaSignInFinalize](docs/accounts/README.md#identitytoolkitaccountsmfasigninfinalize) - Verifies the MFA challenge and performs sign-in
* [identitytoolkitAccountsMfaSignInStart](docs/accounts/README.md#identitytoolkitaccountsmfasigninstart) - Sends the MFA challenge
* [identitytoolkitAccountsPasskeyEnrollmentFinalize](docs/accounts/README.md#identitytoolkitaccountspasskeyenrollmentfinalize) - Finishes enrolling a passkey credential for the user.
* [identitytoolkitAccountsPasskeyEnrollmentStart](docs/accounts/README.md#identitytoolkitaccountspasskeyenrollmentstart) - Step one of the passkey enrollment process. Returns a challenge and parameters for creation of the passkey credential.
* [identitytoolkitAccountsPasskeySignInFinalize](docs/accounts/README.md#identitytoolkitaccountspasskeysigninfinalize) - Verifies the passkey assertion and signs the user in.
* [identitytoolkitAccountsPasskeySignInStart](docs/accounts/README.md#identitytoolkitaccountspasskeysigninstart) - Creates and returns the passkey challenge
* [identitytoolkitAccountsRevokeToken](docs/accounts/README.md#identitytoolkitaccountsrevoketoken) - Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

### [defaultSupportedIdps](docs/defaultsupportedidps/README.md)

* [identitytoolkitDefaultSupportedIdpsList](docs/defaultsupportedidps/README.md#identitytoolkitdefaultsupportedidpslist) - List all default supported Idps.

### [projects](docs/projects/README.md)

* [identitytoolkitProjectsIdentityPlatformInitializeAuth](docs/projects/README.md#identitytoolkitprojectsidentityplatforminitializeauth) - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* [identitytoolkitProjectsTenantsCreate](docs/projects/README.md#identitytoolkitprojectstenantscreate) - Create a tenant. Requires write permission on the Agent project.
* [identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate](docs/projects/README.md#identitytoolkitprojectstenantsdefaultsupportedidpconfigscreate) - Create a default supported Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList](docs/projects/README.md#identitytoolkitprojectstenantsdefaultsupportedidpconfigslist) - List all default supported Idp configurations for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsGetIamPolicy](docs/projects/README.md#identitytoolkitprojectstenantsgetiampolicy) - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* [identitytoolkitProjectsTenantsInboundSamlConfigsCreate](docs/projects/README.md#identitytoolkitprojectstenantsinboundsamlconfigscreate) - Create an inbound SAML configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsInboundSamlConfigsList](docs/projects/README.md#identitytoolkitprojectstenantsinboundsamlconfigslist) - List all inbound SAML configurations for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsList](docs/projects/README.md#identitytoolkitprojectstenantslist) - List tenants under the given agent project. Requires read permission on the Agent project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsCreate](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigscreate) - Create an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsDelete](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigsdelete) - Delete an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsGet](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigsget) - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsList](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigslist) - List all Oidc Idp configurations for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsPatch](docs/projects/README.md#identitytoolkitprojectstenantsoauthidpconfigspatch) - Update an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsSetIamPolicy](docs/projects/README.md#identitytoolkitprojectstenantssetiampolicy) - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* [identitytoolkitProjectsTenantsTestIamPermissions](docs/projects/README.md#identitytoolkitprojectstenantstestiampermissions) - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

### [v2](docs/v2/README.md)

* [identitytoolkitGetRecaptchaConfig](docs/v2/README.md#identitytoolkitgetrecaptchaconfig) - Gets parameters needed for reCAPTCHA analysis.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
