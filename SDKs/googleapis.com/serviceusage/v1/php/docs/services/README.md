# services

### Available Operations

* [serviceusageServicesBatchEnable](#serviceusageservicesbatchenable) - Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.
* [serviceusageServicesBatchGet](#serviceusageservicesbatchget) - Returns the service configurations and enabled states for a given list of services.
* [serviceusageServicesDisable](#serviceusageservicesdisable) - Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.
* [serviceusageServicesEnable](#serviceusageservicesenable) - Enable a service so that it can be used with a project.
* [serviceusageServicesGet](#serviceusageservicesget) - Returns the service configuration and enabled state for a given service.
* [serviceusageServicesList](#serviceusageserviceslist) - List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.

## serviceusageServicesBatchEnable

Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchEnableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchEnableServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchEnableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchEnableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchEnableSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesBatchEnableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchEnableServicesRequest = new BatchEnableServicesRequest();
    $request->batchEnableServicesRequest->serviceIds = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'architecto';
    $request->key = 'ipsa';
    $request->oauthToken = 'reiciendis';
    $request->parent = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new ServiceusageServicesBatchEnableSecurity();
    $requestSecurity->option1 = new ServiceusageServicesBatchEnableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesBatchEnable($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesBatchGet

Returns the service configurations and enabled states for a given list of services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->names = [
        'minima',
        'excepturi',
    ];
    $request->oauthToken = 'accusantium';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new ServiceusageServicesBatchGetSecurity();
    $requestSecurity->option1 = new ServiceusageServicesBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesBatchGet($request, $requestSecurity);

    if ($response->batchGetServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesDisable

Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesDisableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisableServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableServiceRequestCheckIfServiceHasUsageEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesDisableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesDisableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesDisableSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesDisableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->disableServiceRequest = new DisableServiceRequest();
    $request->disableServiceRequest->checkIfServiceHasUsage = DisableServiceRequestCheckIfServiceHasUsageEnum::SKIP;
    $request->disableServiceRequest->disableDependentServices = false;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->name = 'Francis Jerde';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new ServiceusageServicesDisableSecurity();
    $requestSecurity->option1 = new ServiceusageServicesDisableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesDisable($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesEnable

Enable a service so that it can be used with a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesEnableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesEnableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesEnableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesEnableSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesEnableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'animi' => 'enim',
        'odit' => 'quo',
        'sequi' => 'tenetur',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->key = 'quasi';
    $request->name = 'Dr. Jake Pacocha';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new ServiceusageServicesEnableSecurity();
    $requestSecurity->option1 = new ServiceusageServicesEnableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesEnable($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesGet

Returns the service configuration and enabled state for a given service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'perferendis';
    $request->key = 'doloremque';
    $request->name = 'Mrs. April Wuckert';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new ServiceusageServicesGetSecurity();
    $requestSecurity->option1 = new ServiceusageServicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesGet($request, $requestSecurity);

    if ($response->googleApiServiceusageV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesList

List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->filter = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 865103;
    $request->pageToken = 'modi';
    $request->parent = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new ServiceusageServicesListSecurity();
    $requestSecurity->option1 = new ServiceusageServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
