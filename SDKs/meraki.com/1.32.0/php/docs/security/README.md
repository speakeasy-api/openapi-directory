# security

### Available Operations

* [getNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getNetworkApplianceSecurityMalware](#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [getOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [getOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [updateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateNetworkApplianceSecurityMalware](#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [updateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceClientSecurityEventsRequest();
    $request->clientId = 'unde';
    $request->endingBefore = 'esse';
    $request->networkId = 'praesentium';
    $request->perPage = 46924;
    $request->sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum::DESCENDING;
    $request->startingAfter = 'dicta';
    $request->t0 = 'doloremque';
    $request->t1 = 'minus';
    $request->timespan = 2602.42;

    $response = $sdk->security->getNetworkApplianceClientSecurityEvents($request);

    if ($response->getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSecurityEvents

List the security events for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityEventsRequest();
    $request->endingBefore = 'odio';
    $request->networkId = 'rerum';
    $request->perPage = 589969;
    $request->sortOrder = GetNetworkApplianceSecurityEventsSortOrderEnum::ASCENDING;
    $request->startingAfter = 'perferendis';
    $request->t0 = 'aliquam';
    $request->t1 = 'accusantium';
    $request->timespan = 8197.77;

    $response = $sdk->security->getNetworkApplianceSecurityEvents($request);

    if ($response->getNetworkApplianceSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'vel';

    $response = $sdk->security->getNetworkApplianceSecurityIntrusion($request);

    if ($response->getNetworkApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSecurityMalware

Returns all supported malware settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityMalwareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityMalwareRequest();
    $request->networkId = 'minus';

    $response = $sdk->security->getNetworkApplianceSecurityMalware($request);

    if ($response->getNetworkApplianceSecurityMalware200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceSecurityEvents

List the security events for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceSecurityEventsRequest();
    $request->endingBefore = 'blanditiis';
    $request->organizationId = 'soluta';
    $request->perPage = 158912;
    $request->sortOrder = GetOrganizationApplianceSecurityEventsSortOrderEnum::DESCENDING;
    $request->startingAfter = 'ipsam';
    $request->t0 = 'a';
    $request->t1 = 'alias';
    $request->timespan = 210.57;

    $response = $sdk->security->getOrganizationApplianceSecurityEvents($request);

    if ($response->getOrganizationApplianceSecurityEvents200ApplicationJSONObjects !== null) {
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
    $request->organizationId = 'aspernatur';

    $response = $sdk->security->getOrganizationApplianceSecurityIntrusion($request);

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
    $request->requestBody->idsRulesets = UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum::BALANCED;
    $request->requestBody->mode = UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum::DETECTION;
    $request->requestBody->protectedNetworks = new UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks();
    $request->requestBody->protectedNetworks->excludedCidr = [
        'accusamus',
        'ut',
    ];
    $request->requestBody->protectedNetworks->includedCidr = [
        'dolore',
    ];
    $request->requestBody->protectedNetworks->useDefault = false;
    $request->networkId = 'molestias';

    $response = $sdk->security->updateNetworkApplianceSecurityIntrusion($request);

    if ($response->updateNetworkApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSecurityMalware

Set the supported malware settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSecurityMalwareRequest();
    $request->requestBody = new UpdateNetworkApplianceSecurityMalwareRequestBody();
    $request->requestBody->allowedFiles = [
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles(),
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles(),
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles(),
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles(),
    ];
    $request->requestBody->allowedUrls = [
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls(),
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls(),
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls(),
    ];
    $request->requestBody->mode = UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum::DISABLED;
    $request->networkId = 'alias';

    $response = $sdk->security->updateNetworkApplianceSecurityMalware($request);

    if ($response->updateNetworkApplianceSecurityMalware200ApplicationJSONObject !== null) {
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
    ];
    $request->organizationId = 'iste';

    $response = $sdk->security->updateOrganizationApplianceSecurityIntrusion($request);

    if ($response->updateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
