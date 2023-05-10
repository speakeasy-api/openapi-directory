<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsFederationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FederationInput;
use \OpenAPI\OpenAPI\Models\Shared\BackendMetastore;
use \OpenAPI\OpenAPI\Models\Shared\BackendMetastoreMetastoreTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsFederationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsFederationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->federationInput = new FederationInput();
    $request->federationInput->backendMetastores = [
        'distinctio' => new BackendMetastore(),
        'quibusdam' => new BackendMetastore(),
        'unde' => new BackendMetastore(),
    ];
    $request->federationInput->labels = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->federationInput->name = 'Larry Windler';
    $request->federationInput->version = 'molestiae';
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->federationId = 'iusto';
    $request->fields = 'excepturi';
    $request->key = 'nisi';
    $request->oauthToken = 'recusandae';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->requestId = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new MetastoreProjectsLocationsFederationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsFederationsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->