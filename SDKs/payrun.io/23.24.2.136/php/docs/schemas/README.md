# schemas

### Available Operations

* [getSchema](#getschema) - Get XSD schema
* [getSchemas](#getschemas) - Get a list of all available schemas

## getSchema

Returns the XSD schema for the specified data type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaRequest();
    $request->apiVersion = 'iure';
    $request->authorization = 'quibusdam';
    $request->dtoDataType = 'quod';

    $response = $sdk->schemas->getSchema($request);

    if ($response->getSchema200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchemas

Returns a collection of links to all the available data object schemas

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemasRequest();
    $request->apiVersion = 'nemo';
    $request->authorization = 'recusandae';

    $response = $sdk->schemas->getSchemas($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
