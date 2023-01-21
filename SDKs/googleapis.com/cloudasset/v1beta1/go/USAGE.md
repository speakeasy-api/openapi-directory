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
            Parent: "sit",
        },
        QueryParams: operations.CloudassetProjectsBatchGetAssetsHistoryQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            AssetNames: []string{
                "dolor",
                "expedita",
                "voluptas",
            },
            Callback: "fugit",
            ContentType: "CONTENT_TYPE_UNSPECIFIED",
            Fields: "nihil",
            Key: "rerum",
            OauthToken: "dicta",
            PrettyPrint: true,
            QuotaUser: "voluptatum",
            ReadTimeWindowEndTime: "et",
            ReadTimeWindowStartTime: "ut",
            UploadType: "dolorem",
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