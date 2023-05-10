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
use \OpenAPI\OpenAPI\Models\Operations\WebfontsWebfontsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebfontsWebfontsListCapabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebfontsWebfontsListSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebfontsWebfontsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->capability = [
        WebfontsWebfontsListCapabilityEnum::VF,
        WebfontsWebfontsListCapabilityEnum::WOFF2,
        WebfontsWebfontsListCapabilityEnum::VF,
    ];
    $request->family = [
        'error',
        'deserunt',
    ];
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->sort = WebfontsWebfontsListSortEnum::SORT_UNDEFINED;
    $request->subset = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $response = $sdk->webfonts->webfontsWebfontsList($request);

    if ($response->webfontList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [webfonts](docs/webfonts/README.md)

* [webfontsWebfontsList](docs/webfonts/README.md#webfontswebfontslist) - Retrieves the list of fonts currently served by the Google Fonts Developer API.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
