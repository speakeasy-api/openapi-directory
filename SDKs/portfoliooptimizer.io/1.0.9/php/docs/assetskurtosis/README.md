# assetsKurtosis

### Available Operations

* [postAssetsKurtosis](#postassetskurtosis) - Kurtosis

## postAssetsKurtosis

Compute the kurtosis of one or several asset(s), from the asset returns.

References
* [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsKurtosisRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsKurtosisRequestBodyAssets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsKurtosisRequestBody();
    $request->assets = [
        new PostAssetsKurtosisRequestBodyAssets(),
        new PostAssetsKurtosisRequestBodyAssets(),
        new PostAssetsKurtosisRequestBodyAssets(),
    ];

    $response = $sdk->assetsKurtosis->postAssetsKurtosis($request);

    if ($response->postAssetsKurtosis200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
