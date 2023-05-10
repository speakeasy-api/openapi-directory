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
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'maxime';
    $request->httpsHealthCheck = 'expedita';
    $request->key = 'accusantium';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'totam';
    $request->requestId = 'optio';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'consequuntur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'aspernatur';
    $request->httpsHealthCheck = 'perspiciatis';
    $request->key = 'magni';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'alias';
    $request->quotaUser = 'quidem';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'ipsam';

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
    $request->httpsHealthCheck1->checkIntervalSec = 143253;
    $request->httpsHealthCheck1->creationTimestamp = 'aspernatur';
    $request->httpsHealthCheck1->description = 'at';
    $request->httpsHealthCheck1->healthyThreshold = 850628;
    $request->httpsHealthCheck1->host = 'praesentium';
    $request->httpsHealthCheck1->id = 'sint';
    $request->httpsHealthCheck1->kind = 'exercitationem';
    $request->httpsHealthCheck1->name = 'Jaime Purdy';
    $request->httpsHealthCheck1->port = 170934;
    $request->httpsHealthCheck1->requestPath = 'dolore';
    $request->httpsHealthCheck1->selfLink = 'pariatur';
    $request->httpsHealthCheck1->timeoutSec = 705307;
    $request->httpsHealthCheck1->unhealthyThreshold = 585445;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'provident';
    $request->key = 'amet';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'qui';
    $request->requestId = 'tenetur';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'ullam';

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
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'numquam';
    $request->filter = 'fugiat';
    $request->key = 'molestiae';
    $request->maxResults = 556898;
    $request->oauthToken = 'repellendus';
    $request->orderBy = 'saepe';
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'distinctio';
    $request->quotaUser = 'vel';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'nesciunt';

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
    $request->httpsHealthCheck1->checkIntervalSec = 587337;
    $request->httpsHealthCheck1->creationTimestamp = 'voluptatibus';
    $request->httpsHealthCheck1->description = 'ullam';
    $request->httpsHealthCheck1->healthyThreshold = 680370;
    $request->httpsHealthCheck1->host = 'soluta';
    $request->httpsHealthCheck1->id = 'cum';
    $request->httpsHealthCheck1->kind = 'in';
    $request->httpsHealthCheck1->name = 'Rafael Johns';
    $request->httpsHealthCheck1->port = 354554;
    $request->httpsHealthCheck1->requestPath = 'doloremque';
    $request->httpsHealthCheck1->selfLink = 'est';
    $request->httpsHealthCheck1->timeoutSec = 184204;
    $request->httpsHealthCheck1->unhealthyThreshold = 508773;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'qui';
    $request->fields = 'deserunt';
    $request->httpsHealthCheck = 'eligendi';
    $request->key = 'incidunt';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'est';
    $request->requestId = 'reiciendis';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'consectetur';

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
        'facilis',
        'facilis',
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsam';
    $request->fields = 'voluptatem';
    $request->key = 'illo';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'eveniet';
    $request->resource = 'quae';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'veniam';

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
    $request->httpsHealthCheck1->checkIntervalSec = 989526;
    $request->httpsHealthCheck1->creationTimestamp = 'eum';
    $request->httpsHealthCheck1->description = 'deserunt';
    $request->httpsHealthCheck1->healthyThreshold = 919730;
    $request->httpsHealthCheck1->host = 'nemo';
    $request->httpsHealthCheck1->id = 'molestias';
    $request->httpsHealthCheck1->kind = 'architecto';
    $request->httpsHealthCheck1->name = 'Wilson Lakin';
    $request->httpsHealthCheck1->port = 921916;
    $request->httpsHealthCheck1->requestPath = 'maiores';
    $request->httpsHealthCheck1->selfLink = 'ipsum';
    $request->httpsHealthCheck1->timeoutSec = 412128;
    $request->httpsHealthCheck1->unhealthyThreshold = 114924;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->fields = 'neque';
    $request->httpsHealthCheck = 'quod';
    $request->key = 'eos';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'a';
    $request->requestId = 'facere';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'atque';
    $request->userIp = 'quaerat';

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
