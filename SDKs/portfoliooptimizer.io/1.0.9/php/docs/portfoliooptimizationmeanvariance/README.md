# portfolioOptimizationMeanVariance

### Available Operations

* [postPortfolioOptimizationMaximumReturn](#postportfoliooptimizationmaximumreturn) - Maximum Return Portfolio
* [postPortfolioOptimizationMaximumReturnDiversified](#postportfoliooptimizationmaximumreturndiversified) - Diversified Maximum Return Portfolio
* [postPortfolioOptimizationMaximumReturnSubsetResamplingBased](#postportfoliooptimizationmaximumreturnsubsetresamplingbased) - Subset Resampling-Based Maximum Return Portfolio
* [postPortfolioOptimizationMaximumSharpeRatio](#postportfoliooptimizationmaximumsharperatio) - Maximum Sharpe Ratio Portfolio
* [postPortfolioOptimizationMaximumSharpeRatioDiversified](#postportfoliooptimizationmaximumsharperatiodiversified) - Diversified Maximum Sharpe Ratio Portfolio
* [postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased](#postportfoliooptimizationmaximumsharperatiosubsetresamplingbased) - Subset Resampling-Based Maximum Sharpe Ratio Portfolio
* [postPortfolioOptimizationMeanVarianceEfficient](#postportfoliooptimizationmeanvarianceefficient) - Mean-Variance Efficient Portfolio
* [postPortfolioOptimizationMeanVarianceEfficientDiversified](#postportfoliooptimizationmeanvarianceefficientdiversified) - Diversified Mean-Variance Efficient Portfolio
* [postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased](#postportfoliooptimizationmeanvarianceefficientsubsetresamplingbased) - Subset Resampling-Based Mean-Variance Efficient Portfolio
* [postPortfolioOptimizationMinimumVariance](#postportfoliooptimizationminimumvariance) - Minimum Variance Portfolio
* [postPortfolioOptimizationMinimumVarianceDiversified](#postportfoliooptimizationminimumvariancediversified) - Diversified Minimum Variance Portfolio
* [postPortfolioOptimizationMinimumVarianceSubsetResamplingBased](#postportfoliooptimizationminimumvariancesubsetresamplingbased) - Subset Resampling-Based Minimum Variance Portfolio

## postPortfolioOptimizationMaximumReturn

Compute the asset weights of the maximum return portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumReturnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumReturnRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMaximumReturnRequestBody();
    $request->assets = 162954;
    $request->assetsCovarianceMatrix = [
        [
            8070.23,
            4903.05,
            6400.24,
        ],
        [
            3681.02,
            653.04,
            3127.53,
            7832.35,
        ],
        [
            2883.98,
            704.47,
            2414.18,
            6835.73,
        ],
        [
            3807.29,
            2460.63,
            6339.31,
        ],
    ];
    $request->assetsReturns = [
        9268.8,
        5173.09,
        8539.4,
    ];
    $request->constraints = new PostPortfolioOptimizationMaximumReturnRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            554688,
            427834,
        ],
        [
            822560,
            706575,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            4471.44,
            3605.45,
        ],
        [
            8286.57,
            3631.61,
            9249.67,
            3975.33,
        ],
        [
            7386.83,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        4490.83,
    ];
    $request->constraints->maximumAssetsWeights = [
        9372.85,
        8149.67,
    ];
    $request->constraints->maximumPortfolioExposure = 2572.33;
    $request->constraints->minimumAssetsWeights = [
        3817.6,
        9689.72,
        6971.42,
        9049.49,
    ];
    $request->constraints->minimumPortfolioExposure = 8970.71;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMaximumReturn($request);

    if ($response->postPortfolioOptimizationMaximumReturn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMaximumReturnDiversified

Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumReturnDiversifiedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumReturnDiversifiedRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMaximumReturnDiversifiedRequestBody();
    $request->assets = 296556;
    $request->assetsCovarianceMatrix = [
        [
            2415.45,
            2494.2,
            2282.63,
            1059.06,
        ],
    ];
    $request->assetsReturns = [
        9509.53,
        8915.23,
    ];
    $request->constraints = new PostPortfolioOptimizationMaximumReturnDiversifiedRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            689768,
            385237,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            7307.09,
            1138.16,
            8817.21,
            6311.26,
        ],
    ];
    $request->constraints->deltaReturn = 2724.37;
    $request->constraints->deltaVolatility = 1328.15;
    $request->constraints->maximumAssetsGroupsWeights = [
        3742.44,
        3742.96,
    ];
    $request->constraints->maximumAssetsWeights = [
        7487.89,
        6801.16,
    ];
    $request->constraints->maximumPortfolioExposure = 2378.07;
    $request->constraints->minimumAssetsWeights = [
        1718.53,
        5039.34,
        4492.92,
        2962.42,
    ];
    $request->constraints->minimumPortfolioExposure = 3044.68;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMaximumReturnDiversified($request);

    if ($response->postPortfolioOptimizationMaximumReturnDiversified200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMaximumReturnSubsetResamplingBased

Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodyConstraints;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBody();
    $request->assets = 885963;
    $request->assetsCovarianceMatrix = [
        [
            2377.42,
            7383.91,
        ],
        [
            5553.61,
            9425.84,
            2015.17,
        ],
        [
            5485.19,
            8672.9,
            5196.43,
        ],
        [
            3487.83,
            7507.65,
            246.19,
            6995.75,
        ],
    ];
    $request->assetsReturns = [
        9679.66,
    ];
    $request->constraints = new PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            707918,
            451822,
            709072,
            70869,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            6719.07,
            1523.54,
        ],
        [
            4174.86,
            6960.77,
        ],
        [
            3783.26,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        1000.32,
        3828.08,
        9602.57,
    ];
    $request->constraints->maximumAssetsWeights = [
        724.34,
        9677.95,
        193,
        5468.85,
    ];
    $request->constraints->maximumPortfolioExposure = 9795.74;
    $request->constraints->minimumAssetsWeights = [
        1484.78,
        5922.31,
    ];
    $request->constraints->minimumPortfolioExposure = 2587.02;
    $request->subsetPortfolios = 896762;
    $request->subsetPortfoliosAggregationMethod = PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum::AVERAGE;
    $request->subsetPortfoliosEnumerationMethod = PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum::COMPLETE;
    $request->subsetSize = 579912;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMaximumReturnSubsetResamplingBased($request);

    if ($response->postPortfolioOptimizationMaximumReturnSubsetResamplingBased200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMaximumSharpeRatio

Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumSharpeRatioRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMaximumSharpeRatioRequestBody();
    $request->assets = 552078;
    $request->assetsCovarianceMatrix = [
        [
            2730.09,
            4554.44,
        ],
        [
            4017.13,
            254.97,
            2484.13,
            8880.44,
        ],
        [
            7086.09,
            3103.81,
            2777.73,
        ],
        [
            8948.64,
            5249.7,
        ],
    ];
    $request->assetsReturns = [
        7505.95,
    ];
    $request->constraints = new PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            329543,
            924159,
        ],
        [
            862319,
            168576,
            48690,
            901483,
        ],
        [
            329935,
            446135,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            5124.52,
        ],
        [
            5106.29,
            7400.98,
        ],
        [
            6805.15,
            5300.89,
        ],
        [
            9447.08,
            7105.29,
            8928.63,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        6771.15,
    ];
    $request->constraints->maximumAssetsWeights = [
        6390.28,
        6762.43,
    ];
    $request->constraints->maximumPortfolioExposure = 5483.61;
    $request->constraints->minimumAssetsWeights = [
        2726.83,
        5436.78,
        1482.68,
        2826.99,
    ];
    $request->constraints->minimumPortfolioExposure = 8563.03;
    $request->riskFreeRate = 302.35;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMaximumSharpeRatio($request);

    if ($response->postPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMaximumSharpeRatioDiversified

Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBody();
    $request->assets = 635057;
    $request->assetsCovarianceMatrix = [
        [
            78.84,
            4602.2,
        ],
        [
            245.27,
            5305.37,
        ],
        [
            9221.12,
            3611.51,
            894.94,
        ],
    ];
    $request->assetsReturns = [
        4059.42,
        1536.27,
        243.13,
    ];
    $request->constraints = new PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            906172,
            622231,
        ],
        [
            279068,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            6908.94,
        ],
        [
            994.16,
        ],
        [
            2897.76,
            6952.7,
            5390.74,
        ],
        [
            7241.48,
            9488.61,
            3888.67,
        ],
    ];
    $request->constraints->deltaReturn = 27.03;
    $request->constraints->deltaVolatility = 2270.84;
    $request->constraints->maximumAssetsGroupsWeights = [
        4548.6,
        6003.92,
        9720.83,
    ];
    $request->constraints->maximumAssetsWeights = [
        8338.19,
        9627.71,
        9147.91,
    ];
    $request->constraints->maximumPortfolioExposure = 168.71;
    $request->constraints->minimumAssetsWeights = [
        6964.83,
        4406.66,
        8136.79,
    ];
    $request->constraints->minimumPortfolioExposure = 6850.92;
    $request->riskFreeRate = 5098.07;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMaximumSharpeRatioDiversified($request);

    if ($response->postPortfolioOptimizationMaximumSharpeRatioDiversified200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased

Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodyConstraints;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBody();
    $request->assets = 648598;
    $request->assetsCovarianceMatrix = [
        [
            7908.4,
        ],
        [
            972.43,
            5424.57,
            4420.36,
            9911.42,
        ],
    ];
    $request->assetsReturns = [
        3831.03,
        6939.57,
        8066.7,
    ];
    $request->constraints = new PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            227759,
            826825,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            6232.95,
            8872.65,
            8869.61,
        ],
        [
            6188.26,
            3283.03,
            1334.61,
            4044.25,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        5446.47,
        8717.86,
        6216.93,
        5027.21,
    ];
    $request->constraints->maximumAssetsWeights = [
        9223.48,
        5421.29,
    ];
    $request->constraints->maximumPortfolioExposure = 5413.81;
    $request->constraints->minimumAssetsWeights = [
        9233.06,
    ];
    $request->constraints->minimumPortfolioExposure = 6806.97;
    $request->riskFreeRate = 8298.98;
    $request->subsetPortfolios = 287119;
    $request->subsetPortfoliosAggregationMethod = PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum::MEDIAN;
    $request->subsetPortfoliosEnumerationMethod = PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum::COMPLETE;
    $request->subsetSize = 919783;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased($request);

    if ($response->postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMeanVarianceEfficient

Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

> A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMeanVarianceEfficientRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMeanVarianceEfficientRequestBody();
    $request->assets = 116098;
    $request->assetsCovarianceMatrix = [
        [
            1747.72,
        ],
    ];
    $request->assetsReturns = [
        3891.35,
        2465.35,
    ];
    $request->constraints = new PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            300029,
            906355,
            160467,
        ],
        [
            886305,
            597937,
            446394,
        ],
        [
            907876,
        ],
        [
            160230,
            145870,
            661118,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            6255.28,
            764.86,
        ],
        [
            6964.63,
            9109.94,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        8784.93,
    ];
    $request->constraints->maximumAssetsWeights = [
        4341.56,
    ];
    $request->constraints->maximumPortfolioExposure = 599.44;
    $request->constraints->minimumAssetsWeights = [
        610.78,
        4746.68,
        9077.33,
    ];
    $request->constraints->minimumPortfolioExposure = 1843.62;
    $request->constraints->portfolioReturn = 7398.84;
    $request->constraints->portfolioVolatility = 4347.61;
    $request->constraints->riskTolerance = 8980.63;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMeanVarianceEfficient($request);

    if ($response->postPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMeanVarianceEfficientDiversified

Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

> A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBody();
    $request->assets = 187552;
    $request->assetsCovarianceMatrix = [
        [
            5289.4,
            5230.06,
            3044.46,
        ],
        [
            9979.63,
            30.99,
        ],
        [
            5973.03,
            4706.49,
        ],
    ];
    $request->assetsReturns = [
        3782.45,
        51.89,
        9795.27,
    ];
    $request->constraints = new PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            663866,
        ],
        [
            293144,
            680349,
        ],
        [
            63207,
        ],
        [
            607249,
            309251,
            477646,
            403218,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            2384.13,
            8906.53,
            5145.13,
        ],
        [
            3679.27,
            9282.19,
        ],
    ];
    $request->constraints->deltaReturn = 4565.2;
    $request->constraints->deltaVolatility = 5920.81;
    $request->constraints->maximumAssetsGroupsWeights = [
        4317.85,
        9704.94,
    ];
    $request->constraints->maximumAssetsWeights = [
        1334.39,
        3545.06,
        968.04,
    ];
    $request->constraints->maximumPortfolioExposure = 6570.2;
    $request->constraints->minimumAssetsWeights = [
        6523.09,
        5910.27,
    ];
    $request->constraints->minimumPortfolioExposure = 8217.19;
    $request->constraints->portfolioReturn = 6591.77;
    $request->constraints->portfolioVolatility = 4027.67;
    $request->constraints->riskTolerance = 3972.57;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMeanVarianceEfficientDiversified($request);

    if ($response->postPortfolioOptimizationMeanVarianceEfficientDiversified200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased

Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodyConstraints;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBody();
    $request->assets = 37565;
    $request->assetsCovarianceMatrix = [
        [
            3518.93,
            4481.43,
            7214.07,
            9376.36,
        ],
        [
            6720.41,
            8130.54,
            2666.97,
        ],
        [
            5640.64,
            8897.94,
            9569.33,
            7645.62,
        ],
        [
            6982.49,
        ],
    ];
    $request->assetsReturns = [
        3354.98,
        820.57,
    ];
    $request->constraints = new PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            62636,
            21688,
            241901,
            137251,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            5219.96,
            8710.83,
        ],
        [
            1794.1,
            9587.41,
            4332.79,
            1173.2,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        1070.04,
        5834.04,
    ];
    $request->constraints->maximumAssetsWeights = [
        9364.69,
        7453.98,
        9407.82,
    ];
    $request->constraints->maximumPortfolioExposure = 8481.51;
    $request->constraints->minimumAssetsWeights = [
        9358.33,
    ];
    $request->constraints->minimumPortfolioExposure = 5962.11;
    $request->constraints->portfolioReturn = 9834.27;
    $request->constraints->portfolioVolatility = 8918.01;
    $request->constraints->riskTolerance = 3998.02;
    $request->subsetPortfolios = 780931;
    $request->subsetPortfoliosAggregationMethod = PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum::AVERAGE;
    $request->subsetPortfoliosEnumerationMethod = PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum::COMPLETE;
    $request->subsetSize = 147808;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased($request);

    if ($response->postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMinimumVariance

Compute the asset weights of the minimum variance portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumVarianceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMinimumVarianceRequestBody();
    $request->assets = 764995;
    $request->assetsCovarianceMatrix = [
        [
            6567.62,
        ],
        [
            8620.63,
            89.31,
            972.58,
            902.33,
        ],
        [
            6191.83,
            5810.82,
        ],
    ];
    $request->assetsReturns = [
        2415.57,
        965.62,
    ];
    $request->constraints = new PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            859581,
            896582,
            58534,
            271113,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            1158.34,
            4797.54,
        ],
        [
            5083.9,
            9799.63,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        4237.06,
        999.58,
        8571.25,
        396.5,
    ];
    $request->constraints->maximumAssetsWeights = [
        4837.06,
    ];
    $request->constraints->maximumPortfolioExposure = 2712.52;
    $request->constraints->minimumAssetsWeights = [
        4037.93,
        2352.63,
    ];
    $request->constraints->minimumPortfolioExposure = 3998.12;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMinimumVariance($request);

    if ($response->postPortfolioOptimizationMinimumVariance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMinimumVarianceDiversified

Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBody();
    $request->assets = 58870;
    $request->assetsCovarianceMatrix = [
        [
            3447.18,
        ],
        [
            7137.67,
            3996.67,
            6391.87,
            3813.97,
        ],
        [
            219.73,
            4317.6,
        ],
    ];
    $request->assetsReturns = [
        6145.28,
        6616.07,
    ];
    $request->constraints = new PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            822407,
            913992,
            653421,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            3240.83,
            5369.23,
            3162.2,
        ],
        [
            8333.16,
        ],
        [
            7758.03,
            4053.73,
        ],
    ];
    $request->constraints->deltaReturn = 2811.53;
    $request->constraints->deltaVolatility = 3210.43;
    $request->constraints->maximumAssetsGroupsWeights = [
        299.5,
        5615.77,
        7372.54,
    ];
    $request->constraints->maximumAssetsWeights = [
        1097.84,
        5308.6,
    ];
    $request->constraints->maximumPortfolioExposure = 6063.08;
    $request->constraints->minimumAssetsWeights = [
        7032.18,
    ];
    $request->constraints->minimumPortfolioExposure = 6656.78;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMinimumVarianceDiversified($request);

    if ($response->postPortfolioOptimizationMinimumVarianceDiversified200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMinimumVarianceSubsetResamplingBased

Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodyConstraints;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBody();
    $request->assets = 634786;
    $request->assetsCovarianceMatrix = [
        [
            8892.88,
            1032.98,
            6821.19,
            8671.68,
        ],
    ];
    $request->assetsReturns = [
        291.9,
        12.07,
        5349.17,
        9372.19,
    ];
    $request->constraints = new PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            524184,
            796320,
            365100,
            992074,
        ],
        [
            355225,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            5181.5,
            7706.75,
            8427.77,
            7205.28,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        6334.15,
        2228.64,
    ];
    $request->constraints->maximumAssetsWeights = [
        805.32,
        5372.79,
    ];
    $request->constraints->maximumPortfolioExposure = 853.11;
    $request->constraints->minimumAssetsWeights = [
        2213.96,
        86.89,
    ];
    $request->constraints->minimumPortfolioExposure = 1000.14;
    $request->subsetPortfolios = 24944;
    $request->subsetPortfoliosAggregationMethod = PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum::AVERAGE;
    $request->subsetPortfoliosEnumerationMethod = PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBodySubsetPortfoliosEnumerationMethodEnum::COMPLETE;
    $request->subsetSize = 66149;

    $response = $sdk->portfolioOptimizationMeanVariance->postPortfolioOptimizationMinimumVarianceSubsetResamplingBased($request);

    if ($response->postPortfolioOptimizationMinimumVarianceSubsetResamplingBased200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
