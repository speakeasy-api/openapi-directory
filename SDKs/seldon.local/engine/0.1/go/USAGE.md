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
            Deployment: "corrupti",
            Namespace: "provident",
        },
        Request: shared.SeldonMessage{
            BinData: "distinctio",
            Data: &shared.DefaultData{
                Names: []string{
                    "unde",
                    "nulla",
                    "corrupti",
                    "illum",
                },
                Ndarray: []interface{}{
                    "error",
                    "deserunt",
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