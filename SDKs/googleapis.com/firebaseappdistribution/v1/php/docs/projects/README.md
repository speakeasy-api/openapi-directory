# projects

### Available Operations

* [firebaseappdistributionProjectsAppsReleasesBatchDelete](#firebaseappdistributionprojectsappsreleasesbatchdelete) - Deletes releases. A maximum of 100 releases can be deleted per request.
* [firebaseappdistributionProjectsAppsReleasesDistribute](#firebaseappdistributionprojectsappsreleasesdistribute) - Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
* [firebaseappdistributionProjectsAppsReleasesFeedbackReportsList](#firebaseappdistributionprojectsappsreleasesfeedbackreportslist) - Lists feedback reports. By default, sorts by `createTime` in descending order.
* [firebaseappdistributionProjectsAppsReleasesList](#firebaseappdistributionprojectsappsreleaseslist) - Lists releases. By default, sorts by `createTime` in descending order.
* [firebaseappdistributionProjectsAppsReleasesOperationsCancel](#firebaseappdistributionprojectsappsreleasesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [firebaseappdistributionProjectsAppsReleasesOperationsList](#firebaseappdistributionprojectsappsreleasesoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [firebaseappdistributionProjectsAppsReleasesOperationsWait](#firebaseappdistributionprojectsappsreleasesoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [firebaseappdistributionProjectsGroupsBatchJoin](#firebaseappdistributionprojectsgroupsbatchjoin) - Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
* [firebaseappdistributionProjectsGroupsBatchLeave](#firebaseappdistributionprojectsgroupsbatchleave) - Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
* [firebaseappdistributionProjectsGroupsCreate](#firebaseappdistributionprojectsgroupscreate) - Create a group.
* [firebaseappdistributionProjectsGroupsDelete](#firebaseappdistributionprojectsgroupsdelete) - Delete a group.
* [firebaseappdistributionProjectsGroupsGet](#firebaseappdistributionprojectsgroupsget) - Get a group.
* [firebaseappdistributionProjectsGroupsList](#firebaseappdistributionprojectsgroupslist) - List groups.
* [firebaseappdistributionProjectsTestersBatchAdd](#firebaseappdistributionprojectstestersbatchadd) - Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
* [firebaseappdistributionProjectsTestersBatchRemove](#firebaseappdistributionprojectstestersbatchremove) - Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
* [firebaseappdistributionProjectsTestersList](#firebaseappdistributionprojectstesterslist) - Lists testers and their resource ids.
* [firebaseappdistributionProjectsTestersPatch](#firebaseappdistributionprojectstesterspatch) - Update a tester. If the testers joins a group they gain access to all releases that the group has access to.

## firebaseappdistributionProjectsAppsReleasesBatchDelete

Deletes releases. A maximum of 100 releases can be deleted per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesBatchDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsAppsReleasesBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirebaseAppdistroV1BatchDeleteReleasesRequest = new GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest();
    $request->googleFirebaseAppdistroV1BatchDeleteReleasesRequest->names = [
        'recusandae',
        'temporibus',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new FirebaseappdistributionProjectsAppsReleasesBatchDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsAppsReleasesBatchDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsAppsReleasesDistribute

Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesDistributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppdistroV1DistributeReleaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesDistributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsAppsReleasesDistributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirebaseAppdistroV1DistributeReleaseRequest = new GoogleFirebaseAppdistroV1DistributeReleaseRequest();
    $request->googleFirebaseAppdistroV1DistributeReleaseRequest->groupAliases = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->googleFirebaseAppdistroV1DistributeReleaseRequest->testerEmails = [
        'totam',
        'porro',
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'officia';
    $request->key = 'occaecati';
    $request->name = 'Cassandra Welch';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new FirebaseappdistributionProjectsAppsReleasesDistributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsAppsReleasesDistribute($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1DistributeReleaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsAppsReleasesFeedbackReportsList

Lists feedback reports. By default, sorts by `createTime` in descending order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'ipsum';
    $request->key = 'excepturi';
    $request->oauthToken = 'aspernatur';
    $request->pageSize = 18789;
    $request->pageToken = 'ad';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsAppsReleasesFeedbackReportsList($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1ListFeedbackReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsAppsReleasesList

Lists releases. By default, sorts by `createTime` in descending order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsAppsReleasesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->filter = 'in';
    $request->key = 'corporis';
    $request->oauthToken = 'iste';
    $request->orderBy = 'iure';
    $request->pageSize = 902349;
    $request->pageToken = 'quidem';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'est';

    $requestSecurity = new FirebaseappdistributionProjectsAppsReleasesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsAppsReleasesList($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1ListReleasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsAppsReleasesOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsAppsReleasesOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
        'nobis' => 'enim',
    ];
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'excepturi';
    $request->key = 'accusantium';
    $request->name = 'Cecilia Yundt MD';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new FirebaseappdistributionProjectsAppsReleasesOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsAppsReleasesOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsAppsReleasesOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsAppsReleasesOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->filter = 'molestiae';
    $request->key = 'velit';
    $request->name = 'Miss Eugene Hauck';
    $request->oauthToken = 'enim';
    $request->pageSize = 138183;
    $request->pageToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new FirebaseappdistributionProjectsAppsReleasesOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsAppsReleasesOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsAppsReleasesOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesOperationsWaitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleLongrunningWaitOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsAppsReleasesOperationsWaitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsAppsReleasesOperationsWaitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleLongrunningWaitOperationRequest = new GoogleLongrunningWaitOperationRequest();
    $request->googleLongrunningWaitOperationRequest->timeout = 'possimus';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->name = 'Johanna Wolf';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new FirebaseappdistributionProjectsAppsReleasesOperationsWaitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsAppsReleasesOperationsWait($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsGroupsBatchJoin

Batch adds members to a group. The testers will gain access to all releases that the groups have access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsBatchJoinRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppdistroV1BatchJoinGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsBatchJoinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsGroupsBatchJoinRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppdistroV1BatchJoinGroupRequest = new GoogleFirebaseAppdistroV1BatchJoinGroupRequest();
    $request->googleFirebaseAppdistroV1BatchJoinGroupRequest->createMissingTesters = false;
    $request->googleFirebaseAppdistroV1BatchJoinGroupRequest->emails = [
        'perferendis',
        'doloremque',
        'reprehenderit',
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->group = 'dolore';
    $request->key = 'iusto';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new FirebaseappdistributionProjectsGroupsBatchJoinSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsGroupsBatchJoin($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsGroupsBatchLeave

Batch removed members from a group. The testers will lose access to all releases that the groups have access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsBatchLeaveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppdistroV1BatchLeaveGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsBatchLeaveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsGroupsBatchLeaveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppdistroV1BatchLeaveGroupRequest = new GoogleFirebaseAppdistroV1BatchLeaveGroupRequest();
    $request->googleFirebaseAppdistroV1BatchLeaveGroupRequest->emails = [
        'quae',
        'ipsum',
        'quidem',
        'molestias',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->group = 'rem';
    $request->key = 'voluptates';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new FirebaseappdistributionProjectsGroupsBatchLeaveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsGroupsBatchLeave($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsGroupsCreate

Create a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppdistroV1GroupInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirebaseAppdistroV1GroupInput = new GoogleFirebaseAppdistroV1GroupInput();
    $request->googleFirebaseAppdistroV1GroupInput->displayName = 'incidunt';
    $request->googleFirebaseAppdistroV1GroupInput->name = 'Elizabeth Orn';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->groupId = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'aliquid';
    $request->parent = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new FirebaseappdistributionProjectsGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsGroupsCreate($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1Group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsGroupsDelete

Delete a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsGroupsDeleteRequest();
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

    $requestSecurity = new FirebaseappdistributionProjectsGroupsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsGroupsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsGroupsGet

Get a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'officia';
    $request->key = 'dolor';
    $request->name = 'Randal Parisian';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new FirebaseappdistributionProjectsGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsGroupsGet($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1Group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsGroupsList

List groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->key = 'laborum';
    $request->oauthToken = 'accusamus';
    $request->pageSize = 249796;
    $request->pageToken = 'occaecati';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new FirebaseappdistributionProjectsGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsGroupsList($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1ListGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsTestersBatchAdd

Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsTestersBatchAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppdistroV1BatchAddTestersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsTestersBatchAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsTestersBatchAddRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirebaseAppdistroV1BatchAddTestersRequest = new GoogleFirebaseAppdistroV1BatchAddTestersRequest();
    $request->googleFirebaseAppdistroV1BatchAddTestersRequest->emails = [
        'id',
        'blanditiis',
        'deleniti',
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new FirebaseappdistributionProjectsTestersBatchAddSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsTestersBatchAdd($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1BatchAddTestersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsTestersBatchRemove

Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsTestersBatchRemoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppdistroV1BatchRemoveTestersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsTestersBatchRemoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsTestersBatchRemoveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppdistroV1BatchRemoveTestersRequest = new GoogleFirebaseAppdistroV1BatchRemoveTestersRequest();
    $request->googleFirebaseAppdistroV1BatchRemoveTestersRequest->emails = [
        'id',
        'labore',
        'labore',
    ];
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new FirebaseappdistributionProjectsTestersBatchRemoveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsTestersBatchRemove($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1BatchRemoveTestersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsTestersList

Lists testers and their resource ids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsTestersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsTestersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsTestersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'accusantium';
    $request->filter = 'mollitia';
    $request->key = 'reiciendis';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 320997;
    $request->pageToken = 'eum';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new FirebaseappdistributionProjectsTestersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsTestersList($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1ListTestersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappdistributionProjectsTestersPatch

Update a tester. If the testers joins a group they gain access to all releases that the group has access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsTestersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppdistroV1TesterInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionProjectsTestersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionProjectsTestersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppdistroV1TesterInput = new GoogleFirebaseAppdistroV1TesterInput();
    $request->googleFirebaseAppdistroV1TesterInput->displayName = 'iure';
    $request->googleFirebaseAppdistroV1TesterInput->groups = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->googleFirebaseAppdistroV1TesterInput->name = 'Dr. Arnold Bradtke';
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->name = 'Al Bashirian';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->updateMask = 'sunt';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new FirebaseappdistributionProjectsTestersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappdistributionProjectsTestersPatch($request, $requestSecurity);

    if ($response->googleFirebaseAppdistroV1Tester !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
