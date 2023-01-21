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
    
    req := operations.Aggregate2Request{
        Request: operations.Aggregate2RequestBody{
            JSON: &shared.SeldonMessageList{
                SeldonMessages: []shared.SeldonMessage{
                    shared.SeldonMessage{
                        BinData: "voluptas",
                        Data: &shared.DefaultData{
                            Names: []string{
                                "expedita",
                                "consequuntur",
                            },
                            Ndarry: []interface{}{
                                "expedita",
                                "voluptas",
                            },
                            Tensor: &shared.Tensor{
                                Shape: []int32{
                                    1543572285742637646,
                                },
                                Values: []float64{
                                    47.200001,
                                },
                            },
                            Tftensor: &shared.TensorflowTensorProto{
                                BoolVal: []bool{
                                    true,
                                },
                                DcomplexVal: []float64{
                                    11.100000,
                                },
                                DoubleVal: []float64{
                                    94.199997,
                                    68.099998,
                                },
                                Dtype: "DT_UINT8",
                                FloatVal: []float32{
                                    86.099998,
                                    20.200001,
                                    12.200000,
                                },
                                HalfVal: []int32{
                                    1395437218309923052,
                                    6745438398739480977,
                                    2897681629866238117,
                                },
                                Int64Val: []string{
                                    "aut",
                                    "odit",
                                },
                                IntVal: []int32{
                                    167566062957544642,
                                    4778690082005258714,
                                    1059542851699319360,
                                },
                                ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                    shared.TensorflowResourceHandleProto{
                                        Container: "sed",
                                        Device: "officiis",
                                        HashCode: "autem",
                                        MaybeTypeName: "consectetur",
                                        Name: "nobis",
                                    },
                                },
                                ScomplexVal: []float32{
                                    77.099998,
                                },
                                StringVal: []string{
                                    "ipsum",
                                    "eveniet",
                                },
                                TensorContent: "modi",
                                TensorShape: &shared.TensorflowTensorShapeProto{
                                    Dim: []shared.TensorShapeProtoDim{
                                        shared.TensorShapeProtoDim{
                                            Name: "inventore",
                                            Size: "ut",
                                        },
                                    },
                                    UnknownRank: false,
                                },
                                Uint32Val: []int64{
                                    5837486892148644279,
                                    4736217237333769909,
                                    2264299874001785192,
                                },
                                Uint64Val: []string{
                                    "dolor",
                                    "beatae",
                                    "veritatis",
                                },
                                VariantVal: []shared.TensorflowVariantTensorDataProto{
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "et",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                        },
                                        TypeName: "ipsum",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "ex",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                        },
                                        TypeName: "placeat",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "vel",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                        },
                                        TypeName: "mollitia",
                                    },
                                },
                                VersionNumber: 1938800996802160635,
                            },
                        },
                        Meta: &shared.Meta{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Key: "reprehenderit",
                                    Type: "COUNTER",
                                    Value: 78.099998,
                                },
                            },
                            Puid: "in",
                            RequestPath: map[string]string{
                                "qui": "ut",
                                "itaque": "ab",
                            },
                            Routing: map[string]int32{
                                "ullam": 2682844416202521633,
                            },
                            Tags: map[string]interface{}{
                                "esse": "architecto",
                                "quam": "velit",
                                "cumque": "soluta",
                            },
                        },
                        Status: &shared.Status{
                            Code: 759605945513541974,
                            Info: "voluptates",
                            Reason: "magni",
                            Status: "FAILURE",
                        },
                        StrData: "optio",
                    },
                },
            },
        },
    }
    
    res, err := s.Internal.Aggregate2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SeldonMessage != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->