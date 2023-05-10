# pii

### Available Operations

* [createNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [deleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [getNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [getNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization
* [getNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [getNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

## createNetworkPiiRequest

Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkPiiRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkPiiRequestRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkPiiRequestRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkPiiRequestRequest();
    $request->requestBody = new CreateNetworkPiiRequestRequestBody();
    $request->requestBody->datasets = [
        'consequuntur',
        'deleniti',
        'fugit',
    ];
    $request->requestBody->email = 'Lysanne.Gottlieb@hotmail.com';
    $request->requestBody->mac = 'minima';
    $request->requestBody->smDeviceId = 'nisi';
    $request->requestBody->smUserId = 'fugit';
    $request->requestBody->type = CreateNetworkPiiRequestRequestBodyTypeEnum::RESTRICT_PROCESSING;
    $request->requestBody->username = 'Carol90';
    $request->networkId = 'occaecati';

    $response = $sdk->pii->createNetworkPiiRequest($request);

    if ($response->createNetworkPiiRequest201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkPiiRequest

Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkPiiRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkPiiRequestRequest();
    $request->networkId = 'atque';
    $request->requestId = 'et';

    $response = $sdk->pii->deleteNetworkPiiRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiPiiKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiPiiKeysRequest();
    $request->bluetoothMac = 'esse';
    $request->email = 'Shanny_Boehm@hotmail.com';
    $request->imei = 'nam';
    $request->mac = 'vero';
    $request->networkId = 'aliquid';
    $request->serial = 'quasi';
    $request->username = 'Stuart.Kautzer69';

    $response = $sdk->pii->getNetworkPiiPiiKeys($request);

    if ($response->getNetworkPiiPiiKeys200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiRequest

Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiRequestRequest();
    $request->networkId = 'occaecati';
    $request->requestId = 'minima';

    $response = $sdk->pii->getNetworkPiiRequest($request);

    if ($response->getNetworkPiiRequest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiRequests

List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiRequestsRequest();
    $request->networkId = 'distinctio';

    $response = $sdk->pii->getNetworkPiiRequests($request);

    if ($response->getNetworkPiiRequests200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiSmDevicesForKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiSmDevicesForKeyRequest();
    $request->bluetoothMac = 'eligendi';
    $request->email = 'Lou76@gmail.com';
    $request->imei = 'consequuntur';
    $request->mac = 'consequatur';
    $request->networkId = 'minus';
    $request->serial = 'quaerat';
    $request->username = 'Vesta_Feest';

    $response = $sdk->pii->getNetworkPiiSmDevicesForKey($request);

    if ($response->getNetworkPiiSmDevicesForKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiSmOwnersForKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiSmOwnersForKeyRequest();
    $request->bluetoothMac = 'provident';
    $request->email = 'Ruthie.Lynch@hotmail.com';
    $request->imei = 'a';
    $request->mac = 'error';
    $request->networkId = 'sint';
    $request->serial = 'pariatur';
    $request->username = 'Reginald_Crona81';

    $response = $sdk->pii->getNetworkPiiSmOwnersForKey($request);

    if ($response->getNetworkPiiSmOwnersForKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
