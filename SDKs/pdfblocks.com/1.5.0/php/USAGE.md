<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddImageWatermarkV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddImageWatermarkV1RequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\AddImageWatermarkV1RequestBodyImage;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddImageWatermarkV1RequestBody();
    $request->file = new AddImageWatermarkV1RequestBodyFile();
    $request->file->content = 'corrupti';
    $request->file->file = 'provident';
    $request->image = new AddImageWatermarkV1RequestBodyImage();
    $request->image->content = 'distinctio';
    $request->image->image = 'quibusdam';
    $request->margin = 1;
    $request->transparency = 50;

    $response = $sdk->addImageWatermarkV1($request);

    if ($response->addImageWatermarkV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->