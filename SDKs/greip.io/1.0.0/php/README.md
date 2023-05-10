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
use \OpenAPI\OpenAPI\Models\Operations\GetASNLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetASNLookupRequest();
    $request->asn = '15169';
    $request->format = 'JSON';
    $request->isList = 'no';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';

    $response = $sdk->getASNLookup($request);

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

### [SDK](docs/sdk/README.md)

* [getASNLookup](docs/sdk/README.md#getasnlookup) - ASNLookup endpoint: This method helps you lookup any AS Number. It returns the type, organisation details, routes, etc.
* [getBINLookup](docs/sdk/README.md#getbinlookup) - This method helps you validate any BIN/IIN number and retrieve the full details related to the bank, brand, type, scheme, country, etc.
* [getBulkLookup](docs/sdk/README.md#getbulklookup) - BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.
* [getCountry](docs/sdk/README.md#getcountry) - Country endpoint: Returns the information of a specific country by passing the `countrCode`.
* [getGeoIP](docs/sdk/README.md#getgeoip) - Returns the geolocation data of the visitor.
* [getIPLookup](docs/sdk/README.md#getiplookup) - Returns the geolocation data of a specific IP Address.
* [getBadWords](docs/sdk/README.md#getbadwords) - badWords endpoint: Detects whether user inputs contain profanity or not.
* [getValidateEmail](docs/sdk/README.md#getvalidateemail) - This method can be used as an extra-layer of your system for validating email addresses.
* [getValidatePhone](docs/sdk/README.md#getvalidatephone) - This method can be used as an extra-layer of your system for validating phone numbers.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
