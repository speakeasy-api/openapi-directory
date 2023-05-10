# v1

### Available Operations

* [changePassword](#changepassword) - Set subaccount's password
* [createSubaccountJson](#createsubaccountjson) - Create a Subaccount owned by the authenticated Reseller
* [createSubaccountRaw](#createsubaccountraw) - Create a Subaccount owned by the authenticated Reseller
* [delete](#delete) - Request the deletion of a shopper profile
* [get](#get) - Get details for the specified Shopper
* [getStatus](#getstatus) - Get details for the specified Shopper
* [updateJson](#updatejson) - Update details for the specified Shopper
* [updateRaw](#updateraw) - Update details for the specified Shopper

## changePassword

<strong>Notes:</strong><ul><li>Password set is only supported by API Resellers setting subaccount passwords.</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\Secret;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePasswordRequest();
    $request->secret = new Secret();
    $request->secret->secret = 'P@55w0rd+';
    $request->shopperId = 'provident';

    $response = $sdk->v1->changePassword($request);

    if ($response->shopperId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubaccountJson

Create a Subaccount owned by the authenticated Reseller

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubaccountCreate;
use \OpenAPI\OpenAPI\Models\Shared\SubaccountCreateMarketIdEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubaccountCreate();
    $request->email = 'Rosalinda_Mitchell84@hotmail.com';
    $request->externalId = 423655;
    $request->marketId = SubaccountCreateMarketIdEnum::IDID;
    $request->nameFirst = 'deserunt';
    $request->nameLast = 'suscipit';
    $request->password = 'iure';

    $response = $sdk->v1->createSubaccountJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubaccountRaw

Create a Subaccount owned by the authenticated Reseller

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'magnam'

    $response = $sdk->v1->createSubaccountRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete

<strong>Notes:</strong><ul><li>Shopper deletion is not supported in OTE</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRequest();
    $request->auditClientIp = 'debitis';
    $request->shopperId = 'ipsa';

    $response = $sdk->v1->delete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## get

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIncludesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->includes = [
        GetIncludesEnum::CUSTOMER_ID,
        GetIncludesEnum::CUSTOMER_ID,
        GetIncludesEnum::CUSTOMER_ID,
        GetIncludesEnum::CUSTOMER_ID,
    ];
    $request->shopperId = 'tempora';

    $response = $sdk->v1->get($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatus

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatusRequest();
    $request->auditClientIp = 'suscipit';
    $request->shopperId = 'molestiae';

    $response = $sdk->v1->getStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJson

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShopperUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ShopperUpdateMarketIdEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJsonRequest();
    $request->shopperUpdate = new ShopperUpdate();
    $request->shopperUpdate->email = 'Randy_Lehner@hotmail.com';
    $request->shopperUpdate->externalId = 392785;
    $request->shopperUpdate->marketId = ShopperUpdateMarketIdEnum::UK_UA;
    $request->shopperUpdate->nameFirst = 'temporibus';
    $request->shopperUpdate->nameLast = 'ab';
    $request->shopperId = 'quis';

    $response = $sdk->v1->updateJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRaw

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRawRequest();
    $request->requestBody = 'veritatis';
    $request->shopperId = 'deserunt';

    $response = $sdk->v1->updateRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
