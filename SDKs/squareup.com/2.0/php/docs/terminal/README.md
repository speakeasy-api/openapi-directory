# terminal

### Available Operations

* [cancelTerminalCheckout](#cancelterminalcheckout) - CancelTerminalCheckout
* [cancelTerminalRefund](#cancelterminalrefund) - CancelTerminalRefund
* [createTerminalCheckout](#createterminalcheckout) - CreateTerminalCheckout
* [createTerminalRefund](#createterminalrefund) - CreateTerminalRefund
* [getTerminalCheckout](#getterminalcheckout) - GetTerminalCheckout
* [getTerminalRefund](#getterminalrefund) - GetTerminalRefund
* [searchTerminalCheckouts](#searchterminalcheckouts) - SearchTerminalCheckouts
* [searchTerminalRefunds](#searchterminalrefunds) - SearchTerminalRefunds

## cancelTerminalCheckout

Cancels a Terminal checkout request if the status of the request permits it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelTerminalCheckoutRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelTerminalCheckoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelTerminalCheckoutRequest();
    $request->checkoutId = 'corporis';

    $requestSecurity = new CancelTerminalCheckoutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->terminal->cancelTerminalCheckout($request, $requestSecurity);

    if ($response->cancelTerminalCheckoutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelTerminalRefund

Cancels an Interac Terminal refund request by refund request ID if the status of the request permits it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelTerminalRefundRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelTerminalRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelTerminalRefundRequest();
    $request->terminalRefundId = 'ea';

    $requestSecurity = new CancelTerminalRefundSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->terminal->cancelTerminalRefund($request, $requestSecurity);

    if ($response->cancelTerminalRefundResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTerminalCheckout

Creates a Terminal checkout request and sends it to the specified device to take a payment
for the requested amount.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateTerminalCheckoutRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalCheckout;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\DeviceCheckoutOptions;
use \OpenAPI\OpenAPI\Models\Shared\TipSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateTerminalCheckoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTerminalCheckoutRequest();
    $request->checkout = new TerminalCheckout();
    $request->checkout->amountMoney = new Money();
    $request->checkout->amountMoney->amount = 179906;
    $request->checkout->amountMoney->currency = 'aliquam';
    $request->checkout->appId = 'blanditiis';
    $request->checkout->cancelReason = 'hic';
    $request->checkout->createdAt = 'maiores';
    $request->checkout->deadlineDuration = 'asperiores';
    $request->checkout->deviceOptions = new DeviceCheckoutOptions();
    $request->checkout->deviceOptions->deviceId = 'autem';
    $request->checkout->deviceOptions->skipReceiptScreen = false;
    $request->checkout->deviceOptions->tipSettings = new TipSettings();
    $request->checkout->deviceOptions->tipSettings->allowTipping = false;
    $request->checkout->deviceOptions->tipSettings->customTipField = false;
    $request->checkout->deviceOptions->tipSettings->separateTipScreen = false;
    $request->checkout->deviceOptions->tipSettings->smartTipping = false;
    $request->checkout->deviceOptions->tipSettings->tipPercentages = [
        585628,
    ];
    $request->checkout->id = 'a910abdc-ab62-4676-a96e-1ec00221b335';
    $request->checkout->locationId = 'illum';
    $request->checkout->note = 'praesentium';
    $request->checkout->paymentIds = [
        'similique',
        'eligendi',
        'tempore',
    ];
    $request->checkout->paymentType = 'amet';
    $request->checkout->referenceId = 'debitis';
    $request->checkout->status = 'nobis';
    $request->checkout->updatedAt = 'asperiores';
    $request->idempotencyKey = 'temporibus';

    $requestSecurity = new CreateTerminalCheckoutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->terminal->createTerminalCheckout($request, $requestSecurity);

    if ($response->createTerminalCheckoutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTerminalRefund

Creates a request to refund an Interac payment completed on a Square Terminal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateTerminalRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalRefund;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\CreateTerminalRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTerminalRefundRequest();
    $request->idempotencyKey = 'id';
    $request->refund = new TerminalRefund();
    $request->refund->amountMoney = new Money();
    $request->refund->amountMoney->amount = 542017;
    $request->refund->amountMoney->currency = 'quibusdam';
    $request->refund->appId = 'sit';
    $request->refund->cancelReason = 'quo';
    $request->refund->createdAt = 'veniam';
    $request->refund->deadlineDuration = 'aliquam';
    $request->refund->deviceId = 'provident';
    $request->refund->id = 'ef030049-78a6-41fa-9cf2-0688f77c1ffc';
    $request->refund->locationId = 'voluptate';
    $request->refund->orderId = 'inventore';
    $request->refund->paymentId = 'facere';
    $request->refund->reason = 'maxime';
    $request->refund->refundId = 'fuga';
    $request->refund->status = 'ab';
    $request->refund->updatedAt = 'ex';

    $requestSecurity = new CreateTerminalRefundSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->terminal->createTerminalRefund($request, $requestSecurity);

    if ($response->createTerminalRefundResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTerminalCheckout

Retrieves a Terminal checkout request by `checkout_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalCheckoutRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalCheckoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTerminalCheckoutRequest();
    $request->checkoutId = 'consectetur';

    $requestSecurity = new GetTerminalCheckoutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->terminal->getTerminalCheckout($request, $requestSecurity);

    if ($response->getTerminalCheckoutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTerminalRefund

Retrieves an Interac Terminal refund object by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalRefundRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTerminalRefundRequest();
    $request->terminalRefundId = 'maiores';

    $requestSecurity = new GetTerminalRefundSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->terminal->getTerminalRefund($request, $requestSecurity);

    if ($response->getTerminalRefundResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchTerminalCheckouts

Retrieves a filtered list of Terminal checkout requests created by the account making the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchTerminalCheckoutsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalCheckoutQuery;
use \OpenAPI\OpenAPI\Models\Shared\TerminalCheckoutQueryFilter;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\TerminalCheckoutQuerySort;
use \OpenAPI\OpenAPI\Models\Operations\SearchTerminalCheckoutsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTerminalCheckoutsRequest();
    $request->cursor = 'sed';
    $request->limit = 657141;
    $request->query = new TerminalCheckoutQuery();
    $request->query->filter = new TerminalCheckoutQueryFilter();
    $request->query->filter->createdAt = new TimeRange();
    $request->query->filter->createdAt->endAt = 'sequi';
    $request->query->filter->createdAt->startAt = 'eligendi';
    $request->query->filter->deviceId = 'voluptatum';
    $request->query->filter->status = 'perferendis';
    $request->query->sort = new TerminalCheckoutQuerySort();
    $request->query->sort->sortOrder = 'laborum';

    $requestSecurity = new SearchTerminalCheckoutsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->terminal->searchTerminalCheckouts($request, $requestSecurity);

    if ($response->searchTerminalCheckoutsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchTerminalRefunds

Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchTerminalRefundsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalRefundQuery;
use \OpenAPI\OpenAPI\Models\Shared\TerminalRefundQueryFilter;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\TerminalRefundQuerySort;
use \OpenAPI\OpenAPI\Models\Operations\SearchTerminalRefundsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTerminalRefundsRequest();
    $request->cursor = 'omnis';
    $request->limit = 470321;
    $request->query = new TerminalRefundQuery();
    $request->query->filter = new TerminalRefundQueryFilter();
    $request->query->filter->createdAt = new TimeRange();
    $request->query->filter->createdAt->endAt = 'tenetur';
    $request->query->filter->createdAt->startAt = 'sapiente';
    $request->query->filter->deviceId = 'velit';
    $request->query->filter->status = 'adipisci';
    $request->query->sort = new TerminalRefundQuerySort();
    $request->query->sort->sortOrder = 'non';

    $requestSecurity = new SearchTerminalRefundsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->terminal->searchTerminalRefunds($request, $requestSecurity);

    if ($response->searchTerminalRefundsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
