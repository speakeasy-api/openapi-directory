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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatInterpolationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatStreetDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatUnitDesignatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressesOutputFormatRequest();
    $request->addressString = 'corrupti';
    $request->autoComplete = false;
    $request->bbox = 'provident';
    $request->brief = false;
    $request->centre = 'distinctio';
    $request->civicNumber = 'quibusdam';
    $request->civicNumberSuffix = 'unde';
    $request->echo = false;
    $request->extrapolate = false;
    $request->interpolation = GetAddressesOutputFormatInterpolationEnum::NONE;
    $request->localities = 'corrupti';
    $request->localityName = 'illum';
    $request->locationDescriptor = GetAddressesOutputFormatLocationDescriptorEnum::FRONT_DOOR_POINT;
    $request->matchPrecision = 'error';
    $request->matchPrecisionNot = 'deserunt';
    $request->maxDistance = 3843.82;
    $request->maxResults = 437587;
    $request->minScore = 297534;
    $request->notLocalities = 'debitis';
    $request->outputFormat = GetAddressesOutputFormatOutputFormatEnum::JSON;
    $request->outputSRS = GetAddressesOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;
    $request->parcelPoint = 'tempora';
    $request->provinceCode = 'suscipit';
    $request->setBack = 477665;
    $request->siteName = 'minus';
    $request->streetDirection = GetAddressesOutputFormatStreetDirectionEnum::SE;
    $request->streetName = 'voluptatum';
    $request->streetQualifier = 'iusto';
    $request->streetType = 'excepturi';
    $request->unitDesignator = GetAddressesOutputFormatUnitDesignatorEnum::PAD;
    $request->unitNumber = 'recusandae';
    $request->unitNumberSuffix = 'temporibus';

    $response = $sdk->intersections->getAddressesOutputFormat($request);

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


### [intersections](docs/intersections/README.md)

* [getAddressesOutputFormat](docs/intersections/README.md#getaddressesoutputformat) - Geocode an address
* [getIntersectionsNearOutputFormat](docs/intersections/README.md#getintersectionsnearoutputformat) - Find intersections near to a geographic point
* [getIntersectionsNearestOutputFormat](docs/intersections/README.md#getintersectionsnearestoutputformat) - Find nearest intersection to a geographic point
* [getIntersectionsWithinOutputFormat](docs/intersections/README.md#getintersectionswithinoutputformat) - Find intersections in a geographic area
* [getIntersectionsIntersectionIDOutputFormat](docs/intersections/README.md#getintersectionsintersectionidoutputformat) - Get an intersection by its unique ID

### [occupants](docs/occupants/README.md)

* [getOccupantsAddressesOutputFormat](docs/occupants/README.md#getoccupantsaddressesoutputformat) - Geocode an address and identify site occupants
* [getOccupantsNearOutputFormat](docs/occupants/README.md#getoccupantsnearoutputformat) - Find occupants of sites near to a geographic point
* [getOccupantsNearestOutputFormat](docs/occupants/README.md#getoccupantsnearestoutputformat) - Find occupants of the site nearest to a geographic point
* [getOccupantsWithinOutputFormat](docs/occupants/README.md#getoccupantswithinoutputformat) - Find occupants of sites in a geographic area
* [getOccupantsOccupantIDOutputFormat](docs/occupants/README.md#getoccupantsoccupantidoutputformat) - Get an occupant (of a site) by its unique ID

### [parcels](docs/parcels/README.md)

* [getParcelsPidsSiteIDOutputFormat](docs/parcels/README.md#getparcelspidssiteidoutputformat) - Get a comma-separated string of all pids for a given site

### [sites](docs/sites/README.md)

* [getAddressesOutputFormat](docs/sites/README.md#getaddressesoutputformat) - Geocode an address
* [getSitesNearOutputFormat](docs/sites/README.md#getsitesnearoutputformat) - Find sites near to a geographic point
* [getSitesNearestOutputFormat](docs/sites/README.md#getsitesnearestoutputformat) - Find the site nearest to a geographic point
* [getSitesWithinOutputFormat](docs/sites/README.md#getsiteswithinoutputformat) - Find sites in a geographic area
* [getSitesSiteIDOutputFormat](docs/sites/README.md#getsitessiteidoutputformat) - Get a site by its unique ID
* [getSitesSiteIDSubsitesOutputFormat](docs/sites/README.md#getsitessiteidsubsitesoutputformat) - Represents all subsites of a given site
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
