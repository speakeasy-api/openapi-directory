# userinfo

### Available Operations

* [oauth2UserinfoGet](#oauth2userinfoget) - Get user info
* [oauth2UserinfoV2MeGet](#oauth2userinfov2meget) - Get user info

## oauth2UserinfoGet

Get user info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Oauth2UserinfoGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->userIp = 'suscipit';

    $requestSecurity = new Oauth2UserinfoGetSecurity();
    $requestSecurity->option1 = new Oauth2UserinfoGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userinfo->oauth2UserinfoGet($request, $requestSecurity);

    if ($response->userinfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## oauth2UserinfoV2MeGet

Get user info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoV2MeGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoV2MeGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoV2MeGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoV2MeGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2UserinfoV2MeGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Oauth2UserinfoV2MeGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->userIp = 'iusto';

    $requestSecurity = new Oauth2UserinfoV2MeGetSecurity();
    $requestSecurity->option1 = new Oauth2UserinfoV2MeGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userinfo->oauth2UserinfoV2MeGet($request, $requestSecurity);

    if ($response->userinfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
