<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ShortlinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShortlinkRequest();
    $request->keyid = 'corrupti';
    $request->shortlink = 'provident';

    $response = $sdk->addShortlink->addShortlink($request);

    if ($response->shortlinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->