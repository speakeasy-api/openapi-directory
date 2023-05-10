# cloudMonitoring

### Available Operations

* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [getOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device

## createOrganizationInventoryOnboardingCloudMonitoringExportEvent

Imports event logs related to the onboarding app into elastisearch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest();
    $request->requestBody = new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody();
    $request->requestBody->logEvent = 'quae';
    $request->requestBody->request = 'officiis';
    $request->requestBody->targetOS = 'architecto';
    $request->requestBody->timestamp = 100251;
    $request->organizationId = 'enim';

    $response = $sdk->cloudMonitoring->createOrganizationInventoryOnboardingCloudMonitoringExportEvent($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringExportEvent202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationInventoryOnboardingCloudMonitoringImport

Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest();
    $request->requestBody = new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody();
    $request->requestBody->devices = [
        new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices(),
        new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices(),
        new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices(),
        new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices(),
    ];
    $request->organizationId = 'rem';

    $response = $sdk->cloudMonitoring->createOrganizationInventoryOnboardingCloudMonitoringImport($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationInventoryOnboardingCloudMonitoringPrepare

Initiates or updates an import session. An import ID will be generated and used when you are ready to commit the import.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest();
    $request->requestBody = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody();
    $request->requestBody->devices = [
        new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices(),
    ];
    $request->organizationId = 'facilis';

    $response = $sdk->cloudMonitoring->createOrganizationInventoryOnboardingCloudMonitoringPrepare($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryOnboardingCloudMonitoringImports

Check the status of a committed Import operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest();
    $request->importIds = [
        'a',
        'iste',
        'dicta',
        'quos',
    ];
    $request->organizationId = 'ullam';

    $response = $sdk->cloudMonitoring->getOrganizationInventoryOnboardingCloudMonitoringImports($request);

    if ($response->getOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryOnboardingCloudMonitoringNetworks

Returns list of networks eligible for adding cloud monitored device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest();
    $request->deviceType = GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum::SWITCH;
    $request->endingBefore = 'modi';
    $request->organizationId = 'itaque';
    $request->perPage = 807419;
    $request->startingAfter = 'modi';

    $response = $sdk->cloudMonitoring->getOrganizationInventoryOnboardingCloudMonitoringNetworks($request);

    if ($response->getOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
