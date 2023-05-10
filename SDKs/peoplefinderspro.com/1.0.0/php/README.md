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
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequestBodyAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->requestBody = new SearchRequestBody();
    $request->requestBody->address = new SearchRequestBodyAddress();
    $request->requestBody->address->addressLine1 = 'corrupti';
    $request->requestBody->address->addressLine2 = 'provident';
    $request->requestBody->age = 7151.9;
    $request->requestBody->dob = 'quibusdam';
    $request->requestBody->email = 'Ryan.Little62@yahoo.com';
    $request->requestBody->firstName = 'Luna';
    $request->requestBody->lastName = 'Hoppe';
    $request->requestBody->middleName = 'iure';
    $request->requestBody->phoneNumber = 'magnam';
    $request->galaxyApName = 'debitis';
    $request->galaxyApPassword = 'ipsa';
    $request->galaxySearchType = 'delectus';

    $response = $sdk->search($request);

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

* [search](docs/sdk/README.md#search) - Search
* [postAddressAutocomplete](docs/sdk/README.md#postaddressautocomplete) - Search
* [postContactEnrich](docs/sdk/README.md#postcontactenrich) - Search
* [postEmailEnrich](docs/sdk/README.md#postemailenrich) - Search
* [postPhoneEnrich](docs/sdk/README.md#postphoneenrich) - Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
