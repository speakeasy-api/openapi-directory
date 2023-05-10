# rootHierarchy

### Available Operations

* [bulkHierarchySlaConflictsV1](#bulkhierarchyslaconflictsv1) - Retrieve the list of descendant objects with SLA conflicts in bulk

## bulkHierarchySlaConflictsV1

Retrieve the list of descendant objects with an explicitly configured SLA domain, or inherit an SLA domain from a different parent for each managed ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\HierarchyObjectIds;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HierarchyObjectIds();
    $request->ids = [
        'porro',
        'labore',
        'impedit',
    ];

    $response = $sdk->rootHierarchy->bulkHierarchySlaConflictsV1($request);

    if ($response->bulkSlaConflictsSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
