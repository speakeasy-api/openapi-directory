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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'soluta';
    $request->fields = 'tempore';
    $request->httpHealthCheck = 'culpa';
    $request->key = 'fugiat';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'ad';
    $request->requestId = 'sapiente';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'ut';
    $request->userIp = 'nesciunt';

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
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'delectus';
    $request->httpHealthCheck = 'nemo';
    $request->key = 'cumque';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'atque';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'rerum';

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
    $request->httpHealthCheck1->checkIntervalSec = 799236;
    $request->httpHealthCheck1->creationTimestamp = 'aspernatur';
    $request->httpHealthCheck1->description = 'eaque';
    $request->httpHealthCheck1->healthyThreshold = 773455;
    $request->httpHealthCheck1->host = 'nam';
    $request->httpHealthCheck1->id = 'ex';
    $request->httpHealthCheck1->kind = 'odio';
    $request->httpHealthCheck1->name = 'Roosevelt Graham';
    $request->httpHealthCheck1->port = 176418;
    $request->httpHealthCheck1->requestPath = 'veniam';
    $request->httpHealthCheck1->selfLink = 'repudiandae';
    $request->httpHealthCheck1->selfLinkWithId = 'sint';
    $request->httpHealthCheck1->timeoutSec = 577707;
    $request->httpHealthCheck1->unhealthyThreshold = 894870;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->fields = 'incidunt';
    $request->key = 'porro';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'voluptate';
    $request->requestId = 'tempore';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'possimus';

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
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'esse';
    $request->filter = 'harum';
    $request->key = 'ad';
    $request->maxResults = 801059;
    $request->oauthToken = 'ratione';
    $request->orderBy = 'totam';
    $request->pageToken = 'vero';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'nam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'cupiditate';

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
    $request->httpHealthCheck1->checkIntervalSec = 901563;
    $request->httpHealthCheck1->creationTimestamp = 'enim';
    $request->httpHealthCheck1->description = 'eaque';
    $request->httpHealthCheck1->healthyThreshold = 406462;
    $request->httpHealthCheck1->host = 'eveniet';
    $request->httpHealthCheck1->id = 'delectus';
    $request->httpHealthCheck1->kind = 'deleniti';
    $request->httpHealthCheck1->name = 'Charles Parisian';
    $request->httpHealthCheck1->port = 724334;
    $request->httpHealthCheck1->requestPath = 'numquam';
    $request->httpHealthCheck1->selfLink = 'odio';
    $request->httpHealthCheck1->selfLinkWithId = 'nostrum';
    $request->httpHealthCheck1->timeoutSec = 980160;
    $request->httpHealthCheck1->unhealthyThreshold = 83997;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minima';
    $request->fields = 'ex';
    $request->httpHealthCheck = 'possimus';
    $request->key = 'nesciunt';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'fuga';
    $request->requestId = 'sequi';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'laborum';

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
        'adipisci',
        'sunt',
    ];
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->key = 'fugit';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'eveniet';
    $request->resource = 'fugiat';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'a';
    $request->userIp = 'natus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->httpHealthCheck1 = new HttpHealthCheck1();
    $request->httpHealthCheck1->checkIntervalSec = 832989;
    $request->httpHealthCheck1->creationTimestamp = 'facilis';
    $request->httpHealthCheck1->description = 'molestias';
    $request->httpHealthCheck1->healthyThreshold = 291344;
    $request->httpHealthCheck1->host = 'et';
    $request->httpHealthCheck1->id = 'accusantium';
    $request->httpHealthCheck1->kind = 'maiores';
    $request->httpHealthCheck1->name = 'Shannon Reynolds';
    $request->httpHealthCheck1->port = 505113;
    $request->httpHealthCheck1->requestPath = 'vitae';
    $request->httpHealthCheck1->selfLink = 'iusto';
    $request->httpHealthCheck1->selfLinkWithId = 'atque';
    $request->httpHealthCheck1->timeoutSec = 243941;
    $request->httpHealthCheck1->unhealthyThreshold = 474774;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vitae';
    $request->fields = 'mollitia';
    $request->httpHealthCheck = 'asperiores';
    $request->key = 'at';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'deleniti';
    $request->requestId = 'rem';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'labore';

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
