# playlists

### Available Operations

* [youtubePlaylistsDelete](#youtubeplaylistsdelete) - Deletes a resource.
* [youtubePlaylistsInsert](#youtubeplaylistsinsert) - Inserts a new resource into this collection.
* [youtubePlaylistsList](#youtubeplaylistslist) - Retrieves a list of resources, possibly filtered.
* [youtubePlaylistsUpdate](#youtubeplaylistsupdate) - Updates an existing resource.

## youtubePlaylistsDelete

Deletes a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubePlaylistsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'nesciunt';
    $request->id = '6f25ea94-4f3b-4756-811f-6c37a5126243';
    $request->key = 'praesentium';
    $request->oauthToken = 'dolor';
    $request->onBehalfOfContentOwner = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new YoutubePlaylistsDeleteSecurity();
    $requestSecurity->option1 = new YoutubePlaylistsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->playlists->youtubePlaylistsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubePlaylistsInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Playlist;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistLocalization;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistPlayer;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ThumbnailDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistStatus;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistStatusPrivacyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubePlaylistsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->playlist = new Playlist();
    $request->playlist->contentDetails = new PlaylistContentDetails();
    $request->playlist->contentDetails->itemCount = 363482;
    $request->playlist->etag = 'culpa';
    $request->playlist->id = '23a45cef-c5fd-4e10-a0ce-2169e510019c';
    $request->playlist->kind = 'iure';
    $request->playlist->localizations = [
        'quod' => new PlaylistLocalization(),
        'nemo' => new PlaylistLocalization(),
        'recusandae' => new PlaylistLocalization(),
        'velit' => new PlaylistLocalization(),
    ];
    $request->playlist->player = new PlaylistPlayer();
    $request->playlist->player->embedHtml = 'magnam';
    $request->playlist->snippet = new PlaylistSnippet();
    $request->playlist->snippet->channelId = 'dignissimos';
    $request->playlist->snippet->channelTitle = 'laboriosam';
    $request->playlist->snippet->defaultLanguage = 'sed';
    $request->playlist->snippet->description = 'odio';
    $request->playlist->snippet->localized = new PlaylistLocalization();
    $request->playlist->snippet->localized->description = 'natus';
    $request->playlist->snippet->localized->title = 'Ms.';
    $request->playlist->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-12T18:52:51.422Z');
    $request->playlist->snippet->tags = [
        'quidem',
        'itaque',
        'laboriosam',
    ];
    $request->playlist->snippet->thumbnailVideoId = 'unde';
    $request->playlist->snippet->thumbnails = new ThumbnailDetails();
    $request->playlist->snippet->thumbnails->high = new Thumbnail();
    $request->playlist->snippet->thumbnails->high->height = 263767;
    $request->playlist->snippet->thumbnails->high->url = 'perspiciatis';
    $request->playlist->snippet->thumbnails->high->width = 944626;
    $request->playlist->snippet->thumbnails->maxres = new Thumbnail();
    $request->playlist->snippet->thumbnails->maxres->height = 736985;
    $request->playlist->snippet->thumbnails->maxres->url = 'aspernatur';
    $request->playlist->snippet->thumbnails->maxres->width = 725784;
    $request->playlist->snippet->thumbnails->medium = new Thumbnail();
    $request->playlist->snippet->thumbnails->medium->height = 720266;
    $request->playlist->snippet->thumbnails->medium->url = 'incidunt';
    $request->playlist->snippet->thumbnails->medium->width = 925395;
    $request->playlist->snippet->thumbnails->standard = new Thumbnail();
    $request->playlist->snippet->thumbnails->standard->height = 797254;
    $request->playlist->snippet->thumbnails->standard->url = 'id';
    $request->playlist->snippet->thumbnails->standard->width = 904440;
    $request->playlist->snippet->title = 'Ms.';
    $request->playlist->status = new PlaylistStatus();
    $request->playlist->status->privacyStatus = PlaylistStatusPrivacyStatusEnum::PRIVATE;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'illum';
    $request->key = 'facilis';
    $request->oauthToken = 'non';
    $request->onBehalfOfContentOwner = 'mollitia';
    $request->onBehalfOfContentOwnerChannel = 'assumenda';
    $request->part = [
        'distinctio',
        'pariatur',
        'ad',
        'facere',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new YoutubePlaylistsInsertSecurity();
    $requestSecurity->option1 = new YoutubePlaylistsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->playlists->youtubePlaylistsInsert($request, $requestSecurity);

    if ($response->playlist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubePlaylistsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubePlaylistsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->channelId = 'suscipit';
    $request->fields = 'deserunt';
    $request->hl = 'molestias';
    $request->id = [
        'est',
        'occaecati',
        'labore',
    ];
    $request->key = 'quo';
    $request->maxResults = 19462;
    $request->mine = false;
    $request->oauthToken = 'fugit';
    $request->onBehalfOfContentOwner = 'aliquid';
    $request->onBehalfOfContentOwnerChannel = 'magnam';
    $request->pageToken = 'quaerat';
    $request->part = [
        'hic',
        'nostrum',
        'officiis',
        'unde',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new YoutubePlaylistsListSecurity();
    $requestSecurity->option1 = new YoutubePlaylistsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->playlists->youtubePlaylistsList($request, $requestSecurity);

    if ($response->playlistListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubePlaylistsUpdate

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Playlist;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistLocalization;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistPlayer;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ThumbnailDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistStatus;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistStatusPrivacyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistsUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubePlaylistsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->playlist = new Playlist();
    $request->playlist->contentDetails = new PlaylistContentDetails();
    $request->playlist->contentDetails->itemCount = 344289;
    $request->playlist->etag = 'esse';
    $request->playlist->id = '8adc1ac6-00de-4c00-9ac8-02e2ec09ff8f';
    $request->playlist->kind = 'alias';
    $request->playlist->localizations = [
        'rem' => new PlaylistLocalization(),
        'dicta' => new PlaylistLocalization(),
        'suscipit' => new PlaylistLocalization(),
        'earum' => new PlaylistLocalization(),
    ];
    $request->playlist->player = new PlaylistPlayer();
    $request->playlist->player->embedHtml = 'doloribus';
    $request->playlist->snippet = new PlaylistSnippet();
    $request->playlist->snippet->channelId = 'velit';
    $request->playlist->snippet->channelTitle = 'eius';
    $request->playlist->snippet->defaultLanguage = 'esse';
    $request->playlist->snippet->description = 'in';
    $request->playlist->snippet->localized = new PlaylistLocalization();
    $request->playlist->snippet->localized->description = 'eligendi';
    $request->playlist->snippet->localized->title = 'Mr.';
    $request->playlist->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-15T00:33:35.714Z');
    $request->playlist->snippet->tags = [
        'accusantium',
        'qui',
        'impedit',
    ];
    $request->playlist->snippet->thumbnailVideoId = 'beatae';
    $request->playlist->snippet->thumbnails = new ThumbnailDetails();
    $request->playlist->snippet->thumbnails->high = new Thumbnail();
    $request->playlist->snippet->thumbnails->high->height = 278329;
    $request->playlist->snippet->thumbnails->high->url = 'dicta';
    $request->playlist->snippet->thumbnails->high->width = 139133;
    $request->playlist->snippet->thumbnails->maxres = new Thumbnail();
    $request->playlist->snippet->thumbnails->maxres->height = 357639;
    $request->playlist->snippet->thumbnails->maxres->url = 'rerum';
    $request->playlist->snippet->thumbnails->maxres->width = 4654;
    $request->playlist->snippet->thumbnails->medium = new Thumbnail();
    $request->playlist->snippet->thumbnails->medium->height = 624498;
    $request->playlist->snippet->thumbnails->medium->url = 'vel';
    $request->playlist->snippet->thumbnails->medium->width = 35581;
    $request->playlist->snippet->thumbnails->standard = new Thumbnail();
    $request->playlist->snippet->thumbnails->standard->height = 664197;
    $request->playlist->snippet->thumbnails->standard->url = 'laboriosam';
    $request->playlist->snippet->thumbnails->standard->width = 401688;
    $request->playlist->snippet->title = 'Ms.';
    $request->playlist->status = new PlaylistStatus();
    $request->playlist->status->privacyStatus = PlaylistStatusPrivacyStatusEnum::PUBLIC;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'similique';
    $request->fields = 'incidunt';
    $request->key = 'quam';
    $request->oauthToken = 'magni';
    $request->onBehalfOfContentOwner = 'deserunt';
    $request->part = [
        'omnis',
        'sed',
        'nesciunt',
        'maxime',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new YoutubePlaylistsUpdateSecurity();
    $requestSecurity->option1 = new YoutubePlaylistsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->playlists->youtubePlaylistsUpdate($request, $requestSecurity);

    if ($response->playlist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
