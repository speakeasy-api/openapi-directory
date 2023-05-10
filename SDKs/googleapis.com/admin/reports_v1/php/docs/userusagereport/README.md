# userUsageReport

### Available Operations

* [reportsUserUsageReportGet](#reportsuserusagereportget) - Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.

## reportsUserUsageReportGet

Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReportsUserUsageReportGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsUserUsageReportGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportsUserUsageReportGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->customerId = 'eligendi';
    $request->date = 'sint';
    $request->fields = 'aliquid';
    $request->filters = 'provident';
    $request->groupIdFilter = 'necessitatibus';
    $request->key = 'sint';
    $request->maxResults = 638921;
    $request->oauthToken = 'dolor';
    $request->orgUnitID = 'debitis';
    $request->pageToken = 'a';
    $request->parameters = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'illum';
    $request->userKey = 'maiores';

    $requestSecurity = new ReportsUserUsageReportGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userUsageReport->reportsUserUsageReportGet($request, $requestSecurity);

    if ($response->usageReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
