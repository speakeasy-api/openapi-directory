# inventory

### Available Operations

* [claimIntoOrganizationInventory](#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [getOrganizationInventoryDevice](#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [getOrganizationInventoryDevices](#getorganizationinventorydevices) - Return the device inventory for an organization
* [getOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [releaseFromOrganizationInventory](#releasefromorganizationinventory) - Release a list of claimed devices from an organization.

## claimIntoOrganizationInventory

Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. Use /organizations/{organizationId}/inventory/release to release devices from an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationInventoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationInventoryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationInventoryRequestBodyLicenses;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimIntoOrganizationInventoryRequest();
    $request->requestBody = new ClaimIntoOrganizationInventoryRequestBody();
    $request->requestBody->licenses = [
        new ClaimIntoOrganizationInventoryRequestBodyLicenses(),
        new ClaimIntoOrganizationInventoryRequestBodyLicenses(),
        new ClaimIntoOrganizationInventoryRequestBodyLicenses(),
        new ClaimIntoOrganizationInventoryRequestBodyLicenses(),
    ];
    $request->requestBody->orders = [
        'consectetur',
    ];
    $request->requestBody->serials = [
        'quasi',
        'eos',
        'dolorum',
    ];
    $request->organizationId = 'vel';

    $response = $sdk->inventory->claimIntoOrganizationInventory($request);

    if ($response->claimIntoOrganizationInventory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->requestBody->logEvent = 'rerum';
    $request->requestBody->request = 'cupiditate';
    $request->requestBody->targetOS = 'excepturi';
    $request->requestBody->timestamp = 146856;
    $request->organizationId = 'eius';

    $response = $sdk->inventory->createOrganizationInventoryOnboardingCloudMonitoringExportEvent($request);

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
    ];
    $request->organizationId = 'dolore';

    $response = $sdk->inventory->createOrganizationInventoryOnboardingCloudMonitoringImport($request);

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
        new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices(),
    ];
    $request->organizationId = 'natus';

    $response = $sdk->inventory->createOrganizationInventoryOnboardingCloudMonitoringPrepare($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryDevice

Return a single device from the inventory of an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryDeviceRequest();
    $request->organizationId = 'numquam';
    $request->serial = 'tempora';

    $response = $sdk->inventory->getOrganizationInventoryDevice($request);

    if ($response->getOrganizationInventoryDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryDevices

Return the device inventory for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesProductTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesTagsFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesUsedStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryDevicesRequest();
    $request->endingBefore = 'corrupti';
    $request->macs = [
        'asperiores',
        'veniam',
    ];
    $request->models = [
        'praesentium',
        'ut',
        'amet',
        'blanditiis',
    ];
    $request->networkIds = [
        'ex',
    ];
    $request->orderNumbers = [
        'rem',
        'laboriosam',
        'harum',
    ];
    $request->organizationId = 'consectetur';
    $request->perPage = 787742;
    $request->productTypes = [
        GetOrganizationInventoryDevicesProductTypesEnum::WIRELESS,
        GetOrganizationInventoryDevicesProductTypesEnum::CELLULAR_GATEWAY,
        GetOrganizationInventoryDevicesProductTypesEnum::CELLULAR_GATEWAY,
        GetOrganizationInventoryDevicesProductTypesEnum::APPLIANCE,
    ];
    $request->search = 'minima';
    $request->serials = [
        'sit',
        'incidunt',
        'magnam',
    ];
    $request->startingAfter = 'molestias';
    $request->tags = [
        'error',
        'repellendus',
        'delectus',
        'dicta',
    ];
    $request->tagsFilterType = GetOrganizationInventoryDevicesTagsFilterTypeEnum::WITH_ALL_TAGS;
    $request->usedState = GetOrganizationInventoryDevicesUsedStateEnum::USED;

    $response = $sdk->inventory->getOrganizationInventoryDevices($request);

    if ($response->getOrganizationInventoryDevices200ApplicationJSONObjects !== null) {
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
        'officiis',
        'itaque',
    ];
    $request->organizationId = 'nulla';

    $response = $sdk->inventory->getOrganizationInventoryOnboardingCloudMonitoringImports($request);

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
    $request->deviceType = GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum::WIRELESS_CONTROLLER;
    $request->endingBefore = 'recusandae';
    $request->organizationId = 'in';
    $request->perPage = 533988;
    $request->startingAfter = 'tempore';

    $response = $sdk->inventory->getOrganizationInventoryOnboardingCloudMonitoringNetworks($request);

    if ($response->getOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releaseFromOrganizationInventory

Release a list of claimed devices from an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReleaseFromOrganizationInventoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleaseFromOrganizationInventoryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleaseFromOrganizationInventoryRequest();
    $request->requestBody = new ReleaseFromOrganizationInventoryRequestBody();
    $request->requestBody->serials = [
        'commodi',
        'sit',
        'ea',
        'molestias',
    ];
    $request->organizationId = 'quia';

    $response = $sdk->inventory->releaseFromOrganizationInventory($request);

    if ($response->releaseFromOrganizationInventory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
