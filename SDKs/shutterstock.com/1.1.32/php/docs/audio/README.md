# audio

### Available Operations

* [addTrackCollectionItems](#addtrackcollectionitems) - Add audio tracks to collections
* [createTrackCollection](#createtrackcollection) - Create audio collections
* [deleteTrackCollection](#deletetrackcollection) - Delete audio collections
* [deleteTrackCollectionItems](#deletetrackcollectionitems) - Remove audio tracks from collections
* [downloadTracks](#downloadtracks) - Download audio tracks
* [getTrack](#gettrack) - Get details about audio tracks
* [getTrackCollection](#gettrackcollection) - Get the details of audio collections
* [getTrackCollectionItems](#gettrackcollectionitems) - Get the contents of audio collections
* [getTrackCollectionList](#gettrackcollectionlist) - List audio collections
* [getTrackLicenseList](#gettracklicenselist) - List audio licenses
* [getTrackList](#gettracklist) - List audio tracks
* [licenseTrack](#licensetrack) - License audio tracks
* [listGenres](#listgenres) - List audio genres
* [listInstruments](#listinstruments) - List audio instruments
* [listMoods](#listmoods) - List audio moods
* [renameTrackCollection](#renametrackcollection) - Rename audio collections
* [searchTracks](#searchtracks) - Search for tracks

## addTrackCollectionItems

This endpoint adds one or more tracks to a collection by track IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddTrackCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItem;
use \OpenAPI\OpenAPI\Models\Operations\AddTrackCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTrackCollectionItemsRequest();
    $request->collectionItemRequest = new CollectionItemRequest();
    $request->collectionItemRequest->items = [
        new CollectionItem(),
    ];
    $request->id = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';

    $requestSecurity = new AddTrackCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->addTrackCollectionItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrackCollection

This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CollectionCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrackCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionCreateRequest();
    $request->name = 'Edna Mante II';

    $requestSecurity = new CreateTrackCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->createTrackCollection($request, $requestSecurity);

    if ($response->collectionCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrackCollection

This endpoint deletes a collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrackCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrackCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrackCollectionRequest();
    $request->id = '929396fe-a759-46eb-90fa-aa2352c59559';

    $requestSecurity = new DeleteTrackCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->deleteTrackCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrackCollectionItems

This endpoint removes one or more tracks from a collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrackCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrackCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrackCollectionItemsRequest();
    $request->id = '07aff1a3-a2fa-4946-b739-251aa52c3f5a';
    $request->itemId = [
        'aut',
        'quasi',
        'error',
        'temporibus',
    ];

    $requestSecurity = new DeleteTrackCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->deleteTrackCollectionItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadTracks

This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DownloadTracksRequest;
use \OpenAPI\OpenAPI\Models\Operations\DownloadTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadTracksRequest();
    $request->id = 'a1ffe78f-097b-4007-8f15-471b5e6e13b9';

    $requestSecurity = new DownloadTracksSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->downloadTracks($request, $requestSecurity);

    if ($response->audioUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrack

This endpoint shows information about a track, including its genres, instruments, and other attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackRequest();
    $request->id = 566602;
    $request->searchId = 'pariatur';
    $request->view = GetTrackViewEnum::MINIMAL;

    $requestSecurity = new GetTrackSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->audio->getTrack($request, $requestSecurity);

    if ($response->audio !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrackCollection

This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackCollectionEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackCollectionRequest();
    $request->embed = [
        GetTrackCollectionEmbedEnum::SHARE_URL,
        GetTrackCollectionEmbedEnum::SHARE_URL,
        GetTrackCollectionEmbedEnum::SHARE_CODE,
    ];
    $request->id = 'e91e450a-d2ab-4d44-a698-02d502a94bb4';
    $request->shareCode = 'delectus';

    $requestSecurity = new GetTrackCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->getTrackCollection($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrackCollectionItems

This endpoint lists the IDs of tracks in a collection and the date that each was added.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackCollectionItemsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackCollectionItemsRequest();
    $request->id = '63c969e9-a3ef-4a77-9fb1-4cd66ae395ef';
    $request->page = 692532;
    $request->perPage = 588465;
    $request->shareCode = 'nam';
    $request->sort = GetTrackCollectionItemsSortEnum::OLDEST;

    $requestSecurity = new GetTrackCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->getTrackCollectionItems($request, $requestSecurity);

    if ($response->collectionItemDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrackCollectionList

This endpoint lists your collections of audio tracks and their basic attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackCollectionListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackCollectionListEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackCollectionListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackCollectionListRequest();
    $request->embed = [
        GetTrackCollectionListEmbedEnum::SHARE_URL,
        GetTrackCollectionListEmbedEnum::SHARE_URL,
        GetTrackCollectionListEmbedEnum::SHARE_CODE,
    ];
    $request->page = 643990;
    $request->perPage = 394869;

    $requestSecurity = new GetTrackCollectionListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->getTrackCollectionList($request, $requestSecurity);

    if ($response->collectionDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrackLicenseList

This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackLicenseListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackLicenseListDownloadAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackLicenseListSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackLicenseListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackLicenseListRequest();
    $request->audioId = 'vel';
    $request->downloadAvailability = GetTrackLicenseListDownloadAvailabilityEnum::DOWNLOADABLE;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T08:19:15.156Z');
    $request->license = 'perferendis';
    $request->page = 470132;
    $request->perPage = 301575;
    $request->sort = GetTrackLicenseListSortEnum::OLDEST;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-04T18:23:50.695Z');
    $request->teamHistory = false;
    $request->username = 'Effie_Hoppe';

    $requestSecurity = new GetTrackLicenseListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->getTrackLicenseList($request, $requestSecurity);

    if ($response->downloadHistoryDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrackList

This endpoint lists information about one or more audio tracks, including the description and publication date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackListRequest();
    $request->id = [
        'vero',
        'aspernatur',
    ];
    $request->searchId = 'architecto';
    $request->view = GetTrackListViewEnum::MINIMAL;

    $requestSecurity = new GetTrackListSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->audio->getTrackList($request, $requestSecurity);

    if ($response->audioDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licenseTrack

This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicenseTrackRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseAudioRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseAudio;
use \OpenAPI\OpenAPI\Models\Shared\LicenseAudioLicenseEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicenseTrackLicenseEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicenseTrackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicenseTrackRequest();
    $request->licenseAudioRequest = new LicenseAudioRequest();
    $request->licenseAudioRequest->audio = [
        new LicenseAudio(),
    ];
    $request->license = LicenseTrackLicenseEnum::PREMIER_MUSIC_PRO;
    $request->searchId = 'ullam';

    $requestSecurity = new LicenseTrackSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->licenseTrack($request, $requestSecurity);

    if ($response->licenseAudioResultDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGenres

This endpoint returns a list of all audio genres.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListGenresRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGenresSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGenresRequest();
    $request->language = 'provident';

    $requestSecurity = new ListGenresSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->audio->listGenres($request, $requestSecurity);

    if ($response->genreList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInstruments

This endpoint returns a list of all audio instruments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInstrumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInstrumentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInstrumentsRequest();
    $request->language = 'quos';

    $requestSecurity = new ListInstrumentsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->audio->listInstruments($request, $requestSecurity);

    if ($response->instrumentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMoods

This endpoint returns a list of all audio moods.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMoodsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMoodsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMoodsRequest();
    $request->language = 'sint';

    $requestSecurity = new ListMoodsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->audio->listMoods($request, $requestSecurity);

    if ($response->moodList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renameTrackCollection

This endpoint sets a new name for a collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RenameTrackCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenameTrackCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenameTrackCollectionRequest();
    $request->collectionUpdateRequest = new CollectionUpdateRequest();
    $request->collectionUpdateRequest->name = 'Angie Wisozk';
    $request->id = '63e2516f-e4c8-4b71-9e5b-7fd2ed028921';

    $requestSecurity = new RenameTrackCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->renameTrackCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchTracks

This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTracksRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchTracksLibraryEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchTracksSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchTracksSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchTracksViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchTracksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTracksRequest();
    $request->artists = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->bpm = 569101;
    $request->bpmFrom = 139972;
    $request->bpmTo = 407183;
    $request->duration = 33222;
    $request->durationFrom = 69167;
    $request->durationTo = 982575;
    $request->fields = 'quidem';
    $request->genre = [
        'voluptate',
        'autem',
    ];
    $request->instruments = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->isInstrumental = false;
    $request->language = 'voluptatibus';
    $request->library = SearchTracksLibraryEnum::SHUTTERSTOCK;
    $request->moods = [
        'amet',
        'aut',
        'cumque',
        'corporis',
    ];
    $request->page = 944124;
    $request->perPage = 729991;
    $request->query = 'nobis';
    $request->sort = SearchTracksSortEnum::RANKING_ALL;
    $request->sortOrder = SearchTracksSortOrderEnum::ASC;
    $request->view = SearchTracksViewEnum::FULL;
    $request->vocalDescription = 'dignissimos';

    $requestSecurity = new SearchTracksSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->audio->searchTracks($request, $requestSecurity);

    if ($response->audioSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
