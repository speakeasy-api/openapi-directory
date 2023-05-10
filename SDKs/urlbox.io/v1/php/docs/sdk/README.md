# SDK

## Overview

A plugin that allows the user to capture screenshots of a web page from a URL or HTML using ChatGPT.

### Available Operations

* [renderSync](#rendersync) - Render a URL as an image or video

## renderSync

Render a URL as an image or video

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RenderSyncSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenderSyncRequestBody1();
    $request->blockAds = false;
    $request->clickAccept = false;
    $request->delay = 'debitis';
    $request->format = RenderSyncRequestBody1FormatEnum::PNG;
    $request->fullPage = false;
    $request->gpu = false;
    $request->height = 963663;
    $request->hideCookieBanners = false;
    $request->html = 'tempora';
    $request->metadata = false;
    $request->retina = false;
    $request->selector = 'suscipit';
    $request->thumbHeight = 477665;
    $request->thumbWidth = 791725;
    $request->url = 'placeat';
    $request->waitFor = 'voluptatum';
    $request->waitToLeave = 'iusto';
    $request->waitUntil = RenderSyncRequestBody1WaitUntilEnum::LOADED;
    $request->width = 392785;

    $requestSecurity = new RenderSyncSecurity();
    $requestSecurity->secretKey = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->renderSync($request, $requestSecurity);

    if ($response->renderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
