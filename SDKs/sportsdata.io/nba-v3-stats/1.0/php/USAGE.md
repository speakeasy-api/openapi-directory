<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllStarsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllStarsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllStarsRequest();
    $request->format = AllStarsFormatEnum::JSON;
    $request->season = 'provident';

    $response = $sdk->allStars($request);

    if ($response->playerInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->