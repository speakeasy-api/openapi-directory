# assetsVolatility

### Available Operations

* [postAssetsVolatility](#postassetsvolatility) - Volatility

## postAssetsVolatility

Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:  
* The asset returns
* The asset covariance matrix
* The asset variance(s)

References
* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)


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
    $request = new PostAssetsVolatilityRequestBody2();
    $request->assets = 287991;
    $request->assetsCovarianceMatrix = [
        [
            6180.16,
            7491.7,
        ],
        [
            8784.53,
            1354.74,
        ],
    ];

    $response = $sdk->assetsVolatility->postAssetsVolatility($request);

    if ($response->postAssetsVolatility200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
