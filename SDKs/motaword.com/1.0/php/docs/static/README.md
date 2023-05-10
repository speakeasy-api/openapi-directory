# static

### Available Operations

* [getEndpoints](#getendpoints) - Available endpoints
* [getFormats](#getformats) - List of supported file formats
* [getLanguages](#getlanguages) - List of supported languages
* [getSwaggerYaml](#getswaggeryaml) - OpenAPI YAML representation of our API

## getEndpoints

The root endpoint will provide you with an OpenAPI definition of MotaWord API.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->static->getEndpoints();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFormats

Get a list of supported formats for documents, style guides and extensions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->static->getFormats();

    if ($response->getFormats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLanguages

Get a list of supported languages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->static->getLanguages();

    if ($response->languages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSwaggerYaml

Get Swagger YAML

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->static->getSwaggerYaml();

    if ($response->getSwaggerYaml200TextYamlString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
