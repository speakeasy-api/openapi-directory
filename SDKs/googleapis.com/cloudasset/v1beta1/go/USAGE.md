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
            Parent: "unde",
        },
        QueryParams: operations.CloudassetProjectsBatchGetAssetsHistoryQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            AssetNames: []string{
                "vero",
                "perspiciatis",
                "nulla",
            },
            Callback: "nihil",
            ContentType: "RESOURCE",
            Fields: "facilis",
            Key: "eum",
            OauthToken: "iusto",
            PrettyPrint: false,
            QuotaUser: "ullam",
            ReadTimeWindowEndTime: "saepe",
            ReadTimeWindowStartTime: "inventore",
            UploadType: "sapiente",
            UploadProtocol: "enim",
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