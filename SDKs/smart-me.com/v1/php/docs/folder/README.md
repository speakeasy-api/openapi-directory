# folder

### Available Operations

* [folderGet](#folderget) - Gets the Values for a folder or a meter

## folderGet

Gets the Values for a folder or a meter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FolderGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderGetRequest();
    $request->id = '80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95';

    $response = $sdk->folder->folderGet($request);

    if ($response->folderData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
