# subUser

### Available Operations

* [subUserDelete](#subuserdelete) - Delete a subuser
* [subUserGet](#subuserget) - Get a sub user. The user must be assigend to the user that makes this call.
* [subUserPostForm](#subuserpostform) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [subUserPostJson](#subuserpostjson) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [subUserPostRaw](#subuserpostraw) - Creates or updates a subuser.
            To create a new user set no ID (empty)

## subUserDelete

Delete a subuser

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubUserDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubUserDeleteRequest();
    $request->id = '973e922a-57a1-45be-be06-0807e2b6e3ab';

    $response = $sdk->subUser->subUserDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subUserGet

Get a sub user. The user must be assigend to the user that makes this call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubUserGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubUserGetRequest();
    $request->id = '8845f059-7a60-4ff2-a54a-31e94764a3e8';

    $response = $sdk->subUser->subUserGet($request);

    if ($response->subUserData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subUserPostForm

Creates or updates a subuser.
            To create a new user set no ID (empty)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubUserData;
use \OpenAPI\OpenAPI\Models\Shared\SubUserDataPermissionLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubUserData();
    $request->accessEndDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T16:57:15.208Z');
    $request->accessTimeStartDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-19T02:39:25.517Z');
    $request->email = 'Eudora_Kemmer13@yahoo.com';
    $request->id = '51a5a9da-660f-4f57-bfaa-d4f9efc1b451';
    $request->newPassword = 'fugit';
    $request->permissionLevel = SubUserDataPermissionLevelEnum::SELECTED_FOLDER_ONLY;
    $request->username = 'Angie13';

    $response = $sdk->subUser->subUserPostForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subUserPostJson

Creates or updates a subuser.
            To create a new user set no ID (empty)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubUserData;
use \OpenAPI\OpenAPI\Models\Shared\SubUserDataPermissionLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubUserData();
    $request->accessEndDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-27T20:53:33.627Z');
    $request->accessTimeStartDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-05T02:38:00.020Z');
    $request->email = 'Chelsea.Williamson@hotmail.com';
    $request->id = '5199ebfd-0e9f-4e6c-a32c-a3aed0117996';
    $request->newPassword = 'adipisci';
    $request->permissionLevel = SubUserDataPermissionLevelEnum::SELECTED_FOLDER_AND_SUBFOLDERS_METERS;
    $request->username = 'Cathy_Wyman5';

    $response = $sdk->subUser->subUserPostJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subUserPostRaw

Creates or updates a subuser.
            To create a new user set no ID (empty)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'tempora'

    $response = $sdk->subUser->subUserPostRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
