<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApklistingsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 548814;
    $request->editId = 'provident';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->language = 'unde';
    $request->oauthToken = 'nulla';
    $request->packageName = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->userIp = 'vel';

    $requestSecurity = new AndroidpublisherEditsApklistingsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApklistingsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->