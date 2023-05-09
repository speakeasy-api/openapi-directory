# Projects

### Available Operations

* [CloudbuildProjectsLocationsOperationsCancel](#cloudbuildprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [CloudbuildProjectsWorkerPoolsCreate](#cloudbuildprojectsworkerpoolscreate) - Creates a `WorkerPool` to run the builds, and returns the new worker pool.
* [CloudbuildProjectsWorkerPoolsDelete](#cloudbuildprojectsworkerpoolsdelete) - Deletes a `WorkerPool` by its project ID and WorkerPool name.
* [CloudbuildProjectsWorkerPoolsGet](#cloudbuildprojectsworkerpoolsget) - Returns information about a `WorkerPool`.
* [CloudbuildProjectsWorkerPoolsList](#cloudbuildprojectsworkerpoolslist) - List project's `WorkerPool`s.
* [CloudbuildProjectsWorkerPoolsPatch](#cloudbuildprojectsworkerpoolspatch) - Update a `WorkerPool`.

## CloudbuildProjectsLocationsOperationsCancel

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
    res, err := s.Projects.CloudbuildProjectsLocationsOperationsCancel(ctx, operations.CloudbuildProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        Name: "Estelle Will",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.CloudbuildProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## CloudbuildProjectsWorkerPoolsCreate

Creates a `WorkerPool` to run the builds, and returns the new worker pool.

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
    res, err := s.Projects.CloudbuildProjectsWorkerPoolsCreate(ctx, operations.CloudbuildProjectsWorkerPoolsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkerPool: &shared.WorkerPool{
            CreateTime: sdk.String("quod"),
            DeleteTime: sdk.String("esse"),
            Name: sdk.String("Miss Lowell Parisian"),
            ProjectID: sdk.String("occaecati"),
            Regions: []shared.WorkerPoolRegionsEnum{
                shared.WorkerPoolRegionsEnumUsWest1,
            },
            ServiceAccountEmail: sdk.String("hic"),
            Status: shared.WorkerPoolStatusEnumDeleting.ToPointer(),
            UpdateTime: sdk.String("totam"),
            WorkerConfig: &shared.WorkerConfig{
                DiskSizeGb: sdk.String("beatae"),
                MachineType: sdk.String("commodi"),
                Network: &shared.Network{
                    Network: sdk.String("molestiae"),
                    ProjectID: sdk.String("modi"),
                    Subnetwork: sdk.String("qui"),
                },
                Tag: sdk.String("impedit"),
            },
            WorkerCount: sdk.String("cum"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.CloudbuildProjectsWorkerPoolsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkerPool != nil {
        // handle response
    }
}
```

## CloudbuildProjectsWorkerPoolsDelete

Deletes a `WorkerPool` by its project ID and WorkerPool name.

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
    res, err := s.Projects.CloudbuildProjectsWorkerPoolsDelete(ctx, operations.CloudbuildProjectsWorkerPoolsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("in"),
        Name: "Sheryl Kertzmann",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("est"),
    }, operations.CloudbuildProjectsWorkerPoolsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## CloudbuildProjectsWorkerPoolsGet

Returns information about a `WorkerPool`.

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
    res, err := s.Projects.CloudbuildProjectsWorkerPoolsGet(ctx, operations.CloudbuildProjectsWorkerPoolsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        Name: "Ronnie Mohr",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.CloudbuildProjectsWorkerPoolsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkerPool != nil {
        // handle response
    }
}
```

## CloudbuildProjectsWorkerPoolsList

List project's `WorkerPool`s.

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
    res, err := s.Projects.CloudbuildProjectsWorkerPoolsList(ctx, operations.CloudbuildProjectsWorkerPoolsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "repellat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.CloudbuildProjectsWorkerPoolsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkerPoolsResponse != nil {
        // handle response
    }
}
```

## CloudbuildProjectsWorkerPoolsPatch

Update a `WorkerPool`.

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
    res, err := s.Projects.CloudbuildProjectsWorkerPoolsPatch(ctx, operations.CloudbuildProjectsWorkerPoolsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WorkerPool: &shared.WorkerPool{
            CreateTime: sdk.String("quam"),
            DeleteTime: sdk.String("molestiae"),
            Name: sdk.String("Sabrina Cronin MD"),
            ProjectID: sdk.String("animi"),
            Regions: []shared.WorkerPoolRegionsEnum{
                shared.WorkerPoolRegionsEnumRegionUnspecified,
                shared.WorkerPoolRegionsEnumUsEast1,
            },
            ServiceAccountEmail: sdk.String("sequi"),
            Status: shared.WorkerPoolStatusEnumDeleted.ToPointer(),
            UpdateTime: sdk.String("ipsam"),
            WorkerConfig: &shared.WorkerConfig{
                DiskSizeGb: sdk.String("id"),
                MachineType: sdk.String("possimus"),
                Network: &shared.Network{
                    Network: sdk.String("aut"),
                    ProjectID: sdk.String("quasi"),
                    Subnetwork: sdk.String("error"),
                },
                Tag: sdk.String("temporibus"),
            },
            WorkerCount: sdk.String("laborum"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("vero"),
        Key: sdk.String("nihil"),
        Name: "Jan Bednar",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.CloudbuildProjectsWorkerPoolsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkerPool != nil {
        // handle response
    }
}
```
