# sdfdownloadtasks

### Available Operations

* [displayvideoSdfdownloadtasksOperationsGet](#displayvideosdfdownloadtasksoperationsget) - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

## displayvideoSdfdownloadtasksOperationsGet

Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoSdfdownloadtasksOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->name = 'Javier Schmidt';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DisplayvideoSdfdownloadtasksOperationsGetSecurity();
    $requestSecurity->option1 = new DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdfdownloadtasks->displayvideoSdfdownloadtasksOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
