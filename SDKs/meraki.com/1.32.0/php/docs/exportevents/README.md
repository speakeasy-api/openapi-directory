# exportEvents

### Available Operations

* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch

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
    $request->requestBody->logEvent = 'fuga';
    $request->requestBody->request = 'culpa';
    $request->requestBody->targetOS = 'quo';
    $request->requestBody->timestamp = 125422;
    $request->organizationId = 'necessitatibus';

    $response = $sdk->exportEvents->createOrganizationInventoryOnboardingCloudMonitoringExportEvent($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringExportEvent202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
