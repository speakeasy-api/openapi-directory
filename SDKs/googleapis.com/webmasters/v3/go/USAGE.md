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
        SearchAnalyticsQueryRequest: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "corrupti",
            DataState: "provident",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "unde",
                            Expression: "nulla",
                            Operator: "corrupti",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "illum",
                            Expression: "vel",
                            Operator: "error",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "deserunt",
                            Expression: "suscipit",
                            Operator: "iure",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "magnam",
                            Expression: "debitis",
                            Operator: "ipsa",
                        },
                    },
                    GroupType: "delectus",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "suscipit",
                            Expression: "molestiae",
                            Operator: "minus",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "placeat",
                            Expression: "voluptatum",
                            Operator: "iusto",
                        },
                    },
                    GroupType: "excepturi",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "recusandae",
                            Expression: "temporibus",
                            Operator: "ab",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "quis",
                            Expression: "veritatis",
                            Operator: "deserunt",
                        },
                    },
                    GroupType: "perferendis",
                },
            },
            Dimensions: []string{
                "repellendus",
                "sapiente",
            },
            EndDate: "quo",
            RowLimit: 140350,
            SearchType: "at",
            StartDate: "at",
            StartRow: 978619,
        },
        Alt: "json",
        Fields: "molestiae",
        Key: "quod",
        OauthToken: "quod",
        PrettyPrint: false,
        QuotaUser: "esse",
        SiteURL: "totam",
        UserIP: "porro",
    }

    ctx := context.Background()
    res, err := s.Searchanalytics.WebmastersSearchanalyticsQuery(ctx, req, operations.WebmastersSearchanalyticsQuerySecurity{
        Option1: &operations.WebmastersSearchanalyticsQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAnalyticsQueryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->