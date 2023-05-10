# assetsCovarianceMatrix

### Available Operations

* [postAssetsCovarianceMatrix](#postassetscovariancematrix) - Covariance Matrix
* [postAssetsCovarianceMatrixEffectiveRank](#postassetscovariancematrixeffectiverank) - Covariance Matrix Effective Rank
* [postAssetsCovarianceMatrixExponentiallyWeighted](#postassetscovariancematrixexponentiallyweighted) - Exponentially Weighted Covariance Matrix
* [postAssetsCovarianceMatrixValidation](#postassetscovariancematrixvalidation) - Covariance Matrix Validation

## postAssetsCovarianceMatrix

Compute the covariance matrix of assets from either:  
* The asset correlation matrix and their volatilities (i.e., standard deviations)
* The asset correlation matrix and their variances
* The asset returns

References
* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)


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
    $request = new PostAssetsCovarianceMatrixRequestBody1();
    $request->assets = [
        new PostAssetsCovarianceMatrixRequestBody1Assets(),
    ];

    $response = $sdk->assetsCovarianceMatrix->postAssetsCovarianceMatrix($request);

    if ($response->postAssetsCovarianceMatrix200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCovarianceMatrixEffectiveRank

Compute the effective rank of an asset covariance matrix.

References
* [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCovarianceMatrixEffectiveRankRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCovarianceMatrixEffectiveRankRequestBody();
    $request->assets = 828940;
    $request->assetsCovarianceMatrix = [
        [
            1464.41,
        ],
        [
            5696.18,
            2700.08,
            7037.37,
        ],
    ];

    $response = $sdk->assetsCovarianceMatrix->postAssetsCovarianceMatrixEffectiveRank($request);

    if ($response->postAssetsCovarianceMatrixEffectiveRank200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCovarianceMatrixExponentiallyWeighted

Compute an exponentially weighted covariance matrix of assets returns.

References
* [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCovarianceMatrixExponentiallyWeightedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCovarianceMatrixExponentiallyWeightedRequestBody();
    $request->assets = [
        new PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets(),
        new PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets(),
        new PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets(),
    ];
    $request->decayFactor = 2884.76;

    $response = $sdk->assetsCovarianceMatrix->postAssetsCovarianceMatrixExponentiallyWeighted($request);

    if ($response->postAssetsCovarianceMatrixExponentiallyWeighted200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCovarianceMatrixValidation

Validate whether a matrix is a covariance matrix.

References
* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCovarianceMatrixValidationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCovarianceMatrixValidationRequestBody();
    $request->assets = 962189;
    $request->assetsCovarianceMatrix = [
        [
            7561.07,
        ],
        [
            3960.98,
            5920.42,
            8960.39,
        ],
    ];

    $response = $sdk->assetsCovarianceMatrix->postAssetsCovarianceMatrixValidation($request);

    if ($response->postAssetsCovarianceMatrixValidation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
