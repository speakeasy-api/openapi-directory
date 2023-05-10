# actionBatches

### Available Operations

* [createOrganizationActionBatch](#createorganizationactionbatch) - Create an action batch
* [deleteOrganizationActionBatch](#deleteorganizationactionbatch) - Delete an action batch
* [getOrganizationActionBatches](#getorganizationactionbatches) - Return the list of action batches in the organization
* [updateOrganizationActionBatch](#updateorganizationactionbatch) - Update an action batch

## createOrganizationActionBatch

Create an action batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationActionBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationActionBatchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationActionBatchRequestBodyActions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationActionBatchRequest();
    $request->requestBody = new CreateOrganizationActionBatchRequestBody();
    $request->requestBody->actions = [
        new CreateOrganizationActionBatchRequestBodyActions(),
    ];
    $request->requestBody->confirmed = false;
    $request->requestBody->synchronous = false;
    $request->organizationId = 'quis';

    $response = $sdk->actionBatches->createOrganizationActionBatch($request);

    if ($response->createOrganizationActionBatch201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationActionBatch

Delete an action batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationActionBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationActionBatchRequest();
    $request->actionBatchId = 'veritatis';
    $request->organizationId = 'deserunt';

    $response = $sdk->actionBatches->deleteOrganizationActionBatch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationActionBatches

Return the list of action batches in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationActionBatchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationActionBatchesStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationActionBatchesRequest();
    $request->organizationId = 'perferendis';
    $request->status = GetOrganizationActionBatchesStatusEnum::FAILED;

    $response = $sdk->actionBatches->getOrganizationActionBatches($request);

    if ($response->getOrganizationActionBatches200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationActionBatch

Update an action batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationActionBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationActionBatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationActionBatchRequest();
    $request->requestBody = new UpdateOrganizationActionBatchRequestBody();
    $request->requestBody->confirmed = false;
    $request->requestBody->synchronous = false;
    $request->actionBatchId = 'repellendus';
    $request->organizationId = 'sapiente';

    $response = $sdk->actionBatches->updateOrganizationActionBatch($request);

    if ($response->updateOrganizationActionBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
