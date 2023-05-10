# roleAssignments

### Available Operations

* [directoryRoleAssignmentsDelete](#directoryroleassignmentsdelete) - Deletes a role assignment.
* [directoryRoleAssignmentsGet](#directoryroleassignmentsget) - Retrieves a role assignment.
* [directoryRoleAssignmentsInsert](#directoryroleassignmentsinsert) - Creates a role assignment.
* [directoryRoleAssignmentsList](#directoryroleassignmentslist) - Retrieves a paginated list of all roleAssignments.

## directoryRoleAssignmentsDelete

Deletes a role assignment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRoleAssignmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->customer = 'eos';
    $request->fields = 'reiciendis';
    $request->key = 'earum';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->roleAssignmentId = 'nemo';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new DirectoryRoleAssignmentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roleAssignments->directoryRoleAssignmentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryRoleAssignmentsGet

Retrieves a role assignment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRoleAssignmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illo';
    $request->customer = 'labore';
    $request->fields = 'assumenda';
    $request->key = 'aliquam';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->roleAssignmentId = 'laudantium';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new DirectoryRoleAssignmentsGetSecurity();
    $requestSecurity->option1 = new DirectoryRoleAssignmentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roleAssignments->directoryRoleAssignmentsGet($request, $requestSecurity);

    if ($response->roleAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryRoleAssignmentsInsert

Creates a role assignment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoleAssignmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRoleAssignmentsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->roleAssignmentInput = new RoleAssignmentInput();
    $request->roleAssignmentInput->assignedTo = 'aspernatur';
    $request->roleAssignmentInput->etag = 'nam';
    $request->roleAssignmentInput->kind = 'expedita';
    $request->roleAssignmentInput->orgUnitId = 'quas';
    $request->roleAssignmentInput->roleAssignmentId = 'provident';
    $request->roleAssignmentInput->roleId = 'repudiandae';
    $request->roleAssignmentInput->scopeType = 'rerum';
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->customer = 'similique';
    $request->fields = 'repellendus';
    $request->key = 'iure';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new DirectoryRoleAssignmentsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roleAssignments->directoryRoleAssignmentsInsert($request, $requestSecurity);

    if ($response->roleAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryRoleAssignmentsList

Retrieves a paginated list of all roleAssignments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRoleAssignmentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRoleAssignmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->customer = 'amet';
    $request->fields = 'illum';
    $request->includeIndirectRoleAssignments = false;
    $request->key = 'praesentium';
    $request->maxResults = 695526;
    $request->oauthToken = 'cum';
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->roleId = 'dicta';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'doloremque';
    $request->userKey = 'earum';

    $requestSecurity = new DirectoryRoleAssignmentsListSecurity();
    $requestSecurity->option1 = new DirectoryRoleAssignmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roleAssignments->directoryRoleAssignmentsList($request, $requestSecurity);

    if ($response->roleAssignments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
