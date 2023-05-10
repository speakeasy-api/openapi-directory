# tokens

### Available Operations

* [tokensGetEphemeralToken](#tokensgetephemeraltoken) - Get Ephemeral Token

## tokensGetEphemeralToken

This endpoint returns a token that can be passed to an application for authorized access.  The lifetime of this token is 10 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TokensGetEphemeralTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\RedirectEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokensGetEphemeralTokenRequest();
    $request->redirect = RedirectEnum::SHIPENGINE_DASHBOARD;

    $response = $sdk->tokens->tokensGetEphemeralToken($request);

    if ($response->tokensGetEphemeralTokenResponseBodyYaml !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
