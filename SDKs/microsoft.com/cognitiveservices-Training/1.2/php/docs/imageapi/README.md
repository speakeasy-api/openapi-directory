# imageApi

### Available Operations

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
* [deleteImageTags](#deleteimagetags) - Remove a set of tags from a set of images
* [deleteImages](#deleteimages) - Delete images from the set of training images
* [getTaggedImages](#gettaggedimages) - Get tagged images for a given project iteration
* [getUntaggedImages](#getuntaggedimages) - Get untagged images for a given project iteration
* [postImageTagsForm](#postimagetagsform) - Associate a set of images with a set of tags
* [postImageTagsJson](#postimagetagsjson) - Associate a set of images with a set of tags
* [postImageTagsRaw](#postimagetagsraw) - Associate a set of images with a set of tags

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
    $request->requestBody->imageData->content = 'sapiente';
    $request->requestBody->imageData->imageData = 'quo';
    $request->trainingKey = 'odit';
    $request->projectId = 'ddf7cc78-ca1b-4a92-8fc8-16742cb73920';
    $request->tagIds = [
        'natus',
        'sed',
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

Add the provided batch of images to the set of training images

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromFilesFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileCreateEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromFilesFormRequest();
    $request->imageFileCreateBatch = new ImageFileCreateBatch();
    $request->imageFileCreateBatch->images = [
        new ImageFileCreateEntry(),
        new ImageFileCreateEntry(),
        new ImageFileCreateEntry(),
    ];
    $request->imageFileCreateBatch->tagIds = [
        '96fea759-6eb1-40fa-aa23-52c5955907af',
    ];
    $request->trainingKey = 'sapiente';
    $request->projectId = '1a3a2fa9-4677-4392-91aa-52c3f5ad019d';

    $response = $sdk->imageApi->createImagesFromFilesForm($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromFilesJson

Add the provided batch of images to the set of training images

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromFilesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileCreateEntry;

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
        'ffe78f09-7b00-474f-9547-1b5e6e13b99d',
    ];
    $request->trainingKey = 'modi';
    $request->projectId = '88e1e91e-450a-4d2a-bd44-269802d502a9';

    $response = $sdk->imageApi->createImagesFromFilesJson($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromFilesRaw

Add the provided batch of images to the set of training images

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
    $request->requestBody = 'tempora';
    $request->trainingKey = 'facilis';
    $request->projectId = 'b4f63c96-9e9a-43ef-a77d-fb14cd66ae39';

    $response = $sdk->imageApi->createImagesFromFilesRaw($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromPredictionsForm

Add the specified predicted images to the set of training images

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromPredictionsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdCreateEntry;

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
        'fb9ba88f-3a66-4997-874b-a4469b6e2141',
        '959890af-a563-4e25-96fe-4c8b711e5b7f',
        'd2ed0289-21cd-4dc6-9260-1fb576b0d5f0',
        'd30c5fbb-2587-4053-a02c-73d5fe9b90c2',
    ];
    $request->trainingKey = 'blanditiis';
    $request->projectId = '909b3fe4-9a8d-49cb-b486-33323f9b77f3';

    $response = $sdk->imageApi->createImagesFromPredictionsForm($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromPredictionsJson

Add the specified predicted images to the set of training images

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromPredictionsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdCreateEntry;

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
        '100674eb-f692-480d-9ba7-7a89ebf737ae',
        '4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf',
    ];
    $request->trainingKey = 'amet';
    $request->projectId = 'be453f87-0b32-46b5-a734-29cdb1a8422b';

    $response = $sdk->imageApi->createImagesFromPredictionsJson($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromPredictionsRaw

Add the specified predicted images to the set of training images

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
    $request->requestBody = 'facilis';
    $request->trainingKey = 'aliquid';
    $request->projectId = '79d23227-15bf-40cb-b1e3-1b8b90f3443a';

    $response = $sdk->imageApi->createImagesFromPredictionsRaw($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromUrlsForm

Add the provided images urls to the set of training images

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromUrlsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrlCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrlCreateEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromUrlsFormRequest();
    $request->imageUrlCreateBatch = new ImageUrlCreateBatch();
    $request->imageUrlCreateBatch->images = [
        new ImageUrlCreateEntry(),
    ];
    $request->imageUrlCreateBatch->tagIds = [
        '08e0adcf-4b92-4187-9fce-953f73ef7fbc',
    ];
    $request->trainingKey = 'odio';
    $request->projectId = 'abd74dd3-9c0f-45d2-8ff7-c70a45626d43';

    $response = $sdk->imageApi->createImagesFromUrlsForm($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromUrlsJson

Add the provided images urls to the set of training images

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagesFromUrlsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrlCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrlCreateEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagesFromUrlsJsonRequest();
    $request->imageUrlCreateBatch = new ImageUrlCreateBatch();
    $request->imageUrlCreateBatch->images = [
        new ImageUrlCreateEntry(),
        new ImageUrlCreateEntry(),
    ];
    $request->imageUrlCreateBatch->tagIds = [
        '13f16d9f-5fce-46c5-9614-6c3e250fb008',
        'c42e141a-ac36-46c8-9d6b-144290747477',
        '8a7bd466-d28c-410a-b3cd-ca4251904e52',
    ];
    $request->trainingKey = 'sequi';
    $request->projectId = 'c7e0bc71-78e4-4796-b2a7-0c688282aa48';

    $response = $sdk->imageApi->createImagesFromUrlsJson($request);

    if ($response->imageCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagesFromUrlsRaw

Add the provided images urls to the set of training images

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
    $request->requestBody = 'explicabo';
    $request->trainingKey = 'minima';
    $request->projectId = '62f222e9-817e-4e17-8be6-1e6b7b95bc0a';

    $response = $sdk->imageApi->createImagesFromUrlsRaw($request);

    if ($response->imageCreateSummary !== null) {
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
    $request->trainingKey = 'tempore';
    $request->imageIds = [
        'cumque',
    ];
    $request->projectId = '20c4f378-9fd8-471f-99dd-2efd121aa6f1';
    $request->tagIds = [
        'vel',
        'in',
        'eius',
        'libero',
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
    $request->trainingKey = 'illum';
    $request->imageIds = [
        'accusantium',
        'aliquam',
        'sapiente',
    ];
    $request->projectId = '15756082-d68e-4a19-b1d1-7051339d0808';

    $response = $sdk->imageApi->deleteImages($request);

    if ($response->statusCode === 200) {
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
    $request->trainingKey = 'eum';
    $request->iterationId = 'a1840394-c260-471f-93f5-f0642dac7af5';
    $request->orderBy = GetTaggedImagesOrderByEnum::NEWEST;
    $request->projectId = '5cc413aa-63aa-4e8d-a786-4dbb675fd5e6';
    $request->skip = 46007;
    $request->tagIds = [
        'consectetur',
        'in',
        'exercitationem',
    ];
    $request->take = 937285;

    $response = $sdk->imageApi->getTaggedImages($request);

    if ($response->images !== null) {
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
    $request->trainingKey = 'facere';
    $request->iterationId = '4f6fbee4-1f33-4317-be35-b60eb1ea4265';
    $request->orderBy = GetUntaggedImagesOrderByEnum::NEWEST;
    $request->projectId = '5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2';
    $request->skip = 994401;
    $request->take = 707918;

    $response = $sdk->imageApi->getUntaggedImages($request);

    if ($response->images !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postImageTagsForm

Associate a set of images with a set of tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostImageTagsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagCreateEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostImageTagsFormRequest();
    $request->imageTagCreateBatch = new ImageTagCreateBatch();
    $request->imageTagCreateBatch->tags = [
        new ImageTagCreateEntry(),
        new ImageTagCreateEntry(),
    ];
    $request->trainingKey = 'expedita';
    $request->projectId = '194a276b-2691-46fe-9f08-f4294e3698f4';

    $response = $sdk->imageApi->postImageTagsForm($request);

    if ($response->imageTagCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postImageTagsJson

Associate a set of images with a set of tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostImageTagsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagCreateBatch;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagCreateEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostImageTagsJsonRequest();
    $request->imageTagCreateBatch = new ImageTagCreateBatch();
    $request->imageTagCreateBatch->tags = [
        new ImageTagCreateEntry(),
        new ImageTagCreateEntry(),
    ];
    $request->trainingKey = 'voluptate';
    $request->projectId = 'f603e8b4-45e8-40ca-95ef-d20e457e1858';

    $response = $sdk->imageApi->postImageTagsJson($request);

    if ($response->imageTagCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postImageTagsRaw

Associate a set of images with a set of tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostImageTagsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostImageTagsRawRequest();
    $request->requestBody = 'cum';
    $request->trainingKey = 'laboriosam';
    $request->projectId = 'a89fbe3a-5aa8-4e48-a4d0-ab4075088e51';

    $response = $sdk->imageApi->postImageTagsRaw($request);

    if ($response->imageTagCreateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
