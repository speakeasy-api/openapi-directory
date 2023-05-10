<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsV3EventsGetPageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsV3EventsGetPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsV3EventsGetPageRequest();
    $request->after = 'corrupti';
    $request->before = 'provident';
    $request->eventType = 'distinctio';
    $request->limit = 844266;
    $request->objectId = 602763;
    $request->objectType = 'nulla';
    $request->occurredAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-22T12:08:58.275Z');
    $request->occurredBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T09:34:54.894Z');
    $request->sort = [
        'suscipit',
        'iure',
        'magnam',
    ];

    $requestSecurity = new GetEventsV3EventsGetPageSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->events->getEventsV3EventsGetPage($request, $requestSecurity);

    if ($response->collectionResponseExternalUnifiedEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->