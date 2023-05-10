<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChatMediaDownloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChatMediaDownloadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChatMediaDownloadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChatMediaDownloadSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ChatMediaDownloadSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChatMediaDownloadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->resourceName = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new ChatMediaDownloadSecurity();
    $requestSecurity->option1 = new ChatMediaDownloadSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->chatMediaDownload($request, $requestSecurity);

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->