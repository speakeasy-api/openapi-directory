# users

### Available Operations

* [deleteOrganizationUser](#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [getNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters

## deleteOrganizationUser

Delete a user and all of its authentication methods.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationUserRequest();
    $request->organizationId = 'eius';
    $request->userId = 'tempore';

    $response = $sdk->users->deleteOrganizationUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUserDeviceProfiles

Get the profiles associated with a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUserDeviceProfilesRequest();
    $request->networkId = 'sequi';
    $request->userId = 'sint';

    $response = $sdk->users->getNetworkSmUserDeviceProfiles($request);

    if ($response->getNetworkSmUserDeviceProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUserSoftwares

Get a list of softwares associated with a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserSoftwaresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUserSoftwaresRequest();
    $request->networkId = 'amet';
    $request->userId = 'voluptatibus';

    $response = $sdk->users->getNetworkSmUserSoftwares($request);

    if ($response->getNetworkSmUserSoftwares200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUsers

List the owners in an SM network with various specified fields and filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUsersRequest();
    $request->emails = [
        'ad',
    ];
    $request->ids = [
        'nisi',
        'suscipit',
    ];
    $request->networkId = 'consequuntur';
    $request->scope = [
        'expedita',
        'accusamus',
    ];
    $request->usernames = [
        'nesciunt',
        'magni',
        'consequuntur',
    ];

    $response = $sdk->users->getNetworkSmUsers($request);

    if ($response->getNetworkSmUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
