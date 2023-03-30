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
        Security: operations.CloudassetProjectsBatchGetAssetsHistorySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudassetProjectsBatchGetAssetsHistoryPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.CloudassetProjectsBatchGetAssetsHistoryQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            AssetNames: []string{
                "nulla",
                "corrupti",
                "illum",
            },
            Callback: "vel",
            ContentType: "RESOURCE",
            Fields: "deserunt",
            Key: "suscipit",
            OauthToken: "iure",
            PrettyPrint: false,
            QuotaUser: "magnam",
            ReadTimeWindowEndTime: "debitis",
            ReadTimeWindowStartTime: "ipsa",
            UploadType: "delectus",
            UploadProtocol: "tempora",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudassetProjectsBatchGetAssetsHistory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAssetsHistoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->