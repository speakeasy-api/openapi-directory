# tagsApi

### Available Operations

* [createTag](#createtag) - Create a tag for the project
* [deleteTag](#deletetag) - Delete a tag from the project
* [getTag](#gettag) - Get information about a specific tag
* [getTags](#gettags) - Get the tags for a given project and iteration
* [updateTagForm](#updatetagform) - Update a tag
* [updateTagJson](#updatetagjson) - Update a tag
* [updateTagRaw](#updatetagraw) - Update a tag

## createTag

Create a tag for the project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagRequest();
    $request->trainingKey = 'distinctio';
    $request->description = 'mollitia';
    $request->name = 'Tomas Bosco';
    $request->projectId = 'b1c4ee2c-8c6c-4e61-9fee-b1c7cbdb6eec';

    $response = $sdk->tagsApi->createTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTag

Delete a tag from the project

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
    $request->projectId = '4378ba25-3177-447d-8915-ad2caf5dd672';
    $request->tagId = '3dc0f5ae-2f3a-46b7-8087-8756143f5a6c';

    $response = $sdk->tagsApi->deleteTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTag

Get information about a specific tag

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
    $request->trainingKey = 'provident';
    $request->iterationId = '8b555540-80d4-40bc-acc6-cbd6b5f3ec90';
    $request->projectId = '9304f926-bad2-4553-819b-474b0ed20e56';
    $request->tagId = '248fff63-9a91-40ab-9cab-62676696e1ec';

    $response = $sdk->tagsApi->getTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

Get the tags for a given project and iteration

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
    $request->trainingKey = 'eaque';
    $request->iterationId = '0221b335-d89a-4cb3-acfd-a8d0c549ef03';
    $request->projectId = '004978a6-1fa1-4cf2-8688-f77c1ffc71dc';

    $response = $sdk->tagsApi->getTags($request);

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTagForm

Update a tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagFormRequest();
    $request->tagInput = new TagInput();
    $request->tagInput->description = 'fuga';
    $request->tagInput->name = 'Tara Feil';
    $request->trainingKey = 'animi';
    $request->projectId = '3c80a97f-f334-4cdd-b857-a9e61876c6ab';
    $request->tagId = '21d29dfc-94d6-4fec-9799-390066a6d2d0';

    $response = $sdk->tagsApi->updateTagForm($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTagJson

Update a tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagJsonRequest();
    $request->tagInput = new TagInput();
    $request->tagInput->description = 'voluptatem';
    $request->tagInput->name = 'Shannon Hermiston';
    $request->trainingKey = 'ratione';
    $request->projectId = '8cec086f-a21e-4915-acb3-119167b8e3c8';
    $request->tagId = 'db03408d-6d36-44ff-9455-906d1263d48e';

    $response = $sdk->tagsApi->updateTagJson($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTagRaw

Update a tag

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
    $request->requestBody = 'omnis';
    $request->trainingKey = 'neque';
    $request->projectId = '5c2c9e81-f30b-4e3e-8320-2d7216576506';
    $request->tagId = '641870d9-d21f-49ad-830c-4ecc11a08364';

    $response = $sdk->tagsApi->updateTagRaw($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
