# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/bigqueryreservation/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest(
    dollar_xgafv="2",
    capacity_commitment_input=shared.CapacityCommitmentInput(
        failure_status=shared.Status(
            code=592845,
            details=[
                {
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                {
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                {
                    "suscipit": "molestiae",
                    "minus": "placeat",
                },
            ],
            message="voluptatum",
        ),
        multi_region_auxiliary=False,
        plan="TRIAL",
        renewal_plan="TRIAL",
        slot_count="nisi",
    ),
    access_token="recusandae",
    alt="proto",
    callback="ab",
    capacity_commitment_id="quis",
    enforce_single_admin_project_per_org=False,
    fields_="veritatis",
    key="deserunt",
    oauth_token="perferendis",
    parent="ipsam",
    pretty_print=False,
    quota_user="repellendus",
    upload_type="sapiente",
    upload_protocol="quo",
)
    
res = s.projects.bigqueryreservation_projects_locations_capacity_commitments_create(req, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity(
    option1=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.capacity_commitment is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `bigqueryreservation_projects_locations_capacity_commitments_create` - Creates a new capacity commitment resource.
* `bigqueryreservation_projects_locations_capacity_commitments_list` - Lists all the capacity commitments for the admin project.
* `bigqueryreservation_projects_locations_capacity_commitments_merge` - Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
* `bigqueryreservation_projects_locations_capacity_commitments_split` - Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
* `bigqueryreservation_projects_locations_reservations_assignments_create` - Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
* `bigqueryreservation_projects_locations_reservations_assignments_delete` - Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
* `bigqueryreservation_projects_locations_reservations_assignments_list` - Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
* `bigqueryreservation_projects_locations_reservations_assignments_move` - Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
* `bigqueryreservation_projects_locations_reservations_assignments_patch` - Updates an existing assignment. Only the `priority` field can be updated.
* `bigqueryreservation_projects_locations_reservations_create` - Creates a new reservation resource.
* `bigqueryreservation_projects_locations_reservations_get` - Returns information about the reservation.
* `bigqueryreservation_projects_locations_reservations_list` - Lists all the reservations for the project in the specified location.
* `bigqueryreservation_projects_locations_search_assignments` - Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
