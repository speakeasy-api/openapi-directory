# targetInstances

### Available Operations

* [computeTargetInstancesAggregatedList](#computetargetinstancesaggregatedlist) - Retrieves an aggregated list of target instances.
* [computeTargetInstancesDelete](#computetargetinstancesdelete) - Deletes the specified TargetInstance resource.
* [computeTargetInstancesGet](#computetargetinstancesget) - Returns the specified TargetInstance resource.
* [computeTargetInstancesInsert](#computetargetinstancesinsert) - Creates a TargetInstance resource in the specified project and zone using the data included in the request.
* [computeTargetInstancesList](#computetargetinstanceslist) - Retrieves a list of TargetInstance resources available to the specified project and zone.
* [computeTargetInstancesTestIamPermissions](#computetargetinstancestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetInstancesAggregatedList

Retrieves an aggregated list of target instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetInstancesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veritatis';
    $request->fields = 'saepe';
    $request->filter = 'quam';
    $request->includeAllScopes = false;
    $request->key = 'est';
    $request->maxResults = 694505;
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'earum';
    $request->pageToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'nobis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'corporis';
    $request->userIp = 'officiis';

    $requestSecurity = new ComputeTargetInstancesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeTargetInstancesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetInstances->computeTargetInstancesAggregatedList($request, $requestSecurity);

    if ($response->targetInstanceAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetInstancesDelete

Deletes the specified TargetInstance resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetInstancesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'deleniti';
    $request->key = 'rem';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'occaecati';
    $request->requestId = 'veritatis';
    $request->targetInstance = 'a';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'corrupti';
    $request->userIp = 'dolor';
    $request->zone = 'dolores';

    $requestSecurity = new ComputeTargetInstancesDeleteSecurity();
    $requestSecurity->option1 = new ComputeTargetInstancesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetInstances->computeTargetInstancesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetInstancesGet

Returns the specified TargetInstance resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetInstancesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'et';
    $request->fields = 'perspiciatis';
    $request->key = 'qui';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'nihil';
    $request->targetInstance = 'quo';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'alias';
    $request->zone = 'nihil';

    $requestSecurity = new ComputeTargetInstancesGetSecurity();
    $requestSecurity->option1 = new ComputeTargetInstancesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetInstances->computeTargetInstancesGet($request, $requestSecurity);

    if ($response->targetInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetInstancesInsert

Creates a TargetInstance resource in the specified project and zone using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetInstance;
use \OpenAPI\OpenAPI\Models\Shared\TargetInstanceNatPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetInstancesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetInstance = new TargetInstance();
    $request->targetInstance->creationTimestamp = 'voluptas';
    $request->targetInstance->description = 'nostrum';
    $request->targetInstance->id = 'tempora';
    $request->targetInstance->instance = 'corporis';
    $request->targetInstance->kind = 'eaque';
    $request->targetInstance->name = 'Kimberly O'Connell';
    $request->targetInstance->natPolicy = TargetInstanceNatPolicyEnum::NO_NAT;
    $request->targetInstance->network = 'dolor';
    $request->targetInstance->selfLink = 'vel';
    $request->targetInstance->zone = 'est';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'eveniet';
    $request->key = 'ratione';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'molestiae';
    $request->requestId = 'in';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'animi';
    $request->userIp = 'dolores';
    $request->zone = 'facilis';

    $requestSecurity = new ComputeTargetInstancesInsertSecurity();
    $requestSecurity->option1 = new ComputeTargetInstancesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetInstances->computeTargetInstancesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetInstancesList

Retrieves a list of TargetInstance resources available to the specified project and zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'officiis';
    $request->filter = 'fugiat';
    $request->key = 'delectus';
    $request->maxResults = 407945;
    $request->oauthToken = 'eius';
    $request->orderBy = 'error';
    $request->pageToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'deserunt';
    $request->quotaUser = 'rem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'optio';
    $request->zone = 'aliquid';

    $requestSecurity = new ComputeTargetInstancesListSecurity();
    $requestSecurity->option1 = new ComputeTargetInstancesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetInstances->computeTargetInstancesList($request, $requestSecurity);

    if ($response->targetInstanceList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetInstancesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetInstancesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'quae',
        'quae',
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'numquam';
    $request->fields = 'soluta';
    $request->key = 'quaerat';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'cumque';
    $request->resource = 'nisi';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'hic';
    $request->zone = 'molestias';

    $requestSecurity = new ComputeTargetInstancesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeTargetInstancesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetInstances->computeTargetInstancesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
