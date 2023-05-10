# assetsSkewness

### Available Operations

* [postAssetsSkewness](#postassetsskewness) - Skewness

## postAssetsSkewness

Compute the skewness of one or several asset(s), from the asset returns.

References
* [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsSkewnessRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsSkewnessRequestBodyAssets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsSkewnessRequestBody();
    $request->assets = [
        new PostAssetsSkewnessRequestBodyAssets(),
        new PostAssetsSkewnessRequestBodyAssets(),
        new PostAssetsSkewnessRequestBodyAssets(),
    ];

    $response = $sdk->assetsSkewness->postAssetsSkewness($request);

    if ($response->postAssetsSkewness200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
