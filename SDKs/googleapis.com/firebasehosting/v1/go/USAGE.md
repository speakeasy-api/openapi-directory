<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FirebasehostingOperationsCancelRequest{
        PathParams: operations.FirebasehostingOperationsCancelPathParams{
            Name: "unde",
        },
        QueryParams: operations.FirebasehostingOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: map[string]interface{}{
            "iusto": "ullam",
            "saepe": "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.Operations.FirebasehostingOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->