<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddAddressGroupItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addAddressGroupItemsRequest = new AddAddressGroupItemsRequest();
    $request->addAddressGroupItemsRequest->items = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->addAddressGroupItemsRequest->requestId = 'nulla';
    $request->accessToken = 'corrupti';
    $request->addressGroup = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networksecurityProjectsLocationsAddressGroupsAddItems($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->