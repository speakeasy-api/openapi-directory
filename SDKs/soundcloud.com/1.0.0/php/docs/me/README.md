# me

## Overview

Own User Endpoints.

### Available Operations

* [deleteMeFollowingsUserId](#deletemefollowingsuserid) - Deletes a user who is followed by the authenticated user.
* [getMe](#getme) - Returns the authenticated user’s information.
* [getMeActivities](#getmeactivities) - Returns the authenticated user's activities.
* [getMeActivitiesAllOwn](#getmeactivitiesallown) - Recent the authenticated user's activities.
* [getMeActivitiesTracks](#getmeactivitiestracks) - Returns the authenticated user's recent track related activities.
* [getMeConnections](#getmeconnections) - Returns a list of the authenticated user's connected social accounts.
* [getMeConnectionsConnectionId](#getmeconnectionsconnectionid) - Returns the authenticated user's connected social account.
* [~~getMeFavoritesIds~~](#getmefavoritesids) - Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes) :warning: **Deprecated**
* [getMeFollowers](#getmefollowers) - Returns a list of users who are following the authenticated user.
* [~~getMeFollowersFollowerId~~](#getmefollowersfollowerid) - Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [getMeFollowings](#getmefollowings) - Returns a list of users who are followed by the authenticated user.
* [getMeFollowingsTracks](#getmefollowingstracks) - Returns a list of recent tracks from users followed by the authenticated user.
* [~~getMeFollowingsUserId~~](#getmefollowingsuserid) - Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [getMeLikesTracks](#getmelikestracks) - Returns a list of favorited or liked tracks of the authenticated user.
* [getMePlaylists](#getmeplaylists) - Returns user’s playlists (sets).
* [~~getMePlaylistsPlaylistId~~](#getmeplaylistsplaylistid) - Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details) :warning: **Deprecated**
* [getMeTracks](#getmetracks) - Returns a list of user's tracks.
* [~~getMeTracksTrackId~~](#getmetrackstrackid) - Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details) :warning: **Deprecated**
* [putMeFollowingsUserId](#putmefollowingsuserid) - Follows a user.

## deleteMeFollowingsUserId

Deletes a user who is followed by the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMeFollowingsUserIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMeFollowingsUserIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMeFollowingsUserIdRequest();
    $request->userId = 857946;

    $requestSecurity = new DeleteMeFollowingsUserIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->deleteMeFollowingsUserId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMe

Returns the authenticated user’s information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetMeSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMe($requestSecurity);

    if ($response->completeUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeActivities

Returns the authenticated user's activities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeActivitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeActivitiesRequest();
    $request->access = [
        AccessEnum::BLOCKED,
        AccessEnum::PREVIEW,
        AccessEnum::PREVIEW,
    ];
    $request->limit = 645894;

    $requestSecurity = new GetMeActivitiesSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeActivities($request, $requestSecurity);

    if ($response->activities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeActivitiesAllOwn

Recent the authenticated user's activities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeActivitiesAllOwnRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeActivitiesAllOwnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeActivitiesAllOwnRequest();
    $request->access = [
        AccessEnum::PREVIEW,
        AccessEnum::PLAYABLE,
    ];
    $request->limit = 891773;

    $requestSecurity = new GetMeActivitiesAllOwnSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeActivitiesAllOwn($request, $requestSecurity);

    if ($response->activities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeActivitiesTracks

Returns the authenticated user's recent track related activities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeActivitiesTracksRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeActivitiesTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeActivitiesTracksRequest();
    $request->access = [
        AccessEnum::BLOCKED,
    ];
    $request->limit = 272656;

    $requestSecurity = new GetMeActivitiesTracksSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeActivitiesTracks($request, $requestSecurity);

    if ($response->activities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeConnections

Returns a list of the authenticated user's connected social accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeConnectionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeConnectionsRequest();
    $request->limit = 383441;
    $request->offset = 477665;

    $requestSecurity = new GetMeConnectionsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeConnections($request, $requestSecurity);

    if ($response->connections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeConnectionsConnectionId

Returns the authenticated user's connected social account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeConnectionsConnectionIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeConnectionsConnectionIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeConnectionsConnectionIdRequest();
    $request->connectionId = 791725;

    $requestSecurity = new GetMeConnectionsConnectionIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeConnectionsConnectionId($request, $requestSecurity);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getMeFavoritesIds~~

Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFavoritesIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFavoritesIdsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeFavoritesIdsRequest();
    $request->limit = 812169;

    $requestSecurity = new GetMeFavoritesIdsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeFavoritesIds($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeFollowers

Returns a list of users who are following the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeFollowersRequest();
    $request->limit = 528895;

    $requestSecurity = new GetMeFollowersSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeFollowers($request, $requestSecurity);

    if ($response->getMeFollowers200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getMeFollowersFollowerId~~

Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowersFollowerIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowersFollowerIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeFollowersFollowerIdRequest();
    $request->followerId = 479977;

    $requestSecurity = new GetMeFollowersFollowerIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeFollowersFollowerId($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeFollowings

Returns a list of users who are followed by the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeFollowingsRequest();
    $request->limit = 568045;
    $request->offset = 392785;

    $requestSecurity = new GetMeFollowingsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeFollowings($request, $requestSecurity);

    if ($response->getMeFollowings200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeFollowingsTracks

Returns a list of recent tracks from users followed by the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowingsTracksRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowingsTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeFollowingsTracksRequest();
    $request->access = [
        AccessEnum::BLOCKED,
        AccessEnum::PLAYABLE,
        AccessEnum::PREVIEW,
        AccessEnum::PLAYABLE,
    ];
    $request->limit = 648172;
    $request->offset = 20218;

    $requestSecurity = new GetMeFollowingsTracksSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeFollowingsTracks($request, $requestSecurity);

    if ($response->tracksList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getMeFollowingsUserId~~

Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowingsUserIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFollowingsUserIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeFollowingsUserIdRequest();
    $request->userId = 368241;

    $requestSecurity = new GetMeFollowingsUserIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeFollowingsUserId($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeLikesTracks

Returns a list of favorited or liked tracks of the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeLikesTracksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeLikesTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeLikesTracksRequest();
    $request->limit = 832620;
    $request->linkedPartitioning = false;

    $requestSecurity = new GetMeLikesTracksSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeLikesTracks($request, $requestSecurity);

    if ($response->getMeLikesTracks200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMePlaylists

Returns playlist info, playlist tracks and tracks owner info.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMePlaylistsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMePlaylistsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMePlaylistsRequest();
    $request->limit = 957156;

    $requestSecurity = new GetMePlaylistsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMePlaylists($request, $requestSecurity);

    if ($response->playlistsArray !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getMePlaylistsPlaylistId~~

Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMePlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMePlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMePlaylistsPlaylistIdRequest();
    $request->playlistId = 778157;

    $requestSecurity = new GetMePlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMePlaylistsPlaylistId($request, $requestSecurity);

    if ($response->playlist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeTracks

Returns a list of user's tracks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTracksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeTracksRequest();
    $request->limit = 140350;
    $request->linkedPartitioning = false;

    $requestSecurity = new GetMeTracksSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeTracks($request, $requestSecurity);

    if ($response->getMeTracks200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getMeTracksTrackId~~

Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTracksTrackIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTracksTrackIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeTracksTrackIdRequest();
    $request->trackId = 870013;

    $requestSecurity = new GetMeTracksTrackIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->getMeTracksTrackId($request, $requestSecurity);

    if ($response->track !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMeFollowingsUserId

Follows a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutMeFollowingsUserIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutMeFollowingsUserIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMeFollowingsUserIdRequest();
    $request->userId = 870088;

    $requestSecurity = new PutMeFollowingsUserIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->me->putMeFollowingsUserId($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
