# Searchanalytics

### Available Operations

* [WebmastersSearchanalyticsQuery](#webmasterssearchanalyticsquery) - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

## WebmastersSearchanalyticsQuery

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SearchAnalyticsQueryRequest: &shared.SearchAnalyticsQueryRequest{
            AggregationType: shared.SearchAnalyticsQueryRequestAggregationTypeEnumByProperty.ToPointer(),
            DataState: shared.SearchAnalyticsQueryRequestDataStateEnumFinal.ToPointer(),
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("in"),
                            Operator: shared.APIDimensionFilterOperatorEnumContains.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("iure"),
                            Operator: shared.APIDimensionFilterOperatorEnumExcludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("architecto"),
                            Operator: shared.APIDimensionFilterOperatorEnumEquals.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumSearchAppearance.ToPointer(),
                            Expression: sdk.String("est"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotContains.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumQuery.ToPointer(),
                            Expression: sdk.String("dolorem"),
                            Operator: shared.APIDimensionFilterOperatorEnumContains.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumQuery.ToPointer(),
                            Expression: sdk.String("nobis"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotEquals.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("nemo"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotEquals.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumQuery.ToPointer(),
                            Expression: sdk.String("iure"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotContains.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumSearchAppearance.ToPointer(),
                            Expression: sdk.String("sapiente"),
                            Operator: shared.APIDimensionFilterOperatorEnumEquals.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("dolorem"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotContains.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumSearchAppearance.ToPointer(),
                            Expression: sdk.String("mollitia"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotContains.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                shared.SearchAnalyticsQueryRequestDimensionsEnumPage,
                shared.SearchAnalyticsQueryRequestDimensionsEnumPage,
            },
            EndDate: sdk.String("molestiae"),
            RowLimit: sdk.Int(244425),
            SearchType: shared.SearchAnalyticsQueryRequestSearchTypeEnumNews.ToPointer(),
            StartDate: sdk.String("quia"),
            StartRow: sdk.Int(338007),
            Type: shared.SearchAnalyticsQueryRequestTypeEnumWeb.ToPointer(),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("odit"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        SiteURL: "ipsam",
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
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
