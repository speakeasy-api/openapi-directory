# photoController

### Available Operations

* [photoControllerGetPhotoDownload](#photocontrollergetphotodownload) - Downloads the photo of a property given the photo ID.

## photoControllerGetPhotoDownload

Downloads the photo of a property given the photo ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PhotoControllerGetPhotoDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PhotoControllerGetPhotoDownloadRequest();
    $request->height = 449950;
    $request->photoID = 'corporis';
    $request->shortName = 'iste';
    $request->token = 'iure';
    $request->width = 902349;

    $response = $sdk->photoController->photoControllerGetPhotoDownload($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
