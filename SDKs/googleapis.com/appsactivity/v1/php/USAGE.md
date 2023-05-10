<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsactivityActivitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsactivityActivitiesListGroupingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsactivityActivitiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsactivityActivitiesListRequest();
    $request->alt = AltEnum::JSON;
    $request->driveAncestorId = 'corrupti';
    $request->driveFileId = 'provident';
    $request->fields = 'distinctio';
    $request->groupingStrategy = AppsactivityActivitiesListGroupingStrategyEnum::NONE;
    $request->key = 'unde';
    $request->oauthToken = 'nulla';
    $request->pageSize = 544883;
    $request->pageToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->source = 'error';
    $request->userId = 'deserunt';
    $request->userIp = 'suscipit';

    $requestSecurity = new AppsactivityActivitiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->appsactivityActivitiesList($request, $requestSecurity);

    if ($response->listActivitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->