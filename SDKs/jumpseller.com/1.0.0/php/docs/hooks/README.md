# hooks

### Available Operations

* [deleteHooksIdJson](#deletehooksidjson) - Delete an existing Hook.
* [getHooksJson](#gethooksjson) - Retrieve all Hooks.
* [getHooksIdJson](#gethooksidjson) - Retrieve a single Hook.
* [postHooksJson](#posthooksjson) - Create a new Hook.
* [putHooksIdJson](#puthooksidjson) - Update a Hook.

## deleteHooksIdJson

Delete an existing Hook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHooksIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHooksIdJsonRequest();
    $request->authtoken = 'dolorum';
    $request->id = 254356;
    $request->login = 'veritatis';

    $response = $sdk->hooks->deleteHooksIdJson($request);

    if ($response->deleteHooksIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHooksJson

Retrieve all Hooks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHooksJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHooksJsonRequest();
    $request->authtoken = 'ipsa';
    $request->limit = 56418;
    $request->login = 'iure';
    $request->page = 487838;

    $response = $sdk->hooks->getHooksJson($request);

    if ($response->hooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHooksIdJson

Retrieve a single Hook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHooksIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHooksIdJsonRequest();
    $request->authtoken = 'quaerat';
    $request->id = 881005;
    $request->login = 'quidem';

    $response = $sdk->hooks->getHooksIdJson($request);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postHooksJson

Create a new Hook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostHooksJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HookEdit;
use \OpenAPI\OpenAPI\Models\Shared\HookEditFields;
use \OpenAPI\OpenAPI\Models\Shared\HookEditFieldsEventEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostHooksJsonRequest();
    $request->hookEdit = new HookEdit();
    $request->hookEdit->hook = new HookEditFields();
    $request->hookEdit->hook->event = HookEditFieldsEventEnum::CUSTOMER_DELETED;
    $request->hookEdit->hook->url = 'voluptas';
    $request->authtoken = 'natus';
    $request->login = 'eos';

    $response = $sdk->hooks->postHooksJson($request);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putHooksIdJson

Update a Hook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutHooksIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HookEdit;
use \OpenAPI\OpenAPI\Models\Shared\HookEditFields;
use \OpenAPI\OpenAPI\Models\Shared\HookEditFieldsEventEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutHooksIdJsonRequest();
    $request->hookEdit = new HookEdit();
    $request->hookEdit->hook = new HookEditFields();
    $request->hookEdit->hook->event = HookEditFieldsEventEnum::PRODUCT_CREATED;
    $request->hookEdit->hook->url = 'sit';
    $request->authtoken = 'fugiat';
    $request->id = 67249;
    $request->login = 'soluta';

    $response = $sdk->hooks->putHooksIdJson($request);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
