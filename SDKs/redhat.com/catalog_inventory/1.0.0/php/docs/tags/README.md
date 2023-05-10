# tags

### Available Operations

* [listTags](#listtags) - List Tags

## listTags

Returns an array of Tag objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsRequest();
    $request->filter = [
        'dolorum' => 'nostrum',
    ];
    $request->limit = 639028;
    $request->offset = 676243;
    $request->sortBy = [
        'accusamus' => 'tempora',
        'atque' => 'fugit',
        'ut' => 'fugiat',
    ];

    $response = $sdk->tags->listTags($request);

    if ($response->tagsCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
