# targetInstances

### Available Operations

* [computeTargetInstancesAggregatedList](#computetargetinstancesaggregatedlist) - Retrieves an aggregated list of target instances.
* [computeTargetInstancesDelete](#computetargetinstancesdelete) - Deletes the specified TargetInstance resource.
* [computeTargetInstancesGet](#computetargetinstancesget) - Returns the specified TargetInstance resource.
* [computeTargetInstancesInsert](#computetargetinstancesinsert) - Creates a TargetInstance resource in the specified project and zone using the data included in the request.
* [computeTargetInstancesList](#computetargetinstanceslist) - Retrieves a list of TargetInstance resources available to the specified project and zone.
* [computeTargetInstancesSetSecurityPolicy](#computetargetinstancessetsecuritypolicy) - Sets the Google Cloud Armor security policy for the specified target instance. For more information, see Google Cloud Armor Overview
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
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'reiciendis';
    $request->filter = 'amet';
    $request->includeAllScopes = false;
    $request->key = 'dignissimos';
    $request->maxResults = 114926;
    $request->oauthToken = 'quisquam';
    $request->orderBy = 'eveniet';
    $request->pageToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'architecto';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'saepe';

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
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nesciunt';
    $request->fields = 'officiis';
    $request->key = 'iusto';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'officia';
    $request->requestId = 'officia';
    $request->targetInstance = 'laboriosam';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'est';
    $request->userIp = 'porro';
    $request->zone = 'ex';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'iusto';
    $request->key = 'quaerat';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'temporibus';
    $request->targetInstance = 'sunt';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'unde';
    $request->zone = 'illo';

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
    $request->targetInstance->creationTimestamp = 'voluptate';
    $request->targetInstance->description = 'ab';
    $request->targetInstance->id = 'necessitatibus';
    $request->targetInstance->instance = 'ipsam';
    $request->targetInstance->kind = 'cupiditate';
    $request->targetInstance->name = 'Jan Kassulke';
    $request->targetInstance->natPolicy = TargetInstanceNatPolicyEnum::NO_NAT;
    $request->targetInstance->network = 'mollitia';
    $request->targetInstance->securityPolicy = 'iure';
    $request->targetInstance->selfLink = 'earum';
    $request->targetInstance->selfLinkWithId = 'ad';
    $request->targetInstance->zone = 'exercitationem';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'illum';
    $request->key = 'omnis';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'consequatur';
    $request->requestId = 'autem';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'ex';
    $request->zone = 'totam';

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
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->fields = 'minima';
    $request->filter = 'asperiores';
    $request->key = 'magni';
    $request->maxResults = 690862;
    $request->oauthToken = 'dicta';
    $request->orderBy = 'necessitatibus';
    $request->pageToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'asperiores';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'ipsum';
    $request->zone = 'cumque';

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

## computeTargetInstancesSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified target instance. For more information, see Google Cloud Armor Overview

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesSetSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesSetSecurityPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesSetSecurityPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetInstancesSetSecurityPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetInstancesSetSecurityPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyReference = new SecurityPolicyReference();
    $request->securityPolicyReference->securityPolicy = 'animi';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'aperiam';
    $request->key = 'veniam';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'voluptatem';
    $request->requestId = 'omnis';
    $request->targetInstance = 'a';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'ea';
    $request->userIp = 'quia';
    $request->zone = 'occaecati';

    $requestSecurity = new ComputeTargetInstancesSetSecurityPolicySecurity();
    $requestSecurity->option1 = new ComputeTargetInstancesSetSecurityPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetInstances->computeTargetInstancesSetSecurityPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
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
        'numquam',
        'sint',
        'illo',
        'dolores',
    ];
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'ratione';
    $request->key = 'ex';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'corporis';
    $request->resource = 'odio';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'voluptatibus';
    $request->zone = 'eos';

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
