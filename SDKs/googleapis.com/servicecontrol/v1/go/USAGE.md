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
    
    req := operations.ServicecontrolServicesAllocateQuotaRequest{
        Security: operations.ServicecontrolServicesAllocateQuotaSecurity{
            Option1: &operations.ServicecontrolServicesAllocateQuotaSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.ServicecontrolServicesAllocateQuotaPathParams{
            ServiceName: "ducimus",
        },
        QueryParams: operations.ServicecontrolServicesAllocateQuotaQueryParams{
            DollarXgafv: "1",
            AccessToken: "qui",
            Alt: "proto",
            Callback: "alias",
            Fields: "ipsam",
            Key: "commodi",
            OauthToken: "sunt",
            PrettyPrint: false,
            QuotaUser: "voluptatem",
            UploadType: "at",
            UploadProtocol: "molestiae",
        },
        Request: &shared.AllocateQuotaRequest{
            AllocateOperation: &shared.QuotaOperation{
                ConsumerID: "asperiores",
                Labels: map[string]string{
                    "sunt": "necessitatibus",
                    "consequatur": "ad",
                    "eius": "ea",
                },
                MethodName: "sequi",
                OperationID: "veniam",
                QuotaMetrics: []shared.MetricValueSet{
                    shared.MetricValueSet{
                        MetricName: "enim",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: true,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "corrupti",
                                    },
                                    Count: "sit",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "quo": "eaque",
                                                    "numquam": "officiis",
                                                },
                                                map[string]interface{}{
                                                    "dolorem": "qui",
                                                },
                                            },
                                            Timestamp: "corporis",
                                            Value: 67.199997,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            22.100000,
                                            35.200001,
                                            70.099998,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 1.100000,
                                        NumFiniteBuckets: 7431459554461328599,
                                        Scale: 3.200000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 6189896021486201893,
                                        Offset: 58.200001,
                                        Width: 75.099998,
                                    },
                                    Maximum: 43.200001,
                                    Mean: 73.099998,
                                    Minimum: 76.099998,
                                    SumOfSquaredDeviation: 70.199997,
                                },
                                DoubleValue: 70.199997,
                                EndTime: "modi",
                                Int64Value: "quaerat",
                                Labels: map[string]string{
                                    "iusto": "esse",
                                    "repudiandae": "dignissimos",
                                    "consequatur": "in",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "quia",
                                    Nanos: 197320222454059011,
                                    Units: "iste",
                                },
                                StartTime: "animi",
                                StringValue: "iste",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "perspiciatis",
                                        "deserunt",
                                        "dolorem",
                                    },
                                    Count: "sint",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "quia": "labore",
                                                    "distinctio": "est",
                                                },
                                            },
                                            Timestamp: "amet",
                                            Value: 73.199997,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "harum": "odio",
                                                    "saepe": "recusandae",
                                                    "veritatis": "eos",
                                                },
                                            },
                                            Timestamp: "dolor",
                                            Value: 40.200001,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            41.200001,
                                            52.099998,
                                            60.200001,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 90.099998,
                                        NumFiniteBuckets: 6508940838496941061,
                                        Scale: 42.200001,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 2618554982599950355,
                                        Offset: 57.099998,
                                        Width: 25.100000,
                                    },
                                    Maximum: 34.099998,
                                    Mean: 92.099998,
                                    Minimum: 5.100000,
                                    SumOfSquaredDeviation: 39.099998,
                                },
                                DoubleValue: 93.099998,
                                EndTime: "molestias",
                                Int64Value: "veritatis",
                                Labels: map[string]string{
                                    "sapiente": "tenetur",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "at",
                                    Nanos: 7096674195400469644,
                                    Units: "corrupti",
                                },
                                StartTime: "ex",
                                StringValue: "aut",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "dignissimos",
                                    },
                                    Count: "occaecati",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "enim": "qui",
                                                    "impedit": "et",
                                                },
                                            },
                                            Timestamp: "voluptatem",
                                            Value: 96.199997,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "dolor": "accusantium",
                                                },
                                            },
                                            Timestamp: "repellat",
                                            Value: 66.099998,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            70.199997,
                                            51.200001,
                                            56.200001,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 68.199997,
                                        NumFiniteBuckets: 3297537555181834305,
                                        Scale: 29.100000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 8954591604411961130,
                                        Offset: 7.100000,
                                        Width: 72.199997,
                                    },
                                    Maximum: 66.099998,
                                    Mean: 21.100000,
                                    Minimum: 92.199997,
                                    SumOfSquaredDeviation: 69.099998,
                                },
                                DoubleValue: 2.200000,
                                EndTime: "qui",
                                Int64Value: "id",
                                Labels: map[string]string{
                                    "cum": "fugit",
                                    "provident": "delectus",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "sit",
                                    Nanos: 6026834999785991793,
                                    Units: "ea",
                                },
                                StartTime: "et",
                                StringValue: "est",
                            },
                        },
                    },
                    shared.MetricValueSet{
                        MetricName: "doloremque",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: true,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "ea",
                                    },
                                    Count: "quidem",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "consectetur": "omnis",
                                                },
                                                map[string]interface{}{
                                                    "et": "sed",
                                                    "nobis": "cum",
                                                },
                                            },
                                            Timestamp: "at",
                                            Value: 93.099998,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            74.099998,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 23.100000,
                                        NumFiniteBuckets: 7053835618722618223,
                                        Scale: 32.200001,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 6846709260862427399,
                                        Offset: 5.200000,
                                        Width: 67.099998,
                                    },
                                    Maximum: 40.200001,
                                    Mean: 75.099998,
                                    Minimum: 50.200001,
                                    SumOfSquaredDeviation: 79.099998,
                                },
                                DoubleValue: 11.200000,
                                EndTime: "at",
                                Int64Value: "in",
                                Labels: map[string]string{
                                    "autem": "quasi",
                                    "deserunt": "quis",
                                    "assumenda": "praesentium",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "consequatur",
                                    Nanos: 3745515861110233711,
                                    Units: "culpa",
                                },
                                StartTime: "non",
                                StringValue: "laborum",
                            },
                            shared.MetricValue{
                                BoolValue: true,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "eveniet",
                                        "exercitationem",
                                        "adipisci",
                                    },
                                    Count: "reprehenderit",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "quia": "dolorem",
                                                    "omnis": "cumque",
                                                },
                                            },
                                            Timestamp: "eius",
                                            Value: 38.200001,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "placeat": "dolores",
                                                    "sed": "optio",
                                                    "vel": "vero",
                                                },
                                                map[string]interface{}{
                                                    "voluptatibus": "iure",
                                                    "itaque": "dicta",
                                                    "eveniet": "sunt",
                                                },
                                                map[string]interface{}{
                                                    "illum": "sint",
                                                },
                                            },
                                            Timestamp: "nesciunt",
                                            Value: 75.099998,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "voluptatum": "id",
                                                    "dolorem": "optio",
                                                },
                                            },
                                            Timestamp: "id",
                                            Value: 55.200001,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            75.199997,
                                            23.200001,
                                            50.099998,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 72.099998,
                                        NumFiniteBuckets: 8583493711602615146,
                                        Scale: 79.099998,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 2155193378906749353,
                                        Offset: 20.200001,
                                        Width: 21.200001,
                                    },
                                    Maximum: 96.099998,
                                    Mean: 11.200000,
                                    Minimum: 1.200000,
                                    SumOfSquaredDeviation: 57.200001,
                                },
                                DoubleValue: 49.099998,
                                EndTime: "aut",
                                Int64Value: "a",
                                Labels: map[string]string{
                                    "non": "consequatur",
                                    "pariatur": "corrupti",
                                    "molestiae": "eos",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "sit",
                                    Nanos: 2801142629288853953,
                                    Units: "necessitatibus",
                                },
                                StartTime: "rerum",
                                StringValue: "quia",
                            },
                        },
                    },
                    shared.MetricValueSet{
                        MetricName: "qui",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "fuga",
                                        "quis",
                                        "fugiat",
                                    },
                                    Count: "aliquam",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "doloribus": "hic",
                                                    "quo": "vel",
                                                    "quidem": "sunt",
                                                },
                                                map[string]interface{}{
                                                    "ut": "ab",
                                                    "accusantium": "corporis",
                                                    "qui": "dolorem",
                                                },
                                            },
                                            Timestamp: "accusantium",
                                            Value: 44.099998,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            97.199997,
                                            53.200001,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 3.200000,
                                        NumFiniteBuckets: 1461249110955713176,
                                        Scale: 25.100000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 3109875252289594818,
                                        Offset: 65.199997,
                                        Width: 40.200001,
                                    },
                                    Maximum: 42.200001,
                                    Mean: 21.200001,
                                    Minimum: 53.099998,
                                    SumOfSquaredDeviation: 89.199997,
                                },
                                DoubleValue: 31.200001,
                                EndTime: "quia",
                                Int64Value: "consequatur",
                                Labels: map[string]string{
                                    "molestiae": "praesentium",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "esse",
                                    Nanos: 999946458523824743,
                                    Units: "tempore",
                                },
                                StartTime: "excepturi",
                                StringValue: "beatae",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "qui",
                                        "non",
                                    },
                                    Count: "mollitia",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "dolorum": "consequatur",
                                                    "debitis": "fugit",
                                                    "maiores": "cupiditate",
                                                },
                                            },
                                            Timestamp: "placeat",
                                            Value: 8.100000,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            95.099998,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 47.200001,
                                        NumFiniteBuckets: 1567637042056213507,
                                        Scale: 6.200000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 2295364640798743177,
                                        Offset: 0.200000,
                                        Width: 59.099998,
                                    },
                                    Maximum: 69.199997,
                                    Mean: 26.200001,
                                    Minimum: 73.199997,
                                    SumOfSquaredDeviation: 83.099998,
                                },
                                DoubleValue: 7.200000,
                                EndTime: "nisi",
                                Int64Value: "fugit",
                                Labels: map[string]string{
                                    "labore": "voluptatibus",
                                    "et": "velit",
                                    "dolorum": "maiores",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "quam",
                                    Nanos: 4971666457316999815,
                                    Units: "fuga",
                                },
                                StartTime: "adipisci",
                                StringValue: "animi",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "dolores",
                                        "amet",
                                    },
                                    Count: "quia",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "non": "ipsum",
                                                    "omnis": "est",
                                                },
                                            },
                                            Timestamp: "ut",
                                            Value: 51.099998,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            12.100000,
                                            43.099998,
                                            37.200001,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 63.200001,
                                        NumFiniteBuckets: 5115579402291521256,
                                        Scale: 69.099998,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 854928025915502389,
                                        Offset: 80.199997,
                                        Width: 72.099998,
                                    },
                                    Maximum: 83.199997,
                                    Mean: 68.199997,
                                    Minimum: 5.200000,
                                    SumOfSquaredDeviation: 41.099998,
                                },
                                DoubleValue: 42.099998,
                                EndTime: "rerum",
                                Int64Value: "qui",
                                Labels: map[string]string{
                                    "est": "est",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "esse",
                                    Nanos: 1609355770340397274,
                                    Units: "minima",
                                },
                                StartTime: "optio",
                                StringValue: "rerum",
                            },
                        },
                    },
                },
                QuotaMode: "CHECK_ONLY",
            },
            ServiceConfigID: "non",
        },
    }
    
    res, err := s.Services.ServicecontrolServicesAllocateQuota(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateQuotaResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->