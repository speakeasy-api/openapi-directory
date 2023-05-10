# groundhogs

### Available Operations

* [groundhog](#groundhog) - Get a groundhog by slug
* [groundhogs](#groundhogs) - Get all groundhogs

## groundhog

Returns a prognosticating animal and its known predictions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroundhogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroundhogRequest();
    $request->slug = 'provident';

    $response = $sdk->groundhogs->groundhog($request);

    if ($response->groundhog200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groundhogs

Returns all prognosticating animals with their known predictions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroundhogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroundhogsIsGroundhogEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroundhogsRequest();
    $request->country = 'Canada or USA';
    $request->isGroundhog = GroundhogsIsGroundhogEnum::TRUE;

    $response = $sdk->groundhogs->groundhogs($request);

    if ($response->groundhogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
