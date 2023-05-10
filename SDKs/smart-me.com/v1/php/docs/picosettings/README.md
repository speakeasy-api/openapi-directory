# picoSettings

### Available Operations

* [picoSettingsGet](#picosettingsget) - GET: api/pico/settings
            
            Returns the settings of a pico charging station.

## picoSettingsGet

GET: api/pico/settings
            
            Returns the settings of a pico charging station.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PicoSettingsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PicoSettingsGetRequest();
    $request->id = '35b60eb1-ea42-4655-9ba3-c28744ed53b8';

    $response = $sdk->picoSettings->picoSettingsGet($request);

    if ($response->picoSettingsDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
