<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusActivitiesGetRequest();
    $request->activityId = 'corrupti';
    $request->alt = AltEnum::JSON;
    $request->fields = 'provident';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->userIp = 'nulla';

    $requestSecurity = new PlusActivitiesGetSecurity();
    $requestSecurity->option1 = new PlusActivitiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->plusActivitiesGet($request, $requestSecurity);

    if ($response->activity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->