# portfolioAnalysisConditionalValueAtRisk

### Available Operations

* [postPortfolioAnalysisValueAtRiskConditionalCornishFisher](#postportfolioanalysisvalueatriskconditionalcornishfisher) - Cornish-Fisher Conditional Value At Risk
* [postPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected](#postportfolioanalysisvalueatriskconditionalcornishfishercorrected) - Corrected Cornish-Fisher Conditional Value At Risk
* [postPortfolioAnalysisValueAtRiskConditionalGaussian](#postportfolioanalysisvalueatriskconditionalgaussian) - Gaussian Conditional Value At Risk
* [postPortfolioAnalysisValueAtRiskConditionalHistorical](#postportfolioanalysisvalueatriskconditionalhistorical) - Historical Conditional Value At Risk

## postPortfolioAnalysisValueAtRiskConditionalCornishFisher

Compute the Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151).
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBody();
    $request->confidenceLevel = 7304.42;
    $request->portfolios = [
        new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios(),
        new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysisConditionalValueAtRisk->postPortfolioAnalysisValueAtRiskConditionalCornishFisher($request);

    if ($response->postPortfolioAnalysisValueAtRiskConditionalCornishFisher200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected

Compute the corrected Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.

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
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBody();
    $request->confidenceLevel = 6462.65;
    $request->portfolios = [
        new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios(),
        new PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysisConditionalValueAtRisk->postPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected($request);

    if ($response->postPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisValueAtRiskConditionalGaussian

Compute the Gaussian conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBody();
    $request->confidenceLevel = 2148.8;
    $request->portfolios = [
        new PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBodyPortfolios(),
        new PostPortfolioAnalysisValueAtRiskConditionalGaussianRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysisConditionalValueAtRisk->postPortfolioAnalysisValueAtRiskConditionalGaussian($request);

    if ($response->postPortfolioAnalysisValueAtRiskConditionalGaussian200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPortfolioAnalysisValueAtRiskConditionalHistorical

Compute the historical conditional value at risk of one or several portfolio(s) from portfolio values.

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
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBody();
    $request->confidenceLevel = 1864.58;
    $request->portfolios = [
        new PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios(),
        new PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios(),
        new PostPortfolioAnalysisValueAtRiskConditionalHistoricalRequestBodyPortfolios(),
    ];

    $response = $sdk->portfolioAnalysisConditionalValueAtRisk->postPortfolioAnalysisValueAtRiskConditionalHistorical($request);

    if ($response->postPortfolioAnalysisValueAtRiskConditionalHistorical200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
