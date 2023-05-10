# SDK

## Overview

Obtains end-user authorization grants for use with other Google APIs.

<https://developers.google.com/identity/protocols/oauth2/>
### Available Operations

* [oauth2Tokeninfo](#oauth2tokeninfo) - Get token info

## oauth2Tokeninfo

Get token info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2TokeninfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Oauth2TokeninfoRequest();
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->fields = 'vel';
    $request->idToken = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->userIp = 'magnam';

    $response = $sdk->sdk->oauth2Tokeninfo($request);

    if ($response->tokeninfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
