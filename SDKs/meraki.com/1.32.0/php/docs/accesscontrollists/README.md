# accessControlLists

### Available Operations

* [getNetworkSwitchAccessControlLists](#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [updateNetworkSwitchAccessControlLists](#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network

## getNetworkSwitchAccessControlLists

Return the access control lists for a MS network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessControlListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessControlListsRequest();
    $request->networkId = 'provident';

    $response = $sdk->accessControlLists->getNetworkSwitchAccessControlLists($request);

    if ($response->getNetworkSwitchAccessControlLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchAccessControlLists

Update the access control lists for a MS network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchAccessControlListsRequest();
    $request->requestBody = new UpdateNetworkSwitchAccessControlListsRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkSwitchAccessControlListsRequestBodyRules(),
        new UpdateNetworkSwitchAccessControlListsRequestBodyRules(),
        new UpdateNetworkSwitchAccessControlListsRequestBodyRules(),
    ];
    $request->networkId = 'quibusdam';

    $response = $sdk->accessControlLists->updateNetworkSwitchAccessControlLists($request);

    if ($response->updateNetworkSwitchAccessControlLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
