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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchAnalyticsQueryRequest: &shared.SearchAnalyticsQueryRequest{
            AggregationType: shared.SearchAnalyticsQueryRequestAggregationTypeEnumByProperty.ToPointer(),
            DataState: shared.SearchAnalyticsQueryRequestDataStateEnumAll.ToPointer(),
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumSearchAppearance.ToPointer(),
                            Expression: sdk.String("corrupti"),
                            Operator: shared.APIDimensionFilterOperatorEnumExcludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumCountry.ToPointer(),
                            Expression: sdk.String("error"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotContains.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumPage.ToPointer(),
                            Expression: sdk.String("iure"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotEquals.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumQuery.ToPointer(),
                            Expression: sdk.String("delectus"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotEquals.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumPage.ToPointer(),
                            Expression: sdk.String("molestiae"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumSearchAppearance.ToPointer(),
                            Expression: sdk.String("voluptatum"),
                            Operator: shared.APIDimensionFilterOperatorEnumContains.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumCountry.ToPointer(),
                            Expression: sdk.String("nisi"),
                            Operator: shared.APIDimensionFilterOperatorEnumExcludingRegex.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumQuery.ToPointer(),
                            Expression: sdk.String("quis"),
                            Operator: shared.APIDimensionFilterOperatorEnumEquals.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("perferendis"),
                            Operator: shared.APIDimensionFilterOperatorEnumContains.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumSearchAppearance.ToPointer(),
                            Expression: sdk.String("sapiente"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumQuery.ToPointer(),
                            Expression: sdk.String("at"),
                            Operator: shared.APIDimensionFilterOperatorEnumExcludingRegex.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumCountry.ToPointer(),
                            Expression: sdk.String("quod"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumCountry.ToPointer(),
                            Expression: sdk.String("totam"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("dicta"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("occaecati"),
                            Operator: shared.APIDimensionFilterOperatorEnumEquals.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                shared.SearchAnalyticsQueryRequestDimensionsEnumSearchAppearance,
                shared.SearchAnalyticsQueryRequestDimensionsEnumDevice,
                shared.SearchAnalyticsQueryRequestDimensionsEnumCountry,
            },
            EndDate: sdk.String("beatae"),
            RowLimit: sdk.Int(414662),
            SearchType: shared.SearchAnalyticsQueryRequestSearchTypeEnumVideo.ToPointer(),
            StartDate: sdk.String("modi"),
            StartRow: sdk.Int(186332),
            Type: shared.SearchAnalyticsQueryRequestTypeEnumDiscover.ToPointer(),
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        SiteURL: "natus",
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("iste"),
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