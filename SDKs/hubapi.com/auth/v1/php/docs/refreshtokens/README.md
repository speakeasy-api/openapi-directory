# refreshTokens

### Available Operations

* [deleteOauthV1RefreshTokensTokenArchive](#deleteoauthv1refreshtokenstokenarchive)
* [getOauthV1RefreshTokensTokenGet](#getoauthv1refreshtokenstokenget)

## deleteOauthV1RefreshTokensTokenArchive

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOauthV1RefreshTokensTokenArchiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOauthV1RefreshTokensTokenArchiveRequest();
    $request->token = 'distinctio';

    $response = $sdk->refreshTokens->deleteOauthV1RefreshTokensTokenArchive($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOauthV1RefreshTokensTokenGet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOauthV1RefreshTokensTokenGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOauthV1RefreshTokensTokenGetRequest();
    $request->token = 'quibusdam';

    $response = $sdk->refreshTokens->getOauthV1RefreshTokensTokenGet($request);

    if ($response->refreshTokenInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
