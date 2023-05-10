# payorsPrivate

### Available Operations

* [createPayorLinks](#createpayorlinks) - Create a Payor Link

## createPayorLinks

This endpoint allows you to create a payor link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayorLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayorLinkRequestLinkTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayorLinksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayorLinkRequest();
    $request->fromPayorId = '10661e96-349e-41cf-9e06-e3a437000ae6';
    $request->linkType = CreatePayorLinkRequestLinkTypeEnum::PARENT_OF;
    $request->toPayorId = 'b6bc9b8f-759e-4ac5-9a97-41d311352965';

    $requestSecurity = new CreatePayorLinksSecurity();
    $requestSecurity->oAuthVeloBackOffice = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payorsPrivate->createPayorLinks($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
