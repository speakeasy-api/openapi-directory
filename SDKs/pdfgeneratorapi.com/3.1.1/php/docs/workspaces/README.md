# workspaces

### Available Operations

* [deleteWorkspace](#deleteworkspace) - Delete workspace
* [getWorkspace](#getworkspace) - Get workspace

## deleteWorkspace

Deletes the workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceRequest();
    $request->workspaceId = 'recusandae';

    $response = $sdk->workspaces->deleteWorkspace($request);

    if ($response->deleteWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspace

Returns workspace information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceRequest();
    $request->workspaceId = 'temporibus';

    $response = $sdk->workspaces->getWorkspace($request);

    if ($response->getWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
