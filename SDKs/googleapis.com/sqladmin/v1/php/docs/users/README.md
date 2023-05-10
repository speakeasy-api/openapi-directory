# users

### Available Operations

* [sqlUsersDelete](#sqlusersdelete) - Deletes a user from a Cloud SQL instance.
* [sqlUsersGet](#sqlusersget) - Retrieves a resource containing information about a user.
* [sqlUsersInsert](#sqlusersinsert) - Creates a new user in a Cloud SQL instance.
* [sqlUsersList](#sqluserslist) - Lists users in the specified Cloud SQL instance.
* [sqlUsersUpdate](#sqlusersupdate) - Updates an existing user in a Cloud SQL instance.

## sqlUsersDelete

Deletes a user from a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlUsersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'hic';
    $request->host = 'illum';
    $request->instance = 'eaque';
    $request->key = 'earum';
    $request->name = 'Cary Toy';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'fugit';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new SqlUsersDeleteSecurity();
    $requestSecurity->option1 = new SqlUsersDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->sqlUsersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlUsersGet

Retrieves a resource containing information about a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlUsersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->fields = 'consequatur';
    $request->host = 'quasi';
    $request->instance = 'et';
    $request->key = 'ducimus';
    $request->name = 'Tracy Homenick Sr.';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new SqlUsersGetSecurity();
    $requestSecurity->option1 = new SqlUsersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->sqlUsersGet($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlUsersInsert

Creates a new user in a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserDualPasswordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPasswordValidationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PasswordStatus;
use \OpenAPI\OpenAPI\Models\Shared\SqlServerUserDetails;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlUsersInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->user = new User();
    $request->user->dualPasswordType = UserDualPasswordTypeEnum::NO_MODIFY_DUAL_PASSWORD;
    $request->user->etag = 'dicta';
    $request->user->host = 'iusto';
    $request->user->instance = 'esse';
    $request->user->kind = 'praesentium';
    $request->user->name = 'Dr. Van Kassulke Sr.';
    $request->user->password = 'odio';
    $request->user->passwordPolicy = new UserPasswordValidationPolicy();
    $request->user->passwordPolicy->allowedFailedAttempts = 271252;
    $request->user->passwordPolicy->enableFailedAttemptsCheck = false;
    $request->user->passwordPolicy->enablePasswordVerification = false;
    $request->user->passwordPolicy->passwordExpirationDuration = 'esse';
    $request->user->passwordPolicy->status = new PasswordStatus();
    $request->user->passwordPolicy->status->locked = false;
    $request->user->passwordPolicy->status->passwordExpirationTime = 'ex';
    $request->user->project = 'consectetur';
    $request->user->sqlserverUserDetails = new SqlServerUserDetails();
    $request->user->sqlserverUserDetails->disabled = false;
    $request->user->sqlserverUserDetails->serverRoles = [
        'ipsa',
        'laborum',
    ];
    $request->user->type = UserTypeEnum::BUILT_IN;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'expedita';
    $request->fields = 'aliquid';
    $request->instance = 'officia';
    $request->key = 'suscipit';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'eum';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new SqlUsersInsertSecurity();
    $requestSecurity->option1 = new SqlUsersInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->sqlUsersInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlUsersList

Lists users in the specified Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlUsersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'voluptates';
    $request->instance = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'vitae';

    $requestSecurity = new SqlUsersListSecurity();
    $requestSecurity->option1 = new SqlUsersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->sqlUsersList($request, $requestSecurity);

    if ($response->usersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlUsersUpdate

Updates an existing user in a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserDualPasswordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPasswordValidationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PasswordStatus;
use \OpenAPI\OpenAPI\Models\Shared\SqlServerUserDetails;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlUsersUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlUsersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->user = new User();
    $request->user->dualPasswordType = UserDualPasswordTypeEnum::NO_MODIFY_DUAL_PASSWORD;
    $request->user->etag = 'quo';
    $request->user->host = 'ex';
    $request->user->instance = 'ut';
    $request->user->kind = 'ad';
    $request->user->name = 'Donald MacGyver';
    $request->user->password = 'beatae';
    $request->user->passwordPolicy = new UserPasswordValidationPolicy();
    $request->user->passwordPolicy->allowedFailedAttempts = 530860;
    $request->user->passwordPolicy->enableFailedAttemptsCheck = false;
    $request->user->passwordPolicy->enablePasswordVerification = false;
    $request->user->passwordPolicy->passwordExpirationDuration = 'omnis';
    $request->user->passwordPolicy->status = new PasswordStatus();
    $request->user->passwordPolicy->status->locked = false;
    $request->user->passwordPolicy->status->passwordExpirationTime = 'veritatis';
    $request->user->project = 'rerum';
    $request->user->sqlserverUserDetails = new SqlServerUserDetails();
    $request->user->sqlserverUserDetails->disabled = false;
    $request->user->sqlserverUserDetails->serverRoles = [
        'culpa',
        'voluptatem',
        'sapiente',
    ];
    $request->user->type = UserTypeEnum::CLOUD_IAM_SERVICE_ACCOUNT;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'debitis';
    $request->host = 'voluptatem';
    $request->instance = 'alias';
    $request->key = 'deleniti';
    $request->name = 'Ruben Williamson';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'ratione';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new SqlUsersUpdateSecurity();
    $requestSecurity->option1 = new SqlUsersUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->sqlUsersUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
