# assetsPrices

### Available Operations

* [postAssetsPricesAdjusted](#postassetspricesadjusted) - Adjusted Prices
* [postAssetsPricesAdjustedForward](#postassetspricesadjustedforward) - Forward-Adjusted Prices

## postAssetsPricesAdjusted

Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from:
* Unadjusted prices
* Capital distributions, like stock dividends
* Splits, like stock splits

The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that:
* The price on the last date for which unadjusted prices are available is left unadjusted
* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available

References
* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsPricesAdjustedRequestBody();
    $request->assets = [
        new PostAssetsPricesAdjustedRequestBodyAssets(),
        new PostAssetsPricesAdjustedRequestBodyAssets(),
        new PostAssetsPricesAdjustedRequestBodyAssets(),
    ];

    $response = $sdk->assetsPrices->postAssetsPricesAdjusted($request);

    if ($response->postAssetsPricesAdjusted200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsPricesAdjustedForward

Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from:
* Unadjusted prices
* Capital distributions, like stock dividends
* Splits, like stock splits

The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that:
* The price on the first date for which unadjusted prices are available is left unadjusted
* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available

References
* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedForwardRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedForwardRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsPricesAdjustedForwardRequestBody();
    $request->assets = [
        new PostAssetsPricesAdjustedForwardRequestBodyAssets(),
        new PostAssetsPricesAdjustedForwardRequestBodyAssets(),
        new PostAssetsPricesAdjustedForwardRequestBodyAssets(),
        new PostAssetsPricesAdjustedForwardRequestBodyAssets(),
    ];

    $response = $sdk->assetsPrices->postAssetsPricesAdjustedForward($request);

    if ($response->postAssetsPricesAdjustedForward200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
