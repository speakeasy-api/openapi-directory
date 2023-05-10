# rootUser

## Overview

User management.

### Available Operations

* [generateTotpSecret](#generatetotpsecret) - Generate a TOTP secret key for the given user
* [getTotpStatus](#gettotpstatus) - Get the TOTP status for the given user
* [getUserAccountLockoutSettings](#getuseraccountlockoutsettings) - Get the local user account lockout settings
* [manageUserAccountLockoutSettings](#manageuseraccountlockoutsettings) - Update the local user account lockout settings
* [resetTotp](#resettotp) - Reset the TOTP for the given user
* [setupTotp](#setuptotp) - Configure the TOTP secret for the given user
* [unlockUser](#unlockuser) - Unlock a user account

## generateTotpSecret

Use this endpoint to generate the time-based one time password (TOTP) secret key for a specified user account. The secret is a key value encoded in Base32 and includes a URI for generating a scannable QR code.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GenerateTotpSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateTotpSecretRequest();
    $request->id = '9ea83d49-2ed1-44b8-a2c1-954545e955dc';

    $response = $sdk->rootUser->generateTotpSecret($request);

    if ($response->totpSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTotpStatus

Get the time-based one time password (TOTP) status for a specified user account. The TOTP status specifies whether that account has TOTP enabled and whether TOTP is being enforced for that account.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetTotpStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTotpStatusRequest();
    $request->id = 'c185ea49-01c7-4c43-ad2d-aa784aba3d23';

    $response = $sdk->rootUser->getTotpStatus($request);

    if ($response->totpStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserAccountLockoutSettings

Get the local user account lockout settings which are used to configure whether user accounts will be locked on failed logins, when they will be locked and the duration for which they will stay locked.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootUser->getUserAccountLockoutSettings();

    if ($response->localUserAccountLockoutStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manageUserAccountLockoutSettings

Update the local user account lockout settings which are used to configure whether user accounts will be locked on failed logins, when they will be locked and the duration for which they will stay locked.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\LocalUserAccountLockoutConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocalUserAccountLockoutConfig();
    $request->accountLockoutDurationInMinutes = 15355;
    $request->enabled = false;
    $request->maxFailedLoginsForLocalUser = 917006;

    $response = $sdk->rootUser->manageUserAccountLockoutSettings($request);

    if ($response->localUserAccountLockoutStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetTotp

Reset the TOTP settings to the default disabled state for the specified user account.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ResetTotpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetTotpRequest();
    $request->id = 'df73811a-1153-482b-97ed-56507621c58f';

    $response = $sdk->rootUser->resetTotp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setupTotp

Use this endpoint to configure the time-based one time password (TOTP) secret for a specified user account. The endpoint replaces an existing secret with the new one. The Rubrik cluster checks the secret against a one time password (OTP) to ensure validity.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SetupTotpRequest;
use \OpenAPI\OpenAPI\Models\Shared\TotpConfigUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetupTotpRequest();
    $request->totpConfigUpdateRequest = new TotpConfigUpdateRequest();
    $request->totpConfigUpdateRequest->otpForValidation = 'magnam';
    $request->totpConfigUpdateRequest->secret = 'nulla';
    $request->id = '7396564c-20a0-4711-a961-d24a7dbb8f53';

    $response = $sdk->rootUser->setupTotp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unlockUser

Unlock a user account that has been locked because of too many failed login attempts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UnlockUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnlockUserRequest();
    $request->id = '2d892cf7-812c-4b51-ac87-8240bf548f88';

    $response = $sdk->rootUser->unlockUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
