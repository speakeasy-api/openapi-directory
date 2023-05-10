# assetsVariance

### Available Operations

* [postAssetsVariance](#postassetsvariance) - Variance

## postAssetsVariance

Compute the variance of one or several asset(s) from either:  
* The asset returns
* The asset covariance matrix
* The asset volatility(ies)

References
* [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        


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
    $request = new PostAssetsVarianceRequestBody2();
    $request->assets = 474867;
    $request->assetsCovarianceMatrix = [
        [
            3015.75,
            7160.75,
        ],
    ];

    $response = $sdk->assetsVariance->postAssetsVariance($request);

    if ($response->postAssetsVariance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
