# addSubaccount

### Available Operations

* [subaccountAdd](#subaccountadd) - Ajoute un sous compte

## subaccountAdd

Ajoute un sous compte

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubaccountAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubaccountAddRequestSubAccountEditEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubaccountAddRequest();
    $request->keyid = 'unde';
    $request->subAccountEdit = SubaccountAddRequestSubAccountEditEnum::ADD_ACCOUNT;
    $request->subAccountLogin = 'nulla';
    $request->subAccountPassword = 'corrupti';

    $response = $sdk->addSubaccount->subaccountAdd($request);

    if ($response->subaccountAddResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
