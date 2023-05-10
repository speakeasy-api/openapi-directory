# tracks

## Overview

Tracks Endpoints.

### Available Operations

* [deleteTracksTrackId](#deletetrackstrackid) - Deletes a track.
* [getTracksTrackId](#gettrackstrackid) - Returns a track.
* [getTracksTrackIdComments](#gettrackstrackidcomments) - Returns the comments posted on the track(track_id).
* [getTracksTrackIdFavoriters](#gettrackstrackidfavoriters) - Returns a list of users who have favorited or liked the track.
* [getTracksTrackIdRelated](#gettrackstrackidrelated) - Returns all related tracks of track on SoundCloud.
* [getTracksTrackIdReposters](#gettrackstrackidreposters) - Returns a collection of track's reposters.
* [getTracksTrackIdStreams](#gettrackstrackidstreams) - Returns a track's streamable URLs
* [postTracks](#posttracks) - Uploads a new track.
* [postTracksTrackIdComments](#posttrackstrackidcomments) - Returns the newly created comment on success
* [putTracksTrackIdJson](#puttrackstrackidjson) - Updates a track's information.
* [putTracksTrackIdMultipart](#puttrackstrackidmultipart) - Updates a track's information.

## deleteTracksTrackId

Deletes a track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTracksTrackIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTracksTrackIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTracksTrackIdRequest();
    $request->trackId = 438601;

    $requestSecurity = new DeleteTracksTrackIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->deleteTracksTrackId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTracksTrackId

Returns a track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTracksTrackIdRequest();
    $request->secretToken = 'culpa';
    $request->trackId = 988374;

    $requestSecurity = new GetTracksTrackIdSecurity();
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->getTracksTrackId($request, $requestSecurity);

    if ($response->track !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTracksTrackIdComments

Returns the comments posted on the track(track_id).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdCommentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTracksTrackIdCommentsRequest();
    $request->limit = 958950;
    $request->linkedPartitioning = false;
    $request->offset = 102044;
    $request->trackId = 652790;

    $requestSecurity = new GetTracksTrackIdCommentsSecurity();
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->getTracksTrackIdComments($request, $requestSecurity);

    if ($response->getTracksTrackIdComments200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTracksTrackIdFavoriters

Returns a list of users who have favorited or liked the track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdFavoritersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdFavoritersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTracksTrackIdFavoritersRequest();
    $request->limit = 208876;
    $request->offset = 635059;
    $request->trackId = 161309;

    $requestSecurity = new GetTracksTrackIdFavoritersSecurity();
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->getTracksTrackIdFavoriters($request, $requestSecurity);

    if ($response->usersList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTracksTrackIdRelated

Returns all related tracks of track on SoundCloud.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdRelatedRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdRelatedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTracksTrackIdRelatedRequest();
    $request->access = [
        AccessEnum::PREVIEW,
        AccessEnum::PREVIEW,
        AccessEnum::PLAYABLE,
        AccessEnum::PREVIEW,
    ];
    $request->limit = 466311;
    $request->linkedPartitioning = false;
    $request->offset = 474697;
    $request->trackId = 244425;

    $requestSecurity = new GetTracksTrackIdRelatedSecurity();
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->getTracksTrackIdRelated($request, $requestSecurity);

    if ($response->getTracksTrackIdRelated200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTracksTrackIdReposters

Returns a collection of track's reposters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdRepostersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdRepostersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTracksTrackIdRepostersRequest();
    $request->limit = 623510;
    $request->trackId = 158969;

    $requestSecurity = new GetTracksTrackIdRepostersSecurity();
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->getTracksTrackIdReposters($request, $requestSecurity);

    if ($response->metaUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTracksTrackIdStreams

Returns a track's streamable URLs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksTrackIdStreamsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTracksTrackIdStreamsRequest();
    $request->secretToken = 'quis';
    $request->trackId = 110375;

    $requestSecurity = new GetTracksTrackIdStreamsSecurity();
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->getTracksTrackIdStreams($request, $requestSecurity);

    if ($response->streams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTracks

Uploads a new track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestOnlyForUploadingForPROUsers;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestOnlyForUploading;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestTrackEmbeddableByEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestTrackLicenseEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestTrackSharingEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrackDataRequest();
    $request->trackArtworkData = new TrackDataRequestOnlyForUploadingForPROUsers();
    $request->trackArtworkData->onlyForUploadingForPROUsers = 'laborum';
    $request->trackArtworkData->content = 'animi';
    $request->trackAssetData = new TrackDataRequestOnlyForUploading();
    $request->trackAssetData->onlyForUploading = 'enim';
    $request->trackAssetData->content = 'odit';
    $request->trackCommentable = false;
    $request->trackDescription = 'quo';
    $request->trackDownloadable = false;
    $request->trackEmbeddableBy = TrackDataRequestTrackEmbeddableByEnum::ALL;
    $request->trackGenre = 'tenetur';
    $request->trackIsrc = 'ipsam';
    $request->trackLabelName = 'id';
    $request->trackLicense = TrackDataRequestTrackLicenseEnum::CC_BY_NC_ND;
    $request->trackPermalink = 'aut';
    $request->trackPurchaseUrl = 'quasi';
    $request->trackRelease = 'error';
    $request->trackReleaseDate = 'temporibus';
    $request->trackSharing = TrackDataRequestTrackSharingEnum::PRIVATE;
    $request->trackStreamable = false;
    $request->trackTagList = 'quasi';
    $request->trackTitle = 'reiciendis';

    $requestSecurity = new PostTracksSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->postTracks($request, $requestSecurity);

    if ($response->track !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTracksTrackIdComments

Returns the newly created comment on success

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostTracksTrackIdCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTracksTrackIdCommentsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostTracksTrackIdCommentsRequestBodyComment;
use \OpenAPI\OpenAPI\Models\Operations\PostTracksTrackIdCommentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTracksTrackIdCommentsRequest();
    $request->requestBody = new PostTracksTrackIdCommentsRequestBody();
    $request->requestBody->comment = new PostTracksTrackIdCommentsRequestBodyComment();
    $request->requestBody->comment->body = 'test comment';
    $request->requestBody->comment->timestamp = 8781.94;
    $request->trackId = 468651;

    $requestSecurity = new PostTracksTrackIdCommentsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->postTracksTrackIdComments($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTracksTrackIdJson

Updates a track's information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutTracksTrackIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrackMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrackMetadataRequestTrack;
use \OpenAPI\OpenAPI\Models\Shared\TrackMetadataRequestTrackEmbeddableByEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrackMetadataRequestTrackLicenseEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrackMetadataRequestTrackSharingEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutTracksTrackIdJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTracksTrackIdJsonRequest();
    $request->trackMetadataRequest = new TrackMetadataRequest();
    $request->trackMetadataRequest->track = new TrackMetadataRequestTrack();
    $request->trackMetadataRequest->track->commentable = false;
    $request->trackMetadataRequest->track->description = 'praesentium';
    $request->trackMetadataRequest->track->downloadable = false;
    $request->trackMetadataRequest->track->embeddableBy = TrackMetadataRequestTrackEmbeddableByEnum::NONE;
    $request->trackMetadataRequest->track->genre = 'ipsa';
    $request->trackMetadataRequest->track->isrc = 'omnis';
    $request->trackMetadataRequest->track->labelName = 'voluptate';
    $request->trackMetadataRequest->track->license = TrackMetadataRequestTrackLicenseEnum::CC_BY_SA;
    $request->trackMetadataRequest->track->permalink = 'perferendis';
    $request->trackMetadataRequest->track->purchaseUrl = 'doloremque';
    $request->trackMetadataRequest->track->release = 'reprehenderit';
    $request->trackMetadataRequest->track->releaseDate = 'ut';
    $request->trackMetadataRequest->track->sharing = TrackMetadataRequestTrackSharingEnum::PRIVATE;
    $request->trackMetadataRequest->track->streamable = false;
    $request->trackMetadataRequest->track->tagList = 'dicta';
    $request->trackMetadataRequest->track->title = 'Mrs.';
    $request->trackId = 296140;

    $requestSecurity = new PutTracksTrackIdJsonSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->putTracksTrackIdJson($request, $requestSecurity);

    if ($response->track !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTracksTrackIdMultipart

Updates a track's information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutTracksTrackIdMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestOnlyForUploadingForPROUsers;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestOnlyForUploading;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestTrackEmbeddableByEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestTrackLicenseEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrackDataRequestTrackSharingEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutTracksTrackIdMultipartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTracksTrackIdMultipartRequest();
    $request->trackDataRequest = new TrackDataRequest();
    $request->trackDataRequest->trackArtworkData = new TrackDataRequestOnlyForUploadingForPROUsers();
    $request->trackDataRequest->trackArtworkData->onlyForUploadingForPROUsers = 'iusto';
    $request->trackDataRequest->trackArtworkData->content = 'dicta';
    $request->trackDataRequest->trackAssetData = new TrackDataRequestOnlyForUploading();
    $request->trackDataRequest->trackAssetData->onlyForUploading = 'harum';
    $request->trackDataRequest->trackAssetData->content = 'enim';
    $request->trackDataRequest->trackCommentable = false;
    $request->trackDataRequest->trackDescription = 'accusamus';
    $request->trackDataRequest->trackDownloadable = false;
    $request->trackDataRequest->trackEmbeddableBy = TrackDataRequestTrackEmbeddableByEnum::ME;
    $request->trackDataRequest->trackGenre = 'repudiandae';
    $request->trackDataRequest->trackIsrc = 'quae';
    $request->trackDataRequest->trackLabelName = 'ipsum';
    $request->trackDataRequest->trackLicense = TrackDataRequestTrackLicenseEnum::CC_BY_SA;
    $request->trackDataRequest->trackPermalink = 'molestias';
    $request->trackDataRequest->trackPurchaseUrl = 'excepturi';
    $request->trackDataRequest->trackRelease = 'pariatur';
    $request->trackDataRequest->trackReleaseDate = 'modi';
    $request->trackDataRequest->trackSharing = TrackDataRequestTrackSharingEnum::PRIVATE;
    $request->trackDataRequest->trackStreamable = false;
    $request->trackDataRequest->trackTagList = 'rem';
    $request->trackDataRequest->trackTitle = 'voluptates';
    $request->trackId = 93940;

    $requestSecurity = new PutTracksTrackIdMultipartSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->tracks->putTracksTrackIdMultipart($request, $requestSecurity);

    if ($response->track !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
