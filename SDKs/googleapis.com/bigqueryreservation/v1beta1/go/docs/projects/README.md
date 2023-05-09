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
* [BigqueryreservationProjectsLocationsSearchAssignments](#bigqueryreservationprojectslocationssearchassignments) - Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CapacityCommitmentInput: &shared.CapacityCommitmentInput{
            FailureStatus: &shared.Status{
                Code: sdk.Int(870013),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "molestiae": "quod",
                        "quod": "esse",
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                    map[string]interface{}{
                        "officia": "occaecati",
                        "fugit": "deleniti",
                        "hic": "optio",
                    },
                    map[string]interface{}{
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                    map[string]interface{}{
                        "esse": "ipsum",
                        "excepturi": "aspernatur",
                        "perferendis": "ad",
                    },
                },
                Message: sdk.String("natus"),
            },
            MultiRegionAuxiliary: sdk.Bool(false),
            Plan: shared.CapacityCommitmentPlanEnumCommitmentPlanUnspecified.ToPointer(),
            RenewalPlan: shared.CapacityCommitmentRenewalPlanEnumMonthly.ToPointer(),
            SlotCount: sdk.String("dolor"),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        CapacityCommitmentID: sdk.String("saepe"),
        EnforceSingleAdminProjectPerOrg: sdk.Bool(false),
        Fields: sdk.String("fuga"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("corporis"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("quidem"),
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
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("dolores"),
        PageSize: sdk.Int64(210382),
        PageToken: sdk.String("corporis"),
        Parent: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("omnis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MergeCapacityCommitmentsRequest: &shared.MergeCapacityCommitmentsRequest{
            CapacityCommitmentIds: []string{
                "excepturi",
                "accusantium",
            },
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("mollitia"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
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
            SlotCount: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("velit"),
        Name: "Miss Eugene Hauck",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("sequi"),
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
            Assignee: sdk.String("ipsam"),
            JobType: shared.AssignmentJobTypeEnumQuery.ToPointer(),
        },
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AssignmentID: sdk.String("quasi"),
        Callback: sdk.String("error"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nihil"),
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
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("voluptate"),
        Force: sdk.Bool(false),
        Key: sdk.String("cum"),
        Name: "Sharon Kiehn",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("iusto"),
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
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("quae"),
        PageSize: sdk.Int64(216822),
        PageToken: sdk.String("quidem"),
        Parent: "molestias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("modi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MoveAssignmentRequest: &shared.MoveAssignmentRequest{
            DestinationID: sdk.String("rem"),
        },
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("sint"),
        Key: sdk.String("veritatis"),
        Name: "Miss Randall Hamill",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AssignmentInput: &shared.AssignmentInput{
            Assignee: sdk.String("modi"),
            JobType: shared.AssignmentJobTypeEnumJobTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("magni"),
        Name: "Vernon Abshire",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UpdateMask: sdk.String("facilis"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("labore"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReservationInput: &shared.ReservationInput{
            Concurrency: sdk.String("eum"),
            IgnoreIdleSlots: sdk.Bool(false),
            MultiRegionAuxiliary: sdk.Bool(false),
            Name: sdk.String("Sheri Mayer"),
            SlotCapacity: sdk.String("necessitatibus"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("dolorum"),
        Parent: "in",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        ReservationID: sdk.String("illum"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("rerum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("ea"),
        Key: sdk.String("aliquid"),
        Name: "Tomas Friesen",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("provident"),
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
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("sapiente"),
        Filter: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("nisi"),
        PageSize: sdk.Int64(423855),
        PageToken: sdk.String("natus"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("nihil"),
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

## BigqueryreservationProjectsLocationsSearchAssignments

Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

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
