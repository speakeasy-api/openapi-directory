# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/seldon.local/wrapper/0.1/go
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

    req := operations.Aggregate2Request{
        Request: operations.Aggregate2RequestBody{
            JSON: &shared.SeldonMessageList{
                SeldonMessages: []shared.SeldonMessage{
                    shared.SeldonMessage{
                        BinData: "provident",
                        Data: &shared.DefaultData{
                            Names: []string{
                                "quibusdam",
                                "unde",
                                "nulla",
                            },
                            Ndarry: []interface{}{
                                "illum",
                                "vel",
                                "error",
                            },
                            Tensor: &shared.Tensor{
                                Shape: []int{
                                    384382,
                                    437587,
                                    297534,
                                },
                                Values: []float64{
                                    567.13,
                                    9636.63,
                                    2726.56,
                                    3834.41,
                                },
                            },
                            Tftensor: &shared.TensorflowTensorProto{
                                BoolVal: []bool{
                                    false,
                                    false,
                                },
                                DcomplexVal: []float64{
                                    8121.69,
                                    5288.95,
                                    4799.77,
                                    5680.45,
                                },
                                DoubleVal: []float64{
                                    9255.97,
                                    8360.79,
                                },
                                Dtype: "DT_INT32",
                                FloatVal: []float32{
                                    871.29,
                                    6481.72,
                                },
                                HalfVal: []int{
                                    368241,
                                },
                                Int64Val: []string{
                                    "sapiente",
                                    "quo",
                                    "odit",
                                    "at",
                                },
                                IntVal: []int{
                                    978619,
                                    473608,
                                    799159,
                                    800911,
                                },
                                ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                    shared.TensorflowResourceHandleProto{
                                        Container: "totam",
                                        Device: "porro",
                                        HashCode: "dolorum",
                                        MaybeTypeName: "dicta",
                                        Name: "nam",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "officia",
                                        Device: "occaecati",
                                        HashCode: "fugit",
                                        MaybeTypeName: "deleniti",
                                        Name: "hic",
                                    },
                                },
                                ScomplexVal: []float32{
                                    5218.48,
                                    1059.07,
                                    4146.62,
                                    4736,
                                },
                                StringVal: []string{
                                    "qui",
                                    "impedit",
                                },
                                TensorContent: "cum",
                                TensorShape: &shared.TensorflowTensorShapeProto{
                                    Dim: []shared.TensorShapeProtoDim{
                                        shared.TensorShapeProtoDim{
                                            Name: "ipsum",
                                            Size: "excepturi",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "aspernatur",
                                            Size: "perferendis",
                                        },
                                    },
                                    UnknownRank: false,
                                },
                                Uint32Val: []int64{
                                    617636,
                                    149675,
                                },
                                Uint64Val: []string{
                                    "dolor",
                                    "natus",
                                    "laboriosam",
                                },
                                VariantVal: []shared.TensorflowVariantTensorDataProto{
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "saepe",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "in",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "corporis",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "iure",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "saepe",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "architecto",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "ipsa",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "est",
                                    },
                                },
                                VersionNumber: 653140,
                            },
                        },
                        Meta: &shared.Meta{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Key: "dolores",
                                    Type: "COUNTER",
                                    Value: 3581.52,
                                },
                                shared.Metric{
                                    Key: "explicabo",
                                    Type: "TIMER",
                                    Value: 3154.28,
                                },
                                shared.Metric{
                                    Key: "omnis",
                                    Type: "GAUGE",
                                    Value: 3250.47,
                                },
                            },
                            Puid: "excepturi",
                            RequestPath: map[string]string{
                                "iure": "culpa",
                            },
                            Routing: map[string]int{
                                "sapiente": 102044,
                                "mollitia": 208876,
                                "culpa": 161309,
                                "repellat": 653108,
                            },
                            Tags: map[string]interface{}{
                                "numquam": "commodi",
                                "quam": "molestiae",
                                "velit": "error",
                            },
                        },
                        Status: &shared.Status{
                            Code: 158969,
                            Info: "quis",
                            Reason: "vitae",
                            Status: "FAILURE",
                        },
                        StrData: "animi",
                    },
                    shared.SeldonMessage{
                        BinData: "enim",
                        Data: &shared.DefaultData{
                            Names: []string{
                                "quo",
                            },
                            Ndarry: []interface{}{
                                "tenetur",
                            },
                            Tensor: &shared.Tensor{
                                Shape: []int{
                                    662527,
                                    820994,
                                },
                                Values: []float64{
                                    971.01,
                                },
                            },
                            Tftensor: &shared.TensorflowTensorProto{
                                BoolVal: []bool{
                                    false,
                                    false,
                                    false,
                                },
                                DcomplexVal: []float64{
                                    6736.6,
                                    960.98,
                                    9719.45,
                                    9764.6,
                                },
                                DoubleVal: []float64{
                                    4686.51,
                                    5096.24,
                                    9767.62,
                                    557.14,
                                },
                                Dtype: "DT_INT16_REF",
                                FloatVal: []float32{
                                    7392.64,
                                    199.87,
                                },
                                HalfVal: []int{
                                    441711,
                                },
                                Int64Val: []string{
                                    "maiores",
                                    "dicta",
                                },
                                IntVal: []int{
                                    296140,
                                    480894,
                                },
                                ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                    shared.TensorflowResourceHandleProto{
                                        Container: "harum",
                                        Device: "enim",
                                        HashCode: "accusamus",
                                        MaybeTypeName: "commodi",
                                        Name: "repudiandae",
                                    },
                                },
                                ScomplexVal: []float32{
                                    2168.22,
                                },
                                StringVal: []string{
                                    "molestias",
                                    "excepturi",
                                    "pariatur",
                                },
                                TensorContent: "modi",
                                TensorShape: &shared.TensorflowTensorShapeProto{
                                    Dim: []shared.TensorShapeProtoDim{
                                        shared.TensorShapeProtoDim{
                                            Name: "rem",
                                            Size: "voluptates",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "quasi",
                                            Size: "repudiandae",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "sint",
                                            Size: "veritatis",
                                        },
                                    },
                                    UnknownRank: false,
                                },
                                Uint32Val: []int64{
                                    277718,
                                    318569,
                                    9356,
                                    667411,
                                },
                                Uint64Val: []string{
                                    "explicabo",
                                    "deserunt",
                                    "distinctio",
                                    "quibusdam",
                                },
                                VariantVal: []shared.TensorflowVariantTensorDataProto{
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "modi",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "aliquid",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "cupiditate",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "perferendis",
                                    },
                                },
                                VersionNumber: 164940,
                            },
                        },
                        Meta: &shared.Meta{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Key: "ipsam",
                                    Type: "COUNTER",
                                    Value: 1464.41,
                                },
                                shared.Metric{
                                    Key: "dolorum",
                                    Type: "GAUGE",
                                    Value: 2700.08,
                                },
                                shared.Metric{
                                    Key: "facilis",
                                    Type: "TIMER",
                                    Value: 2884.76,
                                },
                                shared.Metric{
                                    Key: "delectus",
                                    Type: "GAUGE",
                                    Value: 2487.53,
                                },
                            },
                            Puid: "eligendi",
                            RequestPath: map[string]string{
                                "aliquid": "provident",
                                "necessitatibus": "sint",
                                "officia": "dolor",
                            },
                            Routing: map[string]int{
                                "a": 680056,
                                "in": 449198,
                                "illum": 978571,
                                "rerum": 116202,
                            },
                            Tags: map[string]interface{}{
                                "cumque": "facere",
                                "ea": "aliquid",
                            },
                        },
                        Status: &shared.Status{
                            Code: 675439,
                            Info: "accusamus",
                            Reason: "non",
                            Status: "FAILURE",
                        },
                        StrData: "enim",
                    },
                    shared.SeldonMessage{
                        BinData: "accusamus",
                        Data: &shared.DefaultData{
                            Names: []string{
                                "quidem",
                                "provident",
                                "nam",
                                "id",
                            },
                            Ndarry: []interface{}{
                                "deleniti",
                                "sapiente",
                                "amet",
                            },
                            Tensor: &shared.Tensor{
                                Shape: []int{
                                    394869,
                                    423855,
                                    618809,
                                },
                                Values: []float64{
                                    4748.67,
                                    191.93,
                                    4701.32,
                                },
                            },
                            Tftensor: &shared.TensorflowTensorProto{
                                BoolVal: []bool{
                                    false,
                                    false,
                                },
                                DcomplexVal: []float64{
                                    6601.74,
                                    2879.91,
                                    2900.77,
                                },
                                DoubleVal: []float64{
                                    6180.16,
                                    7491.7,
                                },
                                Dtype: "DT_RESOURCE",
                                FloatVal: []float32{
                                    1354.74,
                                    1028.63,
                                    2982.82,
                                    923.73,
                                },
                                HalfVal: []int{
                                    354047,
                                    590873,
                                    551816,
                                },
                                Int64Val: []string{
                                    "accusantium",
                                    "mollitia",
                                    "reiciendis",
                                },
                                IntVal: []int{
                                    320997,
                                    431418,
                                    221262,
                                },
                                ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                    shared.TensorflowResourceHandleProto{
                                        Container: "odit",
                                        Device: "nemo",
                                        HashCode: "quasi",
                                        MaybeTypeName: "iure",
                                        Name: "doloribus",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "debitis",
                                        Device: "eius",
                                        HashCode: "maxime",
                                        MaybeTypeName: "deleniti",
                                        Name: "facilis",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "in",
                                        Device: "architecto",
                                        HashCode: "architecto",
                                        MaybeTypeName: "repudiandae",
                                        Name: "ullam",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "expedita",
                                        Device: "nihil",
                                        HashCode: "repellat",
                                        MaybeTypeName: "quibusdam",
                                        Name: "sed",
                                    },
                                },
                                ScomplexVal: []float32{
                                    8681.26,
                                    375.59,
                                    1624.93,
                                    5083.15,
                                },
                                StringVal: []string{
                                    "magni",
                                    "sunt",
                                    "quo",
                                },
                                TensorContent: "illum",
                                TensorShape: &shared.TensorflowTensorShapeProto{
                                    Dim: []shared.TensorShapeProtoDim{
                                        shared.TensorShapeProtoDim{
                                            Name: "maxime",
                                            Size: "ea",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "excepturi",
                                            Size: "odit",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "ea",
                                            Size: "accusantium",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "ab",
                                            Size: "maiores",
                                        },
                                    },
                                    UnknownRank: false,
                                },
                                Uint32Val: []int64{
                                    373291,
                                    453543,
                                    420075,
                                },
                                Uint64Val: []string{
                                    "eaque",
                                    "pariatur",
                                    "nemo",
                                },
                                VariantVal: []shared.TensorflowVariantTensorDataProto{
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "perferendis",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "amet",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "aut",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "corporis",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "hic",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "nobis",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "dolores",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "totam",
                                    },
                                },
                                VersionNumber: 489549,
                            },
                        },
                        Meta: &shared.Meta{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Key: "quis",
                                    Type: "COUNTER",
                                    Value: 1794.9,
                                },
                            },
                            Puid: "perferendis",
                            RequestPath: map[string]string{
                                "minus": "quam",
                            },
                            Routing: map[string]int{
                                "vero": 345352,
                            },
                            Tags: map[string]interface{}{
                                "recusandae": "omnis",
                                "facilis": "perspiciatis",
                                "voluptatem": "porro",
                                "consequuntur": "blanditiis",
                            },
                        },
                        Status: &shared.Status{
                            Code: 621479,
                            Info: "eaque",
                            Reason: "occaecati",
                            Status: "FAILURE",
                        },
                        StrData: "adipisci",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Internal.Aggregate2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SeldonMessage != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Internal

* `Aggregate2`
* `Route`
* `SendFeedback`
* `TransformInput`
* `TransformInput3`
* `TransformOutput`
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
