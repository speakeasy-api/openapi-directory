# projects

### Available Operations

* [bigqueryconnectionProjectsLocationsConnectionsCreate](#bigqueryconnectionprojectslocationsconnectionscreate) - Creates a new connection.
* [bigqueryconnectionProjectsLocationsConnectionsDelete](#bigqueryconnectionprojectslocationsconnectionsdelete) - Deletes connection and associated credential.
* [bigqueryconnectionProjectsLocationsConnectionsGet](#bigqueryconnectionprojectslocationsconnectionsget) - Returns specified connection.
* [bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy](#bigqueryconnectionprojectslocationsconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [bigqueryconnectionProjectsLocationsConnectionsList](#bigqueryconnectionprojectslocationsconnectionslist) - Returns a list of connections in the given project.
* [bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy](#bigqueryconnectionprojectslocationsconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions](#bigqueryconnectionprojectslocationsconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [bigqueryconnectionProjectsLocationsConnectionsUpdateCredential](#bigqueryconnectionprojectslocationsconnectionsupdatecredential) - Sets the credential for the specified connection.

## bigqueryconnectionProjectsLocationsConnectionsCreate

Creates a new connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlPropertiesInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlCredential;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlPropertiesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->connectionInput = new ConnectionInput();
    $request->connectionInput->cloudSql = new CloudSqlPropertiesInput();
    $request->connectionInput->cloudSql->credential = new CloudSqlCredential();
    $request->connectionInput->cloudSql->credential->password = 'quis';
    $request->connectionInput->cloudSql->credential->username = 'Ashlee36';
    $request->connectionInput->cloudSql->database = 'repellendus';
    $request->connectionInput->cloudSql->instanceId = 'sapiente';
    $request->connectionInput->cloudSql->type = CloudSqlPropertiesTypeEnum::MYSQL;
    $request->connectionInput->description = 'odit';
    $request->connectionInput->friendlyName = 'at';
    $request->connectionInput->name = 'Emilio Krajcik';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->connectionId = 'dolorum';
    $request->fields = 'dicta';
    $request->key = 'nam';
    $request->oauthToken = 'officia';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsCreate($request, $requestSecurity);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryconnectionProjectsLocationsConnectionsDelete

Deletes connection and associated credential.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->name = 'Krista Rippin';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsDeleteSecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryconnectionProjectsLocationsConnectionsGet

Returns specified connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->name = 'Elias Parker';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsGetSecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsGet($request, $requestSecurity);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 60225;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->resource = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryconnectionProjectsLocationsConnectionsList

Returns a list of connections in the given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->maxResults = 634274;
    $request->oauthToken = 'doloribus';
    $request->pageToken = 'sapiente';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsListSecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsList($request, $requestSecurity);

    if ($response->listConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'occaecati';
    $request->setIamPolicyRequest->policy->version = 253291;
    $request->setIamPolicyRequest->updateMask = 'commodi';
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->resource = 'laborum';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->resource = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryconnectionProjectsLocationsConnectionsUpdateCredential

Sets the credential for the specified connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionCredential;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlCredential;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->connectionCredential = new ConnectionCredential();
    $request->connectionCredential->cloudSql = new CloudSqlCredential();
    $request->connectionCredential->cloudSql->password = 'praesentium';
    $request->connectionCredential->cloudSql->username = 'Whitney.Bednar';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->name = 'Willie Hessel';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsUpdateCredential($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
