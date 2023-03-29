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
            ServiceName: "unde",
        },
        QueryParams: operations.ServicecontrolServicesAllocateQuotaQueryParams{
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
        Request: &shared.AllocateQuotaRequest{
            AllocateOperation: &shared.QuotaOperation{
                ConsumerID: "eum",
                Labels: map[string]string{
                    "ullam": "saepe",
                    "inventore": "sapiente",
                },
                MethodName: "enim",
                OperationID: "eum",
                QuotaMetrics: []shared.MetricValueSet{
                    shared.MetricValueSet{
                        MetricName: "autem",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "deleniti",
                                        "similique",
                                        "reprehenderit",
                                    },
                                    Count: "molestiae",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "dicta": "est",
                                                    "voluptatem": "consequatur",
                                                },
                                            },
                                            Timestamp: "fugiat",
                                            Value: 9571.56,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "accusamus": "accusamus",
                                                },
                                                map[string]interface{}{
                                                    "rem": "quibusdam",
                                                    "et": "praesentium",
                                                    "occaecati": "dolor",
                                                    "soluta": "sed",
                                                },
                                                map[string]interface{}{
                                                    "rerum": "culpa",
                                                    "qui": "sed",
                                                    "rerum": "possimus",
                                                },
                                                map[string]interface{}{
                                                    "odit": "esse",
                                                    "rem": "voluptatem",
                                                    "amet": "est",
                                                },
                                            },
                                            Timestamp: "id",
                                            Value: 4561.5,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "dolores": "sit",
                                                    "quia": "et",
                                                    "voluptatem": "laborum",
                                                },
                                            },
                                            Timestamp: "modi",
                                            Value: 6169.34,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ut": "soluta",
                                                    "qui": "ea",
                                                    "laborum": "iusto",
                                                    "ut": "optio",
                                                },
                                                map[string]interface{}{
                                                    "inventore": "ut",
                                                },
                                            },
                                            Timestamp: "libero",
                                            Value: 6531.4,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            1709.09,
                                            2103.82,
                                            3581.52,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 1289.26,
                                        NumFiniteBuckets: 750686,
                                        Scale: 3154.28,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 607831,
                                        Offset: 3637.11,
                                        Width: 3250.47,
                                    },
                                    Maximum: 5701.97,
                                    Mean: 384.25,
                                    Minimum: 4386.01,
                                    SumOfSquaredDeviation: 6342.74,
                                },
                                DoubleValue: 9883.74,
                                EndTime: "a",
                                Int64Value: "aut",
                                Labels: map[string]string{
                                    "non": "quidem",
                                    "neque": "asperiores",
                                    "et": "culpa",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "aliquam",
                                    Nanos: 414369,
                                    Units: "totam",
                                },
                                StartTime: "voluptatum",
                                StringValue: "et",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "nesciunt",
                                        "laboriosam",
                                        "aut",
                                    },
                                    Count: "cum",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "omnis": "adipisci",
                                                },
                                                map[string]interface{}{
                                                    "consequatur": "distinctio",
                                                    "qui": "perferendis",
                                                    "aspernatur": "fuga",
                                                    "quo": "tempore",
                                                },
                                            },
                                            Timestamp: "explicabo",
                                            Value: 9719.45,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "totam": "molestias",
                                                    "reiciendis": "illo",
                                                    "id": "qui",
                                                    "quod": "sit",
                                                },
                                                map[string]interface{}{
                                                    "odio": "veniam",
                                                },
                                                map[string]interface{}{
                                                    "sed": "ea",
                                                    "exercitationem": "deleniti",
                                                    "sed": "est",
                                                    "voluptatem": "aut",
                                                },
                                                map[string]interface{}{
                                                    "sint": "veritatis",
                                                    "numquam": "eligendi",
                                                },
                                            },
                                            Timestamp: "error",
                                            Value: 5666.02,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "molestias": "cupiditate",
                                                    "sint": "explicabo",
                                                },
                                                map[string]interface{}{
                                                    "in": "vitae",
                                                    "non": "minima",
                                                    "voluptatem": "aut",
                                                    "libero": "voluptas",
                                                },
                                                map[string]interface{}{
                                                    "est": "porro",
                                                },
                                                map[string]interface{}{
                                                    "nostrum": "voluptatem",
                                                    "sit": "in",
                                                    "officia": "omnis",
                                                    "voluptatem": "dolorem",
                                                },
                                            },
                                            Timestamp: "eum",
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
                                EndTime: "qui",
                                Int64Value: "deserunt",
                                Labels: map[string]string{
                                    "sunt": "rerum",
                                    "modi": "necessitatibus",
                                    "tenetur": "soluta",
                                    "ducimus": "ducimus",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "nulla",
                                    Nanos: 978571,
                                    Units: "cumque",
                                },
                                StartTime: "fugit",
                                StringValue: "ullam",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "vel",
                                        "velit",
                                        "qui",
                                        "cum",
                                    },
                                    Count: "aut",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "aut": "delectus",
                                                    "eligendi": "officia",
                                                },
                                                map[string]interface{}{
                                                    "distinctio": "et",
                                                    "provident": "a",
                                                    "incidunt": "facilis",
                                                },
                                                map[string]interface{}{
                                                    "nihil": "dolorum",
                                                    "id": "voluptatum",
                                                },
                                            },
                                            Timestamp: "sit",
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
                                EndTime: "similique",
                                Int64Value: "ex",
                                Labels: map[string]string{
                                    "omnis": "in",
                                    "aperiam": "et",
                                    "ut": "et",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "voluptatem",
                                    Nanos: 431418,
                                    Units: "modi",
                                },
                                StartTime: "eveniet",
                                StringValue: "qui",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "aspernatur",
                                        "iusto",
                                    },
                                    Count: "maiores",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "sed": "nihil",
                                                    "ducimus": "aspernatur",
                                                    "aspernatur": "sint",
                                                    "aliquid": "quo",
                                                },
                                                map[string]interface{}{
                                                    "repellat": "voluptas",
                                                    "voluptatem": "et",
                                                },
                                            },
                                            Timestamp: "accusamus",
                                            Value: 375.59,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "et": "dolorem",
                                                    "quia": "omnis",
                                                    "pariatur": "et",
                                                },
                                            },
                                            Timestamp: "consequatur",
                                            Value: 4113.97,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "voluptate": "aperiam",
                                                },
                                                map[string]interface{}{
                                                    "voluptatibus": "optio",
                                                },
                                                map[string]interface{}{
                                                    "qui": "quam",
                                                    "quisquam": "ab",
                                                },
                                            },
                                            Timestamp: "et",
                                            Value: 3654.96,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "vero": "incidunt",
                                                },
                                                map[string]interface{}{
                                                    "voluptas": "ea",
                                                },
                                                map[string]interface{}{
                                                    "qui": "placeat",
                                                    "ipsum": "laboriosam",
                                                    "occaecati": "corrupti",
                                                    "illo": "laboriosam",
                                                },
                                                map[string]interface{}{
                                                    "dolor": "sit",
                                                },
                                            },
                                            Timestamp: "ipsum",
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
                                EndTime: "ab",
                                Int64Value: "in",
                                Labels: map[string]string{
                                    "labore": "asperiores",
                                    "recusandae": "ut",
                                    "laborum": "soluta",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "sed",
                                    Nanos: 864282,
                                    Units: "officia",
                                },
                                StartTime: "placeat",
                                StringValue: "qui",
                            },
                        },
                    },
                    shared.MetricValueSet{
                        MetricName: "delectus",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "in",
                                        "non",
                                        "non",
                                    },
                                    Count: "modi",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "similique": "quod",
                                                    "qui": "quos",
                                                    "ut": "tempora",
                                                    "soluta": "aliquam",
                                                },
                                            },
                                            Timestamp: "dicta",
                                            Value: 580.29,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            4344.17,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 4878.38,
                                        NumFiniteBuckets: 311796,
                                        Scale: 8810.05,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 696344,
                                        Offset: 9764.05,
                                        Width: 3777.52,
                                    },
                                    Maximum: 6176.58,
                                    Mean: 1796.03,
                                    Minimum: 5424.99,
                                    SumOfSquaredDeviation: 246.78,
                                },
                                DoubleValue: 8546.14,
                                EndTime: "et",
                                Int64Value: "maxime",
                                Labels: map[string]string{
                                    "deleniti": "qui",
                                    "cum": "sed",
                                    "est": "eveniet",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "quo",
                                    Nanos: 990339,
                                    Units: "totam",
                                },
                                StartTime: "eius",
                                StringValue: "blanditiis",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "et",
                                        "voluptatem",
                                        "eos",
                                    },
                                    Count: "voluptatem",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "voluptatem": "et",
                                                    "eum": "facilis",
                                                    "officia": "quia",
                                                    "eum": "occaecati",
                                                },
                                                map[string]interface{}{
                                                    "alias": "officiis",
                                                    "enim": "ad",
                                                    "nihil": "quibusdam",
                                                },
                                                map[string]interface{}{
                                                    "amet": "soluta",
                                                    "tenetur": "blanditiis",
                                                    "est": "atque",
                                                    "numquam": "temporibus",
                                                },
                                                map[string]interface{}{
                                                    "incidunt": "qui",
                                                    "aut": "aliquam",
                                                    "ipsam": "numquam",
                                                    "a": "occaecati",
                                                },
                                            },
                                            Timestamp: "rem",
                                            Value: 256.62,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            2074.7,
                                            1536.94,
                                            4246.85,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 7304.42,
                                        NumFiniteBuckets: 374170,
                                        Scale: 6462.65,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 463575,
                                        Offset: 2148.8,
                                        Width: 2776.28,
                                    },
                                    Maximum: 1864.58,
                                    Mean: 5867.84,
                                    Minimum: 8075.81,
                                    SumOfSquaredDeviation: 8638.56,
                                },
                                DoubleValue: 7470.8,
                                EndTime: "sed",
                                Int64Value: "cum",
                                Labels: map[string]string{
                                    "ad": "magni",
                                    "quia": "porro",
                                    "nihil": "qui",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "laudantium",
                                    Nanos: 565421,
                                    Units: "voluptas",
                                },
                                StartTime: "sit",
                                StringValue: "quia",
                            },
                        },
                    },
                },
                QuotaMode: "UNSPECIFIED",
            },
            ServiceConfigID: "dolorem",
        },
    }

    ctx := context.Background()
    res, err := s.Services.ServicecontrolServicesAllocateQuota(ctx, req)
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
## SDK Available Operations


### Services

* `ServicecontrolServicesAllocateQuota` - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* `ServicecontrolServicesCheck` - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* `ServicecontrolServicesReport` - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
