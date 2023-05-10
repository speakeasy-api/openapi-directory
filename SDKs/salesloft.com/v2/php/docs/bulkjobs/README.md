# bulkJobs

## Overview

Bulk Jobs

### Available Operations

* [getV2BulkJobs](#getv2bulkjobs) - List bulk jobs
* [getV2BulkJobsId](#getv2bulkjobsid) - Fetch a bulk job
* [postV2BulkJobs](#postv2bulkjobs) - Create a bulk job
* [putV2BulkJobsId](#putv2bulkjobsid) - Update a bulk job

## getV2BulkJobs

Fetches multiple bulk job records. The records can be filtered, paged, and sorted according to the respective parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2BulkJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2BulkJobsRequest();
    $request->id = [
        'odio' => 'eius',
        'esse' => 'esse',
    ];
    $request->perPage = 524593;
    $request->state = [
        'reprehenderit',
        'quidem',
        'fugiat',
    ];

    $response = $sdk->bulkJobs->getV2BulkJobs($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2BulkJobsId

Fetches a bulk job, by ID only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2BulkJobsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2BulkJobsIdRequest();
    $request->id = 283519;

    $response = $sdk->bulkJobs->getV2BulkJobsId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2BulkJobs

Creates a bulk job. The type of the bulk job must be included when created.

For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2BulkJobsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2BulkJobsRequestBody();
    $request->name = 'Yolanda Shields';
    $request->type = 'quisquam';

    $response = $sdk->bulkJobs->postV2BulkJobs($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2BulkJobsId

Updates a bulk job's name and / or marks a bulk job as 'ready_to_execute'.  May only be updated if the bulk job is still in an "open" state.

For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2BulkJobsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2BulkJobsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2BulkJobsIdRequest();
    $request->requestBody = new PutV2BulkJobsIdRequestBody();
    $request->requestBody->name = 'Angela Olson';
    $request->requestBody->readyToExecute = false;
    $request->id = 778696;

    $response = $sdk->bulkJobs->putV2BulkJobsId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
