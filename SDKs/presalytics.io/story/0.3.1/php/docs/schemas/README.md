# schemas

### Available Operations

* [storyOutlineSchema](#storyoutlineschema) - Story Outline Schema

## storyOutlineSchema

Json Schema for validating Story Outline objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryOutlineSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryOutlineSchemaRequest();
    $request->schemaVersion = 'eaque';

    $response = $sdk->schemas->storyOutlineSchema($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
