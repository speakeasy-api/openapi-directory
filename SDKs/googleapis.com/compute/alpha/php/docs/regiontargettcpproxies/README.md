# regionTargetTcpProxies

### Available Operations

* [computeRegionTargetTcpProxiesDelete](#computeregiontargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesGet](#computeregiontargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesInsert](#computeregiontargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetTcpProxiesList](#computeregiontargettcpproxieslist) - Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.
* [computeRegionTargetTcpProxiesTestIamPermissions](#computeregiontargettcpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionTargetTcpProxiesDelete

Deletes the specified TargetTcpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetTcpProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'aperiam';
    $request->key = 'error';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'magni';
    $request->quotaUser = 'expedita';
    $request->region = 'magnam';
    $request->requestId = 'dolorum';
    $request->targetTcpProxy = 'temporibus';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'exercitationem';

    $requestSecurity = new ComputeRegionTargetTcpProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetTcpProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetTcpProxies->computeRegionTargetTcpProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetTcpProxiesGet

Returns the specified TargetTcpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetTcpProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eveniet';
    $request->fields = 'velit';
    $request->key = 'molestiae';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'incidunt';
    $request->region = 'consectetur';
    $request->targetTcpProxy = 'exercitationem';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'at';

    $requestSecurity = new ComputeRegionTargetTcpProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetTcpProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetTcpProxies->computeRegionTargetTcpProxiesGet($request, $requestSecurity);

    if ($response->targetTcpProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetTcpProxiesInsert

Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxy;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxyProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetTcpProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetTcpProxy = new TargetTcpProxy();
    $request->targetTcpProxy->creationTimestamp = 'nemo';
    $request->targetTcpProxy->description = 'dolorum';
    $request->targetTcpProxy->id = 'odio';
    $request->targetTcpProxy->kind = 'delectus';
    $request->targetTcpProxy->name = 'Guadalupe Schimmel';
    $request->targetTcpProxy->proxyBind = false;
    $request->targetTcpProxy->proxyHeader = TargetTcpProxyProxyHeaderEnum::NONE;
    $request->targetTcpProxy->region = 'ab';
    $request->targetTcpProxy->selfLink = 'dolorum';
    $request->targetTcpProxy->service = 'voluptas';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'debitis';
    $request->fields = 'distinctio';
    $request->key = 'fugiat';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'alias';
    $request->region = 'doloremque';
    $request->requestId = 'perspiciatis';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'sunt';

    $requestSecurity = new ComputeRegionTargetTcpProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetTcpProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetTcpProxies->computeRegionTargetTcpProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetTcpProxiesList

Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetTcpProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->fields = 'veniam';
    $request->filter = 'sed';
    $request->key = 'consectetur';
    $request->maxResults = 778452;
    $request->oauthToken = 'pariatur';
    $request->orderBy = 'animi';
    $request->pageToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'soluta';
    $request->region = 'distinctio';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'pariatur';

    $requestSecurity = new ComputeRegionTargetTcpProxiesListSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetTcpProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetTcpProxies->computeRegionTargetTcpProxiesList($request, $requestSecurity);

    if ($response->targetTcpProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetTcpProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetTcpProxiesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'repellat',
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->fields = 'asperiores';
    $request->key = 'iste';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'minus';
    $request->region = 'numquam';
    $request->resource = 'vel';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'eaque';
    $request->userIp = 'iste';

    $requestSecurity = new ComputeRegionTargetTcpProxiesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetTcpProxiesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetTcpProxies->computeRegionTargetTcpProxiesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
