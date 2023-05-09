# Projects

### Available Operations

* [VideointelligenceProjectsLocationsOperationsCancel](#videointelligenceprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [VideointelligenceProjectsLocationsOperationsDelete](#videointelligenceprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [VideointelligenceProjectsLocationsOperationsGet](#videointelligenceprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [VideointelligenceProjectsLocationsOperationsList](#videointelligenceprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## VideointelligenceProjectsLocationsOperationsCancel

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
    res, err := s.Projects.VideointelligenceProjectsLocationsOperationsCancel(ctx, operations.VideointelligenceProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "impedit": "cum",
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        Name: "Faye Cormier",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.VideointelligenceProjectsLocationsOperationsCancelSecurity{
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

## VideointelligenceProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.VideointelligenceProjectsLocationsOperationsDelete(ctx, operations.VideointelligenceProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        Name: "Roger Beier",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.VideointelligenceProjectsLocationsOperationsDeleteSecurity{
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

## VideointelligenceProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.VideointelligenceProjectsLocationsOperationsGet(ctx, operations.VideointelligenceProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        Name: "Velma Batz",
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.VideointelligenceProjectsLocationsOperationsGetSecurity{
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

## VideointelligenceProjectsLocationsOperationsList

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
    res, err := s.Projects.VideointelligenceProjectsLocationsOperationsList(ctx, operations.VideointelligenceProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("mollitia"),
        Filter: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        Name: "Claudia Krajcik",
        OauthToken: sdk.String("quia"),
        PageSize: sdk.Int64(338007),
        PageToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
    }, operations.VideointelligenceProjectsLocationsOperationsListSecurity{
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
