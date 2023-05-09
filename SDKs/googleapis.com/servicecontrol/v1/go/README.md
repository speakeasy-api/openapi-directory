# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicecontrol/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    res, err := s.Services.ServicecontrolServicesAllocateQuota(ctx, operations.ServicecontrolServicesAllocateQuotaRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AllocateQuotaRequest: &shared.AllocateQuotaRequest{
            AllocateOperation: &shared.QuotaOperation{
                ConsumerID: sdk.String("provident"),
                Labels: map[string]string{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                MethodName: sdk.String("error"),
                OperationID: sdk.String("deserunt"),
                QuotaMetrics: []shared.MetricValueSet{
                    shared.MetricValueSet{
                        MetricName: sdk.String("iure"),
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "ipsa",
                                        "delectus",
                                        "tempora",
                                        "suscipit",
                                    },
                                    Count: sdk.String("molestiae"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "iusto": "excepturi",
                                                    "nisi": "recusandae",
                                                    "temporibus": "ab",
                                                },
                                                map[string]interface{}{
                                                    "veritatis": "deserunt",
                                                    "perferendis": "ipsam",
                                                },
                                                map[string]interface{}{
                                                    "sapiente": "quo",
                                                    "odit": "at",
                                                    "at": "maiores",
                                                    "molestiae": "quod",
                                                },
                                                map[string]interface{}{
                                                    "esse": "totam",
                                                    "porro": "dolorum",
                                                    "dicta": "nam",
                                                    "officia": "occaecati",
                                                },
                                            },
                                            Timestamp: sdk.String("fugit"),
                                            Value: sdk.Float64(5373.73),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "totam": "beatae",
                                                    "commodi": "molestiae",
                                                    "modi": "qui",
                                                    "impedit": "cum",
                                                },
                                                map[string]interface{}{
                                                    "ipsum": "excepturi",
                                                    "aspernatur": "perferendis",
                                                },
                                                map[string]interface{}{
                                                    "natus": "sed",
                                                    "iste": "dolor",
                                                },
                                                map[string]interface{}{
                                                    "laboriosam": "hic",
                                                    "saepe": "fuga",
                                                    "in": "corporis",
                                                },
                                            },
                                            Timestamp: sdk.String("iste"),
                                            Value: sdk.Float64(4370.32),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "architecto": "ipsa",
                                                    "reiciendis": "est",
                                                    "mollitia": "laborum",
                                                },
                                                map[string]interface{}{
                                                    "dolorem": "corporis",
                                                },
                                                map[string]interface{}{
                                                    "nobis": "enim",
                                                },
                                                map[string]interface{}{
                                                    "nemo": "minima",
                                                    "excepturi": "accusantium",
                                                    "iure": "culpa",
                                                },
                                            },
                                            Timestamp: sdk.String("doloribus"),
                                            Value: sdk.Float64(9589.5),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "dolorem": "culpa",
                                                    "consequuntur": "repellat",
                                                    "mollitia": "occaecati",
                                                },
                                            },
                                            Timestamp: sdk.String("numquam"),
                                            Value: sdk.Float64(4143.69),
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            4746.97,
                                            2444.25,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: sdk.Float64(6235.1),
                                        NumFiniteBuckets: sdk.Int(158969),
                                        Scale: sdk.Float64(3380.07),
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: sdk.Int(110375),
                                        Offset: sdk.Float64(6747.52),
                                        Width: sdk.Float64(6563.3),
                                    },
                                    Maximum: sdk.Float64(3172.02),
                                    Mean: sdk.Float64(1381.83),
                                    Minimum: sdk.Float64(7783.46),
                                    SumOfSquaredDeviation: sdk.Float64(1965.82),
                                },
                                DoubleValue: sdk.Float64(9495.72),
                                EndTime: sdk.String("ipsam"),
                                Int64Value: sdk.String("id"),
                                Labels: map[string]string{
                                    "aut": "quasi",
                                    "error": "temporibus",
                                    "laborum": "quasi",
                                    "reiciendis": "voluptatibus",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: sdk.String("vero"),
                                    Nanos: sdk.Int(468651),
                                    Units: sdk.String("praesentium"),
                                },
                                StartTime: sdk.String("voluptatibus"),
                                StringValue: sdk.String("ipsa"),
                            },
                            shared.MetricValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "voluptate",
                                        "cum",
                                        "perferendis",
                                    },
                                    Count: sdk.String("doloremque"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "dicta": "corporis",
                                                    "dolore": "iusto",
                                                    "dicta": "harum",
                                                    "enim": "accusamus",
                                                },
                                                map[string]interface{}{
                                                    "repudiandae": "quae",
                                                    "ipsum": "quidem",
                                                },
                                            },
                                            Timestamp: sdk.String("molestias"),
                                            Value: sdk.Float64(5666.02),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "praesentium": "rem",
                                                    "voluptates": "quasi",
                                                },
                                                map[string]interface{}{
                                                    "sint": "veritatis",
                                                    "itaque": "incidunt",
                                                    "enim": "consequatur",
                                                    "est": "quibusdam",
                                                },
                                                map[string]interface{}{
                                                    "deserunt": "distinctio",
                                                },
                                                map[string]interface{}{
                                                    "labore": "modi",
                                                    "qui": "aliquid",
                                                    "cupiditate": "quos",
                                                    "perferendis": "magni",
                                                },
                                            },
                                            Timestamp: sdk.String("assumenda"),
                                            Value: sdk.Float64(3698.08),
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            1464.41,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: sdk.Float64(6778.17),
                                        NumFiniteBuckets: sdk.Int(569618),
                                        Scale: sdk.Float64(2700.08),
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: sdk.Int(703737),
                                        Offset: sdk.Float64(7351.94),
                                        Width: sdk.Float64(2884.76),
                                    },
                                    Maximum: sdk.Float64(9621.89),
                                    Mean: sdk.Float64(4332.88),
                                    Minimum: sdk.Float64(2487.53),
                                    SumOfSquaredDeviation: sdk.Float64(7561.07),
                                },
                                DoubleValue: sdk.Float64(5761.57),
                                EndTime: sdk.String("aliquid"),
                                Int64Value: sdk.String("provident"),
                                Labels: map[string]string{
                                    "sint": "officia",
                                    "dolor": "debitis",
                                    "a": "dolorum",
                                    "in": "in",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: sdk.String("illum"),
                                    Nanos: sdk.Int(978571),
                                    Units: sdk.String("rerum"),
                                },
                                StartTime: sdk.String("dicta"),
                                StringValue: sdk.String("magnam"),
                            },
                        },
                    },
                    shared.MetricValueSet{
                        MetricName: sdk.String("cumque"),
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "aliquid",
                                        "laborum",
                                    },
                                    Count: sdk.String("accusamus"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "accusamus": "delectus",
                                                    "quidem": "provident",
                                                },
                                                map[string]interface{}{
                                                    "id": "blanditiis",
                                                    "deleniti": "sapiente",
                                                    "amet": "deserunt",
                                                },
                                                map[string]interface{}{
                                                    "vel": "natus",
                                                    "omnis": "molestiae",
                                                },
                                            },
                                            Timestamp: sdk.String("perferendis"),
                                            Value: sdk.Float64(4701.32),
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            7160.75,
                                            6601.74,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: sdk.Float64(2879.91),
                                        NumFiniteBuckets: sdk.Int(290077),
                                        Scale: sdk.Float64(3834.62),
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: sdk.Int(618016),
                                        Offset: sdk.Float64(7491.7),
                                        Width: sdk.Float64(4287.69),
                                    },
                                    Maximum: sdk.Float64(8784.53),
                                    Mean: sdk.Float64(1354.74),
                                    Minimum: sdk.Float64(1028.63),
                                    SumOfSquaredDeviation: sdk.Float64(2982.82),
                                },
                                DoubleValue: sdk.Float64(923.73),
                                EndTime: sdk.String("excepturi"),
                                Int64Value: sdk.String("ullam"),
                                Labels: map[string]string{
                                    "quos": "sint",
                                    "accusantium": "mollitia",
                                    "reiciendis": "mollitia",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: sdk.String("ad"),
                                    Nanos: sdk.Int(431418),
                                    Units: sdk.String("dolor"),
                                },
                                StartTime: sdk.String("necessitatibus"),
                                StringValue: sdk.String("odit"),
                            },
                            shared.MetricValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quasi",
                                        "iure",
                                    },
                                    Count: sdk.String("doloribus"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "deleniti": "facilis",
                                                    "in": "architecto",
                                                    "architecto": "repudiandae",
                                                    "ullam": "expedita",
                                                },
                                                map[string]interface{}{
                                                    "repellat": "quibusdam",
                                                    "sed": "saepe",
                                                },
                                            },
                                            Timestamp: sdk.String("pariatur"),
                                            Value: sdk.Float64(375.59),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "natus": "magni",
                                                    "sunt": "quo",
                                                    "illum": "pariatur",
                                                },
                                            },
                                            Timestamp: sdk.String("maxime"),
                                            Value: sdk.Float64(4113.97),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ea": "accusantium",
                                                },
                                                map[string]interface{}{
                                                    "maiores": "quidem",
                                                },
                                                map[string]interface{}{
                                                    "voluptate": "autem",
                                                    "nam": "eaque",
                                                },
                                            },
                                            Timestamp: sdk.String("pariatur"),
                                            Value: sdk.Float64(3654.96),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "fugiat": "amet",
                                                },
                                                map[string]interface{}{
                                                    "cumque": "corporis",
                                                },
                                                map[string]interface{}{
                                                    "libero": "nobis",
                                                    "dolores": "quis",
                                                    "totam": "dignissimos",
                                                    "eaque": "quis",
                                                },
                                                map[string]interface{}{
                                                    "eos": "perferendis",
                                                },
                                            },
                                            Timestamp: sdk.String("dolores"),
                                            Value: sdk.Float64(7936.98),
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            2239.24,
                                            8745.73,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: sdk.Float64(3453.52),
                                        NumFiniteBuckets: sdk.Int(944120),
                                        Scale: sdk.Float64(9280.82),
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: sdk.Int(608253),
                                        Offset: sdk.Float64(7044.15),
                                        Width: sdk.Float64(5966.56),
                                    },
                                    Maximum: sdk.Float64(318.38),
                                    Mean: sdk.Float64(7836.45),
                                    Minimum: sdk.Float64(1646.94),
                                    SumOfSquaredDeviation: sdk.Float64(5000.26),
                                },
                                DoubleValue: sdk.Float64(6214.79),
                                EndTime: sdk.String("eaque"),
                                Int64Value: sdk.String("occaecati"),
                                Labels: map[string]string{
                                    "adipisci": "asperiores",
                                    "earum": "modi",
                                    "iste": "dolorum",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: sdk.String("deleniti"),
                                    Nanos: sdk.Int(864282),
                                    Units: sdk.String("provident"),
                                },
                                StartTime: sdk.String("nobis"),
                                StringValue: sdk.String("libero"),
                            },
                            shared.MetricValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quaerat",
                                        "quos",
                                        "aliquid",
                                        "dolorem",
                                    },
                                    Count: sdk.String("dolorem"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "hic": "excepturi",
                                                },
                                            },
                                            Timestamp: sdk.String("cum"),
                                            Value: sdk.Float64(4521.09),
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            9702.37,
                                            2274.14,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: sdk.Float64(6805.45),
                                        NumFiniteBuckets: sdk.Int(254356),
                                        Scale: sdk.Float64(852.95),
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: sdk.Int(58029),
                                        Offset: sdk.Float64(564.18),
                                        Width: sdk.Float64(4344.17),
                                    },
                                    Maximum: sdk.Float64(4878.38),
                                    Mean: sdk.Float64(3117.96),
                                    Minimum: sdk.Float64(8810.05),
                                    SumOfSquaredDeviation: sdk.Float64(6963.44),
                                },
                                DoubleValue: sdk.Float64(9764.05),
                                EndTime: sdk.String("voluptas"),
                                Int64Value: sdk.String("natus"),
                                Labels: map[string]string{
                                    "atque": "sit",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: sdk.String("fugiat"),
                                    Nanos: sdk.Int(67249),
                                    Units: sdk.String("soluta"),
                                },
                                StartTime: sdk.String("dolorum"),
                                StringValue: sdk.String("iusto"),
                            },
                            shared.MetricValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "dolorum",
                                        "deleniti",
                                    },
                                    Count: sdk.String("omnis"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "nihil": "ipsum",
                                                    "voluptate": "id",
                                                    "saepe": "eius",
                                                    "aspernatur": "perferendis",
                                                },
                                                map[string]interface{}{
                                                    "optio": "accusamus",
                                                },
                                                map[string]interface{}{
                                                    "saepe": "suscipit",
                                                    "deserunt": "provident",
                                                },
                                            },
                                            Timestamp: sdk.String("minima"),
                                            Value: sdk.Float64(8310.49),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "alias": "at",
                                                    "quaerat": "tempora",
                                                    "vel": "quod",
                                                },
                                                map[string]interface{}{
                                                    "qui": "dolorum",
                                                    "a": "esse",
                                                    "harum": "iusto",
                                                    "ipsum": "quisquam",
                                                },
                                                map[string]interface{}{
                                                    "amet": "tempore",
                                                    "accusamus": "numquam",
                                                    "enim": "dolorem",
                                                    "sapiente": "totam",
                                                },
                                            },
                                            Timestamp: sdk.String("nihil"),
                                            Value: sdk.Float64(256.62),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "sed": "vel",
                                                },
                                                map[string]interface{}{
                                                    "voluptas": "deserunt",
                                                    "quam": "ipsum",
                                                    "incidunt": "qui",
                                                },
                                                map[string]interface{}{
                                                    "maxime": "pariatur",
                                                    "soluta": "dicta",
                                                    "laborum": "totam",
                                                },
                                            },
                                            Timestamp: sdk.String("incidunt"),
                                            Value: sdk.Float64(1320.68),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "facilis": "aliquid",
                                                    "quam": "molestias",
                                                    "temporibus": "qui",
                                                },
                                            },
                                            Timestamp: sdk.String("neque"),
                                            Value: sdk.Float64(1448.47),
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            4880.56,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: sdk.Float64(1248.33),
                                        NumFiniteBuckets: sdk.Int(355613),
                                        Scale: sdk.Float64(7220.81),
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: sdk.Int(940432),
                                        Offset: sdk.Float64(304.52),
                                        Width: sdk.Float64(7653.26),
                                    },
                                    Maximum: sdk.Float64(7469.94),
                                    Mean: sdk.Float64(7486.64),
                                    Minimum: sdk.Float64(925.96),
                                    SumOfSquaredDeviation: sdk.Float64(9037.2),
                                },
                                DoubleValue: sdk.Float64(2174.5),
                                EndTime: sdk.String("veritatis"),
                                Int64Value: sdk.String("nobis"),
                                Labels: map[string]string{
                                    "tempore": "cupiditate",
                                    "aperiam": "delectus",
                                    "dolorem": "dolore",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: sdk.String("labore"),
                                    Nanos: sdk.Int(240829),
                                    Units: sdk.String("dolorum"),
                                },
                                StartTime: sdk.String("architecto"),
                                StringValue: sdk.String("quae"),
                            },
                        },
                    },
                },
                QuotaMode: shared.QuotaOperationQuotaModeEnumUnspecified.ToPointer(),
            },
            ServiceConfigID: sdk.String("quas"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        ServiceName: "facilis",
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("qui"),
    }, operations.ServicecontrolServicesAllocateQuotaSecurity{
        Option1: &operations.ServicecontrolServicesAllocateQuotaSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateQuotaResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Services](docs/services/README.md)

* [ServicecontrolServicesAllocateQuota](docs/services/README.md#servicecontrolservicesallocatequota) - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* [ServicecontrolServicesCheck](docs/services/README.md#servicecontrolservicescheck) - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* [ServicecontrolServicesReport](docs/services/README.md#servicecontrolservicesreport) - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
