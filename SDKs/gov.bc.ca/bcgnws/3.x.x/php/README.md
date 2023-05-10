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
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturesFeatureIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeaturesFeatureIdRequest();
    $request->featureId = 548814;

    $response = $sdk->feature->getFeaturesFeatureId($request);

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


### [feature](docs/feature/README.md)

* [getFeaturesFeatureId](docs/feature/README.md#getfeaturesfeatureid) - Get a feature by its featureId

### [featureTaxonomy](docs/featuretaxonomy/README.md)

* [getFeatureCategories](docs/featuretaxonomy/README.md#getfeaturecategories) - Get all feature categories
* [getFeatureClasses](docs/featuretaxonomy/README.md#getfeatureclasses) - Get all feature classes
* [getFeatureTypes](docs/featuretaxonomy/README.md#getfeaturetypes) - Get all feature types

### [name](docs/name/README.md)

* [getNamesChanges](docs/name/README.md#getnameschanges) - Search for names with metadata changes in a given period
* [getNamesDecisionsRecent](docs/name/README.md#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [getNamesDecisionsYear](docs/name/README.md#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [getNamesInside](docs/name/README.md#getnamesinside) - Search in a geographic area
* [getNamesNear](docs/name/README.md#getnamesnear) - Search near to a geographic point
* [getNamesNotOfficialSearch](docs/name/README.md#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [getNamesOfficialSearch](docs/name/README.md#getnamesofficialsearch) - Search by name, limit to official names only
* [getNamesSearch](docs/name/README.md#getnamessearch) - Search by name
* [getNamesNameIdOutputFormat](docs/name/README.md#getnamesnameidoutputformat) - Get a name by its nameId

### [nameAuthority](docs/nameauthority/README.md)

* [getNameAuthorities](docs/nameauthority/README.md#getnameauthorities) - Get all name authorities

### [search](docs/search/README.md)

* [getNamesChanges](docs/search/README.md#getnameschanges) - Search for names with metadata changes in a given period
* [getNamesDecisionsRecent](docs/search/README.md#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [getNamesDecisionsYear](docs/search/README.md#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [getNamesInside](docs/search/README.md#getnamesinside) - Search in a geographic area
* [getNamesNear](docs/search/README.md#getnamesnear) - Search near to a geographic point
* [getNamesNotOfficialSearch](docs/search/README.md#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [getNamesOfficialSearch](docs/search/README.md#getnamesofficialsearch) - Search by name, limit to official names only
* [getNamesSearch](docs/search/README.md#getnamessearch) - Search by name
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
