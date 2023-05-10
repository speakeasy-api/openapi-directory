# lifecycleOperations

### Available Operations

* [activateUser](#activateuser) - Activate User
* [deactivateUser](#deactivateuser) - Deactivate User
* [resetPassword](#resetpassword) - Reset Password
* [setTempPassword](#settemppassword) - Set Temp Password
* [suspendUser](#suspenduser) - Suspend User
* [unlockUser](#unlockuser) - Unlock User
* [unsuspendUser](#unsuspenduser) - Unsuspend User

## activateUser

Activate User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivateUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateUserRequest();
    $request->requestBody = 'minus';
    $request->sendEmail = 'false';
    $request->userId = 'placeat';

    $response = $sdk->lifecycleOperations->activateUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivateUser

Deactivate User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivateUserRequest();
    $request->requestBody = 'voluptatum';
    $request->userId = 'iusto';

    $response = $sdk->lifecycleOperations->deactivateUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetPassword

Reset Password

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetPasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetPasswordRequest();
    $request->requestBody = 'excepturi';
    $request->sendEmail = 'false';
    $request->userId = 'nisi';

    $response = $sdk->lifecycleOperations->resetPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTempPassword

Set Temp Password

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetTempPasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetTempPasswordRequest();
    $request->requestBody = 'recusandae';
    $request->tempPassword = 'true';
    $request->userId = 'temporibus';

    $response = $sdk->lifecycleOperations->setTempPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suspendUser

Suspend User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SuspendUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuspendUserRequest();
    $request->requestBody = 'ab';
    $request->userId = 'quis';

    $response = $sdk->lifecycleOperations->suspendUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unlockUser

Unlock User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnlockUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnlockUserRequest();
    $request->requestBody = 'veritatis';
    $request->userId = 'deserunt';

    $response = $sdk->lifecycleOperations->unlockUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsuspendUser

Unsuspend User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnsuspendUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnsuspendUserRequest();
    $request->requestBody = 'perferendis';
    $request->userId = 'ipsam';

    $response = $sdk->lifecycleOperations->unsuspendUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
