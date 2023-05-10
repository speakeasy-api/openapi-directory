# users

### Available Operations

* [displayvideoUsersBulkEditAssignedUserRoles](#displayvideousersbulkeditassigneduserroles) - Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersCreate](#displayvideouserscreate) - Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersDelete](#displayvideousersdelete) - Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersGet](#displayvideousersget) - Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersList](#displayvideouserslist) - Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersPatch](#displayvideouserspatch) - Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

## displayvideoUsersBulkEditAssignedUserRoles

Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersBulkEditAssignedUserRolesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditAssignedUserRolesRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedUserRoleInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedUserRoleUserRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersBulkEditAssignedUserRolesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoUsersBulkEditAssignedUserRolesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkEditAssignedUserRolesRequestInput = new BulkEditAssignedUserRolesRequestInput();
    $request->bulkEditAssignedUserRolesRequestInput->createdAssignedUserRoles = [
        new AssignedUserRoleInput(),
        new AssignedUserRoleInput(),
        new AssignedUserRoleInput(),
    ];
    $request->bulkEditAssignedUserRolesRequestInput->deletedAssignedUserRoles = [
        'libero',
        'quo',
        'esse',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'soluta';
    $request->key = 'fugit';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'veritatis';
    $request->userId = 'aut';

    $requestSecurity = new DisplayvideoUsersBulkEditAssignedUserRolesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->displayvideoUsersBulkEditAssignedUserRoles($request, $requestSecurity);

    if ($response->bulkEditAssignedUserRolesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoUsersCreate

Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedUserRoleInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedUserRoleUserRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoUsersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userInput = new UserInput();
    $request->userInput->assignedUserRoles = [
        new AssignedUserRoleInput(),
        new AssignedUserRoleInput(),
    ];
    $request->userInput->displayName = 'dolor';
    $request->userInput->email = 'Dorothea.Dach3@hotmail.com';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'reprehenderit';
    $request->key = 'voluptatum';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new DisplayvideoUsersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->displayvideoUsersCreate($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoUsersDelete

Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoUsersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'architecto';
    $request->key = 'est';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'quae';
    $request->userId = 'quas';

    $requestSecurity = new DisplayvideoUsersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->displayvideoUsersDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoUsersGet

Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoUsersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'saepe';
    $request->key = 'delectus';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'natus';
    $request->userId = 'quaerat';

    $requestSecurity = new DisplayvideoUsersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->displayvideoUsersGet($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoUsersList

Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoUsersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'cumque';
    $request->filter = 'quis';
    $request->key = 'enim';
    $request->oauthToken = 'eum';
    $request->orderBy = 'nemo';
    $request->pageSize = 849337;
    $request->pageToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new DisplayvideoUsersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->displayvideoUsersList($request, $requestSecurity);

    if ($response->listUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoUsersPatch

Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedUserRoleInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedUserRoleUserRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoUsersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoUsersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userInput = new UserInput();
    $request->userInput->assignedUserRoles = [
        new AssignedUserRoleInput(),
        new AssignedUserRoleInput(),
        new AssignedUserRoleInput(),
        new AssignedUserRoleInput(),
    ];
    $request->userInput->displayName = 'voluptates';
    $request->userInput->email = 'Billy39@yahoo.com';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'sunt';
    $request->key = 'nesciunt';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->updateMask = 'aliquam';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'modi';
    $request->userId = 'sunt';

    $requestSecurity = new DisplayvideoUsersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->displayvideoUsersPatch($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
