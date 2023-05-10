# personStages

## Overview

Person Stage Management

### Available Operations

* [deleteV2PersonStagesIdJson](#deletev2personstagesidjson) - Delete an person stage
* [getV2PersonStagesJson](#getv2personstagesjson) - List person stages
* [getV2PersonStagesIdJson](#getv2personstagesidjson) - Fetch a person stage
* [postV2PersonStagesJson](#postv2personstagesjson) - Create a person stage
* [putV2PersonStagesIdJson](#putv2personstagesidjson) - Update a person stage

## deleteV2PersonStagesIdJson

Deletes a person stage. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2PersonStagesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2PersonStagesIdJsonRequest();
    $request->id = 'e4825c1f-c0e1-415c-80bf-f918544ec42d';

    $response = $sdk->personStages->deleteV2PersonStagesIdJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2PersonStagesJson

Fetches multiple person stage records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PersonStagesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PersonStagesJsonRequest();
    $request->ids = [
        985109,
        773711,
        783397,
        883819,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 518990;
    $request->perPage = 969168;
    $request->sortBy = 'ab';
    $request->sortDirection = 'sint';

    $response = $sdk->personStages->getV2PersonStagesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2PersonStagesIdJson

Fetches a person stage, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PersonStagesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PersonStagesIdJsonRequest();
    $request->id = '77773e63-562a-47b4-88f0-5e3d48fdaf31';

    $response = $sdk->personStages->getV2PersonStagesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2PersonStagesJson

Creates a person stage.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2PersonStagesJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2PersonStagesJsonRequestBody();
    $request->name = 'Harriet Blanda';

    $response = $sdk->personStages->postV2PersonStagesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2PersonStagesIdJson

Updates a person stage.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2PersonStagesIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2PersonStagesIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2PersonStagesIdJsonRequest();
    $request->requestBody = new PutV2PersonStagesIdJsonRequestBody();
    $request->requestBody->name = 'Woodrow Mitchell III';
    $request->id = '9c0b36f2-5ea9-444f-bb75-6c11f6c37a51';

    $response = $sdk->personStages->putV2PersonStagesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
