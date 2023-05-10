# entityUsageReports

### Available Operations

* [reportsEntityUsageReportsGet](#reportsentityusagereportsget) - Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

## reportsEntityUsageReportsGet

Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReportsEntityUsageReportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsEntityUsageReportsGetEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsEntityUsageReportsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportsEntityUsageReportsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->customerId = 'cupiditate';
    $request->date = 'quos';
    $request->entityKey = 'perferendis';
    $request->entityType = ReportsEntityUsageReportsGetEntityTypeEnum::GPLUS_COMMUNITIES;
    $request->fields = 'magni';
    $request->filters = 'assumenda';
    $request->key = 'ipsam';
    $request->maxResults = 4695;
    $request->oauthToken = 'fugit';
    $request->pageToken = 'dolorum';
    $request->parameters = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new ReportsEntityUsageReportsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->entityUsageReports->reportsEntityUsageReportsGet($request, $requestSecurity);

    if ($response->usageReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
