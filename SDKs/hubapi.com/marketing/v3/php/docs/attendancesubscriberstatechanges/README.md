# attendanceSubscriberStateChanges

## Overview

Operations to mark HubSpot contacts as registered, attended or cancelled a registration to a Marketing Event.

### Available Operations

* [postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate](#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstatecreatecreate) - Record
* [postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail](#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstateemailcreatecreatebyemail) - Record

## postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate

Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchInputMarketingEventSubscriber;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventSubscriber;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest();
    $request->batchInputMarketingEventSubscriber = new BatchInputMarketingEventSubscriber();
    $request->batchInputMarketingEventSubscriber->inputs = [
        new MarketingEventSubscriber(),
        new MarketingEventSubscriber(),
        new MarketingEventSubscriber(),
    ];
    $request->externalAccountId = 'nulla';
    $request->externalEventId = 'corrupti';
    $request->subscriberState = 'illum';

    $requestSecurity = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->attendanceSubscriberStateChanges->postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate($request, $requestSecurity);

    if ($response->batchResponseSubscriberVidResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail

Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchInputMarketingEventEmailSubscriber;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventEmailSubscriber;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest();
    $request->batchInputMarketingEventEmailSubscriber = new BatchInputMarketingEventEmailSubscriber();
    $request->batchInputMarketingEventEmailSubscriber->inputs = [
        new MarketingEventEmailSubscriber(),
        new MarketingEventEmailSubscriber(),
    ];
    $request->externalAccountId = 'error';
    $request->externalEventId = 'deserunt';
    $request->subscriberState = 'suscipit';

    $requestSecurity = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->attendanceSubscriberStateChanges->postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail($request, $requestSecurity);

    if ($response->batchResponseSubscriberEmailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
