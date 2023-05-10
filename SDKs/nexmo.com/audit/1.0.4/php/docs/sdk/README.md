# SDK

## Overview

The Vonage Audit API allows you to view details of changes to your account. More information is available at <https://developer.nexmo.com/audit/overview>.
_Please note that the Audit API is currently in Beta_


### Available Operations

* [getEvent](#getevent) - Retrieve individual audit event
* [getEvents](#getevents) - Retrieve audit events
* [getEventsOptions](#geteventsoptions) - Retrieve audit event types

## getEvent

Get the specified audit event.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $requestSecurity = new GetEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getEvent($request, $requestSecurity);

    if ($response->auditEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvents

Get a series of audit events describing changes made to your Vonage API account over time.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EventTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsRequest();
    $request->dateFrom = 'impedit';
    $request->dateTo = 'cum';
    $request->eventType = EventTypesEnum::APP_CREATE;
    $request->page = 'esse';
    $request->searchText = 'ipsum';
    $request->size = 568434;

    $requestSecurity = new GetEventsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getEvents($request, $requestSecurity);

    if ($response->auditResp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventsOptions

Get audit event types.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetEventsOptionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getEventsOptions($requestSecurity);

    if ($response->auditEventTypesResp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
