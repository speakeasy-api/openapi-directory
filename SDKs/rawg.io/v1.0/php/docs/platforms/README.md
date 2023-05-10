# platforms

### Available Operations

* [platformsList](#platformslist) - Get a list of video game platforms.
* [platformsListsParentsList](#platformslistsparentslist) - Get a list of parent platforms.
* [platformsRead](#platformsread) - Get details of the platform.

## platformsList

Get a list of video game platforms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlatformsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlatformsListRequest();
    $request->ordering = 'sed';
    $request->page = 904648;
    $request->pageSize = 868126;

    $response = $sdk->platforms->platformsList($request);

    if ($response->platformsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## platformsListsParentsList

For instance, for PS2 and PS4 the “parent platform” is PlayStation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlatformsListsParentsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlatformsListsParentsListRequest();
    $request->ordering = 'accusantium';
    $request->page = 162493;
    $request->pageSize = 508315;

    $response = $sdk->platforms->platformsListsParentsList($request);

    if ($response->platformsListsParentsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## platformsRead

Get details of the platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlatformsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlatformsReadRequest();
    $request->id = 615560;

    $response = $sdk->platforms->platformsRead($request);

    if ($response->platformSingle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
