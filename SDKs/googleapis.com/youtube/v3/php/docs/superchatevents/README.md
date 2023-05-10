# superChatEvents

### Available Operations

* [youtubeSuperChatEventsList](#youtubesuperchateventslist) - Retrieves a list of resources, possibly filtered.

## youtubeSuperChatEventsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSuperChatEventsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSuperChatEventsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSuperChatEventsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSuperChatEventsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSuperChatEventsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeSuperChatEventsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->fields = 'quidem';
    $request->hl = 'totam';
    $request->key = 'porro';
    $request->maxResults = 646491;
    $request->oauthToken = 'magni';
    $request->pageToken = 'nihil';
    $request->part = [
        'animi',
        'commodi',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new YoutubeSuperChatEventsListSecurity();
    $requestSecurity->option1 = new YoutubeSuperChatEventsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->superChatEvents->youtubeSuperChatEventsList($request, $requestSecurity);

    if ($response->superChatEventListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
