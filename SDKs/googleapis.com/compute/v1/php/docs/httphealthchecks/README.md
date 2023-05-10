# httpHealthChecks

### Available Operations

* [computeHttpHealthChecksDelete](#computehttphealthchecksdelete) - Deletes the specified HttpHealthCheck resource.
* [computeHttpHealthChecksGet](#computehttphealthchecksget) - Returns the specified HttpHealthCheck resource.
* [computeHttpHealthChecksInsert](#computehttphealthchecksinsert) - Creates a HttpHealthCheck resource in the specified project using the data included in the request.
* [computeHttpHealthChecksList](#computehttphealthcheckslist) - Retrieves the list of HttpHealthCheck resources available to the specified project.
* [computeHttpHealthChecksPatch](#computehttphealthcheckspatch) - Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHttpHealthChecksUpdate](#computehttphealthchecksupdate) - Updates a HttpHealthCheck resource in the specified project using the data included in the request.

## computeHttpHealthChecksDelete

Deletes the specified HttpHealthCheck resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpHealthChecksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facere';
    $request->fields = 'neque';
    $request->httpHealthCheck = 'quis';
    $request->key = 'in';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'porro';
    $request->requestId = 'fugiat';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'ipsa';
    $request->userIp = 'reiciendis';

    $requestSecurity = new ComputeHttpHealthChecksDeleteSecurity();
    $requestSecurity->option1 = new ComputeHttpHealthChecksDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpHealthChecks->computeHttpHealthChecksDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpHealthChecksGet

Returns the specified HttpHealthCheck resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpHealthChecksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'quasi';
    $request->httpHealthCheck = 'architecto';
    $request->key = 'praesentium';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'fugiat';
    $request->quotaUser = 'enim';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'laudantium';
    $request->userIp = 'modi';

    $requestSecurity = new ComputeHttpHealthChecksGetSecurity();
    $requestSecurity->option1 = new ComputeHttpHealthChecksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpHealthChecks->computeHttpHealthChecksGet($request, $requestSecurity);

    if ($response->httpHealthCheck !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpHealthChecksInsert

Creates a HttpHealthCheck resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpHealthCheck1;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpHealthChecksInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->httpHealthCheck1 = new HttpHealthCheck1();
    $request->httpHealthCheck1->checkIntervalSec = 882157;
    $request->httpHealthCheck1->creationTimestamp = 'nulla';
    $request->httpHealthCheck1->description = 'repudiandae';
    $request->httpHealthCheck1->healthyThreshold = 844327;
    $request->httpHealthCheck1->host = 'praesentium';
    $request->httpHealthCheck1->id = 'enim';
    $request->httpHealthCheck1->kind = 'animi';
    $request->httpHealthCheck1->name = 'Frank Keeling';
    $request->httpHealthCheck1->port = 389630;
    $request->httpHealthCheck1->requestPath = 'ratione';
    $request->httpHealthCheck1->selfLink = 'blanditiis';
    $request->httpHealthCheck1->timeoutSec = 697729;
    $request->httpHealthCheck1->unhealthyThreshold = 848649;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'consequatur';
    $request->key = 'nesciunt';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'voluptas';
    $request->requestId = 'quo';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'omnis';

    $requestSecurity = new ComputeHttpHealthChecksInsertSecurity();
    $requestSecurity->option1 = new ComputeHttpHealthChecksInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpHealthChecks->computeHttpHealthChecksInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpHealthChecksList

Retrieves the list of HttpHealthCheck resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpHealthChecksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'molestiae';
    $request->filter = 'debitis';
    $request->key = 'vitae';
    $request->maxResults = 223717;
    $request->oauthToken = 'ad';
    $request->orderBy = 'atque';
    $request->pageToken = 'ut';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'reprehenderit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'et';

    $requestSecurity = new ComputeHttpHealthChecksListSecurity();
    $requestSecurity->option1 = new ComputeHttpHealthChecksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpHealthChecks->computeHttpHealthChecksList($request, $requestSecurity);

    if ($response->httpHealthCheckList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpHealthChecksPatch

Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpHealthCheck1;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpHealthChecksPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->httpHealthCheck1 = new HttpHealthCheck1();
    $request->httpHealthCheck1->checkIntervalSec = 773355;
    $request->httpHealthCheck1->creationTimestamp = 'ex';
    $request->httpHealthCheck1->description = 'praesentium';
    $request->httpHealthCheck1->healthyThreshold = 615597;
    $request->httpHealthCheck1->host = 'vitae';
    $request->httpHealthCheck1->id = 'tenetur';
    $request->httpHealthCheck1->kind = 'laudantium';
    $request->httpHealthCheck1->name = 'Mr. Lynne VonRueden';
    $request->httpHealthCheck1->port = 480741;
    $request->httpHealthCheck1->requestPath = 'inventore';
    $request->httpHealthCheck1->selfLink = 'voluptate';
    $request->httpHealthCheck1->timeoutSec = 151497;
    $request->httpHealthCheck1->unhealthyThreshold = 209602;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'voluptate';
    $request->httpHealthCheck = 'voluptate';
    $request->key = 'pariatur';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'fuga';
    $request->requestId = 'totam';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'at';
    $request->userIp = 'doloribus';

    $requestSecurity = new ComputeHttpHealthChecksPatchSecurity();
    $requestSecurity->option1 = new ComputeHttpHealthChecksPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpHealthChecks->computeHttpHealthChecksPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpHealthChecksUpdate

Updates a HttpHealthCheck resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpHealthCheck1;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpHealthChecksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->httpHealthCheck1 = new HttpHealthCheck1();
    $request->httpHealthCheck1->checkIntervalSec = 463695;
    $request->httpHealthCheck1->creationTimestamp = 'exercitationem';
    $request->httpHealthCheck1->description = 'voluptates';
    $request->httpHealthCheck1->healthyThreshold = 194194;
    $request->httpHealthCheck1->host = 'quis';
    $request->httpHealthCheck1->id = 'commodi';
    $request->httpHealthCheck1->kind = 'vel';
    $request->httpHealthCheck1->name = 'Gilbert Bayer';
    $request->httpHealthCheck1->port = 932057;
    $request->httpHealthCheck1->requestPath = 'unde';
    $request->httpHealthCheck1->selfLink = 'cumque';
    $request->httpHealthCheck1->timeoutSec = 225001;
    $request->httpHealthCheck1->unhealthyThreshold = 833946;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minima';
    $request->fields = 'a';
    $request->httpHealthCheck = 'beatae';
    $request->key = 'vitae';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'earum';
    $request->requestId = 'laborum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'odit';

    $requestSecurity = new ComputeHttpHealthChecksUpdateSecurity();
    $requestSecurity->option1 = new ComputeHttpHealthChecksUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpHealthChecks->computeHttpHealthChecksUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
