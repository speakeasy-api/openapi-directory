# portfolioAnalysisValueAtRisk

### Available Operations

* [postPortfolioAnalysisValueAtRiskCornishFisher](#postportfolioanalysisvalueatriskcornishfisher) - Cornish-Fisher Value At Risk
* [postPortfolioAnalysisValueAtRiskCornishFisherCorrected](#postportfolioanalysisvalueatriskcornishfishercorrected) - Corrected Cornish-Fisher Value At Risk
* [postPortfolioAnalysisValueAtRiskGaussian](#postportfolioanalysisvalueatriskgaussian) - Gaussian Value At Risk
* [postPortfolioAnalysisValueAtRiskHistorical](#postportfolioanalysisvalueatriskhistorical) - Historical Value At Risk

## postPortfolioAnalysisValueAtRiskCornishFisher

Compute the Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.

References
* [Laurent Favre and José-Antonio Galeano, Mean-Modified Value-at-Risk Optimization with Hedge Funds, The Journal of Alternative Investments Fall 2002, 5 (2) 21-25](https://jai.pm-research.com/content/5/2/21)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskCornishFisherRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisValueAtRiskCornishFisherRequestBody();
    $request->confidenceLevel = 3556.13;
    $request->portfolios = [
        new PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios(),
        new PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios(),
        new PostPortfolioAnalysisValueAtRiskCornishFisherRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysisValueAtRisk->postPortfolioAnalysisValueAtRiskCornishFisher($request);

    if ($response->postPortfolioAnalysisValueAtRiskCornishFisher200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisValueAtRiskCornishFisherCorrected

Compute the corrected Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.

References
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBody();
    $request->confidenceLevel = 9404.32;
    $request->portfolios = [
        new PostPortfolioAnalysisValueAtRiskCornishFisherCorrectedRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysisValueAtRisk->postPortfolioAnalysisValueAtRiskCornishFisherCorrected($request);

    if ($response->postPortfolioAnalysisValueAtRiskCornishFisherCorrected200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisValueAtRiskGaussian

Compute the Gaussian value at risk of one or several portfolio(s) from portfolio values.

References
* [Ballotta, Laura and Fusai, Gianluca, A Gentle Introduction to Value at Risk](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2942138)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskGaussianRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisValueAtRiskGaussianRequestBody();
    $request->confidenceLevel = 7653.26;
    $request->portfolios = [
        new PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios(),
        new PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios(),
        new PostPortfolioAnalysisValueAtRiskGaussianRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysisValueAtRisk->postPortfolioAnalysisValueAtRiskGaussian($request);

    if ($response->postPortfolioAnalysisValueAtRiskGaussian200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisValueAtRiskHistorical

Compute the historical value at risk of one or several portfolio(s) from portfolio values.

References
* [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
* [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskHistoricalRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskHistoricalRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisValueAtRiskHistoricalRequestBody();
    $request->confidenceLevel = 7486.64;
    $request->portfolios = [
        new PostPortfolioAnalysisValueAtRiskHistoricalRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysisValueAtRisk->postPortfolioAnalysisValueAtRiskHistorical($request);

    if ($response->postPortfolioAnalysisValueAtRiskHistorical200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
