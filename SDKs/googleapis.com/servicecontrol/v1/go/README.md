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
            ServiceName: "corrupti",
        },
        QueryParams: operations.ServicecontrolServicesAllocateQuotaQueryParams{
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
        Request: &shared.AllocateQuotaRequest{
            AllocateOperation: &shared.QuotaOperation{
                ConsumerID: "suscipit",
                Labels: map[string]string{
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                MethodName: "tempora",
                OperationID: "suscipit",
                QuotaMetrics: []shared.MetricValueSet{
                    shared.MetricValueSet{
                        MetricName: "minus",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "iusto",
                                        "excepturi",
                                        "nisi",
                                    },
                                    Count: "recusandae",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "veritatis": "deserunt",
                                                    "perferendis": "ipsam",
                                                },
                                            },
                                            Timestamp: "repellendus",
                                            Value: 9571.56,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "at": "at",
                                                },
                                                map[string]interface{}{
                                                    "molestiae": "quod",
                                                    "quod": "esse",
                                                    "totam": "porro",
                                                    "dolorum": "dicta",
                                                },
                                                map[string]interface{}{
                                                    "officia": "occaecati",
                                                    "fugit": "deleniti",
                                                    "hic": "optio",
                                                },
                                                map[string]interface{}{
                                                    "beatae": "commodi",
                                                    "molestiae": "modi",
                                                    "qui": "impedit",
                                                },
                                            },
                                            Timestamp: "cum",
                                            Value: 4561.5,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "aspernatur": "perferendis",
                                                    "ad": "natus",
                                                    "sed": "iste",
                                                },
                                            },
                                            Timestamp: "dolor",
                                            Value: 6169.34,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "saepe": "fuga",
                                                    "in": "corporis",
                                                    "iste": "iure",
                                                    "saepe": "quidem",
                                                },
                                                map[string]interface{}{
                                                    "ipsa": "reiciendis",
                                                },
                                            },
                                            Timestamp: "est",
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
                                EndTime: "sapiente",
                                Int64Value: "architecto",
                                Labels: map[string]string{
                                    "dolorem": "culpa",
                                    "consequuntur": "repellat",
                                    "mollitia": "occaecati",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "numquam",
                                    Nanos: 414369,
                                    Units: "quam",
                                },
                                StartTime: "molestiae",
                                StringValue: "velit",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quia",
                                        "quis",
                                        "vitae",
                                    },
                                    Count: "laborum",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "quo": "sequi",
                                                },
                                                map[string]interface{}{
                                                    "ipsam": "id",
                                                    "possimus": "aut",
                                                    "quasi": "error",
                                                    "temporibus": "laborum",
                                                },
                                            },
                                            Timestamp: "quasi",
                                            Value: 9719.45,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "nihil": "praesentium",
                                                    "voluptatibus": "ipsa",
                                                    "omnis": "voluptate",
                                                    "cum": "perferendis",
                                                },
                                                map[string]interface{}{
                                                    "reprehenderit": "ut",
                                                },
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
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "facere",
                                        "ea",
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
                        },
                    },
                    shared.MetricValueSet{
                        MetricName: "delectus",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "aliquid",
                                        "dolorem",
                                        "dolorem",
                                    },
                                    Count: "dolor",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "excepturi": "cum",
                                                    "voluptate": "dignissimos",
                                                    "reiciendis": "amet",
                                                    "dolorum": "numquam",
                                                },
                                            },
                                            Timestamp: "veritatis",
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
                                EndTime: "ab",
                                Int64Value: "soluta",
                                Labels: map[string]string{
                                    "iusto": "voluptate",
                                    "dolorum": "deleniti",
                                    "omnis": "necessitatibus",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "distinctio",
                                    Nanos: 990339,
                                    Units: "nihil",
                                },
                                StartTime: "ipsum",
                                StringValue: "voluptate",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "saepe",
                                        "eius",
                                        "aspernatur",
                                    },
                                    Count: "perferendis",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ad": "saepe",
                                                    "suscipit": "deserunt",
                                                    "provident": "minima",
                                                    "repellendus": "totam",
                                                },
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
                                EndTime: "dicta",
                                Int64Value: "laborum",
                                Labels: map[string]string{
                                    "incidunt": "aspernatur",
                                    "dolores": "distinctio",
                                    "facilis": "aliquid",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "quam",
                                    Nanos: 565421,
                                    Units: "temporibus",
                                },
                                StartTime: "qui",
                                StringValue: "neque",
                            },
                        },
                    },
                },
                QuotaMode: "UNSPECIFIED",
            },
            ServiceConfigID: "magni",
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
