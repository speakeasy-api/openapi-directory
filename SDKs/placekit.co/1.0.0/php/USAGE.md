<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReverseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReverseRequestBodyLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReverseRequestBody();
    $request->coordinates = '48.873662, 2.295063';
    $request->countries = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->countryByIP = false;
    $request->language = ReverseRequestBodyLanguageEnum::FR;
    $request->maxResults = 602763;
    $request->types = [
        TypesEnum::STREET,
        TypesEnum::MINUS_TOWNHALL,
        TypesEnum::COUNTRY,
        TypesEnum::MINUS_STREET,
    ];

    $response = $sdk->reverse($request);

    if ($response->results !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->