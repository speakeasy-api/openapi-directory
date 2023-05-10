# users

### Available Operations

* [androidpublisherUsersCreate](#androidpublisheruserscreate) - Grant access for a user to the given developer account.
* [androidpublisherUsersDelete](#androidpublisherusersdelete) - Removes all access for the user to the given developer account.
* [androidpublisherUsersList](#androidpublisheruserslist) - Lists all users with access to a developer account.
* [androidpublisherUsersPatch](#androidpublisheruserspatch) - Updates access for the user to the developer account.

## androidpublisherUsersCreate

Grant access for a user to the given developer account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherUsersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\UserDeveloperAccountPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherUsersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherUsersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userInput = new UserInput();
    $request->userInput->developerAccountPermissions = [
        UserDeveloperAccountPermissionsEnum::CAN_VIEW_FINANCIAL_DATA_GLOBAL,
        UserDeveloperAccountPermissionsEnum::DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED,
        UserDeveloperAccountPermissionsEnum::CAN_PUBLISH_GAMES_GLOBAL,
        UserDeveloperAccountPermissionsEnum::CAN_MANAGE_ORDERS_GLOBAL,
    ];
    $request->userInput->email = 'Gladys_Swaniawski69@gmail.com';
    $request->userInput->expirationTime = 'sequi';
    $request->userInput->name = 'Phil Rowe';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'voluptas';
    $request->key = 'numquam';
    $request->oauthToken = 'nemo';
    $request->parent = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new AndroidpublisherUsersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidpublisherUsersCreate($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherUsersDelete

Removes all access for the user to the given developer account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherUsersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherUsersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherUsersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'quasi';
    $request->key = 'rem';
    $request->name = 'Keith Hyatt';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new AndroidpublisherUsersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidpublisherUsersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherUsersList

Lists all users with access to a developer account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherUsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherUsersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherUsersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'iste';
    $request->key = 'magni';
    $request->oauthToken = 'inventore';
    $request->pageSize = 686362;
    $request->pageToken = 'accusamus';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new AndroidpublisherUsersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidpublisherUsersList($request, $requestSecurity);

    if ($response->listUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherUsersPatch

Updates access for the user to the developer account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherUsersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\UserDeveloperAccountPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherUsersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherUsersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userInput = new UserInput();
    $request->userInput->developerAccountPermissions = [
        UserDeveloperAccountPermissionsEnum::CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL,
        UserDeveloperAccountPermissionsEnum::CAN_EDIT_GAMES_GLOBAL,
        UserDeveloperAccountPermissionsEnum::CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL,
    ];
    $request->userInput->email = 'Hassan_Waters@yahoo.com';
    $request->userInput->expirationTime = 'earum';
    $request->userInput->name = 'Mrs. Candice Thiel';
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'maiores';
    $request->key = 'enim';
    $request->name = 'Orville Nolan';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->updateMask = 'quis';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new AndroidpublisherUsersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidpublisherUsersPatch($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
