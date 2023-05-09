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
* [bigqueryreservationProjectsLocationsSearchAllAssignments](#bigqueryreservationprojectslocationssearchallassignments) - Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`.
* [bigqueryreservationProjectsLocationsSearchAssignments](#bigqueryreservationprojectslocationssearchassignments) - Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

## bigqueryreservationProjectsLocationsCapacityCommitmentsCreate

Creates a new capacity commitment resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CapacityCommitmentEditionEnum;
import org.openapis.openapi.models.shared.CapacityCommitmentInput;
import org.openapis.openapi.models.shared.CapacityCommitmentPlanEnum;
import org.openapis.openapi.models.shared.CapacityCommitmentRenewalPlanEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest req = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                capacityCommitmentInput = new CapacityCommitmentInput() {{
                    edition = CapacityCommitmentEditionEnum.ENTERPRISE_PLUS;
                    failureStatus = new Status() {{
                        code = 678880;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("officia", "occaecati");
                                put("fugit", "deleniti");
                                put("hic", "optio");
                            }}),
                        }};
                        message = "totam";
                    }};;
                    multiRegionAuxiliary = false;
                    plan = CapacityCommitmentPlanEnum.FLEX;
                    renewalPlan = CapacityCommitmentRenewalPlanEnum.MONTHLY;
                    slotCount = "molestiae";
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                capacityCommitmentId = "cum";
                enforceSingleAdminProjectPerOrg = false;
                fields = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }};            

            BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse res = sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsCreate(req, new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1("natus", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.capacityCommitment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsCapacityCommitmentsList

Lists all the capacity commitments for the admin project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest req = new BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                pageSize = 359508L;
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "saepe";
                uploadProtocol = "quidem";
            }};            

            BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse res = sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsList(req, new BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1("architecto", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCapacityCommitmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsCapacityCommitmentsMerge

Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MergeCapacityCommitmentsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest req = new BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                mergeCapacityCommitmentsRequest = new MergeCapacityCommitmentsRequest() {{
                    capacityCommitmentIds = new String[]{{
                        add("laborum"),
                        add("dolores"),
                        add("dolorem"),
                    }};
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse res = sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsMerge(req, new BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1("iure", "culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.capacityCommitment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsCapacityCommitmentsSplit

Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SplitCapacityCommitmentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest req = new BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                splitCapacityCommitmentRequest = new SplitCapacityCommitmentRequest() {{
                    slotCount = "architecto";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse res = sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsSplit(req, new BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1("quam", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.splitCapacityCommitmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsCreate

Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignmentInput;
import org.openapis.openapi.models.shared.AssignmentJobTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest req = new BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                assignmentInput = new AssignmentInput() {{
                    assignee = "quia";
                    jobType = AssignmentJobTypeEnum.PIPELINE;
                }};;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                assignmentId = "animi";
                callback = "enim";
                fields = "odit";
                key = "quo";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "ipsam";
                uploadProtocol = "id";
            }};            

            BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse res = sdk.projects.bigqueryreservationProjectsLocationsReservationsAssignmentsCreate(req, new BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1("possimus", "aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.assignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsDelete

Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest req = new BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                force = false;
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse res = sdk.projects.bigqueryreservationProjectsLocationsReservationsAssignmentsDelete(req, new BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1("ipsa", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsList

Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest req = new BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "reprehenderit";
                fields = "ut";
                key = "maiores";
                oauthToken = "dicta";
                pageSize = 359444L;
                pageToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "dicta";
                uploadProtocol = "harum";
            }};            

            BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse res = sdk.projects.bigqueryreservationProjectsLocationsReservationsAssignmentsList(req, new BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1("enim", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAssignmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsMove

Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MoveAssignmentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest req = new BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest("commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                moveAssignmentRequest = new MoveAssignmentRequest() {{
                    assignmentId = "quae";
                    destinationId = "ipsum";
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "voluptates";
                uploadProtocol = "quasi";
            }};            

            BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse res = sdk.projects.bigqueryreservationProjectsLocationsReservationsAssignmentsMove(req, new BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1("repudiandae", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.assignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsReservationsAssignmentsPatch

Updates an existing assignment. Only the `priority` field can be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignmentInput;
import org.openapis.openapi.models.shared.AssignmentJobTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest req = new BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                assignmentInput = new AssignmentInput() {{
                    assignee = "incidunt";
                    jobType = AssignmentJobTypeEnum.PIPELINE;
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "explicabo";
                key = "deserunt";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quibusdam";
                updateMask = "labore";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse res = sdk.projects.bigqueryreservationProjectsLocationsReservationsAssignmentsPatch(req, new BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1("aliquid", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.assignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsReservationsCreate

Creates a new reservation resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsCreateRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsCreateResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsCreateSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscaleInput;
import org.openapis.openapi.models.shared.ReservationEditionEnum;
import org.openapis.openapi.models.shared.ReservationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsReservationsCreateRequest req = new BigqueryreservationProjectsLocationsReservationsCreateRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                reservationInput = new ReservationInput() {{
                    autoscale = new AutoscaleInput() {{
                        maxSlots = "magni";
                    }};;
                    concurrency = "assumenda";
                    edition = ReservationEditionEnum.STANDARD;
                    ignoreIdleSlots = false;
                    multiRegionAuxiliary = false;
                    name = "Denise Pagac";
                    slotCapacity = "facilis";
                }};;
                accessToken = "tempore";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "eum";
                key = "non";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                reservationId = "aliquid";
                uploadType = "provident";
                uploadProtocol = "necessitatibus";
            }};            

            BigqueryreservationProjectsLocationsReservationsCreateResponse res = sdk.projects.bigqueryreservationProjectsLocationsReservationsCreate(req, new BigqueryreservationProjectsLocationsReservationsCreateSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1("sint", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reservation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsReservationsGet

Returns information about the reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsGetRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsGetResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsGetSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsGetSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsReservationsGetRequest req = new BigqueryreservationProjectsLocationsReservationsGetRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "in";
                key = "illum";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "dicta";
                uploadProtocol = "magnam";
            }};            

            BigqueryreservationProjectsLocationsReservationsGetResponse res = sdk.projects.bigqueryreservationProjectsLocationsReservationsGet(req, new BigqueryreservationProjectsLocationsReservationsGetSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsReservationsGetSecurityOption1("cumque", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reservation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsReservationsList

Lists all the reservations for the project in the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsListRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsListResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsListSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsReservationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsReservationsListRequest req = new BigqueryreservationProjectsLocationsReservationsListRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "occaecati";
                key = "enim";
                oauthToken = "accusamus";
                pageSize = 965417L;
                pageToken = "quidem";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            BigqueryreservationProjectsLocationsReservationsListResponse res = sdk.projects.bigqueryreservationProjectsLocationsReservationsList(req, new BigqueryreservationProjectsLocationsReservationsListSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsReservationsListSecurityOption1("blanditiis", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listReservationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsSearchAllAssignments

Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest req = new BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                pageSize = 19193L;
                pageToken = "nihil";
                prettyPrint = false;
                query = "magnam";
                quotaUser = "distinctio";
                uploadType = "id";
                uploadProtocol = "labore";
            }};            

            BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse res = sdk.projects.bigqueryreservationProjectsLocationsSearchAllAssignments(req, new BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1("labore", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchAllAssignmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryreservationProjectsLocationsSearchAssignments

Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAssignmentsRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAssignmentsResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAssignmentsSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsSearchAssignmentsRequest req = new BigqueryreservationProjectsLocationsSearchAssignmentsRequest("natus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                pageSize = 569965L;
                pageToken = "ullam";
                prettyPrint = false;
                query = "provident";
                quotaUser = "quos";
                uploadType = "sint";
                uploadProtocol = "accusantium";
            }};            

            BigqueryreservationProjectsLocationsSearchAssignmentsResponse res = sdk.projects.bigqueryreservationProjectsLocationsSearchAssignments(req, new BigqueryreservationProjectsLocationsSearchAssignmentsSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1("mollitia", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchAssignmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
