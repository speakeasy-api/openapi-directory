# portfolioConstruction

### Available Operations

* [postPortfolioConstructionInvestable](#postportfolioconstructioninvestable) - Investable Portfolio
* [postPortfolioConstructionMimicking](#postportfolioconstructionmimicking) - Mimicking Portfolio
* [postPortfolioConstructionRandom](#postportfolioconstructionrandom) - Random Portfolio

## postPortfolioConstructionInvestable

Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
* The desired assets weights
* The desired assets groups weights
* The desired maximum assets groups weights
* The prices of the assets
* The portfolio value
* The requirement to purchase some assets by round lots or by odd lots
* The possibility to purchase some assets by a fractional quantity of shares
* The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets

References
* [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioConstructionInvestableRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioConstructionInvestableRequestBody();
    $request->assets = 903720;
    $request->assetsGroups = [
        [
            749255,
        ],
    ];
    $request->assetsGroupsWeights = [
        7316.94,
        5844.76,
        456.14,
    ];
    $request->assetsMinimumNotionalValues = [
        2091.57,
        2921.47,
        2869.15,
        2408.29,
    ];
    $request->assetsMinimumPositions = [
        1002.94,
        630.38,
        164.29,
    ];
    $request->assetsPrices = [
        9295.3,
        92.4,
        6699.17,
    ];
    $request->assetsSizeLots = [
        7851.53,
        9843.3,
        2817.3,
        7034.95,
    ];
    $request->assetsWeights = [
        1816.31,
        639.55,
        5123.93,
    ];
    $request->maximumAssetsGroupsWeights = [
        5804.47,
        9774.96,
    ];
    $request->portfolioValue = 7875.42;

    $response = $sdk->portfolioConstruction->postPortfolioConstructionInvestable($request);

    if ($response->postPortfolioConstructionInvestable200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioConstructionMimicking

Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References 
* Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioConstructionMimickingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioConstructionMimickingRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioConstructionMimickingRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioConstructionMimickingRequestBody();
    $request->assets = [
        new PostPortfolioConstructionMimickingRequestBodyAssets(),
        new PostPortfolioConstructionMimickingRequestBodyAssets(),
        new PostPortfolioConstructionMimickingRequestBodyAssets(),
        new PostPortfolioConstructionMimickingRequestBodyAssets(),
    ];
    $request->benchmarkReturns = [
        3381.59,
        2184.03,
        9615.71,
    ];
    $request->constraints = new PostPortfolioConstructionMimickingRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            878870,
        ],
        [
            492268,
            941378,
            715561,
            799203,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            7085.48,
            8742.88,
            4981.4,
        ],
        [
            8445.5,
            8489.44,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        6178.77,
    ];
    $request->constraints->maximumAssetsWeights = [
        132.36,
        9742.59,
        3472.33,
        8623.1,
    ];
    $request->constraints->maximumPortfolioExposure = 1481.41;
    $request->constraints->minimumAssetsWeights = [
        9818.3,
        9850.33,
        4783.7,
        7535.7,
    ];
    $request->constraints->minimumPortfolioExposure = 4973.91;

    $response = $sdk->portfolioConstruction->postPortfolioConstructionMimicking($request);

    if ($response->postPortfolioConstructionMimicking200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioConstructionRandom

Construct one or several random portfolio(s), optionally subject to:       
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

> Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.

References
* [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioConstructionRandomRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioConstructionRandomRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioConstructionRandomRequestBody();
    $request->assets = 4048;
    $request->constraints = new PostPortfolioConstructionRandomRequestBodyConstraints();
    $request->constraints->maximumAssetsWeights = [
        2694.79,
        3685.84,
        4104.92,
    ];
    $request->constraints->maximumPortfolioExposure = 1369;
    $request->constraints->minimumAssetsWeights = [
        8221.18,
        2978.42,
    ];
    $request->constraints->minimumPortfolioExposure = 1898.48;
    $request->portfolios = 401132;

    $response = $sdk->portfolioConstruction->postPortfolioConstructionRandom($request);

    if ($response->postPortfolioConstructionRandom200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
