# persona

### Available Operations

* [getPersonas](#getpersonas) - Get Personas
* [getPersonasId](#getpersonasid) - Get Persona by id

## getPersonas

Get Personas

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPersonasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPersonasRequest();
    $request->count = 963663;
    $request->expand = [
        'suscipit',
        'molestiae',
    ];
    $request->fields = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->name = 'Mrs. Sophie Smith MD';
    $request->page = 20218;

    $response = $sdk->persona->getPersonas($request);

    if ($response->getPersonas200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPersonasId

Get Persona by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPersonasIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPersonasIdRequest();
    $request->expand = [
        'repellendus',
        'sapiente',
    ];
    $request->fields = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->id = 473608;

    $response = $sdk->persona->getPersonasId($request);

    if ($response->persona !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
