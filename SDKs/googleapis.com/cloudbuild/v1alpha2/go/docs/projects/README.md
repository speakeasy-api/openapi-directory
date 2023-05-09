# Projects

### Available Operations

* [CloudbuildProjectsLocationsOperationsCancel](#cloudbuildprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [CloudbuildProjectsWorkerPoolsCreate](#cloudbuildprojectsworkerpoolscreate) - Creates a `WorkerPool` to run the builds, and returns the new worker pool.
* [CloudbuildProjectsWorkerPoolsDelete](#cloudbuildprojectsworkerpoolsdelete) - Deletes a `WorkerPool`.
* [CloudbuildProjectsWorkerPoolsGet](#cloudbuildprojectsworkerpoolsget) - Returns details of a `WorkerPool`.
* [CloudbuildProjectsWorkerPoolsList](#cloudbuildprojectsworkerpoolslist) - Lists `WorkerPool`s by project.
* [CloudbuildProjectsWorkerPoolsPatch](#cloudbuildprojectsworkerpoolspatch) - Updates a `WorkerPool`.

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
        WorkerPoolInput: &shared.WorkerPoolInput{
            NetworkConfig: &shared.NetworkConfig{
                PeeredNetwork: sdk.String("quod"),
            },
            Region: sdk.String("esse"),
            WorkerConfig: &shared.WorkerConfig{
                DiskSizeGb: sdk.String("totam"),
                MachineType: sdk.String("porro"),
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("officia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("fugit"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
        WorkerPoolID: sdk.String("beatae"),
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

Deletes a `WorkerPool`.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("cum"),
        Name: "Edna Mante II",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
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

Returns details of a `WorkerPool`.

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

Lists `WorkerPool`s by project.

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
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("nobis"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
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

Updates a `WorkerPool`.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkerPoolInput: &shared.WorkerPoolInput{
            NetworkConfig: &shared.NetworkConfig{
                PeeredNetwork: sdk.String("accusantium"),
            },
            Region: sdk.String("iure"),
            WorkerConfig: &shared.WorkerConfig{
                DiskSizeGb: sdk.String("culpa"),
                MachineType: sdk.String("doloribus"),
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        Name: "Jaime O'Hara",
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UpdateMask: sdk.String("molestiae"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("error"),
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
