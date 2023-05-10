# imageApi

### Available Operations

* [createImageRegionsForm](#createimageregionsform) - Create a set of image regions.
* [createImageRegionsJson](#createimageregionsjson) - Create a set of image regions.
* [createImageRegionsRaw](#createimageregionsraw) - Create a set of image regions.
* [createImageTagsForm](#createimagetagsform) - Associate a set of images with a set of tags.
* [createImageTagsJson](#createimagetagsjson) - Associate a set of images with a set of tags.
* [createImageTagsRaw](#createimagetagsraw) - Associate a set of images with a set of tags.
* [createImagesFromData](#createimagesfromdata) - Add the provided images to the set of training images.
* [createImagesFromFilesForm](#createimagesfromfilesform) - Add the provided batch of images to the set of training images.
* [createImagesFromFilesJson](#createimagesfromfilesjson) - Add the provided batch of images to the set of training images.
* [createImagesFromFilesRaw](#createimagesfromfilesraw) - Add the provided batch of images to the set of training images.
* [createImagesFromPredictionsForm](#createimagesfrompredictionsform) - Add the specified predicted images to the set of training images.
* [createImagesFromPredictionsJson](#createimagesfrompredictionsjson) - Add the specified predicted images to the set of training images.
* [createImagesFromPredictionsRaw](#createimagesfrompredictionsraw) - Add the specified predicted images to the set of training images.
* [createImagesFromUrlsForm](#createimagesfromurlsform) - Add the provided images urls to the set of training images.
* [createImagesFromUrlsJson](#createimagesfromurlsjson) - Add the provided images urls to the set of training images.
* [createImagesFromUrlsRaw](#createimagesfromurlsraw) - Add the provided images urls to the set of training images.
* [deleteImageRegions](#deleteimageregions) - Delete a set of image regions.
* [deleteImageTags](#deleteimagetags) - Remove a set of tags from a set of images.
* [deleteImages](#deleteimages) - Delete images from the set of training images.
* [getImagesByIds](#getimagesbyids) - Get images by id for a given project iteration.
* [getTaggedImageCount](#gettaggedimagecount) - Gets the number of images tagged with the provided {tagIds}.
* [getTaggedImages](#gettaggedimages) - Get tagged images for a given project iteration.
* [getUntaggedImageCount](#getuntaggedimagecount) - Gets the number of untagged images.
* [getUntaggedImages](#getuntaggedimages) - Get untagged images for a given project iteration.

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

Associate a set of images with a set of tags.

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

Associate a set of images with a set of tags.

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

Associate a set of images with a set of tags.

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
        'fd2ed028-921c-4ddc-a926-01fb576b0d5f',
        '0d30c5fb-b258-4705-b202-c73d5fe9b90c',
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
        '909b3fe4-9a8d-49cb-b486-33323f9b77f3',
        'a4100674-ebf6-4928-8d1b-a77a89ebf737',
        'ae4203ce-5e6a-495d-8a0d-446ce2af7a73',
    ];
    $request->trainingKey = 'quisquam';
    $request->projectId = 'f3be453f-870b-4326-b5a7-3429cdb1a842';

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
    ];
    $request->imageFileCreateBatch->tagIds = [
        'b679d232-2715-4bf0-8bb1-e31b8b90f344',
        '3a1108e0-adcf-44b9-a187-9fce953f73ef',
        '7fbc7abd-74dd-439c-8f5d-2cff7c70a456',
    ];
    $request->trainingKey = 'aspernatur';
    $request->projectId = '6d436813-f16d-49f5-bce6-c556146c3e25';

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
    $request->requestBody = 'eaque';
    $request->trainingKey = 'a';
    $request->projectId = 'b008c42e-141a-4ac3-a6c8-dd6b14429074';

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
        '778a7bd4-66d2-48c1-8ab3-cdca4251904e',
        '523c7e0b-c717-48e4-b96f-2a70c688282a',
    ];
    $request->trainingKey = 'mollitia';
    $request->projectId = '482562f2-22e9-4817-ae17-cbe61e6b7b95';

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
        new ImageIdCreateEntry(),
        new ImageIdCreateEntry(),
    ];
    $request->imageIdCreateBatch->tagIds = [
        '0ab3c20c-4f37-489f-9871-f99dd2efd121',
        'aa6f1e67-4bdb-404f-9575-6082d68ea19f',
        '1d170513-39d0-4808-aa18-40394c26071f',
        '93f5f064-2dac-47af-915c-c413aa63aae8',
    ];
    $request->trainingKey = 'fugiat';
    $request->projectId = '67864dbb-675f-4d5e-a0b3-75ed4f6fbee4';

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
    $request->requestBody = 'sunt';
    $request->trainingKey = 'asperiores';
    $request->projectId = '33317fe3-5b60-4eb1-aa42-6555ba3c2874';

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
        new ImageUrlCreateEntry(),
    ];
    $request->imageUrlCreateBatch->tagIds = [
        'd53b88f3-a8d8-4f5c-8b2f-2fb7b194a276',
        'b26916fe-1f08-4f42-94e3-698f447f603e',
        '8b445e80-ca55-4efd-a0e4-57e1858b6a89',
        'fbe3a5aa-8e48-424d-8ab4-075088e51862',
    ];
    $request->trainingKey = 'sit';
    $request->projectId = '65e904f3-b119-44b8-abf6-03a79f9dfe0a';

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
        'da8a50ce-187f-486b-8173-d689eee9526f',
        '8d986e88-1ead-44f0-a101-2563f94e29e9',
    ];
    $request->trainingKey = 'in';
    $request->projectId = '3e922a57-a15b-4e3e-8608-07e2b6e3ab88';

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
    $request->requestBody = 'aliquam';
    $request->trainingKey = 'ad';
    $request->projectId = 'f0597a60-ff2a-454a-b1e9-4764a3e865e7';

    $response = $sdk->imageApi->createImagesFromUrlsRaw($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImageRegions

Delete a set of image regions.

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
    $request->trainingKey = 'provident';
    $request->projectId = '56f9251a-5a9d-4a66-8ff5-7bfaad4f9efc';
    $request->regionIds = [
        'b4512c10-3264-48dc-af61-5199ebfd0e9f',
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

Remove a set of tags from a set of images.

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
    $request->trainingKey = 'debitis';
    $request->imageIds = [
        'c632ca3a-ed01-4179-9631-2fde04771778',
        'ff61d017-4763-460a-95db-6a660659a1ad',
    ];
    $request->projectId = 'eaab5851-d6c6-445b-88b6-1891baa0fe1a';
    $request->tagIds = [
        'e008e6f8-c5f3-450d-8cdb-5a3418143010',
        '421813d5-208e-4ce7-a253-b668451c6c6e',
        '205e16de-ab3f-4ec9-978a-64584273a841',
        '8d162309-fb09-4299-a1ae-fb9f58c4d86e',
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

Delete images from the set of training images.

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
    $request->trainingKey = 'commodi';
    $request->imageIds = [
        'e4be0560-13f5-49da-b57a-59ecfef66ef1',
        'caa3383c-2beb-4477-b73c-8d72f64d1db1',
        'f2c43106-61e9-4634-9e1c-f9e06e3a4370',
    ];
    $request->projectId = '00ae6b6b-c9b8-4f75-9eac-55a9741d3113';

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
    $request->trainingKey = 'ad';
    $request->imageIds = [
        '965bb8a7-2026-4114-b5e1-39dbc2259b1a',
    ];
    $request->iterationId = 'bda8c070-e108-44cb-8672-d1ad879eeb96';
    $request->projectId = '65b85efb-d02b-4ae0-be2d-782259e3ea4b';

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
    $request->trainingKey = 'quis';
    $request->iterationId = '197f9244-3da7-4ce5-ab89-5c537c6454ef';
    $request->projectId = 'b0b34896-c3ca-45ac-bbe2-fd5707577929';
    $request->tagIds = [
        '77deac64-6ecb-4573-809e-3eb1e5a2b12e',
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
    $request->trainingKey = 'nobis';
    $request->iterationId = '07f116db-9954-45fc-95fa-88970e189dbb';
    $request->orderBy = GetTaggedImagesOrderByEnum::NEWEST;
    $request->projectId = '0fcb33ea-055b-4197-8d44-e2f52d82d351';
    $request->skip = 242637;
    $request->tagIds = [
        'b6f48b65-6bcd-4b35-bf2e-4b27537a8cd9',
        'e7319c17-7d52-45f7-bb11-4eeb52ff785f',
        'c37814d4-c98e-40c2-bb89-eb75dad636c6',
    ];
    $request->take = 12171;

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
    $request->trainingKey = 'voluptatem';
    $request->iterationId = '503d8bb3-1180-4f73-9ae9-e057eb809e28';
    $request->projectId = '10331f39-81d4-4c70-8b60-7f3c93c73b9d';

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
    $request->trainingKey = 'officia';
    $request->iterationId = '3f2ceda7-e23f-4225-b411-faf4b7544e47';
    $request->orderBy = GetUntaggedImagesOrderByEnum::NEWEST;
    $request->projectId = 'e802857a-5b40-4463-a7d5-75f1400e764a';
    $request->skip = 823718;
    $request->take = 452399;

    $response = $sdk->imageApi->getUntaggedImages($request);

    if ($response->images !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
