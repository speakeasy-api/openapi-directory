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
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quos';
    $request->fields = 'aliquid';
    $request->key = 'magni';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'magni';
    $request->quotaUser = 'delectus';
    $request->requestId = 'commodi';
    $request->targetGrpcProxy = 'a';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'aliquam';

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
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloribus';
    $request->fields = 'in';
    $request->key = 'voluptatem';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'mollitia';
    $request->targetGrpcProxy = 'molestiae';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'expedita';

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
    $request->targetGrpcProxy->creationTimestamp = 'dolorem';
    $request->targetGrpcProxy->description = 'quod';
    $request->targetGrpcProxy->fingerprint = 'veritatis';
    $request->targetGrpcProxy->id = 'aliquid';
    $request->targetGrpcProxy->kind = 'quo';
    $request->targetGrpcProxy->name = 'Rose Murray PhD';
    $request->targetGrpcProxy->selfLink = 'distinctio';
    $request->targetGrpcProxy->selfLinkWithId = 'fugiat';
    $request->targetGrpcProxy->urlMap = 'aut';
    $request->targetGrpcProxy->validateForProxyless = false;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'at';
    $request->key = 'possimus';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'error';
    $request->requestId = 'non';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'maxime';
    $request->userIp = 'quis';

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
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'voluptatem';
    $request->filter = 'voluptatum';
    $request->key = 'illum';
    $request->maxResults = 143330;
    $request->oauthToken = 'repellendus';
    $request->orderBy = 'accusamus';
    $request->pageToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'excepturi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'maiores';

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
    $request->targetGrpcProxy1->creationTimestamp = 'at';
    $request->targetGrpcProxy1->description = 'cupiditate';
    $request->targetGrpcProxy1->fingerprint = 'omnis';
    $request->targetGrpcProxy1->id = 'tempora';
    $request->targetGrpcProxy1->kind = 'ipsam';
    $request->targetGrpcProxy1->name = 'Mrs. Vernon Russel';
    $request->targetGrpcProxy1->selfLink = 'dignissimos';
    $request->targetGrpcProxy1->selfLinkWithId = 'velit';
    $request->targetGrpcProxy1->urlMap = 'tenetur';
    $request->targetGrpcProxy1->validateForProxyless = false;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'possimus';
    $request->key = 'dolore';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'rem';
    $request->requestId = 'quisquam';
    $request->targetGrpcProxyPathParameter = 'esse';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'soluta';

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
        'dolorem',
    ];
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'quam';
    $request->key = 'amet';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'doloremque';
    $request->resource = 'nemo';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'tempore';

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
