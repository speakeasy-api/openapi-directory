# about

### Available Operations

* [driveAboutGet](#driveaboutget) - Gets information about the user, the user's Drive, and system capabilities.

## driveAboutGet

Gets information about the user, the user's Drive, and system capabilities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveAboutGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveAboutGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveAboutGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveAboutGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveAboutGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveAboutGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveAboutGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveAboutGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveAboutGetSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveAboutGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->userIp = 'error';

    $requestSecurity = new DriveAboutGetSecurity();
    $requestSecurity->option1 = new DriveAboutGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->about->driveAboutGet($request, $requestSecurity);

    if ($response->about !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
