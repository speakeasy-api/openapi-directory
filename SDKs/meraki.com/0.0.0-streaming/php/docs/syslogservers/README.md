# syslogServers

### Available Operations

* [getNetworkSyslogServers](#getnetworksyslogservers) - List the syslog servers for a network
* [updateNetworkSyslogServers](#updatenetworksyslogservers) - Update the syslog servers for a network

## getNetworkSyslogServers

List the syslog servers for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSyslogServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSyslogServersRequest();
    $request->networkId = 'provident';

    $response = $sdk->syslogServers->getNetworkSyslogServers($request);

    if ($response->getNetworkSyslogServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSyslogServers

Update the syslog servers for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSyslogServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSyslogServersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSyslogServersRequestBodyServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSyslogServersRequest();
    $request->requestBody = new UpdateNetworkSyslogServersRequestBody();
    $request->requestBody->servers = [
        new UpdateNetworkSyslogServersRequestBodyServers(),
        new UpdateNetworkSyslogServersRequestBodyServers(),
        new UpdateNetworkSyslogServersRequestBodyServers(),
        new UpdateNetworkSyslogServersRequestBodyServers(),
    ];
    $request->networkId = 'soluta';

    $response = $sdk->syslogServers->updateNetworkSyslogServers($request);

    if ($response->updateNetworkSyslogServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
