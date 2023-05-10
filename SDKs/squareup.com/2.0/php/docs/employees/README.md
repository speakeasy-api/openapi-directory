# employees

### Available Operations

* [getV2Employees](#getv2employees) - ListEmployees
* [getV2EmployeesId](#getv2employeesid) - RetrieveEmployee

## getV2Employees

ListEmployees

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2EmployeesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV2EmployeesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2EmployeesRequest();
    $request->cursor = 'sapiente';
    $request->limit = 895386;
    $request->locationId = 'illo';
    $request->status = 'reiciendis';

    $requestSecurity = new GetV2EmployeesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->employees->getV2Employees($request, $requestSecurity);

    if ($response->listEmployeesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2EmployeesId

RetrieveEmployee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2EmployeesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV2EmployeesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2EmployeesIdRequest();
    $request->id = '08f4294e-3698-4f44-bf60-3e8b445e80ca';

    $requestSecurity = new GetV2EmployeesIdSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->employees->getV2EmployeesId($request, $requestSecurity);

    if ($response->retrieveEmployeeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
