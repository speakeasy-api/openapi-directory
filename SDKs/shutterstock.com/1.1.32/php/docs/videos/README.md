# videos

### Available Operations

* [addVideoCollectionItems](#addvideocollectionitems) - Add videos to collections
* [createVideoCollection](#createvideocollection) - Create video collections
* [deleteVideoCollection](#deletevideocollection) - Delete video collections
* [deleteVideoCollectionItems](#deletevideocollectionitems) - Remove videos from collections
* [downloadVideos](#downloadvideos) - Download videos
* [findSimilarVideos](#findsimilarvideos) - List similar videos
* [getFeaturedVideoCollection](#getfeaturedvideocollection) - Get the details of featured video collections
* [getFeaturedVideoCollectionItems](#getfeaturedvideocollectionitems) - Get the contents of featured video collections
* [getFeaturedVideoCollectionList](#getfeaturedvideocollectionlist) - List featured video collections
* [getUpdatedVideos](#getupdatedvideos) - List updated videos
* [getVideo](#getvideo) - Get details about videos
* [getVideoCollection](#getvideocollection) - Get the details of video collections
* [getVideoCollectionItems](#getvideocollectionitems) - Get the contents of video collections
* [getVideoCollectionList](#getvideocollectionlist) - List video collections
* [getVideoLicenseList](#getvideolicenselist) - List video licenses
* [getVideoList](#getvideolist) - List videos
* [getVideoSuggestions](#getvideosuggestions) - Get suggestions for a search term
* [licenseVideos](#licensevideos) - License videos
* [listVideoCategories](#listvideocategories) - List video categories
* [renameVideoCollection](#renamevideocollection) - Rename video collections
* [searchVideos](#searchvideos) - Search for videos

## addVideoCollectionItems

This endpoint adds one or more videos to a collection by video IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddVideoCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItem;
use \OpenAPI\OpenAPI\Models\Operations\AddVideoCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddVideoCollectionItemsRequest();
    $request->collectionItemRequest = new CollectionItemRequest();
    $request->collectionItemRequest->items = [
        new CollectionItem(),
    ];
    $request->id = '1aefb9f5-8c4d-486e-a8e4-be056013f59d';

    $requestSecurity = new AddVideoCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->addVideoCollectionItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVideoCollection

This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CollectionCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVideoCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionCreateRequest();
    $request->name = 'Claude Hickle';

    $requestSecurity = new CreateVideoCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->createVideoCollection($request, $requestSecurity);

    if ($response->collectionCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVideoCollection

This endpoint deletes a collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVideoCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVideoCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVideoCollectionRequest();
    $request->id = '59ecfef6-6ef1-4caa-b383-c2beb477373c';

    $requestSecurity = new DeleteVideoCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->deleteVideoCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVideoCollectionItems

This endpoint removes one or more videos from a collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVideoCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVideoCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVideoCollectionItemsRequest();
    $request->id = '8d72f64d-1db1-4f2c-8310-661e96349e1c';
    $request->itemId = [
        'iste',
        'itaque',
        'alias',
        'nisi',
    ];

    $requestSecurity = new DeleteVideoCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->deleteVideoCollectionItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadVideos

This endpoint redownloads videos that you have already received a license for.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DownloadVideosRequest;
use \OpenAPI\OpenAPI\Models\Shared\RedownloadVideo;
use \OpenAPI\OpenAPI\Models\Shared\Cookie;
use \OpenAPI\OpenAPI\Models\Shared\RedownloadVideoSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DownloadVideosSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadVideosRequest();
    $request->redownloadVideo = new RedownloadVideo();
    $request->redownloadVideo->authCookie = new Cookie();
    $request->redownloadVideo->authCookie->name = 'Jacob Pacocha';
    $request->redownloadVideo->authCookie->value = 'iusto';
    $request->redownloadVideo->showModal = false;
    $request->redownloadVideo->size = RedownloadVideoSizeEnum::WEB;
    $request->redownloadVideo->verificationCode = 'doloremque';
    $request->id = '0ae6b6bc-9b8f-4759-aac5-5a9741d31135';

    $requestSecurity = new DownloadVideosSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->downloadVideos($request, $requestSecurity);

    if ($response->url !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findSimilarVideos

This endpoint searches for videos that are similar to a video that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindSimilarVideosRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindSimilarVideosViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindSimilarVideosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindSimilarVideosRequest();
    $request->id = 'qui';
    $request->language = LanguageEnum::CS;
    $request->page = 611328;
    $request->perPage = 403026;
    $request->view = FindSimilarVideosViewEnum::MINIMAL;

    $requestSecurity = new FindSimilarVideosSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->findSimilarVideos($request, $requestSecurity);

    if ($response->videoSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeaturedVideoCollection

This endpoint gets more detailed information about a featured video collection, including its cover video and timestamps for its creation and most recent update. To get the videos, use `GET /v2/videos/collections/featured/{id}/items`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedVideoCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedVideoCollectionEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedVideoCollectionSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeaturedVideoCollectionRequest();
    $request->embed = GetFeaturedVideoCollectionEmbedEnum::SHARE_URL;
    $request->id = 'bb8a7202-6114-435e-939d-bc2259b1abda';

    $requestSecurity = new GetFeaturedVideoCollectionSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->getFeaturedVideoCollection($request, $requestSecurity);

    if ($response->featuredCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeaturedVideoCollectionItems

This endpoint lists the IDs of videos in a featured collection and the date that each was added.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedVideoCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedVideoCollectionItemsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeaturedVideoCollectionItemsRequest();
    $request->id = '8c070e10-84cb-4067-ad1a-d879eeb9665b';
    $request->page = 515638;
    $request->perPage = 357207;

    $requestSecurity = new GetFeaturedVideoCollectionItemsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->getFeaturedVideoCollectionItems($request, $requestSecurity);

    if ($response->videoCollectionItemDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeaturedVideoCollectionList

This endpoint lists featured video collections and a name and cover video for each collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedVideoCollectionListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedVideoCollectionListEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedVideoCollectionListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeaturedVideoCollectionListRequest();
    $request->embed = GetFeaturedVideoCollectionListEmbedEnum::SHARE_URL;

    $requestSecurity = new GetFeaturedVideoCollectionListSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->getFeaturedVideoCollectionList($request, $requestSecurity);

    if ($response->featuredCollectionDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdatedVideos

This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedVideosRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedVideosSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedVideosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUpdatedVideosRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2020-01-31');
    $request->interval = 'cum';
    $request->page = 872303;
    $request->perPage = 5152;
    $request->sort = GetUpdatedVideosSortEnum::NEWEST;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2021-08-19');

    $requestSecurity = new GetUpdatedVideosSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->getUpdatedVideos($request, $requestSecurity);

    if ($response->updatedMediaDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVideo

This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVideoRequest();
    $request->id = 'repudiandae';
    $request->language = LanguageEnum::CS;
    $request->searchId = 'accusantium';
    $request->view = GetVideoViewEnum::FULL;

    $requestSecurity = new GetVideoSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->getVideo($request, $requestSecurity);

    if ($response->video !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVideoCollection

This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoCollectionEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVideoCollectionRequest();
    $request->embed = [
        GetVideoCollectionEmbedEnum::SHARE_CODE,
        GetVideoCollectionEmbedEnum::SHARE_URL,
        GetVideoCollectionEmbedEnum::SHARE_CODE,
        GetVideoCollectionEmbedEnum::SHARE_URL,
    ];
    $request->id = '2259e3ea-4b51-497f-9244-3da7ce52b895';
    $request->shareCode = 'placeat';

    $requestSecurity = new GetVideoCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->getVideoCollection($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVideoCollectionItems

This endpoint lists the IDs of videos in a collection and the date that each was added.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoCollectionItemsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVideoCollectionItemsRequest();
    $request->id = '537c6454-efb0-4b34-896c-3ca5acfbe2fd';
    $request->page = 362888;
    $request->perPage = 441321;
    $request->shareCode = 'aperiam';
    $request->sort = GetVideoCollectionItemsSortEnum::NEWEST;

    $requestSecurity = new GetVideoCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->getVideoCollectionItems($request, $requestSecurity);

    if ($response->collectionItemDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVideoCollectionList

This endpoint lists your collections of videos and their basic attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoCollectionListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoCollectionListEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoCollectionListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVideoCollectionListRequest();
    $request->embed = [
        GetVideoCollectionListEmbedEnum::SHARE_CODE,
        GetVideoCollectionListEmbedEnum::SHARE_CODE,
    ];
    $request->page = 567846;
    $request->perPage = 172195;

    $requestSecurity = new GetVideoCollectionListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->getVideoCollectionList($request, $requestSecurity);

    if ($response->collectionDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVideoLicenseList

This endpoint lists existing licenses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoLicenseListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoLicenseListDownloadAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoLicenseListSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoLicenseListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVideoLicenseListRequest();
    $request->downloadAvailability = GetVideoLicenseListDownloadAvailabilityEnum::DOWNLOADABLE;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-03T03:56:48.745Z');
    $request->license = 'voluptate';
    $request->page = 866789;
    $request->perPage = 932666;
    $request->sort = GetVideoLicenseListSortEnum::OLDEST;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-18T10:28:23.665Z');
    $request->teamHistory = false;
    $request->username = 'Elvie_Johnson69';
    $request->videoId = 'exercitationem';

    $requestSecurity = new GetVideoLicenseListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->getVideoLicenseList($request, $requestSecurity);

    if ($response->downloadHistoryDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVideoList

This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVideoListRequest();
    $request->id = [
        'dolorem',
        'modi',
    ];
    $request->searchId = 'ipsa';
    $request->view = GetVideoListViewEnum::FULL;

    $requestSecurity = new GetVideoListSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->getVideoList($request, $requestSecurity);

    if ($response->videoDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVideoSuggestions

This endpoint provides autocomplete suggestions for partial search terms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoSuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVideoSuggestionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVideoSuggestionsRequest();
    $request->limit = 876027;
    $request->query = 'sequi';

    $requestSecurity = new GetVideoSuggestionsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->getVideoSuggestions($request, $requestSecurity);

    if ($response->suggestions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licenseVideos

This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicenseVideosRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseVideoRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseVideo;
use \OpenAPI\OpenAPI\Models\Shared\Cookie;
use \OpenAPI\OpenAPI\Models\Shared\LicenseVideoSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicenseVideosSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicenseVideosSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicenseVideosRequest();
    $request->licenseVideoRequest = new LicenseVideoRequest();
    $request->licenseVideoRequest->videos = [
        new LicenseVideo(),
        new LicenseVideo(),
        new LicenseVideo(),
        new LicenseVideo(),
    ];
    $request->searchId = 'cum';
    $request->size = LicenseVideosSizeEnum::WEB;
    $request->subscriptionId = 'earum';

    $requestSecurity = new LicenseVideosSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->licenseVideos($request, $requestSecurity);

    if ($response->licenseVideoResultDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVideoCategories

This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVideoCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListVideoCategoriesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVideoCategoriesRequest();
    $request->language = LanguageEnum::CS;

    $requestSecurity = new ListVideoCategoriesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->listVideoCategories($request, $requestSecurity);

    if ($response->categoryDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renameVideoCollection

This endpoint sets a new name for a collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RenameVideoCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenameVideoCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenameVideoCollectionRequest();
    $request->collectionUpdateRequest = new CollectionUpdateRequest();
    $request->collectionUpdateRequest->name = 'Madeline Daniel Sr.';
    $request->id = 'eb07f116-db99-4545-bc95-fa88970e189d';

    $requestSecurity = new RenameVideoCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->renameVideoCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchVideos

This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosAspectRatioEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosLicenseEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosPeopleAgeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosPeopleEthnicityEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosPeopleGenderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchVideosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchVideosRequest();
    $request->addedDate = DateTime::createFromFormat('Y-m-d', '2021-07-20');
    $request->addedDateEnd = DateTime::createFromFormat('Y-m-d', '2022-12-17');
    $request->addedDateStart = DateTime::createFromFormat('Y-m-d', '2020-09-06');
    $request->aspectRatio = SearchVideosAspectRatioEnum::NONSTANDARD;
    $request->category = 'ipsum';
    $request->contributor = [
        'saepe',
    ];
    $request->contributorCountry = [
        'doloremque',
        'quis',
        'veniam',
    ];
    $request->duration = 727481;
    $request->durationFrom = 99733;
    $request->durationTo = 584593;
    $request->fps = 4755.89;
    $request->fpsFrom = 7566.54;
    $request->fpsTo = 8200.23;
    $request->keywordSafeSearch = false;
    $request->language = LanguageEnum::CS;
    $request->license = [
        SearchVideosLicenseEnum::COMMERCIAL,
        SearchVideosLicenseEnum::EDITORIAL,
    ];
    $request->model = [
        'asperiores',
    ];
    $request->page = 330267;
    $request->peopleAge = SearchVideosPeopleAgeEnum::CHILDREN;
    $request->peopleEthnicity = [
        SearchVideosPeopleEthnicityEnum::HISPANIC,
        SearchVideosPeopleEthnicityEnum::BLACK,
        SearchVideosPeopleEthnicityEnum::SOUTH_ASIAN,
        SearchVideosPeopleEthnicityEnum::BRAZILIAN,
    ];
    $request->peopleGender = SearchVideosPeopleGenderEnum::FEMALE;
    $request->peopleModelReleased = false;
    $request->peopleNumber = 68852;
    $request->perPage = 242637;
    $request->query = 'facilis';
    $request->resolution = SearchVideosResolutionEnum::HIGH_DEFINITION;
    $request->safe = false;
    $request->sort = SearchVideosSortEnum::POPULAR;
    $request->view = SearchVideosViewEnum::FULL;

    $requestSecurity = new SearchVideosSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->videos->searchVideos($request, $requestSecurity);

    if ($response->videoSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
