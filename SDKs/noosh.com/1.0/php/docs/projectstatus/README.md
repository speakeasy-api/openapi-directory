# projectStatus

### Available Operations

* [getProjectStatus](#getprojectstatus) - List the project status
* [getProjectStatusOfClient](#getprojectstatusofclient) - List the project status of client

## getProjectStatus

List the project status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectStatusRequest();
    $request->workgroupId = 'reiciendis';

    $response = $sdk->projectStatus->getProjectStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectStatusOfClient

List the project status of client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectStatusOfClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectStatusOfClientRequest();
    $request->clientWorkgroupId = 'voluptatibus';
    $request->workgroupId = 'vero';

    $response = $sdk->projectStatus->getProjectStatusOfClient($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
