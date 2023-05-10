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
    $request->accountId = 'odit';
    $request->alt = AltEnum::JSON;
    $request->endDateTime = 'nemo';
    $request->fields = 'quasi';
    $request->key = 'iure';
    $request->maxResults = 984043;
    $request->oauthToken = 'debitis';
    $request->pageToken = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->startDateTime = 'deleniti';
    $request->userIp = 'facilis';

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
