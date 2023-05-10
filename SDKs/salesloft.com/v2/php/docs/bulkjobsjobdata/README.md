# bulkJobsJobData

## Overview

Bulk Jobs - Job Data

### Available Operations

* [getV2BulkJobsBulkJobsIdJobData](#getv2bulkjobsbulkjobsidjobdata) - List job data for a bulk job
* [postV2BulkJobsBulkJobsIdJobData](#postv2bulkjobsbulkjobsidjobdata) - Create job data for a bulk job

## getV2BulkJobsBulkJobsIdJobData

Fetches multiple job data records for a given bulk job. Pagination is not supported, but cursor based polling is via use of the `id[gt]` filter. Pass the last id seen (i.e. `id[gt]=1234`) in order to get the next batch of records.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2BulkJobsBulkJobsIdJobDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2BulkJobsBulkJobsIdJobDataRequest();
    $request->bulkJobsId = 847276;
    $request->id = [
        'fuga' => 'eius',
        'eos' => 'voluptas',
        'ab' => 'cupiditate',
        'consequatur' => 'tempora',
    ];
    $request->perPage = 892050;
    $request->status = [
        'aspernatur',
        'sequi',
    ];

    $response = $sdk->bulkJobsJobData->getV2BulkJobsBulkJobsIdJobData($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2BulkJobsBulkJobsIdJobData

Upload job data for the specified bulk job. Upload an array of objects, where element contains the parameters necessary to execute the individual calls. Each call to this endpoint can handle up to 5,000 records at a time. There is no limit to how many times you can create job data for a given bulk job.

For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2BulkJobsBulkJobsIdJobDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostV2BulkJobsBulkJobsIdJobDataRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2BulkJobsBulkJobsIdJobDataRequest();
    $request->requestBody = new PostV2BulkJobsBulkJobsIdJobDataRequestBody();
    $request->requestBody->data = [
        'esse',
        'recusandae',
        'aperiam',
        'distinctio',
    ];
    $request->bulkJobsId = 799796;

    $response = $sdk->bulkJobsJobData->postV2BulkJobsBulkJobsIdJobData($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
