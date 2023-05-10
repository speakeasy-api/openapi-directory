# accessPolicies

### Available Operations

* [createNetworkSwitchAccessPolicy](#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [deleteNetworkSwitchAccessPolicy](#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [getNetworkSwitchAccessPolicies](#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [getNetworkSwitchAccessPolicy](#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [updateNetworkSwitchAccessPolicy](#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network

## createNetworkSwitchAccessPolicy

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyDot1x;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadius;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchAccessPolicyRequest();
    $request->requestBody = new CreateNetworkSwitchAccessPolicyRequestBody();
    $request->requestBody->accessPolicyType = CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum::HYBRID_AUTHENTICATION;
    $request->requestBody->dot1x = new CreateNetworkSwitchAccessPolicyRequestBodyDot1x();
    $request->requestBody->dot1x->controlDirection = CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum::INBOUND;
    $request->requestBody->guestPortBouncing = false;
    $request->requestBody->guestVlanId = 544883;
    $request->requestBody->hostMode = CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum::SINGLE_HOST;
    $request->requestBody->increaseAccessSpeed = false;
    $request->requestBody->name = 'Sabrina Oberbrunner';
    $request->requestBody->radius = new CreateNetworkSwitchAccessPolicyRequestBodyRadius();
    $request->requestBody->radius->criticalAuth = new CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth();
    $request->requestBody->radius->criticalAuth->dataVlanId = 297534;
    $request->requestBody->radius->criticalAuth->suspendPortBounce = false;
    $request->requestBody->radius->criticalAuth->voiceVlanId = 891773;
    $request->requestBody->radius->failedAuthVlanId = 56713;
    $request->requestBody->radius->reAuthenticationInterval = 963663;
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingServers = [
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusCoaSupportEnabled = false;
    $request->requestBody->radiusGroupAttribute = 'suscipit';
    $request->requestBody->radiusServers = [
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
    ];
    $request->requestBody->radiusTestingEnabled = false;
    $request->requestBody->urlRedirectWalledGardenEnabled = false;
    $request->requestBody->urlRedirectWalledGardenRanges = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->requestBody->voiceVlanClients = false;
    $request->networkId = 'nisi';

    $response = $sdk->accessPolicies->createNetworkSwitchAccessPolicy($request);

    if ($response->createNetworkSwitchAccessPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchAccessPolicy

Delete an access policy for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchAccessPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchAccessPolicyRequest();
    $request->accessPolicyNumber = 'recusandae';
    $request->networkId = 'temporibus';

    $response = $sdk->accessPolicies->deleteNetworkSwitchAccessPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAccessPolicies

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessPoliciesRequest();
    $request->networkId = 'ab';

    $response = $sdk->accessPolicies->getNetworkSwitchAccessPolicies($request);

    if ($response->getNetworkSwitchAccessPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAccessPolicy

Return a specific access policy for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessPolicyRequest();
    $request->accessPolicyNumber = 'quis';
    $request->networkId = 'veritatis';

    $response = $sdk->accessPolicies->getNetworkSwitchAccessPolicy($request);

    if ($response->getNetworkSwitchAccessPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchAccessPolicy

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyDot1x;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadius;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchAccessPolicyRequest();
    $request->requestBody = new UpdateNetworkSwitchAccessPolicyRequestBody();
    $request->requestBody->accessPolicyType = UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum::HYBRID_AUTHENTICATION;
    $request->requestBody->dot1x = new UpdateNetworkSwitchAccessPolicyRequestBodyDot1x();
    $request->requestBody->dot1x->controlDirection = UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum::BOTH;
    $request->requestBody->guestPortBouncing = false;
    $request->requestBody->guestVlanId = 368241;
    $request->requestBody->hostMode = UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum::SINGLE_HOST;
    $request->requestBody->increaseAccessSpeed = false;
    $request->requestBody->name = 'Cedric Connelly';
    $request->requestBody->radius = new UpdateNetworkSwitchAccessPolicyRequestBodyRadius();
    $request->requestBody->radius->criticalAuth = new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth();
    $request->requestBody->radius->criticalAuth->dataVlanId = 978619;
    $request->requestBody->radius->criticalAuth->suspendPortBounce = false;
    $request->requestBody->radius->criticalAuth->voiceVlanId = 473608;
    $request->requestBody->radius->failedAuthVlanId = 799159;
    $request->requestBody->radius->reAuthenticationInterval = 800911;
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingServers = [
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusCoaSupportEnabled = false;
    $request->requestBody->radiusGroupAttribute = 'totam';
    $request->requestBody->radiusServers = [
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
    ];
    $request->requestBody->radiusTestingEnabled = false;
    $request->requestBody->urlRedirectWalledGardenEnabled = false;
    $request->requestBody->urlRedirectWalledGardenRanges = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->requestBody->voiceVlanClients = false;
    $request->accessPolicyNumber = 'occaecati';
    $request->networkId = 'fugit';

    $response = $sdk->accessPolicies->updateNetworkSwitchAccessPolicy($request);

    if ($response->updateNetworkSwitchAccessPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
