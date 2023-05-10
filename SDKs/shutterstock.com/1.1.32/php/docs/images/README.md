# images

### Available Operations

* [addImageCollectionItems](#addimagecollectionitems) - Add images to collections
* [bulkSearchImages](#bulksearchimages) - Run multiple image searches
* [createImageCollection](#createimagecollection) - Create image collections
* [deleteImageCollection](#deleteimagecollection) - Delete image collections
* [deleteImageCollectionItems](#deleteimagecollectionitems) - Remove images from collections
* [downloadImage](#downloadimage) - Download images
* [getFeaturedImageCollection](#getfeaturedimagecollection) - Get the details of featured image collections
* [getFeaturedImageCollectionItems](#getfeaturedimagecollectionitems) - Get the contents of featured image collections
* [getFeaturedImageCollectionList](#getfeaturedimagecollectionlist) - List featured image collections
* [getImage](#getimage) - Get details about images
* [getImageCollection](#getimagecollection) - Get the details of image collections
* [getImageCollectionItems](#getimagecollectionitems) - Get the contents of image collections
* [getImageCollectionList](#getimagecollectionlist) - List image collections
* [getImageKeywordSuggestions](#getimagekeywordsuggestions) - Get keywords from text
* [getImageLicenseList](#getimagelicenselist) - List image licenses
* [getImageList](#getimagelist) - List images
* [getImageRecommendations](#getimagerecommendations) - List recommended images
* [getImageSuggestions](#getimagesuggestions) - Get suggestions for a search term
* [getUpdatedImages](#getupdatedimages) - List updated images
* [licenseImages](#licenseimages) - License images
* [listImageCategories](#listimagecategories) - List image categories
* [listSimilarImages](#listsimilarimages) - List similar images
* [renameImageCollection](#renameimagecollection) - Rename image collections
* [searchImages](#searchimages) - Search for images

## addImageCollectionItems

This endpoint adds one or more images to a collection by image IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddImageCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItem;
use \OpenAPI\OpenAPI\Models\Operations\AddImageCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddImageCollectionItemsRequest();
    $request->collectionItemRequest = new CollectionItemRequest();
    $request->collectionItemRequest->items = [
        new CollectionItem(),
        new CollectionItem(),
    ];
    $request->id = 'dbb675fd-5e60-4b37-9ed4-f6fbee41f333';

    $requestSecurity = new AddImageCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->addImageCollectionItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkSearchImages

This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchImage;
use \OpenAPI\OpenAPI\Models\Shared\SearchImageImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchImageLicenseEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchImageOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchImagePeopleAgeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchImagePeopleEthnicityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchImagePeopleGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchImageSortEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchImageViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesLicenseEnum;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesOrientationEnum;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesPeopleAgeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesPeopleEthnicityEnum;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesPeopleGenderEnum;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BulkSearchImagesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkSearchImagesRequest();
    $request->requestBody = [
        new SearchImage(),
    ];
    $request->addedDate = DateTime::createFromFormat('Y-m-d', '2022-01-18');
    $request->addedDateEnd = DateTime::createFromFormat('Y-m-d', '2022-04-20');
    $request->addedDateStart = DateTime::createFromFormat('Y-m-d', '2022-04-24');
    $request->aspectRatio = 3852.37;
    $request->aspectRatioMax = 583.56;
    $request->aspectRatioMin = 9167.27;
    $request->category = 'libero';
    $request->color = 'vitae';
    $request->contributor = [
        'similique',
        'tempora',
        'aspernatur',
        'voluptas',
    ];
    $request->contributorCountry = [
        'minima',
        'nobis',
    ];
    $request->fields = 'dolorum';
    $request->height = 237807;
    $request->heightFrom = 795535;
    $request->heightTo = 171853;
    $request->imageType = [
        BulkSearchImagesImageTypeEnum::ILLUSTRATION,
        BulkSearchImagesImageTypeEnum::PHOTO,
        BulkSearchImagesImageTypeEnum::PHOTO,
    ];
    $request->keywordSafeSearch = false;
    $request->language = LanguageEnum::CS;
    $request->license = [
        BulkSearchImagesLicenseEnum::ENHANCED,
        BulkSearchImagesLicenseEnum::EDITORIAL,
        BulkSearchImagesLicenseEnum::COMMERCIAL,
        BulkSearchImagesLicenseEnum::ENHANCED,
    ];
    $request->model = [
        'quas',
        'hic',
        'nesciunt',
    ];
    $request->orientation = BulkSearchImagesOrientationEnum::VERTICAL;
    $request->page = 548519;
    $request->peopleAge = BulkSearchImagesPeopleAgeEnum::SIXTYS;
    $request->peopleEthnicity = [
        BulkSearchImagesPeopleEthnicityEnum::NOT_SOUTHEAST_ASIAN,
        BulkSearchImagesPeopleEthnicityEnum::NATIVE_AMERICAN,
        BulkSearchImagesPeopleEthnicityEnum::NOT_HISPANIC,
    ];
    $request->peopleGender = BulkSearchImagesPeopleGenderEnum::MALE;
    $request->peopleModelReleased = false;
    $request->peopleNumber = 699575;
    $request->perPage = 148829;
    $request->region = '33.254.181.115';
    $request->safe = false;
    $request->sort = BulkSearchImagesSortEnum::RELEVANCE;
    $request->spellcheckQuery = false;
    $request->view = BulkSearchImagesViewEnum::MINIMAL;
    $request->width = 611749;
    $request->widthFrom = 292794;
    $request->widthTo = 671907;

    $requestSecurity = new BulkSearchImagesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->bulkSearchImages($request, $requestSecurity);

    if ($response->bulkImageSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageCollection

This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CollectionCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionCreateRequest();
    $request->name = 'Pearl Johnson';

    $requestSecurity = new CreateImageCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->createImageCollection($request, $requestSecurity);

    if ($response->collectionCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImageCollection

This endpoint deletes an image collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageCollectionRequest();
    $request->id = '6916fe1f-08f4-4294-a369-8f447f603e8b';

    $requestSecurity = new DeleteImageCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->deleteImageCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImageCollectionItems

This endpoint removes one or more images from a collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageCollectionItemsRequest();
    $request->id = '445e80ca-55ef-4d20-a457-e1858b6a89fb';
    $request->itemId = [
        'neque',
        'dolorum',
        'nostrum',
        'officia',
    ];

    $requestSecurity = new DeleteImageCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->deleteImageCollectionItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadImage

This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DownloadImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\RedownloadImage;
use \OpenAPI\OpenAPI\Models\Shared\Cookie;
use \OpenAPI\OpenAPI\Models\Shared\RedownloadImageSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DownloadImageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadImageRequest();
    $request->redownloadImage = new RedownloadImage();
    $request->redownloadImage->authCookie = new Cookie();
    $request->redownloadImage->authCookie->name = 'Byron Thiel';
    $request->redownloadImage->authCookie->value = 'fugit';
    $request->redownloadImage->showModal = false;
    $request->redownloadImage->size = RedownloadImageSizeEnum::MEDIUM;
    $request->redownloadImage->verificationCode = 'fugiat';
    $request->id = '0ab40750-88e5-4186-a065-e904f3b1194b';

    $requestSecurity = new DownloadImageSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->downloadImage($request, $requestSecurity);

    if ($response->url !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeaturedImageCollection

This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionAssetHintEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeaturedImageCollectionRequest();
    $request->assetHint = GetFeaturedImageCollectionAssetHintEnum::TWOX;
    $request->embed = GetFeaturedImageCollectionEmbedEnum::SHARE_URL;
    $request->id = 'abf603a7-9f9d-4fe0-ab7d-a8a50ce187f8';

    $requestSecurity = new GetFeaturedImageCollectionSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->getFeaturedImageCollection($request, $requestSecurity);

    if ($response->featuredCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeaturedImageCollectionItems

This endpoint lists the IDs of images in a featured collection and the date that each was added.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionItemsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeaturedImageCollectionItemsRequest();
    $request->id = '6bc173d6-89ee-4e95-a6f8-d986e881ead4';
    $request->page = 968287;
    $request->perPage = 42976;

    $requestSecurity = new GetFeaturedImageCollectionItemsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->getFeaturedImageCollectionItems($request, $requestSecurity);

    if ($response->collectionItemDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeaturedImageCollectionList

This endpoint lists featured collections of specific types and a name and cover image for each collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionListAssetHintEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionListEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionListTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturedImageCollectionListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeaturedImageCollectionListRequest();
    $request->assetHint = GetFeaturedImageCollectionListAssetHintEnum::TWOX;
    $request->embed = GetFeaturedImageCollectionListEmbedEnum::SHARE_URL;
    $request->type = [
        GetFeaturedImageCollectionListTypeEnum::PHOTO,
    ];

    $requestSecurity = new GetFeaturedImageCollectionListSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->getFeaturedImageCollectionList($request, $requestSecurity);

    if ($response->featuredCollectionDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImage

This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImageViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImageSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageRequest();
    $request->id = 'beatae';
    $request->language = LanguageEnum::CS;
    $request->searchId = 'dolores';
    $request->view = GetImageViewEnum::MINIMAL;

    $requestSecurity = new GetImageSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->getImage($request, $requestSecurity);

    if ($response->image !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageCollection

This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImageCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImageCollectionEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImageCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageCollectionRequest();
    $request->embed = [
        GetImageCollectionEmbedEnum::SHARE_CODE,
        GetImageCollectionEmbedEnum::SHARE_URL,
    ];
    $request->id = '94e29e97-3e92-42a5-ba15-be3e060807e2';
    $request->shareCode = 'cum';

    $requestSecurity = new GetImageCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->getImageCollection($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageCollectionItems

This endpoint lists the IDs of images in a collection and the date that each was added.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImageCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImageCollectionItemsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImageCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageCollectionItemsRequest();
    $request->id = '6e3ab884-5f05-497a-a0ff-2a54a31e9476';
    $request->page = 284000;
    $request->perPage = 633062;
    $request->shareCode = 'adipisci';
    $request->sort = GetImageCollectionItemsSortEnum::OLDEST;

    $requestSecurity = new GetImageCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->getImageCollectionItems($request, $requestSecurity);

    if ($response->collectionItemDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageCollectionList

This endpoint lists your collections of images and their basic attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImageCollectionListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImageCollectionListEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImageCollectionListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageCollectionListRequest();
    $request->embed = [
        GetImageCollectionListEmbedEnum::SHARE_CODE,
        GetImageCollectionListEmbedEnum::SHARE_CODE,
        GetImageCollectionListEmbedEnum::SHARE_URL,
    ];
    $request->page = 456520;
    $request->perPage = 592081;

    $requestSecurity = new GetImageCollectionListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->getImageCollectionList($request, $requestSecurity);

    if ($response->collectionDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageKeywordSuggestions

This endpoint returns up to 10 important keywords from a block of plain text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImageKeywordSuggestionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchEntitiesRequest();
    $request->text = 'quis';

    $requestSecurity = new GetImageKeywordSuggestionsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->getImageKeywordSuggestions($request, $requestSecurity);

    if ($response->searchEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageLicenseList

This endpoint lists existing licenses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImageLicenseListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImageLicenseListDownloadAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImageLicenseListSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImageLicenseListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageLicenseListRequest();
    $request->downloadAvailability = GetImageLicenseListDownloadAvailabilityEnum::DOWNLOADABLE;
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-22T21:44:03.640Z');
    $request->imageId = 'aspernatur';
    $request->license = 'ullam';
    $request->page = 96804;
    $request->perPage = 657020;
    $request->sort = GetImageLicenseListSortEnum::NEWEST;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-26T13:12:31.139Z');
    $request->teamHistory = false;
    $request->username = 'Reina.Okuneva';

    $requestSecurity = new GetImageLicenseListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->getImageLicenseList($request, $requestSecurity);

    if ($response->downloadHistoryDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageList

This endpoint lists information about one or more images, including the available sizes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImageListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImageListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImageListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageListRequest();
    $request->id = [
        'repellat',
    ];
    $request->searchId = 'doloribus';
    $request->view = GetImageListViewEnum::MINIMAL;

    $requestSecurity = new GetImageListSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->getImageList($request, $requestSecurity);

    if ($response->imageDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageRecommendations

This endpoint returns images that customers put in the same collection as the specified image IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImageRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImageRecommendationsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageRecommendationsRequest();
    $request->id = [
        'nam',
        'earum',
    ];
    $request->maxItems = 637583;
    $request->safe = false;

    $requestSecurity = new GetImageRecommendationsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->getImageRecommendations($request, $requestSecurity);

    if ($response->recommendationDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageSuggestions

This endpoint provides autocomplete suggestions for partial search terms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImageSuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImageSuggestionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageSuggestionsRequest();
    $request->limit = 672041;
    $request->query = 'placeat';

    $requestSecurity = new GetImageSuggestionsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->getImageSuggestions($request, $requestSecurity);

    if ($response->suggestions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdatedImages

This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedImagesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedImagesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatedImagesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUpdatedImagesRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-01-09');
    $request->interval = 'molestias';
    $request->page = 889794;
    $request->perPage = 956933;
    $request->sort = GetUpdatedImagesSortEnum::OLDEST;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-21');
    $request->type = [
        GetUpdatedImagesTypeEnum::DELETION,
        GetUpdatedImagesTypeEnum::ADDITION,
    ];

    $requestSecurity = new GetUpdatedImagesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->getUpdatedImages($request, $requestSecurity);

    if ($response->updatedMediaDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licenseImages

This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicenseImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\LicenseImagesFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicenseImagesSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicenseImagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicenseImagesRequest();
    $request->licenseImageRequest = new LicenseImageRequest();
    $request->licenseImageRequest->images = [
        new LicenseImageVector(),
    ];
    $request->format = LicenseImagesFormatEnum::EPS;
    $request->searchId = 'perferendis';
    $request->size = LicenseImagesSizeEnum::MEDIUM;
    $request->subscriptionId = 'aspernatur';

    $requestSecurity = new LicenseImagesSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->licenseImages($request, $requestSecurity);

    if ($response->licenseImageResultDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImageCategories

This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListImageCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListImageCategoriesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImageCategoriesRequest();
    $request->language = LanguageEnum::CS;

    $requestSecurity = new ListImageCategoriesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->listImageCategories($request, $requestSecurity);

    if ($response->categoryDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSimilarImages

This endpoint returns images that are visually similar to an image that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSimilarImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSimilarImagesViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSimilarImagesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSimilarImagesRequest();
    $request->id = '648dc2f6-1519-49eb-bd0e-9fe6c632ca3a';
    $request->language = LanguageEnum::CS;
    $request->page = 898760;
    $request->perPage = 862063;
    $request->view = ListSimilarImagesViewEnum::MINIMAL;

    $requestSecurity = new ListSimilarImagesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->listSimilarImages($request, $requestSecurity);

    if ($response->imageSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renameImageCollection

This endpoint sets a new name for an image collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RenameImageCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenameImageCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenameImageCollectionRequest();
    $request->collectionUpdateRequest = new CollectionUpdateRequest();
    $request->collectionUpdateRequest->name = 'Catherine Kuphal';
    $request->id = '6312fde0-4771-4778-bf61-d017476360a1';

    $requestSecurity = new RenameImageCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->renameImageCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchImages

This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesAiIndustryEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesAiObjectiveEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesLicenseEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesOrientationEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesPeopleAgeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesPeopleEthnicityEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesPeopleGenderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchImagesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchImagesRequest();
    $request->addedDate = DateTime::createFromFormat('Y-m-d', '2022-02-22');
    $request->addedDateEnd = DateTime::createFromFormat('Y-m-d', '2022-03-15');
    $request->addedDateStart = DateTime::createFromFormat('Y-m-d', '2022-03-28');
    $request->aiIndustry = SearchImagesAiIndustryEnum::FINANCE;
    $request->aiLabelsLimit = 21973;
    $request->aiObjective = SearchImagesAiObjectiveEnum::TRAFFIC;
    $request->aiSearch = false;
    $request->aspectRatio = 3747.53;
    $request->aspectRatioMax = 6145.28;
    $request->aspectRatioMin = 6616.07;
    $request->category = 'ab';
    $request->color = 'error';
    $request->contributor = [
        'voluptates',
        'mollitia',
        'laborum',
        'libero',
    ];
    $request->contributorCountry = [
        'enim',
        'vitae',
        'repellendus',
    ];
    $request->fields = 'ex';
    $request->height = 775803;
    $request->heightFrom = 405373;
    $request->heightTo = 281153;
    $request->imageType = [
        SearchImagesImageTypeEnum::VECTOR,
        SearchImagesImageTypeEnum::PHOTO,
    ];
    $request->keywordSafeSearch = false;
    $request->language = LanguageEnum::CS;
    $request->license = [
        SearchImagesLicenseEnum::ENHANCED,
        SearchImagesLicenseEnum::EDITORIAL,
        SearchImagesLicenseEnum::COMMERCIAL,
    ];
    $request->model = [
        'omnis',
        'veritatis',
        'rerum',
    ];
    $request->orientation = SearchImagesOrientationEnum::VERTICAL;
    $request->page = 634786;
    $request->peopleAge = SearchImagesPeopleAgeEnum::INFANTS;
    $request->peopleEthnicity = [
        SearchImagesPeopleEthnicityEnum::NOT_PACIFIC_ISLANDER,
        SearchImagesPeopleEthnicityEnum::BRAZILIAN,
        SearchImagesPeopleEthnicityEnum::NOT_CAUCASIAN,
        SearchImagesPeopleEthnicityEnum::NOT_PACIFIC_ISLANDER,
    ];
    $request->peopleGender = SearchImagesPeopleGenderEnum::BOTH;
    $request->peopleModelReleased = false;
    $request->peopleNumber = 29190;
    $request->perPage = 1207;
    $request->query = 'deleniti';
    $request->region = '103.245.134.203';
    $request->safe = false;
    $request->sort = SearchImagesSortEnum::POPULAR;
    $request->spellcheckQuery = false;
    $request->view = SearchImagesViewEnum::FULL;
    $request->width = 190567;
    $request->widthFrom = 355225;
    $request->widthTo = 19122;

    $requestSecurity = new SearchImagesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->images->searchImages($request, $requestSecurity);

    if ($response->imageSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
