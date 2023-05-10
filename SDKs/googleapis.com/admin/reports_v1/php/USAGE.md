<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReportsActivitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsActivitiesListApplicationNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsActivitiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportsActivitiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->actorIpAddress = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->applicationName = ReportsActivitiesListApplicationNameEnum::MOBILE;
    $request->callback = 'nulla';
    $request->customerId = 'corrupti';
    $request->endTime = 'illum';
    $request->eventName = 'vel';
    $request->fields = 'error';
    $request->filters = 'deserunt';
    $request->groupIdFilter = 'suscipit';
    $request->key = 'iure';
    $request->maxResults = 297534;
    $request->oauthToken = 'debitis';
    $request->orgUnitID = 'ipsa';
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->startTime = 'suscipit';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'minus';
    $request->userKey = 'placeat';

    $requestSecurity = new ReportsActivitiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->reportsActivitiesList($request, $requestSecurity);

    if ($response->activities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->