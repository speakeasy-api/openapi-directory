<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SvgconvertFileToConvert;
use \OpenAPI\OpenAPI\Models\Operations\SvgconvertFileToConvertFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SvgconvertFileToConvert();
    $request->file = new SvgconvertFileToConvertFile();
    $request->file->content = 'corrupti';
    $request->file->file = 'provident';

    $response = $sdk->svgconvert($request);

    if ($response->fileUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->