<!-- Start SDK Example Usage -->
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
            AggregationType: sdk.String("corrupti"),
            DataState: sdk.String("provident"),
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("unde"),
                            Expression: sdk.String("nulla"),
                            Operator: sdk.String("corrupti"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("illum"),
                            Expression: sdk.String("vel"),
                            Operator: sdk.String("error"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("deserunt"),
                            Expression: sdk.String("suscipit"),
                            Operator: sdk.String("iure"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("magnam"),
                            Expression: sdk.String("debitis"),
                            Operator: sdk.String("ipsa"),
                        },
                    },
                    GroupType: sdk.String("delectus"),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("suscipit"),
                            Expression: sdk.String("molestiae"),
                            Operator: sdk.String("minus"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("placeat"),
                            Expression: sdk.String("voluptatum"),
                            Operator: sdk.String("iusto"),
                        },
                    },
                    GroupType: sdk.String("excepturi"),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("recusandae"),
                            Expression: sdk.String("temporibus"),
                            Operator: sdk.String("ab"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("quis"),
                            Expression: sdk.String("veritatis"),
                            Operator: sdk.String("deserunt"),
                        },
                    },
                    GroupType: sdk.String("perferendis"),
                },
            },
            Dimensions: []string{
                "repellendus",
                "sapiente",
            },
            EndDate: sdk.String("quo"),
            RowLimit: sdk.Int(140350),
            SearchType: sdk.String("at"),
            StartDate: sdk.String("at"),
            StartRow: sdk.Int(978619),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        SiteURL: "totam",
        UserIP: sdk.String("porro"),
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
<!-- End SDK Example Usage -->