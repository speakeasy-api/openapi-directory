<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetOutputEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSamplingLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDataGaGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDataGaGetRequest();
    $request->alt = AltEnum::JSON;
    $request->dimensions = 'corrupti';
    $request->endDate = 'provident';
    $request->fields = 'distinctio';
    $request->filters = 'quibusdam';
    $request->ids = 'unde';
    $request->includeEmptyRows = false;
    $request->key = 'nulla';
    $request->maxResults = 544883;
    $request->metrics = 'illum';
    $request->oauthToken = 'vel';
    $request->output = AnalyticsDataGaGetOutputEnum::JSON;
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->samplingLevel = AnalyticsDataGaGetSamplingLevelEnum::FASTER;
    $request->segment = 'iure';
    $request->sort = 'magnam';
    $request->startDate = 'debitis';
    $request->startIndex = 56713;
    $request->userIp = 'delectus';

    $requestSecurity = new AnalyticsDataGaGetSecurity();
    $requestSecurity->option1 = new AnalyticsDataGaGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->data->analyticsDataGaGet($request, $requestSecurity);

    if ($response->gaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->