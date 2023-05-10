<!-- Start SDK Example Usage -->
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
    $request->externalAccountId = 'provident';
    $request->externalEventId = 'distinctio';
    $request->subscriberState = 'quibusdam';

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
<!-- End SDK Example Usage -->