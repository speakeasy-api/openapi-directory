# followedShows

### Available Operations

* [deleteUserFollowsShowsShowId](#deleteuserfollowsshowsshowid) - Unfollow a show
* [getUserFollowsShows](#getuserfollowsshows) - List the followed shows
* [getUserFollowsShowsShowId](#getuserfollowsshowsshowid) - Check if a show is followed
* [putUserFollowsShowsShowId](#putuserfollowsshowsshowid) - Follow a show

## deleteUserFollowsShowsShowId

Unfollow a show

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserFollowsShowsShowIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserFollowsShowsShowIdRequest();
    $request->showId = 437587;

    $response = $sdk->followedShows->deleteUserFollowsShowsShowId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserFollowsShows

List the followed shows

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsShowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsShowsEmbedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserFollowsShowsRequest();
    $request->embed = GetUserFollowsShowsEmbedEnum::SHOW;

    $response = $sdk->followedShows->getUserFollowsShows($request);

    if ($response->showFollows !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserFollowsShowsShowId

Check if a show is followed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserFollowsShowsShowIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserFollowsShowsShowIdRequest();
    $request->showId = 297534;

    $response = $sdk->followedShows->getUserFollowsShowsShowId($request);

    if ($response->showFollow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUserFollowsShowsShowId

Follow a show

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUserFollowsShowsShowIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserFollowsShowsShowIdRequest();
    $request->showId = 891773;

    $response = $sdk->followedShows->putUserFollowsShowsShowId($request);

    if ($response->showFollow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
