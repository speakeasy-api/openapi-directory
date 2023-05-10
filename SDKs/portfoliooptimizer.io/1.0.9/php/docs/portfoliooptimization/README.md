# portfolioOptimization

### Available Operations

* [postPortfolioOptimizationEqualRiskContributions](#postportfoliooptimizationequalriskcontributions) - Equal Risk Contributions Portfolio
* [postPortfolioOptimizationEqualSharpeRatioContributions](#postportfoliooptimizationequalsharperatiocontributions) - Equal Sharpe Ratio Contributions Portfolio
* [postPortfolioOptimizationEqualVolatilityWeighted](#postportfoliooptimizationequalvolatilityweighted) - Equal Volatility Weighted Portfolio
* [postPortfolioOptimizationEqualWeighted](#postportfoliooptimizationequalweighted) - Equal Weighted Portfolio
* [postPortfolioOptimizationHierarchicalRiskParity](#postportfoliooptimizationhierarchicalriskparity) - Hierarchical Risk Parity Portfolio
* [postPortfolioOptimizationHierarchicalRiskParityClusteringBased](#postportfoliooptimizationhierarchicalriskparityclusteringbased) - Hierarchical Clustering-Based Risk Parity Portfolio
* [postPortfolioOptimizationInverseVarianceWeighted](#postportfoliooptimizationinversevarianceweighted) - Inverse Variance Weighted Portfolio
* [postPortfolioOptimizationInverseVolatilityWeighted](#postportfoliooptimizationinversevolatilityweighted) - Inverse Volatility Weighted Portfolio
* [postPortfolioOptimizationMarketCapitalizationWeighted](#postportfoliooptimizationmarketcapitalizationweighted) - Market Capitalization Weighted Portfolio
* [postPortfolioOptimizationMaximumDecorrelation](#postportfoliooptimizationmaximumdecorrelation) - Maximum Decorrelation Portfolio
* [postPortfolioOptimizationMaximumUlcerPerformanceIndex](#postportfoliooptimizationmaximumulcerperformanceindex) - Maximum Ulcer Performance Index Portfolio
* [postPortfolioOptimizationMinimumCorrelation](#postportfoliooptimizationminimumcorrelation) - Minimum Correlation Portfolio
* [postPortfolioOptimizationMinimumUlcerIndex](#postportfoliooptimizationminimumulcerindex) - Minimum Ulcer Index Portfolio
* [postPortfolioOptimizationMostDiversified](#postportfoliooptimizationmostdiversified) - Most Diversified Portfolio

## postPortfolioOptimizationEqualRiskContributions

Compute the asset weights of the equal risk contributions portfolio, optionally subject to:  
* Minimum and maximum weights constraints  

References
 * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationEqualRiskContributionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationEqualRiskContributionsRequestBody();
    $request->assets = 511319;
    $request->assetsCovarianceMatrix = [
        [
            9807,
        ],
    ];
    $request->constraints = new PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints();
    $request->constraints->maximumAssetsWeights = [
        4061.2,
    ];
    $request->constraints->minimumAssetsWeights = [
        5692.11,
        9729.2,
        3436.05,
        9608.35,
    ];

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationEqualRiskContributions($request);

    if ($response->postPortfolioOptimizationEqualRiskContributions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationEqualSharpeRatioContributions

Compute the asset weights of the equal Sharpe Ratio contributions portfolio.

References
 * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody();
    $request->assets = 788873;
    $request->assetsCovarianceMatrix = [
        [
            7740.48,
            3592.71,
        ],
        [
            3994.99,
            811.01,
        ],
        [
            4072.41,
            7752.2,
        ],
        [
            9262.13,
        ],
    ];
    $request->assetsReturns = [
        3253.1,
    ];
    $request->riskFreeRate = 534.27;

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationEqualSharpeRatioContributions($request);

    if ($response->postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationEqualVolatilityWeighted

Compute the asset weights of the equal volatility-weighted portfolio.

References
 * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationEqualVolatilityWeightedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationEqualVolatilityWeightedRequestBody();
    $request->assets = 952871;
    $request->assetsVolatilities = [
        139.48,
        114.27,
        5334.66,
    ];

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationEqualVolatilityWeighted($request);

    if ($response->postPortfolioOptimizationEqualVolatilityWeighted200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationEqualWeighted

Compute the asset weights of the equal-weighted portfolio.

References
 * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationEqualWeightedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationEqualWeightedRequestBody();
    $request->assets = 770581;

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationEqualWeighted($request);

    if ($response->postPortfolioOptimizationEqualWeighted200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationHierarchicalRiskParity

Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)
 * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringOrderingEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationHierarchicalRiskParityRequestBody();
    $request->assets = 304582;
    $request->assetsCovarianceMatrix = [
        [
            795.22,
            2506.22,
            896.03,
            6774.12,
        ],
    ];
    $request->clusteringMethod = PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringMethodEnum::COMPLETE_LINKAGE;
    $request->clusteringOrdering = PostPortfolioOptimizationHierarchicalRiskParityRequestBodyClusteringOrderingEnum::OPTIMAL;
    $request->constraints = new PostPortfolioOptimizationHierarchicalRiskParityRequestBodyConstraints();
    $request->constraints->maximumAssetsWeights = [
        4321.48,
    ];
    $request->constraints->maximumPortfolioExposure = 4205.39;
    $request->constraints->minimumAssetsWeights = [
        5573.69,
        8296.03,
        8605.52,
        3790.34,
    ];
    $request->constraints->minimumPortfolioExposure = 7270.44;

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationHierarchicalRiskParity($request);

    if ($response->postPortfolioOptimizationHierarchicalRiskParity200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationHierarchicalRiskParityClusteringBased

Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)
 * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)
 * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract=3237540)
 * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyAcrossClusterAllocationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringOrderingEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyConstraints;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyWithinClusterAllocationMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBody();
    $request->acrossClusterAllocationMethod = PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyAcrossClusterAllocationMethodEnum::EQUAL_WEIGHTING;
    $request->assets = 270328;
    $request->assetsCovarianceMatrix = [
        [
            5919.35,
        ],
        [
            4764.77,
        ],
    ];
    $request->clusteringMethod = PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringMethodEnum::AVERAGE_LINKAGE;
    $request->clusteringOrdering = PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyClusteringOrderingEnum::R_HCLUST;
    $request->clusters = 262118;
    $request->constraints = new PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyConstraints();
    $request->constraints->maximumAssetsWeights = [
        4561.41,
        5245.93,
    ];
    $request->constraints->maximumPortfolioExposure = 6832.82;
    $request->constraints->minimumAssetsWeights = [
        6956.26,
        8526.35,
    ];
    $request->constraints->minimumPortfolioExposure = 2835.19;
    $request->withinClusterAllocationMethod = PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBodyWithinClusterAllocationMethodEnum::INVERSE_VOLATILITY;

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationHierarchicalRiskParityClusteringBased($request);

    if ($response->postPortfolioOptimizationHierarchicalRiskParityClusteringBased200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationInverseVarianceWeighted

Compute the asset weights of the inverse variance-weighted portfolio.

References
 * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationInverseVarianceWeightedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationInverseVarianceWeightedRequestBody();
    $request->assets = 379927;
    $request->assetsVariances = [
        1811.51,
        5093.42,
        7885.46,
        863.77,
    ];

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationInverseVarianceWeighted($request);

    if ($response->postPortfolioOptimizationInverseVarianceWeighted200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationInverseVolatilityWeighted

Compute the asset weights of the inverse volatility-weighted portfolio.

References
 * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationInverseVolatilityWeightedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationInverseVolatilityWeightedRequestBody();
    $request->assets = 56848;
    $request->assetsVolatilities = [
        6969.97,
        2065.94,
        7786.96,
    ];

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationInverseVolatilityWeighted($request);

    if ($response->postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMarketCapitalizationWeighted

Compute the asset weights of the market capitalization-weighted portfolio.

References
 * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody();
    $request->assets = 847276;
    $request->assetsMarketCapitalizations = [
        6813.59,
        2594.22,
        1783.67,
        3738.13,
    ];

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationMarketCapitalizationWeighted($request);

    if ($response->postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMaximumDecorrelation

Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumDecorrelationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMaximumDecorrelationRequestBody();
    $request->assets = 69859;
    $request->assetsCorrelationMatrix = [
        [
            2728.22,
        ],
        [
            3708.53,
            1334.65,
            1970.54,
            7791.92,
        ],
        [
            9251.64,
            446.12,
        ],
    ];
    $request->assetsReturns = [
        7997.96,
        4908.19,
        769.56,
    ];
    $request->constraints = new PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            882710,
            306810,
            488410,
        ],
        [
            414567,
            959434,
            174112,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            353.62,
            7836.48,
        ],
        [
            5564.29,
            5100.17,
        ],
        [
            5361.78,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        6813.93,
    ];
    $request->constraints->maximumAssetsWeights = [
        2775.96,
        5392.24,
        1288.6,
    ];
    $request->constraints->maximumPortfolioExposure = 3256.85;
    $request->constraints->minimumAssetsWeights = [
        1470.14,
        9564.06,
    ];
    $request->constraints->minimumPortfolioExposure = 1598.7;

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationMaximumDecorrelation($request);

    if ($response->postPortfolioOptimizationMaximumDecorrelation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMaximumUlcerPerformanceIndex

Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

Notes:  
* This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index

References
 * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBody();
    $request->assets = [
        new PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyAssets(),
    ];
    $request->constraints = new PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            578922,
            543806,
            92260,
            456911,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            829.71,
            4586.04,
            8003.79,
            7241.68,
        ],
        [
            3990.25,
            934.59,
            9040.45,
            4263.06,
        ],
        [
            4732.21,
            6996.22,
            5801.97,
        ],
        [
            7162.44,
            7567.79,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        6360.61,
    ];
    $request->constraints->maximumAssetsWeights = [
        2400.2,
        7669.64,
        1605.38,
    ];
    $request->constraints->maximumPortfolioExposure = 97.66;
    $request->constraints->minimumAssetsWeights = [
        3082.86,
        9591.67,
        2328.65,
        4581.39,
    ];
    $request->constraints->minimumPortfolioExposure = 5034.27;
    $request->riskFreeRate = 5909.84;

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationMaximumUlcerPerformanceIndex($request);

    if ($response->postPortfolioOptimizationMaximumUlcerPerformanceIndex200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMinimumCorrelation

Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).

References
 * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumCorrelationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMinimumCorrelationRequestBody();
    $request->assets = 953722;
    $request->assetsCorrelationMatrix = [
        [
            4572.23,
            974.68,
            9518.75,
        ],
        [
            5757.51,
            8630.23,
            8207.67,
        ],
        [
            9088.44,
        ],
        [
            8155.24,
            850.01,
            1594.14,
            944.58,
        ],
    ];
    $request->assetsVolatilities = [
        6336.08,
        3984.34,
        9492.98,
    ];

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationMinimumCorrelation($request);

    if ($response->postPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMinimumUlcerIndex

Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumUlcerIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMinimumUlcerIndexRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMinimumUlcerIndexRequestBody();
    $request->assets = [
        new PostPortfolioOptimizationMinimumUlcerIndexRequestBodyAssets(),
    ];
    $request->constraints = new PostPortfolioOptimizationMinimumUlcerIndexRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            447378,
            258684,
        ],
        [
            849039,
            742238,
            33304,
        ],
        [
            958983,
            119771,
        ],
        [
            443879,
            356707,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            5318.49,
        ],
        [
            8453.58,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        5362.75,
        9292.92,
    ];
    $request->constraints->maximumAssetsWeights = [
        996.15,
        6091.78,
        9453.02,
    ];
    $request->constraints->maximumPortfolioExposure = 984.78;
    $request->constraints->minimumAssetsWeights = [
        920.27,
        4541.62,
        559.65,
        3267.01,
    ];
    $request->constraints->minimumPortfolioExposure = 865.32;

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationMinimumUlcerIndex($request);

    if ($response->postPortfolioOptimizationMinimumUlcerIndex200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioOptimizationMostDiversified

Compute the asset weights of the most diversified portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMostDiversifiedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioOptimizationMostDiversifiedRequestBody();
    $request->assets = 232744;
    $request->assetsCovarianceMatrix = [
        [
            8395.13,
            330.74,
            5223.71,
        ],
    ];
    $request->constraints = new PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            428796,
            649832,
            68074,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            324.65,
            2211.61,
        ],
        [
            2531.91,
            7710.89,
            1310.55,
        ],
        [
            120.36,
            4910.25,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        9816.4,
    ];
    $request->constraints->maximumAssetsWeights = [
        2446.51,
        9742.57,
        3743.23,
    ];
    $request->constraints->maximumPortfolioExposure = 9903.45;
    $request->constraints->minimumAssetsWeights = [
        4090.54,
    ];
    $request->constraints->minimumPortfolioExposure = 3100.67;

    $response = $sdk->portfolioOptimization->postPortfolioOptimizationMostDiversified($request);

    if ($response->postPortfolioOptimizationMostDiversified200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
