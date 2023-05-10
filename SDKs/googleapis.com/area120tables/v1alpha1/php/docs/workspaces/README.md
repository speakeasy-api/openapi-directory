# workspaces

### Available Operations

* [area120tablesWorkspacesGet](#area120tablesworkspacesget) - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
* [area120tablesWorkspacesList](#area120tablesworkspaceslist) - Lists workspaces for the user.

## area120tablesWorkspacesGet

Gets a workspace. Returns NOT_FOUND if the workspace does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesGetSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesWorkspacesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->name = 'Edna Pouros';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';
    $request->view = Area120tablesWorkspacesGetViewEnum::COLUMN_ID_VIEW;

    $requestSecurity = new Area120tablesWorkspacesGetSecurity();
    $requestSecurity->option1 = new Area120tablesWorkspacesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->workspaces->area120tablesWorkspacesGet($request, $requestSecurity);

    if ($response->workspace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## area120tablesWorkspacesList

Lists workspaces for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesWorkspacesListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesWorkspacesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'itaque';
    $request->key = 'incidunt';
    $request->oauthToken = 'enim';
    $request->pageSize = 9356;
    $request->pageToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new Area120tablesWorkspacesListSecurity();
    $requestSecurity->option1 = new Area120tablesWorkspacesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->workspaces->area120tablesWorkspacesList($request, $requestSecurity);

    if ($response->listWorkspacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
