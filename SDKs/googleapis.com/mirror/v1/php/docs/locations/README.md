# locations

### Available Operations

* [mirrorLocationsGet](#mirrorlocationsget) - Gets a single location by ID.
* [mirrorLocationsList](#mirrorlocationslist) - Retrieves a list of locations for the user.

## mirrorLocationsGet

Gets a single location by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MirrorLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MirrorLocationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorLocationsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'aut';
    $request->id = 'c5fbb258-7053-4202-873d-5fe9b90c2890';
    $request->key = 'occaecati';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->userIp = 'asperiores';

    $requestSecurity = new MirrorLocationsGetSecurity();
    $requestSecurity->option1 = new MirrorLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->mirrorLocationsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorLocationsList

Retrieves a list of locations for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MirrorLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MirrorLocationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorLocationsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'earum';
    $request->key = 'modi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->userIp = 'deleniti';

    $requestSecurity = new MirrorLocationsListSecurity();
    $requestSecurity->option1 = new MirrorLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->mirrorLocationsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
