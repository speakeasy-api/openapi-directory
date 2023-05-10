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
use \OpenAPI\OpenAPI\Models\Operations\ConvertRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRequestBodyValidateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertRequestBody();
    $request->filename = 'corrupti';
    $request->source = 'provident';
    $request->validate = ConvertRequestBodyValidateEnum::ON;

    $response = $sdk->conversion->convert($request);

    if ($response->convert200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [conversion](docs/conversion/README.md)

* [convert](docs/conversion/README.md#convert) - Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 
* [convertUrl](docs/conversion/README.md#converturl) - Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

### [metadata](docs/metadata/README.md)

* [getStatus](docs/metadata/README.md#getstatus) - Get the status of the API

### [validation](docs/validation/README.md)

* [getBadge](docs/validation/README.md#getbadge) - Return a redirect to a badge svg file depending on a source definition's validity
* [validate](docs/validation/README.md#validate) - Validate an OpenAPI 3.0.x definition supplied in the body of the request
* [validateUrl](docs/validation/README.md#validateurl) - Validate an OpenAPI 3.0.x definition
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
