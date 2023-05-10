# channels

### Available Operations

* [driveChannelsStop](#drivechannelsstop) - Stop watching resources through this channel

## driveChannelsStop

Stop watching resources through this channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChannelsStopRequest();
    $request->channel = new Channel();
    $request->channel->address = '1736 Era Mountains';
    $request->channel->expiration = 'accusantium';
    $request->channel->id = '7aff1a3a-2fa9-4467-b392-51aa52c3f5ad';
    $request->channel->kind = 'aut';
    $request->channel->params = [
        'error' => 'temporibus',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'laborum';
    $request->channel->resourceUri = 'quasi';
    $request->channel->token = 'reiciendis';
    $request->channel->type = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->fields = 'vero';
    $request->key = 'nihil';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->userIp = 'ipsa';

    $requestSecurity = new DriveChannelsStopSecurity();
    $requestSecurity->option1 = new DriveChannelsStopSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channels->driveChannelsStop($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
