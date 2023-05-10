# assetsAnalysis

### Available Operations

* [postAssetsAnalysisAbsorptionRatio](#postassetsanalysisabsorptionratio) - Absorption Ratio
* [postAssetsAnalysisTurbulenceIndex](#postassetsanalysisturbulenceindex) - Turbulence Index

## postAssetsAnalysisAbsorptionRatio

Compute the absorption ratio associated to a universe of assets.

References
* [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsAnalysisAbsorptionRatioRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsAnalysisAbsorptionRatioRequestBody();
    $request->assets = 56713;
    $request->assetsCovarianceMatrix = [
        [
            3834.41,
            4776.65,
        ],
        [
            8121.69,
            5288.95,
            4799.77,
            5680.45,
        ],
        [
            9255.97,
            8360.79,
        ],
        [
            3373.96,
        ],
    ];
    $request->assetsCovarianceMatrixEigenvectors = new PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors();
    $request->assetsCovarianceMatrixEigenvectors->eigenvectorsRetained = 87129;

    $response = $sdk->assetsAnalysis->postAssetsAnalysisAbsorptionRatio($request);

    if ($response->postAssetsAnalysisAbsorptionRatio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsAnalysisTurbulenceIndex

Compute the turbulence index associated to a universe of assets.

References
* [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3)
* [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsAnalysisTurbulenceIndexRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsAnalysisTurbulenceIndexRequestBody();
    $request->assets = 648172;
    $request->assetsAverageReturns = [
        3682.41,
    ];
    $request->assetsCovarianceMatrix = [
        [
            7781.57,
            1403.5,
            8700.13,
            8700.88,
        ],
        [
            4736.08,
            7991.59,
            8009.11,
            4614.79,
        ],
        [
            7805.29,
            6788.8,
            1182.74,
        ],
        [
            6399.21,
            5820.2,
            1433.53,
        ],
    ];
    $request->assetsReturns = [
        9446.69,
        7586.16,
        5218.48,
    ];

    $response = $sdk->assetsAnalysis->postAssetsAnalysisTurbulenceIndex($request);

    if ($response->postAssetsAnalysisTurbulenceIndex200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
