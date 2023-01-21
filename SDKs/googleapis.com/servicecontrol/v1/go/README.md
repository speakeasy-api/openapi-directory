# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            ServiceName: "sit",
        },
        QueryParams: operations.ServicecontrolServicesAllocateQuotaQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.AllocateQuotaRequest{
            AllocateOperation: &shared.QuotaOperation{
                ConsumerID: "dicta",
                Labels: map[string]string{
                    "voluptatum": "et",
                },
                MethodName: "ut",
                OperationID: "dolorem",
                QuotaMetrics: []shared.MetricValueSet{
                    shared.MetricValueSet{
                        MetricName: "voluptate",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: true,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "dolores",
                                        "illum",
                                        "debitis",
                                    },
                                    Count: "vel",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "aspernatur": "accusantium",
                                                    "totam": "commodi",
                                                },
                                                map[string]interface{}{
                                                    "est": "aut",
                                                    "odit": "non",
                                                    "voluptas": "omnis",
                                                },
                                            },
                                            Timestamp: "aut",
                                            Value: 76.099998,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            87.099998,
                                            0.100000,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 77.099998,
                                        NumFiniteBuckets: 7561811714888168464,
                                        Scale: 74.099998,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 303089054982227392,
                                        Offset: 0.200000,
                                        Width: 94.099998,
                                    },
                                    Maximum: 4.100000,
                                    Mean: 7.200000,
                                    Minimum: 78.099998,
                                    SumOfSquaredDeviation: 23.200001,
                                },
                                DoubleValue: 80.199997,
                                EndTime: "omnis",
                                Int64Value: "ipsum",
                                Labels: map[string]string{
                                    "dolores": "placeat",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "vel",
                                    Nanos: 2587000937929698613,
                                    Units: "mollitia",
                                },
                                StartTime: "voluptas",
                                StringValue: "quam",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "qui",
                                    },
                                    Count: "unde",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ut": "itaque",
                                                },
                                                map[string]interface{}{
                                                    "neque": "ullam",
                                                },
                                            },
                                            Timestamp: "et",
                                            Value: 40.099998,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "velit": "cumque",
                                                },
                                                map[string]interface{}{
                                                    "sunt": "voluptates",
                                                },
                                            },
                                            Timestamp: "magni",
                                            Value: 9.200000,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            59.200001,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 6.100000,
                                        NumFiniteBuckets: 7442289190031176026,
                                        Scale: 32.099998,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 1925401661646756611,
                                        Offset: 19.200001,
                                        Width: 59.200001,
                                    },
                                    Maximum: 64.099998,
                                    Mean: 53.200001,
                                    Minimum: 28.100000,
                                    SumOfSquaredDeviation: 48.200001,
                                },
                                DoubleValue: 73.199997,
                                EndTime: "expedita",
                                Int64Value: "doloremque",
                                Labels: map[string]string{
                                    "atque": "ratione",
                                    "quisquam": "explicabo",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "ea",
                                    Nanos: 2629911606854649819,
                                    Units: "eum",
                                },
                                StartTime: "perferendis",
                                StringValue: "et",
                            },
                            shared.MetricValue{
                                BoolValue: true,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quis",
                                        "cumque",
                                        "minima",
                                    },
                                    Count: "necessitatibus",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "labore": "et",
                                                },
                                                map[string]interface{}{
                                                    "ad": "expedita",
                                                    "vel": "qui",
                                                },
                                                map[string]interface{}{
                                                    "nihil": "tempora",
                                                    "deserunt": "eaque",
                                                },
                                            },
                                            Timestamp: "sunt",
                                            Value: 68.099998,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "vel": "placeat",
                                                    "qui": "nisi",
                                                },
                                                map[string]interface{}{
                                                    "adipisci": "porro",
                                                    "rerum": "et",
                                                    "accusamus": "numquam",
                                                },
                                                map[string]interface{}{
                                                    "rerum": "ut",
                                                    "laborum": "fugit",
                                                    "quis": "minus",
                                                },
                                            },
                                            Timestamp: "soluta",
                                            Value: 68.199997,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            52.099998,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 29.200001,
                                        NumFiniteBuckets: 8997481548049309375,
                                        Scale: 86.099998,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 8003520668589102978,
                                        Offset: 95.099998,
                                        Width: 83.099998,
                                    },
                                    Maximum: 30.100000,
                                    Mean: 42.099998,
                                    Minimum: 99.099998,
                                    SumOfSquaredDeviation: 22.100000,
                                },
                                DoubleValue: 46.200001,
                                EndTime: "sit",
                                Int64Value: "possimus",
                                Labels: map[string]string{
                                    "neque": "consequuntur",
                                    "quia": "et",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "est",
                                    Nanos: 6028661030721431741,
                                    Units: "ex",
                                },
                                StartTime: "voluptatem",
                                StringValue: "quia",
                            },
                        },
                    },
                    shared.MetricValueSet{
                        MetricName: "temporibus",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "ut",
                                        "necessitatibus",
                                    },
                                    Count: "in",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "doloribus": "saepe",
                                                },
                                                map[string]interface{}{
                                                    "earum": "et",
                                                    "ut": "asperiores",
                                                },
                                                map[string]interface{}{
                                                    "est": "ipsum",
                                                },
                                            },
                                            Timestamp: "quam",
                                            Value: 63.099998,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "impedit": "non",
                                                    "magnam": "ut",
                                                },
                                            },
                                            Timestamp: "possimus",
                                            Value: 16.200001,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ducimus": "enim",
                                                    "blanditiis": "distinctio",
                                                    "delectus": "rerum",
                                                },
                                                map[string]interface{}{
                                                    "repellat": "velit",
                                                    "officia": "modi",
                                                },
                                            },
                                            Timestamp: "sunt",
                                            Value: 30.100000,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            32.099998,
                                            30.200001,
                                            3.100000,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 73.199997,
                                        NumFiniteBuckets: 5492620638782281201,
                                        Scale: 19.100000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 7110471015351200494,
                                        Offset: 48.200001,
                                        Width: 7.100000,
                                    },
                                    Maximum: 43.200001,
                                    Mean: 98.099998,
                                    Minimum: 74.099998,
                                    SumOfSquaredDeviation: 55.099998,
                                },
                                DoubleValue: 40.200001,
                                EndTime: "illum",
                                Int64Value: "accusantium",
                                Labels: map[string]string{
                                    "amet": "nisi",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "quidem",
                                    Nanos: 2803265238606586800,
                                    Units: "quo",
                                },
                                StartTime: "vero",
                                StringValue: "alias",
                            },
                        },
                    },
                },
                QuotaMode: "NORMAL",
            },
            ServiceConfigID: "deserunt",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `ServicecontrolServicesAllocateQuota` - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* `ServicecontrolServicesCheck` - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* `ServicecontrolServicesReport` - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
