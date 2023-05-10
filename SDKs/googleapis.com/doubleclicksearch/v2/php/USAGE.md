<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchConversionGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->adGroupId = 'distinctio';
    $request->adId = 'quibusdam';
    $request->advertiserId = 'unde';
    $request->agencyId = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->campaignId = 'vel';
    $request->criterionId = 'error';
    $request->customerId = 'deserunt';
    $request->endDate = 384382;
    $request->engineAccountId = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->rowCount = 272656;
    $request->startDate = 383441;
    $request->startRow = 477665;
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new DoubleclicksearchConversionGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversion->doubleclicksearchConversionGet($request, $requestSecurity);

    if ($response->conversionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->