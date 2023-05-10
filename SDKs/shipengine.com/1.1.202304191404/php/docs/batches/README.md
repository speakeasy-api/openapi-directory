# batches

## Overview

batches


### Available Operations

* [addToBatch](#addtobatch) - Add to a Batch
* [createBatch](#createbatch) - Create A Batch
* [deleteBatch](#deletebatch) - Delete Batch By Id
* [getBatchByExternalId](#getbatchbyexternalid) - Get Batch By External ID
* [getBatchById](#getbatchbyid) - Get Batch By ID
* [listBatchErrors](#listbatcherrors) - Get Batch Errors
* [listBatches](#listbatches) - List Batches
* [processBatch](#processbatch) - Process Batch ID Labels
* [removeFromBatch](#removefrombatch) - Remove From Batch
* [updateBatch](#updatebatch) - Update Batch By Id

## addToBatch

Add a Shipment or Rate to a Batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddToBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddToBatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddToBatchRequest();
    $request->addToBatchRequestBody = new AddToBatchRequestBody();
    $request->addToBatchRequestBody->rateIds = [
        'se-28529731',
        'se-28529731',
        'se-28529731',
    ];
    $request->addToBatchRequestBody->shipmentIds = [
        'se-28529731',
        'se-28529731',
        'se-28529731',
        'se-28529731',
    ];
    $request->batchId = 'se-28529731';

    $response = $sdk->batches->addToBatch($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBatch

Create a Batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateBatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBatchRequestBody();
    $request->batchNotes = 'This is my batch';
    $request->externalBatchId = 'se-28529731';
    $request->rateIds = [
        'se-28529731',
        'se-28529731',
        'se-28529731',
    ];
    $request->shipmentIds = [
        'se-28529731',
        'se-28529731',
        'se-28529731',
        'se-28529731',
    ];

    $response = $sdk->batches->createBatch($request);

    if ($response->createBatchResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBatch

Delete Batch By Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBatchRequest();
    $request->batchId = 'se-28529731';

    $response = $sdk->batches->deleteBatch($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchByExternalId

Get Batch By External ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchByExternalIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchByExternalIdRequest();
    $request->externalBatchId = 'vel';

    $response = $sdk->batches->getBatchByExternalId($request);

    if ($response->getBatchByExternalIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchById

Get Batch By ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchByIdRequest();
    $request->batchId = 'se-28529731';

    $response = $sdk->batches->getBatchById($request);

    if ($response->getBatchByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBatchErrors

Error handling in batches are handled differently than in a single synchronous request.
You must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchErrorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBatchErrorsRequest();
    $request->batchId = 'se-28529731';
    $request->page = 623564;
    $request->pagesize = 645894;

    $response = $sdk->batches->listBatchErrors($request);

    if ($response->listBatchErrorsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBatches

List Batches associated with your Shipengine account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchesSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchesSortDirSortDirEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBatchesRequest();
    $request->batchNumber = 'suscipit';
    $request->page = 437587;
    $request->pageSize = 297534;
    $request->sortBy = BatchesSortByEnum::CREATED_AT;
    $request->sortDir = ListBatchesSortDirSortDirEnum::ASC;
    $request->status = BatchStatusEnum::INVALID;

    $response = $sdk->batches->listBatches($request);

    if ($response->listBatchesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processBatch

Process Batch ID Labels

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProcessBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProcessBatchRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ProcessBatchRequestBodyDisplaySchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessBatchRequestBodyLabelFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessBatchRequestBodyLabelLayoutEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessBatchRequest();
    $request->batchId = 'se-28529731';
    $request->processBatchRequestBody = new ProcessBatchRequestBody();
    $request->processBatchRequestBody->displayScheme = ProcessBatchRequestBodyDisplaySchemeEnum::LABEL;
    $request->processBatchRequestBody->labelFormat = ProcessBatchRequestBodyLabelFormatEnum::PNG;
    $request->processBatchRequestBody->labelLayout = ProcessBatchRequestBodyLabelLayoutEnum::FOURX6;
    $request->processBatchRequestBody->shipDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-09-23T15:00:00.000Z');

    $response = $sdk->batches->processBatch($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeFromBatch

Remove a shipment or rate from a batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFromBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveFromBatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveFromBatchRequest();
    $request->batchId = 'se-28529731';
    $request->removeFromBatchRequestBody = new RemoveFromBatchRequestBody();
    $request->removeFromBatchRequestBody->rateIds = [
        'se-28529731',
        'se-28529731',
        'se-28529731',
        'se-28529731',
    ];
    $request->removeFromBatchRequestBody->shipmentIds = [
        'se-28529731',
        'se-28529731',
        'se-28529731',
        'se-28529731',
    ];

    $response = $sdk->batches->removeFromBatch($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBatch

Update Batch By Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBatchRequest();
    $request->batchId = 'se-28529731';

    $response = $sdk->batches->updateBatch($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
