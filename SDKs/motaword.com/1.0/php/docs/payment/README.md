# payment

### Available Operations

* [deleteCreditCard](#deletecreditcard) - Delete credit card
* [getCreditCard](#getcreditcard) - View saved credit card
* [resetCardPaymentCode](#resetcardpaymentcode) - Reset credit card payment code
* [resetCorporatePaymentCode](#resetcorporatepaymentcode) - Reset payment code
* [toggleCorporateAutoCharge](#togglecorporateautocharge) - Manage automatic charges on your credit card

## deleteCreditCard

Delete credit card

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCreditCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCreditCardRequest();
    $request->cardId = 957451;

    $response = $sdk->payment->deleteCreditCard($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreditCard

View saved credit card

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCreditCardRequest();
    $request->cardId = 518201;

    $response = $sdk->payment->getCreditCard($request);

    if ($response->creditCard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetCardPaymentCode

Reset the payment code used to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetCardPaymentCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetCardPaymentCodeRequest();
    $request->cardId = 471752;

    $response = $sdk->payment->resetCardPaymentCode($request);

    if ($response->creditCard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetCorporatePaymentCode

Reset your corporate account's payment code to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.

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
    $response = $sdk->payment->resetCorporatePaymentCode();

    if ($response->creditCard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toggleCorporateAutoCharge

Toggle (enable/disable) automatic charges on the credit card on file.

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
    $response = $sdk->payment->toggleCorporateAutoCharge();

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
