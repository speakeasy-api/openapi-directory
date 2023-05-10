# projects

### Available Operations

* [secretmanagerProjectsLocationsList](#secretmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [secretmanagerProjectsSecretsAddVersion](#secretmanagerprojectssecretsaddversion) - Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
* [secretmanagerProjectsSecretsCreate](#secretmanagerprojectssecretscreate) - Creates a new Secret containing no SecretVersions.
* [secretmanagerProjectsSecretsDelete](#secretmanagerprojectssecretsdelete) - Deletes a Secret.
* [secretmanagerProjectsSecretsGetIamPolicy](#secretmanagerprojectssecretsgetiampolicy) - Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
* [secretmanagerProjectsSecretsList](#secretmanagerprojectssecretslist) - Lists Secrets.
* [secretmanagerProjectsSecretsPatch](#secretmanagerprojectssecretspatch) - Updates metadata of an existing Secret.
* [secretmanagerProjectsSecretsSetIamPolicy](#secretmanagerprojectssecretssetiampolicy) - Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
* [secretmanagerProjectsSecretsTestIamPermissions](#secretmanagerprojectssecretstestiampermissions) - Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [secretmanagerProjectsSecretsVersionsAccess](#secretmanagerprojectssecretsversionsaccess) - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.
* [secretmanagerProjectsSecretsVersionsDestroy](#secretmanagerprojectssecretsversionsdestroy) - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* [secretmanagerProjectsSecretsVersionsDisable](#secretmanagerprojectssecretsversionsdisable) - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* [secretmanagerProjectsSecretsVersionsEnable](#secretmanagerprojectssecretsversionsenable) - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* [secretmanagerProjectsSecretsVersionsGet](#secretmanagerprojectssecretsversionsget) - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.
* [secretmanagerProjectsSecretsVersionsList](#secretmanagerprojectssecretsversionslist) - Lists SecretVersions. This call does not return secret data.

## secretmanagerProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->filter = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new SecretmanagerProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsAddVersion

Creates a new SecretVersion containing secret data and attaches it to an existing Secret.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsAddVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddSecretVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecretPayload;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsAddVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsAddVersionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addSecretVersionRequest = new AddSecretVersionRequest();
    $request->addSecretVersionRequest->payload = new SecretPayload();
    $request->addSecretVersionRequest->payload->data = 'at';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->parent = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new SecretmanagerProjectsSecretsAddVersionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsAddVersion($request, $requestSecurity);

    if ($response->secretVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsCreate

Creates a new Secret containing no SecretVersions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecretInput;
use \OpenAPI\OpenAPI\Models\Shared\Replication;
use \OpenAPI\OpenAPI\Models\Shared\UserManaged;
use \OpenAPI\OpenAPI\Models\Shared\Replica;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->secretInput = new SecretInput();
    $request->secretInput->labels = [
        'fugit' => 'deleniti',
        'hic' => 'optio',
        'totam' => 'beatae',
    ];
    $request->secretInput->replication = new Replication();
    $request->secretInput->replication->automatic = [
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->secretInput->replication->userManaged = new UserManaged();
    $request->secretInput->replication->userManaged->replicas = [
        new Replica(),
        new Replica(),
        new Replica(),
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->oauthToken = 'ad';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->secretId = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new SecretmanagerProjectsSecretsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsCreate($request, $requestSecurity);

    if ($response->secret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsDelete

Deletes a Secret.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->name = 'Brad Turcotte Jr.';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new SecretmanagerProjectsSecretsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsGetIamPolicy

Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->oauthToken = 'omnis';
    $request->optionsRequestedPolicyVersion = 363711;
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->resource = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new SecretmanagerProjectsSecretsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsList

Lists Secrets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'mollitia';
    $request->key = 'dolorem';
    $request->oauthToken = 'culpa';
    $request->pageSize = 161309;
    $request->pageToken = 'repellat';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new SecretmanagerProjectsSecretsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsList($request, $requestSecurity);

    if ($response->listSecretsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsPatch

Updates metadata of an existing Secret.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecretInput;
use \OpenAPI\OpenAPI\Models\Shared\Replication;
use \OpenAPI\OpenAPI\Models\Shared\UserManaged;
use \OpenAPI\OpenAPI\Models\Shared\Replica;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->secretInput = new SecretInput();
    $request->secretInput->labels = [
        'velit' => 'error',
        'quia' => 'quis',
    ];
    $request->secretInput->replication = new Replication();
    $request->secretInput->replication->automatic = [
        'laborum' => 'animi',
    ];
    $request->secretInput->replication->userManaged = new UserManaged();
    $request->secretInput->replication->userManaged->replicas = [
        new Replica(),
        new Replica(),
    ];
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'tenetur';
    $request->key = 'ipsam';
    $request->name = 'Miss Rufus Ankunding';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->updateMask = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new SecretmanagerProjectsSecretsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsPatch($request, $requestSecurity);

    if ($response->secret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsSetIamPolicy

Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'ipsa';
    $request->setIamPolicyRequest->policy->version = 604846;
    $request->setIamPolicyRequest->updateMask = 'voluptate';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->resource = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new SecretmanagerProjectsSecretsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsTestIamPermissions

Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'enim',
        'accusamus',
        'commodi',
    ];
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

    $requestSecurity = new SecretmanagerProjectsSecretsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsVersionsAccess

Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsAccessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsVersionsAccessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->key = 'itaque';
    $request->name = 'Erin Altenwerth';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new SecretmanagerProjectsSecretsVersionsAccessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsVersionsAccess($request, $requestSecurity);

    if ($response->accessSecretVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsVersionsDestroy

Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsDestroyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsDestroySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsVersionsDestroyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'qui' => 'aliquid',
        'cupiditate' => 'quos',
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'ipsam';
    $request->key = 'alias';
    $request->name = 'Sonya Marks';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new SecretmanagerProjectsSecretsVersionsDestroySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsVersionsDestroy($request, $requestSecurity);

    if ($response->secretVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsVersionsDisable

Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsDisableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsDisableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsVersionsDisableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'sint' => 'aliquid',
        'provident' => 'necessitatibus',
        'sint' => 'officia',
        'dolor' => 'debitis',
    ];
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->name = 'Jean Buckridge';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new SecretmanagerProjectsSecretsVersionsDisableSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsVersionsDisable($request, $requestSecurity);

    if ($response->secretVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsVersionsEnable

Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsEnableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsEnableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsVersionsEnableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'occaecati' => 'enim',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'provident';
    $request->key = 'nam';
    $request->name = 'Nelson Lesch';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new SecretmanagerProjectsSecretsVersionsEnableSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsVersionsEnable($request, $requestSecurity);

    if ($response->secretVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsVersionsGet

Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'magnam';
    $request->key = 'distinctio';
    $request->name = 'Leroy Greenfelder';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new SecretmanagerProjectsSecretsVersionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsVersionsGet($request, $requestSecurity);

    if ($response->secretVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretmanagerProjectsSecretsVersionsList

Lists SecretVersions. This call does not return secret data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'ullam';
    $request->key = 'provident';
    $request->oauthToken = 'quos';
    $request->pageSize = 574325;
    $request->pageToken = 'accusantium';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new SecretmanagerProjectsSecretsVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->secretmanagerProjectsSecretsVersionsList($request, $requestSecurity);

    if ($response->listSecretVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
