# meetingsSettingsSearches

## Overview

Meetings Settings - Searches

### Available Operations

* [postV2MeetingsSettingsSearchesJson](#postv2meetingssettingssearchesjson) - List meeting settings

## postV2MeetingsSettingsSearchesJson

Fetches multiple meeting setting records. The records can be filtered, paged, and sorted according to the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2MeetingsSettingsSearchesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2MeetingsSettingsSearchesJsonRequest();
    $request->calendarType = 'est';
    $request->includePagingCounts = false;
    $request->page = 817339;
    $request->perPage = 545918;
    $request->updatedAt = [
        'provident',
        'accusamus',
    ];
    $request->userGuids = [
        'tempore',
        'sint',
        'ea',
        'autem',
    ];

    $response = $sdk->meetingsSettingsSearches->postV2MeetingsSettingsSearchesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
