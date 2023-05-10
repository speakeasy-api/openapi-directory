# tagValues

### Available Operations

* [cloudresourcemanagerTagValuesCreate](#cloudresourcemanagertagvaluescreate) - Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.
* [cloudresourcemanagerTagValuesGet](#cloudresourcemanagertagvaluesget) - Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
* [cloudresourcemanagerTagValuesGetIamPolicy](#cloudresourcemanagertagvaluesgetiampolicy) - Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.
* [cloudresourcemanagerTagValuesGetNamespaced](#cloudresourcemanagertagvaluesgetnamespaced) - Retrieves a TagValue by its namespaced name. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
* [cloudresourcemanagerTagValuesList](#cloudresourcemanagertagvalueslist) - Lists all TagValues for a specific TagKey.
* [cloudresourcemanagerTagValuesPatch](#cloudresourcemanagertagvaluespatch) - Updates the attributes of the TagValue resource.
* [cloudresourcemanagerTagValuesSetIamPolicy](#cloudresourcemanagertagvaluessetiampolicy) - Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.
* [cloudresourcemanagerTagValuesTagHoldsCreate](#cloudresourcemanagertagvaluestagholdscreate) - Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.
* [cloudresourcemanagerTagValuesTagHoldsDelete](#cloudresourcemanagertagvaluestagholdsdelete) - Deletes a TagHold.
* [cloudresourcemanagerTagValuesTagHoldsList](#cloudresourcemanagertagvaluestagholdslist) - Lists TagHolds under a TagValue.
* [cloudresourcemanagerTagValuesTestIamPermissions](#cloudresourcemanagertagvaluestestiampermissions) - Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.

## cloudresourcemanagerTagValuesCreate

Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValueInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tagValueInput = new TagValueInput();
    $request->tagValueInput->description = 'necessitatibus';
    $request->tagValueInput->etag = 'odit';
    $request->tagValueInput->name = 'Joyce Kertzmann';
    $request->tagValueInput->parent = 'eius';
    $request->tagValueInput->shortName = 'maxime';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'architecto';
    $request->key = 'architecto';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';
    $request->validateOnly = false;

    $requestSecurity = new CloudresourcemanagerTagValuesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesGet

Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'pariatur';
    $request->key = 'accusantium';
    $request->name = 'Irma Morissette DDS';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new CloudresourcemanagerTagValuesGetSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagValuesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesGet($request, $requestSecurity);

    if ($response->tagValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesGetIamPolicy

Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 139972;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'maiores';
    $request->key = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->resource = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new CloudresourcemanagerTagValuesGetIamPolicySecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagValuesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesGetNamespaced

Retrieves a TagValue by its namespaced name. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetNamespacedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetNamespacedSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetNamespacedSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesGetNamespacedSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesGetNamespacedRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'fugiat';
    $request->key = 'amet';
    $request->name = 'Erma Hessel';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new CloudresourcemanagerTagValuesGetNamespacedSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagValuesGetNamespacedSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesGetNamespaced($request, $requestSecurity);

    if ($response->tagValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesList

Lists all TagValues for a specific TagKey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nesciunt';
    $request->fields = 'eos';
    $request->key = 'perferendis';
    $request->oauthToken = 'dolores';
    $request->pageSize = 793698;
    $request->pageToken = 'quam';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new CloudresourcemanagerTagValuesListSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagValuesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesList($request, $requestSecurity);

    if ($response->listTagValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesPatch

Updates the attributes of the TagValue resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValueInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tagValueInput = new TagValueInput();
    $request->tagValueInput->description = 'omnis';
    $request->tagValueInput->etag = 'facilis';
    $request->tagValueInput->name = 'George Sawayn';
    $request->tagValueInput->parent = 'error';
    $request->tagValueInput->shortName = 'eaque';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->fields = 'asperiores';
    $request->key = 'earum';
    $request->name = 'Sheryl Parisian';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->updateMask = 'libero';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quaerat';
    $request->validateOnly = false;

    $requestSecurity = new CloudresourcemanagerTagValuesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesSetIamPolicy

Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'dolorem';
    $request->setIamPolicyRequest->policy->version = 222443;
    $request->setIamPolicyRequest->updateMask = 'qui';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'cum';
    $request->key = 'voluptate';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->resource = 'amet';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new CloudresourcemanagerTagValuesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesTagHoldsCreate

Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagHoldInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesTagHoldsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tagHoldInput = new TagHoldInput();
    $request->tagHoldInput->helpLink = 'ipsa';
    $request->tagHoldInput->holder = 'ipsa';
    $request->tagHoldInput->origin = 'iure';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'quidem';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'voluptas';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'sit';
    $request->validateOnly = false;

    $requestSecurity = new CloudresourcemanagerTagValuesTagHoldsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesTagHoldsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesTagHoldsDelete

Deletes a TagHold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesTagHoldsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'iusto';
    $request->key = 'voluptate';
    $request->name = 'Alfredo Mohr';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'voluptate';
    $request->validateOnly = false;

    $requestSecurity = new CloudresourcemanagerTagValuesTagHoldsDeleteSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesTagHoldsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesTagHoldsList

Lists TagHolds under a TagValue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTagHoldsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesTagHoldsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->filter = 'amet';
    $request->key = 'optio';
    $request->oauthToken = 'accusamus';
    $request->pageSize = 320017;
    $request->pageToken = 'saepe';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new CloudresourcemanagerTagValuesTagHoldsListSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagValuesTagHoldsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesTagHoldsList($request, $requestSecurity);

    if ($response->listTagHoldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagValuesTestIamPermissions

Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagValuesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'similique',
        'alias',
        'at',
    ];
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'quod';
    $request->key = 'officiis';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->resource = 'a';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new CloudresourcemanagerTagValuesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagValues->cloudresourcemanagerTagValuesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
