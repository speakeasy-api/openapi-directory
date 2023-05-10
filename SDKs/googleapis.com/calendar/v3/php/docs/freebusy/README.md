# freebusy

### Available Operations

* [calendarFreebusyQuery](#calendarfreebusyquery) - Returns free/busy information for a set of calendars.

## calendarFreebusyQuery

Returns free/busy information for a set of calendars.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarFreebusyQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\FreeBusyRequest;
use \OpenAPI\OpenAPI\Models\Shared\FreeBusyRequestItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarFreebusyQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarFreebusyQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarFreebusyQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarFreebusyQueryRequest();
    $request->freeBusyRequest = new FreeBusyRequest();
    $request->freeBusyRequest->calendarExpansionMax = 57320;
    $request->freeBusyRequest->groupExpansionMax = 914864;
    $request->freeBusyRequest->items = [
        new FreeBusyRequestItem(),
    ];
    $request->freeBusyRequest->timeMax = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-26T05:52:38.352Z');
    $request->freeBusyRequest->timeMin = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-31T09:16:11.300Z');
    $request->freeBusyRequest->timeZone = 'distinctio';
    $request->alt = AltEnum::JSON;
    $request->fields = 'voluptatem';
    $request->key = 'autem';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->userIp = 'assumenda';

    $requestSecurity = new CalendarFreebusyQuerySecurity();
    $requestSecurity->option1 = new CalendarFreebusyQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->freebusy->calendarFreebusyQuery($request, $requestSecurity);

    if ($response->freeBusyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
