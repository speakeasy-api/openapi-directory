# channels

### Available Operations

* [adminChannelsStop](#adminchannelsstop) - Stops watching resources through this channel.

## adminChannelsStop

Stops watching resources through this channel.

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
use \OpenAPI\OpenAPI\Models\Operations\AdminChannelsStopSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdminChannelsStopSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AdminChannelsStopSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\AdminChannelsStopSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\AdminChannelsStopSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminChannelsStopRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channel = new Channel();
    $request->channel->address = '76515 Rosenbaum Manors';
    $request->channel->expiration = 'beatae';
    $request->channel->id = '6742cb73-9205-4929-b96f-ea7596eb10fa';
    $request->channel->kind = 'mollitia';
    $request->channel->params = [
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
        'nobis' => 'enim',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'omnis';
    $request->channel->resourceUri = 'nemo';
    $request->channel->token = 'minima';
    $request->channel->type = 'excepturi';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new AdminChannelsStopSecurity();
    $requestSecurity->option1 = new AdminChannelsStopSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channels->adminChannelsStop($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
