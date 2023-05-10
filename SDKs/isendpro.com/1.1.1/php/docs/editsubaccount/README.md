# editSubaccount

### Available Operations

* [subaccountEdit](#subaccountedit) - Edit a subaccount

## subaccountEdit

Edit a subaccount

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubaccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubaccountRequestSubAccountEditEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubaccountRequestSubAccountRestrictionStopEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubaccountRequestSubAccountRestrictionTimeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubaccountRequest();
    $request->keyid = 'iusto';
    $request->subAccountAddCredit = 'excepturi';
    $request->subAccountCountryCode = 'nisi';
    $request->subAccountEdit = SubaccountRequestSubAccountEditEnum::SET_RESTRICTION;
    $request->subAccountKeyId = 'temporibus';
    $request->subAccountPrice = 'ab';
    $request->subAccountRestrictionStop = SubaccountRequestSubAccountRestrictionStopEnum::ZERO;
    $request->subAccountRestrictionTime = SubaccountRequestSubAccountRestrictionTimeEnum::ZERO;

    $response = $sdk->editSubaccount->subaccountEdit($request);

    if ($response->subaccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
