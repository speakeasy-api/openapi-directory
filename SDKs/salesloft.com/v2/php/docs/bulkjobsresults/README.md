# bulkJobsResults

## Overview

Bulk Jobs - Results

### Available Operations

* [getV2BulkJobsBulkJobsIdResults](#getv2bulkjobsbulkjobsidresults) - List job data for a completed bulk job.

## getV2BulkJobsBulkJobsIdResults

Fetches multiple job data records for a completed bulk job. Note that until a bulk job's state is set to `done` the returned `data` will be an empty array. Pagination is not supported, but cursor based polling is via use of the `id[gt]` filter. Pass the last id seen (i.e. `id[gt]=1234`) in order to get the next batch of records.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2BulkJobsBulkJobsIdResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2BulkJobsBulkJobsIdResultsRequest();
    $request->bulkJobsId = 490819;
    $request->id = [
        'nihil' => 'totam',
    ];
    $request->perPage = 882710;
    $request->status = [
        'odio',
        'occaecati',
    ];

    $response = $sdk->bulkJobsResults->getV2BulkJobsBulkJobsIdResults($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
