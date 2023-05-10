# creatorRoles

### Available Operations

* [creatorRolesList](#creatorroleslist) - Get a list of creator positions (jobs).

## creatorRolesList

Get a list of creator positions (jobs).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatorRolesListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatorRolesListRequest();
    $request->page = 715190;
    $request->pageSize = 844266;

    $response = $sdk->creatorRoles->creatorRolesList($request);

    if ($response->creatorRolesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
