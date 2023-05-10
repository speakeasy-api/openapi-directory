# prefixes

### Available Operations

* [createNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [deleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [getDeviceAppliancePrefixesDelegated](#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [getDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [getNetworkAppliancePrefixesDelegatedStatic](#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [updateNetworkAppliancePrefixesDelegatedStatic](#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

## createNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->requestBody = new CreateNetworkAppliancePrefixesDelegatedStaticRequestBody();
    $request->requestBody->description = 'dolore';
    $request->requestBody->origin = new CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin();
    $request->requestBody->origin->interfaces = [
        'porro',
    ];
    $request->requestBody->origin->type = CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum::INDEPENDENT;
    $request->requestBody->prefix = 'officia';
    $request->networkId = 'adipisci';

    $response = $sdk->prefixes->createNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->createNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkAppliancePrefixesDelegatedStaticRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->networkId = 'sit';
    $request->staticDelegatedPrefixId = 'labore';

    $response = $sdk->prefixes->deleteNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceAppliancePrefixesDelegated

Return current delegated IPv6 prefixes on an appliance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePrefixesDelegatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePrefixesDelegatedRequest();
    $request->serial = 'excepturi';

    $response = $sdk->prefixes->getDeviceAppliancePrefixesDelegated($request);

    if ($response->getDeviceAppliancePrefixesDelegated200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest();
    $request->serial = 'quisquam';

    $response = $sdk->prefixes->getDeviceAppliancePrefixesDelegatedVlanAssignments($request);

    if ($response->getDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePrefixesDelegatedStaticRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->networkId = 'ipsum';
    $request->staticDelegatedPrefixId = 'quod';

    $response = $sdk->prefixes->getNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->getNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePrefixesDelegatedStaticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePrefixesDelegatedStaticsRequest();
    $request->networkId = 'voluptatibus';

    $response = $sdk->prefixes->getNetworkAppliancePrefixesDelegatedStatics($request);

    if ($response->getNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->requestBody = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody();
    $request->requestBody->description = 'voluptas';
    $request->requestBody->origin = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin();
    $request->requestBody->origin->interfaces = [
        'sit',
        'explicabo',
        'nihil',
        'laboriosam',
    ];
    $request->requestBody->origin->type = UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum::INTERNET;
    $request->requestBody->prefix = 'dignissimos';
    $request->networkId = 'libero';
    $request->staticDelegatedPrefixId = 'qui';

    $response = $sdk->prefixes->updateNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->updateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
