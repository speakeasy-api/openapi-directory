# performanceReport

### Available Operations

* [adexchangebuyerPerformanceReportList](#adexchangebuyerperformancereportlist) - Retrieves the authenticated user's list of performance metrics.

## adexchangebuyerPerformanceReportList

Retrieves the authenticated user's list of performance metrics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPerformanceReportListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPerformanceReportListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPerformanceReportListRequest();
    $request->accountId = 'qui';
    $request->alt = AltEnum::JSON;
    $request->endDateTime = 'ipsum';
    $request->fields = 'hic';
    $request->key = 'excepturi';
    $request->maxResults = 739551;
    $request->oauthToken = 'voluptate';
    $request->pageToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->startDateTime = 'amet';
    $request->userIp = 'dolorum';

    $requestSecurity = new AdexchangebuyerPerformanceReportListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->performanceReport->adexchangebuyerPerformanceReportList($request, $requestSecurity);

    if ($response->performanceReportList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
