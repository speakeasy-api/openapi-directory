# regionHealthCheckServices

### Available Operations

* [computeRegionHealthCheckServicesDelete](#computeregionhealthcheckservicesdelete) - Deletes the specified regional HealthCheckService.
* [computeRegionHealthCheckServicesGet](#computeregionhealthcheckservicesget) - Returns the specified regional HealthCheckService resource.
* [computeRegionHealthCheckServicesInsert](#computeregionhealthcheckservicesinsert) - Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
* [computeRegionHealthCheckServicesList](#computeregionhealthcheckserviceslist) - Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
* [computeRegionHealthCheckServicesPatch](#computeregionhealthcheckservicespatch) - Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

## computeRegionHealthCheckServicesDelete

Deletes the specified regional HealthCheckService.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthCheckServicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'est';
    $request->healthCheckService = 'iure';
    $request->key = 'aut';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'voluptatum';
    $request->quotaUser = 'doloribus';
    $request->region = 'officiis';
    $request->requestId = 'dolore';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'commodi';

    $requestSecurity = new ComputeRegionHealthCheckServicesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthCheckServicesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthCheckServices->computeRegionHealthCheckServicesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthCheckServicesGet

Returns the specified regional HealthCheckService resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthCheckServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->fields = 'quidem';
    $request->healthCheckService = 'iste';
    $request->key = 'pariatur';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'distinctio';
    $request->region = 'dignissimos';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'voluptatibus';

    $requestSecurity = new ComputeRegionHealthCheckServicesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthCheckServicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthCheckServices->computeRegionHealthCheckServicesGet($request, $requestSecurity);

    if ($response->healthCheckService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthCheckServicesInsert

Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckService;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckServiceHealthStatusAggregationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthCheckServicesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheckService = new HealthCheckService();
    $request->healthCheckService->creationTimestamp = 'facilis';
    $request->healthCheckService->description = 'nisi';
    $request->healthCheckService->fingerprint = 'occaecati';
    $request->healthCheckService->healthChecks = [
        'aperiam',
        'repudiandae',
    ];
    $request->healthCheckService->healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum::NO_AGGREGATION;
    $request->healthCheckService->id = 'odio';
    $request->healthCheckService->kind = 'nihil';
    $request->healthCheckService->name = 'Olive Doyle V';
    $request->healthCheckService->networkEndpointGroups = [
        'debitis',
        'voluptatibus',
    ];
    $request->healthCheckService->notificationEndpoints = [
        'maxime',
        'eos',
    ];
    $request->healthCheckService->region = 'doloremque';
    $request->healthCheckService->selfLink = 'vel';
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'tempore';
    $request->key = 'sit';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'aut';
    $request->region = 'blanditiis';
    $request->requestId = 'ducimus';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'porro';

    $requestSecurity = new ComputeRegionHealthCheckServicesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthCheckServicesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthCheckServices->computeRegionHealthCheckServicesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthCheckServicesList

Lists all the HealthCheckService resources that have been configured for the specified project in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthCheckServicesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'temporibus';
    $request->filter = 'perspiciatis';
    $request->key = 'corrupti';
    $request->maxResults = 410574;
    $request->oauthToken = 'sequi';
    $request->orderBy = 'esse';
    $request->pageToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'totam';
    $request->region = 'corporis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'delectus';

    $requestSecurity = new ComputeRegionHealthCheckServicesListSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthCheckServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthCheckServices->computeRegionHealthCheckServicesList($request, $requestSecurity);

    if ($response->healthCheckServicesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthCheckServicesPatch

Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckService;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckServiceHealthStatusAggregationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthCheckServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheckService1 = new HealthCheckService();
    $request->healthCheckService1->creationTimestamp = 'autem';
    $request->healthCheckService1->description = 'nostrum';
    $request->healthCheckService1->fingerprint = 'ad';
    $request->healthCheckService1->healthChecks = [
        'ut',
        'possimus',
    ];
    $request->healthCheckService1->healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum::NO_AGGREGATION;
    $request->healthCheckService1->id = 'culpa';
    $request->healthCheckService1->kind = 'reiciendis';
    $request->healthCheckService1->name = 'Mario Nikolaus';
    $request->healthCheckService1->networkEndpointGroups = [
        'rem',
        'a',
        'illo',
    ];
    $request->healthCheckService1->notificationEndpoints = [
        'est',
    ];
    $request->healthCheckService1->region = 'delectus';
    $request->healthCheckService1->selfLink = 'magni';
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'quia';
    $request->healthCheckServicePathParameter = 'porro';
    $request->key = 'sapiente';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'voluptatibus';
    $request->region = 'eius';
    $request->requestId = 'voluptatibus';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'vero';

    $requestSecurity = new ComputeRegionHealthCheckServicesPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthCheckServicesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthCheckServices->computeRegionHealthCheckServicesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
