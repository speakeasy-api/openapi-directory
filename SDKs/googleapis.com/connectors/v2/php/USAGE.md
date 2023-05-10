<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsActionsExecuteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsActionsExecuteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->executeActionRequest = new ExecuteActionRequest();
    $request->executeActionRequest->parameters = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->name = 'Raquel Bednar';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsActionsExecute($request, $requestSecurity);

    if ($response->executeActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->