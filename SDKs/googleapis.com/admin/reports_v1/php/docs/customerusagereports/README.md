# customerUsageReports

### Available Operations

* [reportsCustomerUsageReportsGet](#reportscustomerusagereportsget) - Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

## reportsCustomerUsageReportsGet

Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReportsCustomerUsageReportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsCustomerUsageReportsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportsCustomerUsageReportsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->customerId = 'itaque';
    $request->date = 'incidunt';
    $request->fields = 'enim';
    $request->key = 'consequatur';
    $request->oauthToken = 'est';
    $request->pageToken = 'quibusdam';
    $request->parameters = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new ReportsCustomerUsageReportsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerUsageReports->reportsCustomerUsageReportsGet($request, $requestSecurity);

    if ($response->usageReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
