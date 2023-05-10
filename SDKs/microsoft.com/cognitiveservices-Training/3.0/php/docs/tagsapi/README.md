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
    $request->trainingKey = 'numquam';
    $request->description = 'aspernatur';
    $request->name = 'Neil Lemke II';
    $request->projectId = '626398a0-dc76-4632-8ccb-06c8ca12d025';
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
    $request->trainingKey = 'perspiciatis';
    $request->projectId = '270b8d57-22dd-4895-b8bc-f24db9596933';
    $request->tagId = '52f74533-994d-478d-a3b6-e9389f5abb7f';

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
    $request->trainingKey = 'commodi';
    $request->iterationId = '62550a28-382a-4c48-bafd-2315bba65016';
    $request->projectId = '4e06f5bf-6ae5-491b-88bd-ef3612b63c20';
    $request->tagId = '5fda8407-74a6-48a9-a35d-086b6f66fef0';

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
    $request->trainingKey = 'sed';
    $request->iterationId = '0e9f443b-4257-4b99-ac8d-bda6a61efa21';
    $request->projectId = '98258fd0-a9eb-4a47-b7d3-ef049640d6a1';

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
    $request->tagInput->description = 'atque';
    $request->tagInput->name = 'Jean Schamberger';
    $request->tagInput->type = TagTypeEnum::NEGATIVE;
    $request->trainingKey = 'temporibus';
    $request->projectId = 'f596fdf1-ad83-47ae-80c1-c19c95ba9986';
    $request->tagId = '78fa3f69-6991-4af3-88ce-03614448c797';

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
    $request->tagInput->description = 'reprehenderit';
    $request->tagInput->name = 'David Von';
    $request->tagInput->type = TagTypeEnum::NEGATIVE;
    $request->trainingKey = 'exercitationem';
    $request->projectId = '36028efe-ef93-4415-aed7-e253f4c157de';
    $request->tagId = 'aa7170f4-45ac-4cf6-a7aa-f9bbad185fe4';

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
    $request->requestBody = 'nesciunt';
    $request->trainingKey = 'ab';
    $request->projectId = 'd6bf5c83-8fbb-48c2-8cb6-7fc4b425e99e';
    $request->tagId = '6234c9f7-b79d-4feb-b7a5-c38d4baf91e5';

    $response = $sdk->tagsApi->updateTagRaw($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
