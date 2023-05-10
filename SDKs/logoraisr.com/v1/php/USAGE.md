<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PreviewsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreviewsReadRequest();
    $request->fileId = 'corrupti';

    $response = $sdk->previews->previewsRead($request);

    if ($response->previewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->