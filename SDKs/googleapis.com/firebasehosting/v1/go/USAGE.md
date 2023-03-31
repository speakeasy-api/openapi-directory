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
        DollarXgafv: "2",
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        Name: "magnam",
        OauthToken: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
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