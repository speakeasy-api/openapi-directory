# Operations

### Available Operations

* [VaultOperationsCancel](#vaultoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [VaultOperationsDelete](#vaultoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [VaultOperationsList](#vaultoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## VaultOperationsCancel

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
    res, err := s.Operations.VaultOperationsCancel(ctx, operations.VaultOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "esse": "recusandae",
            "aperiam": "distinctio",
            "quod": "dignissimos",
            "inventore": "nihil",
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("odio"),
        Key: sdk.String("occaecati"),
        Name: "Miranda Daniel",
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## VaultOperationsDelete

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
    res, err := s.Operations.VaultOperationsDelete(ctx, operations.VaultOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("mollitia"),
        Name: "Leah Champlin",
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("ratione"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## VaultOperationsList

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
    res, err := s.Operations.VaultOperationsList(ctx, operations.VaultOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("et"),
        Filter: sdk.String("esse"),
        Key: sdk.String("eveniet"),
        Name: "Patrick Koch",
        OauthToken: sdk.String("vero"),
        PageSize: sdk.Int64(399025),
        PageToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```
