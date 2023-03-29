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
                        BinData: "deserunt",
                        Data: &shared.DefaultData{
                            Names: []string{
                                "nulla",
                                "id",
                                "vero",
                            },
                            Ndarry: []interface{}{
                                "nulla",
                                "nihil",
                                "fuga",
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
                                    "a",
                                    "omnis",
                                    "eos",
                                    "accusamus",
                                },
                                IntVal: []int{
                                    978619,
                                    473608,
                                    799159,
                                    800911,
                                },
                                ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                    shared.TensorflowResourceHandleProto{
                                        Container: "occaecati",
                                        Device: "dolor",
                                        HashCode: "soluta",
                                        MaybeTypeName: "sed",
                                        Name: "quisquam",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "rerum",
                                        Device: "culpa",
                                        HashCode: "qui",
                                        MaybeTypeName: "sed",
                                        Name: "rerum",
                                    },
                                },
                                ScomplexVal: []float32{
                                    5218.48,
                                    1059.07,
                                    4146.62,
                                    4736,
                                },
                                StringVal: []string{
                                    "amet",
                                    "est",
                                },
                                TensorContent: "id",
                                TensorShape: &shared.TensorflowTensorShapeProto{
                                    Dim: []shared.TensorShapeProtoDim{
                                        shared.TensorShapeProtoDim{
                                            Name: "numquam",
                                            Size: "similique",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "dolores",
                                            Size: "sit",
                                        },
                                    },
                                    UnknownRank: false,
                                },
                                Uint32Val: []int64{
                                    617636,
                                    149675,
                                },
                                Uint64Val: []string{
                                    "modi",
                                    "et",
                                    "iure",
                                },
                                VariantVal: []shared.TensorflowVariantTensorDataProto{
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "ut",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "qui",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "ea",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "iusto",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "ut",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "aspernatur",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "inventore",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "libero",
                                    },
                                },
                                VersionNumber: 653140,
                            },
                        },
                        Meta: &shared.Meta{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Key: "ipsum",
                                    Type: "COUNTER",
                                    Value: 3581.52,
                                },
                                shared.Metric{
                                    Key: "magni",
                                    Type: "TIMER",
                                    Value: 3154.28,
                                },
                                shared.Metric{
                                    Key: "est",
                                    Type: "GAUGE",
                                    Value: 3250.47,
                                },
                            },
                            Puid: "similique",
                            RequestPath: map[string]string{
                                "odio": "harum",
                            },
                            Routing: map[string]int{
                                "a": 102044,
                                "et": 208876,
                                "quidem": 161309,
                                "asperiores": 653108,
                            },
                            Tags: map[string]interface{}{
                                "aliquam": "esse",
                                "totam": "voluptatum",
                                "et": "fuga",
                            },
                        },
                        Status: &shared.Status{
                            Code: 158969,
                            Info: "laboriosam",
                            Reason: "aut",
                            Status: "FAILURE",
                        },
                        StrData: "expedita",
                    },
                    shared.SeldonMessage{
                        BinData: "ipsam",
                        Data: &shared.DefaultData{
                            Names: []string{
                                "omnis",
                            },
                            Ndarry: []interface{}{
                                "hic",
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
                                    "reiciendis",
                                    "sed",
                                },
                                IntVal: []int{
                                    296140,
                                    480894,
                                },
                                ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                    shared.TensorflowResourceHandleProto{
                                        Container: "est",
                                        Device: "voluptatem",
                                        HashCode: "aut",
                                        MaybeTypeName: "esse",
                                        Name: "sint",
                                    },
                                },
                                ScomplexVal: []float32{
                                    2168.22,
                                },
                                StringVal: []string{
                                    "error",
                                    "similique",
                                    "et",
                                },
                                TensorContent: "ut",
                                TensorShape: &shared.TensorflowTensorShapeProto{
                                    Dim: []shared.TensorShapeProtoDim{
                                        shared.TensorShapeProtoDim{
                                            Name: "cupiditate",
                                            Size: "sint",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "explicabo",
                                            Size: "et",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "in",
                                            Size: "vitae",
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
                                    "magni",
                                    "est",
                                    "porro",
                                    "voluptas",
                                },
                                VariantVal: []shared.TensorflowVariantTensorDataProto{
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "voluptatem",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "in",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "officia",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "voluptatem",
                                    },
                                },
                                VersionNumber: 164940,
                            },
                        },
                        Meta: &shared.Meta{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Key: "quis",
                                    Type: "COUNTER",
                                    Value: 1464.41,
                                },
                                shared.Metric{
                                    Key: "cum",
                                    Type: "GAUGE",
                                    Value: 2700.08,
                                },
                                shared.Metric{
                                    Key: "nihil",
                                    Type: "TIMER",
                                    Value: 2884.76,
                                },
                                shared.Metric{
                                    Key: "sapiente",
                                    Type: "GAUGE",
                                    Value: 2487.53,
                                },
                            },
                            Puid: "possimus",
                            RequestPath: map[string]string{
                                "qui": "deserunt",
                                "eveniet": "sunt",
                                "rerum": "modi",
                            },
                            Routing: map[string]int{
                                "tenetur": 680056,
                                "ducimus": 449198,
                                "nulla": 978571,
                                "cumque": 116202,
                            },
                            Tags: map[string]interface{}{
                                "voluptas": "vel",
                                "velit": "qui",
                            },
                        },
                        Status: &shared.Status{
                            Code: 675439,
                            Info: "aut",
                            Reason: "magnam",
                            Status: "FAILURE",
                        },
                        StrData: "enim",
                    },
                    shared.SeldonMessage{
                        BinData: "aut",
                        Data: &shared.DefaultData{
                            Names: []string{
                                "eligendi",
                                "officia",
                                "est",
                                "distinctio",
                            },
                            Ndarry: []interface{}{
                                "provident",
                                "a",
                                "incidunt",
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
                                    "aperiam",
                                    "et",
                                    "ut",
                                },
                                IntVal: []int{
                                    320997,
                                    431418,
                                    221262,
                                },
                                ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                    shared.TensorflowResourceHandleProto{
                                        Container: "qui",
                                        Device: "consequatur",
                                        HashCode: "aspernatur",
                                        MaybeTypeName: "iusto",
                                        Name: "maiores",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "saepe",
                                        Device: "quaerat",
                                        HashCode: "aut",
                                        MaybeTypeName: "sed",
                                        Name: "nihil",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "ducimus",
                                        Device: "aspernatur",
                                        HashCode: "aspernatur",
                                        MaybeTypeName: "sint",
                                        Name: "aliquid",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "quo",
                                        Device: "totam",
                                        HashCode: "repellat",
                                        MaybeTypeName: "voluptas",
                                        Name: "voluptatem",
                                    },
                                },
                                ScomplexVal: []float32{
                                    8681.26,
                                    375.59,
                                    1624.93,
                                    5083.15,
                                },
                                StringVal: []string{
                                    "dolorem",
                                    "quia",
                                    "omnis",
                                },
                                TensorContent: "pariatur",
                                TensorShape: &shared.TensorflowTensorShapeProto{
                                    Dim: []shared.TensorShapeProtoDim{
                                        shared.TensorShapeProtoDim{
                                            Name: "consequatur",
                                            Size: "velit",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "similique",
                                            Size: "eos",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "voluptate",
                                            Size: "aperiam",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "quasi",
                                            Size: "voluptatibus",
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
                                    "ab",
                                    "et",
                                    "consequatur",
                                },
                                VariantVal: []shared.TensorflowVariantTensorDataProto{
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "sit",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "incidunt",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "aut",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "ea",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "rerum",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "placeat",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "ipsum",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{},
                                            shared.TensorflowTensorProto{},
                                        },
                                        TypeName: "occaecati",
                                    },
                                },
                                VersionNumber: 489549,
                            },
                        },
                        Meta: &shared.Meta{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Key: "laboriosam",
                                    Type: "COUNTER",
                                    Value: 1794.9,
                                },
                            },
                            Puid: "sit",
                            RequestPath: map[string]string{
                                "autem": "laudantium",
                            },
                            Routing: map[string]int{
                                "officiis": 345352,
                            },
                            Tags: map[string]interface{}{
                                "non": "est",
                                "nihil": "mollitia",
                                "doloremque": "repellendus",
                                "dolorem": "et",
                            },
                        },
                        Status: &shared.Status{
                            Code: 621479,
                            Info: "ab",
                            Reason: "in",
                            Status: "FAILURE",
                        },
                        StrData: "labore",
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
