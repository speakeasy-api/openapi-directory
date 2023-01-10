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
            ServiceName: "voluptatum",
        },
        QueryParams: operations.ServicecontrolServicesAllocateQuotaQueryParams{
            DollarXgafv: "1",
            AccessToken: "in",
            Alt: "json",
            Callback: "rem",
            Fields: "repudiandae",
            Key: "pariatur",
            OauthToken: "iste",
            PrettyPrint: false,
            QuotaUser: "earum",
            UploadType: "repudiandae",
            UploadProtocol: "facere",
        },
        Request: &shared.AllocateQuotaRequest{
            AllocateOperation: &shared.QuotaOperation{
                ConsumerID: "rerum",
                Labels: map[string]string{
                    "dolorum": "ab",
                },
                MethodName: "rerum",
                OperationID: "quis",
                QuotaMetrics: []shared.MetricValueSet{
                    shared.MetricValueSet{
                        MetricName: "atque",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: true,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "aperiam",
                                        "vel",
                                        "deserunt",
                                    },
                                    Count: "rerum",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "voluptates": "et",
                                                    "fugiat": "nihil",
                                                    "laboriosam": "laborum",
                                                },
                                                map[string]interface{}{
                                                    "esse": "culpa",
                                                },
                                            },
                                            Timestamp: "officiis",
                                            Value: 25.100000,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "sequi": "aut",
                                                    "incidunt": "voluptatem",
                                                    "in": "ut",
                                                },
                                            },
                                            Timestamp: "hic",
                                            Value: 59.200001,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            1.100000,
                                            66.099998,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 30.200001,
                                        NumFiniteBuckets: 4489151812576496610,
                                        Scale: 10.100000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 4803395859386757678,
                                        Offset: 93.199997,
                                        Width: 3.200000,
                                    },
                                    Maximum: 27.100000,
                                    Mean: 91.199997,
                                    Minimum: 68.099998,
                                    SumOfSquaredDeviation: 45.200001,
                                },
                                DoubleValue: 42.099998,
                                EndTime: "mollitia",
                                Int64Value: "illo",
                                Labels: map[string]string{
                                    "et": "sed",
                                    "nihil": "sed",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "possimus",
                                    Nanos: 9215318233273722288,
                                    Units: "natus",
                                },
                                StartTime: "excepturi",
                                StringValue: "molestiae",
                            },
                            shared.MetricValue{
                                BoolValue: true,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "ex",
                                    },
                                    Count: "quis",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "quae": "nulla",
                                                    "tempore": "voluptatem",
                                                    "quis": "atque",
                                                },
                                            },
                                            Timestamp: "velit",
                                            Value: 94.199997,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "praesentium": "esse",
                                                },
                                                map[string]interface{}{
                                                    "occaecati": "totam",
                                                    "hic": "porro",
                                                },
                                            },
                                            Timestamp: "accusantium",
                                            Value: 96.199997,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "magnam": "quia",
                                                    "culpa": "et",
                                                },
                                            },
                                            Timestamp: "excepturi",
                                            Value: 24.200001,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            17.100000,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 92.199997,
                                        NumFiniteBuckets: 5101961278488963336,
                                        Scale: 95.199997,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 4395408437525443538,
                                        Offset: 52.200001,
                                        Width: 41.099998,
                                    },
                                    Maximum: 60.099998,
                                    Mean: 49.200001,
                                    Minimum: 18.200001,
                                    SumOfSquaredDeviation: 26.200001,
                                },
                                DoubleValue: 73.199997,
                                EndTime: "quis",
                                Int64Value: "officiis",
                                Labels: map[string]string{
                                    "suscipit": "eos",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "ut",
                                    Nanos: 2093816081299750366,
                                    Units: "aut",
                                },
                                StartTime: "eaque",
                                StringValue: "aspernatur",
                            },
                            shared.MetricValue{
                                BoolValue: true,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "qui",
                                    },
                                    Count: "voluptatem",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "omnis": "voluptatum",
                                                },
                                            },
                                            Timestamp: "et",
                                            Value: 22.200001,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "nesciunt": "aspernatur",
                                                    "est": "laudantium",
                                                },
                                                map[string]interface{}{
                                                    "earum": "et",
                                                    "facere": "maxime",
                                                    "quam": "alias",
                                                },
                                            },
                                            Timestamp: "et",
                                            Value: 74.199997,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            66.199997,
                                            93.199997,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 62.200001,
                                        NumFiniteBuckets: 8976415195523404681,
                                        Scale: 18.100000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 6815848899035582366,
                                        Offset: 61.200001,
                                        Width: 60.099998,
                                    },
                                    Maximum: 3.100000,
                                    Mean: 63.200001,
                                    Minimum: 49.099998,
                                    SumOfSquaredDeviation: 32.200001,
                                },
                                DoubleValue: 87.199997,
                                EndTime: "aut",
                                Int64Value: "excepturi",
                                Labels: map[string]string{
                                    "necessitatibus": "veniam",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "quasi",
                                    Nanos: 8414539977968286509,
                                    Units: "dolorum",
                                },
                                StartTime: "explicabo",
                                StringValue: "itaque",
                            },
                        },
                    },
                },
                QuotaMode: "ADJUST_ONLY",
            },
            ServiceConfigID: "velit",
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