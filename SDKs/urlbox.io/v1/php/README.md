# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [renderSync](docs/sdk/README.md#rendersync) - Render a URL as an image or video
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
