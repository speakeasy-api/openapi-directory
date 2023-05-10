# rootHealthMonitor

## Overview

Health monitor operations.

### Available Operations

* [getPolicies](#getpolicies) - Get details of health monitor policies
* [getPolicyStatus](#getpolicystatus) - Get the status of health monitor policy enforcement
* [runPolicies](#runpolicies) - Enforce health monitor policies

## getPolicies

Retrieves the details of all the health monitor policies when policy IDs are not specified in the query parameter. If the request includes a list of policy IDs in the query parameter, the response will include the details of the specified policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPoliciesRequest();
    $request->policyIds = [
        'laudantium',
        'tempora',
    ];

    $response = $sdk->rootHealthMonitor->getPolicies($request);

    if ($response->healthMonitorPolicies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPolicyStatus

Retrieves the status of the policy enforcement for a list of nodes if specified. If nodes are not specified, the response includes the policy enforcement status for all the nodes on the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPolicyStatusRequest();
    $request->hasDetailedStatus = false;
    $request->nodeIds = [
        'doloremque',
        'corrupti',
    ];
    $request->policyIds = [
        'facilis',
        'aliquam',
        'repudiandae',
        'amet',
    ];

    $response = $sdk->rootHealthMonitor->getPolicyStatus($request);

    if ($response->nodePolicyCheckResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runPolicies

Triggers on-demand enforcement of the set of policies specified in the request body. If a list of nodes is provided, policies are run against these nodes, otherwise the policies are run on all active nodes of the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RunPolicyArg;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunPolicyArg();
    $request->nodeIds = [
        'ab',
        'officiis',
        'eum',
    ];
    $request->policyIds = [
        'placeat',
        'ab',
        'ad',
    ];

    $response = $sdk->rootHealthMonitor->runPolicies($request);

    if ($response->nodePolicyCheckResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
