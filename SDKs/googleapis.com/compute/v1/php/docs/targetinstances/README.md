# targetInstances

### Available Operations

* [computeTargetInstancesAggregatedList](#computetargetinstancesaggregatedlist) - Retrieves an aggregated list of target instances.
* [computeTargetInstancesDelete](#computetargetinstancesdelete) - Deletes the specified TargetInstance resource.
* [computeTargetInstancesGet](#computetargetinstancesget) - Returns the specified TargetInstance resource.
* [computeTargetInstancesInsert](#computetargetinstancesinsert) - Creates a TargetInstance resource in the specified project and zone using the data included in the request.
* [computeTargetInstancesList](#computetargetinstanceslist) - Retrieves a list of TargetInstance resources available to the specified project and zone.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'culpa';
    $request->filter = 'odit';
    $request->includeAllScopes = false;
    $request->key = 'laudantium';
    $request->maxResults = 220907;
    $request->oauthToken = 'consequuntur';
    $request->orderBy = 'libero';
    $request->pageToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'ad';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'fugit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'velit';
    $request->fields = 'veritatis';
    $request->key = 'doloribus';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->project = 'distinctio';
    $request->quotaUser = 'veritatis';
    $request->requestId = 'tempora';
    $request->targetInstance = 'deserunt';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'harum';
    $request->zone = 'placeat';

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
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'eius';
    $request->key = 'magnam';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'ratione';
    $request->targetInstance = 'qui';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'mollitia';
    $request->zone = 'veniam';

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
    $request->targetInstance->creationTimestamp = 'eveniet';
    $request->targetInstance->description = 'debitis';
    $request->targetInstance->id = 'inventore';
    $request->targetInstance->instance = 'laborum';
    $request->targetInstance->kind = 'cumque';
    $request->targetInstance->name = 'Lance Cremin';
    $request->targetInstance->natPolicy = TargetInstanceNatPolicyEnum::NO_NAT;
    $request->targetInstance->network = 'cupiditate';
    $request->targetInstance->selfLink = 'excepturi';
    $request->targetInstance->zone = 'voluptatum';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quis';
    $request->fields = 'corrupti';
    $request->key = 'tenetur';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'quos';
    $request->requestId = 'magni';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'maxime';
    $request->zone = 'aspernatur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'nesciunt';
    $request->filter = 'pariatur';
    $request->key = 'nostrum';
    $request->maxResults = 531391;
    $request->oauthToken = 'necessitatibus';
    $request->orderBy = 'deleniti';
    $request->pageToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'dignissimos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'consequuntur';
    $request->zone = 'sed';

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
