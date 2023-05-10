# activityTypes

### Available Operations

* [getWorkspaceSlugActivityTypes](#getworkspaceslugactivitytypes) - List all activity types for a workspace

## getWorkspaceSlugActivityTypes

List all activity types for a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivityTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivityTypesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugActivityTypesRequest();
    $request->workspaceSlug = 'accusamus';

    $requestSecurity = new GetWorkspaceSlugActivityTypesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activityTypes->getWorkspaceSlugActivityTypes($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
