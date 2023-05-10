<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetProjectsBatchGetAssetsHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetProjectsBatchGetAssetsHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetProjectsBatchGetAssetsHistoryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->assetNames = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->callback = 'vel';
    $request->contentType = CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum::RESOURCE;
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->readTimeWindowEndTime = 'ipsa';
    $request->readTimeWindowStartTime = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new CloudassetProjectsBatchGetAssetsHistorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudassetProjectsBatchGetAssetsHistory($request, $requestSecurity);

    if ($response->batchGetAssetsHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->