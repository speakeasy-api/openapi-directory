# assetsCorrelationMatrix

### Available Operations

* [postAssetsCorrelationMatrix](#postassetscorrelationmatrix) - Correlation Matrix
* [postAssetsCorrelationMatrixBounds](#postassetscorrelationmatrixbounds) - Correlation Matrix Bounds
* [postAssetsCorrelationMatrixDenoised](#postassetscorrelationmatrixdenoised) - Denoised Correlation Matrix
* [postAssetsCorrelationMatrixDistance](#postassetscorrelationmatrixdistance) - Correlation Matrix Distance
* [postAssetsCorrelationMatrixEffectiveRank](#postassetscorrelationmatrixeffectiverank) - Correlation Matrix Effective Rank
* [postAssetsCorrelationMatrixInformativeness](#postassetscorrelationmatrixinformativeness) - Correlation Matrix Informativeness
* [postAssetsCorrelationMatrixNearest](#postassetscorrelationmatrixnearest) - Nearest Correlation Matrix
* [postAssetsCorrelationMatrixRandom](#postassetscorrelationmatrixrandom) - Random Correlation Matrix
* [postAssetsCorrelationMatrixShrinkage](#postassetscorrelationmatrixshrinkage) - Correlation Matrix Shrinkage
* [postAssetsCorrelationMatrixTheoryImplied](#postassetscorrelationmatrixtheoryimplied) - Theory-Implied Correlation Matrix
* [postAssetsCorrelationMatrixValidation](#postassetscorrelationmatrixvalidation) - Correlation Matrix Validation

## postAssetsCorrelationMatrix

Compute the Pearson asset correlation matrix from either:  
* The asset returns
* The asset covariance matrix

References
* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)


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
    $request = new PostAssetsCorrelationMatrixRequestBody1();
    $request->assets = [
        new PostAssetsCorrelationMatrixRequestBody1Assets(),
        new PostAssetsCorrelationMatrixRequestBody1Assets(),
    ];

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrix($request);

    if ($response->postAssetsCorrelationMatrix200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixBounds

Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.
 
 References
 * [Kawee Numpacharoen & Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixBoundsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCorrelationMatrixBoundsRequestBody();
    $request->assets = 473600;
    $request->assetsCorrelationMatrix = [
        [
            7742.34,
        ],
        [
            4561.5,
            2165.5,
            5684.34,
        ],
    ];
    $request->assetsGroup = [
        18789,
    ];

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixBounds($request);

    if ($response->postAssetsCorrelationMatrixBounds200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixDenoised

Compute a denoised asset correlation matrix, using one of the following methods:
 * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory
 
 References
 * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixDenoisedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixDenoisedRequestBodyDenoisingMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCorrelationMatrixDenoisedRequestBody();
    $request->assets = 324141;
    $request->assetsCorrelationMatrix = [
        [
            6120.96,
        ],
        [
            6169.34,
        ],
        [
            9437.49,
            9025.99,
        ],
    ];
    $request->assetsCorrelationMatrixAspectRatio = 6818.2;
    $request->denoisingMethod = PostAssetsCorrelationMatrixDenoisedRequestBodyDenoisingMethodEnum::EIGENVALUES_CLIPPING;

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixDenoised($request);

    if ($response->postAssetsCorrelationMatrixDenoised200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixDistance

Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics:
* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
* Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
* Bures distance, defined in the second reference

 References
 * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
 * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixDistanceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixDistanceRequestBodyDistanceMetricEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCorrelationMatrixDistanceRequestBody();
    $request->assets = 449950;
    $request->assetsCorrelationMatrix = [
        [
            4370.32,
            9023.49,
            6976.31,
        ],
        [
            602.25,
        ],
    ];
    $request->distanceMetric = PostAssetsCorrelationMatrixDistanceRequestBodyDistanceMetricEnum::BURES;
    $request->referenceCorrelationMatrix = [
        [
            6706.38,
            1709.09,
            2103.82,
        ],
        [
            1289.26,
            7506.86,
        ],
        [
            6078.31,
            3637.11,
        ],
    ];

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixDistance($request);

    if ($response->postAssetsCorrelationMatrixDistance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixEffectiveRank

Compute the effective rank of an asset correlation matrix.

References
* [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixEffectiveRankRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCorrelationMatrixEffectiveRankRequestBody();
    $request->assets = 325047;
    $request->assetsCorrelationMatrix = [
        [
            4386.01,
        ],
        [
            9883.74,
            9589.5,
            1020.44,
        ],
        [
            2088.76,
            6350.59,
            1613.09,
        ],
    ];

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixEffectiveRank($request);

    if ($response->postAssetsCorrelationMatrixEffectiveRank200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixInformativeness

Compute the informativeness of an asset correlation matrix, using one of the following distance metrics:
* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
* Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
* Bures distance, defined in the third reference

 References
 * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)
 * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
 * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixInformativenessRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixInformativenessRequestBodyDistanceMetricEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCorrelationMatrixInformativenessRequestBody();
    $request->assets = 995300;
    $request->assetsCorrelationMatrix = [
        [
            2532.91,
            4143.69,
            4663.11,
        ],
        [
            2444.25,
            6235.1,
        ],
        [
            3380.07,
        ],
    ];
    $request->distanceMetric = PostAssetsCorrelationMatrixInformativenessRequestBodyDistanceMetricEnum::EUCLIDEAN;

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixInformativeness($request);

    if ($response->postAssetsCorrelationMatrixInformativeness200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixNearest

Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.

References
* [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixNearestRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCorrelationMatrixNearestRequestBody();
    $request->assets = 674752;
    $request->assetsApproximateCorrelationMatrix = [
        [
            1381.83,
            7783.46,
        ],
        [
            9495.72,
        ],
        [
            6625.27,
            8209.94,
        ],
    ];
    $request->assetsFixedCorrelations = [
        [
            622846,
        ],
    ];

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixNearest($request);

    if ($response->postAssetsCorrelationMatrixNearest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixRandom

Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.

References
* [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixRandomRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCorrelationMatrixRandomRequestBody();
    $request->assets = 837945;

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixRandom($request);

    if ($response->postAssetsCorrelationMatrixRandom200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixShrinkage

Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:  
 * An equicorrelation matrix made of 1
 * An equicorrelation matrix made of 0
 * An equicorrelation matrix made of -1/(n-1), with n the number of assets
 * A provided correlation matrix
 
 References
 * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)


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
    $request = new PostAssetsCorrelationMatrixShrinkageRequestBody2();
    $request->assets = 96098;
    $request->assetsCorrelationMatrix = [
        [
            8781.94,
            4686.51,
            5096.24,
            9767.62,
        ],
        [
            6048.46,
        ],
        [
            7392.64,
            199.87,
        ],
        [
            4417.11,
        ],
    ];
    $request->shrinkageFactor = 2828.07;
    $request->targetCorrelationMatrix = [
        [
            3594.44,
        ],
        [
            4808.94,
            1187.27,
        ],
        [
            3179.83,
            8804.76,
            4142.63,
        ],
        [
            641.47,
            2168.22,
            6924.72,
            5651.89,
        ],
    ];

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixShrinkage($request);

    if ($response->postAssetsCorrelationMatrixShrinkage200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixTheoryImplied

Compute the theory-implied asset correlation matrix associated with:
* A hierarchical classification of a universe of assets
* An asset correlation matrix

References
* [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3484152)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixTheoryImpliedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixTheoryImpliedRequestBodyClusteringMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCorrelationMatrixTheoryImpliedRequestBody();
    $request->assets = [
        new PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets(),
        new PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets(),
        new PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets(),
    ];
    $request->assetsCorrelationMatrix = [
        [
            5089.69,
            5232.48,
        ],
        [
            939.4,
            9211.58,
            5759.47,
            831.12,
        ],
        [
            2777.18,
            3185.69,
            93.56,
            6674.11,
        ],
        [
            1317.97,
            6471.74,
            7163.27,
            8413.86,
        ],
    ];
    $request->clusteringMethod = PostAssetsCorrelationMatrixTheoryImpliedRequestBodyClusteringMethodEnum::AVERAGE_LINKAGE;

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixTheoryImplied($request);

    if ($response->postAssetsCorrelationMatrixTheoryImplied200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsCorrelationMatrixValidation

Validate whether a matrix is an asset correlation matrix.

References
* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsCorrelationMatrixValidationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsCorrelationMatrixValidationRequestBody();
    $request->assets = 264730;
    $request->assetsCorrelationMatrix = [
        [
            5865.13,
            5528.22,
        ],
    ];

    $response = $sdk->assetsCorrelationMatrix->postAssetsCorrelationMatrixValidation($request);

    if ($response->postAssetsCorrelationMatrixValidation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
