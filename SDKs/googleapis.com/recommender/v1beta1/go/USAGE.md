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
            Parent: "et",
        },
        QueryParams: operations.RecommenderProjectsLocationsInsightTypesInsightsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "odit",
            Alt: "proto",
            Callback: "omnis",
            Fields: "est",
            Filter: "iusto",
            Key: "voluptatibus",
            OauthToken: "autem",
            PageSize: 5523822080997069527,
            PageToken: "similique",
            PrettyPrint: false,
            QuotaUser: "commodi",
            UploadType: "libero",
            UploadProtocol: "rem",
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