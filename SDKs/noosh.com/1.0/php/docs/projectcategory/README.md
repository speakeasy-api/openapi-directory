# projectCategory

### Available Operations

* [getProjectCategoryList](#getprojectcategorylist) - List the project categories
* [getProjectCategoryListOfClient](#getprojectcategorylistofclient) - List the project categories of client side

## getProjectCategoryList

List the project categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectCategoryListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectCategoryListRequest();
    $request->workgroupId = 'temporibus';

    $response = $sdk->projectCategory->getProjectCategoryList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectCategoryListOfClient

List the project categories of client side

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectCategoryListOfClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectCategoryListOfClientRequest();
    $request->clientWorkgroupId = 'laborum';
    $request->workgroupId = 'quasi';

    $response = $sdk->projectCategory->getProjectCategoryListOfClient($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
