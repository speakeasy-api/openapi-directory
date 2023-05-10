<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountSummariesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountSummariesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountSummariesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountSummariesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminAccountSummariesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new AnalyticsadminAccountSummariesListSecurity();
    $requestSecurity->option1 = new AnalyticsadminAccountSummariesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountSummaries->analyticsadminAccountSummariesList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListAccountSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->