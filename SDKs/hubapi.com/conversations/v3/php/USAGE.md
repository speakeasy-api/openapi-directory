<!-- Start SDK Example Usage -->
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
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->firstName = 'Karley';
    $request->lastName = 'Stamm';

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
<!-- End SDK Example Usage -->