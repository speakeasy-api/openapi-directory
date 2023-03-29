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

    req := operations.PredictJSONRequest{
        Security: operations.PredictJSONSecurity{
            HTTPBearer: shared.SchemeHTTPBearer{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        PathParams: operations.PredictJSONPathParams{
            Deployment: "unde",
            Namespace: "deserunt",
        },
        Request: shared.SeldonMessage{
            BinData: "porro",
            Data: &shared.DefaultData{
                Names: []string{
                    "id",
                    "vero",
                    "perspiciatis",
                    "nulla",
                },
                Ndarry: []interface{}{
                    "fuga",
                    "facilis",
                },
                Tensor: &shared.Tensor{
                    Shape: []int{
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
    }

    ctx := context.Background()
    res, err := s.ExternalAmbassadorAPI.PredictJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SeldonMessage != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->