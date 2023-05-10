# regionHealthCheckServices

### Available Operations

* [computeRegionHealthCheckServicesDelete](#computeregionhealthcheckservicesdelete) - Deletes the specified regional HealthCheckService.
* [computeRegionHealthCheckServicesGet](#computeregionhealthcheckservicesget) - Returns the specified regional HealthCheckService resource.
* [computeRegionHealthCheckServicesInsert](#computeregionhealthcheckservicesinsert) - Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
* [computeRegionHealthCheckServicesList](#computeregionhealthcheckserviceslist) - Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
* [computeRegionHealthCheckServicesPatch](#computeregionhealthcheckservicespatch) - Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionHealthCheckServicesTestIamPermissions](#computeregionhealthcheckservicestestiampermissions) - Returns permissions that a caller has on the specified resource.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'numquam';
    $request->healthCheckService = 'distinctio';
    $request->key = 'error';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'corrupti';
    $request->region = 'deleniti';
    $request->requestId = 'possimus';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'ipsum';

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
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'inventore';
    $request->fields = 'eligendi';
    $request->healthCheckService = 'optio';
    $request->key = 'maxime';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'dicta';
    $request->region = 'quisquam';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'enim';

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
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckServiceHealthStatusAggregationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthCheckServicesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->healthCheckService = new HealthCheckService();
    $request->healthCheckService->creationTimestamp = 'dolor';
    $request->healthCheckService->description = 'magnam';
    $request->healthCheckService->fingerprint = 'iure';
    $request->healthCheckService->healthChecks = [
        'doloribus',
        'doloremque',
    ];
    $request->healthCheckService->healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum::NO_AGGREGATION;
    $request->healthCheckService->healthStatusAggregationStrategy = HealthCheckServiceHealthStatusAggregationStrategyEnum::AND;
    $request->healthCheckService->id = 'incidunt';
    $request->healthCheckService->kind = 'eaque';
    $request->healthCheckService->name = 'Bennie Goyette';
    $request->healthCheckService->networkEndpointGroups = [
        'eius',
        'illo',
    ];
    $request->healthCheckService->notificationEndpoints = [
        'ipsum',
        'deserunt',
        'doloremque',
        'sint',
    ];
    $request->healthCheckService->region = 'saepe';
    $request->healthCheckService->selfLink = 'esse';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perspiciatis';
    $request->fields = 'omnis';
    $request->key = 'minima';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'voluptatem';
    $request->region = 'corrupti';
    $request->requestId = 'tempore';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'odio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minima';
    $request->fields = 'exercitationem';
    $request->filter = 'recusandae';
    $request->key = 'nobis';
    $request->maxResults = 777355;
    $request->oauthToken = 'nemo';
    $request->orderBy = 'minima';
    $request->pageToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'beatae';
    $request->region = 'impedit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'nisi';

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
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckServiceHealthStatusAggregationStrategyEnum;
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
    $request->healthCheckService1->creationTimestamp = 'nemo';
    $request->healthCheckService1->description = 'cupiditate';
    $request->healthCheckService1->fingerprint = 'maxime';
    $request->healthCheckService1->healthChecks = [
        'dolor',
        'commodi',
        'ea',
    ];
    $request->healthCheckService1->healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum::NO_AGGREGATION;
    $request->healthCheckService1->healthStatusAggregationStrategy = HealthCheckServiceHealthStatusAggregationStrategyEnum::NO_AGGREGATION;
    $request->healthCheckService1->id = 'maxime';
    $request->healthCheckService1->kind = 'minus';
    $request->healthCheckService1->name = 'Gladys Harris';
    $request->healthCheckService1->networkEndpointGroups = [
        'quisquam',
    ];
    $request->healthCheckService1->notificationEndpoints = [
        'expedita',
    ];
    $request->healthCheckService1->region = 'quos';
    $request->healthCheckService1->selfLink = 'veniam';
    $request->accessToken = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'atque';
    $request->healthCheckServicePathParameter = 'cupiditate';
    $request->key = 'fugiat';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'hic';
    $request->region = 'error';
    $request->requestId = 'consectetur';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'omnis';

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

## computeRegionHealthCheckServicesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthCheckServicesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'voluptatem',
    ];
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->fields = 'deserunt';
    $request->key = 'nulla';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'consequuntur';
    $request->region = 'dolore';
    $request->resource = 'fugit';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'voluptates';

    $requestSecurity = new ComputeRegionHealthCheckServicesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthCheckServicesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthCheckServices->computeRegionHealthCheckServicesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
