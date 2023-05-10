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
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsDetectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DetectLanguageRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsDetectSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsDetectSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsDetectSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDetectionsDetectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->detectLanguageRequest = new DetectLanguageRequest();
    $request->detectLanguageRequest->q = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->bearerToken = 'illum';
    $request->callback = 'vel';
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->pp = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new LanguageDetectionsDetectSecurity();
    $requestSecurity->option1 = new LanguageDetectionsDetectSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->detections->languageDetectionsDetect($request, $requestSecurity);

    if ($response->detectionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [detections](docs/detections/README.md)

* [languageDetectionsDetect](docs/detections/README.md#languagedetectionsdetect) - Detects the language of text within a request.
* [languageDetectionsList](docs/detections/README.md#languagedetectionslist) - Detects the language of text within a request.

### [languages](docs/languages/README.md)

* [languageLanguagesList](docs/languages/README.md#languagelanguageslist) - Returns a list of supported languages for translation.

### [translations](docs/translations/README.md)

* [languageTranslationsList](docs/translations/README.md#languagetranslationslist) - Translates input text, returning translated text.
* [languageTranslationsTranslate](docs/translations/README.md#languagetranslationstranslate) - Translates input text, returning translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
