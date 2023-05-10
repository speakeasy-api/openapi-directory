# apps

### Available Operations

* [driveAppsGet](#driveappsget) - Gets a specific app.
* [driveAppsList](#driveappslist) - Lists a user's installed apps.

## driveAppsGet

Gets a specific app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsGetSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveAppsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->appId = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->userIp = 'molestiae';

    $requestSecurity = new DriveAppsGetSecurity();
    $requestSecurity->option1 = new DriveAppsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->driveAppsGet($request, $requestSecurity);

    if ($response->app !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveAppsList

Lists a user's installed apps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveAppsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveAppsListRequest();
    $request->alt = AltEnum::JSON;
    $request->appFilterExtensions = 'minus';
    $request->appFilterMimeTypes = 'placeat';
    $request->fields = 'voluptatum';
    $request->key = 'iusto';
    $request->languageCode = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->userIp = 'temporibus';

    $requestSecurity = new DriveAppsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->driveAppsList($request, $requestSecurity);

    if ($response->appList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
