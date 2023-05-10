# integrations

### Available Operations

* [getIntegrationsToken](#getintegrationstoken) - Generate a new access token for MotaWord's integrations service

## getIntegrationsToken

Generate a new access token for MotaWord's integrations service

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
    $response = $sdk->integrations->getIntegrationsToken();

    if ($response->integrationsToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
