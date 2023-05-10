# serviceInventory

### Available Operations

* [listServiceInventories](#listserviceinventories) - List ServiceInventories
* [listServiceInventoryTags](#listserviceinventorytags) - List Tags for ServiceInventory
* [showServiceInventory](#showserviceinventory) - Show an existing ServiceInventory
* [tagServiceInventory](#tagserviceinventory) - Tag a ServiceInventory
* [untagServiceInventory](#untagserviceinventory) - Untag a ServiceInventory

## listServiceInventories

Returns an array of ServiceInventory objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceInventoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceInventoriesRequest();
    $request->filter = [
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
        'ipsa' => 'omnis',
        'voluptate' => 'cum',
    ];
    $request->limit = 19987;
    $request->offset = 39187;
    $request->sortBy = [
        'ut' => 'maiores',
        'dicta' => 'corporis',
    ];

    $response = $sdk->serviceInventory->listServiceInventories($request);

    if ($response->serviceInventoriesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceInventoryTags

Returns an array of Tag objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceInventoryTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceInventoryTagsRequest();
    $request->filter = [
        'iusto' => 'dicta',
        'harum' => 'enim',
    ];
    $request->id = 'e6e13b99-d488-4e1e-91e4-50ad2abd4426';
    $request->limit = 586513;
    $request->offset = 552822;
    $request->sortBy = [
        'magni' => 'assumenda',
    ];

    $response = $sdk->serviceInventory->listServiceInventoryTags($request);

    if ($response->tagsCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showServiceInventory

Returns a ServiceInventory object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShowServiceInventoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowServiceInventoryRequest();
    $request->id = '502a94bb-4f63-4c96-9e9a-3efa77dfb14c';

    $response = $sdk->serviceInventory->showServiceInventory($request);

    if ($response->serviceInventory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagServiceInventory

Tags a ServiceInventory object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagServiceInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagServiceInventoryRequest();
    $request->requestBody = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->id = '66ae395e-fb9b-4a88-b3a6-6997074ba446';

    $response = $sdk->serviceInventory->tagServiceInventory($request);

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagServiceInventory

Untags a ServiceInventory object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagServiceInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagServiceInventoryRequest();
    $request->requestBody = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->id = 'b6e21419-5989-40af-a563-e2516fe4c8b7';

    $response = $sdk->serviceInventory->untagServiceInventory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
