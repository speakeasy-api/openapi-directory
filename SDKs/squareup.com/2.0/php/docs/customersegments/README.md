# customerSegments

### Available Operations

* [listCustomerSegments](#listcustomersegments) - ListCustomerSegments
* [retrieveCustomerSegment](#retrievecustomersegment) - RetrieveCustomerSegment

## listCustomerSegments

Retrieves the list of customer segments of a business.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerSegmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerSegmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomerSegmentsRequest();
    $request->cursor = 'distinctio';
    $request->limit = 756779;

    $requestSecurity = new ListCustomerSegmentsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerSegments->listCustomerSegments($request, $requestSecurity);

    if ($response->listCustomerSegmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveCustomerSegment

Retrieves a specific customer segment as identified by the `segment_id` value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCustomerSegmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCustomerSegmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveCustomerSegmentRequest();
    $request->segmentId = 'sit';

    $requestSecurity = new RetrieveCustomerSegmentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerSegments->retrieveCustomerSegment($request, $requestSecurity);

    if ($response->retrieveCustomerSegmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
