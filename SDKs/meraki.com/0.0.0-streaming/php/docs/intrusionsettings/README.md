# intrusionSettings

### Available Operations

* [getNetworkSecurityIntrusionSettings](#getnetworksecurityintrusionsettings) - Returns all supported intrusion settings for an MX network
* [getOrganizationSecurityIntrusionSettings](#getorganizationsecurityintrusionsettings) - Returns all supported intrusion settings for an organization
* [updateNetworkSecurityIntrusionSettings](#updatenetworksecurityintrusionsettings) - Set the supported intrusion settings for an MX network
* [updateOrganizationSecurityIntrusionSettings](#updateorganizationsecurityintrusionsettings) - Sets supported intrusion settings for an organization

## getNetworkSecurityIntrusionSettings

Returns all supported intrusion settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSecurityIntrusionSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSecurityIntrusionSettingsRequest();
    $request->networkId = 'tenetur';

    $response = $sdk->intrusionSettings->getNetworkSecurityIntrusionSettings($request);

    if ($response->getNetworkSecurityIntrusionSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSecurityIntrusionSettings

Returns all supported intrusion settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSecurityIntrusionSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSecurityIntrusionSettingsRequest();
    $request->organizationId = 'amet';

    $response = $sdk->intrusionSettings->getOrganizationSecurityIntrusionSettings($request);

    if ($response->getOrganizationSecurityIntrusionSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSecurityIntrusionSettings

Set the supported intrusion settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSecurityIntrusionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSecurityIntrusionSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSecurityIntrusionSettingsRequestBodyIdsRulesetsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSecurityIntrusionSettingsRequestBodyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSecurityIntrusionSettingsRequestBodyProtectedNetworks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSecurityIntrusionSettingsRequest();
    $request->requestBody = new UpdateNetworkSecurityIntrusionSettingsRequestBody();
    $request->requestBody->idsRulesets = UpdateNetworkSecurityIntrusionSettingsRequestBodyIdsRulesetsEnum::SECURITY;
    $request->requestBody->mode = UpdateNetworkSecurityIntrusionSettingsRequestBodyModeEnum::PREVENTION;
    $request->requestBody->protectedNetworks = new UpdateNetworkSecurityIntrusionSettingsRequestBodyProtectedNetworks();
    $request->requestBody->protectedNetworks->excludedCidr = [
        'enim',
        'dolorem',
    ];
    $request->requestBody->protectedNetworks->includedCidr = [
        'totam',
        'nihil',
        'sit',
        'expedita',
    ];
    $request->requestBody->protectedNetworks->useDefault = false;
    $request->networkId = 'neque';

    $response = $sdk->intrusionSettings->updateNetworkSecurityIntrusionSettings($request);

    if ($response->updateNetworkSecurityIntrusionSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationSecurityIntrusionSettings

Sets supported intrusion settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSecurityIntrusionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSecurityIntrusionSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationSecurityIntrusionSettingsRequest();
    $request->requestBody = new UpdateOrganizationSecurityIntrusionSettingsRequestBody();
    $request->requestBody->whitelistedRules = [
        new UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules(),
    ];
    $request->organizationId = 'vel';

    $response = $sdk->intrusionSettings->updateOrganizationSecurityIntrusionSettings($request);

    if ($response->updateOrganizationSecurityIntrusionSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
