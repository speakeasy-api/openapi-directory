# projects

### Available Operations

* [apigatewayProjectsLocationsApisConfigsCreate](#apigatewayprojectslocationsapisconfigscreate) - Creates a new ApiConfig in a given project and location.
* [apigatewayProjectsLocationsApisConfigsList](#apigatewayprojectslocationsapisconfigslist) - Lists ApiConfigs in a given project and location.
* [apigatewayProjectsLocationsApisCreate](#apigatewayprojectslocationsapiscreate) - Creates a new Api in a given project and location.
* [apigatewayProjectsLocationsApisList](#apigatewayprojectslocationsapislist) - Lists Apis in a given project and location.
* [apigatewayProjectsLocationsGatewaysCreate](#apigatewayprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [apigatewayProjectsLocationsGatewaysGetIamPolicy](#apigatewayprojectslocationsgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [apigatewayProjectsLocationsGatewaysList](#apigatewayprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [apigatewayProjectsLocationsGatewaysPatch](#apigatewayprojectslocationsgatewayspatch) - Updates the parameters of a single Gateway.
* [apigatewayProjectsLocationsGatewaysSetIamPolicy](#apigatewayprojectslocationsgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [apigatewayProjectsLocationsGatewaysTestIamPermissions](#apigatewayprojectslocationsgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [apigatewayProjectsLocationsList](#apigatewayprojectslocationslist) - Lists information about the supported locations for this service.
* [apigatewayProjectsLocationsOperationsCancel](#apigatewayprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [apigatewayProjectsLocationsOperationsDelete](#apigatewayprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [apigatewayProjectsLocationsOperationsGet](#apigatewayprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [apigatewayProjectsLocationsOperationsList](#apigatewayprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## apigatewayProjectsLocationsApisConfigsCreate

Creates a new ApiConfig in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayGatewayConfig;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayBackendConfig;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiConfigGrpcServiceDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiConfigFile;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiConfigOpenApiDocument;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsApisConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apigatewayApiConfigInput = new ApigatewayApiConfigInput();
    $request->apigatewayApiConfigInput->displayName = 'ab';
    $request->apigatewayApiConfigInput->gatewayConfig = new ApigatewayGatewayConfig();
    $request->apigatewayApiConfigInput->gatewayConfig->backendConfig = new ApigatewayBackendConfig();
    $request->apigatewayApiConfigInput->gatewayConfig->backendConfig->googleServiceAccount = 'quis';
    $request->apigatewayApiConfigInput->gatewayServiceAccount = 'veritatis';
    $request->apigatewayApiConfigInput->grpcServices = [
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
    ];
    $request->apigatewayApiConfigInput->labels = [
        'ipsam' => 'repellendus',
    ];
    $request->apigatewayApiConfigInput->managedServiceConfigs = [
        new ApigatewayApiConfigFile(),
        new ApigatewayApiConfigFile(),
        new ApigatewayApiConfigFile(),
        new ApigatewayApiConfigFile(),
    ];
    $request->apigatewayApiConfigInput->openapiDocuments = [
        new ApigatewayApiConfigOpenApiDocument(),
        new ApigatewayApiConfigOpenApiDocument(),
        new ApigatewayApiConfigOpenApiDocument(),
        new ApigatewayApiConfigOpenApiDocument(),
    ];
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->apiConfigId = 'at';
    $request->callback = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new ApigatewayProjectsLocationsApisConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsApisConfigsCreate($request, $requestSecurity);

    if ($response->apigatewayOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsApisConfigsList

Lists ApiConfigs in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsApisConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->filter = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->orderBy = 'totam';
    $request->pageSize = 105907;
    $request->pageToken = 'commodi';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new ApigatewayProjectsLocationsApisConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsApisConfigsList($request, $requestSecurity);

    if ($response->apigatewayListApiConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsApisCreate

Creates a new Api in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayApiInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsApisCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apigatewayApiInput = new ApigatewayApiInput();
    $request->apigatewayApiInput->displayName = 'esse';
    $request->apigatewayApiInput->labels = [
        'excepturi' => 'aspernatur',
    ];
    $request->apigatewayApiInput->managedService = 'perferendis';
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->apiId = 'sed';
    $request->callback = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new ApigatewayProjectsLocationsApisCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsApisCreate($request, $requestSecurity);

    if ($response->apigatewayOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsApisList

Lists Apis in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsApisListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsApisListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->filter = 'architecto';
    $request->key = 'ipsa';
    $request->oauthToken = 'reiciendis';
    $request->orderBy = 'est';
    $request->pageSize = 653140;
    $request->pageToken = 'laborum';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new ApigatewayProjectsLocationsApisListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsApisList($request, $requestSecurity);

    if ($response->apigatewayListApisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsGatewaysCreate

Creates a new Gateway in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayGatewayInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsGatewaysCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apigatewayGatewayInput = new ApigatewayGatewayInput();
    $request->apigatewayGatewayInput->apiConfig = 'enim';
    $request->apigatewayGatewayInput->displayName = 'omnis';
    $request->apigatewayGatewayInput->labels = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'architecto';
    $request->gatewayId = 'mollitia';
    $request->key = 'dolorem';
    $request->oauthToken = 'culpa';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new ApigatewayProjectsLocationsGatewaysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsGatewaysCreate($request, $requestSecurity);

    if ($response->apigatewayOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsGatewaysGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'velit';
    $request->key = 'error';
    $request->oauthToken = 'quia';
    $request->optionsRequestedPolicyVersion = 338007;
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->resource = 'laborum';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsGatewaysGetIamPolicy($request, $requestSecurity);

    if ($response->apigatewayPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsGatewaysList

Lists Gateways in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsGatewaysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'ipsam';
    $request->filter = 'id';
    $request->key = 'possimus';
    $request->oauthToken = 'aut';
    $request->orderBy = 'quasi';
    $request->pageSize = 622846;
    $request->pageToken = 'temporibus';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new ApigatewayProjectsLocationsGatewaysListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsGatewaysList($request, $requestSecurity);

    if ($response->apigatewayListGatewaysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsGatewaysPatch

Updates the parameters of a single Gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayGatewayInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsGatewaysPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apigatewayGatewayInput = new ApigatewayGatewayInput();
    $request->apigatewayGatewayInput->apiConfig = 'nihil';
    $request->apigatewayGatewayInput->displayName = 'praesentium';
    $request->apigatewayGatewayInput->labels = [
        'ipsa' => 'omnis',
        'voluptate' => 'cum',
        'perferendis' => 'doloremque',
        'reprehenderit' => 'ut',
    ];
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->name = 'Maryann Hamill';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->updateMask = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new ApigatewayProjectsLocationsGatewaysPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsGatewaysPatch($request, $requestSecurity);

    if ($response->apigatewayOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsGatewaysSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewaySetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayAuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayAuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayAuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayBinding;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayExpr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apigatewaySetIamPolicyRequest = new ApigatewaySetIamPolicyRequest();
    $request->apigatewaySetIamPolicyRequest->policy = new ApigatewayPolicy();
    $request->apigatewaySetIamPolicyRequest->policy->auditConfigs = [
        new ApigatewayAuditConfig(),
        new ApigatewayAuditConfig(),
        new ApigatewayAuditConfig(),
        new ApigatewayAuditConfig(),
    ];
    $request->apigatewaySetIamPolicyRequest->policy->bindings = [
        new ApigatewayBinding(),
        new ApigatewayBinding(),
    ];
    $request->apigatewaySetIamPolicyRequest->policy->etag = 'praesentium';
    $request->apigatewaySetIamPolicyRequest->policy->version = 523248;
    $request->apigatewaySetIamPolicyRequest->updateMask = 'voluptates';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->key = 'itaque';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->resource = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsGatewaysSetIamPolicy($request, $requestSecurity);

    if ($response->apigatewayPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApigatewayTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->apigatewayTestIamPermissionsRequest = new ApigatewayTestIamPermissionsRequest();
    $request->apigatewayTestIamPermissionsRequest->permissions = [
        'distinctio',
        'quibusdam',
        'labore',
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->resource = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsGatewaysTestIamPermissions($request, $requestSecurity);

    if ($response->apigatewayTestIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'facilis';
    $request->filter = 'tempore';
    $request->key = 'labore';
    $request->name = 'Andre Franey';
    $request->oauthToken = 'aliquid';
    $request->pageSize = 592042;
    $request->pageToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new ApigatewayProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsList($request, $requestSecurity);

    if ($response->apigatewayListLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'dolorum' => 'in',
        'in' => 'illum',
        'maiores' => 'rerum',
        'dicta' => 'magnam',
    ];
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->key = 'laborum';
    $request->name = 'Alfred McClure';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new ApigatewayProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'amet';
    $request->key = 'deserunt';
    $request->name = 'Wilma Mosciski';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new ApigatewayProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsOperationsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'natus';
    $request->key = 'nobis';
    $request->name = 'Mrs. Meghan Collins V';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';
    $request->view = ApigatewayProjectsLocationsOperationsGetViewEnum::CONFIG_VIEW_UNSPECIFIED;

    $requestSecurity = new ApigatewayProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->apigatewayOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigatewayProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigatewayProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigatewayProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->filter = 'dolor';
    $request->key = 'necessitatibus';
    $request->name = 'Vivian Boyle';
    $request->oauthToken = 'debitis';
    $request->pageSize = 260341;
    $request->pageToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new ApigatewayProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigatewayProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->apigatewayListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
