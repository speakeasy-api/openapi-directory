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
        DollarXgafv: "2",
        SearchAnalyticsQueryRequest: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "BY_PROPERTY",
            DataState: "ALL",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "SEARCH_APPEARANCE",
                            Expression: "corrupti",
                            Operator: "EXCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "error",
                            Operator: "NOT_CONTAINS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "iure",
                            Operator: "NOT_EQUALS",
                        },
                    },
                    GroupType: "AND",
                },
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
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "quod",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "totam",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "DEVICE",
                            Expression: "dicta",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "DEVICE",
                            Expression: "occaecati",
                            Operator: "EQUALS",
                        },
                    },
                    GroupType: "AND",
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                "SEARCH_APPEARANCE",
                "DEVICE",
                "COUNTRY",
            },
            EndDate: "beatae",
            RowLimit: 414662,
            SearchType: "VIDEO",
            StartDate: "modi",
            StartRow: 186332,
            Type: "DISCOVER",
        },
        AccessToken: "cum",
        Alt: "media",
        Callback: "ipsum",
        Fields: "excepturi",
        Key: "aspernatur",
        OauthToken: "perferendis",
        PrettyPrint: false,
        QuotaUser: "ad",
        SiteURL: "natus",
        UploadType: "sed",
        UploadProtocol: "iste",
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