<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.FirebasehostingOperationsCancelRequest{
        PathParams: operations.FirebasehostingOperationsCancelPathParams{
            Name: "inventore",
        },
        QueryParams: operations.FirebasehostingOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "cumque",
            Alt: "media",
            Callback: "voluptatem",
            Fields: "tempore",
            Key: "cum",
            OauthToken: "ratione",
            PrettyPrint: true,
            QuotaUser: "eius",
            UploadType: "et",
            UploadProtocol: "consequatur",
        },
        Request: map[string]interface{}{
            "placeat": "est",
            "voluptas": "et",
        },
    }
    
    res, err := s.Operations.FirebasehostingOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->