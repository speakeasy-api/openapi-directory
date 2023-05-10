# previews

### Available Operations

* [previewsRead](#previewsread) - Get preview image of uploaded file

## previewsRead

This GET-Method returns the URL where the preview image of uploaded file can downloaded from.

### Example Usage

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
    $request->fileId = 'provident';

    $response = $sdk->previews->previewsRead($request);

    if ($response->previewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
