# restricted

### Available Operations

* [collaboratorsPost](#collaboratorspost) - Collborators: Bulk Update (Admin Only)

## collaboratorsPost

Allows for bulk updates on collaborator metadata.  Restricted to internal admins

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CollaboratorBulkUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollaboratorBulkUpdateRequest();
    $request->active = false;
    $request->leadId = 99569;
    $request->userId = 'e5b7fd2e-d028-4921-8ddc-692601fb576b';

    $response = $sdk->restricted->collaboratorsPost($request);

    if ($response->permissionTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
