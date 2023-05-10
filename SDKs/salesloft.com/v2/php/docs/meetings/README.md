# meetings

## Overview

Meetings

### Available Operations

* [getV2MeetingsJson](#getv2meetingsjson) - List meetings
* [putV2MeetingsIdJson](#putv2meetingsidjson) - Update a meeting

## getV2MeetingsJson

Fetches multiple meeting records. The records can be filtered, paged, and sorted according to the respective parameters.
Meetings resource is responsible for events created via the Salesloft platform using calendaring features.
These events can relate to cadences, people, and accounts.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2MeetingsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2MeetingsJsonRequest();
    $request->accountId = 'corporis';
    $request->createdAt = [
        'error',
        'esse',
        'labore',
    ];
    $request->eventIds = [
        'vero',
    ];
    $request->iCalUids = [
        'vitae',
    ];
    $request->ids = [
        212434,
    ];
    $request->includeMeetingsSettings = false;
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 322017;
    $request->perPage = 183033;
    $request->personId = 'iste';
    $request->personIds = [
        367626,
        745233,
    ];
    $request->showDeleted = false;
    $request->sortBy = 'libero';
    $request->sortDirection = 'rem';
    $request->startTime = [
        'odio',
        'fugit',
        'alias',
    ];
    $request->status = 'magni';
    $request->taskIds = [
        64435,
        63553,
    ];
    $request->userGuids = [
        'neque',
        'exercitationem',
    ];

    $response = $sdk->meetings->getV2MeetingsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2MeetingsIdJson

Updates a meeting, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2MeetingsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2MeetingsIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2MeetingsIdJsonRequest();
    $request->requestBody = new PutV2MeetingsIdJsonRequestBody();
    $request->requestBody->eventId = 'itaque';
    $request->requestBody->iCalUid = 'et';
    $request->requestBody->noShow = false;
    $request->requestBody->rescheduleStatus = 'ipsum';
    $request->requestBody->status = 'unde';
    $request->id = 'dbc2259b-1abd-4a8c-870e-1084cb0672d1';

    $response = $sdk->meetings->putV2MeetingsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
