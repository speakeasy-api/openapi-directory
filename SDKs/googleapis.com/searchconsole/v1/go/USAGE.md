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
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "BY_PROPERTY",
            DataState: "FINAL",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "delectus",
                            Operator: "NOT_EQUALS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "molestiae",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "SEARCH_APPEARANCE",
                            Expression: "voluptatum",
                            Operator: "CONTAINS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "nisi",
                            Operator: "EXCLUDING_REGEX",
                        },
                    },
                    GroupType: "AND",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "quis",
                            Operator: "EQUALS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "DEVICE",
                            Expression: "perferendis",
                            Operator: "CONTAINS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "SEARCH_APPEARANCE",
                            Expression: "sapiente",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "at",
                            Operator: "EXCLUDING_REGEX",
                        },
                    },
                    GroupType: "AND",
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                "PAGE",
                "DEVICE",
                "DEVICE",
                "PAGE",
            },
            EndDate: "totam",
            RowLimit: 780529,
            SearchType: "DISCOVER",
            StartDate: "dicta",
            StartRow: 720633,
            Type: "NEWS",
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