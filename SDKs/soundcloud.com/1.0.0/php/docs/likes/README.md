# likes

## Overview

Liking Tracks & Playlists.

### Available Operations

* [deleteLikesPlaylistsPlaylistId](#deletelikesplaylistsplaylistid) - Unlikes a playlist.
* [deleteLikesTracksTrackId](#deletelikestrackstrackid) - Unlikes a track.
* [postLikesPlaylistsPlaylistId](#postlikesplaylistsplaylistid) - Likes a playlist.
* [postLikesTracksTrackId](#postlikestrackstrackid) - Likes a track.

## deleteLikesPlaylistsPlaylistId

Unlikes a playlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLikesPlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLikesPlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLikesPlaylistsPlaylistIdRequest();
    $request->playlistId = 592845;

    $requestSecurity = new DeleteLikesPlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->likes->deleteLikesPlaylistsPlaylistId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLikesTracksTrackId

Unlikes a track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLikesTracksTrackIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLikesTracksTrackIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLikesTracksTrackIdRequest();
    $request->trackId = 715190;

    $requestSecurity = new DeleteLikesTracksTrackIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->likes->deleteLikesTracksTrackId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLikesPlaylistsPlaylistId

Likes a playlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLikesPlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLikesPlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLikesPlaylistsPlaylistIdRequest();
    $request->playlistId = 844266;

    $requestSecurity = new PostLikesPlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->likes->postLikesPlaylistsPlaylistId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLikesTracksTrackId

Likes a track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLikesTracksTrackIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLikesTracksTrackIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLikesTracksTrackIdRequest();
    $request->trackId = 602763;

    $requestSecurity = new PostLikesTracksTrackIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->likes->postLikesTracksTrackId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
