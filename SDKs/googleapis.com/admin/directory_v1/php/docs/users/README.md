# users

### Available Operations

* [directoryUsersAliasesDelete](#directoryusersaliasesdelete) - Removes an alias.
* [directoryUsersAliasesInsert](#directoryusersaliasesinsert) - Adds an alias.
* [directoryUsersAliasesList](#directoryusersaliaseslist) - Lists all aliases for a user.
* [directoryUsersAliasesWatch](#directoryusersaliaseswatch) - Watches for changes in users list.
* [directoryUsersDelete](#directoryusersdelete) - Deletes a user.
* [directoryUsersGet](#directoryusersget) - Retrieves a user.
* [directoryUsersInsert](#directoryusersinsert) - Creates a user.
* [directoryUsersList](#directoryuserslist) - Retrieves a paginated list of either deleted users or all users in a domain.
* [directoryUsersMakeAdmin](#directoryusersmakeadmin) - Makes a user a super administrator.
* [directoryUsersPatch](#directoryuserspatch) - Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
* [directoryUsersPhotosDelete](#directoryusersphotosdelete) - Removes the user's photo.
* [directoryUsersPhotosGet](#directoryusersphotosget) - Retrieves the user's photo.
* [directoryUsersPhotosPatch](#directoryusersphotospatch) - Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryUsersPhotosUpdate](#directoryusersphotosupdate) - Adds a photo for the user.
* [directoryUsersSignOut](#directoryuserssignout) - Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
* [directoryUsersUndelete](#directoryusersundelete) - Undeletes a deleted user.
* [directoryUsersUpdate](#directoryusersupdate) - Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.
* [directoryUsersWatch](#directoryuserswatch) - Watches for changes in users list.

## directoryUsersAliasesDelete

Removes an alias.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersAliasesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nesciunt';
    $request->alias = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'neque';
    $request->fields = 'corporis';
    $request->key = 'voluptas';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'distinctio';
    $request->userKey = 'eius';

    $requestSecurity = new DirectoryUsersAliasesDeleteSecurity();
    $requestSecurity->option1 = new DirectoryUsersAliasesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersAliasesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersAliasesInsert

Adds an alias.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Alias;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersAliasesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->alias = new Alias();
    $request->alias->alias = 'rem';
    $request->alias->etag = 'maiores';
    $request->alias->id = '05e3d48f-daf3-413a-9f5f-d94259c0b36f';
    $request->alias->kind = 'consequuntur';
    $request->alias->primaryEmail = 'veniam';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'ut';
    $request->key = 'numquam';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'in';
    $request->userKey = 'minima';

    $requestSecurity = new DirectoryUsersAliasesInsertSecurity();
    $requestSecurity->option1 = new DirectoryUsersAliasesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersAliasesInsert($request, $requestSecurity);

    if ($response->alias !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersAliasesList

Lists all aliases for a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesListEventEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersAliasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'beatae';
    $request->event = DirectoryUsersAliasesListEventEnum::DELETE;
    $request->fields = 'nisi';
    $request->key = 'quisquam';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'minima';
    $request->userKey = 'architecto';

    $requestSecurity = new DirectoryUsersAliasesListSecurity();
    $requestSecurity->option1 = new DirectoryUsersAliasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersAliasesList($request, $requestSecurity);

    if ($response->aliases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersAliasesWatch

Watches for changes in users list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesWatchEventEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesWatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesWatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesWatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesWatchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersAliasesWatchSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersAliasesWatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->channel = new Channel();
    $request->channel->address = '1225 Faye Rapid';
    $request->channel->expiration = 'facilis';
    $request->channel->id = 'c05a23a4-5cef-4c5f-9e10-a0ce2169e510';
    $request->channel->kind = 'perferendis';
    $request->channel->params = [
        'provident' => 'cumque',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'iure';
    $request->channel->resourceUri = 'quibusdam';
    $request->channel->token = 'quod';
    $request->channel->type = 'nemo';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->event = DirectoryUsersAliasesWatchEventEnum::ADD;
    $request->fields = 'laboriosam';
    $request->key = 'sed';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'cum';
    $request->userKey = 'doloribus';

    $requestSecurity = new DirectoryUsersAliasesWatchSecurity();
    $requestSecurity->option1 = new DirectoryUsersAliasesWatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersAliasesWatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersDelete

Deletes a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->fields = 'unde';
    $request->key = 'modi';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'aspernatur';
    $request->userKey = 'libero';

    $requestSecurity = new DirectoryUsersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersGet

Retrieves a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersGetProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersGetViewTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->customFieldMask = 'id';
    $request->fields = 'saepe';
    $request->key = 'autem';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->projection = DirectoryUsersGetProjectionEnum::BASIC;
    $request->quotaUser = 'illum';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'illum';
    $request->userKey = 'facilis';
    $request->viewType = DirectoryUsersGetViewTypeEnum::ADMIN_VIEW;

    $requestSecurity = new DirectoryUsersGetSecurity();
    $requestSecurity->option1 = new DirectoryUsersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersGet($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersInsert

Creates a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\UserName;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userInput = new UserInput();
    $request->userInput->addresses = 'assumenda';
    $request->userInput->archived = false;
    $request->userInput->changePasswordAtNextLogin = false;
    $request->userInput->customSchemas = [
        'distinctio' => [
            'ad' => 'facere',
            'laborum' => 'eveniet',
            'laborum' => 'incidunt',
            'maxime' => 'ipsam',
        ],
        'alias' => [
            'deserunt' => 'molestias',
            'laborum' => 'est',
        ],
        'occaecati' => [
            'quo' => 'perferendis',
            'fugit' => 'aliquid',
        ],
        'magnam' => [
            'eligendi' => 'hic',
            'nostrum' => 'officiis',
        ],
    ];
    $request->userInput->emails = 'unde';
    $request->userInput->externalIds = 'nulla';
    $request->userInput->gender = 'error';
    $request->userInput->hashFunction = 'mollitia';
    $request->userInput->id = '4578adc1-ac60-40de-8001-ac802e2ec09f';
    $request->userInput->ims = 'maiores';
    $request->userInput->includeInGlobalAddressList = false;
    $request->userInput->ipWhitelisted = false;
    $request->userInput->keywords = 'laudantium';
    $request->userInput->languages = 'maiores';
    $request->userInput->locations = 'alias';
    $request->userInput->name = new UserName();
    $request->userInput->name->displayName = 'asperiores';
    $request->userInput->name->familyName = 'rem';
    $request->userInput->name->fullName = 'dicta';
    $request->userInput->name->givenName = 'suscipit';
    $request->userInput->notes = 'earum';
    $request->userInput->orgUnitPath = 'doloribus';
    $request->userInput->organizations = 'velit';
    $request->userInput->password = 'eius';
    $request->userInput->phones = 'esse';
    $request->userInput->posixAccounts = 'in';
    $request->userInput->primaryEmail = 'eligendi';
    $request->userInput->recoveryEmail = 'quasi';
    $request->userInput->recoveryPhone = 'neque';
    $request->userInput->relations = 'vero';
    $request->userInput->sshPublicKeys = 'excepturi';
    $request->userInput->suspended = false;
    $request->userInput->websites = 'accusantium';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'incidunt';
    $request->key = 'dicta';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DirectoryUsersInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersInsert($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersList

Retrieves a paginated list of either deleted users or all users in a domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListEventEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListViewTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->customFieldMask = 'laboriosam';
    $request->customer = 'ex';
    $request->domain = 'quas';
    $request->event = DirectoryUsersListEventEnum::ADD;
    $request->fields = 'ullam';
    $request->key = 'quae';
    $request->maxResults = 631719;
    $request->oauthToken = 'incidunt';
    $request->orderBy = DirectoryUsersListOrderByEnum::FAMILY_NAME;
    $request->pageToken = 'magni';
    $request->prettyPrint = false;
    $request->projection = DirectoryUsersListProjectionEnum::CUSTOM;
    $request->query = 'delectus';
    $request->quotaUser = 'omnis';
    $request->showDeleted = 'sed';
    $request->sortOrder = DirectoryUsersListSortOrderEnum::ASCENDING;
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'quis';
    $request->viewType = DirectoryUsersListViewTypeEnum::DOMAIN_PUBLIC;

    $requestSecurity = new DirectoryUsersListSecurity();
    $requestSecurity->option1 = new DirectoryUsersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersList($request, $requestSecurity);

    if ($response->users !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersMakeAdmin

Makes a user a super administrator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersMakeAdminRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserMakeAdmin;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersMakeAdminSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersMakeAdminRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userMakeAdmin = new UserMakeAdmin();
    $request->userMakeAdmin->status = false;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'velit';
    $request->key = 'reiciendis';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'quisquam';
    $request->userKey = 'tenetur';

    $requestSecurity = new DirectoryUsersMakeAdminSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersMakeAdmin($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersPatch

Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\UserName;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userInput = new UserInput();
    $request->userInput->addresses = 'molestiae';
    $request->userInput->archived = false;
    $request->userInput->changePasswordAtNextLogin = false;
    $request->userInput->customSchemas = [
        'asperiores' => [
            'nobis' => 'perspiciatis',
            'accusantium' => 'dicta',
            'minus' => 'commodi',
            'eveniet' => 'porro',
        ],
        'tempore' => [
            'modi' => 'voluptates',
            'fugit' => 'eius',
            'sequi' => 'eligendi',
        ],
    ];
    $request->userInput->emails = 'asperiores';
    $request->userInput->externalIds = 'esse';
    $request->userInput->gender = 'blanditiis';
    $request->userInput->hashFunction = 'sint';
    $request->userInput->id = 'ffafeda5-3e5a-4e6e-8ac1-84c2b9c247c8';
    $request->userInput->ims = 'corrupti';
    $request->userInput->includeInGlobalAddressList = false;
    $request->userInput->ipWhitelisted = false;
    $request->userInput->keywords = 'amet';
    $request->userInput->languages = 'molestiae';
    $request->userInput->locations = 'amet';
    $request->userInput->name = new UserName();
    $request->userInput->name->displayName = 'laborum';
    $request->userInput->name->familyName = 'modi';
    $request->userInput->name->fullName = 'perferendis';
    $request->userInput->name->givenName = 'necessitatibus';
    $request->userInput->notes = 'architecto';
    $request->userInput->orgUnitPath = 'molestias';
    $request->userInput->organizations = 'dolore';
    $request->userInput->password = 'sunt';
    $request->userInput->phones = 'maiores';
    $request->userInput->posixAccounts = 'neque';
    $request->userInput->primaryEmail = 'odit';
    $request->userInput->recoveryEmail = 'earum';
    $request->userInput->recoveryPhone = 'veniam';
    $request->userInput->relations = 'ipsam';
    $request->userInput->sshPublicKeys = 'eaque';
    $request->userInput->suspended = false;
    $request->userInput->websites = 'exercitationem';
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'nisi';
    $request->key = 'tenetur';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'suscipit';
    $request->userKey = 'pariatur';

    $requestSecurity = new DirectoryUsersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersPatch($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersPhotosDelete

Removes the user's photo.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersPhotosDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'id';
    $request->key = 'sapiente';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'repudiandae';
    $request->userKey = 'architecto';

    $requestSecurity = new DirectoryUsersPhotosDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersPhotosDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersPhotosGet

Retrieves the user's photo.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersPhotosGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolore';
    $request->fields = 'voluptatibus';
    $request->key = 'iure';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'dolorum';
    $request->userKey = 'velit';

    $requestSecurity = new DirectoryUsersPhotosGetSecurity();
    $requestSecurity->option1 = new DirectoryUsersPhotosGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersPhotosGet($request, $requestSecurity);

    if ($response->userPhoto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersPhotosPatch

Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPhoto;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersPhotosPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userPhoto = new UserPhoto();
    $request->userPhoto->etag = 'praesentium';
    $request->userPhoto->height = 621140;
    $request->userPhoto->id = '41aebc0b-80a6-4924-93b2-ecfcc8f89501';
    $request->userPhoto->kind = 'aut';
    $request->userPhoto->mimeType = 'doloribus';
    $request->userPhoto->photoData = 'nostrum';
    $request->userPhoto->primaryEmail = 'at';
    $request->userPhoto->width = 823472;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'sapiente';
    $request->key = 'mollitia';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'non';
    $request->userKey = 'voluptates';

    $requestSecurity = new DirectoryUsersPhotosPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersPhotosPatch($request, $requestSecurity);

    if ($response->userPhoto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersPhotosUpdate

Adds a photo for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPhoto;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersPhotosUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersPhotosUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userPhoto = new UserPhoto();
    $request->userPhoto->etag = 'aliquam';
    $request->userPhoto->height = 788165;
    $request->userPhoto->id = '82f168a3-63c8-4873-a484-380b1f6b8ca2';
    $request->userPhoto->kind = 'nihil';
    $request->userPhoto->mimeType = 'voluptas';
    $request->userPhoto->photoData = 'animi';
    $request->userPhoto->primaryEmail = 'commodi';
    $request->userPhoto->width = 716;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolore';
    $request->fields = 'maxime';
    $request->key = 'aliquam';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'placeat';
    $request->userKey = 'voluptas';

    $requestSecurity = new DirectoryUsersPhotosUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersPhotosUpdate($request, $requestSecurity);

    if ($response->userPhoto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersSignOut

Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersSignOutRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersSignOutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersSignOutRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'unde';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'inventore';
    $request->key = 'libero';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'dicta';
    $request->userKey = 'harum';

    $requestSecurity = new DirectoryUsersSignOutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersSignOut($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersUndelete

Undeletes a deleted user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserUndelete;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userUndelete = new UserUndelete();
    $request->userUndelete->orgUnitPath = 'facilis';
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'labore';
    $request->key = 'expedita';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'officiis';
    $request->userKey = 'cum';

    $requestSecurity = new DirectoryUsersUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersUndelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersUpdate

Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\UserName;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userInput = new UserInput();
    $request->userInput->addresses = 'sapiente';
    $request->userInput->archived = false;
    $request->userInput->changePasswordAtNextLogin = false;
    $request->userInput->customSchemas = [
        'incidunt' => [
            'minus' => 'porro',
            'id' => 'excepturi',
            'occaecati' => 'libero',
            'quo' => 'esse',
        ],
        'hic' => [
            'accusantium' => 'soluta',
            'fugit' => 'pariatur',
            'eligendi' => 'recusandae',
            'veritatis' => 'aut',
        ],
        'laudantium' => [
            'dolor' => 'voluptates',
            'tempora' => 'magni',
        ],
        'rerum' => [
            'voluptatem' => 'eum',
        ],
    ];
    $request->userInput->emails = 'at';
    $request->userInput->externalIds = 'eum';
    $request->userInput->gender = 'reprehenderit';
    $request->userInput->hashFunction = 'voluptatum';
    $request->userInput->id = '878ba858-1a58-4208-854f-efa9c95f2eac';
    $request->userInput->ims = 'quis';
    $request->userInput->includeInGlobalAddressList = false;
    $request->userInput->ipWhitelisted = false;
    $request->userInput->keywords = 'enim';
    $request->userInput->languages = 'eum';
    $request->userInput->locations = 'nemo';
    $request->userInput->name = new UserName();
    $request->userInput->name->displayName = 'illum';
    $request->userInput->name->familyName = 'nesciunt';
    $request->userInput->name->fullName = 'sit';
    $request->userInput->name->givenName = 'odio';
    $request->userInput->notes = 'minus';
    $request->userInput->orgUnitPath = 'asperiores';
    $request->userInput->organizations = 'recusandae';
    $request->userInput->password = 'voluptates';
    $request->userInput->phones = 'praesentium';
    $request->userInput->posixAccounts = 'dicta';
    $request->userInput->primaryEmail = 'fugit';
    $request->userInput->recoveryEmail = 'sit';
    $request->userInput->recoveryPhone = 'aliquid';
    $request->userInput->relations = 'necessitatibus';
    $request->userInput->sshPublicKeys = 'sed';
    $request->userInput->suspended = false;
    $request->userInput->websites = 'deleniti';
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'laborum';
    $request->key = 'aliquam';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'impedit';
    $request->userKey = 'eius';

    $requestSecurity = new DirectoryUsersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersUpdate($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryUsersWatch

Watches for changes in users list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchEventEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchViewTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryUsersWatchSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryUsersWatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channel = new Channel();
    $request->channel->address = '82910 Bryon Ports';
    $request->channel->expiration = 'hic';
    $request->channel->id = '03102d51-4f4c-4c6f-98bf-9621a6a4f77a';
    $request->channel->kind = 'laudantium';
    $request->channel->params = [
        'eveniet' => 'earum',
        'velit' => 'officiis',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'eius';
    $request->channel->resourceUri = 'rerum';
    $request->channel->token = 'itaque';
    $request->channel->type = 'dignissimos';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->customFieldMask = 'aliquid';
    $request->customer = 'quis';
    $request->domain = 'facilis';
    $request->event = DirectoryUsersWatchEventEnum::DELETE;
    $request->fields = 'ut';
    $request->key = 'quaerat';
    $request->maxResults = 103988;
    $request->oauthToken = 'praesentium';
    $request->orderBy = DirectoryUsersWatchOrderByEnum::GIVEN_NAME;
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->projection = DirectoryUsersWatchProjectionEnum::FULL;
    $request->query = 'libero';
    $request->quotaUser = 'iste';
    $request->showDeleted = 'illo';
    $request->sortOrder = DirectoryUsersWatchSortOrderEnum::DESCENDING;
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'temporibus';
    $request->viewType = DirectoryUsersWatchViewTypeEnum::DOMAIN_PUBLIC;

    $requestSecurity = new DirectoryUsersWatchSecurity();
    $requestSecurity->option1 = new DirectoryUsersWatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->directoryUsersWatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
