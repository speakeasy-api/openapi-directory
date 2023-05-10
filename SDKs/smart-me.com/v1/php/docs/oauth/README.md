# oAuth

### Available Operations

* [oAuthAuthorize](#oauthauthorize)
* [postApiOauthAuthorize](#postapioauthauthorize)

## oAuthAuthorize

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OAuthAuthorizeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OAuthAuthorizeRequest();
    $request->clientId = 'consequuntur';
    $request->clientSecret = 'quasi';
    $request->redirectUri = 'similique';
    $request->scope = 'culpa';
    $request->state = 'aliquid';

    $response = $sdk->oAuth->oAuthAuthorize($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiOauthAuthorize

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiOauthAuthorizeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiOauthAuthorizeRequest();
    $request->clientId = 'tenetur';
    $request->clientSecret = 'quae';
    $request->redirectUri = 'earum';
    $request->scope = 'vel';
    $request->state = 'in';

    $response = $sdk->oAuth->postApiOauthAuthorize($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
