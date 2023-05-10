# playlistItems

### Available Operations

* [youtubePlaylistItemsDelete](#youtubeplaylistitemsdelete) - Deletes a resource.
* [youtubePlaylistItemsInsert](#youtubeplaylistitemsinsert) - Inserts a new resource into this collection.
* [youtubePlaylistItemsList](#youtubeplaylistitemslist) - Retrieves a list of resources, possibly filtered.
* [youtubePlaylistItemsUpdate](#youtubeplaylistitemsupdate) - Updates an existing resource.

## youtubePlaylistItemsDelete

Deletes a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubePlaylistItemsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'consectetur';
    $request->id = 'c73b9da3-f2ce-4da7-a23f-2257411faf4b';
    $request->key = 'in';
    $request->oauthToken = 'exercitationem';
    $request->onBehalfOfContentOwner = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new YoutubePlaylistItemsDeleteSecurity();
    $requestSecurity->option1 = new YoutubePlaylistItemsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->playlistItems->youtubePlaylistItemsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubePlaylistItemsInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItem;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItemContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItemSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ResourceId;
use \OpenAPI\OpenAPI\Models\Shared\ThumbnailDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItemStatus;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItemStatusPrivacyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubePlaylistItemsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->playlistItem = new PlaylistItem();
    $request->playlistItem->contentDetails = new PlaylistItemContentDetails();
    $request->playlistItem->contentDetails->endAt = 'explicabo';
    $request->playlistItem->contentDetails->note = 'accusamus';
    $request->playlistItem->contentDetails->startAt = 'rem';
    $request->playlistItem->contentDetails->videoId = 'aperiam';
    $request->playlistItem->contentDetails->videoPublishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-19T10:22:30.161Z');
    $request->playlistItem->etag = 'enim';
    $request->playlistItem->id = '7a5b4046-3a7d-4575-b140-0e764ad7334e';
    $request->playlistItem->kind = 'minus';
    $request->playlistItem->snippet = new PlaylistItemSnippet();
    $request->playlistItem->snippet->channelId = 'sunt';
    $request->playlistItem->snippet->channelTitle = 'distinctio';
    $request->playlistItem->snippet->description = 'iusto';
    $request->playlistItem->snippet->playlistId = 'quas';
    $request->playlistItem->snippet->position = 91728;
    $request->playlistItem->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T15:04:57.362Z');
    $request->playlistItem->snippet->resourceId = new ResourceId();
    $request->playlistItem->snippet->resourceId->channelId = 'autem';
    $request->playlistItem->snippet->resourceId->kind = 'fuga';
    $request->playlistItem->snippet->resourceId->playlistId = 'alias';
    $request->playlistItem->snippet->resourceId->videoId = 'rem';
    $request->playlistItem->snippet->thumbnails = new ThumbnailDetails();
    $request->playlistItem->snippet->thumbnails->high = new Thumbnail();
    $request->playlistItem->snippet->thumbnails->high->height = 11355;
    $request->playlistItem->snippet->thumbnails->high->url = 'quos';
    $request->playlistItem->snippet->thumbnails->high->width = 511222;
    $request->playlistItem->snippet->thumbnails->maxres = new Thumbnail();
    $request->playlistItem->snippet->thumbnails->maxres->height = 832239;
    $request->playlistItem->snippet->thumbnails->maxres->url = 'veritatis';
    $request->playlistItem->snippet->thumbnails->maxres->width = 60778;
    $request->playlistItem->snippet->thumbnails->medium = new Thumbnail();
    $request->playlistItem->snippet->thumbnails->medium->height = 51075;
    $request->playlistItem->snippet->thumbnails->medium->url = 'saepe';
    $request->playlistItem->snippet->thumbnails->medium->width = 965517;
    $request->playlistItem->snippet->thumbnails->standard = new Thumbnail();
    $request->playlistItem->snippet->thumbnails->standard->height = 651228;
    $request->playlistItem->snippet->thumbnails->standard->url = 'nulla';
    $request->playlistItem->snippet->thumbnails->standard->width = 640907;
    $request->playlistItem->snippet->title = 'Mr.';
    $request->playlistItem->snippet->videoOwnerChannelId = 'voluptatem';
    $request->playlistItem->snippet->videoOwnerChannelTitle = 'alias';
    $request->playlistItem->status = new PlaylistItemStatus();
    $request->playlistItem->status->privacyStatus = PlaylistItemStatusPrivacyStatusEnum::PRIVATE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'qui';
    $request->key = 'qui';
    $request->oauthToken = 'necessitatibus';
    $request->onBehalfOfContentOwner = 'harum';
    $request->part = [
        'beatae',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new YoutubePlaylistItemsInsertSecurity();
    $requestSecurity->option1 = new YoutubePlaylistItemsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->playlistItems->youtubePlaylistItemsInsert($request, $requestSecurity);

    if ($response->playlistItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubePlaylistItemsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubePlaylistItemsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'totam';
    $request->id = [
        'aliquid',
    ];
    $request->key = 'ea';
    $request->maxResults = 774501;
    $request->oauthToken = 'ducimus';
    $request->onBehalfOfContentOwner = 'odit';
    $request->pageToken = 'velit';
    $request->part = [
        'repellat',
        'nulla',
        'laborum',
        'natus',
    ];
    $request->playlistId = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'rerum';
    $request->videoId = 'recusandae';

    $requestSecurity = new YoutubePlaylistItemsListSecurity();
    $requestSecurity->option1 = new YoutubePlaylistItemsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->playlistItems->youtubePlaylistItemsList($request, $requestSecurity);

    if ($response->playlistItemListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubePlaylistItemsUpdate

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItem;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItemContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItemSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ResourceId;
use \OpenAPI\OpenAPI\Models\Shared\ThumbnailDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItemStatus;
use \OpenAPI\OpenAPI\Models\Shared\PlaylistItemStatusPrivacyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubePlaylistItemsUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubePlaylistItemsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->playlistItem = new PlaylistItem();
    $request->playlistItem->contentDetails = new PlaylistItemContentDetails();
    $request->playlistItem->contentDetails->endAt = 'non';
    $request->playlistItem->contentDetails->note = 'rem';
    $request->playlistItem->contentDetails->startAt = 'quia';
    $request->playlistItem->contentDetails->videoId = 'ullam';
    $request->playlistItem->contentDetails->videoPublishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T07:06:40.070Z');
    $request->playlistItem->etag = 'voluptatibus';
    $request->playlistItem->id = 'c0e115c8-0bff-4918-944e-c42defcce8f1';
    $request->playlistItem->kind = 'sint';
    $request->playlistItem->snippet = new PlaylistItemSnippet();
    $request->playlistItem->snippet->channelId = 'nihil';
    $request->playlistItem->snippet->channelTitle = 'esse';
    $request->playlistItem->snippet->description = 'iure';
    $request->playlistItem->snippet->playlistId = 'odio';
    $request->playlistItem->snippet->position = 202796;
    $request->playlistItem->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T04:06:59.820Z');
    $request->playlistItem->snippet->resourceId = new ResourceId();
    $request->playlistItem->snippet->resourceId->channelId = 'neque';
    $request->playlistItem->snippet->resourceId->kind = 'corporis';
    $request->playlistItem->snippet->resourceId->playlistId = 'voluptas';
    $request->playlistItem->snippet->resourceId->videoId = 'consequuntur';
    $request->playlistItem->snippet->thumbnails = new ThumbnailDetails();
    $request->playlistItem->snippet->thumbnails->high = new Thumbnail();
    $request->playlistItem->snippet->thumbnails->high->height = 641133;
    $request->playlistItem->snippet->thumbnails->high->url = 'reprehenderit';
    $request->playlistItem->snippet->thumbnails->high->width = 716033;
    $request->playlistItem->snippet->thumbnails->maxres = new Thumbnail();
    $request->playlistItem->snippet->thumbnails->maxres->height = 262800;
    $request->playlistItem->snippet->thumbnails->maxres->url = 'ipsa';
    $request->playlistItem->snippet->thumbnails->maxres->width = 522062;
    $request->playlistItem->snippet->thumbnails->medium = new Thumbnail();
    $request->playlistItem->snippet->thumbnails->medium->height = 978154;
    $request->playlistItem->snippet->thumbnails->medium->url = 'accusantium';
    $request->playlistItem->snippet->thumbnails->medium->width = 331452;
    $request->playlistItem->snippet->thumbnails->standard = new Thumbnail();
    $request->playlistItem->snippet->thumbnails->standard->height = 906232;
    $request->playlistItem->snippet->thumbnails->standard->url = 'neque';
    $request->playlistItem->snippet->thumbnails->standard->width = 816365;
    $request->playlistItem->snippet->title = 'Mrs.';
    $request->playlistItem->snippet->videoOwnerChannelId = 'quos';
    $request->playlistItem->snippet->videoOwnerChannelTitle = 'doloribus';
    $request->playlistItem->status = new PlaylistItemStatus();
    $request->playlistItem->status->privacyStatus = PlaylistItemStatusPrivacyStatusEnum::PRIVATE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'velit';
    $request->fields = 'vitae';
    $request->key = 'nesciunt';
    $request->oauthToken = 'similique';
    $request->onBehalfOfContentOwner = 'illo';
    $request->part = [
        'nemo',
        'doloribus',
        'possimus',
        'unde',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new YoutubePlaylistItemsUpdateSecurity();
    $requestSecurity->option1 = new YoutubePlaylistItemsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->playlistItems->youtubePlaylistItemsUpdate($request, $requestSecurity);

    if ($response->playlistItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
