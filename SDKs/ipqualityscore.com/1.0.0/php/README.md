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
use \OpenAPI\OpenAPI\Models\Operations\EmailValidationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmailValidationRequest();
    $request->userEmailHere = 'example@example.com';
    $request->yourApiKeyHere = 'asd24#sdfs322#';

    $response = $sdk->emailValidation->emailValidation($request);

    if ($response->emailValidation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [emailValidation](docs/emailvalidation/README.md)

* [emailValidation](docs/emailvalidation/README.md#emailvalidation) - Email Validation

### [maliciousUrlScanner](docs/maliciousurlscanner/README.md)

* [maliciousUrlScanner](docs/maliciousurlscanner/README.md#maliciousurlscanner) - Malicious URL Scanner

### [phoneValidation](docs/phonevalidation/README.md)

* [phoneValidation](docs/phonevalidation/README.md#phonevalidation) - Phone Validation
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
