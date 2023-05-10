# commission

### Available Operations

* [getCommissions](#getcommissions) - Returns a commission list of current client.
* [getCommissionsByFilter](#getcommissionsbyfilter) - Returns a commission list of current client.

## getCommissions

Returns a commission list of current client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->commission->getCommissions();

    if ($response->commissionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommissionsByFilter

Returns a commission list of current client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ReportFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportFilter();
    $request->budgetCode = 'porro';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T15:49:54.663Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-20T20:35:01.256Z');
    $request->sourceLanguages = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->targetLanguages = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->users = [
        186332,
        774234,
    ];

    $response = $sdk->commission->getCommissionsByFilter($request);

    if ($response->commissionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
