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
    $request->apigatewayApiConfigInput->displayName = 'nisi';
    $request->apigatewayApiConfigInput->gatewayServiceAccount = 'recusandae';
    $request->apigatewayApiConfigInput->grpcServices = [
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
        new ApigatewayApiConfigGrpcServiceDefinition(),
    ];
    $request->apigatewayApiConfigInput->labels = [
        'quis' => 'veritatis',
    ];
    $request->apigatewayApiConfigInput->managedServiceConfigs = [
        new ApigatewayApiConfigFile(),
        new ApigatewayApiConfigFile(),
        new ApigatewayApiConfigFile(),
    ];
    $request->apigatewayApiConfigInput->openapiDocuments = [
        new ApigatewayApiConfigOpenApiDocument(),
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->apiConfigId = 'sapiente';
    $request->callback = 'quo';
    $request->fields = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

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
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->filter = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->orderBy = 'fugit';
    $request->pageSize = 537373;
    $request->pageToken = 'hic';
    $request->parent = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->apigatewayApiInput = new ApigatewayApiInput();
    $request->apigatewayApiInput->displayName = 'modi';
    $request->apigatewayApiInput->labels = [
        'impedit' => 'cum',
    ];
    $request->apigatewayApiInput->managedService = 'esse';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->apiId = 'aspernatur';
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->filter = 'iste';
    $request->key = 'iure';
    $request->oauthToken = 'saepe';
    $request->orderBy = 'quidem';
    $request->pageSize = 99280;
    $request->pageToken = 'ipsa';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->apigatewayGatewayInput = new ApigatewayGatewayInput();
    $request->apigatewayGatewayInput->apiConfig = 'dolorem';
    $request->apigatewayGatewayInput->displayName = 'corporis';
    $request->apigatewayGatewayInput->labels = [
        'nobis' => 'enim',
    ];
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'excepturi';
    $request->gatewayId = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

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
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'mollitia';
    $request->key = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->optionsRequestedPolicyVersion = 414369;
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->resource = 'molestiae';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'error';

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
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->filter = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->orderBy = 'sequi';
    $request->pageSize = 949572;
    $request->pageToken = 'ipsam';
    $request->parent = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quasi';

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
    $request->apigatewayGatewayInput->apiConfig = 'temporibus';
    $request->apigatewayGatewayInput->displayName = 'laborum';
    $request->apigatewayGatewayInput->labels = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->name = 'Mr. Jared Ritchie';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->updateMask = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->apigatewaySetIamPolicyRequest = new ApigatewaySetIamPolicyRequest();
    $request->apigatewaySetIamPolicyRequest->policy = new ApigatewayPolicy();
    $request->apigatewaySetIamPolicyRequest->policy->auditConfigs = [
        new ApigatewayAuditConfig(),
    ];
    $request->apigatewaySetIamPolicyRequest->policy->bindings = [
        new ApigatewayBinding(),
        new ApigatewayBinding(),
        new ApigatewayBinding(),
    ];
    $request->apigatewaySetIamPolicyRequest->policy->etag = 'enim';
    $request->apigatewaySetIamPolicyRequest->policy->version = 880476;
    $request->apigatewaySetIamPolicyRequest->updateMask = 'commodi';
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->resource = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apigatewayTestIamPermissionsRequest = new ApigatewayTestIamPermissionsRequest();
    $request->apigatewayTestIamPermissionsRequest->permissions = [
        'repudiandae',
    ];
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'incidunt';
    $request->key = 'enim';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->resource = 'quibusdam';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'deserunt';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->filter = 'aliquid';
    $request->key = 'cupiditate';
    $request->name = 'Christopher Cummerata';
    $request->oauthToken = 'alias';
    $request->pageSize = 146441;
    $request->pageToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

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
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->key = 'sint';
    $request->name = 'Curtis Toy';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';

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
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'facere';
    $request->key = 'ea';
    $request->name = 'Kayla Thompson';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

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
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'deleniti';
    $request->key = 'sapiente';
    $request->name = 'Sandy Huels';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';
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
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->filter = 'natus';
    $request->key = 'nobis';
    $request->name = 'Mrs. Meghan Collins V';
    $request->oauthToken = 'ullam';
    $request->pageSize = 590873;
    $request->pageToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'mollitia';

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
