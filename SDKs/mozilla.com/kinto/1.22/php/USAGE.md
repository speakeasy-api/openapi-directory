<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAttachmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAttachmentRequest();
    $request->bucketId = 'corrupti';
    $request->collectionId = 'provident';
    $request->id = 'bd9d8d69-a674-4e0f-867c-c8796ed151a0';

    $response = $sdk->attachment->createAttachment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->