# projects

### Available Operations

* [cloudresourcemanagerProjectsClearOrgPolicy](#cloudresourcemanagerprojectsclearorgpolicy) - Clears a `Policy` from a resource.
* [cloudresourcemanagerProjectsCreate](#cloudresourcemanagerprojectscreate) - Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
* [cloudresourcemanagerProjectsDelete](#cloudresourcemanagerprojectsdelete) - Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
* [cloudresourcemanagerProjectsGet](#cloudresourcemanagerprojectsget) - Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* [cloudresourcemanagerProjectsGetAncestry](#cloudresourcemanagerprojectsgetancestry) - Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* [cloudresourcemanagerProjectsGetEffectiveOrgPolicy](#cloudresourcemanagerprojectsgeteffectiveorgpolicy) - Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* [cloudresourcemanagerProjectsGetIamPolicy](#cloudresourcemanagerprojectsgetiampolicy) - Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).
* [cloudresourcemanagerProjectsGetOrgPolicy](#cloudresourcemanagerprojectsgetorgpolicy) - Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
* [cloudresourcemanagerProjectsList](#cloudresourcemanagerprojectslist) - Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
* [cloudresourcemanagerProjectsListAvailableOrgPolicyConstraints](#cloudresourcemanagerprojectslistavailableorgpolicyconstraints) - Lists `Constraints` that could be applied on the specified resource.
* [cloudresourcemanagerProjectsListOrgPolicies](#cloudresourcemanagerprojectslistorgpolicies) - Lists all the `Policies` set for a particular resource.
* [cloudresourcemanagerProjectsSetIamPolicy](#cloudresourcemanagerprojectssetiampolicy) - Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the GCP Console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
* [cloudresourcemanagerProjectsSetOrgPolicy](#cloudresourcemanagerprojectssetorgpolicy) - Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
* [cloudresourcemanagerProjectsTestIamPermissions](#cloudresourcemanagerprojectstestiampermissions) - Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.
* [cloudresourcemanagerProjectsUndelete](#cloudresourcemanagerprojectsundelete) - Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
* [cloudresourcemanagerProjectsUpdate](#cloudresourcemanagerprojectsupdate) - Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.

## cloudresourcemanagerProjectsClearOrgPolicy

Clears a `Policy` from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsClearOrgPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClearOrgPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsClearOrgPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsClearOrgPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->clearOrgPolicyRequest = new ClearOrgPolicyRequest();
    $request->clearOrgPolicyRequest->constraint = 'doloremque';
    $request->clearOrgPolicyRequest->etag = 'reprehenderit';
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->resource = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new CloudresourcemanagerProjectsClearOrgPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsClearOrgPolicy($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsCreate

Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Project;
use \OpenAPI\OpenAPI\Models\Shared\ProjectLifecycleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceId;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->project = new Project();
    $request->project->createTime = 'repudiandae';
    $request->project->labels = [
        'ipsum' => 'quidem',
    ];
    $request->project->lifecycleState = ProjectLifecycleStateEnum::DELETE_REQUESTED;
    $request->project->name = 'Ervin Gleason';
    $request->project->parent = new ResourceId();
    $request->project->parent->id = 'e1e91e45-0ad2-4abd-8426-9802d502a94b';
    $request->project->parent->type = 'tempore';
    $request->project->projectId = 'labore';
    $request->project->projectNumber = 'delectus';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'sint';
    $request->key = 'aliquid';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new CloudresourcemanagerProjectsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsDelete

Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'in';
    $request->key = 'in';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->projectId = 'maiores';
    $request->quotaUser = 'rerum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new CloudresourcemanagerProjectsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsGet

Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->projectId = 'occaecati';
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new CloudresourcemanagerProjectsGetSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerProjectsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsGet($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsGetAncestry

Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetAncestryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetAncestrySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetAncestrySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetAncestrySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsGetAncestryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'nam' => 'id',
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'natus';
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->projectId = 'perferendis';
    $request->quotaUser = 'nihil';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new CloudresourcemanagerProjectsGetAncestrySecurity();
    $requestSecurity->option1 = new CloudresourcemanagerProjectsGetAncestrySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsGetAncestry($request, $requestSecurity);

    if ($response->getAncestryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsGetEffectiveOrgPolicy

Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetEffectiveOrgPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getEffectiveOrgPolicyRequest = new GetEffectiveOrgPolicyRequest();
    $request->getEffectiveOrgPolicyRequest->constraint = 'labore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'nobis';
    $request->key = 'eum';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->resource = 'architecto';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'et';

    $requestSecurity = new CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity();
    $requestSecurity->option1 = new CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsGetEffectiveOrgPolicy($request, $requestSecurity);

    if ($response->orgPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsGetIamPolicy

Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 354047;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'accusantium';
    $request->key = 'mollitia';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->resource = 'ad';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new CloudresourcemanagerProjectsGetIamPolicySecurity();
    $requestSecurity->option1 = new CloudresourcemanagerProjectsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsGetOrgPolicy

Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetOrgPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetOrgPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetOrgPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetOrgPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsGetOrgPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsGetOrgPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getOrgPolicyRequest = new GetOrgPolicyRequest();
    $request->getOrgPolicyRequest->constraint = 'odit';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->key = 'debitis';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->resource = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new CloudresourcemanagerProjectsGetOrgPolicySecurity();
    $requestSecurity->option1 = new CloudresourcemanagerProjectsGetOrgPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsGetOrgPolicy($request, $requestSecurity);

    if ($response->orgPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsList

Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'expedita';
    $request->filter = 'nihil';
    $request->key = 'repellat';
    $request->oauthToken = 'quibusdam';
    $request->pageSize = 149448;
    $request->pageToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new CloudresourcemanagerProjectsListSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerProjectsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsList($request, $requestSecurity);

    if ($response->listProjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsListAvailableOrgPolicyConstraints

Lists `Constraints` that could be applied on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListAvailableOrgPolicyConstraintsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->listAvailableOrgPolicyConstraintsRequest = new ListAvailableOrgPolicyConstraintsRequest();
    $request->listAvailableOrgPolicyConstraintsRequest->pageSize = 615560;
    $request->listAvailableOrgPolicyConstraintsRequest->pageToken = 'magni';
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'pariatur';
    $request->key = 'maxime';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->resource = 'odit';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsListAvailableOrgPolicyConstraints($request, $requestSecurity);

    if ($response->listAvailableOrgPolicyConstraintsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsListOrgPolicies

Lists all the `Policies` set for a particular resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListOrgPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrgPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListOrgPoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsListOrgPoliciesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->listOrgPoliciesRequest = new ListOrgPoliciesRequest();
    $request->listOrgPoliciesRequest->pageSize = 982575;
    $request->listOrgPoliciesRequest->pageToken = 'quidem';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nam';
    $request->key = 'eaque';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->resource = 'voluptatibus';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new CloudresourcemanagerProjectsListOrgPoliciesSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsListOrgPolicies($request, $requestSecurity);

    if ($response->listOrgPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsSetIamPolicy

Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the GCP Console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'corporis';
    $request->setIamPolicyRequest->policy->version = 944124;
    $request->setIamPolicyRequest->updateMask = 'libero';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'totam';
    $request->key = 'dignissimos';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->resource = 'nesciunt';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new CloudresourcemanagerProjectsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsSetOrgPolicy

Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsSetOrgPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetOrgPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrgPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BooleanPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ListPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ListPolicyAllValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsSetOrgPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsSetOrgPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setOrgPolicyRequest = new SetOrgPolicyRequest();
    $request->setOrgPolicyRequest->policy = new OrgPolicy();
    $request->setOrgPolicyRequest->policy->booleanPolicy = new BooleanPolicy();
    $request->setOrgPolicyRequest->policy->booleanPolicy->enforced = false;
    $request->setOrgPolicyRequest->policy->constraint = 'minus';
    $request->setOrgPolicyRequest->policy->etag = 'quam';
    $request->setOrgPolicyRequest->policy->listPolicy = new ListPolicy();
    $request->setOrgPolicyRequest->policy->listPolicy->allValues = ListPolicyAllValuesEnum::ALL_VALUES_UNSPECIFIED;
    $request->setOrgPolicyRequest->policy->listPolicy->allowedValues = [
        'nostrum',
        'hic',
        'recusandae',
        'omnis',
    ];
    $request->setOrgPolicyRequest->policy->listPolicy->deniedValues = [
        'perspiciatis',
        'voluptatem',
        'porro',
    ];
    $request->setOrgPolicyRequest->policy->listPolicy->inheritFromParent = false;
    $request->setOrgPolicyRequest->policy->listPolicy->suggestedValue = 'consequuntur';
    $request->setOrgPolicyRequest->policy->restoreDefault = [
        'error' => 'eaque',
        'occaecati' => 'rerum',
        'adipisci' => 'asperiores',
    ];
    $request->setOrgPolicyRequest->policy->updateTime = 'earum';
    $request->setOrgPolicyRequest->policy->version = 267262;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'pariatur';
    $request->key = 'provident';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->resource = 'delectus';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new CloudresourcemanagerProjectsSetOrgPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsSetOrgPolicy($request, $requestSecurity);

    if ($response->orgPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsTestIamPermissions

Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'dolorem',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'hic';
    $request->key = 'excepturi';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->resource = 'dignissimos';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new CloudresourcemanagerProjectsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsUndelete

Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'veritatis' => 'ipsa',
        'ipsa' => 'iure',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'quidem';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->projectId = 'natus';
    $request->quotaUser = 'eos';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new CloudresourcemanagerProjectsUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsUndelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerProjectsUpdate

Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Project;
use \OpenAPI\OpenAPI\Models\Shared\ProjectLifecycleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceId;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerProjectsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerProjectsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->project = new Project();
    $request->project->createTime = 'ab';
    $request->project->labels = [
        'dolorum' => 'iusto',
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->project->lifecycleState = ProjectLifecycleStateEnum::DELETE_IN_PROGRESS;
    $request->project->name = 'Emmett Kovacek';
    $request->project->parent = new ResourceId();
    $request->project->parent->id = 'ae4203ce-5e6a-495d-8a0d-446ce2af7a73';
    $request->project->parent->type = 'quisquam';
    $request->project->projectId = 'tenetur';
    $request->project->projectNumber = 'amet';
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'enim';
    $request->key = 'dolorem';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->projectId = 'totam';
    $request->quotaUser = 'nihil';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'expedita';

    $requestSecurity = new CloudresourcemanagerProjectsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudresourcemanagerProjectsUpdate($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
