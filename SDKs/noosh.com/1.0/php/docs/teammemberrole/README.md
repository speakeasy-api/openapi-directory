# teamMemberRole

### Available Operations

* [getMemberRoles](#getmemberroles) - List all the role options for the user

## getMemberRoles

List all the role options for the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMemberRolesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMemberRolesRequest();
    $request->projectId = 'repellat';
    $request->userId = 'quibusdam';
    $request->workgroupId = 'sed';

    $response = $sdk->teamMemberRole->getMemberRoles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
