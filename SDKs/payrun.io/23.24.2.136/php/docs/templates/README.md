# templates

### Available Operations

* [getTemplateModel](#gettemplatemodel) - Get the object template
* [getTemplates](#gettemplates) - Get a list of all available data object tempaltes

## getTemplateModel

Returns a template instance of the specified data type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemplateModelRequest();
    $request->apiVersion = 'eligendi';
    $request->authorization = 'recusandae';
    $request->dtoDataType = 'ex';

    $response = $sdk->templates->getTemplateModel($request);

    if ($response->getTemplateModel200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemplates

Returns a collection of links to all the available data object templates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemplatesRequest();
    $request->apiVersion = 'beatae';
    $request->authorization = 'veritatis';

    $response = $sdk->templates->getTemplates($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
