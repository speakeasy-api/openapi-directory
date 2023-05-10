<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->monitoredResourceContainer = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

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
<!-- End SDK Example Usage -->