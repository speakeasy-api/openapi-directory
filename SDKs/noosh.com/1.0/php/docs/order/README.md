# order

### Available Operations

* [getBuyOrder](#getbuyorder) - Get a specific buy order
* [getBuyOrderList](#getbuyorderlist) - List the buy orders
* [getBuyOrderListOfWorkgroup](#getbuyorderlistofworkgroup) - List the buy orders of workgroup
* [getBuyOrderOfWorkgroup](#getbuyorderofworkgroup) - Get a specific buy order of workgroup
* [getOrder](#getorder) - Get a specific buy/sell order
* [getSellOrder](#getsellorder) - Get a specific sell order
* [getSellOrderList](#getsellorderlist) - List the sell orders
* [getSellOrderListOfWorkgroup](#getsellorderlistofworkgroup) - List the sell orders of workgrop
* [getSellOrderOfWorkgroup](#getsellorderofworkgroup) - Get a specific sell order
* [postBuyOrderJson](#postbuyorderjson) - Create a quick buy order
* [postBuyOrderRaw](#postbuyorderraw) - Create a quick buy order
* [putBuyOrderJson](#putbuyorderjson) - Update a specific buy order
* [putBuyOrderRaw](#putbuyorderraw) - Update a specific buy order
* [putSellOrderJson](#putsellorderjson) - Update / Accept or Reject a specific sell order
* [putSellOrderRaw](#putsellorderraw) - Update / Accept or Reject a specific sell order

## getBuyOrder

Get a specific buy order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBuyOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBuyOrderRequest();
    $request->orderId = 'officia';
    $request->projectId = 'occaecati';
    $request->workgroupId = 'fugit';

    $response = $sdk->order->getBuyOrder($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBuyOrderList

List the buy orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBuyOrderListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBuyOrderListRequest();
    $request->projectId = 'deleniti';
    $request->workgroupId = 'hic';

    $response = $sdk->order->getBuyOrderList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBuyOrderListOfWorkgroup

List the buy orders of workgroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBuyOrderListOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBuyOrderListOfWorkgroupRequest();
    $request->workgroupId = 'optio';

    $response = $sdk->order->getBuyOrderListOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBuyOrderOfWorkgroup

Get a specific buy order of workgroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBuyOrderOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBuyOrderOfWorkgroupRequest();
    $request->orderId = 'totam';
    $request->workgroupId = 'beatae';

    $response = $sdk->order->getBuyOrderOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrder

Get a specific buy/sell order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderRequest();
    $request->orderId = 'commodi';
    $request->projectId = 'molestiae';
    $request->workgroupId = 'modi';

    $response = $sdk->order->getOrder($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSellOrder

Get a specific sell order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSellOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSellOrderRequest();
    $request->orderId = 'qui';
    $request->projectId = 'impedit';
    $request->workgroupId = 'cum';

    $response = $sdk->order->getSellOrder($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSellOrderList

List the sell orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSellOrderListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSellOrderListRequest();
    $request->projectId = 'esse';
    $request->workgroupId = 'ipsum';

    $response = $sdk->order->getSellOrderList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSellOrderListOfWorkgroup

List the sell orders of workgrop

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSellOrderListOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSellOrderListOfWorkgroupRequest();
    $request->workgroupId = 'excepturi';

    $response = $sdk->order->getSellOrderListOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSellOrderOfWorkgroup

Get a specific sell order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSellOrderOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSellOrderOfWorkgroupRequest();
    $request->orderId = 'aspernatur';
    $request->workgroupId = 'perferendis';

    $response = $sdk->order->getSellOrderOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBuyOrderJson

Create a quick buy order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBuyOrderJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderPO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\OrderItemPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBuyOrderJsonRequest();
    $request->orderPO = new OrderPO();
    $request->orderPO->buyerUserId = 1;
    $request->orderPO->comments = 'sample comments';
    $request->orderPO->customFields = [
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
    ];
    $request->orderPO->invoiceOrBillingRecipient = 1;
    $request->orderPO->orderCompletionDate = DateTime::createFromFormat('Y-m-d', '2022-09-13');
    $request->orderPO->orderItems = [
        new OrderItemPersistVO(),
        new OrderItemPersistVO(),
        new OrderItemPersistVO(),
    ];
    $request->orderPO->otherSelectionReason = 'sample other_selection_reason';
    $request->orderPO->paymentMethodId = 1;
    $request->orderPO->paymentReferenceNo = 'sample payment_reference_no';
    $request->orderPO->sellOrder = true;
    $request->orderPO->shipping = 'dolor';
    $request->orderPO->supplierReference = 'sample supplier_reference';
    $request->orderPO->supplierSelectionReasonId = 1;
    $request->orderPO->supplierUserId = 1;
    $request->orderPO->tax = 'sample tax';
    $request->orderPO->title = 'sample title';
    $request->projectId = 'natus';
    $request->workgroupId = 'laboriosam';

    $response = $sdk->order->postBuyOrderJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBuyOrderRaw

Create a quick buy order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBuyOrderRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBuyOrderRawRequest();
    $request->requestBody = 'hic';
    $request->projectId = 'saepe';
    $request->workgroupId = 'fuga';

    $response = $sdk->order->postBuyOrderRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putBuyOrderJson

Update a specific buy order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutBuyOrderJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderUpdPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutBuyOrderJsonRequest();
    $request->orderUpdPersistVO = new OrderUpdPersistVO();
    $request->orderUpdPersistVO->action = 'sample action';
    $request->orderUpdPersistVO->budgetTypeFieldId = 1;
    $request->orderUpdPersistVO->comments = 'sample comments';
    $request->orderUpdPersistVO->customFields = [
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
    ];
    $request->orderUpdPersistVO->orderCompletionDate = DateTime::createFromFormat('Y-m-d', '2022-05-22');
    $request->orderUpdPersistVO->orderId = 1;
    $request->orderUpdPersistVO->otherSelectionReason = 'sample other_selection_reason';
    $request->orderUpdPersistVO->oversPercent = 'iure';
    $request->orderUpdPersistVO->paymentMethodId = 1;
    $request->orderUpdPersistVO->paymentReferenceNo = 'sample payment_reference_no';
    $request->orderUpdPersistVO->rejectReason = 'sample reject_reason';
    $request->orderUpdPersistVO->supplierSelectionReasonId = 1;
    $request->orderUpdPersistVO->undersPercent = 'saepe';
    $request->orderId = 'quidem';
    $request->projectId = 'architecto';
    $request->workgroupId = 'ipsa';

    $response = $sdk->order->putBuyOrderJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putBuyOrderRaw

Update a specific buy order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutBuyOrderRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutBuyOrderRawRequest();
    $request->requestBody = 'reiciendis';
    $request->orderId = 'est';
    $request->projectId = 'mollitia';
    $request->workgroupId = 'laborum';

    $response = $sdk->order->putBuyOrderRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSellOrderJson

Update / Accept or Reject a specific sell order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSellOrderJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderUpdPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSellOrderJsonRequest();
    $request->orderUpdPersistVO = new OrderUpdPersistVO();
    $request->orderUpdPersistVO->action = 'sample action';
    $request->orderUpdPersistVO->budgetTypeFieldId = 1;
    $request->orderUpdPersistVO->comments = 'sample comments';
    $request->orderUpdPersistVO->customFields = [
        new CustomFieldPersistVO(),
    ];
    $request->orderUpdPersistVO->orderCompletionDate = DateTime::createFromFormat('Y-m-d', '2022-08-23');
    $request->orderUpdPersistVO->orderId = 1;
    $request->orderUpdPersistVO->otherSelectionReason = 'sample other_selection_reason';
    $request->orderUpdPersistVO->oversPercent = 'explicabo';
    $request->orderUpdPersistVO->paymentMethodId = 1;
    $request->orderUpdPersistVO->paymentReferenceNo = 'sample payment_reference_no';
    $request->orderUpdPersistVO->rejectReason = 'sample reject_reason';
    $request->orderUpdPersistVO->supplierSelectionReasonId = 1;
    $request->orderUpdPersistVO->undersPercent = 'nobis';
    $request->orderId = 'enim';
    $request->projectId = 'omnis';
    $request->workgroupId = 'nemo';

    $response = $sdk->order->putSellOrderJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSellOrderRaw

Update / Accept or Reject a specific sell order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSellOrderRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSellOrderRawRequest();
    $request->requestBody = 'minima';
    $request->orderId = 'excepturi';
    $request->projectId = 'accusantium';
    $request->workgroupId = 'iure';

    $response = $sdk->order->putSellOrderRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
