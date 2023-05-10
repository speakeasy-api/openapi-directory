# notes

## Overview

Note Management

### Available Operations

* [deleteV2NotesIdJson](#deletev2notesidjson) - Delete a note
* [getV2NotesJson](#getv2notesjson) - List notes
* [getV2NotesIdJson](#getv2notesidjson) - Fetch a note
* [postV2NotesJson](#postv2notesjson) - Create a note
* [putV2NotesIdJson](#putv2notesidjson) - Update a note

## deleteV2NotesIdJson

Deletes a note owned by authorized account.
This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2NotesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2NotesIdJsonRequest();
    $request->id = '197f9244-3da7-4ce5-ab89-5c537c6454ef';

    $response = $sdk->notes->deleteV2NotesIdJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2NotesJson

Fetches multiple note records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2NotesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2NotesJsonRequest();
    $request->associatedWithId = 731744;
    $request->associatedWithType = 'aperiam';
    $request->ids = [
        189753,
        289913,
        520875,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 577709;
    $request->perPage = 375994;
    $request->sortBy = 'quo';
    $request->sortDirection = 'velit';
    $request->updatedAt = [
        'fuga',
        'nostrum',
        'est',
        'impedit',
    ];

    $response = $sdk->notes->getV2NotesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2NotesIdJson

Fetches a note, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2NotesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2NotesIdJsonRequest();
    $request->id = 'fbe2fd57-0757-4792-9177-deac646ecb57';

    $response = $sdk->notes->getV2NotesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2NotesJson

Creates a note.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2NotesJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2NotesJsonRequestBody();
    $request->associatedWithId = 211455;
    $request->associatedWithType = 'modi';
    $request->callId = 59383;
    $request->content = 'sint';
    $request->skipCrmSync = false;
    $request->subject = 'vero';
    $request->userGuid = 'sequi';

    $response = $sdk->notes->postV2NotesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2NotesIdJson

Updates a note. Any changes to the note or associated records will not reflect in your CRM.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2NotesIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2NotesIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2NotesIdJsonRequest();
    $request->requestBody = new PutV2NotesIdJsonRequestBody();
    $request->requestBody->callId = 918547;
    $request->requestBody->content = 'cum';
    $request->id = '1e5a2b12-eb07-4f11-adb9-9545fc95fa88';

    $response = $sdk->notes->putV2NotesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
