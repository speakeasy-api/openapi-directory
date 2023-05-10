# imageActions

### Available Operations

* [getImagesIdActions](#getimagesidactions) - Get all Actions for an Image
* [getImagesIdActionsActionId](#getimagesidactionsactionid) - Get an Action for an Image
* [postImagesIdActionsChangeProtection](#postimagesidactionschangeprotection) - Change Image Protection

## getImagesIdActions

Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesIdActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesIdActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesIdActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagesIdActionsRequest();
    $request->id = 338007;
    $request->sort = GetImagesIdActionsSortParameterSortEnum::ID_ASC;
    $request->status = GetImagesIdActionsStatusParameterStatusEnum::ERROR;

    $response = $sdk->imageActions->getImagesIdActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImagesIdActionsActionId

Returns a specific Action for an Image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesIdActionsActionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagesIdActionsActionIdRequest();
    $request->actionId = 656330;
    $request->id = 317202;

    $response = $sdk->imageActions->getImagesIdActionsActionId($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postImagesIdActionsChangeProtection

Changes the protection configuration of the Image. Can only be used on snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostImagesIdActionsChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostImagesIdActionsChangeProtectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostImagesIdActionsChangeProtectionRequest();
    $request->requestBody = new PostImagesIdActionsChangeProtectionRequestBody();
    $request->requestBody->delete = true;
    $request->id = 138183;

    $response = $sdk->imageActions->postImagesIdActionsChangeProtection($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
