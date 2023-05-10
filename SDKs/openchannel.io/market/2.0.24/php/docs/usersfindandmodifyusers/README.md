# usersFindAndModifyUsers

### Available Operations

* [deleteUsersUserId](#deleteusersuserid) - Removes a single user
* [getUsers](#getusers) - Returns a paginated list of users
* [getUsersUserId](#getusersuserid) - Return a single user
* [patchUsersUserId](#patchusersuserid) - Updates user fields
* [postUsersUserId](#postusersuserid) - Updates a single user or adds the user if they don't exist

## deleteUsersUserId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersUserIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersUserIdRequest();
    $request->userId = 'accusantium';

    $response = $sdk->usersFindAndModifyUsers->deleteUsersUserId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

- Results are paginated and the default is value is 100 if no limit is provided


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->limit = 69167;
    $request->pageNumber = 982575;
    $request->query = 'quidem';
    $request->sort = 'ipsam';

    $response = $sdk->usersFindAndModifyUsers->getUsers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdRequest();
    $request->userId = 'voluptate';

    $response = $sdk->usersFindAndModifyUsers->getUsersUserId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchUsersUserId

Updates user fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchUsersUserIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchUsersUserIdRequest();
    $request->customData = 'autem';
    $request->email = 'Ambrose_Streich@hotmail.com';
    $request->name = 'Miss Ginger Feeney';
    $request->type = 'hic';
    $request->userId = 'libero';
    $request->username = 'Nelson_DAmore';

    $response = $sdk->usersFindAndModifyUsers->patchUsersUserId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersUserId

Updates a single user or adds the user if they don't exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUserIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersUserIdRequest();
    $request->customData = 'dignissimos';
    $request->email = 'Eulah1@gmail.com';
    $request->name = 'Brooke Kohler';
    $request->type = 'nostrum';
    $request->userId = 'hic';
    $request->username = 'Timothy_Mohr3';

    $response = $sdk->usersFindAndModifyUsers->postUsersUserId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
