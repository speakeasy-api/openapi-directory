# conversion

## Overview

Conversion functions

### Available Operations

* [convert](#convert) - Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 
* [convertUrl](#converturl) - Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

## convert

Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRequestBodyValidateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertRequestBody();
    $request->filename = 'distinctio';
    $request->source = 'quibusdam';
    $request->validate = ConvertRequestBodyValidateEnum::ON;

    $response = $sdk->conversion->convert($request);

    if ($response->convert200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## convertUrl

Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConvertUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertUrlRequest();
    $request->url = 'https://tidy-mascara.org';

    $response = $sdk->conversion->convertUrl($request);

    if ($response->convertUrl200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
