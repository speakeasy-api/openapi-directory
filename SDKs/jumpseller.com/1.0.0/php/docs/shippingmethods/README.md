# shippingMethods

### Available Operations

* [deleteShippingMethodsIdJson](#deleteshippingmethodsidjson) - Delete an existing Shipping Method.
* [getShippingMethodsJson](#getshippingmethodsjson) - Retrieve all Store's Shipping Methods.
* [getShippingMethodsIdJson](#getshippingmethodsidjson) - Retrieve a single Shipping Method.
* [postShippingMethodsJson](#postshippingmethodsjson) - Creates a Shipping Method.
* [putShippingMethodsIdJson](#putshippingmethodsidjson) - Update a Shipping Method.

## deleteShippingMethodsIdJson

Delete an existing Shipping Method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteShippingMethodsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteShippingMethodsIdJsonRequest();
    $request->authtoken = 'facere';
    $request->id = 257233;
    $request->login = 'doloribus';

    $response = $sdk->shippingMethods->deleteShippingMethodsIdJson($request);

    if ($response->deleteShippingMethodsIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShippingMethodsJson

Retrieve all Store's Shipping Methods.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShippingMethodsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShippingMethodsJsonRequest();
    $request->authtoken = 'suscipit';
    $request->login = 'reiciendis';

    $response = $sdk->shippingMethods->getShippingMethodsJson($request);

    if ($response->shippingMethods !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShippingMethodsIdJson

Retrieve a single Shipping Method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShippingMethodsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShippingMethodsIdJsonRequest();
    $request->authtoken = 'quidem';
    $request->id = 904949;
    $request->login = 'necessitatibus';

    $response = $sdk->shippingMethods->getShippingMethodsIdJson($request);

    if ($response->shippingMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postShippingMethodsJson

Creates a Shipping Method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostShippingMethodsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShippingMethodEdit;
use \OpenAPI\OpenAPI\Models\Shared\ShippingMethodEditShippingMethod;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostShippingMethodsJsonRequest();
    $request->shippingMethodEdit = new ShippingMethodEdit();
    $request->shippingMethodEdit->shippingMethod = new ShippingMethodEditShippingMethod();
    $request->shippingMethodEdit->shippingMethod->callbackUrl = 'dolore';
    $request->shippingMethodEdit->shippingMethod->city = 'Fort Daytonburgh';
    $request->shippingMethodEdit->shippingMethod->fetchServicesUrl = 'amet';
    $request->shippingMethodEdit->shippingMethod->name = 'Courtney Wiegand';
    $request->shippingMethodEdit->shippingMethod->postal = 'corporis';
    $request->shippingMethodEdit->shippingMethod->state = 'harum';
    $request->shippingMethodEdit->shippingMethod->token = 'laboriosam';
    $request->authtoken = 'ipsa';
    $request->login = 'voluptates';

    $response = $sdk->shippingMethods->postShippingMethodsJson($request);

    if ($response->shippingMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putShippingMethodsIdJson

Update a Shipping Method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutShippingMethodsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShippingMethodEdit;
use \OpenAPI\OpenAPI\Models\Shared\ShippingMethodEditShippingMethod;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutShippingMethodsIdJsonRequest();
    $request->shippingMethodEdit = new ShippingMethodEdit();
    $request->shippingMethodEdit->shippingMethod = new ShippingMethodEditShippingMethod();
    $request->shippingMethodEdit->shippingMethod->callbackUrl = 'libero';
    $request->shippingMethodEdit->shippingMethod->city = 'Fort Lonieboro';
    $request->shippingMethodEdit->shippingMethod->fetchServicesUrl = 'aspernatur';
    $request->shippingMethodEdit->shippingMethod->name = 'Melanie Hirthe';
    $request->shippingMethodEdit->shippingMethod->postal = 'dolorum';
    $request->shippingMethodEdit->shippingMethod->state = 'adipisci';
    $request->shippingMethodEdit->shippingMethod->token = 'minus';
    $request->authtoken = 'dolores';
    $request->id = 503934;
    $request->login = 'in';

    $response = $sdk->shippingMethods->putShippingMethodsIdJson($request);

    if ($response->shippingMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
