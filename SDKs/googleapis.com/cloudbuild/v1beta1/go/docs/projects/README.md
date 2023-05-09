# Projects

### Available Operations

* [CloudbuildProjectsLocationsOperationsCancel](#cloudbuildprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [CloudbuildProjectsLocationsWorkerPoolsCreate](#cloudbuildprojectslocationsworkerpoolscreate) - Creates a `WorkerPool` to run the builds, and returns the new worker pool. NOTE: As of now, this method returns an `Operation` that is always complete.
* [CloudbuildProjectsLocationsWorkerPoolsDelete](#cloudbuildprojectslocationsworkerpoolsdelete) - Deletes a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.
* [CloudbuildProjectsLocationsWorkerPoolsGet](#cloudbuildprojectslocationsworkerpoolsget) - Returns details of a `WorkerPool`.
* [CloudbuildProjectsLocationsWorkerPoolsList](#cloudbuildprojectslocationsworkerpoolslist) - Lists `WorkerPool`s in the given project.
* [CloudbuildProjectsLocationsWorkerPoolsPatch](#cloudbuildprojectslocationsworkerpoolspatch) - Updates a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.

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

## CloudbuildProjectsLocationsWorkerPoolsCreate

Creates a `WorkerPool` to run the builds, and returns the new worker pool. NOTE: As of now, this method returns an `Operation` that is always complete.

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
    res, err := s.Projects.CloudbuildProjectsLocationsWorkerPoolsCreate(ctx, operations.CloudbuildProjectsLocationsWorkerPoolsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkerPoolInput: &shared.WorkerPoolInput{
            Annotations: map[string]string{
                "esse": "totam",
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
            },
            DisplayName: sdk.String("fugit"),
            NetworkConfig: &shared.NetworkConfig{
                PeeredNetwork: sdk.String("deleniti"),
            },
            WorkerConfig: &shared.WorkerConfig{
                DiskSizeGb: sdk.String("hic"),
                MachineType: sdk.String("optio"),
                NoExternalIP: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        Parent: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
        WorkerPoolID: sdk.String("excepturi"),
    }, operations.CloudbuildProjectsLocationsWorkerPoolsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudbuildProjectsLocationsWorkerPoolsDelete

Deletes a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.

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
    res, err := s.Projects.CloudbuildProjectsLocationsWorkerPoolsDelete(ctx, operations.CloudbuildProjectsLocationsWorkerPoolsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Etag: sdk.String("sed"),
        Fields: sdk.String("iste"),
        Key: sdk.String("dolor"),
        Name: "Lester Welch",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("iure"),
    }, operations.CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudbuildProjectsLocationsWorkerPoolsGet

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
    res, err := s.Projects.CloudbuildProjectsLocationsWorkerPoolsGet(ctx, operations.CloudbuildProjectsLocationsWorkerPoolsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("est"),
        Name: "Cameron Dach",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.CloudbuildProjectsLocationsWorkerPoolsGetSecurity{
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

## CloudbuildProjectsLocationsWorkerPoolsList

Lists `WorkerPool`s in the given project.

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
    res, err := s.Projects.CloudbuildProjectsLocationsWorkerPoolsList(ctx, operations.CloudbuildProjectsLocationsWorkerPoolsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloribus"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.CloudbuildProjectsLocationsWorkerPoolsListSecurity{
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

## CloudbuildProjectsLocationsWorkerPoolsPatch

Updates a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.

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
    res, err := s.Projects.CloudbuildProjectsLocationsWorkerPoolsPatch(ctx, operations.CloudbuildProjectsLocationsWorkerPoolsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkerPoolInput: &shared.WorkerPoolInput{
            Annotations: map[string]string{
                "repellat": "mollitia",
            },
            DisplayName: sdk.String("occaecati"),
            NetworkConfig: &shared.NetworkConfig{
                PeeredNetwork: sdk.String("numquam"),
            },
            WorkerConfig: &shared.WorkerConfig{
                DiskSizeGb: sdk.String("commodi"),
                MachineType: sdk.String("quam"),
                NoExternalIP: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        Name: "Kayla O'Kon",
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UpdateMask: sdk.String("tenetur"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("id"),
    }, operations.CloudbuildProjectsLocationsWorkerPoolsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
