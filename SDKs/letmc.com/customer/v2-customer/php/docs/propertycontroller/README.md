# propertyController

### Available Operations

* [propertyControllerGetPropertiesPhotos](#propertycontrollergetpropertiesphotos) - A collection showing all the photos linked to a specific block, property or room

## propertyControllerGetPropertiesPhotos

A collection showing all the photos linked to a specific block, property or room

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PropertyControllerGetPropertiesPhotosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PropertyControllerGetPropertiesPhotosRequest();
    $request->count = 697631;
    $request->offset = 99280;
    $request->propertyID = 'ipsa';
    $request->shortName = 'reiciendis';
    $request->token = 'est';

    $response = $sdk->propertyController->propertyControllerGetPropertiesPhotos($request);

    if ($response->landlordPhotoModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
