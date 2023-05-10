# users

### Available Operations

* [bloggerUsersGet](#bloggerusersget) - Gets one user by user_id.

## bloggerUsersGet

Gets one user by user_id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerUsersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerUsersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerUsersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerUsersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerUsersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'id';
    $request->key = 'quis';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'corporis';
    $request->userId = 'quidem';

    $requestSecurity = new BloggerUsersGetSecurity();
    $requestSecurity->option1 = new BloggerUsersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->bloggerUsersGet($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
