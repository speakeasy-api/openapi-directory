# SDK

## Overview

The [Okta User API](/docs/api/rest/users.html) provides operations to manage users in your organization.

### Available Operations

* [clearUserSessions](#clearusersessions) - Clear User Sessions
* [findUser](#finduser) - Find User
* [getAssignedAppLinks](#getassignedapplinks) - Get Assigned App Links
* [getCurrentUser](#getcurrentuser) - Get Current User
* [getGroupsForUser](#getgroupsforuser) - Get Groups for User
* [getUser](#getuser) - Get User
* [resetFactors](#resetfactors) - Reset Factors

## clearUserSessions

Clear User Sessions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClearUserSessionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearUserSessionsRequest();
    $request->requestBody = 'distinctio';
    $request->userId = 'quibusdam';

    $response = $sdk->sdk->clearUserSessions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findUser

Find User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindUserRequest();
    $request->requestBody = 'unde';
    $request->q = 'user';

    $response = $sdk->sdk->findUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssignedAppLinks

Get Assigned App Links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssignedAppLinksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssignedAppLinksRequest();
    $request->requestBody = 'nulla';
    $request->userId = 'corrupti';

    $response = $sdk->sdk->getAssignedAppLinks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCurrentUser

Get Current User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'illum'

    $response = $sdk->sdk->getCurrentUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupsForUser

Get Groups for User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsForUserRequest();
    $request->requestBody = 'vel';
    $request->userId = 'error';

    $response = $sdk->sdk->getGroupsForUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

Get User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequest();
    $request->requestBody = 'deserunt';
    $request->userId = 'suscipit';

    $response = $sdk->sdk->getUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetFactors

Reset Factors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetFactorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetFactorsRequest();
    $request->requestBody = 'iure';
    $request->userId = 'magnam';

    $response = $sdk->sdk->resetFactors($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
