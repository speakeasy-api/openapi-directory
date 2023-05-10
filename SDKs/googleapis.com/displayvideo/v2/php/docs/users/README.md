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
        new AssignedUserRoleInput(),
    ];
    $request->bulkEditAssignedUserRolesRequestInput->deletedAssignedUserRoles = [
        'illo',
        'exercitationem',
        'laborum',
    ];
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'dolorum';
    $request->key = 'repellat';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'commodi';
    $request->userId = 'esse';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userInput = new UserInput();
    $request->userInput->assignedUserRoles = [
        new AssignedUserRoleInput(),
    ];
    $request->userInput->displayName = 'temporibus';
    $request->userInput->email = 'Andrew_Wolff@hotmail.com';
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'neque';
    $request->key = 'officia';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'doloremque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->fields = 'molestiae';
    $request->key = 'quis';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'amet';
    $request->userId = 'sapiente';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quisquam';
    $request->fields = 'provident';
    $request->key = 'laudantium';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'ipsam';
    $request->userId = 'minima';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloremque';
    $request->fields = 'fugiat';
    $request->filter = 'numquam';
    $request->key = 'doloremque';
    $request->oauthToken = 'cum';
    $request->orderBy = 'nobis';
    $request->pageSize = 628314;
    $request->pageToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'cumque';

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
    $request->userInput->displayName = 'laboriosam';
    $request->userInput->email = 'Emerald89@hotmail.com';
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'provident';
    $request->key = 'adipisci';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->updateMask = 'repellat';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'explicabo';
    $request->userId = 'vel';

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
