# applePay

### Available Operations

* [registerDomain](#registerdomain) - RegisterDomain

## registerDomain

Activates a domain for use with Apple Pay on the Web and Square. A validation
is performed on this domain by Apple to ensure that it is properly set up as
an Apple Pay enabled domain.

This endpoint provides an easy way for platform developers to bulk activate
Apple Pay on the Web with Square for merchants using their platform.

To learn more about Web Apple Pay, see
[Add the Apple Pay on the Web Button](https://developer.squareup.com/docs/payment-form/add-digital-wallets/apple-pay).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDomainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterDomainRequest();
    $request->domainName = 'provident';

    $requestSecurity = new RegisterDomainSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applePay->registerDomain($request, $requestSecurity);

    if ($response->registerDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
