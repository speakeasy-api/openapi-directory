# targetGrpcProxies

### Available Operations

* [computeTargetGrpcProxiesDelete](#computetargetgrpcproxiesdelete) - Deletes the specified TargetGrpcProxy in the given scope
* [computeTargetGrpcProxiesGet](#computetargetgrpcproxiesget) - Returns the specified TargetGrpcProxy resource in the given scope.
* [computeTargetGrpcProxiesInsert](#computetargetgrpcproxiesinsert) - Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.
* [computeTargetGrpcProxiesList](#computetargetgrpcproxieslist) - Lists the TargetGrpcProxies for a project in the given scope.
* [computeTargetGrpcProxiesPatch](#computetargetgrpcproxiespatch) - Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'assumenda';
    $request->key = 'optio';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'iusto';
    $request->requestId = 'nulla';
    $request->targetGrpcProxy = 'explicabo';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'expedita';

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
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'officia';
    $request->key = 'ut';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'totam';
    $request->targetGrpcProxy = 'sunt';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'quisquam';
    $request->userIp = 'eligendi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetGrpcProxy = new TargetGrpcProxy();
    $request->targetGrpcProxy->creationTimestamp = 'aliquid';
    $request->targetGrpcProxy->description = 'laborum';
    $request->targetGrpcProxy->fingerprint = 'sed';
    $request->targetGrpcProxy->id = 'voluptatibus';
    $request->targetGrpcProxy->kind = 'ipsa';
    $request->targetGrpcProxy->name = 'Gordon Reinger';
    $request->targetGrpcProxy->selfLink = 'dolor';
    $request->targetGrpcProxy->selfLinkWithId = 'quo';
    $request->targetGrpcProxy->urlMap = 'soluta';
    $request->targetGrpcProxy->validateForProxyless = false;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'similique';
    $request->fields = 'nihil';
    $request->key = 'commodi';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'possimus';
    $request->requestId = 'dolor';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'alias';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'cum';
    $request->filter = 'sint';
    $request->key = 'soluta';
    $request->maxResults = 32902;
    $request->oauthToken = 'repellendus';
    $request->orderBy = 'dignissimos';
    $request->pageToken = 'quaerat';
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'possimus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'dolorum';
    $request->userIp = 'nihil';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetGrpcProxy1 = new TargetGrpcProxy();
    $request->targetGrpcProxy1->creationTimestamp = 'molestiae';
    $request->targetGrpcProxy1->description = 'fugiat';
    $request->targetGrpcProxy1->fingerprint = 'ab';
    $request->targetGrpcProxy1->id = 'debitis';
    $request->targetGrpcProxy1->kind = 'dolorum';
    $request->targetGrpcProxy1->name = 'Alexis Koepp';
    $request->targetGrpcProxy1->selfLink = 'similique';
    $request->targetGrpcProxy1->selfLinkWithId = 'sint';
    $request->targetGrpcProxy1->urlMap = 'nobis';
    $request->targetGrpcProxy1->validateForProxyless = false;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'maiores';
    $request->key = 'et';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'hic';
    $request->requestId = 'vel';
    $request->targetGrpcProxyPathParameter = 'corporis';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'quasi';

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
