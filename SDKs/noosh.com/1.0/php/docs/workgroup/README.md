# workgroup

### Available Operations

* [getClientWorkgroupList](#getclientworkgrouplist) - List client workgroups
* [getSpecificClientWorkgroup](#getspecificclientworkgroup) - Get a specific client workgroups
* [getSupplierWorkgroupDetail](#getsupplierworkgroupdetail) - Get the specific supplier of My Group
* [getSupplierWorkgroupList](#getsupplierworkgrouplist) - List supplier workgroups
* [getWorkgroupDetail](#getworkgroupdetail) - Detail workgroup info
* [getWorkgroupList](#getworkgrouplist) - List the workgroups
* [putWorkgroupJson](#putworkgroupjson) - Update a specific Workgroup
* [putWorkgroupRaw](#putworkgroupraw) - Update a specific Workgroup

## getClientWorkgroupList

List client workgroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClientWorkgroupListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClientWorkgroupListRequest();
    $request->workgroupId = 'illum';

    $response = $sdk->workgroup->getClientWorkgroupList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpecificClientWorkgroup

Get a specific client workgroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSpecificClientWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpecificClientWorkgroupRequest();
    $request->clientWorkgroupId = 'pariatur';
    $request->workgroupId = 'maxime';

    $response = $sdk->workgroup->getSpecificClientWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSupplierWorkgroupDetail

Get the specific supplier of My Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSupplierWorkgroupDetailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSupplierWorkgroupDetailRequest();
    $request->buSupplierWorkgroupId = 'ea';
    $request->workgroupId = 'excepturi';

    $response = $sdk->workgroup->getSupplierWorkgroupDetail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSupplierWorkgroupList

List supplier workgroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSupplierWorkgroupListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSupplierWorkgroupListRequest();
    $request->workgroupId = 'odit';

    $response = $sdk->workgroup->getSupplierWorkgroupList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkgroupDetail

Detail workgroup info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkgroupDetailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkgroupDetailRequest();
    $request->workgroupId = 'ea';

    $response = $sdk->workgroup->getWorkgroupDetail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkgroupList

List the workgroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkgroupListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkgroupListRequest();
    $request->workgroupName = 'accusantium';
    $request->workgroupTypes = [
        'maiores',
    ];

    $response = $sdk->workgroup->getWorkgroupList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkgroupJson

Update a specific Workgroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkgroupJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkgroupUpdPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkgroupJsonRequest();
    $request->workgroupUpdPersistVO = new WorkgroupUpdPersistVO();
    $request->workgroupUpdPersistVO->addressLine1 = 'sample address_line1';
    $request->workgroupUpdPersistVO->addressLine2 = 'sample address_line2';
    $request->workgroupUpdPersistVO->addressLine3 = 'sample address_line3';
    $request->workgroupUpdPersistVO->city = 'sample city';
    $request->workgroupUpdPersistVO->country = 'sample country';
    $request->workgroupUpdPersistVO->customFields = [
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
    ];
    $request->workgroupUpdPersistVO->decimalPlaces = 1;
    $request->workgroupUpdPersistVO->postal = 'sample postal';
    $request->workgroupUpdPersistVO->state = 'sample state';
    $request->workgroupUpdPersistVO->workgroupName = 'sample workgroup_name';
    $request->workgroupId = 'ipsam';

    $response = $sdk->workgroup->putWorkgroupJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkgroupRaw

Update a specific Workgroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkgroupRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkgroupRawRequest();
    $request->requestBody = 'voluptate';
    $request->workgroupId = 'autem';

    $response = $sdk->workgroup->putWorkgroupRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
