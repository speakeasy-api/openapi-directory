<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsFormatVersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapVersionNumberCopyrightsFormatRequest();
    $request->callback = 'corrupti';
    $request->format = GetMapVersionNumberCopyrightsFormatFormatEnum::JSONP;
    $request->versionNumber = GetMapVersionNumberCopyrightsFormatVersionNumberEnum::ONE;

    $response = $sdk->copyrights->getMapVersionNumberCopyrightsFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->