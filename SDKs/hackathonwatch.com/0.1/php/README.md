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
use \OpenAPI\OpenAPI\Models\Operations\GETHackathonsIdFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETHackathonsIdFormatRequest();
    $request->id = 548814;

    $response = $sdk->hackathons->getHackathonsIdFormat($request);

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


### [hackathons](docs/hackathons/README.md)

* [getHackathonsIdFormat](docs/hackathons/README.md#gethackathonsidformat) - Return the detail of a given hackathon
* [getHackathonsComingFormat](docs/hackathons/README.md#gethackathonscomingformat) - Return a list of coming hackathons

### [swaggerDoc](docs/swaggerdoc/README.md)

* [getSwaggerDocFormat](docs/swaggerdoc/README.md#getswaggerdocformat) - Swagger compatible API description
* [getSwaggerDocNameFormat](docs/swaggerdoc/README.md#getswaggerdocnameformat) - Swagger compatible API description for specific API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
