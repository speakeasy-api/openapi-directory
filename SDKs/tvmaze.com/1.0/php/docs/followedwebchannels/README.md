# followedWebchannels

### Available Operations

* [deleteUserFollowsWebchannelsWebchannelId](#deleteuserfollowswebchannelswebchannelid) - Unfollow a webchannel
* [getUserFollowsWebchannels](#getuserfollowswebchannels) - List the followed webchannels
* [getUserFollowsWebchannelsWebchannelId](#getuserfollowswebchannelswebchannelid) - Check if a webchannel is followed
* [putUserFollowsWebchannelsWebchannelId](#putuserfollowswebchannelswebchannelid) - Follow a webchannel

## deleteUserFollowsWebchannelsWebchannelId

Unfollow a webchannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserFollowsWebchannelsWebchannelIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserFollowsWebchannelsWebchannelIdRequest();
    $request->webchannelId = 56713;

    $response = $sdk->followedWebchannels->deleteUserFollowsWebchannelsWebchannelId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserFollowsWebchannels

List the followed webchannels

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsWebchannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsWebchannelsEmbedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserFollowsWebchannelsRequest();
    $request->embed = GetUserFollowsWebchannelsEmbedEnum::WEBCHANNEL;

    $response = $sdk->followedWebchannels->getUserFollowsWebchannels($request);

    if ($response->webchannelFollows !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserFollowsWebchannelsWebchannelId

Check if a webchannel is followed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsWebchannelsWebchannelIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserFollowsWebchannelsWebchannelIdRequest();
    $request->webchannelId = 963663;

    $response = $sdk->followedWebchannels->getUserFollowsWebchannelsWebchannelId($request);

    if ($response->webchannelFollow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUserFollowsWebchannelsWebchannelId

Follow a webchannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUserFollowsWebchannelsWebchannelIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserFollowsWebchannelsWebchannelIdRequest();
    $request->webchannelId = 272656;

    $response = $sdk->followedWebchannels->putUserFollowsWebchannelsWebchannelId($request);

    if ($response->webchannelFollow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
