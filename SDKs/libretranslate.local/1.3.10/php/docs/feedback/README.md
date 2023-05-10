# feedback

### Available Operations

* [postSuggest](#postsuggest) - Submit a suggestion to improve a translation

## postSuggest

Submit a suggestion to improve a translation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'es'

    $response = $sdk->feedback->postSuggest($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
