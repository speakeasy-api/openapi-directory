<!-- Start SDK Example Usage -->
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
    $request->assets = 548814;
    $request->assetsCovarianceMatrix = [
        [
            8442.66,
            6027.63,
            8579.46,
        ],
        [
            8472.52,
            4236.55,
            6235.64,
        ],
        [
            3843.82,
            4375.87,
            2975.34,
        ],
    ];
    $request->assetsCovarianceMatrixEigenvectors = new PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors();
    $request->assetsCovarianceMatrixEigenvectors->eigenvectorsRetained = 891773;

    $response = $sdk->assetsAnalysis->postAssetsAnalysisAbsorptionRatio($request);

    if ($response->postAssetsAnalysisAbsorptionRatio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->