# crmActivityFields

## Overview

CRM Activity Fields

### Available Operations

* [getV2CrmActivityFieldsJson](#getv2crmactivityfieldsjson) - List crm activity fields

## getV2CrmActivityFieldsJson

Fetches multiple crm activity field records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CrmActivityFieldsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CrmActivityFieldsJsonRequest();
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 690025;
    $request->perPage = 473221;
    $request->sortBy = 'rerum';
    $request->sortDirection = 'occaecati';
    $request->source = 'minima';

    $response = $sdk->crmActivityFields->getV2CrmActivityFieldsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
