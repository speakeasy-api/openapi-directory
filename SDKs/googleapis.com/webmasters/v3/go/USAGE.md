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
            SiteURL: "sint",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            Alt: "json",
            Fields: "dolorem",
            Key: "earum",
            OauthToken: "recusandae",
            PrettyPrint: true,
            QuotaUser: "in",
            UserIP: "ut",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "reprehenderit",
            DataState: "architecto",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "reiciendis",
                            Expression: "asperiores",
                            Operator: "dolorum",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "reiciendis",
                            Expression: "quo",
                            Operator: "magni",
                        },
                    },
                    GroupType: "dolores",
                },
            },
            Dimensions: []string{
                "fugiat",
                "aliquid",
            },
            EndDate: "expedita",
            RowLimit: 6718298119585506763,
            SearchType: "fugit",
            StartDate: "voluptates",
            StartRow: 8112342789618834040,
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