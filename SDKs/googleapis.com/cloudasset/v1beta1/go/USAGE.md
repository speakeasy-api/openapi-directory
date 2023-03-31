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

    req := operations.CloudassetProjectsBatchGetAssetsHistoryRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        AssetNames: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
        Callback: "vel",
        ContentType: "RESOURCE",
        Fields: "deserunt",
        Key: "suscipit",
        OauthToken: "iure",
        Parent: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        ReadTimeWindowEndTime: "ipsa",
        ReadTimeWindowStartTime: "delectus",
        UploadType: "tempora",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudassetProjectsBatchGetAssetsHistory(ctx, req, operations.CloudassetProjectsBatchGetAssetsHistorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAssetsHistoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->