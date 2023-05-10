# actions

### Available Operations

* [actionsGet](#actionsget) - Gets all available Actions of a Device
* [actionsPostForm](#actionspostform) - Set an action for the specified device.
* [actionsPostJson](#actionspostjson) - Set an action for the specified device.
* [actionsPostRaw](#actionspostraw) - Set an action for the specified device.

## actionsGet

Gets all available Actions of a Device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetRequest();
    $request->id = 'd69a674e-0f46-47cc-8796-ed151a05dfc2';

    $response = $sdk->actions->actionsGet($request);

    if ($response->actionInformations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsPostForm

Set an action for the specified device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ActionToPost;
use \OpenAPI\OpenAPI\Models\Shared\ActionToPostItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionToPost();
    $request->actions = [
        new ActionToPostItem(),
        new ActionToPostItem(),
        new ActionToPostItem(),
        new ActionToPostItem(),
    ];
    $request->deviceID = 'at';

    $response = $sdk->actions->actionsPostForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsPostJson

Set an action for the specified device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ActionToPost;
use \OpenAPI\OpenAPI\Models\Shared\ActionToPostItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionToPost();
    $request->actions = [
        new ActionToPostItem(),
        new ActionToPostItem(),
        new ActionToPostItem(),
        new ActionToPostItem(),
    ];
    $request->deviceID = 'molestiae';

    $response = $sdk->actions->actionsPostJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsPostRaw

Set an action for the specified device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'quod'

    $response = $sdk->actions->actionsPostRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
