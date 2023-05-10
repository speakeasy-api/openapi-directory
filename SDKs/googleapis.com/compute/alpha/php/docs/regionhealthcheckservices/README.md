# regionHealthCheckServices

### Available Operations

* [computeRegionHealthCheckServicesAggregatedList](#computeregionhealthcheckservicesaggregatedlist) - Retrieves the list of all HealthCheckService resources, regional and global, available to the specified project.
* [computeRegionHealthCheckServicesDelete](#computeregionhealthcheckservicesdelete) - Deletes the specified regional HealthCheckService.
* [computeRegionHealthCheckServicesGet](#computeregionhealthcheckservicesget) - Returns the specified regional HealthCheckService resource.
* [computeRegionHealthCheckServicesInsert](#computeregionhealthcheckservicesinsert) - Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
* [computeRegionHealthCheckServicesList](#computeregionhealthcheckserviceslist) - Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
* [computeRegionHealthCheckServicesPatch](#computeregionhealthcheckservicespatch) - Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionHealthCheckServicesTestIamPermissions](#computeregionhealthcheckservicestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionHealthCheckServicesAggregatedList

Retrieves the list of all HealthCheckService resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthCheckServicesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthCheckServicesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'alias';
    $request->fields = 'reprehenderit';
    $request->filter = 'officiis';
    $request->includeAllScopes = false;
    $request->key = 'eius';
    $request->maxResults = 964329;
    $request->oauthToken = 'similique';
    $request->orderBy = 'saepe';
    $request->pageToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'voluptatum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'esse';

    $requestSecurity = new ComputeRegionHealthCheckServicesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthCheckServicesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthCheckServices->computeRegionHealthCheckServicesAggregatedList($request, $requestSecurity);

    if ($response->healthCheckServiceAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minus';
    $request->fields = 'ratione';
    $request->healthCheckService = 'placeat';
    $request->key = 'est';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'repellat';
    $request->region = 'dignissimos';
    $request->requestId = 'asperiores';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'impedit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'libero';
    $request->healthCheckService = 'recusandae';
    $request->key = 'asperiores';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'reiciendis';
    $request->region = 'nisi';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'mollitia';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheckService = new HealthCheckService();
    $request->healthCheckService->creationTimestamp = 'repellendus';
    $request->healthCheckService->description = 'facilis';
    $request->healthCheckService->fingerprint = 'consequuntur';
    $request->healthCheckService->healthChecks = [
        'necessitatibus',
        'quam',
        'consequatur',
        'expedita',
    ];
    $request->healthCheckService->healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum::NO_AGGREGATION;
    $request->healthCheckService->healthStatusAggregationStrategy = HealthCheckServiceHealthStatusAggregationStrategyEnum::AND;
    $request->healthCheckService->id = 'ea';
    $request->healthCheckService->kind = 'excepturi';
    $request->healthCheckService->name = 'Archie Feeney';
    $request->healthCheckService->networkEndpointGroups = [
        'illum',
        'odio',
        'sit',
        'ut',
    ];
    $request->healthCheckService->notificationEndpoints = [
        'corrupti',
    ];
    $request->healthCheckService->region = 'accusantium';
    $request->healthCheckService->selfLink = 'saepe';
    $request->healthCheckService->selfLinkWithId = 'consequatur';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'maxime';
    $request->key = 'in';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'ullam';
    $request->region = 'similique';
    $request->requestId = 'aperiam';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'soluta';

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
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sint';
    $request->fields = 'sint';
    $request->filter = 'eos';
    $request->key = 'eius';
    $request->maxResults = 188343;
    $request->oauthToken = 'error';
    $request->orderBy = 'maiores';
    $request->pageToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'occaecati';
    $request->region = 'totam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'in';
    $request->uploadProtocol = 'est';
    $request->userIp = 'eius';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->healthCheckService1 = new HealthCheckService();
    $request->healthCheckService1->creationTimestamp = 'fugit';
    $request->healthCheckService1->description = 'libero';
    $request->healthCheckService1->fingerprint = 'esse';
    $request->healthCheckService1->healthChecks = [
        'iste',
    ];
    $request->healthCheckService1->healthStatusAggregationPolicy = HealthCheckServiceHealthStatusAggregationPolicyEnum::NO_AGGREGATION;
    $request->healthCheckService1->healthStatusAggregationStrategy = HealthCheckServiceHealthStatusAggregationStrategyEnum::AND;
    $request->healthCheckService1->id = 'minima';
    $request->healthCheckService1->kind = 'ipsum';
    $request->healthCheckService1->name = 'Craig Conroy Sr.';
    $request->healthCheckService1->networkEndpointGroups = [
        'autem',
    ];
    $request->healthCheckService1->notificationEndpoints = [
        'ad',
        'ipsum',
        'omnis',
    ];
    $request->healthCheckService1->region = 'eligendi';
    $request->healthCheckService1->selfLink = 'saepe';
    $request->healthCheckService1->selfLinkWithId = 'ipsa';
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eos';
    $request->fields = 'repellendus';
    $request->healthCheckServicePathParameter = 'vitae';
    $request->key = 'aperiam';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'possimus';
    $request->region = 'vitae';
    $request->requestId = 'ad';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'praesentium';
    $request->userIp = 'porro';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'perferendis',
    ];
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'praesentium';
    $request->key = 'nisi';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'at';
    $request->region = 'amet';
    $request->resource = 'ducimus';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'sed';

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
