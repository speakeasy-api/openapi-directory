# localTaxes

### Available Operations

* [addLocalTax](#addlocaltax) - Add new local tax
* [deleteLocalTaxByTaxCode](#deletelocaltaxbytaxcode) - Delete local tax by tax code
* [getAllLocalTaxes](#getalllocaltaxes) - Get all local taxes
* [getLocalTaxByTaxCode](#getlocaltaxbytaxcode) - Get local taxes by tax code

## addLocalTax

Sends new employee local tax information directly to Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddLocalTaxRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocalTax;
use \OpenAPI\OpenAPI\Models\Operations\AddLocalTaxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddLocalTaxRequest();
    $request->companyId = 'ea';
    $request->employeeId = 'aspernatur';
    $request->localTax = new LocalTax();
    $request->localTax->exemptions = 4282.24;
    $request->localTax->exemptions2 = 8221.18;
    $request->localTax->filingStatus = 'magnam';
    $request->localTax->residentPSD = 'ratione';
    $request->localTax->taxCode = 'ex';
    $request->localTax->workPSD = 'laudantium';

    $requestSecurity = new AddLocalTaxSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->localTaxes->addLocalTax($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLocalTaxByTaxCode

Delete local tax by tax code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocalTaxByTaxCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocalTaxByTaxCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLocalTaxByTaxCodeRequest();
    $request->companyId = 'dicta';
    $request->employeeId = 'dolor';
    $request->taxCode = 'maiores';

    $requestSecurity = new DeleteLocalTaxByTaxCodeSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->localTaxes->deleteLocalTaxByTaxCode($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllLocalTaxes

Returns all local taxes for the selected employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllLocalTaxesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllLocalTaxesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllLocalTaxesRequest();
    $request->companyId = 'quasi';
    $request->employeeId = 'ex';

    $requestSecurity = new GetAllLocalTaxesSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->localTaxes->getAllLocalTaxes($request, $requestSecurity);

    if ($response->localTaxes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLocalTaxByTaxCode

Returns all local taxes with the provided tax code for the selected employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLocalTaxByTaxCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLocalTaxByTaxCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocalTaxByTaxCodeRequest();
    $request->companyId = 'nulla';
    $request->employeeId = 'excepturi';
    $request->taxCode = 'voluptatibus';

    $requestSecurity = new GetLocalTaxByTaxCodeSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->localTaxes->getLocalTaxByTaxCode($request, $requestSecurity);

    if ($response->localTaxes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
