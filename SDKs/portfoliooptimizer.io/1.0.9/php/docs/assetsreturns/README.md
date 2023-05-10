# assetsReturns

### Available Operations

* [postAssetsReturns](#postassetsreturns) - Arithmetic Returns
* [postAssetsReturnsAverage](#postassetsreturnsaverage) - Arithmetic Average Return
* [postAssetsReturnsLogarithmic](#postassetsreturnslogarithmic) - Logarithmic Returns
* [postAssetsReturnsTurbulencePartitioned](#postassetsreturnsturbulencepartitioned) - Turbulence-partitioned Asset Returns

## postAssetsReturns

Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).

References
* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsRequestBodyAssets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsReturnsRequestBody();
    $request->assets = [
        new PostAssetsReturnsRequestBodyAssets(),
    ];

    $response = $sdk->assetsReturns->postAssetsReturns($request);

    if ($response->postAssetsReturns200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsReturnsAverage

Compute the arithmetic average of the return(s) of one or several asset(s).

References
* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsAverageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsAverageRequestBodyAssets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsReturnsAverageRequestBody();
    $request->assets = [
        new PostAssetsReturnsAverageRequestBodyAssets(),
        new PostAssetsReturnsAverageRequestBodyAssets(),
        new PostAssetsReturnsAverageRequestBodyAssets(),
    ];

    $response = $sdk->assetsReturns->postAssetsReturnsAverage($request);

    if ($response->postAssetsReturnsAverage200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsReturnsLogarithmic

Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).

References
* [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsLogarithmicRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsLogarithmicRequestBodyAssets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsReturnsLogarithmicRequestBody();
    $request->assets = [
        new PostAssetsReturnsLogarithmicRequestBodyAssets(),
        new PostAssetsReturnsLogarithmicRequestBodyAssets(),
    ];

    $response = $sdk->assetsReturns->postAssetsReturnsLogarithmic($request);

    if ($response->postAssetsReturnsLogarithmic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssetsReturnsTurbulencePartitioned

Partition asset returns into several subsets based on their turbulence index.

References
* [George Chow, Jacquier, E., Kritzman, M., & Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsTurbulencePartitionedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsTurbulencePartitionedRequestBodyAssets;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsReturnsTurbulencePartitionedRequestBodyTurbulenceThresholdsConversionMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsReturnsTurbulencePartitionedRequestBody();
    $request->assets = [
        new PostAssetsReturnsTurbulencePartitionedRequestBodyAssets(),
        new PostAssetsReturnsTurbulencePartitionedRequestBodyAssets(),
        new PostAssetsReturnsTurbulencePartitionedRequestBodyAssets(),
        new PostAssetsReturnsTurbulencePartitionedRequestBodyAssets(),
    ];
    $request->turbulenceThresholds = [
        6925.32,
        5884.65,
        7252.55,
        6596.69,
    ];
    $request->turbulenceThresholdsConversionMethod = PostAssetsReturnsTurbulencePartitionedRequestBodyTurbulenceThresholdsConversionMethodEnum::CHISQUARE_INVERSE_DISTRIBUTION;

    $response = $sdk->assetsReturns->postAssetsReturnsTurbulencePartitioned($request);

    if ($response->postAssetsReturnsTurbulencePartitioned200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
