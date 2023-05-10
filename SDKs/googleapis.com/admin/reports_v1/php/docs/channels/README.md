# channels

### Available Operations

* [adminChannelsStop](#adminchannelsstop) - Stop watching resources through this channel.

## adminChannelsStop

Stop watching resources through this channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminChannelsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminChannelsStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminChannelsStopRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->channel = new Channel();
    $request->channel->address = '4426 Eugene Corner';
    $request->channel->expiration = 'laborum';
    $request->channel->id = 'a52c3f5a-d019-4da1-bfe7-8f097b0074f1';
    $request->channel->kind = 'corporis';
    $request->channel->params = [
        'iusto' => 'dicta',
        'harum' => 'enim',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'accusamus';
    $request->channel->resourceUri = 'commodi';
    $request->channel->token = 'repudiandae';
    $request->channel->type = 'quae';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'excepturi';
    $request->key = 'pariatur';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new AdminChannelsStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channels->adminChannelsStop($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
