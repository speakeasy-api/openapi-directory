# tokens

### Available Operations

* [postOauthV1TokenCreate](#postoauthv1tokencreate)

## postOauthV1TokenCreate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOauthV1TokenCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostOauthV1TokenCreateRequestBodyGrantTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOauthV1TokenCreateRequestBody();
    $request->clientId = 'unde';
    $request->clientSecret = 'nulla';
    $request->code = 'corrupti';
    $request->grantType = PostOauthV1TokenCreateRequestBodyGrantTypeEnum::REFRESH_TOKEN;
    $request->redirectUri = 'vel';
    $request->refreshToken = 'error';

    $response = $sdk->tokens->postOauthV1TokenCreate($request);

    if ($response->tokenResponseIF !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
