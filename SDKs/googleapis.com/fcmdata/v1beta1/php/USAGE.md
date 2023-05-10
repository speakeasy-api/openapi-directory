<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FcmdataProjectsAndroidAppsDeliveryDataListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FcmdataProjectsAndroidAppsDeliveryDataListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FcmdataProjectsAndroidAppsDeliveryDataListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new FcmdataProjectsAndroidAppsDeliveryDataListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fcmdataProjectsAndroidAppsDeliveryDataList($request, $requestSecurity);

    if ($response->googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->