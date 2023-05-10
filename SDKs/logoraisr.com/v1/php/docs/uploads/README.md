# uploads

### Available Operations

* [uploadsCreate](#uploadscreate) - Upload a new image

## uploadsCreate

This POST-Method uploads a new file on the server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UploadsCreateRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadsCreateRequestBody();
    $request->file = new UploadsCreateRequestBodyFile();
    $request->file->content = 'dolor';
    $request->file->file = 'natus';

    $response = $sdk->uploads->uploadsCreate($request);

    if ($response->fileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
