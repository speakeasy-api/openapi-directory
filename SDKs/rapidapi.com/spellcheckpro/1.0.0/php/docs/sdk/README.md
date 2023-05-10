# SDK

### Available Operations

* [checkSpellingRussian](#checkspellingrussian) - Check Spelling (Russian)

## checkSpellingRussian

Check Spelling (Russian)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CheckSpellingRussianRequest;
use \OpenAPI\OpenAPI\Models\Operations\CheckSpellingRussianRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckSpellingRussianRequest();
    $request->requestBody = new CheckSpellingRussianRequestBody();
    $request->requestBody->langCode = 'ru';
    $request->requestBody->text = 'Добрый вее!';
    $request->xRapidAPIKey = 'provident';

    $response = $sdk->sdk->checkSpellingRussian($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
