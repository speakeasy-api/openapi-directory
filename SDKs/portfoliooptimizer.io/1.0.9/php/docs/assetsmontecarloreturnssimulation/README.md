# assetsMonteCarloReturnsSimulation

### Available Operations

* [postAssetsReturnsSimulationMonteCarloCornishFisher](#postassetsreturnssimulationmontecarlocornishfisher) - Cornish-Fisher Distribution
* [postAssetsReturnsSimulationMonteCarloCornishFisherCorrected](#postassetsreturnssimulationmontecarlocornishfishercorrected) - Corrected Cornish-Fisher Distribution
* [postAssetsReturnsSimulationMonteCarloGaussian](#postassetsreturnssimulationmontecarlogaussian) - Gaussian Distribution

## postAssetsReturnsSimulationMonteCarloCornishFisher

Simulate the return(s) of one asset for one or several time period(s) using a Cornish-Fisher distribution.

References
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–Fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsSimulationMonteCarloCornishFisherRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsReturnsSimulationMonteCarloCornishFisherRequestBody();
    $request->assetAverageReturnParameter = 6389.21;
    $request->assetKurtosisParameter = 2230.81;
    $request->assetSkewnessParameter = 8915.55;
    $request->assetVolatilityParameter = 9527.49;
    $request->simulations = 680056;
    $request->simulationsLength = 447125;

    $response = $sdk->assetsMonteCarloReturnsSimulation->postAssetsReturnsSimulationMonteCarloCornishFisher($request);

    if ($response->postAssetsReturnsSimulationMonteCarloCornishFisher200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsReturnsSimulationMonteCarloCornishFisherCorrected

Simulate the return(s) of one asset for one or several time period(s) using a corrected Cornish-Fisher distribution.

References
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsSimulationMonteCarloCornishFisherCorrectedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsReturnsSimulationMonteCarloCornishFisherCorrectedRequestBody();
    $request->assetAverageReturn = 4491.98;
    $request->assetKurtosis = 8464.09;
    $request->assetSkewness = 9785.71;
    $request->assetVolatility = 6994.79;
    $request->simulations = 116202;
    $request->simulationsLength = 297437;

    $response = $sdk->assetsMonteCarloReturnsSimulation->postAssetsReturnsSimulationMonteCarloCornishFisherCorrected($request);

    if ($response->postAssetsReturnsSimulationMonteCarloCornishFisherCorrected200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsReturnsSimulationMonteCarloGaussian

Simulate the return(s) of one asset for one or several time period(s) using a Gaussian distribution.

References
* [Wikipedia, Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsSimulationMonteCarloGaussianRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsReturnsSimulationMonteCarloGaussianRequestBody();
    $request->assetAverageReturn = 7670.24;
    $request->assetVolatility = 8137.98;
    $request->simulations = 411820;
    $request->simulationsLength = 396506;

    $response = $sdk->assetsMonteCarloReturnsSimulation->postAssetsReturnsSimulationMonteCarloGaussian($request);

    if ($response->postAssetsReturnsSimulationMonteCarloGaussian200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
