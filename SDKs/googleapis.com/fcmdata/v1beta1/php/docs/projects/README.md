# projects

### Available Operations

* [fcmdataProjectsAndroidAppsDeliveryDataList](#fcmdataprojectsandroidappsdeliverydatalist) - List aggregate delivery data for the given Android application.

## fcmdataProjectsAndroidAppsDeliveryDataList

List aggregate delivery data for the given Android application.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 791725;
    $request->pageToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

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
