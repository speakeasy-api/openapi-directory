# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentInput;
use \OpenAPI\OpenAPI\Models\Shared\CapacityCommitmentEditionEnum;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->capacityCommitmentInput = new CapacityCommitmentInput();
    $request->capacityCommitmentInput->edition = CapacityCommitmentEditionEnum::ENTERPRISE;
    $request->capacityCommitmentInput->failureStatus = new Status();
    $request->capacityCommitmentInput->failureStatus->code = 715190;
    $request->capacityCommitmentInput->failureStatus->details = [
        [
            'nulla' => 'corrupti',
            'illum' => 'vel',
            'error' => 'deserunt',
        ],
        [
            'iure' => 'magnam',
            'debitis' => 'ipsa',
        ],
        [
            'tempora' => 'suscipit',
            'molestiae' => 'minus',
            'placeat' => 'voluptatum',
            'iusto' => 'excepturi',
        ],
        [
            'recusandae' => 'temporibus',
            'ab' => 'quis',
        ],
    ];
    $request->capacityCommitmentInput->failureStatus->message = 'veritatis';
    $request->capacityCommitmentInput->multiRegionAuxiliary = false;
    $request->capacityCommitmentInput->plan = CapacityCommitmentPlanEnum::ANNUAL;
    $request->capacityCommitmentInput->renewalPlan = CapacityCommitmentRenewalPlanEnum::COMMITMENT_PLAN_UNSPECIFIED;
    $request->capacityCommitmentInput->slotCount = 'ipsam';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->capacityCommitmentId = 'odit';
    $request->enforceSingleAdminProjectPerOrg = false;
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [bigqueryreservationProjectsLocationsCapacityCommitmentsCreate](docs/projects/README.md#bigqueryreservationprojectslocationscapacitycommitmentscreate) - Creates a new capacity commitment resource.
* [bigqueryreservationProjectsLocationsCapacityCommitmentsList](docs/projects/README.md#bigqueryreservationprojectslocationscapacitycommitmentslist) - Lists all the capacity commitments for the admin project.
* [bigqueryreservationProjectsLocationsCapacityCommitmentsMerge](docs/projects/README.md#bigqueryreservationprojectslocationscapacitycommitmentsmerge) - Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
* [bigqueryreservationProjectsLocationsCapacityCommitmentsSplit](docs/projects/README.md#bigqueryreservationprojectslocationscapacitycommitmentssplit) - Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsCreate](docs/projects/README.md#bigqueryreservationprojectslocationsreservationsassignmentscreate) - Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsDelete](docs/projects/README.md#bigqueryreservationprojectslocationsreservationsassignmentsdelete) - Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsList](docs/projects/README.md#bigqueryreservationprojectslocationsreservationsassignmentslist) - Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsMove](docs/projects/README.md#bigqueryreservationprojectslocationsreservationsassignmentsmove) - Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
* [bigqueryreservationProjectsLocationsReservationsAssignmentsPatch](docs/projects/README.md#bigqueryreservationprojectslocationsreservationsassignmentspatch) - Updates an existing assignment. Only the `priority` field can be updated.
* [bigqueryreservationProjectsLocationsReservationsCreate](docs/projects/README.md#bigqueryreservationprojectslocationsreservationscreate) - Creates a new reservation resource.
* [bigqueryreservationProjectsLocationsReservationsGet](docs/projects/README.md#bigqueryreservationprojectslocationsreservationsget) - Returns information about the reservation.
* [bigqueryreservationProjectsLocationsReservationsList](docs/projects/README.md#bigqueryreservationprojectslocationsreservationslist) - Lists all the reservations for the project in the specified location.
* [bigqueryreservationProjectsLocationsSearchAllAssignments](docs/projects/README.md#bigqueryreservationprojectslocationssearchallassignments) - Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`.
* [bigqueryreservationProjectsLocationsSearchAssignments](docs/projects/README.md#bigqueryreservationprojectslocationssearchassignments) - Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
