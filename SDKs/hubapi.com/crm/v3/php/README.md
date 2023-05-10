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
use \OpenAPI\OpenAPI\Models\Operations\DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest();
    $request->appId = 548814;
    $request->cardId = 'provident';

    $requestSecurity = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->cards->deleteCrmV3ExtensionsCardsAppIdCardIdArchive($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [cards](docs/cards/README.md)

* [deleteCrmV3ExtensionsCardsAppIdCardIdArchive](docs/cards/README.md#deletecrmv3extensionscardsappidcardidarchive) - Delete a card
* [getCrmV3ExtensionsCardsAppIdCardIdGetById](docs/cards/README.md#getcrmv3extensionscardsappidcardidgetbyid) - Get a card.
* [getCrmV3ExtensionsCardsAppIdGetAll](docs/cards/README.md#getcrmv3extensionscardsappidgetall) - Get all cards
* [patchCrmV3ExtensionsCardsAppIdCardIdUpdate](docs/cards/README.md#patchcrmv3extensionscardsappidcardidupdate) - Update a card
* [postCrmV3ExtensionsCardsAppIdCreate](docs/cards/README.md#postcrmv3extensionscardsappidcreate) - Create a new card

### [sampleResponse](docs/sampleresponse/README.md)

* [getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse](docs/sampleresponse/README.md#getcrmv3extensionscardssampleresponsegetcardssampleresponse) - Get sample card detail response
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
