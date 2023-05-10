# portfolioAnalysisSharpeRatio

### Available Operations

* [postPortfolioAnalysisSharpeRatio](#postportfolioanalysissharperatio) - Sharpe Ratio
* [postPortfolioAnalysisSharpeRatioBiasAdjusted](#postportfolioanalysissharperatiobiasadjusted) - Bias-Adjusted Sharpe Ratio
* [postPortfolioAnalysisSharpeRatioConfidenceInterval](#postportfolioanalysissharperatioconfidenceinterval) - Sharpe Ratio Confidence Interval
* [postPortfolioAnalysisSharpeRatioProbabilistic](#postportfolioanalysissharperatioprobabilistic) - Probabilistic Sharpe Ratio
* [postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength](#postportfolioanalysissharperatioprobabilisticminimumtrackrecordlength) - Minimum Track Record Length

## postPortfolioAnalysisSharpeRatio

Compute the Sharpe ratio of one or several portfolio(s) from either:
* Portfolio assets arithmetic returns and assets covariance matrix
* Portfolio values

References
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
    $request = new PostPortfolioAnalysisSharpeRatioRequestBody2();
    $request->portfolios = [
        new PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios(),
        new PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios(),
        new PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios(),
        new PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios(),
    ];
    $request->riskFreeRate = 7470.8;

    $response = $sdk->portfolioAnalysisSharpeRatio->postPortfolioAnalysisSharpeRatio($request);

    if ($response->postPortfolioAnalysisSharpeRatio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisSharpeRatioBiasAdjusted

Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.

References
* [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody();
    $request->portfolios = [
        new PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios(),
    ];
    $request->riskFreeRate = 6748.48;

    $response = $sdk->portfolioAnalysisSharpeRatio->postPortfolioAnalysisSharpeRatioBiasAdjusted($request);

    if ($response->postPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisSharpeRatioConfidenceInterval

Build a confidence interval for the Sharpe ratio of one or several portfolio(s).

References
* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyConfidenceIntervalTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody();
    $request->confidenceIntervalType = PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyConfidenceIntervalTypeEnum::LOWER_ONE_SIDED;
    $request->confidenceLevel = 2768.94;
    $request->portfolios = [
        new PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios(),
    ];
    $request->riskFreeRate = 1749.09;

    $response = $sdk->portfolioAnalysisSharpeRatio->postPortfolioAnalysisSharpeRatioConfidenceInterval($request);

    if ($response->postPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisSharpeRatioProbabilistic

Compute the probabilistic Sharpe ratio of one or several portfolio(s).

References
* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)


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
    $request = new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2();
    $request->benchmarkValues = [
        3960.6,
        4631.5,
        5654.21,
    ];
    $request->portfolios = [
        new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(),
        new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(),
        new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(),
        new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(),
    ];
    $request->riskFreeRate = 1832.8;

    $response = $sdk->portfolioAnalysisSharpeRatio->postPortfolioAnalysisSharpeRatioProbabilistic($request);

    if ($response->postPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength

Compute the minimum track record length of one or several portfolio(s).

References
* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)


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
    $request = new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1();
    $request->benchmarkSharpeRatio = 1448.47;
    $request->confidenceLevel = 1649.59;
    $request->portfolios = [
        new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios(),
        new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios(),
    ];
    $request->riskFreeRate = 1248.33;

    $response = $sdk->portfolioAnalysisSharpeRatio->postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength($request);

    if ($response->postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
