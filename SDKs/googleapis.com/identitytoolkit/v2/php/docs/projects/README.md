# projects

### Available Operations

* [identitytoolkitProjectsIdentityPlatformInitializeAuth](#identitytoolkitprojectsidentityplatforminitializeauth) - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* [identitytoolkitProjectsTenantsCreate](#identitytoolkitprojectstenantscreate) - Create a tenant. Requires write permission on the Agent project.
* [identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate](#identitytoolkitprojectstenantsdefaultsupportedidpconfigscreate) - Create a default supported Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList](#identitytoolkitprojectstenantsdefaultsupportedidpconfigslist) - List all default supported Idp configurations for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsGetIamPolicy](#identitytoolkitprojectstenantsgetiampolicy) - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* [identitytoolkitProjectsTenantsInboundSamlConfigsCreate](#identitytoolkitprojectstenantsinboundsamlconfigscreate) - Create an inbound SAML configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsInboundSamlConfigsList](#identitytoolkitprojectstenantsinboundsamlconfigslist) - List all inbound SAML configurations for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsList](#identitytoolkitprojectstenantslist) - List tenants under the given agent project. Requires read permission on the Agent project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsCreate](#identitytoolkitprojectstenantsoauthidpconfigscreate) - Create an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsDelete](#identitytoolkitprojectstenantsoauthidpconfigsdelete) - Delete an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsGet](#identitytoolkitprojectstenantsoauthidpconfigsget) - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsList](#identitytoolkitprojectstenantsoauthidpconfigslist) - List all Oidc Idp configurations for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsOauthIdpConfigsPatch](#identitytoolkitprojectstenantsoauthidpconfigspatch) - Update an Oidc Idp configuration for an Identity Toolkit project.
* [identitytoolkitProjectsTenantsSetIamPolicy](#identitytoolkitprojectstenantssetiampolicy) - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* [identitytoolkitProjectsTenantsTestIamPermissions](#identitytoolkitprojectstenantstestiampermissions) - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

## identitytoolkitProjectsIdentityPlatformInitializeAuth

Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'tempora' => 'facilis',
        'tempore' => 'labore',
        'delectus' => 'eum',
    ];
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsIdentityPlatformInitializeAuth($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsCreate

Create a tenant. Requires write permission on the Agent project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2TenantInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2ClientPermissions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2Inheritance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2ProviderConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2RequestLogging;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigEmailPasswordEnforcementStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2AllowByDefault;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2AllowlistOnly;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput = new GoogleCloudIdentitytoolkitAdminV2TenantInput();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->allowPasswordSignup = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->autodeleteAnonymousUsers = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->client = new GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->client->permissions = new GoogleCloudIdentitytoolkitAdminV2ClientPermissions();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->client->permissions->disabledUserDeletion = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->client->permissions->disabledUserSignup = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->disableAuth = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->displayName = 'dolorum';
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->emailPrivacyConfig = new GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->emailPrivacyConfig->enableImprovedEmailPrivacy = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->enableAnonymousUser = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->enableEmailLinkSignin = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->inheritance = new GoogleCloudIdentitytoolkitAdminV2Inheritance();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->inheritance->emailSendingConfig = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->mfaConfig = new GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->mfaConfig->enabledProviders = [
        GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum::PROVIDER_UNSPECIFIED,
        GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum::PHONE_SMS,
    ];
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->mfaConfig->providerConfigs = [
        new GoogleCloudIdentitytoolkitAdminV2ProviderConfig(),
        new GoogleCloudIdentitytoolkitAdminV2ProviderConfig(),
        new GoogleCloudIdentitytoolkitAdminV2ProviderConfig(),
        new GoogleCloudIdentitytoolkitAdminV2ProviderConfig(),
    ];
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->mfaConfig->state = GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum::ENABLED;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->monitoring = new GoogleCloudIdentitytoolkitAdminV2MonitoringConfig();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->monitoring->requestLogging = new GoogleCloudIdentitytoolkitAdminV2RequestLogging();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->monitoring->requestLogging->enabled = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->recaptchaConfig = new GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigInput();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->recaptchaConfig->emailPasswordEnforcementState = GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigEmailPasswordEnforcementStateEnum::RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->recaptchaConfig->managedRules = [
        new GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule(),
        new GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule(),
    ];
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->recaptchaConfig->useAccountDefender = false;
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->smsRegionConfig = new GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->smsRegionConfig->allowByDefault = new GoogleCloudIdentitytoolkitAdminV2AllowByDefault();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->smsRegionConfig->allowByDefault->disallowedRegions = [
        'facere',
        'ea',
        'aliquid',
        'laborum',
    ];
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->smsRegionConfig->allowlistOnly = new GoogleCloudIdentitytoolkitAdminV2AllowlistOnly();
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->smsRegionConfig->allowlistOnly->allowedRegions = [
        'non',
        'occaecati',
        'enim',
        'accusamus',
    ];
    $request->googleCloudIdentitytoolkitAdminV2TenantInput->testPhoneNumbers = [
        'quidem' => 'provident',
        'nam' => 'id',
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'natus';
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new IdentitytoolkitProjectsTenantsCreateSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsCreate($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2Tenant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate

Create a default supported Idp configuration for an Identity Toolkit project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig = new GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig();
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->appleSignInConfig = new GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig();
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->appleSignInConfig->bundleIds = [
        'labore',
        'suscipit',
    ];
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->appleSignInConfig->codeFlowConfig = new GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig();
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->appleSignInConfig->codeFlowConfig->keyId = 'natus';
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->appleSignInConfig->codeFlowConfig->privateKey = 'nobis';
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->appleSignInConfig->codeFlowConfig->teamId = 'eum';
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->clientId = 'vero';
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->clientSecret = 'aspernatur';
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->enabled = false;
    $request->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig->name = 'Danielle Bosco';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'accusantium';
    $request->idpId = 'mollitia';
    $request->key = 'reiciendis';
    $request->oauthToken = 'mollitia';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList

List all default supported Idp configurations for an Identity Toolkit project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->key = 'debitis';
    $request->oauthToken = 'eius';
    $request->pageSize = 806194;
    $request->pageToken = 'deleniti';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsGetIamPolicy

Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1GetIamPolicyRequest = new GoogleIamV1GetIamPolicyRequest();
    $request->googleIamV1GetIamPolicyRequest->options = new GoogleIamV1GetPolicyOptions();
    $request->googleIamV1GetIamPolicyRequest->options->requestedPolicyVersion = 352312;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->resource = 'accusantium';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new IdentitytoolkitProjectsTenantsGetIamPolicySecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsGetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsInboundSamlConfigsCreate

Create an inbound SAML configuration for an Identity Toolkit project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2IdpConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2IdpCertificate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2SpConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput = new GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput();
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->displayName = 'magni';
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->enabled = false;
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->idpConfig = new GoogleCloudIdentitytoolkitAdminV2IdpConfig();
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->idpConfig->idpCertificates = [
        new GoogleCloudIdentitytoolkitAdminV2IdpCertificate(),
    ];
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->idpConfig->idpEntityId = 'quo';
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->idpConfig->signRequest = false;
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->idpConfig->ssoUrl = 'illum';
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->name = 'Simon Jenkins';
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->spConfig = new GoogleCloudIdentitytoolkitAdminV2SpConfigInput();
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->spConfig->callbackUri = 'ea';
    $request->googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput->spConfig->spEntityId = 'accusantium';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'ipsam';
    $request->inboundSamlConfigId = 'voluptate';
    $request->key = 'autem';
    $request->oauthToken = 'nam';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsInboundSamlConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2InboundSamlConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsInboundSamlConfigsList

List all inbound SAML configurations for an Identity Toolkit project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'cumque';
    $request->key = 'corporis';
    $request->oauthToken = 'hic';
    $request->pageSize = 729991;
    $request->pageToken = 'nobis';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsInboundSamlConfigsList($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsList

List tenants under the given agent project. Requires read permission on the Agent project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eos';
    $request->fields = 'perferendis';
    $request->key = 'dolores';
    $request->oauthToken = 'minus';
    $request->pageSize = 463451;
    $request->pageToken = 'dolor';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new IdentitytoolkitProjectsTenantsListSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsList($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2ListTenantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsCreate

Create an Oidc Idp configuration for an Identity Toolkit project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = new GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig();
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->clientId = 'facilis';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->clientSecret = 'perspiciatis';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->displayName = 'voluptatem';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->enabled = false;
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->issuer = 'porro';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->name = 'Ms. Vickie Mraz';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->responseType = new GoogleCloudIdentitytoolkitAdminV2OAuthResponseType();
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->responseType->code = false;
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->responseType->idToken = false;
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->responseType->token = false;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'modi';
    $request->key = 'iste';
    $request->oauthIdpConfigId = 'dolorum';
    $request->oauthToken = 'deleniti';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsOauthIdpConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsDelete

Delete an Oidc Idp configuration for an Identity Toolkit project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'dolorem';
    $request->key = 'dolorem';
    $request->name = 'Norma Erdman';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsOauthIdpConfigsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsGet

Retrieve an Oidc Idp configuration for an Identity Toolkit project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'ipsa';
    $request->key = 'ipsa';
    $request->name = 'Viola Hahn';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsOauthIdpConfigsGet($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsList

List all Oidc Idp configurations for an Identity Toolkit project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'soluta';
    $request->key = 'dolorum';
    $request->oauthToken = 'iusto';
    $request->pageSize = 453697;
    $request->pageToken = 'dolorum';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsOauthIdpConfigsList($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsOauthIdpConfigsPatch

Update an Oidc Idp configuration for an Identity Toolkit project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = new GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig();
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->clientId = 'nihil';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->clientSecret = 'ipsum';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->displayName = 'voluptate';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->enabled = false;
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->issuer = 'id';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->name = 'Mrs. Ray Collins';
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->responseType = new GoogleCloudIdentitytoolkitAdminV2OAuthResponseType();
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->responseType->code = false;
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->responseType->idToken = false;
    $request->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig->responseType->token = false;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'suscipit';
    $request->key = 'deserunt';
    $request->name = 'Derek Sipes';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->updateMask = 'quaerat';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsOauthIdpConfigsPatch($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2OAuthIdpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsSetIamPolicy

Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
        new GoogleIamV1AuditConfig(),
        new GoogleIamV1AuditConfig(),
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'dolorum';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 952792;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'esse';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'quisquam';
    $request->key = 'tenetur';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->resource = 'accusamus';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new IdentitytoolkitProjectsTenantsSetIamPolicySecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsSetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitProjectsTenantsTestIamPermissions

Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitProjectsTenantsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest();
    $request->googleIamV1TestIamPermissionsRequest->permissions = [
        'totam',
        'nihil',
        'sit',
        'expedita',
    ];
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'libero';
    $request->key = 'voluptas';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->resource = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->identitytoolkitProjectsTenantsTestIamPermissions($request, $requestSecurity);

    if ($response->googleIamV1TestIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
