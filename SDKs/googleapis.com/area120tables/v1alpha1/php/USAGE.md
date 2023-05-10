<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->orderBy = 'illum';
    $request->pageSize = 423655;
    $request->pageToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new Area120tablesTablesListSecurity();
    $requestSecurity->option1 = new Area120tablesTablesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesList($request, $requestSecurity);

    if ($response->listTablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->