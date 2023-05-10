# identityPsks

### Available Operations

* [createNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [deleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [getNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [updateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK

## createNetworkWirelessSsidIdentityPsk

Create an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessSsidIdentityPskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessSsidIdentityPskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWirelessSsidIdentityPskRequest();
    $request->requestBody = new CreateNetworkWirelessSsidIdentityPskRequestBody();
    $request->requestBody->groupPolicyId = 'incidunt';
    $request->requestBody->name = 'Nathan Ward';
    $request->requestBody->passphrase = 'esse';
    $request->networkId = 'id';
    $request->number = 'natus';

    $response = $sdk->identityPsks->createNetworkWirelessSsidIdentityPsk($request);

    if ($response->createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWirelessSsidIdentityPskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWirelessSsidIdentityPskRequest();
    $request->identityPskId = 'quas';
    $request->networkId = 'saepe';
    $request->number = 'modi';

    $response = $sdk->identityPsks->deleteNetworkWirelessSsidIdentityPsk($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidIdentityPsk

Return an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidIdentityPskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidIdentityPskRequest();
    $request->identityPskId = 'assumenda';
    $request->networkId = 'maiores';
    $request->number = 'neque';

    $response = $sdk->identityPsks->getNetworkWirelessSsidIdentityPsk($request);

    if ($response->getNetworkWirelessSsidIdentityPsk200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidIdentityPsksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidIdentityPsksRequest();
    $request->networkId = 'in';
    $request->number = 'debitis';

    $response = $sdk->identityPsks->getNetworkWirelessSsidIdentityPsks($request);

    if ($response->getNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidIdentityPskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidIdentityPskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidIdentityPskRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidIdentityPskRequestBody();
    $request->requestBody->groupPolicyId = 'quaerat';
    $request->requestBody->name = 'Pam Leannon';
    $request->requestBody->passphrase = 'nostrum';
    $request->identityPskId = 'facere';
    $request->networkId = 'aliquam';
    $request->number = 'vitae';

    $response = $sdk->identityPsks->updateNetworkWirelessSsidIdentityPsk($request);

    if ($response->updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
