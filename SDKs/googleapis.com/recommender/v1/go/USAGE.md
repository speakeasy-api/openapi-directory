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
            Parent: "neque",
        },
        QueryParams: operations.RecommenderProjectsLocationsInsightTypesInsightsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "est",
            Alt: "media",
            Callback: "est",
            Fields: "ducimus",
            Filter: "fuga",
            Key: "pariatur",
            OauthToken: "fugiat",
            PageSize: 5162580860853051247,
            PageToken: "ut",
            PrettyPrint: true,
            QuotaUser: "aut",
            UploadType: "velit",
            UploadProtocol: "perferendis",
        },
    }
    
    res, err := s.Projects.RecommenderProjectsLocationsInsightTypesInsightsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommenderV1ListInsightsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->