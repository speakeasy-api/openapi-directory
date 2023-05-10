# organizations

### Available Operations

* [cloudresourcemanagerOrganizationsGet](#cloudresourcemanagerorganizationsget) - Fetches an Organization resource identified by the specified resource name.
* [cloudresourcemanagerOrganizationsGetIamPolicy](#cloudresourcemanagerorganizationsgetiampolicy) - Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* [cloudresourcemanagerOrganizationsList](#cloudresourcemanagerorganizationslist) - Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.
* [cloudresourcemanagerOrganizationsSetIamPolicy](#cloudresourcemanagerorganizationssetiampolicy) - Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* [cloudresourcemanagerOrganizationsTestIamPermissions](#cloudresourcemanagerorganizationstestiampermissions) - Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* [cloudresourcemanagerOrganizationsUpdate](#cloudresourcemanagerorganizationsupdate) - Updates an Organization resource identified by the specified resource name.

## cloudresourcemanagerOrganizationsGet

Fetches an Organization resource identified by the specified resource name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerOrganizationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->name = 'Ted Mante';
    $request->oauthToken = 'temporibus';
    $request->organizationId = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new CloudresourcemanagerOrganizationsGetSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerOrganizationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudresourcemanagerOrganizationsGet($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerOrganizationsGetIamPolicy

Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerOrganizationsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 368241;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->resource = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new CloudresourcemanagerOrganizationsGetIamPolicySecurity();
    $requestSecurity->option1 = new CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudresourcemanagerOrganizationsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerOrganizationsList

Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerOrganizationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->filter = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 143353;
    $request->pageToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new CloudresourcemanagerOrganizationsListSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerOrganizationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudresourcemanagerOrganizationsList($request, $requestSecurity);

    if ($response->listOrganizationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerOrganizationsSetIamPolicy

Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerOrganizationsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'modi';
    $request->setIamPolicyRequest->policy->version = 186332;
    $request->setIamPolicyRequest->updateMask = 'impedit';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->resource = 'natus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new CloudresourcemanagerOrganizationsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudresourcemanagerOrganizationsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerOrganizationsTestIamPermissions

Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerOrganizationsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->resource = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new CloudresourcemanagerOrganizationsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudresourcemanagerOrganizationsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerOrganizationsUpdate

Updates an Organization resource identified by the specified resource name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Organization;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationLifecycleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationOwner;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerOrganizationsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->organization = new Organization();
    $request->organization->creationTime = 'mollitia';
    $request->organization->displayName = 'laborum';
    $request->organization->lifecycleState = OrganizationLifecycleStateEnum::LIFECYCLE_STATE_UNSPECIFIED;
    $request->organization->name = 'Stacy Champlin';
    $request->organization->organizationId = 'omnis';
    $request->organization->owner = new OrganizationOwner();
    $request->organization->owner->directoryCustomerId = 'nemo';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->name = 'Darrin Brakus';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new CloudresourcemanagerOrganizationsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudresourcemanagerOrganizationsUpdate($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
