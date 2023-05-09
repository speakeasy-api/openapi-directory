# Operations

### Available Operations

* [CloudchannelOperationsCancel](#cloudchanneloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [CloudchannelOperationsDelete](#cloudchanneloperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [CloudchannelOperationsList](#cloudchanneloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## CloudchannelOperationsCancel

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
    res, err := s.Operations.CloudchannelOperationsCancel(ctx, operations.CloudchannelOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "ipsam": "debitis",
            "rem": "sit",
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("minima"),
        Key: sdk.String("recusandae"),
        Name: "Dr. Jody Cummings",
        OauthToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.CloudchannelOperationsCancelSecurity{
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

## CloudchannelOperationsDelete

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
    res, err := s.Operations.CloudchannelOperationsDelete(ctx, operations.CloudchannelOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("dolorum"),
        Name: "Evan Welch",
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("officia"),
    }, operations.CloudchannelOperationsDeleteSecurity{
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

## CloudchannelOperationsList

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
    res, err := s.Operations.CloudchannelOperationsList(ctx, operations.CloudchannelOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("atque"),
        Filter: operations.CloudchannelOperationsListFilterEnumUnspecified.ToPointer(),
        Key: sdk.String("ut"),
        Name: "George Nicolas",
        OauthToken: sdk.String("consequatur"),
        PageSize: sdk.Int64(460220),
        PageToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("quas"),
    }, operations.CloudchannelOperationsListSecurity{
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
