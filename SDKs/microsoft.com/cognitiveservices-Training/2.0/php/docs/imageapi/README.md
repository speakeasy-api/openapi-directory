# imageApi

### Available Operations

* [createImageRegionsForm](#createimageregionsform) - Create a set of image regions
* [createImageRegionsJson](#createimageregionsjson) - Create a set of image regions
* [createImageRegionsRaw](#createimageregionsraw) - Create a set of image regions
* [createImageTagsForm](#createimagetagsform) - Associate a set of images with a set of tags
* [createImageTagsJson](#createimagetagsjson) - Associate a set of images with a set of tags
* [createImageTagsRaw](#createimagetagsraw) - Associate a set of images with a set of tags
* [createImagesFromData](#createimagesfromdata) - Add the provided images to the set of training images
* [createImagesFromFilesForm](#createimagesfromfilesform) - Add the provided batch of images to the set of training images
* [createImagesFromFilesJson](#createimagesfromfilesjson) - Add the provided batch of images to the set of training images
* [createImagesFromFilesRaw](#createimagesfromfilesraw) - Add the provided batch of images to the set of training images
* [createImagesFromPredictionsForm](#createimagesfrompredictionsform) - Add the specified predicted images to the set of training images
* [createImagesFromPredictionsJson](#createimagesfrompredictionsjson) - Add the specified predicted images to the set of training images
* [createImagesFromPredictionsRaw](#createimagesfrompredictionsraw) - Add the specified predicted images to the set of training images
* [createImagesFromUrlsForm](#createimagesfromurlsform) - Add the provided images urls to the set of training images
* [createImagesFromUrlsJson](#createimagesfromurlsjson) - Add the provided images urls to the set of training images
* [createImagesFromUrlsRaw](#createimagesfromurlsraw) - Add the provided images urls to the set of training images
* [deleteImageRegions](#deleteimageregions) - Delete a set of image regions
* [deleteImageTags](#deleteimagetags) - Remove a set of tags from a set of images
* [deleteImages](#deleteimages) - Delete images from the set of training images
* [getImagesByIds](#getimagesbyids) - Get images by id for a given project iteration
* [getTaggedImageCount](#gettaggedimagecount) - Gets the number of images tagged with the provided {tagIds}
* [getTaggedImages](#gettaggedimages) - Get tagged images for a given project iteration
* [getUntaggedImageCount](#getuntaggedimagecount) - Gets the number of untagged images
* [getUntaggedImages](#getuntaggedimages) - Get untagged images for a given project iteration

## createImageRegionsForm

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRegionsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageRegionCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageRegionCreateEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageRegionsFormRequest();
    $request->imageRegionCreateBatch = new ImageRegionCreateBatch();
    $request->imageRegionCreateBatch->regions = [
        new ImageRegionCreateEntry(),
    ];
    $request->trainingKey = 'excepturi';
    $request->projectId = '20592939-6fea-4759-aeb1-0faaa2352c59';

    $response = $sdk->imageApi->createImageRegionsForm($request);

    if ($response->imageRegionCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageRegionsJson

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRegionsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageRegionCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageRegionCreateEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageRegionsJsonRequest();
    $request->imageRegionCreateBatch = new ImageRegionCreateBatch();
    $request->imageRegionCreateBatch->regions = [
        new ImageRegionCreateEntry(),
        new ImageRegionCreateEntry(),
    ];
    $request->trainingKey = 'minima';
    $request->projectId = '907aff1a-3a2f-4a94-a773-9251aa52c3f5';

    $response = $sdk->imageApi->createImageRegionsJson($request);

    if ($response->imageRegionCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageRegionsRaw

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRegionsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageRegionsRawRequest();
    $request->requestBody = 'id';
    $request->trainingKey = 'possimus';
    $request->projectId = '019da1ff-e78f-4097-b007-4f15471b5e6e';

    $response = $sdk->imageApi->createImageRegionsRaw($request);

    if ($response->imageRegionCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageTagsForm

Associate a set of images with a set of tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageTagsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagCreateEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageTagsFormRequest();
    $request->imageTagCreateBatch = new ImageTagCreateBatch();
    $request->imageTagCreateBatch->tags = [
        new ImageTagCreateEntry(),
    ];
    $request->trainingKey = 'ipsum';
    $request->projectId = 'b99d488e-1e91-4e45-8ad2-abd44269802d';

    $response = $sdk->imageApi->createImageTagsForm($request);

    if ($response->imageTagCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageTagsJson

Associate a set of images with a set of tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageTagsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagCreateEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageTagsJsonRequest();
    $request->imageTagCreateBatch = new ImageTagCreateBatch();
    $request->imageTagCreateBatch->tags = [
        new ImageTagCreateEntry(),
        new ImageTagCreateEntry(),
    ];
    $request->trainingKey = 'alias';
    $request->projectId = '2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6';

    $response = $sdk->imageApi->createImageTagsJson($request);

    if ($response->imageTagCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageTagsRaw

Associate a set of images with a set of tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageTagsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageTagsRawRequest();
    $request->requestBody = 'aliquid';
    $request->trainingKey = 'laborum';
    $request->projectId = 'e395efb9-ba88-4f3a-a699-7074ba4469b6';

    $response = $sdk->imageApi->createImageTagsRaw($request);

    if ($response->imageTagCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromData

This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
multiple image files can be sent at once, with a maximum of 64 files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromDataRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromDataRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromDataRequest();
    $request->requestBody = new CreateImagesFromDataRequestBody();
    $request->requestBody->imageData = new CreateImagesFromDataRequestBodyImageData();
    $request->requestBody->imageData->content = 'vero';
    $request->requestBody->imageData->imageData = 'aspernatur';
    $request->trainingKey = 'architecto';
    $request->projectId = '41959890-afa5-463e-a516-fe4c8b711e5b';
    $request->tagIds = [
        'repellat',
        'quibusdam',
    ];

    $response = $sdk->imageApi->createImagesFromData($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromFilesForm

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromFilesFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileCreateEntry;
use \OpenAPI\OpenAPI\Models\Shared\Region;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromFilesFormRequest();
    $request->imageFileCreateBatch = new ImageFileCreateBatch();
    $request->imageFileCreateBatch->images = [
        new ImageFileCreateEntry(),
    ];
    $request->imageFileCreateBatch->tagIds = [
        'd028921c-ddc6-4926-81fb-576b0d5f0d30',
        'c5fbb258-7053-4202-873d-5fe9b90c2890',
        '9b3fe49a-8d9c-4bf4-8633-323f9b77f3a4',
        '100674eb-f692-480d-9ba7-7a89ebf737ae',
    ];
    $request->trainingKey = 'eius';
    $request->projectId = '203ce5e6-a95d-48a0-9446-ce2af7a73cf3';

    $response = $sdk->imageApi->createImagesFromFilesForm($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromFilesJson

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromFilesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileCreateEntry;
use \OpenAPI\OpenAPI\Models\Shared\Region;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromFilesJsonRequest();
    $request->imageFileCreateBatch = new ImageFileCreateBatch();
    $request->imageFileCreateBatch->images = [
        new ImageFileCreateEntry(),
        new ImageFileCreateEntry(),
        new ImageFileCreateEntry(),
    ];
    $request->imageFileCreateBatch->tagIds = [
        '453f870b-326b-45a7-b429-cdb1a8422bb6',
        '79d23227-15bf-40cb-b1e3-1b8b90f3443a',
        '1108e0ad-cf4b-4921-879f-ce953f73ef7f',
        'bc7abd74-dd39-4c0f-9d2c-ff7c70a45626',
    ];
    $request->trainingKey = 'possimus';
    $request->projectId = '436813f1-6d9f-45fc-a6c5-56146c3e250f';

    $response = $sdk->imageApi->createImagesFromFilesJson($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromFilesRaw

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromFilesRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromFilesRawRequest();
    $request->requestBody = 'libero';
    $request->trainingKey = 'aut';
    $request->projectId = '08c42e14-1aac-4366-88dd-6b1442907474';

    $response = $sdk->imageApi->createImagesFromFilesRaw($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromPredictionsForm

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromPredictionsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdCreateEntry;
use \OpenAPI\OpenAPI\Models\Shared\Region;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromPredictionsFormRequest();
    $request->imageIdCreateBatch = new ImageIdCreateBatch();
    $request->imageIdCreateBatch->images = [
        new ImageIdCreateEntry(),
        new ImageIdCreateEntry(),
    ];
    $request->imageIdCreateBatch->tagIds = [
        '8a7bd466-d28c-410a-b3cd-ca4251904e52',
        '3c7e0bc7-178e-4479-af2a-70c688282aa4',
    ];
    $request->trainingKey = 'atque';
    $request->projectId = '2562f222-e981-47ee-97cb-e61e6b7b95bc';

    $response = $sdk->imageApi->createImagesFromPredictionsForm($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromPredictionsJson

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromPredictionsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdCreateEntry;
use \OpenAPI\OpenAPI\Models\Shared\Region;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromPredictionsJsonRequest();
    $request->imageIdCreateBatch = new ImageIdCreateBatch();
    $request->imageIdCreateBatch->images = [
        new ImageIdCreateEntry(),
    ];
    $request->imageIdCreateBatch->tagIds = [
        'b3c20c4f-3789-4fd8-b1f9-9dd2efd121aa',
        '6f1e674b-db04-4f15-b560-82d68ea19f1d',
        '17051339-d080-486a-9840-394c26071f93',
    ];
    $request->trainingKey = 'voluptatibus';
    $request->projectId = '5f0642da-c7af-4515-8c41-3aa63aae8d67';

    $response = $sdk->imageApi->createImagesFromPredictionsJson($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromPredictionsRaw

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromPredictionsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromPredictionsRawRequest();
    $request->requestBody = 'quos';
    $request->trainingKey = 'vel';
    $request->projectId = '4dbb675f-d5e6-40b3-b5ed-4f6fbee41f33';

    $response = $sdk->imageApi->createImagesFromPredictionsRaw($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromUrlsForm

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromUrlsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrlCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrlCreateEntry;
use \OpenAPI\OpenAPI\Models\Shared\Region;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromUrlsFormRequest();
    $request->imageUrlCreateBatch = new ImageUrlCreateBatch();
    $request->imageUrlCreateBatch->images = [
        new ImageUrlCreateEntry(),
    ];
    $request->imageUrlCreateBatch->tagIds = [
        '7fe35b60-eb1e-4a42-a555-ba3c28744ed5',
    ];
    $request->trainingKey = 'adipisci';
    $request->projectId = 'b88f3a8d-8f5c-40b2-b2fb-7b194a276b26';

    $response = $sdk->imageApi->createImagesFromUrlsForm($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromUrlsJson

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromUrlsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrlCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrlCreateEntry;
use \OpenAPI\OpenAPI\Models\Shared\Region;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromUrlsJsonRequest();
    $request->imageUrlCreateBatch = new ImageUrlCreateBatch();
    $request->imageUrlCreateBatch->images = [
        new ImageUrlCreateEntry(),
        new ImageUrlCreateEntry(),
        new ImageUrlCreateEntry(),
    ];
    $request->imageUrlCreateBatch->tagIds = [
        '6fe1f08f-4294-4e36-98f4-47f603e8b445',
    ];
    $request->trainingKey = 'debitis';
    $request->projectId = '80ca55ef-d20e-4457-a185-8b6a89fbe3a5';

    $response = $sdk->imageApi->createImagesFromUrlsJson($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromUrlsRaw

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromUrlsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromUrlsRawRequest();
    $request->requestBody = 'officia';
    $request->trainingKey = 'dolorum';
    $request->projectId = '8e4824d0-ab40-4750-88e5-1862065e904f';

    $response = $sdk->imageApi->createImagesFromUrlsRaw($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImageRegions

Delete a set of image regions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageRegionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageRegionsRequest();
    $request->trainingKey = 'dolorem';
    $request->projectId = 'b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50';
    $request->regionIds = [
        'repudiandae',
        'quasi',
        'atque',
        'reprehenderit',
    ];

    $response = $sdk->imageApi->deleteImageRegions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImageTags

Remove a set of tags from a set of images

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageTagsRequest();
    $request->trainingKey = 'asperiores';
    $request->imageIds = [
        'suscipit',
        'quidem',
        'maxime',
    ];
    $request->projectId = '173d689e-ee95-426f-8d98-6e881ead4f0e';
    $request->tagIds = [
        'accusantium',
    ];

    $response = $sdk->imageApi->deleteImageTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImages

Delete images from the set of training images

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImagesRequest();
    $request->trainingKey = 'beatae';
    $request->imageIds = [
        'enim',
    ];
    $request->projectId = '63f94e29-e973-4e92-aa57-a15be3e06080';

    $response = $sdk->imageApi->deleteImages($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImagesByIds

This API will return a set of Images for the specified tags and optionally iteration. If no iteration is specified the
current workspace is used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesByIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagesByIdsRequest();
    $request->trainingKey = 'molestiae';
    $request->imageIds = [
        'qui',
        'cum',
        'iure',
        'necessitatibus',
    ];
    $request->iterationId = '3ab8845f-0597-4a60-bf2a-54a31e94764a';
    $request->projectId = '3e865e79-56f9-4251-a5a9-da660ff57bfa';

    $response = $sdk->imageApi->getImagesByIds($request);

    if ($response->images !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaggedImageCount

The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaggedImageCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaggedImageCountRequest();
    $request->trainingKey = 'laborum';
    $request->iterationId = 'd4f9efc1-b451-42c1-8326-48dc2f615199';
    $request->projectId = 'ebfd0e9f-e6c6-432c-a3ae-d0117996312f';
    $request->tagIds = [
        'necessitatibus',
        'ipsa',
        'tempora',
        'nihil',
    ];

    $response = $sdk->imageApi->getTaggedImageCount($request);

    if ($response->getTaggedImageCount200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaggedImages

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaggedImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTaggedImagesOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaggedImagesRequest();
    $request->trainingKey = 'molestiae';
    $request->iterationId = '1778ff61-d017-4476-b60a-15db6a660659';
    $request->orderBy = GetTaggedImagesOrderByEnum::OLDEST;
    $request->projectId = '1adeaab5-851d-46c6-85b0-8b61891baa0f';
    $request->skip = 889288;
    $request->tagIds = [
        'fuga',
    ];
    $request->take = 867168;

    $response = $sdk->imageApi->getTaggedImages($request);

    if ($response->images !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntaggedImageCount

This API returns the images which have no tags for a given project and optionally an iteration. If no iteration is specified the
current workspace is used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUntaggedImageCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUntaggedImageCountRequest();
    $request->trainingKey = 'debitis';
    $request->iterationId = '008e6f8c-5f35-40d8-8db5-a34181430104';
    $request->projectId = '21813d52-08ec-4e7e-a53b-668451c6c6e2';

    $response = $sdk->imageApi->getUntaggedImageCount($request);

    if ($response->getUntaggedImageCount200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntaggedImages

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUntaggedImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUntaggedImagesOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUntaggedImagesRequest();
    $request->trainingKey = 'voluptatem';
    $request->iterationId = '5e16deab-3fec-4957-8a64-584273a8418d';
    $request->orderBy = GetUntaggedImagesOrderByEnum::NEWEST;
    $request->projectId = '62309fb0-9299-421a-afb9-f58c4d86e68e';
    $request->skip = 267207;
    $request->take = 722184;

    $response = $sdk->imageApi->getUntaggedImages($request);

    if ($response->images !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
