# meetingSettings

## Overview

Meetings Settings

### Available Operations

* [putV2MeetingsSettingsIdJson](#putv2meetingssettingsidjson) - Update a meeting setting

## putV2MeetingsSettingsIdJson

Updates a meeting setting, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2MeetingsSettingsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2MeetingsSettingsIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2MeetingsSettingsIdJsonRequest();
    $request->requestBody = new PutV2MeetingsSettingsIdJsonRequestBody();
    $request->requestBody->allowBookingOnBehalf = false;
    $request->requestBody->allowBookingOvertime = false;
    $request->requestBody->allowEventOverlap = false;
    $request->requestBody->availabilityLimit = 975425;
    $request->requestBody->availabilityLimitEnabled = false;
    $request->requestBody->bufferTimeDuration = 156383;
    $request->requestBody->calendarType = 'porro';
    $request->requestBody->defaultMeetingLength = 304198;
    $request->requestBody->description = 'velit';
    $request->requestBody->enableCalendarSync = false;
    $request->requestBody->enableDynamicLocation = false;
    $request->requestBody->location = 'illo';
    $request->requestBody->primaryCalendarConnectionFailed = false;
    $request->requestBody->primaryCalendarId = 'accusantium';
    $request->requestBody->primaryCalendarName = 'vel';
    $request->requestBody->rescheduleMeetingsEnabled = false;
    $request->requestBody->scheduleBufferEnabled = false;
    $request->requestBody->scheduleDelay = 406922;
    $request->requestBody->shareEventDetail = false;
    $request->requestBody->timeZone = 'beatae';
    $request->requestBody->timesAvailable = [
        'excepturi' => 'eum',
        'velit' => 'ut',
        'perspiciatis' => 'earum',
        'dicta' => 'impedit',
    ];
    $request->requestBody->title = 'Dr.';
    $request->id = '9e06e3a4-3700-40ae-ab6b-c9b8f759eac5';

    $response = $sdk->meetingSettings->putV2MeetingsSettingsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
