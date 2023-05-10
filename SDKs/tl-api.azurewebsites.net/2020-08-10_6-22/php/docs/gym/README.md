# gym

### Available Operations

* [gymGet](#gymget) - Get gym details
This will return all properties related to gym entity
            

## gymGet

Get gym details
This will return all properties related to gym entity
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GymGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GymGetRequest();
    $request->gymID = 358152;

    $response = $sdk->gym->gymGet($request);

    if ($response->defaultResponseDTOOfGymDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
