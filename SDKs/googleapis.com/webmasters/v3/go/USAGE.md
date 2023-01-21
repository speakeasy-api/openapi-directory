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
            SiteURL: "sit",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            Alt: "json",
            Fields: "culpa",
            Key: "expedita",
            OauthToken: "consequuntur",
            PrettyPrint: false,
            QuotaUser: "expedita",
            UserIP: "voluptas",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "fugit",
            DataState: "et",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "dicta",
                            Expression: "debitis",
                            Operator: "voluptatum",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "et",
                            Expression: "ut",
                            Operator: "dolorem",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "et",
                            Expression: "voluptate",
                            Operator: "iste",
                        },
                    },
                    GroupType: "vitae",
                },
            },
            Dimensions: []string{
                "dolores",
                "illum",
                "debitis",
            },
            EndDate: "vel",
            RowLimit: 2627038740284806767,
            SearchType: "dolore",
            StartDate: "id",
            StartRow: 959367522974354090,
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