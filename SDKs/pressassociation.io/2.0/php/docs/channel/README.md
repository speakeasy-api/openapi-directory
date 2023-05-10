# channel

### Available Operations

* [getChannel](#getchannel) - Channel Detail
* [listChannels](#listchannels) - Channel Collection

## getChannel

Return the content of the selected channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelRequest();
    $request->aliases = false;
    $request->channelId = 'debitis';

    $requestSecurity = new GetChannelSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->channel->getChannel($request, $requestSecurity);

    if ($response->getChannel200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChannels

If you are interested in a list of channels that have had there schedule updated you can filter by the following query params.
 - scheduleStart
 - scheduleEnd
 - scheduleUpdatedSince

adding these query params will filter the channel collection to only return channels that have been updated within the given range, updatedSince stores the state of your previous call.

Example Usage: Every 10 minutes get me the channels that have updated schedules for the next 2 weeks.

/channel?platform={uuid}&scheduleStart={today}&scheduleEnd={today + 2 weeks}&updatedSince={10 minutes ago}

Also please note epg numbers are only exposed when a platform and region are passed to the query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChannelsRequest();
    $request->aliases = false;
    $request->date = 'ipsa';
    $request->platformId = 'delectus';
    $request->regionId = 'tempora';
    $request->scheduleEnd = 'suscipit';
    $request->scheduleStart = 'molestiae';
    $request->scheduleUpdatedSince = 'minus';

    $requestSecurity = new ListChannelsSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->channel->listChannels($request, $requestSecurity);

    if ($response->listChannels200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
