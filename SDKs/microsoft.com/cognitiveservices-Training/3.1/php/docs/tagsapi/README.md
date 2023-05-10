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
    $request->trainingKey = 'dignissimos';
    $request->description = 'corporis';
    $request->name = 'Alice Fay';
    $request->projectId = 'e44f51f8-b084-4c31-97e1-93a245467f94';
    $request->type = CreateTagTypeEnum::NEGATIVE;

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
    $request->trainingKey = 'nihil';
    $request->projectId = '4c2d5cc4-9722-433e-a6bd-8fe5d00b979e';
    $request->tagId = 'f2038732-0590-4ccc-9096-400313b3e504';

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
    $request->trainingKey = 'ut';
    $request->iterationId = 'f65fe72d-c407-47d0-8c3f-408efc15ceb4';
    $request->projectId = 'd6e1eae0-f75a-4edf-aaca-b58b991c926d';
    $request->tagId = 'db589461-e742-41cb-a6d9-502f0ea930b6';

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
    $request->trainingKey = 'sint';
    $request->iterationId = 'f7ac2f72-f885-4009-8491-1608207888ec';
    $request->projectId = '66183bfe-9659-4eb4-8ec1-6faf75b0b532';

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
    $request->tagInput->description = 'id';
    $request->tagInput->name = 'Antonia Muller';
    $request->tagInput->type = TagTypeEnum::NEGATIVE;
    $request->trainingKey = 'cum';
    $request->projectId = 'aaf4452c-4842-4c9b-aad3-2dafe81a88f4';
    $request->tagId = '444573fe-cd47-4353-b63c-8209379aa69c';

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
    $request->tagInput->description = 'at';
    $request->tagInput->name = 'Ollie Reichert';
    $request->tagInput->type = TagTypeEnum::REGULAR;
    $request->trainingKey = 'occaecati';
    $request->projectId = 'da18a782-2bf9-4589-8e68-61adb55f9e5d';
    $request->tagId = '751c9fe8-f750-42bf-9c34-50841f176445';

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
    $request->requestBody = 'ex';
    $request->trainingKey = 'amet';
    $request->projectId = '79f3fb27-e21f-4862-a57b-36fc6b9f587c';
    $request->tagId = 'e525c676-41a8-4312-a504-7b4c21ccb423';

    $response = $sdk->tagsApi->updateTagRaw($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
