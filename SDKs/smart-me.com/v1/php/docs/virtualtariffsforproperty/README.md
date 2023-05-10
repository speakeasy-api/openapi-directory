# virtualTariffsForProperty

### Available Operations

* [virtualTariffsForPropertyGet](#virtualtariffsforpropertyget) - Gets all Virtual Tariffs for a property (folder)

## virtualTariffsForPropertyGet

Gets all Virtual Tariffs for a property (folder)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VirtualTariffsForPropertyGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VirtualTariffsForPropertyGetRequest();
    $request->id = 'da757a59-ecfe-4f66-af1c-aa3383c2beb4';

    $response = $sdk->virtualTariffsForProperty->virtualTariffsForPropertyGet($request);

    if ($response->virtualTariffsOfFolders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
