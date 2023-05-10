# policyAPI

## Overview

Allows you to add, remove and modify policy modules. *Policy module identifiers are only used for management purposes. They are not used outside the Policy API.*

### Available Operations

* [deletePolicyModule](#deletepolicymodule) - Delete a policy module
* [getPolicies](#getpolicies) - List policies
* [getPolicyModule](#getpolicymodule) - Get a policy module
* [putPolicyModule](#putpolicymodule) - Create or update a policy module

## deletePolicyModule

This API endpoint removes an existing policy module from the server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePolicyModuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePolicyModuleRequest();
    $request->id = 'c2ddf7cc-78ca-41ba-928f-c816742cb739';
    $request->pretty = false;

    $response = $sdk->policyAPI->deletePolicyModule($request);

    if ($response->deletePolicyModule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPolicies

This API endpoint responds with a list of all policy modules on the server (result response)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPoliciesRequest();
    $request->pretty = false;

    $response = $sdk->policyAPI->getPolicies($request);

    if ($response->twoHundredResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPolicyModule

This API endpoint returns the details of the specified policy module (`{id}`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyModuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPolicyModuleRequest();
    $request->id = '20592939-6fea-4759-aeb1-0faaa2352c59';
    $request->pretty = false;

    $response = $sdk->policyAPI->getPolicyModule($request);

    if ($response->twoHundredResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPolicyModule

- If the policy module does not exist, it is created.
- If the policy module already exists, it is replaced.

If the policy module isn't correctly defined, a *bad request* (400) response is returned.

### Example policy module
```yaml
package opa.examples

import data.servers
import data.networks
import data.ports

public_servers[server] {
  some k, m
  	server := servers[_]
  	server.ports[_] == ports[k].id
  	ports[k].networks[_] == networks[m].id
  	networks[m].public == true
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPolicyModuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPolicyModuleRequest();
    $request->requestBody = 'package opa.examples
    
    import data.servers
    import data.networks
    import data.ports
    
    public_servers[server] {
      some k, m
      	server := servers[_]
      	server.ports[_] == ports[k].id
      	ports[k].networks[_] == networks[m].id
      	networks[m].public == true
    }';
    $request->id = '55907aff-1a3a-42fa-9467-739251aa52c3';
    $request->metrics = false;
    $request->pretty = false;

    $response = $sdk->policyAPI->putPolicyModule($request);

    if ($response->twoHundredResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
