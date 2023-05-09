<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ExternalAmbassadorAPI.PredictJSON(ctx, operations.PredictJSONRequest{
        SeldonMessage: shared.SeldonMessage{
            BinData: sdk.String("corrupti"),
            Data: &shared.DefaultData{
                Names: []string{
                    "distinctio",
                    "quibusdam",
                    "unde",
                },
                Ndarray: []interface{}{
                    "corrupti",
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
                    Dtype: shared.TensorflowDataTypeEnumDtInt32.ToPointer(),
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
                            Container: sdk.String("totam"),
                            Device: sdk.String("porro"),
                            HashCode: sdk.String("dolorum"),
                            MaybeTypeName: sdk.String("dicta"),
                            Name: sdk.String("Luke McCullough"),
                        },
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("hic"),
                            Device: sdk.String("optio"),
                            HashCode: sdk.String("totam"),
                            MaybeTypeName: sdk.String("beatae"),
                            Name: sdk.String("Tanya Gleason"),
                        },
                    },
                    ScomplexVal: []float32{
                        4561.5,
                        2165.5,
                        5684.34,
                    },
                    StringVal: []string{
                        "perferendis",
                    },
                    TensorContent: sdk.String("ad"),
                    TensorShape: &shared.TensorflowTensorShapeProto{
                        Dim: []shared.TensorShapeProtoDim{
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Sheryl Fadel"),
                                Size: sdk.String("hic"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Wilbur Kirlin"),
                                Size: sdk.String("iure"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Dr. Rickey Boyle"),
                                Size: sdk.String("mollitia"),
                            },
                        },
                        UnknownRank: sdk.Bool(false),
                    },
                    Uint32Val: []int64{
                        170909,
                        210382,
                        358152,
                    },
                    Uint64Val: []string{
                        "nobis",
                    },
                    VariantVal: []shared.TensorflowVariantTensorDataProto{
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("omnis"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("minima"),
                        },
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("excepturi"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("iure"),
                        },
                    },
                    VersionNumber: sdk.Int(634274),
                },
            },
            Meta: &shared.Meta{
                Metrics: []shared.Metric{
                    shared.Metric{
                        Key: sdk.String("sapiente"),
                        Type: shared.MetricTypeEnumCounter.ToPointer(),
                        Value: sdk.Float32(6527.9),
                    },
                    shared.Metric{
                        Key: sdk.String("dolorem"),
                        Type: shared.MetricTypeEnumGauge.ToPointer(),
                        Value: sdk.Float32(1613.09),
                    },
                    shared.Metric{
                        Key: sdk.String("repellat"),
                        Type: shared.MetricTypeEnumGauge.ToPointer(),
                        Value: sdk.Float32(5818.5),
                    },
                    shared.Metric{
                        Key: sdk.String("numquam"),
                        Type: shared.MetricTypeEnumGauge.ToPointer(),
                        Value: sdk.Float32(4663.11),
                    },
                },
                Puid: sdk.String("molestiae"),
                RequestPath: map[string]string{
                    "error": "quia",
                },
                Routing: map[string]int{
                    "vitae": 674752,
                    "animi": 317202,
                },
                Tags: map[string]interface{}{
                    "quo": "sequi",
                },
            },
            Status: &shared.Status{
                Code: sdk.Int(949572),
                Info: sdk.String("ipsam"),
                Reason: sdk.String("id"),
                Status: shared.StatusStatusFlagEnumFailure.ToPointer(),
            },
            StrData: sdk.String("aut"),
        },
        Deployment: "quasi",
        Namespace: "error",
    }, operations.PredictJSONSecurity{
        HTTPBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SeldonMessage != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->