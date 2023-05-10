# keys

## Overview

The `keys` resource contains the access keys used to authenticate requests to this API.

Note that this resource is only accessible for administrator users logged into the Brain Management Console.
It is not possible to access this resource using API key authentication.
This resource is therefore irrelevant to most applications.


### Available Operations

* [addKey](#addkey) - Create key
* [deleteKey](#deletekey) - Delete key
* [getKeyById](#getkeybyid) - Get key
* [getKeys](#getkeys) - Get all keys
* [updateKey](#updatekey) - Update existing key

## addKey

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\KeyInput;
use \OpenAPI\OpenAPI\Models\Operations\AddKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeyInput();
    $request->isReadOnly = false;
    $request->label = 'amet';

    $requestSecurity = new AddKeySecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->keys->addKey($request, $requestSecurity);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKey

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKeyRequest();
    $request->id = '0c5fbb25-8705-4320-ac73-d5fe9b90c289';

    $requestSecurity = new DeleteKeySecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->keys->deleteKey($request, $requestSecurity);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeyById

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetKeyByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetKeyByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeyByIdRequest();
    $request->id = '09b3fe49-a8d9-4cbf-8863-3323f9b77f3a';

    $requestSecurity = new GetKeyByIdSecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->keys->getKeyById($request, $requestSecurity);

    if ($response->key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeys

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeysRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T20:48:38.083Z');
    $request->afterId = 'ipsa';
    $request->before = 'ipsa';
    $request->beforeId = 'iure';
    $request->from = 'odio';
    $request->fromId = 'quaerat';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->isReadOnly = false;
    $request->label = 'accusamus';
    $request->limit = 696344;
    $request->populate = 'voluptatibus';
    $request->resultsOnly = false;
    $request->secret = 'voluptas';
    $request->select = 'natus';
    $request->sort = 'eos';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 5424.99;
    $request->until = 'sit';
    $request->untilId = 'fugiat';

    $requestSecurity = new GetKeysSecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->keys->getKeys($request, $requestSecurity);

    if ($response->getKeys200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateKey

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeyInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateKeyRequest();
    $request->keyInput = new KeyInput();
    $request->keyInput->isReadOnly = false;
    $request->keyInput->label = 'ab';
    $request->id = 'ba77a89e-bf73-47ae-8203-ce5e6a95d8a0';

    $requestSecurity = new UpdateKeySecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->keys->updateKey($request, $requestSecurity);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
