# reports

### Available Operations

* [getWorkspaceSlugReports](#getworkspaceslugreports) - Get a workspace stats

## getWorkspaceSlugReports

Get a workspace stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugReportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugReportsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugReportsRequest();
    $request->activityType = 'nihil';
    $request->endDate = 'sit';
    $request->properties = 'expedita';
    $request->relative = 'neque';
    $request->startDate = 'sed';
    $request->type = 'vel';
    $request->workspaceSlug = 'libero';

    $requestSecurity = new GetWorkspaceSlugReportsSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->reports->getWorkspaceSlugReports($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
