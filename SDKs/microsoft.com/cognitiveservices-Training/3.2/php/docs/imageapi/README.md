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
* [querySuggestedImageCountForm](#querysuggestedimagecountform) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [querySuggestedImageCountJson](#querysuggestedimagecountjson) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [querySuggestedImageCountRaw](#querysuggestedimagecountraw) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [querySuggestedImagesForm](#querysuggestedimagesform) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
* [querySuggestedImagesJson](#querysuggestedimagesjson) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
* [querySuggestedImagesRaw](#querysuggestedimagesraw) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.

## createImageRegionsForm

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
        new ImageRegionCreateEntry(),
        new ImageRegionCreateEntry(),
        new ImageRegionCreateEntry(),
    ];
    $request->projectId = 'b7392059-2939-46fe-a759-6eb10faaa235';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
    ];
    $request->projectId = 'c5955907-aff1-4a3a-afa9-467739251aa5';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRegionsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageRegionsRawRequest();
    $request->requestBody = 'odit';
    $request->projectId = 'c3f5ad01-9da1-4ffe-b8f0-97b0074f1547';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
    $request->projectId = 'b5e6e13b-99d4-488e-9e91-e450ad2abd44';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
    ];
    $request->projectId = '69802d50-2a94-4bb4-b63c-969e9a3efa77';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageTagsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageTagsRawRequest();
    $request->requestBody = 'illum';
    $request->projectId = 'fb14cd66-ae39-45ef-b9ba-88f3a6699707';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromDataRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromDataRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromDataRequest();
    $request->requestBody = new CreateImagesFromDataRequestBody();
    $request->requestBody->imageData = new CreateImagesFromDataRequestBodyImageData();
    $request->requestBody->imageData->content = 'magnam';
    $request->requestBody->imageData->imageData = 'distinctio';
    $request->projectId = 'a4469b6e-2141-4959-890a-fa563e2516fe';
    $request->tagIds = [
        'c8b711e5-b7fd-42ed-8289-21cddc692601',
        'fb576b0d-5f0d-430c-9fbb-2587053202c7',
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
        '5fe9b90c-2890-49b3-be49-a8d9cbf48633',
        '323f9b77-f3a4-4100-a74e-bf69280d1ba7',
        '7a89ebf7-37ae-4420-bce5-e6a95d8a0d44',
        '6ce2af7a-73cf-43be-853f-870b326b5a73',
    ];
    $request->projectId = '429cdb1a-8422-4bb6-b9d2-322715bf0cbb';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
        '31b8b90f-3443-4a11-88e0-adcf4b921879',
        'fce953f7-3ef7-4fbc-babd-74dd39c0f5d2',
        'cff7c70a-4562-46d4-b681-3f16d9f5fce6',
        'c556146c-3e25-40fb-808c-42e141aac366',
    ];
    $request->projectId = 'c8dd6b14-4290-4747-8778-a7bd466d28c1';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromFilesRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromFilesRawRequest();
    $request->requestBody = 'ipsa';
    $request->projectId = 'ab3cdca4-2519-404e-923c-7e0bc7178e47';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
        new ImageIdCreateEntry(),
    ];
    $request->imageIdCreateBatch->tagIds = [
        'f2a70c68-8282-4aa4-8256-2f222e9817ee',
        '17cbe61e-6b7b-495b-80ab-3c20c4f3789f',
    ];
    $request->projectId = 'd871f99d-d2ef-4d12-9aa6-f1e674bdb04f';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
        '756082d6-8ea1-49f1-9170-51339d08086a',
        '1840394c-2607-41f9-bf5f-0642dac7af51',
    ];
    $request->projectId = '5cc413aa-63aa-4e8d-a786-4dbb675fd5e6';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromPredictionsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromPredictionsRawRequest();
    $request->requestBody = 'aperiam';
    $request->projectId = 'b375ed4f-6fbe-4e41-b333-17fe35b60eb1';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
        new ImageUrlCreateEntry(),
        new ImageUrlCreateEntry(),
    ];
    $request->imageUrlCreateBatch->tagIds = [
        '426555ba-3c28-4744-ad53-b88f3a8d8f5c',
        '0b2f2fb7-b194-4a27-ab26-916fe1f08f42',
        '94e3698f-447f-4603-a8b4-45e80ca55efd',
    ];
    $request->projectId = '20e457e1-858b-46a8-9fbe-3a5aa8e4824d';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
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
    ];
    $request->imageUrlCreateBatch->tagIds = [
        'b4075088-e518-4620-a5e9-04f3b1194b8a',
        'bf603a79-f9df-4e0a-b7da-8a50ce187f86',
        'bc173d68-9eee-4952-af8d-986e881ead4f',
    ];
    $request->projectId = '0e101256-3f94-4e29-a973-e922a57a15be';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromUrlsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromUrlsRawRequest();
    $request->requestBody = 'non';
    $request->projectId = 'e060807e-2b6e-43ab-8845-f0597a60ff2a';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageRegionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageRegionsRequest();
    $request->projectId = '54a31e94-764a-43e8-a5e7-956f9251a5a9';
    $request->regionIds = [
        'a660ff57-bfaa-4d4f-9efc-1b4512c10326',
        '48dc2f61-5199-4ebf-90e9-fe6c632ca3ae',
        'd0117996-312f-4de0-8771-778ff61d0174',
        '76360a15-db6a-4660-a59a-1adeaab5851d',
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageTagsRequest();
    $request->imageIds = [
        'c645b08b-6189-41ba-a0fe-1ade008e6f8c',
        '5f350d8c-db5a-4341-8143-010421813d52',
    ];
    $request->projectId = '08ece7e2-53b6-4684-91c6-c6e205e16dea';
    $request->tagIds = [
        '3fec9578-a645-4842-b3a8-418d162309fb',
        '0929921a-efb9-4f58-84d8-6e68e4be0560',
        '13f59da7-57a5-49ec-bef6-6ef1caa3383c',
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImagesRequest();
    $request->allImages = false;
    $request->allIterations = false;
    $request->imageIds = [
        'beb47737-3c8d-472f-a4d1-db1f2c431066',
    ];
    $request->projectId = '1e96349e-1cf9-4e06-a3a4-37000ae6b6bc';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesByIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagesByIdsRequest();
    $request->imageIds = [
        'b8f759ea-c55a-4974-9d31-1352965bb8a7',
        '20261143-5e13-49db-8225-9b1abda8c070',
        'e1084cb0-672d-41ad-879e-eb9665b85efb',
    ];
    $request->iterationId = 'd02bae0b-e2d7-4822-99e3-ea4b5197f924';
    $request->projectId = '43da7ce5-2b89-45c5-b7c6-454efb0b3489';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTaggedImageCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaggedImageCountRequest();
    $request->iterationId = '6c3ca5ac-fbe2-4fd5-b075-77929177deac';
    $request->projectId = '646ecb57-3409-4e3e-b1e5-a2b12eb07f11';
    $request->tagIds = [
        'db99545f-c95f-4a88-970e-189dbb30fcb3',
        '3ea055b1-97cd-444e-af52-d82d3513bb6f',
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTaggedImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTaggedImagesOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaggedImagesRequest();
    $request->iterationId = '48b656bc-db35-4ff2-a4b2-7537a8cd9e73';
    $request->orderBy = GetTaggedImagesOrderByEnum::NEWEST;
    $request->projectId = '9c177d52-5f77-4b11-8eeb-52ff785fc378';
    $request->skip = 75566;
    $request->tagIds = [
        'd4c98e0c-2bb8-49eb-b5da-d636c600503d',
        '8bb31180-f739-4ae9-a057-eb809e281033',
    ];
    $request->take = 124289;

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUntaggedImageCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUntaggedImageCountRequest();
    $request->iterationId = 'f3981d4c-700b-4607-b3c9-3c73b9da3f2c';
    $request->projectId = 'eda7e23f-2257-4411-baf4-b7544e472e80';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUntaggedImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUntaggedImagesOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUntaggedImagesRequest();
    $request->iterationId = '2857a5b4-0463-4a7d-975f-1400e764ad73';
    $request->orderBy = GetUntaggedImagesOrderByEnum::NEWEST;
    $request->projectId = '4ec1b781-b36a-4080-88d1-00efada200ef';
    $request->skip = 27982;
    $request->take = 278325;

    $response = $sdk->imageApi->getUntaggedImages($request);

    if ($response->images !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySuggestedImageCountForm

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuerySuggestedImageCountFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySuggestedImageCountFormRequest();
    $request->tagFilter = new TagFilter();
    $request->tagFilter->tagIds = [
        '2eb2164c-f9ab-4836-ac72-3ffda9e06bee',
    ];
    $request->tagFilter->threshold = 2516.27;
    $request->iterationId = '825c1fc0-e115-4c80-bff9-18544ec42def';
    $request->projectId = 'cce8f197-7773-4e63-962a-7b408f05e3d4';

    $response = $sdk->imageApi->querySuggestedImageCountForm($request);

    if ($response->querySuggestedImageCountForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySuggestedImageCountJson

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuerySuggestedImageCountJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySuggestedImageCountJsonRequest();
    $request->tagFilter = new TagFilter();
    $request->tagFilter->tagIds = [
        'fdaf313a-1f5f-4d94-a59c-0b36f25ea944',
        'f3b756c1-1f6c-437a-9126-243835bbc05a',
        '23a45cef-c5fd-4e10-a0ce-2169e510019c',
    ];
    $request->tagFilter->threshold = 4355.31;
    $request->iterationId = 'dc5e3476-2799-4bfb-be69-49fb2bb4ecae';
    $request->projectId = '6c3d5db3-adeb-4d5d-aea4-c506a8aa94c0';

    $response = $sdk->imageApi->querySuggestedImageCountJson($request);

    if ($response->querySuggestedImageCountJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySuggestedImageCountRaw

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuerySuggestedImageCountRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySuggestedImageCountRawRequest();
    $request->requestBody = 'fugit';
    $request->iterationId = '644cf5e9-d9a4-4578-adc1-ac600dec001a';
    $request->projectId = 'c802e2ec-09ff-48f0-b816-ff3477c13e90';

    $response = $sdk->imageApi->querySuggestedImageCountRaw($request);

    if ($response->querySuggestedImageCountRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySuggestedImagesForm

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuerySuggestedImagesFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedTagAndRegionQueryToken;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedTagAndRegionQueryTokenSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySuggestedImagesFormRequest();
    $request->suggestedTagAndRegionQueryToken = new SuggestedTagAndRegionQueryToken();
    $request->suggestedTagAndRegionQueryToken->continuation = 'qui';
    $request->suggestedTagAndRegionQueryToken->maxCount = 771241;
    $request->suggestedTagAndRegionQueryToken->session = 'beatae';
    $request->suggestedTagAndRegionQueryToken->sortBy = SuggestedTagAndRegionQueryTokenSortByEnum::UNCERTAINTY_ASCENDING;
    $request->suggestedTagAndRegionQueryToken->tagIds = [
        '25b0960a-6681-451a-872a-f923c5949f83',
    ];
    $request->suggestedTagAndRegionQueryToken->threshold = 9717.64;
    $request->iterationId = '350cf876-ffb9-401c-aecb-b4e243cf789f';
    $request->projectId = 'fafeda53-e5ae-46e0-ac18-4c2b9c247c88';

    $response = $sdk->imageApi->querySuggestedImagesForm($request);

    if ($response->suggestedTagAndRegionQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySuggestedImagesJson

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuerySuggestedImagesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedTagAndRegionQueryToken;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedTagAndRegionQueryTokenSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySuggestedImagesJsonRequest();
    $request->suggestedTagAndRegionQueryToken = new SuggestedTagAndRegionQueryToken();
    $request->suggestedTagAndRegionQueryToken->continuation = 'amet';
    $request->suggestedTagAndRegionQueryToken->maxCount = 473326;
    $request->suggestedTagAndRegionQueryToken->session = 'amet';
    $request->suggestedTagAndRegionQueryToken->sortBy = SuggestedTagAndRegionQueryTokenSortByEnum::UNCERTAINTY_DESCENDING;
    $request->suggestedTagAndRegionQueryToken->tagIds = [
        '0e1942f3-2e55-4055-b56f-5d56d0bd0af2',
        'dfe13db4-f62c-4ba3-b894-1aebc0b80a69',
    ];
    $request->suggestedTagAndRegionQueryToken->threshold = 1674.35;
    $request->iterationId = '4d3b2ecf-cc8f-4895-810f-5dd3d6fa1804';
    $request->projectId = 'e54c82f1-68a3-463c-8873-e484380b1f6b';

    $response = $sdk->imageApi->querySuggestedImagesJson($request);

    if ($response->suggestedTagAndRegionQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySuggestedImagesRaw

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuerySuggestedImagesRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySuggestedImagesRawRequest();
    $request->requestBody = 'totam';
    $request->iterationId = 'ca275a60-a04c-4495-8c69-9171b51c1bdb';
    $request->projectId = '1cf4b888-ebdf-4c4c-8ca9-9bc7fc0b2dce';

    $response = $sdk->imageApi->querySuggestedImagesRaw($request);

    if ($response->suggestedTagAndRegionQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
