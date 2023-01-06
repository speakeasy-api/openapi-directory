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
    
    req := operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest{
        Security: operations.RecommenderProjectsLocationsInsightTypesInsightsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RecommenderProjectsLocationsInsightTypesInsightsListPathParams{
            Parent: "illum",
        },
        QueryParams: operations.RecommenderProjectsLocationsInsightTypesInsightsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "dicta",
            Alt: "media",
            Callback: "vitae",
            Fields: "quia",
            Filter: "deserunt",
            Key: "fugit",
            OauthToken: "architecto",
            PageSize: 962378355764676107,
            PageToken: "dolor",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "perspiciatis",
            UploadProtocol: "sit",
        },
    }
    
    res, err := s.Projects.RecommenderProjectsLocationsInsightTypesInsightsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1beta1ListInsightsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->