# rootPrincipal

## Overview

Principal Actions.

### Available Operations

* [assignRolesToPrincipals](#assignrolestoprincipals) - Assign roles to principals
* [getRolesForPrincipals](#getrolesforprincipals) - Get roles assigned to principals
* [revokeRolesFromPrincipals](#revokerolesfromprincipals) - Revoke roles from principals
* [searchPrincipalsV1](#searchprincipalsv1) - Search for principals

## assignRolesToPrincipals

Assign a set of roles to the specified principals.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RoleAssignmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoleAssignmentRequest();
    $request->principals = [
        'atque',
        'assumenda',
        'laborum',
    ];
    $request->roles = [
        'veritatis',
        'fugit',
    ];

    $response = $sdk->rootPrincipal->assignRolesToPrincipals($request);

    if ($response->roleInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRolesForPrincipals

Get a list of role information for all roles assigned to the principals.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetRolesForPrincipalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRolesForPrincipalsRequest();
    $request->principals = [
        'illum',
        'nulla',
    ];

    $response = $sdk->rootPrincipal->getRolesForPrincipals($request);

    if ($response->principalWithRoleInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokeRolesFromPrincipals

Revoke a set of roles from the specified principals.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RoleAssignmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoleAssignmentRequest();
    $request->principals = [
        'omnis',
        'iure',
    ];
    $request->roles = [
        'sapiente',
        'eius',
        'esse',
        'quasi',
    ];

    $response = $sdk->rootPrincipal->revokeRolesFromPrincipals($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchPrincipalsV1

Search for principals based on the specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SearchPrincipalsV1Request;
use \OpenAPI\OpenAPI\Models\Operations\SearchPrincipalsV1PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchPrincipalsV1SortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchPrincipalsV1SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPrincipalsV1Request();
    $request->authDomainId = 'inventore';
    $request->isAssignedRolesOrIsLocal = false;
    $request->isTotpEnabled = false;
    $request->limit = 626614;
    $request->name = 'Henry Raynor';
    $request->offset = 256742;
    $request->organizationId = 'rerum';
    $request->principalType = SearchPrincipalsV1PrincipalTypeEnum::GROUP;
    $request->roleId = 'aliquid';
    $request->sortBy = SearchPrincipalsV1SortByEnum::EMAIL_ADDRESS;
    $request->sortOrder = SearchPrincipalsV1SortOrderEnum::DESC;

    $response = $sdk->rootPrincipal->searchPrincipalsV1($request);

    if ($response->principalSummaryV1ListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
