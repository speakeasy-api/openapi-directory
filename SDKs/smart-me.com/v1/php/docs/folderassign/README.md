# folderAssign

### Available Operations

* [folderAssignPost](#folderassignpost) - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

## folderAssignPost

Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FolderAssignPostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderAssignPostRequest();
    $request->source = 'repellendus';
    $request->target = 'totam';

    $response = $sdk->folderAssign->folderAssignPost($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
