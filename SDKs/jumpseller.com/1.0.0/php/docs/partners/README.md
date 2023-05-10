# partners

### Available Operations

* [getPartnersStoresJson](#getpartnersstoresjson) - Retrieve statistics.
* [getStoreCheckStatusJson](#getstorecheckstatusjson) - Retrive store creation status.
* [postStoreCreateJson](#poststorecreatejson) - Create a Partnered Store

## getPartnersStoresJson

Retrieve statistics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPartnersStoresJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPartnersStoresJsonRequest();
    $request->authToken = 'porro';
    $request->from = 'doloribus';
    $request->page = 281730;
    $request->partnerCode = 'facilis';
    $request->to = 'cupiditate';

    $response = $sdk->partners->getPartnersStoresJson($request);

    if ($response->types !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreCheckStatusJson

Retrive store creation status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreCheckStatusJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreCheckStatusJsonRequest();
    $request->authToken = 'qui';
    $request->locale = 'quae';
    $request->partnerCode = 'laudantium';
    $request->storeCode = 'odio';

    $response = $sdk->partners->getStoreCheckStatusJson($request);

    if ($response->getStoreCheckStatusJSON200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStoreCreateJson

Create a Partnered Store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostStoreCreateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartnerStoreCreate;
use \OpenAPI\OpenAPI\Models\Shared\PartnerStoreCreatePlanNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostStoreCreateJsonRequest();
    $request->partnerStoreCreate = new PartnerStoreCreate();
    $request->partnerStoreCreate->aff = 'occaecati';
    $request->partnerStoreCreate->email = 'Paris.Terry@hotmail.com';
    $request->partnerStoreCreate->locale = 'ipsum';
    $request->partnerStoreCreate->password = 'delectus';
    $request->partnerStoreCreate->planName = PartnerStoreCreatePlanNameEnum::PLUS;
    $request->partnerStoreCreate->rejectDuplicates = false;
    $request->partnerStoreCreate->storeName = 'consectetur';
    $request->authToken = 'vero';
    $request->partnerCode = 'tenetur';

    $response = $sdk->partners->postStoreCreateJson($request);

    if ($response->partnerStoreCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
