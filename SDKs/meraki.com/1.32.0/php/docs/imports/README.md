# imports

### Available Operations

* [createOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [getOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation

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
    ];
    $request->organizationId = 'iure';

    $response = $sdk->imports->createOrganizationInventoryOnboardingCloudMonitoringImport($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSONObjects !== null) {
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
        'facere',
        'ratione',
        'quis',
    ];
    $request->organizationId = 'modi';

    $response = $sdk->imports->getOrganizationInventoryOnboardingCloudMonitoringImports($request);

    if ($response->getOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
