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
    res, err := s.Internal.Aggregate2(ctx, operations.Aggregate2RequestBody{
        JSON: &shared.SeldonMessageList{
            SeldonMessages: []shared.SeldonMessage{
                shared.SeldonMessage{
                    BinData: sdk.String("provident"),
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
                shared.SeldonMessage{
                    BinData: sdk.String("quasi"),
                    Data: &shared.DefaultData{
                        Names: []string{
                            "temporibus",
                            "laborum",
                            "quasi",
                        },
                        Ndarry: []interface{}{
                            "voluptatibus",
                            "vero",
                            "nihil",
                            "praesentium",
                        },
                        Tensor: &shared.Tensor{
                            Shape: []int{
                                55714,
                                604846,
                                451159,
                                739264,
                            },
                            Values: []float64{
                                391.87,
                            },
                        },
                        Tftensor: &shared.TensorflowTensorProto{
                            BoolVal: []bool{
                                false,
                                false,
                            },
                            DcomplexVal: []float64{
                                9795.87,
                                1201.96,
                            },
                            DoubleVal: []float64{
                                2961.4,
                                4808.94,
                            },
                            Dtype: shared.TensorflowDataTypeEnumDtInt16.ToPointer(),
                            FloatVal: []float32{
                                3179.83,
                                8804.76,
                                4142.63,
                            },
                            HalfVal: []int{
                                64147,
                                216822,
                                692472,
                                565189,
                            },
                            Int64Val: []string{
                                "pariatur",
                                "modi",
                                "praesentium",
                            },
                            IntVal: []int{
                                916723,
                                93940,
                                921158,
                            },
                            ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("veritatis"),
                                    Device: sdk.String("itaque"),
                                    HashCode: sdk.String("incidunt"),
                                    MaybeTypeName: sdk.String("enim"),
                                    Name: sdk.String("Monique Spinka"),
                                },
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("distinctio"),
                                    Device: sdk.String("quibusdam"),
                                    HashCode: sdk.String("labore"),
                                    MaybeTypeName: sdk.String("modi"),
                                    Name: sdk.String("Beth McGlynn Sr."),
                                },
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("assumenda"),
                                    Device: sdk.String("ipsam"),
                                    HashCode: sdk.String("alias"),
                                    MaybeTypeName: sdk.String("fugit"),
                                    Name: sdk.String("Marshall Glover"),
                                },
                            },
                            ScomplexVal: []float32{
                                9621.89,
                                4332.88,
                            },
                            StringVal: []string{
                                "eligendi",
                            },
                            TensorContent: sdk.String("sint"),
                            TensorShape: &shared.TensorflowTensorShapeProto{
                                Dim: []shared.TensorShapeProtoDim{
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Terence Marquardt"),
                                        Size: sdk.String("debitis"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Wilbur King"),
                                        Size: sdk.String("maiores"),
                                    },
                                },
                                UnknownRank: sdk.Bool(false),
                            },
                            Uint32Val: []int64{
                                116202,
                                297437,
                                767024,
                            },
                            Uint64Val: []string{
                                "ea",
                                "aliquid",
                                "laborum",
                                "accusamus",
                            },
                            VariantVal: []shared.TensorflowVariantTensorDataProto{
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("occaecati"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("accusamus"),
                                },
                            },
                            VersionNumber: sdk.Int(965417),
                        },
                    },
                    Meta: &shared.Meta{
                        Metrics: []shared.Metric{
                            shared.Metric{
                                Key: sdk.String("provident"),
                                Type: shared.MetricTypeEnumTimer.ToPointer(),
                                Value: sdk.Float32(6596.69),
                            },
                            shared.Metric{
                                Key: sdk.String("blanditiis"),
                                Type: shared.MetricTypeEnumGauge.ToPointer(),
                                Value: sdk.Float32(9560.84),
                            },
                            shared.Metric{
                                Key: sdk.String("amet"),
                                Type: shared.MetricTypeEnumGauge.ToPointer(),
                                Value: sdk.Float32(3948.69),
                            },
                        },
                        Puid: sdk.String("vel"),
                        RequestPath: map[string]string{
                            "omnis": "molestiae",
                            "perferendis": "nihil",
                            "magnam": "distinctio",
                        },
                        Routing: map[string]int{
                            "labore": 290077,
                            "suscipit": 618016,
                            "nobis": 428769,
                        },
                        Tags: map[string]interface{}{
                            "aspernatur": "architecto",
                            "magnam": "et",
                            "excepturi": "ullam",
                            "provident": "quos",
                        },
                    },
                    Status: &shared.Status{
                        Code: sdk.Int(574325),
                        Info: sdk.String("accusantium"),
                        Reason: sdk.String("mollitia"),
                        Status: shared.StatusStatusFlagEnumFailure.ToPointer(),
                    },
                    StrData: sdk.String("mollitia"),
                },
                shared.SeldonMessage{
                    BinData: sdk.String("ad"),
                    Data: &shared.DefaultData{
                        Names: []string{
                            "dolor",
                            "necessitatibus",
                        },
                        Ndarry: []interface{}{
                            "nemo",
                        },
                        Tensor: &shared.Tensor{
                            Shape: []int{
                                435865,
                            },
                            Values: []float64{
                                8919.24,
                                2603.41,
                                8061.94,
                                5370.23,
                            },
                        },
                        Tftensor: &shared.TensorflowTensorProto{
                            BoolVal: []bool{
                                false,
                                false,
                                false,
                            },
                            DcomplexVal: []float64{
                                1002.26,
                                995.69,
                            },
                            DoubleVal: []float64{
                                3523.12,
                                7142.42,
                                4692.49,
                                9988.48,
                            },
                            Dtype: shared.TensorflowDataTypeEnumDtQuint16Ref.ToPointer(),
                            FloatVal: []float32{
                                9046.48,
                            },
                            HalfVal: []int{
                                37559,
                                162493,
                                508315,
                                615560,
                            },
                            Int64Val: []string{
                                "sunt",
                            },
                            IntVal: []int{
                                848009,
                                864934,
                                807319,
                                411397,
                            },
                            ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("odit"),
                                    Device: sdk.String("ea"),
                                    HashCode: sdk.String("accusantium"),
                                    MaybeTypeName: sdk.String("ab"),
                                    Name: sdk.String("Rickey Hintz"),
                                },
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("nam"),
                                    Device: sdk.String("eaque"),
                                    HashCode: sdk.String("pariatur"),
                                    MaybeTypeName: sdk.String("nemo"),
                                    Name: sdk.String("Joseph Steuber DDS"),
                                },
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("corporis"),
                                    Device: sdk.String("hic"),
                                    HashCode: sdk.String("libero"),
                                    MaybeTypeName: sdk.String("nobis"),
                                    Name: sdk.String("Beatrice Lebsack II"),
                                },
                            },
                            ScomplexVal: []float32{
                                1794.9,
                            },
                            StringVal: []string{
                                "dolores",
                            },
                            TensorContent: sdk.String("minus"),
                            TensorShape: &shared.TensorflowTensorShapeProto{
                                Dim: []shared.TensorShapeProtoDim{
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Eula Hegmann"),
                                        Size: sdk.String("omnis"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Freddie Bartoletti"),
                                        Size: sdk.String("blanditiis"),
                                    },
                                },
                                UnknownRank: sdk.Bool(false),
                            },
                            Uint32Val: []int64{
                                50370,
                                577229,
                                699098,
                            },
                            Uint64Val: []string{
                                "asperiores",
                            },
                            VariantVal: []shared.TensorflowVariantTensorDataProto{
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("modi"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("dolorum"),
                                },
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("deleniti"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("provident"),
                                },
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("nobis"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("delectus"),
                                },
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("quaerat"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("aliquid"),
                                },
                            },
                            VersionNumber: sdk.Int(212390),
                        },
                    },
                    Meta: &shared.Meta{
                        Metrics: []shared.Metric{
                            shared.Metric{
                                Key: sdk.String("dolor"),
                                Type: shared.MetricTypeEnumCounter.ToPointer(),
                                Value: sdk.Float32(2187.49),
                            },
                        },
                        Puid: sdk.String("hic"),
                        RequestPath: map[string]string{
                            "cum": "voluptate",
                            "dignissimos": "reiciendis",
                            "amet": "dolorum",
                        },
                        Routing: map[string]int{
                            "veritatis": 58029,
                            "ipsa": 434417,
                        },
                        Tags: map[string]interface{}{
                            "quaerat": "accusamus",
                            "quidem": "voluptatibus",
                        },
                    },
                    Status: &shared.Status{
                        Code: sdk.Int(377752),
                        Info: sdk.String("natus"),
                        Reason: sdk.String("eos"),
                        Status: shared.StatusStatusFlagEnumFailure.ToPointer(),
                    },
                    StrData: sdk.String("sit"),
                },
            },
        },
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


### [Internal](docs/internal/README.md)

* [Aggregate2](docs/internal/README.md#aggregate2)
* [Route](docs/internal/README.md#route)
* [SendFeedback](docs/internal/README.md#sendfeedback)
* [TransformInput](docs/internal/README.md#transforminput)
* [TransformInput3](docs/internal/README.md#transforminput3)
* [TransformOutput](docs/internal/README.md#transformoutput)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
