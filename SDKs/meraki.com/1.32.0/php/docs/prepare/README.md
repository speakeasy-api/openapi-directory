# prepare

### Available Operations

* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session

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

    $response = $sdk->prepare->createOrganizationInventoryOnboardingCloudMonitoringPrepare($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
