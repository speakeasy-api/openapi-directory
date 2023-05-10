# httpsHealthChecks

### Available Operations

* [computeHttpsHealthChecksDelete](#computehttpshealthchecksdelete) - Deletes the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksGet](#computehttpshealthchecksget) - Returns the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksInsert](#computehttpshealthchecksinsert) - Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
* [computeHttpsHealthChecksList](#computehttpshealthcheckslist) - Retrieves the list of HttpsHealthCheck resources available to the specified project.
* [computeHttpsHealthChecksPatch](#computehttpshealthcheckspatch) - Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHttpsHealthChecksTestIamPermissions](#computehttpshealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
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
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->fields = 'distinctio';
    $request->httpsHealthCheck = 'incidunt';
    $request->key = 'labore';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'consectetur';
    $request->requestId = 'sapiente';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'ratione';

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
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sint';
    $request->fields = 'possimus';
    $request->httpsHealthCheck = 'tempore';
    $request->key = 'asperiores';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'nemo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'labore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->httpsHealthCheck1 = new HttpsHealthCheck1();
    $request->httpsHealthCheck1->checkIntervalSec = 328744;
    $request->httpsHealthCheck1->creationTimestamp = 'magni';
    $request->httpsHealthCheck1->description = 'itaque';
    $request->httpsHealthCheck1->healthyThreshold = 625418;
    $request->httpsHealthCheck1->host = 'expedita';
    $request->httpsHealthCheck1->id = 'error';
    $request->httpsHealthCheck1->kind = 'placeat';
    $request->httpsHealthCheck1->name = 'Karl Weber';
    $request->httpsHealthCheck1->port = 138306;
    $request->httpsHealthCheck1->requestPath = 'eius';
    $request->httpsHealthCheck1->selfLink = 'error';
    $request->httpsHealthCheck1->selfLinkWithId = 'vel';
    $request->httpsHealthCheck1->timeoutSec = 679835;
    $request->httpsHealthCheck1->unhealthyThreshold = 903;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'amet';
    $request->key = 'cum';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'non';
    $request->requestId = 'esse';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'minima';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->fields = 'autem';
    $request->filter = 'in';
    $request->key = 'repellat';
    $request->maxResults = 227129;
    $request->oauthToken = 'cumque';
    $request->orderBy = 'dolore';
    $request->pageToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'repudiandae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'suscipit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->httpsHealthCheck1 = new HttpsHealthCheck1();
    $request->httpsHealthCheck1->checkIntervalSec = 478576;
    $request->httpsHealthCheck1->creationTimestamp = 'aliquid';
    $request->httpsHealthCheck1->description = 'sint';
    $request->httpsHealthCheck1->healthyThreshold = 400145;
    $request->httpsHealthCheck1->host = 'repellat';
    $request->httpsHealthCheck1->id = 'sapiente';
    $request->httpsHealthCheck1->kind = 'consectetur';
    $request->httpsHealthCheck1->name = 'Pedro Kovacek';
    $request->httpsHealthCheck1->port = 361113;
    $request->httpsHealthCheck1->requestPath = 'perferendis';
    $request->httpsHealthCheck1->selfLink = 'architecto';
    $request->httpsHealthCheck1->selfLinkWithId = 'amet';
    $request->httpsHealthCheck1->timeoutSec = 359810;
    $request->httpsHealthCheck1->unhealthyThreshold = 471302;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'maiores';
    $request->httpsHealthCheck = 'ipsam';
    $request->key = 'dicta';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'libero';
    $request->requestId = 'consequatur';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'quo';

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

## computeHttpsHealthChecksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpsHealthChecksTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpsHealthChecksTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'omnis',
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'excepturi';
    $request->key = 'consectetur';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'incidunt';
    $request->resource = 'corporis';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'suscipit';
    $request->userIp = 'ducimus';

    $requestSecurity = new ComputeHttpsHealthChecksTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeHttpsHealthChecksTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpsHealthChecks->computeHttpsHealthChecksTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->httpsHealthCheck1 = new HttpsHealthCheck1();
    $request->httpsHealthCheck1->checkIntervalSec = 568560;
    $request->httpsHealthCheck1->creationTimestamp = 'modi';
    $request->httpsHealthCheck1->description = 'corrupti';
    $request->httpsHealthCheck1->healthyThreshold = 472429;
    $request->httpsHealthCheck1->host = 'eius';
    $request->httpsHealthCheck1->id = 'placeat';
    $request->httpsHealthCheck1->kind = 'fugit';
    $request->httpsHealthCheck1->name = 'Vernon Rohan';
    $request->httpsHealthCheck1->port = 596133;
    $request->httpsHealthCheck1->requestPath = 'ducimus';
    $request->httpsHealthCheck1->selfLink = 'qui';
    $request->httpsHealthCheck1->selfLinkWithId = 'qui';
    $request->httpsHealthCheck1->timeoutSec = 233217;
    $request->httpsHealthCheck1->unhealthyThreshold = 188399;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'cum';
    $request->httpsHealthCheck = 'fugiat';
    $request->key = 'rem';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'corporis';
    $request->requestId = 'repellendus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'libero';

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
