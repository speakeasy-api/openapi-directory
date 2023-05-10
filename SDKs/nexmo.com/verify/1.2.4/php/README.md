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
use \OpenAPI\OpenAPI\Models\Operations\VerifyCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyCheckRequest();
    $request->checkRequest = new CheckRequest();
    $request->checkRequest->apiKey = 'abcd1234';
    $request->checkRequest->apiSecret = 'Sup3rS3cr3t!!';
    $request->checkRequest->code = '1234';
    $request->checkRequest->ipAddress = '123.0.0.255';
    $request->checkRequest->requestId = 'abcdef0123456789abcdef0123456789';
    $request->format = FormatEnum::XML;

    $response = $sdk->verifyCheck($request);

    if ($response->verifyCheck200ApplicationJSONOneOf !== null) {
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

* [verifyCheck](docs/sdk/README.md#verifycheck) - Verify Check
* [verifyControl](docs/sdk/README.md#verifycontrol) - Verify Control
* [verifyRequestWithPsd2](docs/sdk/README.md#verifyrequestwithpsd2) - PSD2 (Payment Services Directive 2) Request
* [verifySearch](docs/sdk/README.md#verifysearch) - Verify Search

### [fraudManagement](docs/fraudmanagement/README.md)

* [networkUnblock](docs/fraudmanagement/README.md#networkunblock) - Request a network unblock

### [requests](docs/requests/README.md)

* [verifyRequest](docs/requests/README.md#verifyrequest) - Request a Verification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
