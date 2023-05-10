# httpHealthChecks

### Available Operations

* [computeHttpHealthChecksDelete](#computehttphealthchecksdelete) - Deletes the specified HttpHealthCheck resource.
* [computeHttpHealthChecksGet](#computehttphealthchecksget) - Returns the specified HttpHealthCheck resource.
* [computeHttpHealthChecksInsert](#computehttphealthchecksinsert) - Creates a HttpHealthCheck resource in the specified project using the data included in the request.
* [computeHttpHealthChecksList](#computehttphealthcheckslist) - Retrieves the list of HttpHealthCheck resources available to the specified project.
* [computeHttpHealthChecksPatch](#computehttphealthcheckspatch) - Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHttpHealthChecksTestIamPermissions](#computehttphealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eos';
    $request->fields = 'voluptatem';
    $request->httpHealthCheck = 'temporibus';
    $request->key = 'id';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'a';
    $request->requestId = 'minus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'nam';
    $request->userIp = 'quia';

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
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'blanditiis';
    $request->httpHealthCheck = 'sint';
    $request->key = 'placeat';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'itaque';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'non';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->httpHealthCheck1 = new HttpHealthCheck1();
    $request->httpHealthCheck1->checkIntervalSec = 605043;
    $request->httpHealthCheck1->creationTimestamp = 'ipsa';
    $request->httpHealthCheck1->description = 'aliquam';
    $request->httpHealthCheck1->healthyThreshold = 219940;
    $request->httpHealthCheck1->host = 'occaecati';
    $request->httpHealthCheck1->id = 'quibusdam';
    $request->httpHealthCheck1->kind = 'magni';
    $request->httpHealthCheck1->name = 'Marilyn Gibson';
    $request->httpHealthCheck1->port = 426819;
    $request->httpHealthCheck1->requestPath = 'cupiditate';
    $request->httpHealthCheck1->selfLink = 'modi';
    $request->httpHealthCheck1->timeoutSec = 392311;
    $request->httpHealthCheck1->unhealthyThreshold = 131596;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->fields = 'sit';
    $request->key = 'voluptatum';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'quam';
    $request->requestId = 'dolorum';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'molestiae';

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
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'sed';
    $request->filter = 'eos';
    $request->key = 'consequuntur';
    $request->maxResults = 338514;
    $request->oauthToken = 'vitae';
    $request->orderBy = 'occaecati';
    $request->pageToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'fugiat';
    $request->quotaUser = 'quidem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'modi';

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
    $request->httpHealthCheck1->checkIntervalSec = 61889;
    $request->httpHealthCheck1->creationTimestamp = 'similique';
    $request->httpHealthCheck1->description = 'possimus';
    $request->httpHealthCheck1->healthyThreshold = 775138;
    $request->httpHealthCheck1->host = 'suscipit';
    $request->httpHealthCheck1->id = 'ex';
    $request->httpHealthCheck1->kind = 'sint';
    $request->httpHealthCheck1->name = 'Miss Cary McKenzie';
    $request->httpHealthCheck1->port = 421882;
    $request->httpHealthCheck1->requestPath = 'quo';
    $request->httpHealthCheck1->selfLink = 'molestiae';
    $request->httpHealthCheck1->timeoutSec = 805128;
    $request->httpHealthCheck1->unhealthyThreshold = 814950;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'quasi';
    $request->httpHealthCheck = 'maiores';
    $request->key = 'voluptatem';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'unde';
    $request->requestId = 'corrupti';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'ea';

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

## computeHttpHealthChecksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHttpHealthChecksTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHttpHealthChecksTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'amet',
        'adipisci',
        'minus',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fuga';
    $request->fields = 'consectetur';
    $request->key = 'labore';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'adipisci';
    $request->resource = 'veritatis';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'magnam';

    $requestSecurity = new ComputeHttpHealthChecksTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeHttpHealthChecksTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->httpHealthChecks->computeHttpHealthChecksTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->httpHealthCheck1 = new HttpHealthCheck1();
    $request->httpHealthCheck1->checkIntervalSec = 496744;
    $request->httpHealthCheck1->creationTimestamp = 'itaque';
    $request->httpHealthCheck1->description = 'necessitatibus';
    $request->httpHealthCheck1->healthyThreshold = 252854;
    $request->httpHealthCheck1->host = 'doloribus';
    $request->httpHealthCheck1->id = 'eligendi';
    $request->httpHealthCheck1->kind = 'sapiente';
    $request->httpHealthCheck1->name = 'Leticia Funk';
    $request->httpHealthCheck1->port = 467947;
    $request->httpHealthCheck1->requestPath = 'voluptatum';
    $request->httpHealthCheck1->selfLink = 'reiciendis';
    $request->httpHealthCheck1->timeoutSec = 114952;
    $request->httpHealthCheck1->unhealthyThreshold = 353009;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->fields = 'ratione';
    $request->httpHealthCheck = 'excepturi';
    $request->key = 'corrupti';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'quibusdam';
    $request->requestId = 'impedit';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'nisi';

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
