# Projects

### Available Operations

* [FirebaseappdistributionProjectsAppsReleasesBatchDelete](#firebaseappdistributionprojectsappsreleasesbatchdelete) - Deletes releases. A maximum of 100 releases can be deleted per request.
* [FirebaseappdistributionProjectsAppsReleasesDistribute](#firebaseappdistributionprojectsappsreleasesdistribute) - Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
* [FirebaseappdistributionProjectsAppsReleasesFeedbackReportsList](#firebaseappdistributionprojectsappsreleasesfeedbackreportslist) - Lists feedback reports. By default, sorts by `createTime` in descending order.
* [FirebaseappdistributionProjectsAppsReleasesList](#firebaseappdistributionprojectsappsreleaseslist) - Lists releases. By default, sorts by `createTime` in descending order.
* [FirebaseappdistributionProjectsAppsReleasesOperationsCancel](#firebaseappdistributionprojectsappsreleasesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [FirebaseappdistributionProjectsAppsReleasesOperationsList](#firebaseappdistributionprojectsappsreleasesoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [FirebaseappdistributionProjectsAppsReleasesOperationsWait](#firebaseappdistributionprojectsappsreleasesoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [FirebaseappdistributionProjectsGroupsBatchJoin](#firebaseappdistributionprojectsgroupsbatchjoin) - Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
* [FirebaseappdistributionProjectsGroupsBatchLeave](#firebaseappdistributionprojectsgroupsbatchleave) - Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
* [FirebaseappdistributionProjectsGroupsCreate](#firebaseappdistributionprojectsgroupscreate) - Create a group.
* [FirebaseappdistributionProjectsGroupsDelete](#firebaseappdistributionprojectsgroupsdelete) - Delete a group.
* [FirebaseappdistributionProjectsGroupsGet](#firebaseappdistributionprojectsgroupsget) - Get a group.
* [FirebaseappdistributionProjectsGroupsList](#firebaseappdistributionprojectsgroupslist) - List groups.
* [FirebaseappdistributionProjectsTestersBatchAdd](#firebaseappdistributionprojectstestersbatchadd) - Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
* [FirebaseappdistributionProjectsTestersBatchRemove](#firebaseappdistributionprojectstestersbatchremove) - Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
* [FirebaseappdistributionProjectsTestersList](#firebaseappdistributionprojectstesterslist) - Lists testers and their resource ids.
* [FirebaseappdistributionProjectsTestersPatch](#firebaseappdistributionprojectstesterspatch) - Update a tester. If the testers joins a group they gain access to all releases that the group has access to.

## FirebaseappdistributionProjectsAppsReleasesBatchDelete

Deletes releases. A maximum of 100 releases can be deleted per request.

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
    res, err := s.Projects.FirebaseappdistributionProjectsAppsReleasesBatchDelete(ctx, operations.FirebaseappdistributionProjectsAppsReleasesBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest: &shared.GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest{
            Names: []string{
                "recusandae",
                "temporibus",
            },
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.FirebaseappdistributionProjectsAppsReleasesBatchDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsAppsReleasesDistribute

Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.

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
    res, err := s.Projects.FirebaseappdistributionProjectsAppsReleasesDistribute(ctx, operations.FirebaseappdistributionProjectsAppsReleasesDistributeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppdistroV1DistributeReleaseRequest: &shared.GoogleFirebaseAppdistroV1DistributeReleaseRequest{
            GroupAliases: []string{
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
            TesterEmails: []string{
                "totam",
                "porro",
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("officia"),
        Key: sdk.String("occaecati"),
        Name: "Cassandra Welch",
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("modi"),
    }, operations.FirebaseappdistributionProjectsAppsReleasesDistributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1DistributeReleaseResponse != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsAppsReleasesFeedbackReportsList

Lists feedback reports. By default, sorts by `createTime` in descending order.

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
    res, err := s.Projects.FirebaseappdistributionProjectsAppsReleasesFeedbackReportsList(ctx, operations.FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("aspernatur"),
        PageSize: sdk.Int64(18789),
        PageToken: sdk.String("ad"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1ListFeedbackReportsResponse != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsAppsReleasesList

Lists releases. By default, sorts by `createTime` in descending order.

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
    res, err := s.Projects.FirebaseappdistributionProjectsAppsReleasesList(ctx, operations.FirebaseappdistributionProjectsAppsReleasesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("fuga"),
        Filter: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("iste"),
        OrderBy: sdk.String("iure"),
        PageSize: sdk.Int64(902349),
        PageToken: sdk.String("quidem"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("est"),
    }, operations.FirebaseappdistributionProjectsAppsReleasesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1ListReleasesResponse != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsAppsReleasesOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.FirebaseappdistributionProjectsAppsReleasesOperationsCancel(ctx, operations.FirebaseappdistributionProjectsAppsReleasesOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "dolores": "dolorem",
            "corporis": "explicabo",
            "nobis": "enim",
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        Name: "Cecilia Yundt MD",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.FirebaseappdistributionProjectsAppsReleasesOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsAppsReleasesOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.FirebaseappdistributionProjectsAppsReleasesOperationsList(ctx, operations.FirebaseappdistributionProjectsAppsReleasesOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("quam"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("velit"),
        Name: "Miss Eugene Hauck",
        OauthToken: sdk.String("enim"),
        PageSize: sdk.Int64(138183),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.FirebaseappdistributionProjectsAppsReleasesOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsAppsReleasesOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

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
    res, err := s.Projects.FirebaseappdistributionProjectsAppsReleasesOperationsWait(ctx, operations.FirebaseappdistributionProjectsAppsReleasesOperationsWaitRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleLongrunningWaitOperationRequest: &shared.GoogleLongrunningWaitOperationRequest{
            Timeout: sdk.String("possimus"),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        Name: "Johanna Wolf",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.FirebaseappdistributionProjectsAppsReleasesOperationsWaitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsGroupsBatchJoin

Batch adds members to a group. The testers will gain access to all releases that the groups have access to.

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
    res, err := s.Projects.FirebaseappdistributionProjectsGroupsBatchJoin(ctx, operations.FirebaseappdistributionProjectsGroupsBatchJoinRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppdistroV1BatchJoinGroupRequest: &shared.GoogleFirebaseAppdistroV1BatchJoinGroupRequest{
            CreateMissingTesters: sdk.Bool(false),
            Emails: []string{
                "perferendis",
                "doloremque",
                "reprehenderit",
            },
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("corporis"),
        Group: "dolore",
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.FirebaseappdistributionProjectsGroupsBatchJoinSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsGroupsBatchLeave

Batch removed members from a group. The testers will lose access to all releases that the groups have access to.

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
    res, err := s.Projects.FirebaseappdistributionProjectsGroupsBatchLeave(ctx, operations.FirebaseappdistributionProjectsGroupsBatchLeaveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppdistroV1BatchLeaveGroupRequest: &shared.GoogleFirebaseAppdistroV1BatchLeaveGroupRequest{
            Emails: []string{
                "quae",
                "ipsum",
                "quidem",
                "molestias",
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("praesentium"),
        Group: "rem",
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.FirebaseappdistributionProjectsGroupsBatchLeaveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsGroupsCreate

Create a group.

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
    res, err := s.Projects.FirebaseappdistributionProjectsGroupsCreate(ctx, operations.FirebaseappdistributionProjectsGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppdistroV1GroupInput: &shared.GoogleFirebaseAppdistroV1GroupInput{
            DisplayName: sdk.String("incidunt"),
            Name: sdk.String("Elizabeth Orn"),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("labore"),
        GroupID: sdk.String("modi"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("aliquid"),
        Parent: "cupiditate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("magni"),
    }, operations.FirebaseappdistributionProjectsGroupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1Group != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsGroupsDelete

Delete a group.

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
    res, err := s.Projects.FirebaseappdistributionProjectsGroupsDelete(ctx, operations.FirebaseappdistributionProjectsGroupsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("excepturi"),
        Name: "Olivia Rice",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sint"),
    }, operations.FirebaseappdistributionProjectsGroupsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsGroupsGet

Get a group.

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
    res, err := s.Projects.FirebaseappdistributionProjectsGroupsGet(ctx, operations.FirebaseappdistributionProjectsGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dolor"),
        Name: "Randal Parisian",
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.FirebaseappdistributionProjectsGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1Group != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsGroupsList

List groups.

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
    res, err := s.Projects.FirebaseappdistributionProjectsGroupsList(ctx, operations.FirebaseappdistributionProjectsGroupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("accusamus"),
        PageSize: sdk.Int64(249796),
        PageToken: sdk.String("occaecati"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.FirebaseappdistributionProjectsGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1ListGroupsResponse != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsTestersBatchAdd

Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.

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
    res, err := s.Projects.FirebaseappdistributionProjectsTestersBatchAdd(ctx, operations.FirebaseappdistributionProjectsTestersBatchAddRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirebaseAppdistroV1BatchAddTestersRequest: &shared.GoogleFirebaseAppdistroV1BatchAddTestersRequest{
            Emails: []string{
                "id",
                "blanditiis",
                "deleniti",
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        Project: "omnis",
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.FirebaseappdistributionProjectsTestersBatchAddSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1BatchAddTestersResponse != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsTestersBatchRemove

Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.

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
    res, err := s.Projects.FirebaseappdistributionProjectsTestersBatchRemove(ctx, operations.FirebaseappdistributionProjectsTestersBatchRemoveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppdistroV1BatchRemoveTestersRequest: &shared.GoogleFirebaseAppdistroV1BatchRemoveTestersRequest{
            Emails: []string{
                "id",
                "labore",
                "labore",
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("eum"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        Project: "architecto",
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.FirebaseappdistributionProjectsTestersBatchRemoveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1BatchRemoveTestersResponse != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsTestersList

Lists testers and their resource ids.

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
    res, err := s.Projects.FirebaseappdistributionProjectsTestersList(ctx, operations.FirebaseappdistributionProjectsTestersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        Filter: sdk.String("mollitia"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("mollitia"),
        PageSize: sdk.Int64(320997),
        PageToken: sdk.String("eum"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.FirebaseappdistributionProjectsTestersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1ListTestersResponse != nil {
        // handle response
    }
}
```

## FirebaseappdistributionProjectsTestersPatch

Update a tester. If the testers joins a group they gain access to all releases that the group has access to.

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
    res, err := s.Projects.FirebaseappdistributionProjectsTestersPatch(ctx, operations.FirebaseappdistributionProjectsTestersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirebaseAppdistroV1TesterInput: &shared.GoogleFirebaseAppdistroV1TesterInput{
            DisplayName: sdk.String("iure"),
            Groups: []string{
                "debitis",
                "eius",
                "maxime",
                "deleniti",
            },
            Name: sdk.String("Dr. Arnold Bradtke"),
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("sed"),
        Name: "Al Bashirian",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UpdateMask: sdk.String("sunt"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
    }, operations.FirebaseappdistributionProjectsTestersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppdistroV1Tester != nil {
        // handle response
    }
}
```
