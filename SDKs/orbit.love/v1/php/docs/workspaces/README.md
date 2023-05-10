# workspaces

### Available Operations

* [getWorkspaces](#getworkspaces) - Get all workspaces for the current user
* [getWorkspacesWorkspaceSlug](#getworkspacesworkspaceslug) - Get a workspace

## getWorkspaces

Get all workspaces for the current user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetWorkspacesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->workspaces->getWorkspaces($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceSlug

Get a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceSlugRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceSlugSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceSlugRequest();
    $request->includeOrbitLevelCounts = false;
    $request->workspaceSlug = 'ea';

    $requestSecurity = new GetWorkspacesWorkspaceSlugSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspaceSlug($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
