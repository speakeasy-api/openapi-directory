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
            SiteURL: "corrupti",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            Alt: "json",
            Fields: "provident",
            Key: "distinctio",
            OauthToken: "quibusdam",
            PrettyPrint: false,
            QuotaUser: "unde",
            UserIP: "nulla",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "corrupti",
            DataState: "illum",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
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
                        shared.APIDimensionFilter{
                            Dimension: "delectus",
                            Expression: "tempora",
                            Operator: "suscipit",
                        },
                    },
                    GroupType: "molestiae",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "placeat",
                            Expression: "voluptatum",
                            Operator: "iusto",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "excepturi",
                            Expression: "nisi",
                            Operator: "recusandae",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "temporibus",
                            Expression: "ab",
                            Operator: "quis",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "veritatis",
                            Expression: "deserunt",
                            Operator: "perferendis",
                        },
                    },
                    GroupType: "ipsam",
                },
            },
            Dimensions: []string{
                "sapiente",
                "quo",
                "odit",
                "at",
            },
            EndDate: "at",
            RowLimit: 978619,
            SearchType: "molestiae",
            StartDate: "quod",
            StartRow: 800911,
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