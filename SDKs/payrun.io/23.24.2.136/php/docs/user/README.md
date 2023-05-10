# user

### Available Operations

* [deleteUser](#deleteuser) - Deletes the user object
* [deleteUserTag](#deleteusertag) - Delete user tag
* [getAllUserTags](#getallusertags) - Get all user tags
* [getAllUsersWithTag](#getalluserswithtag) - Get links to tagged users
* [getTagFromUser](#gettagfromuser) - Get user tag
* [getTagsFromUser](#gettagsfromuser) - Get tags from user
* [getUser](#getuser) - Gets the user object
* [getUserPermissions](#getuserpermissions) - Gets the user permissions
* [getUsers](#getusers) - Gets all user objects
* [patchUser](#patchuser) - Patch user object
* [postUser](#postuser) - Post user object
* [putUser](#putuser) - Puts user object
* [putUserTag](#putusertag) - Insert user tag

## deleteUser

Deletes the user object from the application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->apiVersion = 'fugit';
    $request->authorization = 'maxime';
    $request->userId = 'dolorum';

    $response = $sdk->user->deleteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserTag

Deletes a tag from the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserTagRequest();
    $request->apiVersion = 'repellat';
    $request->authorization = 'nostrum';
    $request->tagId = 'illum';
    $request->userId = 'quibusdam';

    $response = $sdk->user->deleteUserTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllUserTags

Get all tags from all users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllUserTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllUserTagsRequest();
    $request->apiVersion = 'commodi';
    $request->authorization = 'esse';

    $response = $sdk->user->getAllUserTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllUsersWithTag

Gets the users with the specified tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllUsersWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllUsersWithTagRequest();
    $request->apiVersion = 'explicabo';
    $request->authorization = 'consectetur';
    $request->tagId = 'temporibus';

    $response = $sdk->user->getAllUsersWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromUser

Gets a tag from the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromUserRequest();
    $request->apiVersion = 'optio';
    $request->authorization = 'ipsa';
    $request->tagId = 'maiores';
    $request->userId = 'exercitationem';

    $response = $sdk->user->getTagFromUser($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromUser

Gets all tags from the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromUserRequest();
    $request->apiVersion = 'culpa';
    $request->authorization = 'repudiandae';
    $request->userId = 'aspernatur';

    $response = $sdk->user->getTagsFromUser($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

Gets the user object for application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequest();
    $request->apiVersion = 'sapiente';
    $request->authorization = 'neque';
    $request->userId = 'officia';

    $response = $sdk->user->getUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPermissions

Gets the user permission instances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPermissionsRequest();
    $request->apiVersion = 'suscipit';
    $request->authorization = 'harum';
    $request->userId = 'ducimus';

    $response = $sdk->user->getUserPermissions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

Gets all user objects for application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->apiVersion = 'doloremque';
    $request->authorization = 'perferendis';

    $response = $sdk->user->getUsers($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchUser

Patch the user object at the specified resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchUserRequest();
    $request->apiVersion = 'laudantium';
    $request->authorization = 'iusto';
    $request->userId = 'corrupti';

    $response = $sdk->user->patchUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUser

Post the new user object into the application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUserRequest();
    $request->apiVersion = 'molestiae';
    $request->authorization = 'quis';

    $response = $sdk->user->postUser($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUser

Puts the user object into the specified resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserRequest();
    $request->apiVersion = 'iure';
    $request->authorization = 'ab';
    $request->userId = 'quaerat';

    $response = $sdk->user->putUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUserTag

Inserts a tag on the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUserTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserTagRequest();
    $request->apiVersion = 'amet';
    $request->authorization = 'sapiente';
    $request->tagId = 'corporis';
    $request->userId = 'est';

    $response = $sdk->user->putUserTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
