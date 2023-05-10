# channels

### Available Operations

* [storageChannelsStop](#storagechannelsstop) - Stop watching resources through this channel

## storageChannelsStop

Stop watching resources through this channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageChannelsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageChannelsStopSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageChannelsStopSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageChannelsStopSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageChannelsStopSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageChannelsStopRequest();
    $request->channel = new Channel();
    $request->channel->address = '00044 Shaniya Radial';
    $request->channel->expiration = 'voluptatibus';
    $request->channel->id = '69280d1b-a77a-489e-bf73-7ae4203ce5e6';
    $request->channel->kind = 'deserunt';
    $request->channel->params = [
        'minima' => 'repellendus',
        'totam' => 'similique',
        'alias' => 'at',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'quaerat';
    $request->channel->resourceUri = 'tempora';
    $request->channel->token = 'vel';
    $request->channel->type = 'quod';
    $request->alt = AltEnum::JSON;
    $request->fields = 'officiis';
    $request->key = 'qui';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->userIp = 'esse';

    $requestSecurity = new StorageChannelsStopSecurity();
    $requestSecurity->option1 = new StorageChannelsStopSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channels->storageChannelsStop($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
