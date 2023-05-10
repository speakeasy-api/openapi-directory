# volumeActions

### Available Operations

* [getVolumesIdActions](#getvolumesidactions) - Get all Actions for a Volume
* [getVolumesIdActionsActionId](#getvolumesidactionsactionid) - Get an Action for a Volume
* [postVolumesIdActionsAttach](#postvolumesidactionsattach) - Attach Volume to a Server
* [postVolumesIdActionsChangeProtection](#postvolumesidactionschangeprotection) - Change Volume Protection
* [postVolumesIdActionsDetach](#postvolumesidactionsdetach) - Detach Volume
* [postVolumesIdActionsResize](#postvolumesidactionsresize) - Resize Volume

## getVolumesIdActions

Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesIdActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesIdActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesIdActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumesIdActionsRequest();
    $request->id = 277628;
    $request->sort = GetVolumesIdActionsSortParameterSortEnum::COMMAND;
    $request->status = GetVolumesIdActionsStatusParameterStatusEnum::SUCCESS;

    $response = $sdk->volumeActions->getVolumesIdActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumesIdActionsActionId

Returns a specific Action for a Volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesIdActionsActionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumesIdActionsActionIdRequest();
    $request->actionId = 807581;
    $request->id = 863856;

    $response = $sdk->volumeActions->getVolumesIdActionsActionId($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVolumesIdActionsAttach

Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesIdActionsAttachRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesIdActionsAttachAttachVolumeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVolumesIdActionsAttachRequest();
    $request->requestBody = new PostVolumesIdActionsAttachAttachVolumeRequest();
    $request->requestBody->automount = false;
    $request->requestBody->server = 43;
    $request->id = 747080;

    $response = $sdk->volumeActions->postVolumesIdActionsAttach($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVolumesIdActionsChangeProtection

Changes the protection configuration of a Volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesIdActionsChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesIdActionsChangeProtectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVolumesIdActionsChangeProtectionRequest();
    $request->requestBody = new PostVolumesIdActionsChangeProtectionRequestBody();
    $request->requestBody->delete = true;
    $request->id = 117531;

    $response = $sdk->volumeActions->postVolumesIdActionsChangeProtection($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVolumesIdActionsDetach

Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesIdActionsDetachRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVolumesIdActionsDetachRequest();
    $request->id = 674848;

    $response = $sdk->volumeActions->postVolumesIdActionsDetach($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVolumesIdActionsResize

Changes the size of a Volume. Note that downsizing a Volume is not possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesIdActionsResizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesIdActionsResizeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVolumesIdActionsResizeRequest();
    $request->requestBody = new PostVolumesIdActionsResizeRequestBody();
    $request->requestBody->size = 50;
    $request->id = 517379;

    $response = $sdk->volumeActions->postVolumesIdActionsResize($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
