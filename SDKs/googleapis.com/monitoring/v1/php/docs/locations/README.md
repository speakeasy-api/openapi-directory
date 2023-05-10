# locations

### Available Operations

* [monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject](#monitoringlocationsglobalmetricsscopeslistmetricsscopesbymonitoredproject) - Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
* [monitoringLocationsGlobalMetricsScopesProjectsCreate](#monitoringlocationsglobalmetricsscopesprojectscreate) - Adds a MonitoredProject with the given project ID to the specified Metrics Scope.

## monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject

Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->monitoredResourceContainer = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity();
    $requestSecurity->option1 = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject($request, $requestSecurity);

    if ($response->listMetricsScopesByMonitoredProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringLocationsGlobalMetricsScopesProjectsCreate

Adds a MonitoredProject with the given project ID to the specified Metrics Scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->monitoredProjectInput = new MonitoredProjectInput();
    $request->monitoredProjectInput->name = 'Miriam Huel';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity();
    $requestSecurity->option1 = new MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->monitoringLocationsGlobalMetricsScopesProjectsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
