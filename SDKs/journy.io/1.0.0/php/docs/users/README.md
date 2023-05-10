# users

## Overview

Endpoints for creating, deleting or updating users.

### Available Operations

* [deleteUser](#deleteuser) - Delete user
* [link](#link) - Link web activity to user
* [upsertUser](#upsertuser) - Create or update user

## deleteUser

Endpoint to delete a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequestBodyIdentification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequestBody();
    $request->identification = new DeleteUserRequestBodyIdentification();
    $request->identification->email = 'Haskell18@gmail.com';
    $request->identification->userId = 'impedit';

    $response = $sdk->users->deleteUser($request);

    if ($response->deleteUser202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## link

💡 You don't need to use this endpoint if you use our JavaScript snippet in your application.

This endpoint is used to link web activity to a user in your application. This will help you discover which channels and campaigns work best.

When our JavaScript snippet is embedded on your website, blog or landing pages, a cookie named "__journey" will be set.

This will only work if your website and application are under the same top level domain.

Website, blog or landing pages
* www.my-domain.tld
* blog.my-domain.tld
* landing-page.my-domain.tld

Application
* app.my-domain.tld

The cookie on my-domain.tld will also be send to your app domain.

You should call this endpoint after the user succesfully logged in (so that you know the user's ID). Use the value of the cookie as device ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LinkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\LinkRequestBodyIdentification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LinkRequestBody();
    $request->deviceId = 'cum';
    $request->identification = new LinkRequestBodyIdentification();
    $request->identification->email = 'Cullen1@yahoo.com';
    $request->identification->userId = 'ad';

    $response = $sdk->users->link($request);

    if ($response->link201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upsertUser

Endpoint to create or update a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpsertUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpsertUserRequestBodyIdentification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpsertUserRequestBody();
    $request->identification = new UpsertUserRequestBodyIdentification();
    $request->identification->email = 'Camden61@yahoo.com';
    $request->identification->userId = 'laboriosam';
    $request->properties = [
        'saepe' => 'fuga',
        'in' => 'corporis',
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];

    $response = $sdk->users->upsertUser($request);

    if ($response->upsertUser201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
