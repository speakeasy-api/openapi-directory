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
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'odio';
    $request->key = 'assumenda';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'eos';
    $request->region = 'facere';
    $request->requestId = 'iure';
    $request->targetTcpProxy = 'delectus';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'tenetur';
    $request->userIp = 'veniam';

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
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolores';
    $request->fields = 'sint';
    $request->key = 'nulla';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'quam';
    $request->region = 'ad';
    $request->targetTcpProxy = 'quisquam';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'blanditiis';

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
    $request->targetTcpProxy->creationTimestamp = 'sit';
    $request->targetTcpProxy->description = 'fugit';
    $request->targetTcpProxy->id = 'deleniti';
    $request->targetTcpProxy->kind = 'dolores';
    $request->targetTcpProxy->name = 'Jon Boyer';
    $request->targetTcpProxy->proxyBind = false;
    $request->targetTcpProxy->proxyHeader = TargetTcpProxyProxyHeaderEnum::NONE;
    $request->targetTcpProxy->region = 'optio';
    $request->targetTcpProxy->selfLink = 'sapiente';
    $request->targetTcpProxy->service = 'iure';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'necessitatibus';
    $request->key = 'illum';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'nihil';
    $request->region = 'aspernatur';
    $request->requestId = 'numquam';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'praesentium';

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
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'necessitatibus';
    $request->filter = 'provident';
    $request->key = 'laudantium';
    $request->maxResults = 780332;
    $request->oauthToken = 'minus';
    $request->orderBy = 'officiis';
    $request->pageToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'esse';
    $request->region = 'sunt';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'accusantium';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'culpa',
        'doloremque',
        'officiis',
        'dolor',
    ];
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'veritatis';
    $request->key = 'optio';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'earum';
    $request->region = 'alias';
    $request->resource = 'sint';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'minima';

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
