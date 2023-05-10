# v1

### Available Operations

* [iapGetIamPolicy](#iapgetiampolicy) - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapGetIapSettings](#iapgetiapsettings) - Gets the IAP settings on a particular IAP protected resource.
* [iapSetIamPolicy](#iapsetiampolicy) - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapTestIamPermissions](#iaptestiampermissions) - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapUpdateIapSettings](#iapupdateiapsettings) - Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.

## iapGetIamPolicy

Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 916723;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->key = 'itaque';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->resource = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new IapGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->iapGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapGetIapSettings

Gets the IAP settings on a particular IAP protected resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapGetIapSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapGetIapSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapGetIapSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->key = 'modi';
    $request->name = 'Beth McGlynn Sr.';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new IapGetIapSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->iapGetIapSettings($request, $requestSecurity);

    if ($response->iapSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapSetIamPolicy

Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'tempora';
    $request->setIamPolicyRequest->policy->version = 703737;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'eum';
    $request->key = 'non';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->resource = 'aliquid';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new IapSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->iapSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapTestIamPermissions

Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'dolor',
        'debitis',
        'a',
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'illum';
    $request->key = 'maiores';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->resource = 'magnam';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new IapTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->iapTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iapUpdateIapSettings

Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IapUpdateIapSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\IapSettings;
use \OpenAPI\OpenAPI\Models\Shared\AccessSettings;
use \OpenAPI\OpenAPI\Models\Shared\AllowedDomainsSettings;
use \OpenAPI\OpenAPI\Models\Shared\CorsSettings;
use \OpenAPI\OpenAPI\Models\Shared\GcipSettings;
use \OpenAPI\OpenAPI\Models\Shared\OAuthSettings;
use \OpenAPI\OpenAPI\Models\Shared\PolicyDelegationSettings;
use \OpenAPI\OpenAPI\Models\Shared\PolicyName;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
use \OpenAPI\OpenAPI\Models\Shared\ReauthSettings;
use \OpenAPI\OpenAPI\Models\Shared\ReauthSettingsMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReauthSettingsPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationSettings;
use \OpenAPI\OpenAPI\Models\Shared\AccessDeniedPageSettings;
use \OpenAPI\OpenAPI\Models\Shared\AttributePropagationSettings;
use \OpenAPI\OpenAPI\Models\Shared\AttributePropagationSettingsOutputCredentialsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CsmSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapUpdateIapSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapUpdateIapSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->iapSettings = new IapSettings();
    $request->iapSettings->accessSettings = new AccessSettings();
    $request->iapSettings->accessSettings->allowedDomainsSettings = new AllowedDomainsSettings();
    $request->iapSettings->accessSettings->allowedDomainsSettings->domains = [
        'laborum',
        'accusamus',
    ];
    $request->iapSettings->accessSettings->allowedDomainsSettings->enable = false;
    $request->iapSettings->accessSettings->corsSettings = new CorsSettings();
    $request->iapSettings->accessSettings->corsSettings->allowHttpOptions = false;
    $request->iapSettings->accessSettings->gcipSettings = new GcipSettings();
    $request->iapSettings->accessSettings->gcipSettings->loginPageUri = 'non';
    $request->iapSettings->accessSettings->gcipSettings->tenantIds = [
        'enim',
        'accusamus',
        'delectus',
    ];
    $request->iapSettings->accessSettings->oauthSettings = new OAuthSettings();
    $request->iapSettings->accessSettings->oauthSettings->loginHint = 'quidem';
    $request->iapSettings->accessSettings->policyDelegationSettings = new PolicyDelegationSettings();
    $request->iapSettings->accessSettings->policyDelegationSettings->iamPermission = 'provident';
    $request->iapSettings->accessSettings->policyDelegationSettings->iamServiceName = 'nam';
    $request->iapSettings->accessSettings->policyDelegationSettings->policyName = new PolicyName();
    $request->iapSettings->accessSettings->policyDelegationSettings->policyName->id = 'a88f3a66-9970-474b-a446-9b6e21419598';
    $request->iapSettings->accessSettings->policyDelegationSettings->policyName->region = 'sint';
    $request->iapSettings->accessSettings->policyDelegationSettings->policyName->type = 'accusantium';
    $request->iapSettings->accessSettings->policyDelegationSettings->resource = new Resource();
    $request->iapSettings->accessSettings->policyDelegationSettings->resource->labels = [
        'reiciendis' => 'mollitia',
        'ad' => 'eum',
        'dolor' => 'necessitatibus',
    ];
    $request->iapSettings->accessSettings->policyDelegationSettings->resource->name = 'Vivian Boyle';
    $request->iapSettings->accessSettings->policyDelegationSettings->resource->service = 'debitis';
    $request->iapSettings->accessSettings->policyDelegationSettings->resource->type = 'eius';
    $request->iapSettings->accessSettings->reauthSettings = new ReauthSettings();
    $request->iapSettings->accessSettings->reauthSettings->maxAge = 'maxime';
    $request->iapSettings->accessSettings->reauthSettings->method = ReauthSettingsMethodEnum::PASSWORD;
    $request->iapSettings->accessSettings->reauthSettings->policyType = ReauthSettingsPolicyTypeEnum::DEFAULT;
    $request->iapSettings->applicationSettings = new ApplicationSettings();
    $request->iapSettings->applicationSettings->accessDeniedPageSettings = new AccessDeniedPageSettings();
    $request->iapSettings->applicationSettings->accessDeniedPageSettings->accessDeniedPageUri = 'in';
    $request->iapSettings->applicationSettings->accessDeniedPageSettings->generateTroubleshootingUri = false;
    $request->iapSettings->applicationSettings->accessDeniedPageSettings->remediationTokenGenerationEnabled = false;
    $request->iapSettings->applicationSettings->attributePropagationSettings = new AttributePropagationSettings();
    $request->iapSettings->applicationSettings->attributePropagationSettings->enable = false;
    $request->iapSettings->applicationSettings->attributePropagationSettings->expression = 'architecto';
    $request->iapSettings->applicationSettings->attributePropagationSettings->outputCredentials = [
        AttributePropagationSettingsOutputCredentialsEnum::RCTOKEN,
    ];
    $request->iapSettings->applicationSettings->cookieDomain = 'ullam';
    $request->iapSettings->applicationSettings->csmSettings = new CsmSettings();
    $request->iapSettings->applicationSettings->csmSettings->rctokenAud = 'expedita';
    $request->iapSettings->name = 'Kristie Spencer';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'praesentium';
    $request->key = 'natus';
    $request->name = 'Joan Satterfield';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->updateMask = 'excepturi';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new IapUpdateIapSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->iapUpdateIapSettings($request, $requestSecurity);

    if ($response->iapSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
