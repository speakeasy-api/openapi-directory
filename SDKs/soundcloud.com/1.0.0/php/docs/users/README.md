# users

## Overview

SoundCloud Users Endpoints.

### Available Operations

* [getUsersUserId](#getusersuserid) - Returns a user.
* [getUsersUserIdComments](#getusersuseridcomments) - Returns a list of user's comments.
* [~~getUsersUserIdFavorites~~](#getusersuseridfavorites) - Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes) :warning: **Deprecated**
* [getUsersUserIdFollowers](#getusersuseridfollowers) - Returns a list of user’s followers.
* [getUsersUserIdFollowings](#getusersuseridfollowings) - Returns a list of user’s followings.
* [~~getUsersUserIdFollowingsFollowingId~~](#getusersuseridfollowingsfollowingid) - Returns a user's following. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [getUsersUserIdLikesTracks](#getusersuseridlikestracks) - Returns a list of user's liked tracks.
* [getUsersUserIdPlaylists](#getusersuseridplaylists) - Returns a list of user's playlists.
* [getUsersUserIdTracks](#getusersuseridtracks) - Returns a list of user's tracks.
* [getUsersUserIdWebProfiles](#getusersuseridwebprofiles) - Returns list of user's links added to their profile (website, facebook, instagram).

## getUsersUserId

Returns a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdRequest();
    $request->userId = 921158;

    $requestSecurity = new GetUsersUserIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserId($request, $requestSecurity);

    if ($response->completeUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdComments

Returns a list of user's comments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdCommentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdCommentsRequest();
    $request->limit = 575947;
    $request->offset = 83112;
    $request->userId = 929297;

    $requestSecurity = new GetUsersUserIdCommentsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserIdComments($request, $requestSecurity);

    if ($response->commentsList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getUsersUserIdFavorites~~

Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdFavoritesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdFavoritesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdFavoritesRequest();
    $request->limit = 277718;
    $request->linkedPartitioning = false;
    $request->userId = 318569;

    $requestSecurity = new GetUsersUserIdFavoritesSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserIdFavorites($request, $requestSecurity);

    if ($response->getUsersUserIdFavorites200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdFollowers

Returns a list of users that follows (user_id).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdFollowersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdFollowersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdFollowersRequest();
    $request->limit = 9356;
    $request->userId = 667411;

    $requestSecurity = new GetUsersUserIdFollowersSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserIdFollowers($request, $requestSecurity);

    if ($response->getUsersUserIdFollowers200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdFollowings

Returns list of users that (user_id) follows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdFollowingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdFollowingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdFollowingsRequest();
    $request->limit = 842342;
    $request->userId = 131797;

    $requestSecurity = new GetUsersUserIdFollowingsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserIdFollowings($request, $requestSecurity);

    if ($response->getUsersUserIdFollowings200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getUsersUserIdFollowingsFollowingId~~

Returns (following_id) that is followed by (user_id).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdFollowingsFollowingIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdFollowingsFollowingIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdFollowingsFollowingIdRequest();
    $request->followingId = 647174;
    $request->userId = 716327;

    $requestSecurity = new GetUsersUserIdFollowingsFollowingIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserIdFollowingsFollowingId($request, $requestSecurity);

    if ($response->completeUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdLikesTracks

Returns a list of user's liked tracks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdLikesTracksRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdLikesTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdLikesTracksRequest();
    $request->access = [
        AccessEnum::PLAYABLE,
        AccessEnum::PLAYABLE,
        AccessEnum::PLAYABLE,
        AccessEnum::PREVIEW,
    ];
    $request->limit = 586513;
    $request->linkedPartitioning = false;
    $request->userId = 552822;

    $requestSecurity = new GetUsersUserIdLikesTracksSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserIdLikesTracks($request, $requestSecurity);

    if ($response->getUsersUserIdLikesTracks200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdPlaylists

Returns a list of user's playlists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdPlaylistsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdPlaylistsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdPlaylistsRequest();
    $request->access = [
        AccessEnum::PLAYABLE,
    ];
    $request->limit = 828940;
    $request->linkedPartitioning = false;
    $request->userId = 369808;

    $requestSecurity = new GetUsersUserIdPlaylistsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserIdPlaylists($request, $requestSecurity);

    if ($response->getUsersUserIdPlaylists200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdTracks

Returns a list of user's tracks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdTracksRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdTracksRequest();
    $request->access = [
        AccessEnum::PLAYABLE,
    ];
    $request->limit = 677817;
    $request->linkedPartitioning = false;
    $request->userId = 569618;

    $requestSecurity = new GetUsersUserIdTracksSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserIdTracks($request, $requestSecurity);

    if ($response->getUsersUserIdTracks200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdWebProfiles

Returns list of user's links added to their profile (website, facebook, instagram).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdWebProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdWebProfilesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdWebProfilesRequest();
    $request->limit = 270008;
    $request->userId = 703737;

    $requestSecurity = new GetUsersUserIdWebProfilesSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersUserIdWebProfiles($request, $requestSecurity);

    if ($response->webProfiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
