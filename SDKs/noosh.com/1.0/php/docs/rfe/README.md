# rfe

### Available Operations

* [getRfe](#getrfe) - Get a specific Rfe
* [getRfeList](#getrfelist) - List the RFES
* [postRfeJson](#postrfejson) - Create a RFE
* [postRfeRaw](#postrferaw) - Create a RFE

## getRfe

Get a specific Rfe

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRfeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRfeRequest();
    $request->projectId = 'dicta';
    $request->rfeId = 'harum';
    $request->workgroupId = 'enim';

    $response = $sdk->rfe->getRfe($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRfeList

List the RFES

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRfeListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRfeListRequest();
    $request->projectId = 'accusamus';
    $request->workgroupId = 'commodi';

    $response = $sdk->rfe->getRfeList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRfeJson

Create a RFE

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRfeJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\RfePO;
use \OpenAPI\OpenAPI\Models\Shared\RfeSpecPO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRfeJsonRequest();
    $request->rfePO = new RfePO();
    $request->rfePO->description = 'sample description';
    $request->rfePO->details = 'sample details';
    $request->rfePO->estimateDueDate = DateTime::createFromFormat('Y-m-d', '2022-10-22');
    $request->rfePO->proposedOrderCompletionDate = DateTime::createFromFormat('Y-m-d', '2022-04-23');
    $request->rfePO->rfeNumber = 'sample rfe_number';
    $request->rfePO->rfeTitle = 'sample rfe_title';
    $request->rfePO->specs = [
        new RfeSpecPO(),
        new RfeSpecPO(),
        new RfeSpecPO(),
    ];
    $request->rfePO->supplierUserIds = [
        1,
        1,
        1,
    ];
    $request->projectId = 'pariatur';
    $request->workgroupId = 'modi';

    $response = $sdk->rfe->postRfeJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRfeRaw

Create a RFE

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRfeRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRfeRawRequest();
    $request->requestBody = 'praesentium';
    $request->projectId = 'rem';
    $request->workgroupId = 'voluptates';

    $response = $sdk->rfe->postRfeRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
