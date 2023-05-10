<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAssetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAssetsListContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAssetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetAssetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->assetTypes = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->callback = 'vel';
    $request->contentType = CloudassetAssetsListContentTypeEnum::ACCESS_POLICY;
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->pageSize = 297534;
    $request->pageToken = 'debitis';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->readTime = 'tempora';
    $request->relationshipTypes = [
        'molestiae',
        'minus',
    ];
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new CloudassetAssetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->assets->cloudassetAssetsList($request, $requestSecurity);

    if ($response->listAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->