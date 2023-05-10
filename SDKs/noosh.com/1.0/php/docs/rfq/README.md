# rfq

### Available Operations

* [getRfq](#getrfq) - Get a specific Rfq
* [getRfqList](#getrfqlist) - List the rfqs

## getRfq

Get a specific Rfq

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRfqRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRfqRequest();
    $request->projectId = 'quasi';
    $request->rfqId = 'repudiandae';
    $request->workgroupId = 'sint';

    $response = $sdk->rfq->getRfq($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRfqList

List the rfqs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRfqListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRfqListRequest();
    $request->projectId = 'veritatis';
    $request->workgroupId = 'itaque';

    $response = $sdk->rfq->getRfqList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
