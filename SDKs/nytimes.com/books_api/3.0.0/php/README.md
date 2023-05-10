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
use \OpenAPI\OpenAPI\Models\Operations\GETListsBestSellersHistoryJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListsBestSellersHistoryJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListsBestSellersHistoryJsonRequest();
    $request->ageGroup = 'corrupti';
    $request->author = 'provident';
    $request->contributor = 'distinctio';
    $request->isbn = 'quibusdam';
    $request->price = 'unde';
    $request->publisher = 'nulla';
    $request->title = 'Ms.';

    $requestSecurity = new GETListsBestSellersHistoryJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->getListsBestSellersHistoryJson($request, $requestSecurity);

    if ($response->getListsBestSellersHistoryJSON200ApplicationJSONObject !== null) {
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

* [getListsBestSellersHistoryJson](docs/sdk/README.md#getlistsbestsellershistoryjson) - Best Seller History List
* [getListsDateListJson](docs/sdk/README.md#getlistsdatelistjson) - Best Seller List by Date
* [getListsFormat](docs/sdk/README.md#getlistsformat) - Best Seller List
* [getListsNamesFormat](docs/sdk/README.md#getlistsnamesformat) - Best Seller List Names
* [getListsOverviewFormat](docs/sdk/README.md#getlistsoverviewformat) - Best Seller List Overview
* [getReviewsFormat](docs/sdk/README.md#getreviewsformat) - Reviews
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
