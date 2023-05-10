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
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesHistoryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesHistoryGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrenciesHistoryGETRequest();
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-25T05:21:43.948Z');
    $request->format = CurrenciesHistoryGETFormatEnum::XML;
    $request->interval = 'quibusdam';
    $request->pairs = 'unde';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-14T08:28:11.899Z');

    $response = $sdk->currencies->currenciesHistoryGET($request);

    if ($response->intervalCollectionResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [currencies](docs/currencies/README.md)

* [currenciesHistoryGET](docs/currencies/README.md#currencieshistoryget) - Get historical prices for requested currency pairs
* [currenciesRateGET](docs/currencies/README.md#currenciesrateget) - Get latest mid rate for requested currency pairs
* [currenciesSummaryGET](docs/currencies/README.md#currenciessummaryget) - Get latest Summary for requested currency pairs
* [currenciesSupportedCurrenciesHistoryGET](docs/currencies/README.md#currenciessupportedcurrencieshistoryget) - Get list of currency pairs supported by the history endpoint
* [currenciesSupportedCurrenciesRateGET](docs/currencies/README.md#currenciessupportedcurrenciesrateget) - Get list of currencies supported by the rate endpoint
* [currenciesSupportedCurrenciesSummaryGET](docs/currencies/README.md#currenciessupportedcurrenciessummaryget) - Get list of currency pairs supported by the Summary endpoint

### [metals](docs/metals/README.md)

* [metalsBenchmarkHistoryGET](docs/metals/README.md#metalsbenchmarkhistoryget) - Get historical benchmark prices for requested metals
* [metalsBenchmarkSummaryGET](docs/metals/README.md#metalsbenchmarksummaryget) - Get latest Benchmark prices for requested metals
* [metalsBenchmarkSupportedMetalsGET](docs/metals/README.md#metalsbenchmarksupportedmetalsget) - Get list of symbols supported by the benchmark endpoints
* [metalsSpotAnnualHistoricalPerformanceGET](docs/metals/README.md#metalsspotannualhistoricalperformanceget) - Get Historical Annual Performance for requested metals
* [metalsSpotHistoricalPerformanceGET](docs/metals/README.md#metalsspothistoricalperformanceget) - Get Historical Performance for requested metals
* [metalsSpotHistoryGET](docs/metals/README.md#metalsspothistoryget) - Get historical Spot prices for requested metals
* [metalsSpotRatioHistoryGET](docs/metals/README.md#metalsspotratiohistoryget) - Get historical Spot Ratio prices for requested metals
* [metalsSpotRatioSummaryGET](docs/metals/README.md#metalsspotratiosummaryget) - Get latest Spot Summary for requested metal ratios
* [metalsSpotSummaryGET](docs/metals/README.md#metalsspotsummaryget) - Get latest Spot Summary for requested metals
* [metalsSpotSupportedMetalsGET](docs/metals/README.md#metalsspotsupportedmetalsget) - Get list of symbols supported by the spot endpoints
* [metalsSupportedCurrenciesMetalsGET](docs/metals/README.md#metalssupportedcurrenciesmetalsget) - Get list of currencies supported by metals endpoints for currency conversion
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
