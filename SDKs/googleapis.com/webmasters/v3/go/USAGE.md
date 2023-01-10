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
            SiteURL: "non",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            Alt: "json",
            Fields: "eos",
            Key: "aut",
            OauthToken: "dolores",
            PrettyPrint: true,
            QuotaUser: "beatae",
            UserIP: "aliquid",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "adipisci",
            DataState: "nostrum",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "aut",
                            Expression: "cumque",
                            Operator: "et",
                        },
                    },
                    GroupType: "atque",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "nobis",
                            Expression: "doloribus",
                            Operator: "veniam",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "rem",
                            Expression: "pariatur",
                            Operator: "totam",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "error",
                            Expression: "et",
                            Operator: "dolore",
                        },
                    },
                    GroupType: "corporis",
                },
            },
            Dimensions: []string{
                "blanditiis",
                "vitae",
            },
            EndDate: "ullam",
            RowLimit: 5161140233781953582,
            SearchType: "dolorem",
            StartDate: "ea",
            StartRow: 940405060983898307,
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