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
    
    req := operations.PredictRequest{
        Security: operations.PredictSecurity{
            HTTPBearer: shared.SchemeHTTPBearer{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        PathParams: operations.PredictPathParams{
            Deployment: "sit",
            Namespace: "voluptas",
        },
        Request: operations.PredictRequests{
            ApplicationOctetStream: []byte("culpa"),
            SeldonMessage: &shared.SeldonMessage{
                BinData: "expedita",
                Data: &shared.DefaultData{
                    Names: []string{
                        "dolor",
                        "expedita",
                        "voluptas",
                    },
                    Ndarry: []interface{}{
                        "et",
                    },
                    Tensor: &shared.Tensor{
                        Shape: []int32{
                            8325060299420976708,
                        },
                        Values: []float64{
                            48.099998,
                            26.200001,
                            50.099998,
                        },
                    },
                    Tftensor: &shared.TensorflowTensorProto{
                        BoolVal: []bool{
                            true,
                        },
                        DcomplexVal: []float64{
                            66.099998,
                        },
                        DoubleVal: []float64{
                            86.099998,
                            20.200001,
                            12.200000,
                        },
                        Dtype: "DT_VARIANT",
                        FloatVal: []float32{
                            64.099998,
                            93.099998,
                            10.200000,
                        },
                        HalfVal: []int32{
                            4778690082005258714,
                        },
                        Int64Val: []string{
                            "illo",
                        },
                        IntVal: []int32{
                            7845762441295307478,
                            771642788862502430,
                            8514850266767180993,
                        },
                        ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                            shared.TensorflowResourceHandleProto{
                                Container: "odio",
                                Device: "qui",
                                HashCode: "recusandae",
                                MaybeTypeName: "at",
                                Name: "ipsum",
                            },
                        },
                        ScomplexVal: []float32{
                            19.100000,
                            77.099998,
                        },
                        StringVal: []string{
                            "aut",
                            "reprehenderit",
                            "tempore",
                        },
                        TensorContent: "maiores",
                        TensorShape: &shared.TensorflowTensorShapeProto{
                            Dim: []shared.TensorShapeProtoDim{
                                shared.TensorShapeProtoDim{
                                    Name: "dolor",
                                    Size: "beatae",
                                },
                                shared.TensorShapeProtoDim{
                                    Name: "veritatis",
                                    Size: "in",
                                },
                                shared.TensorShapeProtoDim{
                                    Name: "et",
                                    Size: "omnis",
                                },
                            },
                            UnknownRank: false,
                        },
                        Uint32Val: []int64{
                            7014402135919778893,
                        },
                        Uint64Val: []string{
                            "vel",
                        },
                        VariantVal: []shared.TensorflowVariantTensorDataProto{
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: "mollitia",
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{
                                    
                                    },
                                    shared.TensorflowTensorProto{
                                    
                                    },
                                },
                                TypeName: "quam",
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: "reprehenderit",
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{
                                    
                                    },
                                },
                                TypeName: "qui",
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: "unde",
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{
                                    
                                    },
                                    shared.TensorflowTensorProto{
                                    
                                    },
                                },
                                TypeName: "autem",
                            },
                        },
                        VersionNumber: 8086159467323165929,
                    },
                },
                Meta: &shared.Meta{
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Key: "itaque",
                            Type: "COUNTER",
                            Value: 90.099998,
                        },
                        shared.Metric{
                            Key: "et",
                            Type: "TIMER",
                            Value: 68.099998,
                        },
                        shared.Metric{
                            Key: "quam",
                            Type: "COUNTER",
                            Value: 20.100000,
                        },
                    },
                    Puid: "sunt",
                    RequestPath: map[string]string{
                        "magni": "et",
                        "optio": "qui",
                    },
                    Routing: map[string]int32{
                        "illo": 6215632031706852400,
                    },
                    Tags: map[string]interface{}{
                        "consequatur": "dolor",
                        "commodi": "error",
                    },
                },
                Status: &shared.Status{
                    Code: 150340687756601720,
                    Info: "consectetur",
                    Reason: "nostrum",
                    Status: "FAILURE",
                },
                StrData: "laboriosam",
            },
            String: "sed",
        },
    }
    
    res, err := s.ExternalAmbassadorAPI.Predict(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SeldonMessage != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->