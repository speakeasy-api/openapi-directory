# rootOrganization

## Overview

Organization.

### Available Operations

* [bulkCreateEnvoys](#bulkcreateenvoys) - Create a list of Rubrik Envoy objects
* [bulkDeleteEnvoys](#bulkdeleteenvoys) - Remove a list of Rubrik Envoy objects
* [bulkUpdateEnvoys](#bulkupdateenvoys) - Update a list of Rubrik Envoy objects

## bulkCreateEnvoys

Create a list of Rubrik Envoy objects for a specified organization and specify the properties to assign to the Rubrik Envoy objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BulkCreateEnvoysRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnvoyCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkCreateEnvoysRequest();
    $request->requestBody = [
        new EnvoyCreate(),
        new EnvoyCreate(),
        new EnvoyCreate(),
        new EnvoyCreate(),
    ];
    $request->id = 'a1fad355-12f0-46d4-a5b7-2f0f548568a0';

    $response = $sdk->rootOrganization->bulkCreateEnvoys($request);

    if ($response->envoyDetailList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkDeleteEnvoys

Remove a list of Rubrik Envoy objects from an organization and delete the objects from the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BulkDeleteEnvoysRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnvoyIdList;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkDeleteEnvoysRequest();
    $request->envoyIdList = new EnvoyIdList();
    $request->envoyIdList->envoyIds = [
        'dolores',
        'labore',
    ];
    $request->id = 'e00a1d6e-b943-4464-9d03-084fbba5ccef';

    $response = $sdk->rootOrganization->bulkDeleteEnvoys($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkUpdateEnvoys

Change one or more of the properties of a list of Rubrik Envoy objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BulkUpdateEnvoysRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnvoyBulkUpdate;
use \OpenAPI\OpenAPI\Models\Shared\EnvoyUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkUpdateEnvoysRequest();
    $request->requestBody = [
        new EnvoyBulkUpdate(),
        new EnvoyBulkUpdate(),
        new EnvoyBulkUpdate(),
        new EnvoyBulkUpdate(),
    ];
    $request->id = '5cb01fe5-1e52-48a4-9ac8-2b85f8bc2cab';

    $response = $sdk->rootOrganization->bulkUpdateEnvoys($request);

    if ($response->envoyDetailList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
