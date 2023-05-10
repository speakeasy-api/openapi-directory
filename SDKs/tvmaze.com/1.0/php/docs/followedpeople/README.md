# followedPeople

### Available Operations

* [deleteUserFollowsPeoplePersonId](#deleteuserfollowspeoplepersonid) - Unfollow a person
* [getUserFollowsPeople](#getuserfollowspeople) - List the followed people
* [getUserFollowsPeoplePersonId](#getuserfollowspeoplepersonid) - Check if a person is followed
* [putUserFollowsPeoplePersonId](#putuserfollowspeoplepersonid) - Follow a person

## deleteUserFollowsPeoplePersonId

Unfollow a person

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserFollowsPeoplePersonIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserFollowsPeoplePersonIdRequest();
    $request->personId = 623564;

    $response = $sdk->followedPeople->deleteUserFollowsPeoplePersonId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserFollowsPeople

List the followed people

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsPeopleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsPeopleEmbedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserFollowsPeopleRequest();
    $request->embed = GetUserFollowsPeopleEmbedEnum::PERSON;

    $response = $sdk->followedPeople->getUserFollowsPeople($request);

    if ($response->personFollows !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserFollowsPeoplePersonId

Check if a person is followed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsPeoplePersonIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserFollowsPeoplePersonIdRequest();
    $request->personId = 645894;

    $response = $sdk->followedPeople->getUserFollowsPeoplePersonId($request);

    if ($response->personFollow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUserFollowsPeoplePersonId

Follow a person

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUserFollowsPeoplePersonIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserFollowsPeoplePersonIdRequest();
    $request->personId = 384382;

    $response = $sdk->followedPeople->putUserFollowsPeoplePersonId($request);

    if ($response->personFollow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
