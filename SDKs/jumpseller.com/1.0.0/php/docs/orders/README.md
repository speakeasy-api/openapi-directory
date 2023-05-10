# orders

### Available Operations

* [getOrdersJson](#getordersjson) - Retrieve all Orders.
* [getOrdersAfterIdJson](#getordersafteridjson) - Retrieve orders filtered by Order Id.
* [getOrdersCountJson](#getorderscountjson) - Count all Orders.
* [getOrdersStatusStatusJson](#getordersstatusstatusjson) - Retrieve orders filtered by status.
* [getOrdersIdJson](#getordersidjson) - Retrieve a single Order.
* [getOrdersIdHistoryJson](#getordersidhistoryjson) - Retrieve all Order History.
* [postOrdersJson](#postordersjson) - Create a new Order.
* [postOrdersIdHistoryJson](#postordersidhistoryjson) - Create a new Order History Entry.
* [putOrdersIdJson](#putordersidjson) - Modify an existing Order.

## getOrdersJson

Retrieve all Orders.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrdersJsonRequest();
    $request->authtoken = 'dolorum';
    $request->limit = 478596;
    $request->login = 'voluptate';
    $request->page = 677082;

    $response = $sdk->orders->getOrdersJson($request);

    if ($response->orders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrdersAfterIdJson

For example the GET /orders/after/5000 will return Order 5001, 5002, 5003, etc.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersAfterIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrdersAfterIdJsonRequest();
    $request->authtoken = 'deleniti';
    $request->id = 607045;
    $request->login = 'necessitatibus';

    $response = $sdk->orders->getOrdersAfterIdJson($request);

    if ($response->order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrdersCountJson

Count all Orders.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrdersCountJsonRequest();
    $request->authtoken = 'distinctio';
    $request->login = 'asperiores';

    $response = $sdk->orders->getOrdersCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrdersStatusStatusJson

Retrieve orders filtered by status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersStatusStatusJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersStatusStatusJsonStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrdersStatusStatusJsonRequest();
    $request->authtoken = 'nihil';
    $request->login = 'ipsum';
    $request->status = GetOrdersStatusStatusJsonStatusEnum::CANCELED;

    $response = $sdk->orders->getOrdersStatusStatusJson($request);

    if ($response->orders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrdersIdJson

Retrieve a single Order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrdersIdJsonRequest();
    $request->authtoken = 'id';
    $request->id = 906418;
    $request->login = 'eius';

    $response = $sdk->orders->getOrdersIdJson($request);

    if ($response->order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrdersIdHistoryJson

Retrieve all Order History.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersIdHistoryJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrdersIdHistoryJsonRequest();
    $request->authtoken = 'aspernatur';
    $request->id = 20651;
    $request->login = 'amet';

    $response = $sdk->orders->getOrdersIdHistoryJson($request);

    if ($response->orderHistories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOrdersJson

Orders created externally keep the given order product's values (bypassing internal promotion or product amounts).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOrdersJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderCreate;
use \OpenAPI\OpenAPI\Models\Shared\OrderCreateFields;
use \OpenAPI\OpenAPI\Models\Shared\CustomerFieldsWithBillingAddressAndShippingAddressFields;
use \OpenAPI\OpenAPI\Models\Shared\BillingAddress;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddress;
use \OpenAPI\OpenAPI\Models\Shared\OrderProductOrderCreate;
use \OpenAPI\OpenAPI\Models\Shared\OrderCreateFieldsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOrdersJsonRequest();
    $request->orderCreate = new OrderCreate();
    $request->orderCreate->order = new OrderCreateFields();
    $request->orderCreate->order->customer = new CustomerFieldsWithBillingAddressAndShippingAddressFields();
    $request->orderCreate->order->customer->billingAddress = new BillingAddress();
    $request->orderCreate->order->customer->billingAddress->address = '839 Luna Oval';
    $request->orderCreate->order->customer->billingAddress->city = 'Port Josianne';
    $request->orderCreate->order->customer->billingAddress->country = 'Netherlands';
    $request->orderCreate->order->customer->billingAddress->municipality = 'alias';
    $request->orderCreate->order->customer->billingAddress->name = 'Alex Goodwin';
    $request->orderCreate->order->customer->billingAddress->postal = 'officiis';
    $request->orderCreate->order->customer->billingAddress->region = 'qui';
    $request->orderCreate->order->customer->billingAddress->surname = 'dolorum';
    $request->orderCreate->order->customer->billingAddress->taxid = 'a';
    $request->orderCreate->order->customer->id = 456130;
    $request->orderCreate->order->customer->shippingAddress = new ShippingAddress();
    $request->orderCreate->order->customer->shippingAddress->address = '427 Fay Ridges';
    $request->orderCreate->order->customer->shippingAddress->city = 'Dublin';
    $request->orderCreate->order->customer->shippingAddress->country = 'Gambia';
    $request->orderCreate->order->customer->shippingAddress->municipality = 'dolorem';
    $request->orderCreate->order->customer->shippingAddress->name = 'Miss Jimmie Kozey';
    $request->orderCreate->order->customer->shippingAddress->postal = 'sed';
    $request->orderCreate->order->customer->shippingAddress->region = 'vel';
    $request->orderCreate->order->customer->shippingAddress->surname = 'libero';
    $request->orderCreate->order->products = [
        new OrderProductOrderCreate(),
        new OrderProductOrderCreate(),
    ];
    $request->orderCreate->order->shippingMethodId = 646265;
    $request->orderCreate->order->shippingMethodName = 'quam';
    $request->orderCreate->order->shippingPrice = 2148.8;
    $request->orderCreate->order->status = OrderCreateFieldsStatusEnum::CANCELED;
    $request->authtoken = 'qui';
    $request->login = 'cupiditate';

    $response = $sdk->orders->postOrdersJson($request);

    if ($response->order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOrdersIdHistoryJson

Create a new Order History Entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOrdersIdHistoryJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderHistoryEdit;
use \OpenAPI\OpenAPI\Models\Shared\OrderHistoryEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOrdersIdHistoryJsonRequest();
    $request->orderHistoryEdit = new OrderHistoryEdit();
    $request->orderHistoryEdit->orderHistory = new OrderHistoryEditFields();
    $request->orderHistoryEdit->orderHistory->message = 'maxime';
    $request->authtoken = 'pariatur';
    $request->id = 747080;
    $request->login = 'dicta';

    $response = $sdk->orders->postOrdersIdHistoryJson($request);

    if ($response->orderHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrdersIdJson

Only `status`, `shipment_status`, `tracking_number`, `tracking_company`, `tracking_url`, `additional_information` and `additional_fields` are available for update. An email is send if `shipment_status` changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutOrdersIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEdit;
use \OpenAPI\OpenAPI\Models\Shared\OrderEditFields;
use \OpenAPI\OpenAPI\Models\Shared\OrderAdditionalFields;
use \OpenAPI\OpenAPI\Models\Shared\OrderEditFieldsShipmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderEditFieldsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrdersIdJsonRequest();
    $request->orderEdit = new OrderEdit();
    $request->orderEdit->order = new OrderEditFields();
    $request->orderEdit->order->additionalFields = [
        new OrderAdditionalFields(),
        new OrderAdditionalFields(),
        new OrderAdditionalFields(),
    ];
    $request->orderEdit->order->additionalInformation = 'totam';
    $request->orderEdit->order->shipmentStatus = OrderEditFieldsShipmentStatusEnum::IN_TRANSIT;
    $request->orderEdit->order->status = OrderEditFieldsStatusEnum::ABANDONED;
    $request->orderEdit->order->trackingCompany = 'dolores';
    $request->orderEdit->order->trackingNumber = 'distinctio';
    $request->orderEdit->order->trackingUrl = 'facilis';
    $request->authtoken = 'aliquid';
    $request->id = 463150;
    $request->login = 'molestias';

    $response = $sdk->orders->putOrdersIdJson($request);

    if ($response->order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
