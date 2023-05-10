# portfolioSimulation

### Available Operations

* [postPortfolioSimulationRebalancingDriftWeight](#postportfoliosimulationrebalancingdriftweight) - Drift-weight Portfolio Rebalancing
* [postPortfolioSimulationRebalancingFixedWeight](#postportfoliosimulationrebalancingfixedweight) - Fixed-weight Portfolio Rebalancing
* [postPortfolioSimulationRebalancingRandomWeight](#postportfoliosimulationrebalancingrandomweight) - Random-weight Portfolio Rebalancing

## postPortfolioSimulationRebalancingDriftWeight

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).

References
* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioSimulationRebalancingDriftWeightRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioSimulationRebalancingDriftWeightRequestBody();
    $request->assets = [
        new PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets(),
        new PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets(),
        new PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets(),
    ];
    $request->portfolios = [
        new PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioSimulation->postPortfolioSimulationRebalancingDriftWeight($request);

    if ($response->postPortfolioSimulationRebalancingDriftWeight200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioSimulationRebalancingFixedWeight

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.

References
* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)        


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioSimulationRebalancingFixedWeightRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioSimulationRebalancingFixedWeightRequestBody();
    $request->assets = [
        new PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets(),
    ];
    $request->portfolios = [
        new PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios(),
        new PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios(),
        new PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios(),
        new PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioSimulation->postPortfolioSimulationRebalancingFixedWeight($request);

    if ($response->postPortfolioSimulationRebalancingFixedWeight200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioSimulationRebalancingRandomWeight

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.

References
* [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioSimulationRebalancingRandomWeightRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioSimulationRebalancingRandomWeightRequestBody();
    $request->assets = [
        new PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets(),
        new PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets(),
    ];
    $request->portfolios = 162120;

    $response = $sdk->portfolioSimulation->postPortfolioSimulationRebalancingRandomWeight($request);

    if ($response->postPortfolioSimulationRebalancingRandomWeight200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
