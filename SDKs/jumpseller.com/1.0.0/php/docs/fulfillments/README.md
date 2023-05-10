# fulfillments

### Available Operations

* [getFulfillmentsJson](#getfulfillmentsjson) - Retrieve all Fulfillments.
* [getFulfillmentsCountJson](#getfulfillmentscountjson) - Count all Fulfillments.
* [getFulfillmentsIdJson](#getfulfillmentsidjson) - Retrieve a single Fulfillment.
* [getOrderIdFulfillmentsJson](#getorderidfulfillmentsjson) - Retrieve the Fulfillments associated with the Order.

## getFulfillmentsJson

Retrieve all Fulfillments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFulfillmentsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFulfillmentsJsonRequest();
    $request->authtoken = 'dolorem';
    $request->limit = 209843;
    $request->login = 'dolor';
    $request->page = 186193;

    $response = $sdk->fulfillments->getFulfillmentsJson($request);

    if ($response->fulfillments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFulfillmentsCountJson

Count all Fulfillments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFulfillmentsCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFulfillmentsCountJsonRequest();
    $request->authtoken = 'ipsum';
    $request->login = 'hic';

    $response = $sdk->fulfillments->getFulfillmentsCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFulfillmentsIdJson

Retrieve a single Fulfillment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFulfillmentsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFulfillmentsIdJsonRequest();
    $request->authtoken = 'excepturi';
    $request->id = 739551;
    $request->login = 'voluptate';

    $response = $sdk->fulfillments->getFulfillmentsIdJson($request);

    if ($response->fulfillment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderIdFulfillmentsJson

Retrieve the Fulfillments associated with the Order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderIdFulfillmentsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderIdFulfillmentsJsonRequest();
    $request->authtoken = 'dignissimos';
    $request->id = 970237;
    $request->login = 'amet';

    $response = $sdk->fulfillments->getOrderIdFulfillmentsJson($request);

    if ($response->fulfillments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
