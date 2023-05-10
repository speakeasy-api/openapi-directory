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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagRequest();
    $request->description = 'quos';
    $request->name = 'Tom Thiel';
    $request->projectId = '61adb55f-9e5d-4751-89fe-8f7502bfdc34';
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagRequest();
    $request->projectId = '0841f176-4456-4379-b3fb-27e21f862657';
    $request->tagId = 'b36fc6b9-f587-4ce5-a5c6-7641a8312e50';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagRequest();
    $request->iterationId = '47b4c21c-cb42-43ab-8dc9-1faabdd88e71';
    $request->projectId = 'f6c48252-d777-41e7-bd07-4009ef8d29de';
    $request->tagId = '1dd7097b-5da0-48c5-bfa6-c78a216e19ba';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->iterationId = 'feca6191-4981-440b-a4ff-8ae170ef03b5';
    $request->projectId = 'f37e4aa8-6855-4596-a732-aa5dcb6682cb';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagInput;
use \OpenAPI\OpenAPI\Models\Shared\TagTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagFormRequest();
    $request->tagInput = new TagInput();
    $request->tagInput->description = 'in';
    $request->tagInput->name = 'Faith Kuvalis';
    $request->tagInput->type = TagTypeEnum::NEGATIVE;
    $request->projectId = '5fb6e91b-9a9f-4748-86e2-c3309db0536d';
    $request->tagId = '9e75ca00-6f53-492c-91a2-5a8bf92f9742';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagInput;
use \OpenAPI\OpenAPI\Models\Shared\TagTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagJsonRequest();
    $request->tagInput = new TagInput();
    $request->tagInput->description = 'molestias';
    $request->tagInput->name = 'Al Mills';
    $request->tagInput->type = TagTypeEnum::NEGATIVE;
    $request->projectId = '8bf82211-2535-49d9-8387-f7a79cd72cd2';
    $request->tagId = '484da217-29f2-4ac4-9ef5-725f1169ac1e';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagRawRequest();
    $request->requestBody = 'aliquam';
    $request->projectId = '1d8a23c2-3e34-4f2d-ba4a-197f6de92215';
    $request->tagId = '1fe17120-9985-43e9-b543-d854439ee224';

    $response = $sdk->tagsApi->updateTagRaw($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
