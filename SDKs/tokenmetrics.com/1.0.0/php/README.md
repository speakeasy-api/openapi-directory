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
use \OpenAPI\OpenAPI\Models\Operations\CorrelationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CorrelationRequest();
    $request->limit = '1000';
    $request->tokens = '3375, 3306';

    $response = $sdk->correlation($request);

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

### [SDK](docs/sdk/README.md)

* [correlation](docs/sdk/README.md#correlation) - Correlation
* [indices](docs/sdk/README.md#indices) - Indices
* [investorGrades](docs/sdk/README.md#investorgrades) - Investor Grades
* [marketIndicator](docs/sdk/README.md#marketindicator) - Market Indicator
* [price](docs/sdk/README.md#price) - Price
* [pricePrediction](docs/sdk/README.md#priceprediction) - Price Prediction
* [quantmetricsTier1](docs/sdk/README.md#quantmetricstier1) - Quantmetrics Tier 1
* [quantmetricsTier2](docs/sdk/README.md#quantmetricstier2) - Quantmetrics Tier 2
* [resistanceSupport](docs/sdk/README.md#resistancesupport) - Resistance & Support
* [scenarioAnalysis](docs/sdk/README.md#scenarioanalysis) - Scenario Analysis
* [sentiments](docs/sdk/README.md#sentiments) - Sentiments
* [tokens](docs/sdk/README.md#tokens) - Tokens
* [traderGrades](docs/sdk/README.md#tradergrades) - Trader Grades
* [tradingIndicator](docs/sdk/README.md#tradingindicator) - Trading Indicator
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
