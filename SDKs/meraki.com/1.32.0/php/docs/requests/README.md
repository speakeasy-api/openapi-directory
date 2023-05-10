# requests

### Available Operations

* [createNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [deleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [getNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization

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
        'sapiente',
        'dolores',
        'reiciendis',
    ];
    $request->requestBody->email = 'Avery_Hagenes79@hotmail.com';
    $request->requestBody->mac = 'beatae';
    $request->requestBody->smDeviceId = 'expedita';
    $request->requestBody->smUserId = 'velit';
    $request->requestBody->type = CreateNetworkPiiRequestRequestBodyTypeEnum::DELETE;
    $request->requestBody->username = 'Catharine_Parisian92';
    $request->networkId = 'repellendus';

    $response = $sdk->requests->createNetworkPiiRequest($request);

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
    $request->networkId = 'dolorum';
    $request->requestId = 'maxime';

    $response = $sdk->requests->deleteNetworkPiiRequest($request);

    if ($response->statusCode === 200) {
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
    $request->networkId = 'minus';
    $request->requestId = 'ad';

    $response = $sdk->requests->getNetworkPiiRequest($request);

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
    $request->networkId = 'consequuntur';

    $response = $sdk->requests->getNetworkPiiRequests($request);

    if ($response->getNetworkPiiRequests200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
