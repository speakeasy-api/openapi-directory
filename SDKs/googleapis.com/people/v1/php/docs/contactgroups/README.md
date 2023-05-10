# contactGroups

### Available Operations

* [peopleContactGroupsBatchGet](#peoplecontactgroupsbatchget) - Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
* [peopleContactGroupsCreate](#peoplecontactgroupscreate) - Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peopleContactGroupsDelete](#peoplecontactgroupsdelete) - Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peopleContactGroupsList](#peoplecontactgroupslist) - List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
* [peopleContactGroupsMembersModify](#peoplecontactgroupsmembersmodify) - Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.
* [peopleContactGroupsUpdate](#peoplecontactgroupsupdate) - Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

## peopleContactGroupsBatchGet

Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleContactGroupsBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'minus';
    $request->groupFields = 'placeat';
    $request->key = 'voluptatum';
    $request->maxMembers = 479977;
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->resourceNames = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new PeopleContactGroupsBatchGetSecurity();
    $requestSecurity->option1 = new PeopleContactGroupsBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contactGroups->peopleContactGroupsBatchGet($request, $requestSecurity);

    if ($response->batchGetContactGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peopleContactGroupsCreate

Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateContactGroupRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GroupClientData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleContactGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createContactGroupRequestInput = new CreateContactGroupRequestInput();
    $request->createContactGroupRequestInput->contactGroup = new ContactGroupInput();
    $request->createContactGroupRequestInput->contactGroup->clientData = [
        new GroupClientData(),
        new GroupClientData(),
        new GroupClientData(),
        new GroupClientData(),
    ];
    $request->createContactGroupRequestInput->contactGroup->etag = 'sapiente';
    $request->createContactGroupRequestInput->contactGroup->name = 'Fred Strosin';
    $request->createContactGroupRequestInput->contactGroup->resourceName = 'molestiae';
    $request->createContactGroupRequestInput->readGroupFields = 'quod';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new PeopleContactGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contactGroups->peopleContactGroupsCreate($request, $requestSecurity);

    if ($response->contactGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peopleContactGroupsDelete

Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleContactGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->deleteContacts = false;
    $request->fields = 'totam';
    $request->key = 'beatae';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->resourceName = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new PeopleContactGroupsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contactGroups->peopleContactGroupsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peopleContactGroupsList

List all contact groups owned by the authenticated user. Members of the contact groups are not populated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleContactGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->groupFields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->pageSize = 149675;
    $request->pageToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->syncToken = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new PeopleContactGroupsListSecurity();
    $requestSecurity->option1 = new PeopleContactGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contactGroups->peopleContactGroupsList($request, $requestSecurity);

    if ($response->listContactGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peopleContactGroupsMembersModify

Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsMembersModifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyContactGroupMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsMembersModifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleContactGroupsMembersModifyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->modifyContactGroupMembersRequest = new ModifyContactGroupMembersRequest();
    $request->modifyContactGroupMembersRequest->resourceNamesToAdd = [
        'in',
        'corporis',
        'iste',
    ];
    $request->modifyContactGroupMembersRequest->resourceNamesToRemove = [
        'saepe',
        'quidem',
    ];
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->resourceName = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new PeopleContactGroupsMembersModifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contactGroups->peopleContactGroupsMembersModify($request, $requestSecurity);

    if ($response->modifyContactGroupMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peopleContactGroupsUpdate

Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContactGroupRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GroupClientData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleContactGroupsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateContactGroupRequestInput = new UpdateContactGroupRequestInput();
    $request->updateContactGroupRequestInput->contactGroup = new ContactGroupInput();
    $request->updateContactGroupRequestInput->contactGroup->clientData = [
        new GroupClientData(),
        new GroupClientData(),
    ];
    $request->updateContactGroupRequestInput->contactGroup->etag = 'omnis';
    $request->updateContactGroupRequestInput->contactGroup->name = 'Ms. Cathy Marks';
    $request->updateContactGroupRequestInput->contactGroup->resourceName = 'doloribus';
    $request->updateContactGroupRequestInput->readGroupFields = 'sapiente';
    $request->updateContactGroupRequestInput->updateGroupFields = 'architecto';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'consequuntur';
    $request->key = 'repellat';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->resourceName = 'numquam';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new PeopleContactGroupsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contactGroups->peopleContactGroupsUpdate($request, $requestSecurity);

    if ($response->contactGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
