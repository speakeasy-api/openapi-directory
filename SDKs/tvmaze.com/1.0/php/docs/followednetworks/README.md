# followedNetworks

### Available Operations

* [deleteUserFollowsNetworksNetworkId](#deleteuserfollowsnetworksnetworkid) - Unfollow a network
* [getUserFollowsNetworks](#getuserfollowsnetworks) - List the followed networks
* [getUserFollowsNetworksNetworkId](#getuserfollowsnetworksnetworkid) - Check if a network is followed
* [putUserFollowsNetworksNetworkId](#putuserfollowsnetworksnetworkid) - Follow a network

## deleteUserFollowsNetworksNetworkId

Unfollow a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserFollowsNetworksNetworkIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserFollowsNetworksNetworkIdRequest();
    $request->networkId = 544883;

    $response = $sdk->followedNetworks->deleteUserFollowsNetworksNetworkId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserFollowsNetworks

List the followed networks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsNetworksEmbedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserFollowsNetworksRequest();
    $request->embed = GetUserFollowsNetworksEmbedEnum::NETWORK;

    $response = $sdk->followedNetworks->getUserFollowsNetworks($request);

    if ($response->networkFollows !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserFollowsNetworksNetworkId

Check if a network is followed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsNetworksNetworkIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserFollowsNetworksNetworkIdRequest();
    $request->networkId = 847252;

    $response = $sdk->followedNetworks->getUserFollowsNetworksNetworkId($request);

    if ($response->networkFollow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUserFollowsNetworksNetworkId

Follow a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUserFollowsNetworksNetworkIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserFollowsNetworksNetworkIdRequest();
    $request->networkId = 423655;

    $response = $sdk->followedNetworks->putUserFollowsNetworksNetworkId($request);

    if ($response->networkFollow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
