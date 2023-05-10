# channels

### Available Operations

* [calendarChannelsStop](#calendarchannelsstop) - Stop watching resources through this channel

## calendarChannelsStop

Stop watching resources through this channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarChannelsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarChannelsStopSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarChannelsStopSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarChannelsStopSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CalendarChannelsStopSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\CalendarChannelsStopSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\CalendarChannelsStopSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarChannelsStopRequest();
    $request->channel = new Channel();
    $request->channel->address = '05731 Block Fields';
    $request->channel->expiration = 'et';
    $request->channel->id = 'aac366c8-dd6b-4144-a907-474778a7bd46';
    $request->channel->kind = 'suscipit';
    $request->channel->params = [
        'eos' => 'praesentium',
        'quisquam' => 'veritatis',
        'ipsa' => 'id',
        'quidem' => 'neque',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'quo';
    $request->channel->resourceUri = 'illum';
    $request->channel->token = 'quo';
    $request->channel->type = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->fields = 'eius';
    $request->key = 'eos';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->userIp = 'cupiditate';

    $requestSecurity = new CalendarChannelsStopSecurity();
    $requestSecurity->option1 = new CalendarChannelsStopSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channels->calendarChannelsStop($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
