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
    
    req := operations.WebmastersSearchanalyticsQueryRequest{
        Security: operations.WebmastersSearchanalyticsQuerySecurity{
            Option1: &operations.WebmastersSearchanalyticsQuerySecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.WebmastersSearchanalyticsQueryPathParams{
            SiteURL: "adipisci",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            DollarXgafv: "2",
            AccessToken: "sequi",
            Alt: "media",
            Callback: "et",
            Fields: "id",
            Key: "impedit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "consequuntur",
            UploadType: "fugit",
            UploadProtocol: "aut",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "AUTO",
            DataState: "ALL",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "delectus",
                            Operator: "CONTAINS",
                        },
                    },
                    GroupType: "AND",
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                "DATE",
                "SEARCH_APPEARANCE",
                "QUERY",
            },
            EndDate: "assumenda",
            RowLimit: 7714857476425061931,
            SearchType: "VIDEO",
            StartDate: "delectus",
            StartRow: 7876677448085170865,
            Type: "NEWS",
        },
    }
    
    res, err := s.Searchanalytics.WebmastersSearchanalyticsQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAnalyticsQueryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->