# tags

## Overview

Tags

### Available Operations

* [getV2TagsJson](#getv2tagsjson) - List team tags

## getV2TagsJson

Fetches a list of the tags used for a team. The records can be filtered, paged, and sorted according to
the respective parameters.

Tags can be applied to mulitple resource types.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2TagsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2TagsJsonRequest();
    $request->ids = [
        821904,
        220824,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 700529;
    $request->perPage = 153582;
    $request->search = 'accusamus';
    $request->sortBy = 'optio';
    $request->sortDirection = 'delectus';

    $response = $sdk->tags->getV2TagsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
