# portfolioAnalysis

### Available Operations

* [postPortfolioAnalysisAlpha](#postportfolioanalysisalpha) - Alpha
* [postPortfolioAnalysisBeta](#postportfolioanalysisbeta) - Beta
* [postPortfolioAnalysisContributionsReturn](#postportfolioanalysiscontributionsreturn) - Return Contributions
* [postPortfolioAnalysisContributionsRisk](#postportfolioanalysiscontributionsrisk) - Risk Contributions
* [postPortfolioAnalysisCorrelationSpectrum](#postportfolioanalysiscorrelationspectrum) - Correlation Spectrum
* [postPortfolioAnalysisDiversificationRatio](#postportfolioanalysisdiversificationratio) - Diversification Ratio
* [postPortfolioAnalysisDrawdowns](#postportfolioanalysisdrawdowns) - Drawdowns
* [postPortfolioAnalysisEffectiveNumberOfBets](#postportfolioanalysiseffectivenumberofbets) - Effective Number of Bets
* [postPortfolioAnalysisFactorsExposures](#postportfolioanalysisfactorsexposures) - Factor Exposures
* [postPortfolioAnalysisMeanVarianceEfficientFrontier](#postportfolioanalysismeanvarianceefficientfrontier) - Mean-Variance Efficient Frontier
* [postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier](#postportfolioanalysismeanvarianceminimumvariancefrontier) - Mean-Variance Minimum Variance Frontier
* [postPortfolioAnalysisReturn](#postportfolioanalysisreturn) - Arithmetic Return
* [postPortfolioAnalysisReturnsAverage](#postportfolioanalysisreturnsaverage) - Arithmetic Average Return
* [postPortfolioAnalysisTrackingError](#postportfolioanalysistrackingerror) - Tracking Error
* [postPortfolioAnalysisUlcerIndex](#postportfolioanalysisulcerindex) - Ulcer Index
* [postPortfolioAnalysisUlcerPerformanceIndex](#postportfolioanalysisulcerperformanceindex) - Ulcer Performance Index
* [postPortfolioAnalysisVolatility](#postportfolioanalysisvolatility) - Volatility

## postPortfolioAnalysisAlpha

Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisAlphaRequestBody1();
    $request->benchmarkReturns = [
        3540.47,
        5908.73,
        5518.16,
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisAlphaRequestBody1Portfolios(),
        new PostPortfolioAnalysisAlphaRequestBody1Portfolios(),
        new PostPortfolioAnalysisAlphaRequestBody1Portfolios(),
    ];
    $request->riskFreeRate = 336.25;

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisAlpha($request);

    if ($response->postPortfolioAnalysisAlpha200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisBeta

Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisBetaRequestBody2();
    $request->benchmarkReturns = [
        6521.03,
        3209.97,
        4314.18,
        2212.62,
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisBetaRequestBody2Portfolios(),
        new PostPortfolioAnalysisBetaRequestBody2Portfolios(),
        new PostPortfolioAnalysisBetaRequestBody2Portfolios(),
        new PostPortfolioAnalysisBetaRequestBody2Portfolios(),
    ];
    $request->riskFreeReturns = [
        3675.62,
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisBeta($request);

    if ($response->postPortfolioAnalysisBeta200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisContributionsReturn

Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisContributionsReturnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisContributionsReturnRequestBody();
    $request->assets = 97260;
    $request->assetsGroups = [
        [
            891924,
            260341,
            806194,
            537023,
        ],
        [
            447926,
            100226,
            99569,
        ],
    ];
    $request->assetsReturns = [
        3523.12,
        7142.42,
        4692.49,
        9988.48,
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios(),
        new PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios(),
        new PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios(),
        new PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisContributionsReturn($request);

    if ($response->postPortfolioAnalysisContributionsReturn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisContributionsRisk

Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisContributionsRiskRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisContributionsRiskRequestBody();
    $request->assets = 149448;
    $request->assetsCovarianceMatrix = [
        [
            375.59,
            1624.93,
            5083.15,
            6155.6,
        ],
        [
            1238.2,
        ],
        [
            8480.09,
            8649.34,
            8073.19,
            4113.97,
        ],
        [
            1399.72,
            4071.83,
            332.22,
        ],
    ];
    $request->assetsGroups = [
        [
            697429,
            373291,
            453543,
            420075,
        ],
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios(),
        new PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios(),
        new PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisContributionsRisk($request);

    if ($response->postPortfolioAnalysisContributionsRisk200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisCorrelationSpectrum

Compute the correlation spectrum of one or several portfolio(s).

References
* [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisCorrelationSpectrumRequestBody1();
    $request->assets = 866383;
    $request->assetsCovarianceMatrix = [
        [
            166.27,
            8558.04,
            2307.42,
            117.14,
        ],
        [
            3599.78,
            9441.24,
            7299.91,
            7499.99,
        ],
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisCorrelationSpectrumRequestBody1Portfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisCorrelationSpectrum($request);

    if ($response->postPortfolioAnalysisCorrelationSpectrum200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisDiversificationRatio

Compute the diversification ratio of one or several portfolio(s).

References
* [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
* [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisDiversificationRatioRequestBody1();
    $request->assets = 521037;
    $request->assetsCovarianceMatrix = [
        [
            3389.85,
        ],
        [
            1794.9,
        ],
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisDiversificationRatioRequestBody1Portfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisDiversificationRatio($request);

    if ($response->postPortfolioAnalysisDiversificationRatio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisDrawdowns

Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).

References
* [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))        


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisDrawdownsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisDrawdownsRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisDrawdownsRequestBody();
    $request->portfolios = [
        new PostPortfolioAnalysisDrawdownsRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisDrawdowns($request);

    if ($response->postPortfolioAnalysisDrawdowns200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisEffectiveNumberOfBets

Compute the effective number of bets of one or several portfolio(s).

References
* [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276632)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisEffectiveNumberOfBetsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyFactorsExtractionMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisEffectiveNumberOfBetsRequestBody();
    $request->assets = 793698;
    $request->assetsCovarianceMatrix = [
        [
            8745.73,
        ],
        [
            9441.2,
            9280.82,
        ],
    ];
    $request->factorsExtractionMethod = PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyFactorsExtractionMethodEnum::EXACT_MINIMUM_LINEAR_TORSION;
    $request->portfolios = [
        new PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios(),
        new PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios(),
        new PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisEffectiveNumberOfBets($request);

    if ($response->postPortfolioAnalysisEffectiveNumberOfBets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisFactorsExposures

Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.

References
* [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short) 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisFactorsExposuresRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisFactorsExposuresRequestBodyFactors;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisFactorsExposuresRequestBody();
    $request->factors = [
        new PostPortfolioAnalysisFactorsExposuresRequestBodyFactors(),
        new PostPortfolioAnalysisFactorsExposuresRequestBodyFactors(),
        new PostPortfolioAnalysisFactorsExposuresRequestBodyFactors(),
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisFactorsExposures($request);

    if ($response->postPortfolioAnalysisFactorsExposures200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisMeanVarianceEfficientFrontier

Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraint

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody();
    $request->assets = 783645;
    $request->assetsCovarianceMatrix = [
        [
            6214.79,
            503.7,
            5772.29,
        ],
    ];
    $request->assetsReturns = [
        2378.93,
        9923.97,
        9342.14,
    ];
    $request->constraints = new PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            679091,
            535633,
            864282,
        ],
        [
            750844,
            730122,
            964490,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            3982.21,
            2123.9,
            2098.43,
        ],
        [
            1861.93,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        9443.73,
    ];
    $request->constraints->maximumAssetsWeights = [
        7395.51,
        4521.09,
        4904.59,
    ];
    $request->constraints->maximumPortfolioExposure = 9702.37;
    $request->constraints->minimumAssetsWeights = [
        6805.45,
    ];
    $request->constraints->minimumPortfolioExposure = 2543.56;
    $request->portfolios = 85295;

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisMeanVarianceEfficientFrontier($request);

    if ($response->postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier

Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraint

> This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody();
    $request->assets = 58029;
    $request->assetsCovarianceMatrix = [
        [
            4878.38,
            3117.96,
        ],
    ];
    $request->assetsReturns = [
        6963.44,
        9764.05,
        3777.52,
        6176.58,
    ];
    $request->constraints = new PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints();
    $request->constraints->assetsGroups = [
        [
            24678,
            854614,
            67249,
        ],
    ];
    $request->constraints->assetsGroupsMatrix = [
        [
            4785.96,
            4536.97,
            6770.82,
        ],
        [
            6070.45,
            8966.72,
            7146.97,
        ],
        [
            4694.97,
            2168.97,
            4560.15,
            6630.78,
        ],
    ];
    $request->constraints->maximumAssetsGroupsWeights = [
        2633.22,
        1372.2,
        206.51,
        2292.19,
    ];
    $request->constraints->maximumAssetsWeights = [
        8815.86,
        3200.17,
        9044.25,
        3834.64,
    ];
    $request->constraints->maximumPortfolioExposure = 6457.85;
    $request->constraints->minimumAssetsWeights = [
        3246.83,
        8310.49,
        5197.11,
    ];
    $request->constraints->minimumPortfolioExposure = 6289.82;
    $request->portfolios = 55;

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier($request);

    if ($response->postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisReturn

Compute the arithmetic return of one or several portfolio(s) from either:  
* Portfolio assets arithmetic returns
* Portfolio values

References
* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisReturnRequestBody2();
    $request->portfolios = [
        new PostPortfolioAnalysisReturnRequestBody2Portfolios(),
        new PostPortfolioAnalysisReturnRequestBody2Portfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisReturn($request);

    if ($response->postPortfolioAnalysisReturn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisReturnsAverage

Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).

References
* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisReturnsAverageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisReturnsAverageRequestBody();
    $request->portfolios = [
        new PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios(),
        new PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisReturnsAverage($request);

    if ($response->postPortfolioAnalysisReturnsAverage200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisTrackingError

Compute the tracking error between a benchmark and one or several portfolio(s).

References
* [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error) 
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisTrackingErrorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisTrackingErrorRequestBody();
    $request->benchmarkReturns = [
        7980.47,
        8853.38,
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisTrackingError($request);

    if ($response->postPortfolioAnalysisTrackingError200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisUlcerIndex

Compute the Ulcer Index of one or several portfolio(s).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisUlcerIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisUlcerIndexRequestBody();
    $request->portfolios = [
        new PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios(),
        new PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios(),
        new PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios(),
    ];
    $request->riskFreeRate = 9527.92;

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisUlcerIndex($request);

    if ($response->postPortfolioAnalysisUlcerIndex200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisUlcerPerformanceIndex

Compute the Ulcer Performance Index of one or several portfolio(s).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisUlcerPerformanceIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisUlcerPerformanceIndexRequestBody();
    $request->portfolios = [
        new PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios(),
        new PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios(),
    ];
    $request->riskFreeRate = 6874.88;

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisUlcerPerformanceIndex($request);

    if ($response->postPortfolioAnalysisUlcerPerformanceIndex200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisVolatility

Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:  
* Portfolio assets covariance matrix
* Portfolio values

References
* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisVolatilityRequestBody1();
    $request->assets = 215507;
    $request->assetsCovarianceMatrix = [
        [
            2294.42,
            7308.56,
            8802.98,
            2539.41,
        ],
        [
            2133.12,
            9574.51,
        ],
        [
            4717.52,
            256.62,
            7115.84,
        ],
        [
            1536.94,
        ],
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisVolatilityRequestBody1Portfolios(),
        new PostPortfolioAnalysisVolatilityRequestBody1Portfolios(),
    ];

    $response = $sdk->portfolioAnalysis->postPortfolioAnalysisVolatility($request);

    if ($response->postPortfolioAnalysisVolatility200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
