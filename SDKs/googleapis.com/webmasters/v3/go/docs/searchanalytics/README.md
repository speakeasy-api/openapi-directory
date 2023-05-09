# Searchanalytics

### Available Operations

* [WebmastersSearchanalyticsQuery](#webmasterssearchanalyticsquery) - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

## WebmastersSearchanalyticsQuery

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Searchanalytics.WebmastersSearchanalyticsQuery(ctx, operations.WebmastersSearchanalyticsQueryRequest{
        SearchAnalyticsQueryRequest: &shared.SearchAnalyticsQueryRequest{
            AggregationType: sdk.String("dolorum"),
            DataState: sdk.String("dicta"),
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("occaecati"),
                            Expression: sdk.String("fugit"),
                            Operator: sdk.String("deleniti"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("hic"),
                            Expression: sdk.String("optio"),
                            Operator: sdk.String("totam"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("beatae"),
                            Expression: sdk.String("commodi"),
                            Operator: sdk.String("molestiae"),
                        },
                    },
                    GroupType: sdk.String("modi"),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("impedit"),
                            Expression: sdk.String("cum"),
                            Operator: sdk.String("esse"),
                        },
                    },
                    GroupType: sdk.String("ipsum"),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("aspernatur"),
                            Expression: sdk.String("perferendis"),
                            Operator: sdk.String("ad"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("natus"),
                            Expression: sdk.String("sed"),
                            Operator: sdk.String("iste"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("dolor"),
                            Expression: sdk.String("natus"),
                            Operator: sdk.String("laboriosam"),
                        },
                    },
                    GroupType: sdk.String("hic"),
                },
            },
            Dimensions: []string{
                "fuga",
                "in",
                "corporis",
                "iste",
            },
            EndDate: sdk.String("iure"),
            RowLimit: sdk.Int(902349),
            SearchType: sdk.String("quidem"),
            StartDate: sdk.String("architecto"),
            StartRow: sdk.Int(60225),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        SiteURL: "dolores",
        UserIP: sdk.String("dolorem"),
    }, operations.WebmastersSearchanalyticsQuerySecurity{
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
