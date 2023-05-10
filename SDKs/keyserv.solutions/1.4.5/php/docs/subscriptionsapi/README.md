# subscriptionsApi

### Available Operations

* [subscriptionsApiCount](#subscriptionsapicount)
* [subscriptionsApiDeleteSubscription](#subscriptionsapideletesubscription)
* [subscriptionsApiDeleteSubscription2](#subscriptionsapideletesubscription2)
* [subscriptionsApiDisable](#subscriptionsapidisable)
* [subscriptionsApiDisable2](#subscriptionsapidisable2)
* [subscriptionsApiEnable](#subscriptionsapienable)
* [subscriptionsApiEnable2](#subscriptionsapienable2)
* [subscriptionsApiFind](#subscriptionsapifind)
* [subscriptionsApiList](#subscriptionsapilist)
* [subscriptionsApiPutSubscription](#subscriptionsapiputsubscription)
* [subscriptionsApiPutSubscription2](#subscriptionsapiputsubscription2)
* [subscriptionsApiSave](#subscriptionsapisave)

## subscriptionsApiCount

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCredentials();
    $request->key = 'molestiae';
    $request->serial = 'quod';

    $response = $sdk->subscriptionsApi->subscriptionsApiCount($request);

    if ($response->subscriptionsApiCount200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiDeleteSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubscriptionsApiDeleteSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscriptionsApiDeleteSubscriptionRequest();
    $request->xApiKey = 'quod';
    $request->keep = false;
    $request->serial = 'esse';

    $response = $sdk->subscriptionsApi->subscriptionsApiDeleteSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiDeleteSubscription2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubscriptionsApiDeleteSubscription2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscriptionsApiDeleteSubscription2Request();
    $request->xApiKey = 'totam';
    $request->keep = false;
    $request->serial = 'porro';

    $response = $sdk->subscriptionsApi->subscriptionsApiDeleteSubscription2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiDisable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindCredentials();
    $request->key = 'dolorum';
    $request->serial = 'dicta';

    $response = $sdk->subscriptionsApi->subscriptionsApiDisable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiDisable2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindCredentials();
    $request->key = 'nam';
    $request->serial = 'officia';

    $response = $sdk->subscriptionsApi->subscriptionsApiDisable2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiEnable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindCredentials();
    $request->key = 'occaecati';
    $request->serial = 'fugit';

    $response = $sdk->subscriptionsApi->subscriptionsApiEnable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiEnable2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindCredentials();
    $request->key = 'deleniti';
    $request->serial = 'hic';

    $response = $sdk->subscriptionsApi->subscriptionsApiEnable2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiFind

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindCredentials();
    $request->key = 'optio';
    $request->serial = 'totam';

    $response = $sdk->subscriptionsApi->subscriptionsApiFind($request);

    if ($response->subscriptionsApiFind200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubscriptionsApiListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscriptionsApiListRequest();
    $request->requestBody = new FindCredentials();
    $request->requestBody->key = 'beatae';
    $request->requestBody->serial = 'commodi';
    $request->page = 473600;

    $response = $sdk->subscriptionsApi->subscriptionsApiList($request);

    if ($response->subscriptionViews !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiPutSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscriptionCreateModify();
    $request->action = 'modi';
    $request->callbackOnModify = false;
    $request->callbackUrl = 'http://soft-reminder.info';
    $request->custom = 'ipsum';
    $request->frequency = 'excepturi';
    $request->key = 'aspernatur';
    $request->name = 'Cathy Mosciski';
    $request->serial = 'dolor';
    $request->startFrom = 'natus';

    $response = $sdk->subscriptionsApi->subscriptionsApiPutSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiPutSubscription2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscriptionCreateModify();
    $request->action = 'laboriosam';
    $request->callbackOnModify = false;
    $request->callbackUrl = 'https://unsteady-post.info';
    $request->custom = 'corporis';
    $request->frequency = 'iste';
    $request->key = 'iure';
    $request->name = 'Dr. Rickey Boyle';
    $request->serial = 'mollitia';
    $request->startFrom = 'laborum';

    $response = $sdk->subscriptionsApi->subscriptionsApiPutSubscription2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsApiSave

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscriptionCreateModify();
    $request->action = 'dolores';
    $request->callbackOnModify = false;
    $request->callbackUrl = 'http://growing-cappelletti.net';
    $request->custom = 'enim';
    $request->frequency = 'omnis';
    $request->key = 'nemo';
    $request->name = 'Velma Batz';
    $request->serial = 'doloribus';
    $request->startFrom = 'sapiente';

    $response = $sdk->subscriptionsApi->subscriptionsApiSave($request);

    if ($response->subscriptionsApiSave201ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
