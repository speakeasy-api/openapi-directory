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
* [secretmanagerProjectsSecretsVersionsAccess](#secretmanagerprojectssecretsversionsaccess) - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* [secretmanagerProjectsSecretsVersionsDestroy](#secretmanagerprojectssecretsversionsdestroy) - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* [secretmanagerProjectsSecretsVersionsDisable](#secretmanagerprojectssecretsversionsdisable) - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* [secretmanagerProjectsSecretsVersionsEnable](#secretmanagerprojectssecretsversionsenable) - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* [secretmanagerProjectsSecretsVersionsGet](#secretmanagerprojectssecretsversionsget) - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
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
    $request->addSecretVersionRequest->payload->dataCrc32c = 'maiores';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

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
use \OpenAPI\OpenAPI\Models\Shared\Automatic;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedEncryption;
use \OpenAPI\OpenAPI\Models\Shared\UserManaged;
use \OpenAPI\OpenAPI\Models\Shared\Replica;
use \OpenAPI\OpenAPI\Models\Shared\Rotation;
use \OpenAPI\OpenAPI\Models\Shared\Topic;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->secretInput = new SecretInput();
    $request->secretInput->annotations = [
        'deleniti' => 'hic',
    ];
    $request->secretInput->etag = 'optio';
    $request->secretInput->expireTime = 'totam';
    $request->secretInput->labels = [
        'commodi' => 'molestiae',
    ];
    $request->secretInput->replication = new Replication();
    $request->secretInput->replication->automatic = new Automatic();
    $request->secretInput->replication->automatic->customerManagedEncryption = new CustomerManagedEncryption();
    $request->secretInput->replication->automatic->customerManagedEncryption->kmsKeyName = 'modi';
    $request->secretInput->replication->userManaged = new UserManaged();
    $request->secretInput->replication->userManaged->replicas = [
        new Replica(),
    ];
    $request->secretInput->rotation = new Rotation();
    $request->secretInput->rotation->nextRotationTime = 'impedit';
    $request->secretInput->rotation->rotationPeriod = 'cum';
    $request->secretInput->topics = [
        new Topic(),
        new Topic(),
    ];
    $request->secretInput->ttl = 'ipsum';
    $request->secretInput->versionAliases = [
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
        'sed' => 'iste',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->oauthToken = 'fuga';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->secretId = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->etag = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->name = 'Connie Herzog';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->oauthToken = 'architecto';
    $request->optionsRequestedPolicyVersion = 652790;
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->resource = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

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
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->filter = 'molestiae';
    $request->key = 'velit';
    $request->oauthToken = 'error';
    $request->pageSize = 158969;
    $request->pageToken = 'quis';
    $request->parent = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'enim';

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
use \OpenAPI\OpenAPI\Models\Shared\Automatic;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedEncryption;
use \OpenAPI\OpenAPI\Models\Shared\UserManaged;
use \OpenAPI\OpenAPI\Models\Shared\Replica;
use \OpenAPI\OpenAPI\Models\Shared\Rotation;
use \OpenAPI\OpenAPI\Models\Shared\Topic;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->secretInput = new SecretInput();
    $request->secretInput->annotations = [
        'sequi' => 'tenetur',
        'ipsam' => 'id',
        'possimus' => 'aut',
        'quasi' => 'error',
    ];
    $request->secretInput->etag = 'temporibus';
    $request->secretInput->expireTime = 'laborum';
    $request->secretInput->labels = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->secretInput->replication = new Replication();
    $request->secretInput->replication->automatic = new Automatic();
    $request->secretInput->replication->automatic->customerManagedEncryption = new CustomerManagedEncryption();
    $request->secretInput->replication->automatic->customerManagedEncryption->kmsKeyName = 'vero';
    $request->secretInput->replication->userManaged = new UserManaged();
    $request->secretInput->replication->userManaged->replicas = [
        new Replica(),
        new Replica(),
    ];
    $request->secretInput->rotation = new Rotation();
    $request->secretInput->rotation->nextRotationTime = 'praesentium';
    $request->secretInput->rotation->rotationPeriod = 'voluptatibus';
    $request->secretInput->topics = [
        new Topic(),
    ];
    $request->secretInput->ttl = 'omnis';
    $request->secretInput->versionAliases = [
        'cum' => 'perferendis',
        'doloremque' => 'reprehenderit',
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->name = 'Mildred Pfeffer';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->updateMask = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
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
    $request->setIamPolicyRequest->policy->etag = 'modi';
    $request->setIamPolicyRequest->policy->version = 508969;
    $request->setIamPolicyRequest->updateMask = 'rem';
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'sint';
    $request->key = 'veritatis';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->resource = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'deserunt',
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->resource = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

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

Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

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
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'dolorum';
    $request->key = 'excepturi';
    $request->name = 'Olivia Rice';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sint';

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
use \OpenAPI\OpenAPI\Models\Shared\DestroySecretVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsDestroySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsVersionsDestroyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->destroySecretVersionRequest = new DestroySecretVersionRequest();
    $request->destroySecretVersionRequest->etag = 'provident';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'dolor';
    $request->key = 'debitis';
    $request->name = 'Wilbur King';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'magnam';

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
use \OpenAPI\OpenAPI\Models\Shared\DisableSecretVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsDisableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsVersionsDisableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disableSecretVersionRequest = new DisableSecretVersionRequest();
    $request->disableSecretVersionRequest->etag = 'facere';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->name = 'Jon Tillman';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'blanditiis';

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
use \OpenAPI\OpenAPI\Models\Shared\EnableSecretVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecretmanagerProjectsSecretsVersionsEnableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretmanagerProjectsSecretsVersionsEnableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->enableSecretVersionRequest = new EnableSecretVersionRequest();
    $request->enableSecretVersionRequest->etag = 'sapiente';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->key = 'natus';
    $request->name = 'Fernando Aufderhar';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

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

Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'vero';
    $request->key = 'aspernatur';
    $request->name = 'Danielle Bosco';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusantium';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->filter = 'dolor';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'odit';
    $request->pageSize = 367562;
    $request->pageToken = 'quasi';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

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
