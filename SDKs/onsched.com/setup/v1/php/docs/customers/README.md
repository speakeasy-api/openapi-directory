# customers

### Available Operations

* [getSetupV1Customers](#getsetupv1customers) - List Customers
* [getSetupV1CustomersId](#getsetupv1customersid) - Get Customer
* [getSetupV1CustomersIdPrivacy](#getsetupv1customersidprivacy) - Get Customer Data

## getSetupV1Customers

<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CustomersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CustomersRequest();
    $request->deleted = false;
    $request->email = 'Maximus.Cormier99@gmail.com';
    $request->groupId = 'facilis';
    $request->lastname = 'Klein';
    $request->limit = 709072;
    $request->locationId = 'ab';
    $request->offset = 611749;

    $response = $sdk->customers->getSetupV1Customers($request);

    if ($response->customerListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CustomersId

<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /setup/v1/customers</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CustomersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CustomersIdRequest();
    $request->id = '4a276b26-916f-4e1f-88f4-294e3698f447';

    $response = $sdk->customers->getSetupV1CustomersId($request);

    if ($response->customerViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CustomersIdPrivacy

<p>Use this endpoint to return the <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's using the <i>GET /setup/v1/customers</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CustomersIdPrivacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CustomersIdPrivacyRequest();
    $request->id = 'f603e8b4-45e8-40ca-95ef-d20e457e1858';

    $response = $sdk->customers->getSetupV1CustomersIdPrivacy($request);

    if ($response->customerPrivacyViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
