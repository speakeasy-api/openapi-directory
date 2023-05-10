# userActivity

### Available Operations

* [analyticsreportingUserActivitySearch](#analyticsreportinguseractivitysearch) - Returns User Activity data.

## analyticsreportingUserActivitySearch

Returns User Activity data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsreportingUserActivitySearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchUserActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchUserActivityRequestActivityTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsreportingUserActivitySearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsreportingUserActivitySearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsreportingUserActivitySearchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsreportingUserActivitySearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->searchUserActivityRequest = new SearchUserActivityRequest();
    $request->searchUserActivityRequest->activityTypes = [
        SearchUserActivityRequestActivityTypesEnum::GOAL,
        SearchUserActivityRequestActivityTypesEnum::SCREENVIEW,
    ];
    $request->searchUserActivityRequest->dateRange = new DateRange();
    $request->searchUserActivityRequest->dateRange->endDate = 'recusandae';
    $request->searchUserActivityRequest->dateRange->startDate = 'temporibus';
    $request->searchUserActivityRequest->pageSize = 71036;
    $request->searchUserActivityRequest->pageToken = 'quis';
    $request->searchUserActivityRequest->user = new User();
    $request->searchUserActivityRequest->user->type = UserTypeEnum::USER_ID_TYPE_UNSPECIFIED;
    $request->searchUserActivityRequest->user->userId = 'deserunt';
    $request->searchUserActivityRequest->viewId = 'perferendis';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new AnalyticsreportingUserActivitySearchSecurity();
    $requestSecurity->option1 = new AnalyticsreportingUserActivitySearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userActivity->analyticsreportingUserActivitySearch($request, $requestSecurity);

    if ($response->searchUserActivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
