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
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsAggregateValues(ctx, operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AggregateAssetsValuesRequest: &shared.AggregateAssetsValuesRequest{
            Aggregations: []shared.Aggregation{
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "quibusdam": "unde",
                        "nulla": "corrupti",
                        "illum": "vel",
                    },
                    Field: sdk.String("error"),
                    Frequency: map[string]interface{}{
                        "suscipit": "iure",
                        "magnam": "debitis",
                        "ipsa": "delectus",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            3834.41,
                            4776.65,
                        },
                    },
                    Sum: map[string]interface{}{
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                        "nisi": "recusandae",
                        "temporibus": "ab",
                    },
                },
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                    },
                    Field: sdk.String("repellendus"),
                    Frequency: map[string]interface{}{
                        "quo": "odit",
                        "at": "at",
                        "maiores": "molestiae",
                        "quod": "quod",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            5204.78,
                            7805.29,
                        },
                    },
                    Sum: map[string]interface{}{
                        "dicta": "nam",
                        "officia": "occaecati",
                        "fugit": "deleniti",
                    },
                },
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "optio": "totam",
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                    Field: sdk.String("cum"),
                    Frequency: map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            6176.36,
                            1496.75,
                        },
                    },
                    Sum: map[string]interface{}{
                        "dolor": "natus",
                        "laboriosam": "hic",
                        "saepe": "fuga",
                    },
                },
            },
            Filter: sdk.String("in"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("architecto"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AggregateAssetsValuesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->