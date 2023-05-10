# userFields

### Available Operations

* [getProjectHomeUserFieldListOfClient](#getprojecthomeuserfieldlistofclient) - List projec home user fields of client workgroup
* [getProjectHomeUserFieldsList](#getprojecthomeuserfieldslist) - List projec home user fields

## getProjectHomeUserFieldListOfClient

List projec home user fields of client workgroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectHomeUserFieldListOfClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectHomeUserFieldListOfClientRequest();
    $request->clientWorkgroupId = 'magni';
    $request->workgroupId = 'sunt';

    $response = $sdk->userFields->getProjectHomeUserFieldListOfClient($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectHomeUserFieldsList

List projec home user fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectHomeUserFieldsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectHomeUserFieldsListRequest();
    $request->workgroupId = 'quo';

    $response = $sdk->userFields->getProjectHomeUserFieldsList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
