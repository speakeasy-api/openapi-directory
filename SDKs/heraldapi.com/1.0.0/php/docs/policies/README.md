# policies

### Available Operations

* [getPoliciesPolicyId](#getpoliciespolicyid) - /policies/{policy_id}
* [postPolicies](#postpolicies) - /policies

## getPoliciesPolicyId

### Get a policy
Get the latest details for a specific policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPoliciesPolicyIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPoliciesPolicyIdRequest();
    $request->policyId = 'quae';

    $response = $sdk->policies->getPoliciesPolicyId($request);

    if ($response->getPoliciesPolicyId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPolicies

### Bind a policy
Take a quote and bind it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPoliciesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPoliciesRequestBody();
    $request->quoteId = '3b99d488-e1e9-41e4-90ad-2abd44269802';

    $response = $sdk->policies->postPolicies($request);

    if ($response->postPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
