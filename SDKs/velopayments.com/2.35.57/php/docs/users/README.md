# users

### Available Operations

* [deleteUserByIdV2](#deleteuserbyidv2) - Delete a User
* [disableUserV2](#disableuserv2) - Disable a User
* [enableUserV2](#enableuserv2) - Enable a User
* [getSelf](#getself) - Get Self
* [getUserByIdV2](#getuserbyidv2) - Get User
* [inviteUser](#inviteuser) - Invite a User
* [listUsers](#listusers) - List Users
* [registerSms](#registersms) - Register SMS Number
* [resendToken](#resendtoken) - Resend a token
* [roleUpdate](#roleupdate) - Update User Role
* [unlockUserV2](#unlockuserv2) - Unlock a User
* [unregisterMFA](#unregistermfa) - Unregister MFA for the user
* [unregisterMFAForSelf](#unregistermfaforself) - Unregister MFA for Self
* [updatePasswordSelf](#updatepasswordself) - Update Password for self
* [userDetailsUpdate](#userdetailsupdate) - Update User Details
* [userDetailsUpdateForSelf](#userdetailsupdateforself) - Update User Details for self
* [validatePasswordSelf](#validatepasswordself) - Validate the proposed password

## deleteUserByIdV2

Delete User by Id.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserByIdV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserByIdV2Request();
    $request->userId = '5b0960a6-6815-41a4-b2af-923c5949f83f';

    $response = $sdk->users->deleteUserByIdV2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableUserV2

<p>If a user is enabled this endpoint will disable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot disable themself </p>
<p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableUserV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableUserV2Request();
    $request->userId = '350cf876-ffb9-401c-aecb-b4e243cf789f';

    $response = $sdk->users->disableUserV2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableUserV2

<p>If a user has been disabled this endpoints will enable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot enable themself </p>
<p>If the user is a payor user and the payor is disabled this operation is not allowed</p>
<p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableUserV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableUserV2Request();
    $request->userId = 'fafeda53-e5ae-46e0-ac18-4c2b9c247c88';

    $response = $sdk->users->enableUserV2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSelf

Get the user's details


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->users->getSelf();

    if ($response->userResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserByIdV2

Get a Single User by Id.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserByIdV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserByIdV2Request();
    $request->userId = '373a40e1-942f-432e-9505-5756f5d56d0b';

    $response = $sdk->users->getUserByIdV2($request);

    if ($response->userResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inviteUser

Create a User and invite them to the system


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\InviteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\InviteUserRequestMfaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InviteUserRequestUserTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InviteUserRequest();
    $request->email = 'foo@example.com';
    $request->entityId = '7fffa261-ac68-49e6-b605-d24a444d9206';
    $request->firstName = 'John';
    $request->lastName = 'Doe';
    $request->mfaType = InviteUserRequestMfaTypeEnum::TOTP;
    $request->primaryContactNumber = '11235555555';
    $request->roles = [
        'perferendis',
        'id',
        'sapiente',
        'sed',
    ];
    $request->secondaryContactNumber = '11235555550';
    $request->smsNumber = '11235555555';
    $request->userType = InviteUserRequestUserTypeEnum::PAYEE;
    $request->verificationCode = '123456';

    $response = $sdk->users->inviteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsers

Get a paginated response listing the Users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayeeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsersRequest();
    $request->entityId = 'dfe13db4-f62c-4ba3-b894-1aebc0b80a69';
    $request->page = 167435;
    $request->pageSize = 273677;
    $request->payeeType = PayeeTypeEnum::COMPANY;
    $request->sort = 'possimus';
    $request->status = UserStatusEnum::ENABLED;
    $request->type = UserTypeEnum::PAYOR;

    $response = $sdk->users->listUsers($request);

    if ($response->pagedUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerSms

<p>Register an Sms number and send an OTP to it </p>
<p>Used for manual verification of a user </p>
<p>The backoffice user initiates the request to send the OTP to the user's sms </p>
<p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\RegisterSmsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterSmsRequest();
    $request->smsNumber = '11235555555';

    $response = $sdk->users->registerSms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendToken

<p>Resend the specified token </p>
<p>The token to resend must already exist for the user </p>
<p>It will be revoked and a new one issued</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResendTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendTokenRequestTokenTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendTokenRequest();
    $request->resendTokenRequest = new ResendTokenRequest();
    $request->resendTokenRequest->tokenType = ResendTokenRequestTokenTypeEnum::INVITE_MFA_USER;
    $request->resendTokenRequest->verificationCode = '123456';
    $request->userId = '3b2ecfcc-8f89-4501-8f5d-d3d6fa1804e5';

    $response = $sdk->users->resendToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## roleUpdate

<p>Update the user's Role</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RoleUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoleUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoleUpdateRequest();
    $request->roleUpdateRequest = new RoleUpdateRequest();
    $request->roleUpdateRequest->roles = [
        'quisquam',
        'quas',
    ];
    $request->roleUpdateRequest->verificationCode = '123456';
    $request->userId = '2f168a36-3c88-473e-8843-80b1f6b8ca27';

    $response = $sdk->users->roleUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unlockUserV2

If a user is locked this endpoint will unlock them


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnlockUserV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnlockUserV2Request();
    $request->userId = '5a60a04c-495c-4c69-9171-b51c1bdb1cf4';

    $response = $sdk->users->unlockUserV2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unregisterMFA

<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnregisterMFARequest;
use \OpenAPI\OpenAPI\Models\Shared\UnregisterMFARequest;
use \OpenAPI\OpenAPI\Models\Shared\UnregisterMFARequestMFATypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnregisterMFARequest();
    $request->unregisterMFARequest = new UnregisterMFARequest();
    $request->unregisterMFARequest->mfaType = UnregisterMFARequestMFATypeEnum::TOTP;
    $request->unregisterMFARequest->verificationCode = '123456';
    $request->userId = 'b888ebdf-c4cc-4ca9-9bc7-fc0b2dce1087';

    $response = $sdk->users->unregisterMFA($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unregisterMFAForSelf

<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnregisterMFAForSelfRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelfMFATypeUnregisterRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelfMFATypeUnregisterRequestMFATypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnregisterMFAForSelfRequest();
    $request->authorization = 'dolor';
    $request->selfMFATypeUnregisterRequest = new SelfMFATypeUnregisterRequest();
    $request->selfMFATypeUnregisterRequest->mfaType = SelfMFATypeUnregisterRequestMFATypeEnum::TOTP;

    $response = $sdk->users->unregisterMFAForSelf($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePasswordSelf

Update password for self


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SelfUpdatePasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SelfUpdatePasswordRequest();
    $request->newPassword = 'My_new_password';
    $request->oldPassword = 'My_current_password';

    $response = $sdk->users->updatePasswordSelf($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userDetailsUpdate

<p>Update the profile details for the given user</p>
<p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UserDetailsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserDetailsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\MFATypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserDetailsUpdateRequest();
    $request->userDetailsUpdateRequest = new UserDetailsUpdateRequest();
    $request->userDetailsUpdateRequest->email = 'foo@example.com';
    $request->userDetailsUpdateRequest->firstName = 'John';
    $request->userDetailsUpdateRequest->lastName = 'Doe';
    $request->userDetailsUpdateRequest->mfaType = MFATypeEnum::TOTP;
    $request->userDetailsUpdateRequest->primaryContactNumber = '11235555555';
    $request->userDetailsUpdateRequest->secondaryContactNumber = '11235555550';
    $request->userDetailsUpdateRequest->smsNumber = '11235555555';
    $request->userDetailsUpdateRequest->verificationCode = '123456';
    $request->userId = 'e42b006d-6788-478b-a858-1a58208c54fe';

    $response = $sdk->users->userDetailsUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userDetailsUpdateForSelf

<p>Update the profile details for the given user</p>
<p>Only Payee user types are supported</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PayeeUserSelfUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayeeUserSelfUpdateRequest();
    $request->email = 'foo@example.com';
    $request->firstName = 'John';
    $request->lastName = 'Doe';
    $request->primaryContactNumber = '11235555555';
    $request->secondaryContactNumber = '11235555550';
    $request->smsNumber = '11235555555';

    $response = $sdk->users->userDetailsUpdateForSelf($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validatePasswordSelf

validate the password and return a score


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PasswordRequest();
    $request->password = 'My_strong_password';

    $response = $sdk->users->validatePasswordSelf($request);

    if ($response->validatePasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
