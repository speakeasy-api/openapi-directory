<!-- Start SDK Example Usage -->
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
            'distinctio' => 'quibusdam',
            'unde' => 'nulla',
            'corrupti' => 'illum',
        ],
        [
            'error' => 'deserunt',
            'suscipit' => 'iure',
        ],
        [
            'debitis' => 'ipsa',
            'delectus' => 'tempora',
        ],
    ];
    $request->ignoreVariables = [
        [
            'minus' => 'placeat',
            'voluptatum' => 'iusto',
        ],
        [
            'nisi' => 'recusandae',
            'temporibus' => 'ab',
            'quis' => 'veritatis',
        ],
    ];
    $request->key = 'abc123';
    $request->outcomeVariable = 'sales';

    $response = $sdk->postRegressionApi($request);

    if ($response->inlineResponse200 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->