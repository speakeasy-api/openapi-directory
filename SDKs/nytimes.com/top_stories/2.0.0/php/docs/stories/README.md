# stories

### Available Operations

* [getSectionFormat](#getsectionformat) - Top Stories

## getSectionFormat

The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionFormatSectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSectionFormatRequest();
    $request->callback = 'quibusdam';
    $request->format = GetSectionFormatFormatEnum::JSONP;
    $request->section = GetSectionFormatSectionEnum::REALESTATE;

    $response = $sdk->stories->getSectionFormat($request);

    if ($response->getSectionFormat200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
