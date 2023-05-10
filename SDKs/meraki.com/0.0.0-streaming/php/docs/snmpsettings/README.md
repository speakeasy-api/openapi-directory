# snmpSettings

### Available Operations

* [getNetworkSnmpSettings](#getnetworksnmpsettings) - Return the SNMP settings for a network
* [getOrganizationSnmp](#getorganizationsnmp) - Return the SNMP settings for an organization

## getNetworkSnmpSettings

Return the SNMP settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSnmpSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSnmpSettingsRequest();
    $request->networkId = 'error';

    $response = $sdk->snmpSettings->getNetworkSnmpSettings($request);

    if ($response->getNetworkSnmpSettings200ApplicationJSONObject !== null) {
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
    $request->organizationId = 'officiis';

    $response = $sdk->snmpSettings->getOrganizationSnmp($request);

    if ($response->getOrganizationSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
