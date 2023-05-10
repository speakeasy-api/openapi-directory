<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RenderSyncSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenderSyncRequestBody2();
    $request->blockAds = false;
    $request->clickAccept = false;
    $request->delay = 'provident';
    $request->format = RenderSyncRequestBody2FormatEnum::WEBP;
    $request->fullPage = false;
    $request->gpu = false;
    $request->height = 844266;
    $request->hideCookieBanners = false;
    $request->html = 'unde';
    $request->metadata = false;
    $request->retina = false;
    $request->selector = 'nulla';
    $request->thumbHeight = 544883;
    $request->thumbWidth = 847252;
    $request->url = 'vel';
    $request->waitFor = 'error';
    $request->waitToLeave = 'deserunt';
    $request->waitUntil = RenderSyncRequestBody2WaitUntilEnum::MOSTREQUESTSFINISHED;
    $request->width = 437587;

    $requestSecurity = new RenderSyncSecurity();
    $requestSecurity->secretKey = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->renderSync($request, $requestSecurity);

    if ($response->renderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->