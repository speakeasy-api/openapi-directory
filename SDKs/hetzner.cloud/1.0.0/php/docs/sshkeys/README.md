# sshKeys

## Overview

SSH keys are public keys you provide to the cloud system. They can be injected into Servers at creation time. We highly recommend that you use keys instead of passwords to manage your Servers.

### Available Operations

* [deleteSshKeysId](#deletesshkeysid) - Delete an SSH key
* [getSshKeys](#getsshkeys) - Get all SSH keys
* [getSshKeysId](#getsshkeysid) - Get a SSH key
* [postSshKeys](#postsshkeys) - Create an SSH key
* [putSshKeysId](#putsshkeysid) - Update an SSH key

## deleteSshKeysId

Deletes an SSH key. It cannot be used anymore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSshKeysIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSshKeysIdRequest();
    $request->id = '1cddc692-601f-4b57-ab0d-5f0d30c5fbb2';

    $response = $sdk->sshKeys->deleteSshKeysId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSshKeys

Returns all SSH key objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSshKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSshKeysSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSshKeysRequest();
    $request->fingerprint = 'quis';
    $request->labelSelector = 'totam';
    $request->name = 'Cynthia Hayes';
    $request->sort = GetSshKeysSortEnum::ID;

    $response = $sdk->sshKeys->getSshKeys($request);

    if ($response->getSshKeys200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSshKeysId

Returns a specific SSH key object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSshKeysIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSshKeysIdRequest();
    $request->id = 170986;

    $response = $sdk->sshKeys->getSshKeysId($request);

    if ($response->getSshKeysId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSshKeys

Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSshKeysRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSshKeysRequestBody();
    $request->labels = [
        'quam' => 'dolor',
        'vero' => 'nostrum',
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->name = 'My ssh key';
    $request->publicKey = 'ssh-rsa AAAjjk76kgf...Xt';

    $response = $sdk->sshKeys->postSshKeys($request);

    if ($response->postSshKeys201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSshKeysId

Updates an SSH key. You can update an SSH key name and an SSH key labels.

Please note that when updating labels, the SSH key current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSshKeysIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutSshKeysIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSshKeysIdRequest();
    $request->requestBody = new PutSshKeysIdRequestBody();
    $request->requestBody->labels = [
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
        'error' => 'eaque',
    ];
    $request->requestBody->name = 'My ssh key';
    $request->id = '9b3fe49a-8d9c-4bf4-8633-323f9b77f3a4';

    $response = $sdk->sshKeys->putSshKeysId($request);

    if ($response->putSshKeysId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
