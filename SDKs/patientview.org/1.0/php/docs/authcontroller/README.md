# authController

## Overview

Auth Controller

### Available Operations

* [getBasicUserInformation](#getbasicuserinformation) - Get Basic User Information
* [logIn](#login) - Log In
* [logOut](#logout) - Log Out

## getBasicUserInformation

Once logged in and have a token, get basic user information including group role membership

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBasicUserInformationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBasicUserInformationRequest();
    $request->token = 'provident';

    $response = $sdk->authController->getBasicUserInformation($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## logIn

Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Credentials;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Credentials();
    $request->apiKey = 'distinctio';
    $request->password = 'quibusdam';
    $request->username = 'Leda_Stiedemann';

    $response = $sdk->authController->logIn($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## logOut

Log Out

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LogOutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LogOutRequest();
    $request->token = 'vel';

    $response = $sdk->authController->logOut($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
