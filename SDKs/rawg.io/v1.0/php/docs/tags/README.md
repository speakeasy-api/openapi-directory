# tags

### Available Operations

* [tagsList](#tagslist) - Get a list of tags.
* [tagsRead](#tagsread) - Get details of the tag.

## tagsList

Get a list of tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsListRequest();
    $request->page = 569101;
    $request->pageSize = 139972;

    $response = $sdk->tags->tagsList($request);

    if ($response->tagsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsRead

Get details of the tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsReadRequest();
    $request->id = 407183;

    $response = $sdk->tags->tagsRead($request);

    if ($response->tagSingle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
