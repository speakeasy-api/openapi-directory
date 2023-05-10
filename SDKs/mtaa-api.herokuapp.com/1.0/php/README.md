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
use \OpenAPI\OpenAPI\Models\Operations\DistrictsInARegionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistrictsInARegionRequest();
    $request->country = 'Malta';
    $request->region = 'provident';

    $response = $sdk->districtsInRegion->districtsInARegion($request);

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


### [districtsInRegion](docs/districtsinregion/README.md)

* [districtsInARegion](docs/districtsinregion/README.md#districtsinaregion) - Returns all districts in region

### [streetsInAWard](docs/streetsinaward/README.md)

* [streetsInAWard](docs/streetsinaward/README.md#streetsinaward) - Returns all streets in a ward

### [tanzaniaRegions](docs/tanzaniaregions/README.md)

* [tanzaniaRegions](docs/tanzaniaregions/README.md#tanzaniaregions) - Returns all regions present in Tanzania

### [wardsInADistrict](docs/wardsinadistrict/README.md)

* [wardsInADistrict](docs/wardsinadistrict/README.md#wardsinadistrict) - Returns all wards in a district

### [neighborhoodInAStreet](docs/neighborhoodinastreet/README.md)

* [neighborhoodInAStreet](docs/neighborhoodinastreet/README.md#neighborhoodinastreet) - Returns all neighborhood in a street
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
