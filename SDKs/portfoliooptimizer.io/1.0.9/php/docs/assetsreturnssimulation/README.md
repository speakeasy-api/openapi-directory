# assetsReturnsSimulation

### Available Operations

* [postAssetsReturnsSimulationBootstrap](#postassetsreturnssimulationbootstrap) - Bootstrap

## postAssetsReturnsSimulationBootstrap

Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.

References
* [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full)
* [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data)
* [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsSimulationBootstrapRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsSimulationBootstrapRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsSimulationBootstrapRequestBodyBootstrapMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsReturnsSimulationBootstrapRequestBody();
    $request->assets = [
        new PostAssetsReturnsSimulationBootstrapRequestBodyAssets(),
        new PostAssetsReturnsSimulationBootstrapRequestBodyAssets(),
        new PostAssetsReturnsSimulationBootstrapRequestBodyAssets(),
    ];
    $request->bootstrapAverageBlockLength = 9560.84;
    $request->bootstrapBlockLength = 230533;
    $request->bootstrapMethod = PostAssetsReturnsSimulationBootstrapRequestBodyBootstrapMethodEnum::CIRCULAR_BLOCK;
    $request->simulations = 394869;
    $request->simulationsLength = 423855;

    $response = $sdk->assetsReturnsSimulation->postAssetsReturnsSimulationBootstrap($request);

    if ($response->postAssetsReturnsSimulationBootstrap200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
