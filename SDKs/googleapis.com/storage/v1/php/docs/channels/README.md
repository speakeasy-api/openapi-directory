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
use \OpenAPI\OpenAPI\Models\Operations\StorageChannelsStopSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageChannelsStopSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageChannelsStopRequest();
    $request->channel = new Channel();
    $request->channel->address = '842 Stanton Drive';
    $request->channel->expiration = 'natus';
    $request->channel->id = 'c0f5d2cf-f7c7-40a4-9626-d436813f16d9';
    $request->channel->kind = 'voluptatibus';
    $request->channel->params = [
        'sapiente' => 'quisquam',
        'saepe' => 'ea',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'impedit';
    $request->channel->resourceUri = 'corporis';
    $request->channel->token = 'veniam';
    $request->channel->type = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->fields = 'inventore';
    $request->key = 'magnam';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'consectetur';
    $request->userIp = 'recusandae';

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
