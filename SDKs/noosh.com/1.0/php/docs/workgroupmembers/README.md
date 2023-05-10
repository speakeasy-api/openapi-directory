# workgroupMembers

### Available Operations

* [getWorkgroupMemberInfo](#getworkgroupmemberinfo) - Workgroup Member Info
* [getWorkgroupMemberList](#getworkgroupmemberlist) - List the workgroup members

## getWorkgroupMemberInfo

Workgroup Member Info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkgroupMemberInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkgroupMemberInfoRequest();
    $request->userId = 'nam';
    $request->workgroupId = 'eaque';

    $response = $sdk->workgroupMembers->getWorkgroupMemberInfo($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkgroupMemberList

List the workgroup members

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkgroupMemberListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkgroupMemberListRequest();
    $request->workgroupId = 'pariatur';

    $response = $sdk->workgroupMembers->getWorkgroupMemberList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
