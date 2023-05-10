# snmp

### Available Operations

* [getNetworkSnmp](#getnetworksnmp) - Return the SNMP settings for a network
* [getOrganizationSnmp](#getorganizationsnmp) - Return the SNMP settings for an organization
* [updateNetworkSnmp](#updatenetworksnmp) - Update the SNMP settings for a network
* [updateOrganizationSnmp](#updateorganizationsnmp) - Update the SNMP settings for an organization

## getNetworkSnmp

Return the SNMP settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSnmpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSnmpRequest();
    $request->networkId = 'repudiandae';

    $response = $sdk->snmp->getNetworkSnmp($request);

    if ($response->getNetworkSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSnmp

Return the SNMP settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSnmpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSnmpRequest();
    $request->organizationId = 'assumenda';

    $response = $sdk->snmp->getOrganizationSnmp($request);

    if ($response->getOrganizationSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSnmp

Update the SNMP settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequestBodyAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequestBodyUsers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSnmpRequest();
    $request->requestBody = new UpdateNetworkSnmpRequestBody();
    $request->requestBody->access = UpdateNetworkSnmpRequestBodyAccessEnum::NONE;
    $request->requestBody->communityString = 'fuga';
    $request->requestBody->users = [
        new UpdateNetworkSnmpRequestBodyUsers(),
        new UpdateNetworkSnmpRequestBodyUsers(),
        new UpdateNetworkSnmpRequestBodyUsers(),
    ];
    $request->networkId = 'tenetur';

    $response = $sdk->snmp->updateNetworkSnmp($request);

    if ($response->updateNetworkSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationSnmp

Update the SNMP settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSnmpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSnmpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSnmpRequestBodyV3AuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSnmpRequestBodyV3PrivModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationSnmpRequest();
    $request->requestBody = new UpdateOrganizationSnmpRequestBody();
    $request->requestBody->peerIps = [
        'ea',
        'nesciunt',
        'impedit',
    ];
    $request->requestBody->v2cEnabled = false;
    $request->requestBody->v3AuthMode = UpdateOrganizationSnmpRequestBodyV3AuthModeEnum::MD5;
    $request->requestBody->v3AuthPass = 'praesentium';
    $request->requestBody->v3Enabled = false;
    $request->requestBody->v3PrivMode = UpdateOrganizationSnmpRequestBodyV3PrivModeEnum::DES;
    $request->requestBody->v3PrivPass = 'eaque';
    $request->organizationId = 'incidunt';

    $response = $sdk->snmp->updateOrganizationSnmp($request);

    if ($response->updateOrganizationSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
