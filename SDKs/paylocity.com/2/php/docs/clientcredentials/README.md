# clientCredentials

### Available Operations

* [addClientSecret](#addclientsecret) - Obtain new client secret.

## addClientSecret

Obtain new client secret for Paylocity-issued client id. See Setup section for details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AddClientSecret;
use \OpenAPI\OpenAPI\Models\Operations\AddClientSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddClientSecret();
    $request->code = 'ab';

    $requestSecurity = new AddClientSecretSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->clientCredentials->addClientSecret($request, $requestSecurity);

    if ($response->clientCredentialsResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
