# sessionController

### Available Operations

* [sessionControllerChangePassword](#sessioncontrollerchangepassword) - Change the password of a customer given their existing and new password.
* [sessionControllerCreateLandlordLogin](#sessioncontrollercreatelandlordlogin) - Send a request to the in-tray to create a landlord login.
* [sessionControllerGetSessionInfo](#sessioncontrollergetsessioninfo) - Gets information about the currently logged on customer.
* [sessionControllerLogin](#sessioncontrollerlogin) - Login as a customer given their username and password.
* [sessionControllerLogout](#sessioncontrollerlogout) - Logout a customer previously logged in via the Login endpoint.
* [sessionControllerResetPassword](#sessioncontrollerresetpassword) - Reset the customer's password. An email will be sent out to reset.

## sessionControllerChangePassword

Change the password of a customer given their existing and new password.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionControllerChangePasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionControllerChangePasswordRequest();
    $request->newPassword = 'mollitia';
    $request->oldPassword = 'laborum';
    $request->shortName = 'dolores';
    $request->token = 'dolorem';

    $response = $sdk->sessionController->sessionControllerChangePassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sessionControllerCreateLandlordLogin

Send a request to the in-tray to create a landlord login.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionControllerCreateLandlordLoginRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionControllerCreateLandlordLoginRequest();
    $request->branchID = 'corporis';
    $request->contactDetails = 'explicabo';
    $request->email = 'Emerald.Mohr@hotmail.com';
    $request->forename = 'excepturi';
    $request->propertyAddress = 'accusantium';
    $request->shortName = 'iure';
    $request->surname = 'culpa';
    $request->title = 'Dr.';

    $response = $sdk->sessionController->sessionControllerCreateLandlordLogin($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sessionControllerGetSessionInfo

Gets information about the currently logged on customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionControllerGetSessionInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionControllerGetSessionInfoRequest();
    $request->shortName = 'sapiente';
    $request->token = 'architecto';

    $response = $sdk->sessionController->sessionControllerGetSessionInfo($request);

    if ($response->sessionControllerGetSessionInfo200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sessionControllerLogin

Login as a customer given their username and password.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionControllerLoginRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionControllerLoginRequest();
    $request->password = 'mollitia';
    $request->shortName = 'dolorem';
    $request->username = 'Lorine_Crooks58';

    $response = $sdk->sessionController->sessionControllerLogin($request);

    if ($response->sessionControllerLogin200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sessionControllerLogout

Logout a customer previously logged in via the Login endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionControllerLogoutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionControllerLogoutRequest();
    $request->shortName = 'numquam';
    $request->token = 'commodi';

    $response = $sdk->sessionController->sessionControllerLogout($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sessionControllerResetPassword

Reset the customer's password. An email will be sent out to reset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionControllerResetPasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionControllerResetPasswordRequest();
    $request->email = 'Jarred.Frami@yahoo.com';
    $request->shortName = 'quis';

    $response = $sdk->sessionController->sessionControllerResetPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
