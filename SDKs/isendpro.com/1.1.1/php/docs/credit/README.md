# credit

### Available Operations

* [getCredit](#getcredit) - Interrogation credit

## getCredit

Retourne le credit existant associe au compte.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditCreditEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCreditRequest();
    $request->credit = GetCreditCreditEnum::ONE;
    $request->keyid = 'minus';

    $response = $sdk->credit->getCredit($request);

    if ($response->creditResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
