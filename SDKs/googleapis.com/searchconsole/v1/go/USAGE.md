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
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "BY_PROPERTY",
            DataState: "FINAL",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "sapiente",
                            Operator: "NOT_EQUALS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "voluptatum",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "SEARCH_APPEARANCE",
                            Expression: "non",
                            Operator: "CONTAINS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "reprehenderit",
                            Operator: "EXCLUDING_REGEX",
                        },
                    },
                    GroupType: "AND",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "dicta",
                            Operator: "NOT_CONTAINS",
                        },
                    },
                    GroupType: "AND",
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                "DEVICE",
                "SEARCH_APPEARANCE",
            },
            EndDate: "omnis",
            RowLimit: 140350,
            SearchType: "GOOGLE_NEWS",
            StartDate: "accusamus",
            StartRow: 978619,
            Type: "VIDEO",
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