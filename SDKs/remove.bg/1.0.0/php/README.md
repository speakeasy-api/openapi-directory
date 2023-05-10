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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJson;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonChannelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonTypeLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveBgJson();
    $request->addShadow = false;
    $request->bgColor = 'corrupti';
    $request->bgImageUrl = 'provident';
    $request->channels = RemoveBgJsonChannelsEnum::ALPHA;
    $request->crop = false;
    $request->cropMargin = 'quibusdam';
    $request->format = RemoveBgJsonFormatEnum::JPG;
    $request->imageFileB64 = 'nulla';
    $request->imageUrl = 'https://www.remove.bg/example-hd.jpg';
    $request->position = 'corrupti';
    $request->roi = 'illum';
    $request->scale = 'vel';
    $request->semitransparency = false;
    $request->size = RemoveBgJsonSizeEnum::FULL;
    $request->type = RemoveBgJsonTypeEnum::PRODUCT;
    $request->typeLevel = RemoveBgJsonTypeLevelEnum::ONE;

    $response = $sdk->backgroundRemoval->postRemovebgForm($request);

    if ($response->removeBgJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [backgroundRemoval](docs/backgroundremoval/README.md)

* [postRemovebgForm](docs/backgroundremoval/README.md#postremovebgform) - Remove the background of an image
* [postRemovebgJson](docs/backgroundremoval/README.md#postremovebgjson) - Remove the background of an image
* [postRemovebgMultipart](docs/backgroundremoval/README.md#postremovebgmultipart) - Remove the background of an image

### [fetchAccountInfo](docs/fetchaccountinfo/README.md)

* [getAccount](docs/fetchaccountinfo/README.md#getaccount) - Fetch credit balance and free API calls.

### [improvementProgram](docs/improvementprogram/README.md)

* [postImproveForm](docs/improvementprogram/README.md#postimproveform) - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

* [postImproveJson](docs/improvementprogram/README.md#postimprovejson) - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

* [postImproveMultipart](docs/improvementprogram/README.md#postimprovemultipart) - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
