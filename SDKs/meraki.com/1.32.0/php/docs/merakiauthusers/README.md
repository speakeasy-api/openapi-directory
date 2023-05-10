# merakiAuthUsers

### Available Operations

* [createNetworkMerakiAuthUser](#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [deleteNetworkMerakiAuthUser](#deletenetworkmerakiauthuser) - Deauthorize a user
* [getNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [getNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [updateNetworkMerakiAuthUser](#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

## createNetworkMerakiAuthUser

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequestBodyAuthorizations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkMerakiAuthUserRequest();
    $request->requestBody = new CreateNetworkMerakiAuthUserRequestBody();
    $request->requestBody->accountType = CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum::CLIENT_VPN;
    $request->requestBody->authorizations = [
        new CreateNetworkMerakiAuthUserRequestBodyAuthorizations(),
    ];
    $request->requestBody->email = 'Jimmie40@yahoo.com';
    $request->requestBody->emailPasswordToUser = false;
    $request->requestBody->isAdmin = false;
    $request->requestBody->name = 'Mr. Clark O'Hara III';
    $request->requestBody->password = 'delectus';
    $request->networkId = 'officiis';

    $response = $sdk->merakiAuthUsers->createNetworkMerakiAuthUser($request);

    if ($response->createNetworkMerakiAuthUser201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkMerakiAuthUser

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkMerakiAuthUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkMerakiAuthUserRequest();
    $request->merakiAuthUserId = 'omnis';
    $request->networkId = 'ea';

    $response = $sdk->merakiAuthUsers->deleteNetworkMerakiAuthUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMerakiAuthUser

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMerakiAuthUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMerakiAuthUserRequest();
    $request->merakiAuthUserId = 'ipsam';
    $request->networkId = 'soluta';

    $response = $sdk->merakiAuthUsers->getNetworkMerakiAuthUser($request);

    if ($response->getNetworkMerakiAuthUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMerakiAuthUsers

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMerakiAuthUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMerakiAuthUsersRequest();
    $request->networkId = 'esse';

    $response = $sdk->merakiAuthUsers->getNetworkMerakiAuthUsers($request);

    if ($response->getNetworkMerakiAuthUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkMerakiAuthUser

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMerakiAuthUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMerakiAuthUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMerakiAuthUserRequestBodyAuthorizations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkMerakiAuthUserRequest();
    $request->requestBody = new UpdateNetworkMerakiAuthUserRequestBody();
    $request->requestBody->authorizations = [
        new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(),
    ];
    $request->requestBody->emailPasswordToUser = false;
    $request->requestBody->name = 'Meredith Barrows';
    $request->requestBody->password = 'tenetur';
    $request->merakiAuthUserId = 'deleniti';
    $request->networkId = 'deleniti';

    $response = $sdk->merakiAuthUsers->updateNetworkMerakiAuthUser($request);

    if ($response->updateNetworkMerakiAuthUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
