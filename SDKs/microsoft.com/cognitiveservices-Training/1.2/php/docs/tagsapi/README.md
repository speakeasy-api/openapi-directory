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
    $request->trainingKey = 'eveniet';
    $request->description = 'laborum';
    $request->name = 'Mrs. Jody Hills';
    $request->projectId = '8aa94c02-644c-4f5e-9d9a-4578adc1ac60';

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
    $request->trainingKey = 'voluptatem';
    $request->projectId = 'dec001ac-802e-42ec-89ff-8f0f816ff347';
    $request->tagId = '7c13e902-c141-425b-8960-a668151a472a';

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
    $request->trainingKey = 'delectus';
    $request->iterationId = '923c5949-f83f-4350-8f87-6ffb901c6ecb';
    $request->projectId = 'b4e243cf-789f-4faf-ada5-3e5ae6e0ac18';
    $request->tagId = '4c2b9c24-7c88-4373-a40e-1942f32e5505';

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
    $request->trainingKey = 'veniam';
    $request->iterationId = '756f5d56-d0bd-40af-adfe-13db4f62cba3';
    $request->projectId = 'f8941aeb-c0b8-40a6-924d-3b2ecfcc8f89';

    $response = $sdk->tagsApi->getTags($request);

    if ($response->tagList !== null) {
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
    $request->tagInput->description = 'corporis';
    $request->tagInput->name = 'Martha Ankunding';
    $request->trainingKey = 'at';
    $request->projectId = 'd3d6fa18-04e5-44c8-af16-8a363c8873e4';
    $request->tagId = '84380b1f-6b8c-4a27-9a60-a04c495cc699';

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
    $request->tagInput->description = 'illo';
    $request->tagInput->name = 'Amanda Reinger DDS';
    $request->trainingKey = 'dicta';
    $request->projectId = 'bdb1cf4b-888e-4bdf-84cc-ca99bc7fc0b2';
    $request->tagId = 'dce10873-e42b-4006-9678-878ba8581a58';

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
    $request->requestBody = 'magni';
    $request->trainingKey = 'quae';
    $request->projectId = '8c54fefa-9c95-4f2e-ac55-65d307cfee81';
    $request->tagId = '206e2813-fa4a-441c-880d-3f2132af0310';

    $response = $sdk->tagsApi->updateTagRaw($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
