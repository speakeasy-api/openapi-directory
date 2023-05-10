# usersInIQualify

### Available Operations

* [getUsersUserEmail](#getusersuseremail) - Find user by email
* [getUsersUserEmailOfferings](#getusersuseremailofferings) - Find user's offerings
* [patchUsersUserEmail](#patchusersuseremail) - Update user
* [postUsers](#postusers) - Add new user
* [postUsersUserEmailInviteEmail](#postusersuseremailinviteemail) - Resend invitation email
* [postUsersUserEmailOfferings](#postusersuseremailofferings) - Adds the user to the specified offerings as a learner
* [postUsersUserEmailPermissionsPermissionName](#postusersuseremailpermissionspermissionname) - Add permission to user
* [putUsersUserEmailSuspend](#putusersuseremailsuspend) - Suspend user

## getUsersUserEmail

Responds with a user matching the specified email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserEmailRequest();
    $request->userEmail = 'Maggie38@hotmail.com';

    $response = $sdk->usersInIQualify->getUsersUserEmail($request);

    if ($response->userResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserEmailOfferings

Responds with all offerings that the user in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserEmailOfferingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserEmailOfferingsRequest();
    $request->userEmail = 'Nellie.Keebler10@yahoo.com';

    $response = $sdk->usersInIQualify->getUsersUserEmailOfferings($request);

    if ($response->offeringMetadataResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchUsersUserEmail

Updates the specified user by email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchUsersUserEmailRequest;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserMetadata;
use \OpenAPI\OpenAPI\Models\Shared\UserProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchUsersUserEmailRequest();
    $request->user = new User();
    $request->user->email = 'Audrey_Marks@gmail.com';
    $request->user->firstName = 'Katrina';
    $request->user->lastName = 'Marvin';
    $request->user->metadata = new UserMetadata();
    $request->user->metadata->tags = [
        'mollitia',
    ];
    $request->user->personId = 'reiciendis';
    $request->user->profile = new UserProfileRequest();
    $request->user->profile->displayName = 'mollitia';
    $request->user->sendInvite = false;
    $request->userEmail = 'Holden.Ernser36@gmail.com';

    $response = $sdk->usersInIQualify->patchUsersUserEmail($request);

    if ($response->userResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsers

Creates a new user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserMetadata;
use \OpenAPI\OpenAPI\Models\Shared\UserProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new User();
    $request->email = 'Hubert.Wyman80@gmail.com';
    $request->firstName = 'Kaitlyn';
    $request->lastName = 'Prosacco';
    $request->metadata = new UserMetadata();
    $request->metadata->tags = [
        'architecto',
        'architecto',
    ];
    $request->personId = 'repudiandae';
    $request->profile = new UserProfileRequest();
    $request->profile->displayName = 'ullam';
    $request->sendInvite = false;

    $response = $sdk->usersInIQualify->postUsers($request);

    if ($response->userResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersUserEmailInviteEmail

Re-sends an invitation e-mail to the specified user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUserEmailInviteEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersUserEmailInviteEmailRequest();
    $request->userEmail = 'Janessa.Zulauf90@hotmail.com';

    $response = $sdk->usersInIQualify->postUsersUserEmailInviteEmail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersUserEmailOfferings

Adds a user to an array of offerings by offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUserEmailOfferingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersUserEmailOfferingsRequest();
    $request->requestBody = [
        'accusantium',
        'consequuntur',
        'praesentium',
        'natus',
    ];
    $request->userEmail = 'Bradford_Satterfield80@gmail.com';

    $response = $sdk->usersInIQualify->postUsersUserEmailOfferings($request);

    if ($response->offeringMetadataResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersUserEmailPermissionsPermissionName

Adds additional permissions to the specified user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUserEmailPermissionsPermissionNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\PermissionNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersUserEmailPermissionsPermissionNameRequest();
    $request->permissionName = PermissionNameEnum::BUILDER;
    $request->userEmail = 'Brook6@yahoo.com';

    $response = $sdk->usersInIQualify->postUsersUserEmailPermissionsPermissionName($request);

    if ($response->userResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersUserEmailSuspend

Suspends the specified user's account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersUserEmailSuspendRequest;
use \OpenAPI\OpenAPI\Models\Shared\SuspendedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersUserEmailSuspendRequest();
    $request->suspendedRequest = new SuspendedRequest();
    $request->suspendedRequest->suspended = false;
    $request->userEmail = 'Max.Hintz@hotmail.com';

    $response = $sdk->usersInIQualify->putUsersUserEmailSuspend($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
