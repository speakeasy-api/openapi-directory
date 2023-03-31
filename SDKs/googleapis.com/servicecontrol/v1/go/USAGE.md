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

    req := operations.ServicecontrolServicesAllocateQuotaRequest{
        DollarXgafv: "2",
        AllocateQuotaRequest: &shared.AllocateQuotaRequest{
            AllocateOperation: &shared.QuotaOperation{
                ConsumerID: "provident",
                Labels: map[string]string{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                MethodName: "error",
                OperationID: "deserunt",
                QuotaMetrics: []shared.MetricValueSet{
                    shared.MetricValueSet{
                        MetricName: "iure",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "ipsa",
                                        "delectus",
                                        "tempora",
                                        "suscipit",
                                    },
                                    Count: "molestiae",
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
                                            Timestamp: "fugit",
                                            Value: 5373.73,
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
                                            Timestamp: "iste",
                                            Value: 4370.32,
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
                                            Timestamp: "doloribus",
                                            Value: 9589.5,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "dolorem": "culpa",
                                                    "consequuntur": "repellat",
                                                    "mollitia": "occaecati",
                                                },
                                            },
                                            Timestamp: "numquam",
                                            Value: 4143.69,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            4746.97,
                                            2444.25,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 6235.1,
                                        NumFiniteBuckets: 158969,
                                        Scale: 3380.07,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 110375,
                                        Offset: 6747.52,
                                        Width: 6563.3,
                                    },
                                    Maximum: 3172.02,
                                    Mean: 1381.83,
                                    Minimum: 7783.46,
                                    SumOfSquaredDeviation: 1965.82,
                                },
                                DoubleValue: 9495.72,
                                EndTime: "ipsam",
                                Int64Value: "id",
                                Labels: map[string]string{
                                    "aut": "quasi",
                                    "error": "temporibus",
                                    "laborum": "quasi",
                                    "reiciendis": "voluptatibus",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "vero",
                                    Nanos: 468651,
                                    Units: "praesentium",
                                },
                                StartTime: "voluptatibus",
                                StringValue: "ipsa",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "voluptate",
                                        "cum",
                                        "perferendis",
                                    },
                                    Count: "doloremque",
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
                                            Timestamp: "molestias",
                                            Value: 5666.02,
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
                                            Timestamp: "assumenda",
                                            Value: 3698.08,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            1464.41,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 6778.17,
                                        NumFiniteBuckets: 569618,
                                        Scale: 2700.08,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 703737,
                                        Offset: 7351.94,
                                        Width: 2884.76,
                                    },
                                    Maximum: 9621.89,
                                    Mean: 4332.88,
                                    Minimum: 2487.53,
                                    SumOfSquaredDeviation: 7561.07,
                                },
                                DoubleValue: 5761.57,
                                EndTime: "aliquid",
                                Int64Value: "provident",
                                Labels: map[string]string{
                                    "sint": "officia",
                                    "dolor": "debitis",
                                    "a": "dolorum",
                                    "in": "in",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "illum",
                                    Nanos: 978571,
                                    Units: "rerum",
                                },
                                StartTime: "dicta",
                                StringValue: "magnam",
                            },
                        },
                    },
                    shared.MetricValueSet{
                        MetricName: "cumque",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "aliquid",
                                        "laborum",
                                    },
                                    Count: "accusamus",
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
                                            Timestamp: "perferendis",
                                            Value: 4701.32,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            7160.75,
                                            6601.74,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 2879.91,
                                        NumFiniteBuckets: 290077,
                                        Scale: 3834.62,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 618016,
                                        Offset: 7491.7,
                                        Width: 4287.69,
                                    },
                                    Maximum: 8784.53,
                                    Mean: 1354.74,
                                    Minimum: 1028.63,
                                    SumOfSquaredDeviation: 2982.82,
                                },
                                DoubleValue: 923.73,
                                EndTime: "excepturi",
                                Int64Value: "ullam",
                                Labels: map[string]string{
                                    "quos": "sint",
                                    "accusantium": "mollitia",
                                    "reiciendis": "mollitia",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "ad",
                                    Nanos: 431418,
                                    Units: "dolor",
                                },
                                StartTime: "necessitatibus",
                                StringValue: "odit",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quasi",
                                        "iure",
                                    },
                                    Count: "doloribus",
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
                                            Timestamp: "pariatur",
                                            Value: 375.59,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "natus": "magni",
                                                    "sunt": "quo",
                                                    "illum": "pariatur",
                                                },
                                            },
                                            Timestamp: "maxime",
                                            Value: 4113.97,
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
                                            Timestamp: "pariatur",
                                            Value: 3654.96,
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
                                            Timestamp: "dolores",
                                            Value: 7936.98,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            2239.24,
                                            8745.73,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 3453.52,
                                        NumFiniteBuckets: 944120,
                                        Scale: 9280.82,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 608253,
                                        Offset: 7044.15,
                                        Width: 5966.56,
                                    },
                                    Maximum: 318.38,
                                    Mean: 7836.45,
                                    Minimum: 1646.94,
                                    SumOfSquaredDeviation: 5000.26,
                                },
                                DoubleValue: 6214.79,
                                EndTime: "eaque",
                                Int64Value: "occaecati",
                                Labels: map[string]string{
                                    "adipisci": "asperiores",
                                    "earum": "modi",
                                    "iste": "dolorum",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "deleniti",
                                    Nanos: 864282,
                                    Units: "provident",
                                },
                                StartTime: "nobis",
                                StringValue: "libero",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quaerat",
                                        "quos",
                                        "aliquid",
                                        "dolorem",
                                    },
                                    Count: "dolorem",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "hic": "excepturi",
                                                },
                                            },
                                            Timestamp: "cum",
                                            Value: 4521.09,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            9702.37,
                                            2274.14,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 6805.45,
                                        NumFiniteBuckets: 254356,
                                        Scale: 852.95,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 58029,
                                        Offset: 564.18,
                                        Width: 4344.17,
                                    },
                                    Maximum: 4878.38,
                                    Mean: 3117.96,
                                    Minimum: 8810.05,
                                    SumOfSquaredDeviation: 6963.44,
                                },
                                DoubleValue: 9764.05,
                                EndTime: "voluptas",
                                Int64Value: "natus",
                                Labels: map[string]string{
                                    "atque": "sit",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "fugiat",
                                    Nanos: 67249,
                                    Units: "soluta",
                                },
                                StartTime: "dolorum",
                                StringValue: "iusto",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "dolorum",
                                        "deleniti",
                                    },
                                    Count: "omnis",
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
                                            Timestamp: "minima",
                                            Value: 8310.49,
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
                                            Timestamp: "nihil",
                                            Value: 256.62,
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
                                            Timestamp: "incidunt",
                                            Value: 1320.68,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "facilis": "aliquid",
                                                    "quam": "molestias",
                                                    "temporibus": "qui",
                                                },
                                            },
                                            Timestamp: "neque",
                                            Value: 1448.47,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            4880.56,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 1248.33,
                                        NumFiniteBuckets: 355613,
                                        Scale: 7220.81,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 940432,
                                        Offset: 304.52,
                                        Width: 7653.26,
                                    },
                                    Maximum: 7469.94,
                                    Mean: 7486.64,
                                    Minimum: 925.96,
                                    SumOfSquaredDeviation: 9037.2,
                                },
                                DoubleValue: 2174.5,
                                EndTime: "veritatis",
                                Int64Value: "nobis",
                                Labels: map[string]string{
                                    "tempore": "cupiditate",
                                    "aperiam": "delectus",
                                    "dolorem": "dolore",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "labore",
                                    Nanos: 240829,
                                    Units: "dolorum",
                                },
                                StartTime: "architecto",
                                StringValue: "quae",
                            },
                        },
                    },
                },
                QuotaMode: "UNSPECIFIED",
            },
            ServiceConfigID: "quas",
        },
        AccessToken: "itaque",
        Alt: "json",
        Callback: "est",
        Fields: "repellendus",
        Key: "porro",
        OauthToken: "doloribus",
        PrettyPrint: false,
        QuotaUser: "ut",
        ServiceName: "facilis",
        UploadType: "cupiditate",
        UploadProtocol: "qui",
    }

    ctx := context.Background()
    res, err := s.Services.ServicecontrolServicesAllocateQuota(ctx, req, operations.ServicecontrolServicesAllocateQuotaSecurity{
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