<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPersonasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPersonasRequest();
    $request->count = 548814;
    $request->expand = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->fields = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->name = 'Rick Kertzmann';
    $request->page = 56713;

    $response = $sdk->persona->getPersonas($request);

    if ($response->getPersonas200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->