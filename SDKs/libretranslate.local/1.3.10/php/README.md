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

$sdk = SDK::builder()
    ->build();

try {
'es'

    $response = $sdk->feedback->postSuggest($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [feedback](docs/feedback/README.md)

* [postSuggest](docs/feedback/README.md#postsuggest) - Submit a suggestion to improve a translation

### [frontend](docs/frontend/README.md)

* [getFrontendSettings](docs/frontend/README.md#getfrontendsettings) - Retrieve frontend specific settings

### [translate](docs/translate/README.md)

* [getLanguages](docs/translate/README.md#getlanguages) - Retrieve list of supported languages
* [postDetect](docs/translate/README.md#postdetect) - Detect the language of a single text
* [postTranslate](docs/translate/README.md#posttranslate) - Translate text from a language to another
* [postTranslateFile](docs/translate/README.md#posttranslatefile) - Translate file from a language to another
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
