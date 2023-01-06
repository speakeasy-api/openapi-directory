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
            SiteURL: "nihil",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            DollarXgafv: "2",
            AccessToken: "accusamus",
            Alt: "proto",
            Callback: "eum",
            Fields: "perspiciatis",
            Key: "distinctio",
            OauthToken: "velit",
            PrettyPrint: true,
            QuotaUser: "numquam",
            UploadType: "minima",
            UploadProtocol: "vel",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "BY_PROPERTY",
            DataState: "ALL",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "quis",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "quo",
                            Operator: "INCLUDING_REGEX",
                        },
                    },
                    GroupType: "AND",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "beatae",
                            Operator: "EQUALS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "sunt",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "rem",
                            Operator: "INCLUDING_REGEX",
                        },
                    },
                    GroupType: "AND",
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                "PAGE",
            },
            EndDate: "eveniet",
            RowLimit: 9208246729111981672,
            SearchType: "VIDEO",
            StartDate: "et",
            StartRow: 1522702349187420273,
            Type: "GOOGLE_NEWS",
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