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
use \OpenAPI\OpenAPI\Models\Operations\AreasGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AreasGetRequest();
    $request->version = 'corrupti';

    $response = $sdk->areas->areasGet($request);

    if ($response->areaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [areas](docs/areas/README.md)

* [areasGet](docs/areas/README.md#areasget) - Returns list of areas
* [getVVersionAreasAreaIds](docs/areas/README.md#getvversionareasareaids) - Returns details of selected area

### [quality](docs/quality/README.md)

* [qualityGetDailyDataQualityForSite](docs/quality/README.md#qualitygetdailydataqualityforsite) - Get Site DailyQuality
* [qualityGetOverallDataQualityForSites](docs/quality/README.md#qualitygetoveralldataqualityforsites) - Get Site OverallQuality

### [reports](docs/reports/README.md)

* [reportsIndex](docs/reports/README.md#reportsindex) - Gets the daily report.
* [getVVersionReportsStartDateToEndDateReportType](docs/reports/README.md#getvversionreportsstartdatetoenddatereporttype) - Gets the daily report.

### [siteTypes](docs/sitetypes/README.md)

* [siteTypesGetSitesForPublicFacingAPI](docs/sitetypes/README.md#sitetypesgetsitesforpublicfacingapi) - Returns the layer metadata for the LayerId specified.
* [siteTypesIndex](docs/sitetypes/README.md#sitetypesindex) - Return list of site types

### [sites](docs/sites/README.md)

* [sitesIndex](docs/sites/README.md#sitesindex) - Get a list of sites
* [getVVersionSitesSiteIds](docs/sites/README.md#getvversionsitessiteids) - Get selected sites
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
