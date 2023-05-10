# kvpairs

## Overview

The `kvpairs` resource provides a service for storing generic JSON key/value pairs on the Brain.
Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.

See also the `blobs` resource.


### Available Operations

* [addKvPairs](#addkvpairs) - Create key-value pair
* [deleteKvPair](#deletekvpair) - Delete key-value pair
* [getKvPairs](#getkvpairs) - Get all key-value pairs
* [getKvPairsById](#getkvpairsbyid) - Get key-value pair
* [updateKvPair](#updatekvpair) - Update existing Key-value pair

## addKvPairs

Create key-value pair

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\KeyValuePairInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeyValuePairInput();
    $request->kvKey = 'foo';
    $request->kvValue = 'at';

    $response = $sdk->kvpairs->addKvPairs($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKvPair

Delete key-value pair

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKvPairRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKvPairRequest();
    $request->id = '446ce2af-7a73-4cf3-be45-3f870b326b5a';

    $response = $sdk->kvpairs->deleteKvPair($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKvPairs

Get all key-value pairs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetKvPairsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKvPairsRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-14T13:38:40.307Z');
    $request->afterId = 'incidunt';
    $request->before = 'qui';
    $request->beforeId = 'cupiditate';
    $request->from = 'maxime';
    $request->fromId = 'pariatur';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->kvKey = 'soluta';
    $request->limit = 117531;
    $request->populate = 'laborum';
    $request->resultsOnly = false;
    $request->select = 'totam';
    $request->sort = 'incidunt';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 1320.68;
    $request->until = 'dolores';
    $request->untilId = 'distinctio';

    $response = $sdk->kvpairs->getKvPairs($request);

    if ($response->getKvPairs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKvPairsById

Get key-value pair

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetKvPairsByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKvPairsByIdRequest();
    $request->id = 'b679d232-2715-4bf0-8bb1-e31b8b90f344';

    $response = $sdk->kvpairs->getKvPairsById($request);

    if ($response->keyValuePair !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateKvPair

Update existing Key-value pair

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKvPairRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeyValuePairUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateKvPairRequest();
    $request->keyValuePairUpdate = new KeyValuePairUpdate();
    $request->keyValuePairUpdate->kvValue = 'adipisci';
    $request->id = 'a1108e0a-dcf4-4b92-9879-fce953f73ef7';

    $response = $sdk->kvpairs->updateKvPair($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
