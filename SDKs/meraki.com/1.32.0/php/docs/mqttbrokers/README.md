# mqttBrokers

### Available Operations

* [createNetworkMqttBroker](#createnetworkmqttbroker) - Add an MQTT broker
* [deleteNetworkMqttBroker](#deletenetworkmqttbroker) - Delete an MQTT broker
* [getNetworkMqttBroker](#getnetworkmqttbroker) - Return an MQTT broker
* [getNetworkMqttBrokers](#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [updateNetworkMqttBroker](#updatenetworkmqttbroker) - Update an MQTT broker

## createNetworkMqttBroker

Add an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequestBodySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequestBodySecuritySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkMqttBrokerRequest();
    $request->requestBody = new CreateNetworkMqttBrokerRequestBody();
    $request->requestBody->authentication = [
        'quam' => 'impedit',
        'iusto' => 'quas',
        'nemo' => 'facilis',
    ];
    $request->requestBody->host = 'exercitationem';
    $request->requestBody->name = 'Randolph Gusikowski';
    $request->requestBody->port = 12881;
    $request->requestBody->security = new CreateNetworkMqttBrokerRequestBodySecurity();
    $request->requestBody->security->mode = 'voluptatem';
    $request->requestBody->security->security = new CreateNetworkMqttBrokerRequestBodySecuritySecurity();
    $request->requestBody->security->security->caCertificate = 'vitae';
    $request->requestBody->security->security->verifyHostnames = false;
    $request->networkId = 'quos';

    $response = $sdk->mqttBrokers->createNetworkMqttBroker($request);

    if ($response->createNetworkMqttBroker201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkMqttBroker

Delete an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkMqttBrokerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkMqttBrokerRequest();
    $request->mqttBrokerId = 'adipisci';
    $request->networkId = 'reiciendis';

    $response = $sdk->mqttBrokers->deleteNetworkMqttBroker($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMqttBroker

Return an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMqttBrokerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMqttBrokerRequest();
    $request->mqttBrokerId = 'accusamus';
    $request->networkId = 'tempore';

    $response = $sdk->mqttBrokers->getNetworkMqttBroker($request);

    if ($response->getNetworkMqttBroker200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMqttBrokers

List the MQTT brokers for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMqttBrokersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMqttBrokersRequest();
    $request->networkId = 'vero';

    $response = $sdk->mqttBrokers->getNetworkMqttBrokers($request);

    if ($response->getNetworkMqttBrokers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkMqttBroker

Update an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequestBodySecurity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequestBodySecuritySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkMqttBrokerRequest();
    $request->requestBody = new UpdateNetworkMqttBrokerRequestBody();
    $request->requestBody->authentication = [
        'ea' => 'voluptate',
        'aliquid' => 'nobis',
        'reprehenderit' => 'consequuntur',
        'accusantium' => 'autem',
    ];
    $request->requestBody->host = 'pariatur';
    $request->requestBody->name = 'Cesar Kirlin Jr.';
    $request->requestBody->port = 316842;
    $request->requestBody->security = new UpdateNetworkMqttBrokerRequestBodySecurity();
    $request->requestBody->security->mode = 'qui';
    $request->requestBody->security->security = new UpdateNetworkMqttBrokerRequestBodySecuritySecurity();
    $request->requestBody->security->security->caCertificate = 'dolorum';
    $request->requestBody->security->security->verifyHostnames = false;
    $request->mqttBrokerId = 'ad';
    $request->networkId = 'nisi';

    $response = $sdk->mqttBrokers->updateNetworkMqttBroker($request);

    if ($response->updateNetworkMqttBroker200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
