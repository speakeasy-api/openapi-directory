# projects

### Available Operations

* [bigqueryreservationProjectsLocationsCapacityCommitmentsCreate](#bigqueryreservationprojectslocationscapacitycommitmentscreate) - Creates a new capacity commitment resource.
* [bigqueryreservationProjectsLocationsCapacityCommitmentsList](#bigqueryreservationprojectslocationscapacitycommitmentslist) - Lists all the capacity commitments for the admin project.
* [bigqueryreservationProjectsLocationsCapacityCommitmentsMerge](#bigqueryreservationprojectslocationscapacitycommitmentsmerge) - Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
* [bigqueryreservationProjectsLocationsCapacityCommitmentsSplit](#bigqueryreservationprojectslocationscapacitycommitmentssplit) - Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsCreate](#bigqueryreservationprojectslocationsreservationsassignmentscreate) - Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsDelete](#bigqueryreservationprojectslocationsreservationsassignmentsdelete) - Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsList](#bigqueryreservationprojectslocationsreservationsassignmentslist) - Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsMove](#bigqueryreservationprojectslocationsreservationsassignmentsmove) - Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsPatch](#bigqueryreservationprojectslocationsreservationsassignmentspatch) - Updates an existing assignment. Only the `priority` field can be updated.
* [bigqueryreservationProjectsLocationsReservationsCreate](#bigqueryreservationprojectslocationsreservationscreate) - Creates a new reservation resource.
* [bigqueryreservationProjectsLocationsReservationsGet](#bigqueryreservationprojectslocationsreservationsget) - Returns information about the reservation.
* [bigqueryreservationProjectsLocationsReservationsList](#bigqueryreservationprojectslocationsreservationslist) - Lists all the reservations for the project in the specified location.
* [bigqueryreservationProjectsLocationsSearchAssignments](#bigqueryreservationprojectslocationssearchassignments) - Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

## bigqueryreservationProjectsLocationsCapacityCommitmentsCreate

Creates a new capacity commitment resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentInput;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentRenewalPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->capacityCommitmentInput = new CapacityCommitmentInput();
    $request->capacityCommitmentInput->failureStatus = new Status();
    $request->capacityCommitmentInput->failureStatus->code = 870013;
    $request->capacityCommitmentInput->failureStatus->details = [
        [
            'molestiae' => 'quod',
            'quod' => 'esse',
            'totam' => 'porro',
            'dolorum' => 'dicta',
        ],
        [
            'officia' => 'occaecati',
            'fugit' => 'deleniti',
            'hic' => 'optio',
        ],
        [
            'beatae' => 'commodi',
            'molestiae' => 'modi',
            'qui' => 'impedit',
        ],
        [
            'esse' => 'ipsum',
            'excepturi' => 'aspernatur',
            'perferendis' => 'ad',
        ],
    ];
    $request->capacityCommitmentInput->failureStatus->message = 'natus';
    $request->capacityCommitmentInput->multiRegionAuxiliary = false;
    $request->capacityCommitmentInput->plan = CapacityCommitmentPlanEnum::COMMITMENT_PLAN_UNSPECIFIED;
    $request->capacityCommitmentInput->renewalPlan = CapacityCommitmentRenewalPlanEnum::MONTHLY;
    $request->capacityCommitmentInput->slotCount = 'dolor';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->capacityCommitmentId = 'saepe';
    $request->enforceSingleAdminProjectPerOrg = false;
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsCapacityCommitmentsCreate($request, $requestSecurity);

    if ($response->capacityCommitment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsCapacityCommitmentsList

Lists all the capacity commitments for the admin project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsCapacityCommitmentsList($request, $requestSecurity);

    if ($response->listCapacityCommitmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsCapacityCommitmentsMerge

Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MergeCapacityCommitmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->mergeCapacityCommitmentsRequest = new MergeCapacityCommitmentsRequest();
    $request->mergeCapacityCommitmentsRequest->capacityCommitmentIds = [
        'excepturi',
        'accusantium',
    ];
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsCapacityCommitmentsMerge($request, $requestSecurity);

    if ($response->capacityCommitment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsCapacityCommitmentsSplit

Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SplitCapacityCommitmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->splitCapacityCommitmentRequest = new SplitCapacityCommitmentRequest();
    $request->splitCapacityCommitmentRequest->slotCount = 'occaecati';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestiae';
    $request->key = 'velit';
    $request->name = 'Miss Eugene Hauck';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsCapacityCommitmentsSplit($request, $requestSecurity);

    if ($response->splitCapacityCommitmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsCreate

Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->assignmentInput = new AssignmentInput();
    $request->assignmentInput->assignee = 'ipsam';
    $request->assignmentInput->jobType = AssignmentJobTypeEnum::QUERY;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->assignmentId = 'quasi';
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsReservationsAssignmentsCreate($request, $requestSecurity);

    if ($response->assignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsDelete

Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'voluptate';
    $request->force = false;
    $request->key = 'cum';
    $request->name = 'Sharon Kiehn';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsReservationsAssignmentsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsList

Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->pageSize = 216822;
    $request->pageToken = 'quidem';
    $request->parent = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsReservationsAssignmentsList($request, $requestSecurity);

    if ($response->listAssignmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsMove

Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MoveAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->moveAssignmentRequest = new MoveAssignmentRequest();
    $request->moveAssignmentRequest->destinationId = 'rem';
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'sint';
    $request->key = 'veritatis';
    $request->name = 'Miss Randall Hamill';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsReservationsAssignmentsMove($request, $requestSecurity);

    if ($response->assignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsPatch

Updates an existing assignment. Only the `priority` field can be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->assignmentInput = new AssignmentInput();
    $request->assignmentInput->assignee = 'modi';
    $request->assignmentInput->jobType = AssignmentJobTypeEnum::JOB_TYPE_UNSPECIFIED;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'perferendis';
    $request->key = 'magni';
    $request->name = 'Vernon Abshire';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->updateMask = 'facilis';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsReservationsAssignmentsPatch($request, $requestSecurity);

    if ($response->assignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsReservationsCreate

Creates a new reservation resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsReservationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reservationInput = new ReservationInput();
    $request->reservationInput->concurrency = 'eum';
    $request->reservationInput->ignoreIdleSlots = false;
    $request->reservationInput->multiRegionAuxiliary = false;
    $request->reservationInput->name = 'Sheri Mayer';
    $request->reservationInput->slotCapacity = 'necessitatibus';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'debitis';
    $request->key = 'a';
    $request->oauthToken = 'dolorum';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->reservationId = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new BigqueryreservationProjectsLocationsReservationsCreateSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsReservationsCreate($request, $requestSecurity);

    if ($response->reservation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsReservationsGet

Returns information about the reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsReservationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'ea';
    $request->key = 'aliquid';
    $request->name = 'Tomas Friesen';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new BigqueryreservationProjectsLocationsReservationsGetSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsReservationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsReservationsGet($request, $requestSecurity);

    if ($response->reservation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsReservationsList

Lists all the reservations for the project in the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsReservationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsReservationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'sapiente';
    $request->filter = 'amet';
    $request->key = 'deserunt';
    $request->oauthToken = 'nisi';
    $request->pageSize = 423855;
    $request->pageToken = 'natus';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new BigqueryreservationProjectsLocationsReservationsListSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsReservationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsReservationsList($request, $requestSecurity);

    if ($response->listReservationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryreservationProjectsLocationsSearchAssignments

Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsSearchAssignmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsSearchAssignmentsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryreservationProjectsLocationsSearchAssignmentsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->key = 'suscipit';
    $request->oauthToken = 'natus';
    $request->pageSize = 749170;
    $request->pageToken = 'eum';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->query = 'aspernatur';
    $request->quotaUser = 'architecto';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'et';

    $requestSecurity = new BigqueryreservationProjectsLocationsSearchAssignmentsSecurity();
    $requestSecurity->option1 = new BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryreservationProjectsLocationsSearchAssignments($request, $requestSecurity);

    if ($response->searchAssignmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
