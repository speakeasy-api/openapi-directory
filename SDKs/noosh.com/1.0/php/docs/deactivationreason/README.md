# deactivationReason

### Available Operations

* [getDeactivationReasonList](#getdeactivationreasonlist) - List all deactivation reasons

## getDeactivationReasonList

List all deactivation reasons

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeactivationReasonListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeactivationReasonListRequest();
    $request->workgroupId = 'nulla';

    $response = $sdk->deactivationReason->getDeactivationReasonList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
