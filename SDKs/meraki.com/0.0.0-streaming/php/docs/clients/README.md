# clients

### Available Operations

* [getDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientEvents](#getnetworkclientevents) - Return the events associated with this client
* [getNetworkClientLatencyHistory](#getnetworkclientlatencyhistory) - Return the latency history for a client
* [getNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [provisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [updateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

## getDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceClientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceClientsRequest();
    $request->serial = 'blanditiis';
    $request->t0 = 'deleniti';
    $request->timespan = 9560.84;

    $response = $sdk->clients->getDeviceClients($request);

    if ($response->getDeviceClients200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClient

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientRequest();
    $request->clientId = 'amet';
    $request->networkId = 'deserunt';

    $response = $sdk->clients->getNetworkClient($request);

    if ($response->getNetworkClient200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientEvents

Return the events associated with this client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientEventsRequest();
    $request->clientId = 'nisi';
    $request->endingBefore = 'vel';
    $request->networkId = 'natus';
    $request->perPage = 606393;
    $request->startingAfter = 'molestiae';

    $response = $sdk->clients->getNetworkClientEvents($request);

    if ($response->getNetworkClientEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientLatencyHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientLatencyHistoryRequest();
    $request->clientId = 'perferendis';
    $request->networkId = 'nihil';
    $request->resolution = 301575;
    $request->t0 = 'distinctio';
    $request->t1 = 'id';
    $request->timespan = 2879.91;

    $response = $sdk->clients->getNetworkClientLatencyHistory($request);

    if ($response->getNetworkClientLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientPolicyRequest();
    $request->clientId = 'labore';
    $request->networkId = 'suscipit';

    $response = $sdk->clients->getNetworkClientPolicy($request);

    if ($response->getNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientSplashAuthorizationStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientSplashAuthorizationStatusRequest();
    $request->clientId = 'natus';
    $request->networkId = 'nobis';

    $response = $sdk->clients->getNetworkClientSplashAuthorizationStatus($request);

    if ($response->getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientUsageHistoryRequest();
    $request->clientId = 'eum';
    $request->networkId = 'vero';

    $response = $sdk->clients->getNetworkClientUsageHistory($request);

    if ($response->getNetworkClientUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClients

List the clients that have used this network in the timespan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsRequest();
    $request->endingBefore = 'aspernatur';
    $request->networkId = 'architecto';
    $request->perPage = 298282;
    $request->startingAfter = 'et';
    $request->t0 = 'excepturi';
    $request->timespan = 3540.47;

    $response = $sdk->clients->getNetworkClients($request);

    if ($response->getNetworkClients200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvisionNetworkClientsRequest();
    $request->requestBody = new ProvisionNetworkClientsRequestBody();
    $request->requestBody->devicePolicy = ProvisionNetworkClientsRequestBodyDevicePolicyEnum::NORMAL;
    $request->requestBody->groupPolicyId = 'quos';
    $request->requestBody->mac = 'sint';
    $request->requestBody->name = 'Angie Wisozk';
    $request->requestBody->policiesBySecurityAppliance = new ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance();
    $request->requestBody->policiesBySecurityAppliance->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid = new ProvisionNetworkClientsRequestBodyPoliciesBySsid();
    $request->requestBody->policiesBySsid->zero = new ProvisionNetworkClientsRequestBodyPoliciesBySsid0();
    $request->requestBody->policiesBySsid->zero->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->zero->groupPolicyId = 'necessitatibus';
    $request->requestBody->policiesBySsid->one = new ProvisionNetworkClientsRequestBodyPoliciesBySsid1();
    $request->requestBody->policiesBySsid->one->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->one->groupPolicyId = 'nemo';
    $request->requestBody->policiesBySsid->ten = new ProvisionNetworkClientsRequestBodyPoliciesBySsid10();
    $request->requestBody->policiesBySsid->ten->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->ten->groupPolicyId = 'iure';
    $request->requestBody->policiesBySsid->eleven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid11();
    $request->requestBody->policiesBySsid->eleven->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum::WHITELISTED;
    $request->requestBody->policiesBySsid->eleven->groupPolicyId = 'debitis';
    $request->requestBody->policiesBySsid->twelve = new ProvisionNetworkClientsRequestBodyPoliciesBySsid12();
    $request->requestBody->policiesBySsid->twelve->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->twelve->groupPolicyId = 'maxime';
    $request->requestBody->policiesBySsid->thirteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid13();
    $request->requestBody->policiesBySsid->thirteen->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->thirteen->groupPolicyId = 'facilis';
    $request->requestBody->policiesBySsid->fourteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid14();
    $request->requestBody->policiesBySsid->fourteen->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->fourteen->groupPolicyId = 'architecto';
    $request->requestBody->policiesBySsid->two = new ProvisionNetworkClientsRequestBodyPoliciesBySsid2();
    $request->requestBody->policiesBySsid->two->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->two->groupPolicyId = 'repudiandae';
    $request->requestBody->policiesBySsid->three = new ProvisionNetworkClientsRequestBodyPoliciesBySsid3();
    $request->requestBody->policiesBySsid->three->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->three->groupPolicyId = 'expedita';
    $request->requestBody->policiesBySsid->four = new ProvisionNetworkClientsRequestBodyPoliciesBySsid4();
    $request->requestBody->policiesBySsid->four->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->four->groupPolicyId = 'repellat';
    $request->requestBody->policiesBySsid->five = new ProvisionNetworkClientsRequestBodyPoliciesBySsid5();
    $request->requestBody->policiesBySsid->five->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum::WHITELISTED;
    $request->requestBody->policiesBySsid->five->groupPolicyId = 'sed';
    $request->requestBody->policiesBySsid->six = new ProvisionNetworkClientsRequestBodyPoliciesBySsid6();
    $request->requestBody->policiesBySsid->six->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum::WHITELISTED;
    $request->requestBody->policiesBySsid->six->groupPolicyId = 'pariatur';
    $request->requestBody->policiesBySsid->seven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid7();
    $request->requestBody->policiesBySsid->seven->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->seven->groupPolicyId = 'consequuntur';
    $request->requestBody->policiesBySsid->eight = new ProvisionNetworkClientsRequestBodyPoliciesBySsid8();
    $request->requestBody->policiesBySsid->eight->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->eight->groupPolicyId = 'natus';
    $request->requestBody->policiesBySsid->nine = new ProvisionNetworkClientsRequestBodyPoliciesBySsid9();
    $request->requestBody->policiesBySsid->nine->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->nine->groupPolicyId = 'sunt';
    $request->networkId = 'quo';

    $response = $sdk->clients->provisionNetworkClients($request);

    if ($response->provisionNetworkClients201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientPolicyRequest();
    $request->requestBody = new UpdateNetworkClientPolicyRequestBody();
    $request->requestBody->devicePolicy = 'illum';
    $request->requestBody->groupPolicyId = 'pariatur';
    $request->clientId = 'maxime';
    $request->networkId = 'ea';

    $response = $sdk->clients->updateNetworkClientPolicy($request);

    if ($response->updateNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientSplashAuthorizationStatusRequest();
    $request->requestBody = new UpdateNetworkClientSplashAuthorizationStatusRequestBody();
    $request->requestBody->ssids = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids();
    $request->requestBody->ssids->zero = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0();
    $request->requestBody->ssids->zero->isAuthorized = false;
    $request->requestBody->ssids->one = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1();
    $request->requestBody->ssids->one->isAuthorized = false;
    $request->requestBody->ssids->ten = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10();
    $request->requestBody->ssids->ten->isAuthorized = false;
    $request->requestBody->ssids->eleven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11();
    $request->requestBody->ssids->eleven->isAuthorized = false;
    $request->requestBody->ssids->twelve = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12();
    $request->requestBody->ssids->twelve->isAuthorized = false;
    $request->requestBody->ssids->thirteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13();
    $request->requestBody->ssids->thirteen->isAuthorized = false;
    $request->requestBody->ssids->fourteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14();
    $request->requestBody->ssids->fourteen->isAuthorized = false;
    $request->requestBody->ssids->two = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2();
    $request->requestBody->ssids->two->isAuthorized = false;
    $request->requestBody->ssids->three = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3();
    $request->requestBody->ssids->three->isAuthorized = false;
    $request->requestBody->ssids->four = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4();
    $request->requestBody->ssids->four->isAuthorized = false;
    $request->requestBody->ssids->five = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5();
    $request->requestBody->ssids->five->isAuthorized = false;
    $request->requestBody->ssids->six = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6();
    $request->requestBody->ssids->six->isAuthorized = false;
    $request->requestBody->ssids->seven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7();
    $request->requestBody->ssids->seven->isAuthorized = false;
    $request->requestBody->ssids->eight = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8();
    $request->requestBody->ssids->eight->isAuthorized = false;
    $request->requestBody->ssids->nine = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9();
    $request->requestBody->ssids->nine->isAuthorized = false;
    $request->clientId = 'excepturi';
    $request->networkId = 'odit';

    $response = $sdk->clients->updateNetworkClientSplashAuthorizationStatus($request);

    if ($response->updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
