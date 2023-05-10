# tagsApi

### Available Operations

* [createTag](#createtag) - Create a tag for the project.
* [deleteTag](#deletetag) - Delete a tag from the project.
* [getTag](#gettag) - Get information about a specific tag.
* [getTags](#gettags) - Get the tags for a given project and iteration.
* [updateTagForm](#updatetagform) - Update a tag.
* [updateTagJson](#updatetagjson) - Update a tag.
* [updateTagRaw](#updatetagraw) - Update a tag.

## createTag

Create a tag for the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagRequest();
    $request->trainingKey = 'distinctio';
    $request->description = 'mollitia';
    $request->name = 'Tomas Bosco';
    $request->projectId = 'b1c4ee2c-8c6c-4e61-9fee-b1c7cbdb6eec';
    $request->type = CreateTagTypeEnum::REGULAR;

    $response = $sdk->tagsApi->createTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTag

Delete a tag from the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagRequest();
    $request->trainingKey = 'quaerat';
    $request->projectId = '378ba253-1774-47dc-915a-d2caf5dd6723';
    $request->tagId = 'dc0f5ae2-f3a6-4b70-8878-756143f5a6c9';

    $response = $sdk->tagsApi->deleteTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTag

Get information about a specific tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagRequest();
    $request->trainingKey = 'laudantium';
    $request->iterationId = 'b5555408-0d40-4bca-8c6c-bd6b5f3ec909';
    $request->projectId = '304f926b-ad25-4538-99b4-74b0ed20e562';
    $request->tagId = '48fff639-a910-4abd-8ab6-2676696e1ec0';

    $response = $sdk->tagsApi->getTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

Get the tags for a given project and iteration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->trainingKey = 'alias';
    $request->iterationId = '221b335d-89ac-4b3e-8fda-8d0c549ef030';
    $request->projectId = '04978a61-fa1c-4f20-a88f-77c1ffc71dca';

    $response = $sdk->tagsApi->getTags($request);

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTagForm

Update a tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagInput;
use \OpenAPI\OpenAPI\Models\Shared\TagTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagFormRequest();
    $request->tagInput = new TagInput();
    $request->tagInput->description = 'ab';
    $request->tagInput->name = 'Kim Wunsch';
    $request->tagInput->type = TagTypeEnum::REGULAR;
    $request->trainingKey = 'eligendi';
    $request->projectId = '80a97ff3-34cd-4df8-97a9-e61876c6ab21';
    $request->tagId = 'd29dfc94-d6fe-4cd7-9939-0066a6d2d000';

    $response = $sdk->tagsApi->updateTagForm($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTagJson

Update a tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagInput;
use \OpenAPI\OpenAPI\Models\Shared\TagTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagJsonRequest();
    $request->tagInput = new TagInput();
    $request->tagInput->description = 'velit';
    $request->tagInput->name = 'Beatrice Flatley';
    $request->tagInput->type = TagTypeEnum::NEGATIVE;
    $request->trainingKey = 'recusandae';
    $request->projectId = 'c086fa21-e915-42cb-b119-167b8e3c8db0';
    $request->tagId = '3408d6d3-64ff-4d45-9906-d1263d48e935';

    $response = $sdk->tagsApi->updateTagJson($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTagRaw

Update a tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagRawRequest();
    $request->requestBody = 'quod';
    $request->trainingKey = 'dolores';
    $request->projectId = 'c9e81f30-be3e-4432-82d7-216576506641';
    $request->tagId = '870d9d21-f9ad-4030-84ec-c11a08364290';

    $response = $sdk->tagsApi->updateTagRaw($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
