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
            Parent: "consequatur",
        },
        QueryParams: operations.CloudassetProjectsBatchGetAssetsHistoryQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "media",
            AssetNames: []string{
                "sunt",
                "voluptatem",
            },
            Callback: "nobis",
            ContentType: "IAM_POLICY",
            Fields: "reprehenderit",
            Key: "vel",
            OauthToken: "aut",
            PrettyPrint: false,
            QuotaUser: "dignissimos",
            ReadTimeWindowEndTime: "aut",
            ReadTimeWindowStartTime: "maxime",
            UploadType: "ea",
            UploadProtocol: "et",
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