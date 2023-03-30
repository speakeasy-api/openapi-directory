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

    req := operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest{
        Security: operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.MigrationcenterProjectsLocationsAssetsAggregateValuesPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.MigrationcenterProjectsLocationsAssetsAggregateValuesQueryParams{
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
        Request: &shared.AggregateAssetsValuesRequest{
            Aggregations: []shared.Aggregation{
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "magnam": "debitis",
                        "ipsa": "delectus",
                    },
                    Field: "tempora",
                    Frequency: map[string]interface{}{
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            5680.45,
                            3927.85,
                        },
                    },
                    Sum: map[string]interface{}{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                },
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "quo": "odit",
                        "at": "at",
                        "maiores": "molestiae",
                        "quod": "quod",
                    },
                    Field: "esse",
                    Frequency: map[string]interface{}{
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            5373.73,
                        },
                    },
                    Sum: map[string]interface{}{
                        "optio": "totam",
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                },
            },
            Filter: "cum",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsAggregateValues(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AggregateAssetsValuesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->