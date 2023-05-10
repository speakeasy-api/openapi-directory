<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryDatasetsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'corrupti';
    $request->deleteContents = false;
    $request->fields = 'provident';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->projectId = 'unde';
    $request->quotaUser = 'nulla';
    $request->userIp = 'corrupti';

    $requestSecurity = new BigqueryDatasetsDeleteSecurity();
    $requestSecurity->option1 = new BigqueryDatasetsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datasets->bigqueryDatasetsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->