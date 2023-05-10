<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayByPlayRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayByPlayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayByPlayRequest();
    $request->format = PlayByPlayFormatEnum::JSON;
    $request->hometeam = 'provident';
    $request->season = 'distinctio';
    $request->week = 'quibusdam';

    $response = $sdk->playByPlay($request);

    if ($response->playByPlay !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->