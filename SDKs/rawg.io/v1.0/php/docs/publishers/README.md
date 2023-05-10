# publishers

### Available Operations

* [publishersList](#publisherslist) - Get a list of video game publishers.
* [publishersRead](#publishersread) - Get details of the publisher.

## publishersList

Get a list of video game publishers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishersListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishersListRequest();
    $request->page = 166847;
    $request->pageSize = 123820;

    $response = $sdk->publishers->publishersList($request);

    if ($response->publishersList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishersRead

Get details of the publisher.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishersReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishersReadRequest();
    $request->id = 779051;

    $response = $sdk->publishers->publishersRead($request);

    if ($response->publisherSingle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
