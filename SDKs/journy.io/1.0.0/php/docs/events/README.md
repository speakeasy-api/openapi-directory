# events

## Overview

Endpoints for listing events.

### Available Operations

* [getEvents](#getevents) - Get events
* [~~trackJourneyEvent~~](#trackjourneyevent) - Track event :warning: **Deprecated**

## getEvents

Endpoint to list events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->events->getEvents();

    if ($response->getEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~trackJourneyEvent~~

Endpoint used to track an event for a user or an account.

This endpoint is moved to [Track](#operation/trackEvent).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TrackJourneyEventRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TrackJourneyEventRequestBodyIdentification;
use \OpenAPI\OpenAPI\Models\Operations\TrackJourneyEventRequestBodyIdentificationAccount;
use \OpenAPI\OpenAPI\Models\Operations\TrackJourneyEventRequestBodyIdentificationUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrackJourneyEventRequestBody();
    $request->identification = new TrackJourneyEventRequestBodyIdentification();
    $request->identification->account = new TrackJourneyEventRequestBodyIdentificationAccount();
    $request->identification->account->accountId = 'suscipit';
    $request->identification->account->domain = 'molestiae';
    $request->identification->user = new TrackJourneyEventRequestBodyIdentificationUser();
    $request->identification->user->email = 'Randy_Lehner@hotmail.com';
    $request->identification->user->userId = 'nisi';
    $request->metadata = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->name = 'sapiente';
    $request->triggeredAt = 'quo';

    $response = $sdk->events->trackJourneyEvent($request);

    if ($response->trackJourneyEvent201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
