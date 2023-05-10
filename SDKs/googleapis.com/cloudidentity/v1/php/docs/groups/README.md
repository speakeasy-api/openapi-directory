# groups

### Available Operations

* [cloudidentityGroupsCreate](#cloudidentitygroupscreate) - Creates a Group.
* [cloudidentityGroupsList](#cloudidentitygroupslist) - Lists the `Group` resources under a customer or namespace.
* [cloudidentityGroupsLookup](#cloudidentitygroupslookup) - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
* [cloudidentityGroupsMembershipsCheckTransitiveMembership](#cloudidentitygroupsmembershipschecktransitivemembership) - Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
* [cloudidentityGroupsMembershipsCreate](#cloudidentitygroupsmembershipscreate) - Creates a `Membership`.
* [cloudidentityGroupsMembershipsGetMembershipGraph](#cloudidentitygroupsmembershipsgetmembershipgraph) - Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
* [cloudidentityGroupsMembershipsList](#cloudidentitygroupsmembershipslist) - Lists the `Membership`s within a `Group`.
* [cloudidentityGroupsMembershipsLookup](#cloudidentitygroupsmembershipslookup) - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
* [cloudidentityGroupsMembershipsModifyMembershipRoles](#cloudidentitygroupsmembershipsmodifymembershiproles) - Modifies the `MembershipRole`s of a `Membership`.
* [cloudidentityGroupsMembershipsSearchDirectGroups](#cloudidentitygroupsmembershipssearchdirectgroups) - Searches direct groups of a member.
* [cloudidentityGroupsMembershipsSearchTransitiveGroups](#cloudidentitygroupsmembershipssearchtransitivegroups) - Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
* [cloudidentityGroupsMembershipsSearchTransitiveMemberships](#cloudidentitygroupsmembershipssearchtransitivememberships) - Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
* [cloudidentityGroupsSearch](#cloudidentitygroupssearch) - Searches for `Group` resources matching a specified query.

## cloudidentityGroupsCreate

Creates a Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupInput;
use \OpenAPI\OpenAPI\Models\Shared\DynamicGroupMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DynamicGroupQuery;
use \OpenAPI\OpenAPI\Models\Shared\DynamicGroupQueryResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamicGroupStatus;
use \OpenAPI\OpenAPI\Models\Shared\DynamicGroupStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsCreateInitialGroupConfigEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->groupInput = new GroupInput();
    $request->groupInput->description = 'id';
    $request->groupInput->displayName = 'blanditiis';
    $request->groupInput->dynamicGroupMetadata = new DynamicGroupMetadata();
    $request->groupInput->dynamicGroupMetadata->queries = [
        new DynamicGroupQuery(),
        new DynamicGroupQuery(),
        new DynamicGroupQuery(),
    ];
    $request->groupInput->dynamicGroupMetadata->status = new DynamicGroupStatus();
    $request->groupInput->dynamicGroupMetadata->status->status = DynamicGroupStatusStatusEnum::INVALID_QUERY;
    $request->groupInput->dynamicGroupMetadata->status->statusTime = 'amet';
    $request->groupInput->groupKey = new EntityKey();
    $request->groupInput->groupKey->id = 'a6699707-4ba4-4469-b6e2-141959890afa';
    $request->groupInput->groupKey->namespace = 'ad';
    $request->groupInput->labels = [
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->groupInput->parent = 'quasi';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'eius';
    $request->initialGroupConfig = CloudidentityGroupsCreateInitialGroupConfigEnum::EMPTY;
    $request->key = 'deleniti';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new CloudidentityGroupsCreateSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsList

Lists the `Group` resources under a customer or namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'repellat';
    $request->key = 'quibusdam';
    $request->oauthToken = 'sed';
    $request->pageSize = 904648;
    $request->pageToken = 'pariatur';
    $request->parent = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'natus';
    $request->view = CloudidentityGroupsListViewEnum::VIEW_UNSPECIFIED;

    $requestSecurity = new CloudidentityGroupsListSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsList($request, $requestSecurity);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsLookup

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsLookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsLookupSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsLookupSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsLookupSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsLookupSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsLookupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'maxime';
    $request->groupKeyId = 'ea';
    $request->groupKeyNamespace = 'excepturi';
    $request->key = 'odit';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new CloudidentityGroupsLookupSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsLookupSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsLookup($request, $requestSecurity);

    if ($response->lookupGroupNameResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsMembershipsCheckTransitiveMembership

Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nam';
    $request->key = 'eaque';
    $request->oauthToken = 'pariatur';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->query = 'voluptatibus';
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsMembershipsCheckTransitiveMembership($request, $requestSecurity);

    if ($response->checkTransitiveMembershipResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsMembershipsCreate

Creates a `Membership`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\EntityKey;
use \OpenAPI\OpenAPI\Models\Shared\MembershipRoleInput;
use \OpenAPI\OpenAPI\Models\Shared\ExpiryDetail;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsMembershipsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->membershipInput = new MembershipInput();
    $request->membershipInput->preferredMemberKey = new EntityKey();
    $request->membershipInput->preferredMemberKey->id = 'c5fbb258-7053-4202-873d-5fe9b90c2890';
    $request->membershipInput->preferredMemberKey->namespace = 'occaecati';
    $request->membershipInput->roles = [
        new MembershipRoleInput(),
        new MembershipRoleInput(),
        new MembershipRoleInput(),
    ];
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'modi';
    $request->key = 'iste';
    $request->oauthToken = 'dolorum';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new CloudidentityGroupsMembershipsCreateSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsMembershipsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsMembershipsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsMembershipsGetMembershipGraph

Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsGetMembershipGraphRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsGetMembershipGraphSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsMembershipsGetMembershipGraphRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'aliquid';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolorem';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->query = 'qui';
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new CloudidentityGroupsMembershipsGetMembershipGraphSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsMembershipsGetMembershipGraph($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsMembershipsList

Lists the `Membership`s within a `Group`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsMembershipsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'amet';
    $request->key = 'dolorum';
    $request->oauthToken = 'numquam';
    $request->pageSize = 85295;
    $request->pageToken = 'ipsa';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'quaerat';
    $request->view = CloudidentityGroupsMembershipsListViewEnum::FULL;

    $requestSecurity = new CloudidentityGroupsMembershipsListSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsMembershipsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsMembershipsList($request, $requestSecurity);

    if ($response->listMembershipsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsMembershipsLookup

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsLookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsLookupSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsLookupSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsLookupSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsLookupSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsMembershipsLookupRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'eos';
    $request->key = 'atque';
    $request->memberKeyId = 'sit';
    $request->memberKeyNamespace = 'fugiat';
    $request->oauthToken = 'ab';
    $request->parent = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new CloudidentityGroupsMembershipsLookupSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsMembershipsLookupSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsMembershipsLookup($request, $requestSecurity);

    if ($response->lookupMembershipNameResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsMembershipsModifyMembershipRoles

Modifies the `MembershipRole`s of a `Membership`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsModifyMembershipRolesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyMembershipRolesRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\MembershipRoleInput;
use \OpenAPI\OpenAPI\Models\Shared\ExpiryDetail;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMembershipRolesParamsInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsModifyMembershipRolesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsMembershipsModifyMembershipRolesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->modifyMembershipRolesRequestInput = new ModifyMembershipRolesRequestInput();
    $request->modifyMembershipRolesRequestInput->addRoles = [
        new MembershipRoleInput(),
        new MembershipRoleInput(),
        new MembershipRoleInput(),
    ];
    $request->modifyMembershipRolesRequestInput->removeRoles = [
        'necessitatibus',
        'distinctio',
        'asperiores',
    ];
    $request->modifyMembershipRolesRequestInput->updateRolesParams = [
        new UpdateMembershipRolesParamsInput(),
        new UpdateMembershipRolesParamsInput(),
    ];
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'saepe';
    $request->key = 'eius';
    $request->name = 'Lisa Fay';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new CloudidentityGroupsMembershipsModifyMembershipRolesSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsMembershipsModifyMembershipRoles($request, $requestSecurity);

    if ($response->modifyMembershipRolesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsMembershipsSearchDirectGroups

Searches direct groups of a member.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchDirectGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsMembershipsSearchDirectGroupsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'similique';
    $request->key = 'alias';
    $request->oauthToken = 'at';
    $request->orderBy = 'quaerat';
    $request->pageSize = 273542;
    $request->pageToken = 'vel';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->query = 'officiis';
    $request->quotaUser = 'qui';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'a';

    $response = $sdk->groups->cloudidentityGroupsMembershipsSearchDirectGroups($request);

    if ($response->searchDirectGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsMembershipsSearchTransitiveGroups

Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'quisquam';
    $request->key = 'tenetur';
    $request->oauthToken = 'amet';
    $request->pageSize = 730856;
    $request->pageToken = 'accusamus';
    $request->parent = 'numquam';
    $request->prettyPrint = false;
    $request->query = 'enim';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsMembershipsSearchTransitiveGroups($request, $requestSecurity);

    if ($response->searchTransitiveGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsMembershipsSearchTransitiveMemberships

Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'sed';
    $request->key = 'vel';
    $request->oauthToken = 'libero';
    $request->pageSize = 374170;
    $request->pageToken = 'deserunt';
    $request->parent = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsMembershipsSearchTransitiveMemberships($request, $requestSecurity);

    if ($response->searchTransitiveMembershipsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityGroupsSearch

Searches for `Group` resources matching a specified query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsSearchViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsSearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsSearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsSearchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityGroupsSearchSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityGroupsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'dicta';
    $request->key = 'laborum';
    $request->oauthToken = 'totam';
    $request->pageSize = 276894;
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->query = 'dolores';
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'aliquid';
    $request->view = CloudidentityGroupsSearchViewEnum::BASIC;

    $requestSecurity = new CloudidentityGroupsSearchSecurity();
    $requestSecurity->option1 = new CloudidentityGroupsSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->cloudidentityGroupsSearch($request, $requestSecurity);

    if ($response->searchGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
