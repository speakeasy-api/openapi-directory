# generate

## Overview

Operations to generate a token

### Available Operations

* [postVisitorIdentificationV3TokensCreateGenerateToken](#postvisitoridentificationv3tokenscreategeneratetoken) - Generate a token

## postVisitorIdentificationV3TokensCreateGenerateToken

Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\IdentificationTokenGenerationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentificationTokenGenerationRequest();
    $request->email = 'Linda.Oberbrunner@yahoo.com';
    $request->firstName = 'Eli';
    $request->lastName = 'Toy';

    $requestSecurity = new PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->generate->postVisitorIdentificationV3TokensCreateGenerateToken($request, $requestSecurity);

    if ($response->identificationTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
