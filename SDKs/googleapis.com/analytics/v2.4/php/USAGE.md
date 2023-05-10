<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDataGetRequest();
    $request->alt = AltEnum::ATOM;
    $request->dimensions = 'corrupti';
    $request->endDate = 'provident';
    $request->fields = 'distinctio';
    $request->filters = 'quibusdam';
    $request->ids = 'unde';
    $request->key = 'nulla';
    $request->maxResults = 544883;
    $request->metrics = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->segment = 'deserunt';
    $request->sort = 'suscipit';
    $request->startDate = 'iure';
    $request->startIndex = 297534;
    $request->userIp = 'debitis';

    $requestSecurity = new AnalyticsDataGetSecurity();
    $requestSecurity->option1 = new AnalyticsDataGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->data->analyticsDataGet($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->