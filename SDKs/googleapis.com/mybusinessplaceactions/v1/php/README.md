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
use \OpenAPI\OpenAPI\Models\Operations\MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlaceActionLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\PlaceActionLinkPlaceActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placeActionLinkInput = new PlaceActionLinkInput();
    $request->placeActionLinkInput->isPreferred = false;
    $request->placeActionLinkInput->name = 'Kelvin Sporer';
    $request->placeActionLinkInput->placeActionType = PlaceActionLinkPlaceActionTypeEnum::FOOD_ORDERING;
    $request->placeActionLinkInput->uri = 'https://impressive-ox.name';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->parent = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'minus';

    $response = $sdk->locations->mybusinessplaceactionsLocationsPlaceActionLinksCreate($request);

    if ($response->placeActionLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [locations](docs/locations/README.md)

* [mybusinessplaceactionsLocationsPlaceActionLinksCreate](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinkscreate) - Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
* [mybusinessplaceactionsLocationsPlaceActionLinksDelete](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinksdelete) - Deletes a place action link from the specified location.
* [mybusinessplaceactionsLocationsPlaceActionLinksGet](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinksget) - Gets the specified place action link.
* [mybusinessplaceactionsLocationsPlaceActionLinksList](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinkslist) - Lists the place action links for the specified location.
* [mybusinessplaceactionsLocationsPlaceActionLinksPatch](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinkspatch) - Updates the specified place action link and returns it.

### [placeActionTypeMetadata](docs/placeactiontypemetadata/README.md)

* [mybusinessplaceactionsPlaceActionTypeMetadataList](docs/placeactiontypemetadata/README.md#mybusinessplaceactionsplaceactiontypemetadatalist) - Returns the list of available place action types for a location or country.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
