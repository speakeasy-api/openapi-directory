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
            Name: "voluptatem",
        },
        QueryParams: operations.FirebasehostingOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "natus",
            Alt: "media",
            Callback: "veniam",
            Fields: "deleniti",
            Key: "officia",
            OauthToken: "dolorem",
            PrettyPrint: true,
            QuotaUser: "adipisci",
            UploadType: "maiores",
            UploadProtocol: "molestiae",
        },
        Request: map[string]interface{}{
            "ut": "id",
            "facere": "architecto",
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