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
            Parent: "vel",
        },
        QueryParams: operations.CloudassetProjectsBatchGetAssetsHistoryQueryParams{
            DollarXgafv: "2",
            AccessToken: "alias",
            Alt: "media",
            AssetNames: []string{
                "ratione",
                "labore",
                "exercitationem",
            },
            Callback: "facilis",
            ContentType: "CONTENT_TYPE_UNSPECIFIED",
            Fields: "expedita",
            Key: "repellendus",
            OauthToken: "atque",
            PrettyPrint: false,
            QuotaUser: "laboriosam",
            ReadTimeWindowEndTime: "quos",
            ReadTimeWindowStartTime: "quis",
            UploadType: "modi",
            UploadProtocol: "sed",
        },
    }
    
    res, err := s.Projects.CloudassetProjectsBatchGetAssetsHistory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAssetsHistoryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->