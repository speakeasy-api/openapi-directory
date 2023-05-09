# Projects

### Available Operations

* [BigqueryreservationProjectsLocationsCapacityCommitmentsCreate](#bigqueryreservationprojectslocationscapacitycommitmentscreate) - Creates a new capacity commitment resource.
* [BigqueryreservationProjectsLocationsCapacityCommitmentsList](#bigqueryreservationprojectslocationscapacitycommitmentslist) - Lists all the capacity commitments for the admin project.
* [BigqueryreservationProjectsLocationsCapacityCommitmentsMerge](#bigqueryreservationprojectslocationscapacitycommitmentsmerge) - Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
* [BigqueryreservationProjectsLocationsCapacityCommitmentsSplit](#bigqueryreservationprojectslocationscapacitycommitmentssplit) - Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
* [BigqueryreservationProjectsLocationsReservationsAssignmentsCreate](#bigqueryreservationprojectslocationsreservationsassignmentscreate) - Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
* [BigqueryreservationProjectsLocationsReservationsAssignmentsDelete](#bigqueryreservationprojectslocationsreservationsassignmentsdelete) - Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
* [BigqueryreservationProjectsLocationsReservationsAssignmentsList](#bigqueryreservationprojectslocationsreservationsassignmentslist) - Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
* [BigqueryreservationProjectsLocationsReservationsAssignmentsMove](#bigqueryreservationprojectslocationsreservationsassignmentsmove) - Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
* [BigqueryreservationProjectsLocationsReservationsAssignmentsPatch](#bigqueryreservationprojectslocationsreservationsassignmentspatch) - Updates an existing assignment. Only the `priority` field can be updated.
* [BigqueryreservationProjectsLocationsReservationsCreate](#bigqueryreservationprojectslocationsreservationscreate) - Creates a new reservation resource.
* [BigqueryreservationProjectsLocationsReservationsGet](#bigqueryreservationprojectslocationsreservationsget) - Returns information about the reservation.
* [BigqueryreservationProjectsLocationsReservationsList](#bigqueryreservationprojectslocationsreservationslist) - Lists all the reservations for the project in the specified location.
* [BigqueryreservationProjectsLocationsSearchAllAssignments](#bigqueryreservationprojectslocationssearchallassignments) - Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`.
* [BigqueryreservationProjectsLocationsSearchAssignments](#bigqueryreservationprojectslocationssearchassignments) - Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

## BigqueryreservationProjectsLocationsCapacityCommitmentsCreate

Creates a new capacity commitment resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsCapacityCommitmentsCreate(ctx, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CapacityCommitmentInput: &shared.CapacityCommitmentInput{
            Edition: shared.CapacityCommitmentEditionEnumEnterprisePlus.ToPointer(),
            FailureStatus: &shared.Status{
                Code: sdk.Int(678880),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "officia": "occaecati",
                        "fugit": "deleniti",
                        "hic": "optio",
                    },
                },
                Message: sdk.String("totam"),
            },
            MultiRegionAuxiliary: sdk.Bool(false),
            Plan: shared.CapacityCommitmentPlanEnumFlex.ToPointer(),
            RenewalPlan: shared.CapacityCommitmentRenewalPlanEnumMonthly.ToPointer(),
            SlotCount: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        CapacityCommitmentID: sdk.String("cum"),
        EnforceSingleAdminProjectPerOrg: sdk.Bool(false),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
    }, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CapacityCommitment != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsCapacityCommitmentsList

Lists all the capacity commitments for the admin project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsCapacityCommitmentsList(ctx, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(681820),
        PageToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCapacityCommitmentsResponse != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsCapacityCommitmentsMerge

Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsCapacityCommitmentsMerge(ctx, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MergeCapacityCommitmentsRequest: &shared.MergeCapacityCommitmentsRequest{
            CapacityCommitmentIds: []string{
                "ipsa",
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("dolorem"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("enim"),
    }, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CapacityCommitment != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsCapacityCommitmentsSplit

Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsCapacityCommitmentsSplit(ctx, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SplitCapacityCommitmentRequest: &shared.SplitCapacityCommitmentRequest{
            SlotCount: sdk.String("nemo"),
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        Name: "Darrin Brakus",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SplitCapacityCommitmentResponse != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsReservationsAssignmentsCreate

Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsReservationsAssignmentsCreate(ctx, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AssignmentInput: &shared.AssignmentInput{
            Assignee: sdk.String("numquam"),
            JobType: shared.AssignmentJobTypeEnumQuery.ToPointer(),
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignmentID: sdk.String("velit"),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("vitae"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("odit"),
    }, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignment != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsReservationsAssignmentsDelete

Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsReservationsAssignmentsDelete(ctx, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("id"),
        Force: sdk.Bool(false),
        Key: sdk.String("possimus"),
        Name: "Joyce Mueller",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vero"),
    }, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsReservationsAssignmentsList

Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsReservationsAssignmentsList(ctx, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("cum"),
        PageSize: sdk.Int64(19987),
        PageToken: sdk.String("doloremque"),
        Parent: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssignmentsResponse != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsReservationsAssignmentsMove

Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsReservationsAssignmentsMove(ctx, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MoveAssignmentRequest: &shared.MoveAssignmentRequest{
            AssignmentID: sdk.String("dolore"),
            DestinationID: sdk.String("iusto"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        Name: "Eric Emmerich",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignment != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsReservationsAssignmentsPatch

Updates an existing assignment. Only the `priority` field can be updated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsReservationsAssignmentsPatch(ctx, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AssignmentInput: &shared.AssignmentInput{
            Assignee: sdk.String("voluptates"),
            JobType: shared.AssignmentJobTypeEnumJobTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("incidunt"),
        Name: "Elizabeth Orn",
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UpdateMask: sdk.String("quibusdam"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("modi"),
    }, operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignment != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsReservationsCreate

Creates a new reservation resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsReservationsCreate(ctx, operations.BigqueryreservationProjectsLocationsReservationsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReservationInput: &shared.ReservationInput{
            Autoscale: &shared.AutoscaleInput{
                MaxSlots: sdk.String("aliquid"),
            },
            Concurrency: sdk.String("cupiditate"),
            Edition: shared.ReservationEditionEnumEnterprise.ToPointer(),
            IgnoreIdleSlots: sdk.Bool(false),
            MultiRegionAuxiliary: sdk.Bool(false),
            Name: sdk.String("Louise Simonis Sr."),
            SlotCapacity: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("delectus"),
        Parent: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        ReservationID: sdk.String("eligendi"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.BigqueryreservationProjectsLocationsReservationsCreateSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reservation != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsReservationsGet

Returns information about the reservation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsReservationsGet(ctx, operations.BigqueryreservationProjectsLocationsReservationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("debitis"),
        Name: "Wilbur King",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.BigqueryreservationProjectsLocationsReservationsGetSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsReservationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reservation != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsReservationsList

Lists all the reservations for the project in the specified location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsReservationsList(ctx, operations.BigqueryreservationProjectsLocationsReservationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("non"),
        PageSize: sdk.Int64(581273),
        PageToken: sdk.String("enim"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("provident"),
    }, operations.BigqueryreservationProjectsLocationsReservationsListSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsReservationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReservationsResponse != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsSearchAllAssignments

Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsSearchAllAssignments(ctx, operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(394869),
        PageToken: sdk.String("vel"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("omnis"),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAllAssignmentsResponse != nil {
        // handle response
    }
}
```

## BigqueryreservationProjectsLocationsSearchAssignments

Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsSearchAssignments(ctx, operations.BigqueryreservationProjectsLocationsSearchAssignmentsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(749170),
        PageToken: sdk.String("eum"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("aspernatur"),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("et"),
    }, operations.BigqueryreservationProjectsLocationsSearchAssignmentsSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAssignmentsResponse != nil {
        // handle response
    }
}
```
