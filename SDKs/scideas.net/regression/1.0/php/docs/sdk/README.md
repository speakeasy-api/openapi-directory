# SDK

## Overview

This data processing api uses regression analysis to allow you to find out which contributing variables have the most effect on an outcome. For example does buyer location or price most effect sales ?

<https://services.scideas.net/regression>
### Available Operations

* [postRegressionApi](#postregressionapi) - Returns regression analysis.

## postRegressionApi

Returns regression analysis.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RegressionApiBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegressionApiBody();
    $request->convertDateTo = 'month';
    $request->data = [
        [
            'ipsam' => 'repellendus',
        ],
        [
            'quo' => 'odit',
            'at' => 'at',
            'maiores' => 'molestiae',
            'quod' => 'quod',
        ],
        [
            'totam' => 'porro',
            'dolorum' => 'dicta',
        ],
    ];
    $request->ignoreVariables = [
        [
            'occaecati' => 'fugit',
            'deleniti' => 'hic',
            'optio' => 'totam',
        ],
        [
            'commodi' => 'molestiae',
        ],
        [
            'qui' => 'impedit',
            'cum' => 'esse',
        ],
    ];
    $request->key = 'abc123';
    $request->outcomeVariable = 'sales';

    $response = $sdk->sdk->postRegressionApi($request);

    if ($response->inlineResponse200 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
