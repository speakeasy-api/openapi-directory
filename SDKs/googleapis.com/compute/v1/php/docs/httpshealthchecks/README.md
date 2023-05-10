# httpsHealthChecks

### Available Operations

* [computeHttpsHealthChecksDelete](#computehttpshealthchecksdelete) - Deletes the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksGet](#computehttpshealthchecksget) - Returns the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksInsert](#computehttpshealthchecksinsert) - Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
* [computeHttpsHealthChecksList](#computehttpshealthcheckslist) - Retrieves the list of HttpsHealthCheck resources available to the specified project.
* [computeHttpsHealthChecksPatch](#computehttpshealthcheckspatch) - Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHttpsHealthChecksUpdate](#computehttpshealthchecksupdate) - Updates a HttpsHealthCheck resource in the specified project using the data included in the request.

## computeHttpsHealthChecksDelete

Deletes the specified HttpsHealthCheck resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpsHealthChecksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'numquam';
    $request->fields = 'architecto';
    $request->httpsHealthCheck = 'est';
    $request->key = 'quaerat';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'omnis';
    $request->requestId = 'alias';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'expedita';

    $requestSecurity = new ComputeHttpsHealthChecksDeleteSecurity();
    $requestSecurity->option1 = new ComputeHttpsHealthChecksDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpsHealthChecks->computeHttpsHealthChecksDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpsHealthChecksGet

Returns the specified HttpsHealthCheck resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpsHealthChecksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quas';
    $request->fields = 'ipsa';
    $request->httpsHealthCheck = 'distinctio';
    $request->key = 'placeat';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'sit';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'distinctio';

    $requestSecurity = new ComputeHttpsHealthChecksGetSecurity();
    $requestSecurity->option1 = new ComputeHttpsHealthChecksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpsHealthChecks->computeHttpsHealthChecksGet($request, $requestSecurity);

    if ($response->httpsHealthCheck !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpsHealthChecksInsert

Creates a HttpsHealthCheck resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpsHealthCheck1;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpsHealthChecksInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->httpsHealthCheck1 = new HttpsHealthCheck1();
    $request->httpsHealthCheck1->checkIntervalSec = 850406;
    $request->httpsHealthCheck1->creationTimestamp = 'soluta';
    $request->httpsHealthCheck1->description = 'magnam';
    $request->httpsHealthCheck1->healthyThreshold = 512349;
    $request->httpsHealthCheck1->host = 'tempora';
    $request->httpsHealthCheck1->id = 'esse';
    $request->httpsHealthCheck1->kind = 'doloremque';
    $request->httpsHealthCheck1->name = 'Dominick Purdy';
    $request->httpsHealthCheck1->port = 227424;
    $request->httpsHealthCheck1->requestPath = 'natus';
    $request->httpsHealthCheck1->selfLink = 'ab';
    $request->httpsHealthCheck1->timeoutSec = 887835;
    $request->httpsHealthCheck1->unhealthyThreshold = 429823;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'ad';
    $request->key = 'blanditiis';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'impedit';
    $request->requestId = 'ut';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'numquam';

    $requestSecurity = new ComputeHttpsHealthChecksInsertSecurity();
    $requestSecurity->option1 = new ComputeHttpsHealthChecksInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpsHealthChecks->computeHttpsHealthChecksInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpsHealthChecksList

Retrieves the list of HttpsHealthCheck resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpsHealthChecksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'itaque';
    $request->fields = 'fuga';
    $request->filter = 'consectetur';
    $request->key = 'modi';
    $request->maxResults = 134832;
    $request->oauthToken = 'explicabo';
    $request->orderBy = 'suscipit';
    $request->pageToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'sint';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'accusantium';

    $requestSecurity = new ComputeHttpsHealthChecksListSecurity();
    $requestSecurity->option1 = new ComputeHttpsHealthChecksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpsHealthChecks->computeHttpsHealthChecksList($request, $requestSecurity);

    if ($response->httpsHealthCheckList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpsHealthChecksPatch

Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpsHealthCheck1;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpsHealthChecksPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->httpsHealthCheck1 = new HttpsHealthCheck1();
    $request->httpsHealthCheck1->checkIntervalSec = 773262;
    $request->httpsHealthCheck1->creationTimestamp = 'recusandae';
    $request->httpsHealthCheck1->description = 'voluptate';
    $request->httpsHealthCheck1->healthyThreshold = 537140;
    $request->httpsHealthCheck1->host = 'est';
    $request->httpsHealthCheck1->id = 'et';
    $request->httpsHealthCheck1->kind = 'expedita';
    $request->httpsHealthCheck1->name = 'Isaac Wyman';
    $request->httpsHealthCheck1->port = 635314;
    $request->httpsHealthCheck1->requestPath = 'doloremque';
    $request->httpsHealthCheck1->selfLink = 'fuga';
    $request->httpsHealthCheck1->timeoutSec = 117546;
    $request->httpsHealthCheck1->unhealthyThreshold = 103901;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'dignissimos';
    $request->httpsHealthCheck = 'fugit';
    $request->key = 'ratione';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'aut';
    $request->requestId = 'natus';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'deserunt';

    $requestSecurity = new ComputeHttpsHealthChecksPatchSecurity();
    $requestSecurity->option1 = new ComputeHttpsHealthChecksPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpsHealthChecks->computeHttpsHealthChecksPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHttpsHealthChecksUpdate

Updates a HttpsHealthCheck resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpsHealthCheck1;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpsHealthChecksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->httpsHealthCheck1 = new HttpsHealthCheck1();
    $request->httpsHealthCheck1->checkIntervalSec = 60379;
    $request->httpsHealthCheck1->creationTimestamp = 'debitis';
    $request->httpsHealthCheck1->description = 'iste';
    $request->httpsHealthCheck1->healthyThreshold = 646776;
    $request->httpsHealthCheck1->host = 'hic';
    $request->httpsHealthCheck1->id = 'ducimus';
    $request->httpsHealthCheck1->kind = 'consequuntur';
    $request->httpsHealthCheck1->name = 'Pam Cremin I';
    $request->httpsHealthCheck1->port = 130934;
    $request->httpsHealthCheck1->requestPath = 'consequatur';
    $request->httpsHealthCheck1->selfLink = 'amet';
    $request->httpsHealthCheck1->timeoutSec = 9284;
    $request->httpsHealthCheck1->unhealthyThreshold = 852634;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'ullam';
    $request->httpsHealthCheck = 'deserunt';
    $request->key = 'itaque';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'dignissimos';
    $request->requestId = 'provident';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'sunt';

    $requestSecurity = new ComputeHttpsHealthChecksUpdateSecurity();
    $requestSecurity->option1 = new ComputeHttpsHealthChecksUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpsHealthChecks->computeHttpsHealthChecksUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
