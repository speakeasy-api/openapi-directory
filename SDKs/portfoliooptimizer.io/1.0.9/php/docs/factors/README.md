# factors

### Available Operations

* [postFactorsResidualization](#postfactorsresidualization) - Residualization

## postFactorsResidualization

Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.

References
* [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)
* [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostFactorsResidualizationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostFactorsResidualizationRequestBodyFactors;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFactorsResidualizationRequestBody();
    $request->factors = [
        new PostFactorsResidualizationRequestBodyFactors(),
    ];
    $request->residualizedFactor = 298282;

    $response = $sdk->factors->postFactorsResidualization($request);

    if ($response->postFactorsResidualization200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
