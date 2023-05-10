# dpsMessage

### Available Operations

* [deleteDpsMessage](#deletedpsmessage) - Deletes the DPS message
* [getDpsMessageFromEmployer](#getdpsmessagefromemployer) - Gets the DPS message
* [getDpsMessagesFromEmployer](#getdpsmessagesfromemployer) - Gets the DPS messages
* [patchDpsMessage](#patchdpsmessage) - Patches the DPS message
* [postDpsMessage](#postdpsmessage) - Posta the DPS message
* [putDpsMessage](#putdpsmessage) - Puts the DPS message

## deleteDpsMessage

Deletes the DPS message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDpsMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDpsMessageRequest();
    $request->apiVersion = 'ea';
    $request->authorization = 'accusantium';
    $request->dpsMessageId = 'ab';
    $request->employerId = 'maiores';

    $response = $sdk->dpsMessage->deleteDpsMessage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDpsMessageFromEmployer

Gets the DPS message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDpsMessageFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDpsMessageFromEmployerRequest();
    $request->apiVersion = 'quidem';
    $request->authorization = 'ipsam';
    $request->dpsMessageId = 'voluptate';
    $request->employerId = 'autem';

    $response = $sdk->dpsMessage->getDpsMessageFromEmployer($request);

    if ($response->dpsMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDpsMessagesFromEmployer

Gets the DPS message links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDpsMessagesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDpsMessagesFromEmployerRequest();
    $request->apiVersion = 'nam';
    $request->authorization = 'eaque';
    $request->employerId = 'pariatur';

    $response = $sdk->dpsMessage->getDpsMessagesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchDpsMessage

Patches the specified DPS message with the supplied values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchDpsMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchDpsMessageRequest();
    $request->apiVersion = 'nemo';
    $request->authorization = 'voluptatibus';
    $request->dpsMessageId = 'perferendis';
    $request->employerId = 'fugiat';

    $response = $sdk->dpsMessage->patchDpsMessage($request);

    if ($response->dpsMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDpsMessage

Insert new DPS message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostDpsMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostDpsMessageRequest();
    $request->apiVersion = 'amet';
    $request->authorization = 'aut';
    $request->employerId = 'cumque';

    $response = $sdk->dpsMessage->postDpsMessage($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDpsMessage

Puts the DPS message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutDpsMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDpsMessageRequest();
    $request->apiVersion = 'corporis';
    $request->authorization = 'hic';
    $request->dpsMessageId = 'libero';
    $request->employerId = 'nobis';

    $response = $sdk->dpsMessage->putDpsMessage($request);

    if ($response->dpsMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
