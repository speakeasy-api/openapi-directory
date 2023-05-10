<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BadWordFilterRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BadWordFilterRequestBody();
    $request->catalog = 'corrupti';
    $request->censorCharacter = 'provident';
    $request->content = 'distinctio';

    $response = $sdk->dataTools->badWordFilter($request);

    if ($response->badWordFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->