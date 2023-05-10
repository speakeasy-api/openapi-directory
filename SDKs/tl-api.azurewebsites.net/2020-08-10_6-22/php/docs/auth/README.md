# auth

### Available Operations

* [authLogin](#authlogin) - Authenticate and provide token for autherizations.
            

## authLogin

Authenticate and provide token for autherizations.
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LoginDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LoginDTO();
    $request->password = 'est';
    $request->remember = false;
    $request->username = 'Madaline21';

    $response = $sdk->auth->authLogin($request);

    if ($response->authLogin200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
