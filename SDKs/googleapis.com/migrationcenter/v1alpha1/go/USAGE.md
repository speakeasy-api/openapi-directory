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
            Parent: "unde",
        },
        QueryParams: operations.MigrationcenterProjectsLocationsAssetsAggregateValuesQueryParams{
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
        Request: &shared.AggregateAssetsValuesRequest{
            Aggregations: []shared.Aggregation{
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "ullam": "saepe",
                        "inventore": "sapiente",
                    },
                    Field: "enim",
                    Frequency: map[string]interface{}{
                        "voluptatum": "autem",
                        "vel": "non",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            5680.45,
                            3927.85,
                        },
                    },
                    Sum: map[string]interface{}{
                        "quo": "quasi",
                        "laboriosam": "dicta",
                        "est": "voluptatem",
                        "consequatur": "fugiat",
                    },
                },
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "omnis": "eos",
                        "accusamus": "accusamus",
                        "reiciendis": "rem",
                        "quibusdam": "et",
                    },
                    Field: "praesentium",
                    Frequency: map[string]interface{}{
                        "dolor": "soluta",
                        "sed": "quisquam",
                        "rerum": "culpa",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            5373.73,
                        },
                    },
                    Sum: map[string]interface{}{
                        "possimus": "occaecati",
                        "odit": "esse",
                        "rem": "voluptatem",
                        "amet": "est",
                    },
                },
            },
            Filter: "id",
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