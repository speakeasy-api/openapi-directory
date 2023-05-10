<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentAdsSettings;
use \OpenAPI\OpenAPI\Models\Shared\ContentAdsSettingsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsAdunitsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->adUnitInput = new AdUnitInput();
    $request->adUnitInput->contentAdsSettings = new ContentAdsSettings();
    $request->adUnitInput->contentAdsSettings->size = 'provident';
    $request->adUnitInput->contentAdsSettings->type = ContentAdsSettingsTypeEnum::MATCHED_CONTENT;
    $request->adUnitInput->displayName = 'quibusdam';
    $request->adUnitInput->state = AdUnitStateEnum::ACTIVE;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->fields = 'vel';
    $request->key = 'error';
    $request->oauthToken = 'deserunt';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new AdsenseAccountsAdclientsAdunitsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsAdunitsCreate($request, $requestSecurity);

    if ($response->adUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->