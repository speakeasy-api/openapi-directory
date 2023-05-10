<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersAssetsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersAssetsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersAssetsUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'provident';
    $request->accessToken = 'distinctio';
    $request->advertiserId = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DisplayvideoAdvertisersAssetsUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersAssetsUpload($request, $requestSecurity);

    if ($response->createAssetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->