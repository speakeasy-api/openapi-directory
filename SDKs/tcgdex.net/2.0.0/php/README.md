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

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->cards->cards();

    if ($response->cardResumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [cards](docs/cards/README.md)

* [cards](docs/cards/README.md#cards) - fetch the list of cards
* [findPetsByTags](docs/cards/README.md#findpetsbytags) - Finds Card by Global ID
* [getSetsSetCardLocalId](docs/cards/README.md#getsetssetcardlocalid)

### [filters](docs/filters/README.md)

* [getCategories](docs/filters/README.md#getcategories)
* [getCategoriesCategory](docs/filters/README.md#getcategoriescategory)
* [getDexIds](docs/filters/README.md#getdexids)
* [getDexIdsDexId](docs/filters/README.md#getdexidsdexid)
* [getEnergyTypes](docs/filters/README.md#getenergytypes)
* [getEnergyTypesEnergyType](docs/filters/README.md#getenergytypesenergytype)
* [getHp](docs/filters/README.md#gethp)
* [getHpHp](docs/filters/README.md#gethphp)
* [getIllustrators](docs/filters/README.md#getillustrators)
* [getIllustratorsIllustrator](docs/filters/README.md#getillustratorsillustrator)
* [getRarities](docs/filters/README.md#getrarities)
* [getRaritiesRarity](docs/filters/README.md#getraritiesrarity)
* [getRegulationMarks](docs/filters/README.md#getregulationmarks)
* [getRegulationMarksRegulationMark](docs/filters/README.md#getregulationmarksregulationmark)
* [getRetreats](docs/filters/README.md#getretreats)
* [getRetreatsRetreat](docs/filters/README.md#getretreatsretreat)
* [getSeries](docs/filters/README.md#getseries)
* [getSeriesSerie](docs/filters/README.md#getseriesserie)
* [getSets](docs/filters/README.md#getsets)
* [getSetsSet](docs/filters/README.md#getsetsset)
* [getStages](docs/filters/README.md#getstages)
* [getStagesStage](docs/filters/README.md#getstagesstage)
* [getSuffixes](docs/filters/README.md#getsuffixes)
* [getSuffixesSuffix](docs/filters/README.md#getsuffixessuffix)
* [getTrainerTypes](docs/filters/README.md#gettrainertypes)
* [getTrainerTypesTrainerType](docs/filters/README.md#gettrainertypestrainertype)
* [getTypes](docs/filters/README.md#gettypes)
* [getTypesType](docs/filters/README.md#gettypestype)
* [getVariants](docs/filters/README.md#getvariants)
* [getVariantsVariant](docs/filters/README.md#getvariantsvariant)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
