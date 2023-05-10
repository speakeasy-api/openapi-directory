# tokens

### Available Operations

* [directoryTokensDelete](#directorytokensdelete) - Deletes all access tokens issued by a user for an application.
* [directoryTokensGet](#directorytokensget) - Gets information about an access token issued by a user.
* [directoryTokensList](#directorytokenslist) - Returns the set of tokens specified user has issued to 3rd party applications.

## directoryTokensDelete

Deletes all access tokens issued by a user for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryTokensDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryTokensDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryTokensDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptates';
    $request->clientId = 'non';
    $request->fields = 'rem';
    $request->key = 'quia';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'voluptatibus';
    $request->userKey = 'eligendi';

    $requestSecurity = new DirectoryTokensDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->directoryTokensDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryTokensGet

Gets information about an access token issued by a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryTokensGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryTokensGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryTokensGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->clientId = 'enim';
    $request->fields = 'optio';
    $request->key = 'rem';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'a';
    $request->userKey = 'iste';

    $requestSecurity = new DirectoryTokensGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->directoryTokensGet($request, $requestSecurity);

    if ($response->token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryTokensList

Returns the set of tokens specified user has issued to 3rd party applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryTokensListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryTokensListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryTokensListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'modi';
    $request->key = 'itaque';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'assumenda';
    $request->userKey = 'vero';

    $requestSecurity = new DirectoryTokensListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->directoryTokensList($request, $requestSecurity);

    if ($response->tokens !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
