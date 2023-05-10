# intrusion

### Available Operations

* [getNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [updateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

## getNetworkApplianceSecurityIntrusion

Returns all supported intrusion settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityIntrusionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityIntrusionRequest();
    $request->networkId = 'deserunt';

    $response = $sdk->intrusion->getNetworkApplianceSecurityIntrusion($request);

    if ($response->getNetworkApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceSecurityIntrusion

Returns all supported intrusion settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityIntrusionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceSecurityIntrusionRequest();
    $request->organizationId = 'sint';

    $response = $sdk->intrusion->getOrganizationApplianceSecurityIntrusion($request);

    if ($response->getOrganizationApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSecurityIntrusion

Set the supported intrusion settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSecurityIntrusionRequest();
    $request->requestBody = new UpdateNetworkApplianceSecurityIntrusionRequestBody();
    $request->requestBody->idsRulesets = UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum::CONNECTIVITY;
    $request->requestBody->mode = UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum::DISABLED;
    $request->requestBody->protectedNetworks = new UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks();
    $request->requestBody->protectedNetworks->excludedCidr = [
        'rem',
        'occaecati',
    ];
    $request->requestBody->protectedNetworks->includedCidr = [
        'voluptate',
        'nam',
        'quam',
        'blanditiis',
    ];
    $request->requestBody->protectedNetworks->useDefault = false;
    $request->networkId = 'laboriosam';

    $response = $sdk->intrusion->updateNetworkApplianceSecurityIntrusion($request);

    if ($response->updateNetworkApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationApplianceSecurityIntrusion

Sets supported intrusion settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceSecurityIntrusionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceSecurityIntrusionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationApplianceSecurityIntrusionRequest();
    $request->requestBody = new UpdateOrganizationApplianceSecurityIntrusionRequestBody();
    $request->requestBody->allowedRules = [
        new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules(),
        new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules(),
    ];
    $request->organizationId = 'adipisci';

    $response = $sdk->intrusion->updateOrganizationApplianceSecurityIntrusion($request);

    if ($response->updateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
