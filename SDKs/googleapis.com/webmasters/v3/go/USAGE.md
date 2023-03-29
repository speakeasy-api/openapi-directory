<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            SiteURL: "unde",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            Alt: "json",
            Fields: "porro",
            Key: "nulla",
            OauthToken: "id",
            PrettyPrint: false,
            QuotaUser: "vero",
            UserIP: "perspiciatis",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "nulla",
            DataState: "nihil",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "eum",
                            Expression: "iusto",
                            Operator: "ullam",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "saepe",
                            Expression: "inventore",
                            Operator: "sapiente",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "enim",
                            Expression: "eum",
                            Operator: "voluptatum",
                        },
                    },
                    GroupType: "autem",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "non",
                            Expression: "deleniti",
                            Operator: "similique",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "reprehenderit",
                            Expression: "molestiae",
                            Operator: "quo",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "quasi",
                            Expression: "laboriosam",
                            Operator: "dicta",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "est",
                            Expression: "voluptatem",
                            Operator: "consequatur",
                        },
                    },
                    GroupType: "fugiat",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "omnis",
                            Expression: "eos",
                            Operator: "accusamus",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "accusamus",
                            Expression: "reiciendis",
                            Operator: "rem",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "quibusdam",
                            Expression: "et",
                            Operator: "praesentium",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "occaecati",
                            Expression: "dolor",
                            Operator: "soluta",
                        },
                    },
                    GroupType: "sed",
                },
            },
            Dimensions: []string{
                "rerum",
                "culpa",
                "qui",
            },
            EndDate: "sed",
            RowLimit: 944669,
            SearchType: "possimus",
            StartDate: "occaecati",
            StartRow: 105907,
        },
    }

    ctx := context.Background()
    res, err := s.Searchanalytics.WebmastersSearchanalyticsQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAnalyticsQueryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->