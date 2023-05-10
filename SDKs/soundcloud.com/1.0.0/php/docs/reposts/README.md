# reposts

## Overview

Reposting Tracks & Playlists.

### Available Operations

* [deleteRepostsPlaylistsPlaylistId](#deleterepostsplaylistsplaylistid) - Removes a repost on a playlist as the authenticated user
* [deleteRepostsTracksTrackId](#deleterepoststrackstrackid) - Removes a repost on a track as the authenticated user
* [postRepostsPlaylistsPlaylistId](#postrepostsplaylistsplaylistid) - Reposts a playlist as the authenticated user
* [postRepostsTracksTrackId](#postrepoststrackstrackid) - Reposts a track as the authenticated user

## deleteRepostsPlaylistsPlaylistId

Removes a repost on a playlist as the authenticated user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepostsPlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepostsPlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepostsPlaylistsPlaylistIdRequest();
    $request->playlistId = 681820;

    $requestSecurity = new DeleteRepostsPlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->reposts->deleteRepostsPlaylistsPlaylistId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepostsTracksTrackId

Removes a repost on a track as the authenticated user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepostsTracksTrackIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepostsTracksTrackIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepostsTracksTrackIdRequest();
    $request->trackId = 449950;

    $requestSecurity = new DeleteRepostsTracksTrackIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->reposts->deleteRepostsTracksTrackId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepostsPlaylistsPlaylistId

Reposts a playlist as the authenticated user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepostsPlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepostsPlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepostsPlaylistsPlaylistIdRequest();
    $request->playlistId = 359508;

    $requestSecurity = new PostRepostsPlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->reposts->postRepostsPlaylistsPlaylistId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepostsTracksTrackId

Reposts a track as the authenticated user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepostsTracksTrackIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepostsTracksTrackIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepostsTracksTrackIdRequest();
    $request->trackId = 613064;

    $requestSecurity = new PostRepostsTracksTrackIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->reposts->postRepostsTracksTrackId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
