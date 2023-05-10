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
use \OpenAPI\OpenAPI\Models\Operations\DriveChannelsStopSecurityOption8;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChannelsStopRequest();
    $request->channel = new Channel();
    $request->channel->address = '1663 Orlando Drives';
    $request->channel->expiration = 'tenetur';
    $request->channel->id = '5ad019da-1ffe-478f-897b-0074f15471b5';
    $request->channel->kind = 'accusamus';
    $request->channel->params = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'molestias';
    $request->channel->resourceUri = 'excepturi';
    $request->channel->token = 'pariatur';
    $request->channel->type = 'modi';
    $request->alt = AltEnum::JSON;
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->userIp = 'repudiandae';

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
