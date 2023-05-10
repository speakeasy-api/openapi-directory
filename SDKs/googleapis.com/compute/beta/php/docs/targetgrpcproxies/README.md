# targetGrpcProxies

### Available Operations

* [computeTargetGrpcProxiesDelete](#computetargetgrpcproxiesdelete) - Deletes the specified TargetGrpcProxy in the given scope
* [computeTargetGrpcProxiesGet](#computetargetgrpcproxiesget) - Returns the specified TargetGrpcProxy resource in the given scope.
* [computeTargetGrpcProxiesInsert](#computetargetgrpcproxiesinsert) - Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.
* [computeTargetGrpcProxiesList](#computetargetgrpcproxieslist) - Lists the TargetGrpcProxies for a project in the given scope.
* [computeTargetGrpcProxiesPatch](#computetargetgrpcproxiespatch) - Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetGrpcProxiesTestIamPermissions](#computetargetgrpcproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetGrpcProxiesDelete

Deletes the specified TargetGrpcProxy in the given scope

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetGrpcProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'tempora';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'provident';
    $request->requestId = 'quod';
    $request->targetGrpcProxy = 'explicabo';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'ipsam';

    $requestSecurity = new ComputeTargetGrpcProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeTargetGrpcProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetGrpcProxies->computeTargetGrpcProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetGrpcProxiesGet

Returns the specified TargetGrpcProxy resource in the given scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetGrpcProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->fields = 'laboriosam';
    $request->key = 'veniam';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'a';
    $request->targetGrpcProxy = 'rerum';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'rem';

    $requestSecurity = new ComputeTargetGrpcProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeTargetGrpcProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetGrpcProxies->computeTargetGrpcProxiesGet($request, $requestSecurity);

    if ($response->targetGrpcProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetGrpcProxiesInsert

Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetGrpcProxy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetGrpcProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetGrpcProxy = new TargetGrpcProxy();
    $request->targetGrpcProxy->creationTimestamp = 'aperiam';
    $request->targetGrpcProxy->description = 'quasi';
    $request->targetGrpcProxy->fingerprint = 'ad';
    $request->targetGrpcProxy->id = 'maiores';
    $request->targetGrpcProxy->kind = 'magni';
    $request->targetGrpcProxy->name = 'Jeanne Orn II';
    $request->targetGrpcProxy->selfLink = 'aut';
    $request->targetGrpcProxy->selfLinkWithId = 'esse';
    $request->targetGrpcProxy->urlMap = 'consequatur';
    $request->targetGrpcProxy->validateForProxyless = false;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'quam';
    $request->key = 'amet';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'odit';
    $request->requestId = 'modi';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'totam';

    $requestSecurity = new ComputeTargetGrpcProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeTargetGrpcProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetGrpcProxies->computeTargetGrpcProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetGrpcProxiesList

Lists the TargetGrpcProxies for a project in the given scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetGrpcProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'hic';
    $request->filter = 'officiis';
    $request->key = 'illum';
    $request->maxResults = 575198;
    $request->oauthToken = 'commodi';
    $request->orderBy = 'qui';
    $request->pageToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'consectetur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'recusandae';

    $requestSecurity = new ComputeTargetGrpcProxiesListSecurity();
    $requestSecurity->option1 = new ComputeTargetGrpcProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetGrpcProxies->computeTargetGrpcProxiesList($request, $requestSecurity);

    if ($response->targetGrpcProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetGrpcProxiesPatch

Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetGrpcProxy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetGrpcProxiesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetGrpcProxy1 = new TargetGrpcProxy();
    $request->targetGrpcProxy1->creationTimestamp = 'porro';
    $request->targetGrpcProxy1->description = 'consectetur';
    $request->targetGrpcProxy1->fingerprint = 'molestias';
    $request->targetGrpcProxy1->id = 'nostrum';
    $request->targetGrpcProxy1->kind = 'quo';
    $request->targetGrpcProxy1->name = 'Dr. Ada King MD';
    $request->targetGrpcProxy1->selfLink = 'beatae';
    $request->targetGrpcProxy1->selfLinkWithId = 'culpa';
    $request->targetGrpcProxy1->urlMap = 'quos';
    $request->targetGrpcProxy1->validateForProxyless = false;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'earum';
    $request->key = 'eum';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'perspiciatis';
    $request->requestId = 'cum';
    $request->targetGrpcProxyPathParameter = 'excepturi';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'fugit';

    $requestSecurity = new ComputeTargetGrpcProxiesPatchSecurity();
    $requestSecurity->option1 = new ComputeTargetGrpcProxiesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetGrpcProxies->computeTargetGrpcProxiesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetGrpcProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetGrpcProxiesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetGrpcProxiesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'modi',
        'modi',
    ];
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'dicta';
    $request->key = 'quidem';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'magnam';
    $request->resource = 'dignissimos';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'sed';
    $request->userIp = 'iusto';

    $requestSecurity = new ComputeTargetGrpcProxiesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeTargetGrpcProxiesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetGrpcProxies->computeTargetGrpcProxiesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
