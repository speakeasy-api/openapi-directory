# targetTcpProxies

### Available Operations

* [computeTargetTcpProxiesAggregatedList](#computetargettcpproxiesaggregatedlist) - Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.
* [computeTargetTcpProxiesDelete](#computetargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesGet](#computetargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesInsert](#computetargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project using the data included in the request.
* [computeTargetTcpProxiesList](#computetargettcpproxieslist) - Retrieves the list of TargetTcpProxy resources available to the specified project.
* [computeTargetTcpProxiesSetBackendService](#computetargettcpproxiessetbackendservice) - Changes the BackendService for TargetTcpProxy.
* [computeTargetTcpProxiesSetProxyHeader](#computetargettcpproxiessetproxyheader) - Changes the ProxyHeaderType for TargetTcpProxy.

## computeTargetTcpProxiesAggregatedList

Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'iusto';
    $request->filter = 'laudantium';
    $request->includeAllScopes = false;
    $request->key = 'magni';
    $request->maxResults = 826677;
    $request->oauthToken = 'adipisci';
    $request->orderBy = 'aliquam';
    $request->pageToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'sit';
    $request->quotaUser = 'cum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'quo';

    $requestSecurity = new ComputeTargetTcpProxiesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesAggregatedList($request, $requestSecurity);

    if ($response->targetTcpProxyAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesDelete

Deletes the specified TargetTcpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sapiente';
    $request->key = 'ad';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'unde';
    $request->requestId = 'asperiores';
    $request->targetTcpProxy = 'excepturi';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'eaque';

    $requestSecurity = new ComputeTargetTcpProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesGet

Returns the specified TargetTcpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'deleniti';
    $request->key = 'aperiam';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'maxime';
    $request->quotaUser = 'nesciunt';
    $request->targetTcpProxy = 'commodi';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new ComputeTargetTcpProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesGet($request, $requestSecurity);

    if ($response->targetTcpProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesInsert

Creates a TargetTcpProxy resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxy;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxyProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetTcpProxy = new TargetTcpProxy();
    $request->targetTcpProxy->creationTimestamp = 'maiores';
    $request->targetTcpProxy->description = 'esse';
    $request->targetTcpProxy->id = 'sit';
    $request->targetTcpProxy->kind = 'adipisci';
    $request->targetTcpProxy->name = 'Mr. Valerie Walsh';
    $request->targetTcpProxy->proxyBind = false;
    $request->targetTcpProxy->proxyHeader = TargetTcpProxyProxyHeaderEnum::NONE;
    $request->targetTcpProxy->region = 'reprehenderit';
    $request->targetTcpProxy->selfLink = 'deleniti';
    $request->targetTcpProxy->service = 'saepe';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->fields = 'error';
    $request->key = 'magnam';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'maiores';
    $request->requestId = 'reprehenderit';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'eveniet';

    $requestSecurity = new ComputeTargetTcpProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesList

Retrieves the list of TargetTcpProxy resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'distinctio';
    $request->filter = 'vel';
    $request->key = 'sint';
    $request->maxResults = 834183;
    $request->oauthToken = 'minima';
    $request->orderBy = 'numquam';
    $request->pageToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'eius';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'sequi';
    $request->userIp = 'sint';

    $requestSecurity = new ComputeTargetTcpProxiesListSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesList($request, $requestSecurity);

    if ($response->targetTcpProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesSetBackendService

Changes the BackendService for TargetTcpProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetBackendServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxiesSetBackendServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetBackendServiceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetBackendServiceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetBackendServiceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesSetBackendServiceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetTcpProxiesSetBackendServiceRequest = new TargetTcpProxiesSetBackendServiceRequest();
    $request->targetTcpProxiesSetBackendServiceRequest->service = 'voluptatibus';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'nisi';
    $request->key = 'suscipit';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'expedita';
    $request->requestId = 'accusamus';
    $request->targetTcpProxy = 'laborum';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'consequuntur';

    $requestSecurity = new ComputeTargetTcpProxiesSetBackendServiceSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesSetBackendServiceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesSetBackendService($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesSetProxyHeader

Changes the ProxyHeaderType for TargetTcpProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetProxyHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxiesSetProxyHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxiesSetProxyHeaderRequestProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetProxyHeaderSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetProxyHeaderSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetProxyHeaderSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesSetProxyHeaderRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetTcpProxiesSetProxyHeaderRequest = new TargetTcpProxiesSetProxyHeaderRequest();
    $request->targetTcpProxiesSetProxyHeaderRequest->proxyHeader = TargetTcpProxiesSetProxyHeaderRequestProxyHeaderEnum::NONE;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'porro';
    $request->fields = 'sequi';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'voluptas';
    $request->requestId = 'error';
    $request->targetTcpProxy = 'quas';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'illo';

    $requestSecurity = new ComputeTargetTcpProxiesSetProxyHeaderSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesSetProxyHeaderSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesSetProxyHeader($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
