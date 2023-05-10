# uptimeCheckIps

### Available Operations

* [monitoringUptimeCheckIpsList](#monitoringuptimecheckipslist) - Returns the list of IP addresses that checkers run from

## monitoringUptimeCheckIpsList

Returns the list of IP addresses that checkers run from

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringUptimeCheckIpsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringUptimeCheckIpsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringUptimeCheckIpsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringUptimeCheckIpsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringUptimeCheckIpsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringUptimeCheckIpsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'unde';
    $request->fields = 'architecto';
    $request->key = 'suscipit';
    $request->oauthToken = 'sapiente';
    $request->pageSize = 895386;
    $request->pageToken = 'illo';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new MonitoringUptimeCheckIpsListSecurity();
    $requestSecurity->option1 = new MonitoringUptimeCheckIpsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->uptimeCheckIps->monitoringUptimeCheckIpsList($request, $requestSecurity);

    if ($response->listUptimeCheckIpsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
