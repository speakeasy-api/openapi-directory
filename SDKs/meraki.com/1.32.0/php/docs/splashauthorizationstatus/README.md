# splashAuthorizationStatus

### Available Operations

* [getNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [updateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

## getNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientSplashAuthorizationStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientSplashAuthorizationStatusRequest();
    $request->clientId = 'aliquid';
    $request->networkId = 'recusandae';

    $response = $sdk->splashAuthorizationStatus->getNetworkClientSplashAuthorizationStatus($request);

    if ($response->getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientSplashAuthorizationStatusRequest();
    $request->requestBody = new UpdateNetworkClientSplashAuthorizationStatusRequestBody();
    $request->requestBody->ssids = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids();
    $request->requestBody->ssids->zero = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0();
    $request->requestBody->ssids->zero->isAuthorized = false;
    $request->requestBody->ssids->one = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1();
    $request->requestBody->ssids->one->isAuthorized = false;
    $request->requestBody->ssids->ten = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10();
    $request->requestBody->ssids->ten->isAuthorized = false;
    $request->requestBody->ssids->eleven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11();
    $request->requestBody->ssids->eleven->isAuthorized = false;
    $request->requestBody->ssids->twelve = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12();
    $request->requestBody->ssids->twelve->isAuthorized = false;
    $request->requestBody->ssids->thirteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13();
    $request->requestBody->ssids->thirteen->isAuthorized = false;
    $request->requestBody->ssids->fourteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14();
    $request->requestBody->ssids->fourteen->isAuthorized = false;
    $request->requestBody->ssids->two = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2();
    $request->requestBody->ssids->two->isAuthorized = false;
    $request->requestBody->ssids->three = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3();
    $request->requestBody->ssids->three->isAuthorized = false;
    $request->requestBody->ssids->four = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4();
    $request->requestBody->ssids->four->isAuthorized = false;
    $request->requestBody->ssids->five = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5();
    $request->requestBody->ssids->five->isAuthorized = false;
    $request->requestBody->ssids->six = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6();
    $request->requestBody->ssids->six->isAuthorized = false;
    $request->requestBody->ssids->seven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7();
    $request->requestBody->ssids->seven->isAuthorized = false;
    $request->requestBody->ssids->eight = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8();
    $request->requestBody->ssids->eight->isAuthorized = false;
    $request->requestBody->ssids->nine = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9();
    $request->requestBody->ssids->nine->isAuthorized = false;
    $request->clientId = 'voluptas';
    $request->networkId = 'debitis';

    $response = $sdk->splashAuthorizationStatus->updateNetworkClientSplashAuthorizationStatus($request);

    if ($response->updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
