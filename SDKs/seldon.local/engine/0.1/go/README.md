# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/seldon.local/engine/0.1/go
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

    req := operations.PredictJSONRequest{
        SeldonMessage: shared.SeldonMessage{
            BinData: "corrupti",
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
        Deployment: "enim",
        Namespace: "odit",
    }

    ctx := context.Background()
    res, err := s.ExternalAmbassadorAPI.PredictJSON(ctx, req, operations.PredictJSONSecurity{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ExternalAmbassadorAPI

* `PredictJSON`
* `PredictRaw`
* `PredictString`
* `SendFeedback`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
