<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelConnectionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsChannelConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channelConnectionInput = new ChannelConnectionInput();
    $request->channelConnectionInput->activationToken = 'provident';
    $request->channelConnectionInput->channel = 'distinctio';
    $request->channelConnectionInput->name = 'Stuart Stiedemann';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->channelConnectionId = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new EventarcProjectsLocationsChannelConnectionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsChannelConnectionsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->