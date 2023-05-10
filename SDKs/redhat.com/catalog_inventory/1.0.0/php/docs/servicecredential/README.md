# serviceCredential

### Available Operations

* [listServiceCredentials](#listservicecredentials) - List ServiceCredentials
* [showServiceCredential](#showservicecredential) - Show an existing ServiceCredential

## listServiceCredentials

Returns an array of ServiceCredential objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceCredentialsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceCredentialsRequest();
    $request->filter = [
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->limit = 963663;
    $request->offset = 272656;
    $request->sortBy = [
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];

    $response = $sdk->serviceCredential->listServiceCredentials($request);

    if ($response->serviceCredentialsCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showServiceCredential

Returns a ServiceCredential object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShowServiceCredentialRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowServiceCredentialRequest();
    $request->id = '796ed151-a05d-4fc2-9df7-cc78ca1ba928';

    $response = $sdk->serviceCredential->showServiceCredential($request);

    if ($response->serviceCredential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
