# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchAlert](#fetchalert)
* [fetchEvent](#fetchevent)
* [listAlert](#listalert)
* [listEvent](#listevent) - Returns a list of events in the account, sorted by event-date.

## fetchAlert

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAlertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAlertRequest();
    $request->sid = 'provident';

    $requestSecurity = new FetchAlertSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAlert($request, $requestSecurity);

    if ($response->monitorV1AlertInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEvent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEventRequest();
    $request->sid = 'distinctio';

    $requestSecurity = new FetchEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEvent($request, $requestSecurity);

    if ($response->monitorV1Event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAlert

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAlertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAlertRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-11T23:22:42.658Z');
    $request->logLevel = 'nulla';
    $request->page = 544883;
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-16T11:56:06.019Z');

    $requestSecurity = new ListAlertSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAlert($request, $requestSecurity);

    if ($response->listAlertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEvent

Returns a list of events in the account, sorted by event-date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventRequest();
    $request->actorSid = 'suscipit';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T09:35:47.986Z');
    $request->eventType = 'debitis';
    $request->page = 56713;
    $request->pageSize = 963663;
    $request->pageToken = 'tempora';
    $request->resourceSid = 'suscipit';
    $request->sourceIpAddress = 'molestiae';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-25T16:12:20.938Z');

    $requestSecurity = new ListEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEvent($request, $requestSecurity);

    if ($response->listEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
