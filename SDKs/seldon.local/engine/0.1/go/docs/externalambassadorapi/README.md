# ExternalAmbassadorAPI

### Available Operations

* [PredictJSON](#predictjson)
* [PredictRaw](#predictraw)
* [PredictString](#predictstring)
* [SendFeedback](#sendfeedback)

## PredictJSON

### Example Usage

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
            BinData: sdk.String("temporibus"),
            Data: &shared.DefaultData{
                Names: []string{
                    "quasi",
                    "reiciendis",
                    "voluptatibus",
                },
                Ndarray: []interface{}{
                    "nihil",
                    "praesentium",
                    "voluptatibus",
                    "ipsa",
                },
                Tensor: &shared.Tensor{
                    Shape: []int{
                        451159,
                        739264,
                        19987,
                    },
                    Values: []float64{
                        4417.11,
                    },
                },
                Tftensor: &shared.TensorflowTensorProto{
                    BoolVal: []bool{
                        false,
                        false,
                    },
                    DcomplexVal: []float64{
                        1201.96,
                        3594.44,
                        2961.4,
                        4808.94,
                    },
                    DoubleVal: []float64{
                        6886.61,
                    },
                    Dtype: shared.TensorflowDataTypeEnumDtBfloat16.ToPointer(),
                    FloatVal: []float32{
                        4142.63,
                        9182.36,
                        641.47,
                        2168.22,
                    },
                    HalfVal: []int{
                        565189,
                        566602,
                        865103,
                    },
                    Int64Val: []string{
                        "praesentium",
                        "rem",
                    },
                    IntVal: []int{
                        93940,
                        921158,
                        575947,
                        83112,
                    },
                    ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("incidunt"),
                            Device: sdk.String("enim"),
                            HashCode: sdk.String("consequatur"),
                            MaybeTypeName: sdk.String("est"),
                            Name: sdk.String("Benjamin O'Connell"),
                        },
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("labore"),
                            Device: sdk.String("modi"),
                            HashCode: sdk.String("qui"),
                            MaybeTypeName: sdk.String("aliquid"),
                            Name: sdk.String("Isaac Aufderhar"),
                        },
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("ipsam"),
                            Device: sdk.String("alias"),
                            HashCode: sdk.String("fugit"),
                            MaybeTypeName: sdk.String("dolorum"),
                            Name: sdk.String("Eddie Prosacco"),
                        },
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("delectus"),
                            Device: sdk.String("eum"),
                            HashCode: sdk.String("non"),
                            MaybeTypeName: sdk.String("eligendi"),
                            Name: sdk.String("Gilbert Medhurst"),
                        },
                    },
                    ScomplexVal: []float32{
                        2230.81,
                        8915.55,
                        9527.49,
                    },
                    StringVal: []string{
                        "in",
                        "in",
                        "illum",
                    },
                    TensorContent: sdk.String("maiores"),
                    TensorShape: &shared.TensorflowTensorShapeProto{
                        Dim: []shared.TensorShapeProtoDim{
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Valerie Runolfsson"),
                                Size: sdk.String("aliquid"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Tomas Friesen"),
                                Size: sdk.String("accusamus"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Abraham McKenzie"),
                                Size: sdk.String("blanditiis"),
                            },
                        },
                        UnknownRank: sdk.Bool(false),
                    },
                    Uint32Val: []int64{
                        956084,
                        230533,
                        643990,
                    },
                    Uint64Val: []string{
                        "vel",
                        "natus",
                    },
                    VariantVal: []shared.TensorflowVariantTensorDataProto{
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("molestiae"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("nihil"),
                        },
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("magnam"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("id"),
                        },
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("labore"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("suscipit"),
                        },
                    },
                    VersionNumber: sdk.Int(618016),
                },
            },
            Meta: &shared.Meta{
                Metrics: []shared.Metric{
                    shared.Metric{
                        Key: sdk.String("eum"),
                        Type: shared.MetricTypeEnumTimer.ToPointer(),
                        Value: sdk.Float32(1354.74),
                    },
                    shared.Metric{
                        Key: sdk.String("architecto"),
                        Type: shared.MetricTypeEnumCounter.ToPointer(),
                        Value: sdk.Float32(923.73),
                    },
                    shared.Metric{
                        Key: sdk.String("excepturi"),
                        Type: shared.MetricTypeEnumGauge.ToPointer(),
                        Value: sdk.Float32(5908.73),
                    },
                },
                Puid: sdk.String("quos"),
                RequestPath: map[string]string{
                    "accusantium": "mollitia",
                    "reiciendis": "mollitia",
                    "ad": "eum",
                },
                Routing: map[string]int{
                    "necessitatibus": 141264,
                },
                Tags: map[string]interface{}{
                    "quasi": "iure",
                    "doloribus": "debitis",
                },
            },
            Status: &shared.Status{
                Code: sdk.Int(260341),
                Info: sdk.String("maxime"),
                Reason: sdk.String("deleniti"),
                Status: shared.StatusStatusFlagEnumFailure.ToPointer(),
            },
            StrData: sdk.String("in"),
        },
        Deployment: "architecto",
        Namespace: "architecto",
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

## PredictRaw

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ExternalAmbassadorAPI.PredictRaw(ctx, operations.PredictRawRequest{
        RequestBody: []byte("repudiandae"),
        Deployment: "ullam",
        Namespace: "expedita",
    }, operations.PredictRawSecurity{
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

## PredictString

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ExternalAmbassadorAPI.PredictString(ctx, operations.PredictStringRequest{
        RequestBody: "nihil",
        Deployment: "repellat",
        Namespace: "quibusdam",
    }, operations.PredictStringSecurity{
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

## SendFeedback

### Example Usage

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
    res, err := s.ExternalAmbassadorAPI.SendFeedback(ctx, operations.SendFeedbackRequest{
        Feedback: shared.Feedback{
            Request: &shared.SeldonMessage{
                BinData: sdk.String("sed"),
                Data: &shared.DefaultData{
                    Names: []string{
                        "pariatur",
                        "accusantium",
                        "consequuntur",
                        "praesentium",
                    },
                    Ndarray: []interface{}{
                        "magni",
                        "sunt",
                        "quo",
                    },
                    Tensor: &shared.Tensor{
                        Shape: []int{
                            864934,
                            807319,
                            411397,
                            569101,
                        },
                        Values: []float64{
                            4071.83,
                        },
                    },
                    Tftensor: &shared.TensorflowTensorProto{
                        BoolVal: []bool{
                            false,
                        },
                        DcomplexVal: []float64{
                            9825.75,
                        },
                        DoubleVal: []float64{
                            3732.91,
                            4535.43,
                            4200.75,
                        },
                        Dtype: shared.TensorflowDataTypeEnumDtBoolRef.ToPointer(),
                        FloatVal: []float32{
                            8663.83,
                        },
                        HalfVal: []int{
                            975522,
                            16627,
                        },
                        Int64Val: []string{
                            "amet",
                            "aut",
                            "cumque",
                            "corporis",
                        },
                        IntVal: []int{
                            729991,
                            749999,
                            171629,
                            339404,
                        },
                        ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("dignissimos"),
                                Device: sdk.String("eaque"),
                                HashCode: sdk.String("quis"),
                                MaybeTypeName: sdk.String("nesciunt"),
                                Name: sdk.String("Dorothy Dach"),
                            },
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("dolor"),
                                Device: sdk.String("vero"),
                                HashCode: sdk.String("nostrum"),
                                MaybeTypeName: sdk.String("hic"),
                                Name: sdk.String("Alejandro Purdy DDS"),
                            },
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("consequuntur"),
                                Device: sdk.String("blanditiis"),
                                HashCode: sdk.String("error"),
                                MaybeTypeName: sdk.String("eaque"),
                                Name: sdk.String("Jean Ferry"),
                            },
                        },
                        ScomplexVal: []float32{
                            6139.66,
                            6790.91,
                        },
                        StringVal: []string{
                            "pariatur",
                            "provident",
                            "nobis",
                        },
                        TensorContent: sdk.String("libero"),
                        TensorShape: &shared.TensorflowTensorShapeProto{
                            Dim: []shared.TensorShapeProtoDim{
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Billie Jacobi"),
                                    Size: sdk.String("dolor"),
                                },
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Tiffany Welch"),
                                    Size: sdk.String("voluptate"),
                                },
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Johanna Farrell"),
                                    Size: sdk.String("veritatis"),
                                },
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Angela Kerluke"),
                                    Size: sdk.String("accusamus"),
                                },
                            },
                            UnknownRank: sdk.Bool(false),
                        },
                        Uint32Val: []int64{
                            976405,
                            377752,
                            617658,
                        },
                        Uint64Val: []string{
                            "atque",
                        },
                        VariantVal: []shared.TensorflowVariantTensorDataProto{
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("fugiat"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("soluta"),
                            },
                        },
                        VersionNumber: sdk.Int(679393),
                    },
                },
                Meta: &shared.Meta{
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Key: sdk.String("voluptate"),
                            Type: shared.MetricTypeEnumTimer.ToPointer(),
                            Value: sdk.Float32(5365.79),
                        },
                        shared.Metric{
                            Key: sdk.String("omnis"),
                            Type: shared.MetricTypeEnumTimer.ToPointer(),
                            Value: sdk.Float32(7146.97),
                        },
                    },
                    Puid: sdk.String("asperiores"),
                    RequestPath: map[string]string{
                        "ipsum": "voluptate",
                        "id": "saepe",
                    },
                    Routing: map[string]int{
                        "aspernatur": 20651,
                        "amet": 758379,
                    },
                    Tags: map[string]interface{}{
                        "ad": "saepe",
                        "suscipit": "deserunt",
                        "provident": "minima",
                        "repellendus": "totam",
                    },
                },
                Status: &shared.Status{
                    Code: sdk.Int(628982),
                    Info: sdk.String("alias"),
                    Reason: sdk.String("at"),
                    Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
                },
                StrData: sdk.String("tempora"),
            },
            Response: &shared.SeldonMessage{
                BinData: sdk.String("vel"),
                Data: &shared.DefaultData{
                    Names: []string{
                        "officiis",
                        "qui",
                        "dolorum",
                        "a",
                    },
                    Ndarray: []interface{}{
                        "harum",
                        "iusto",
                    },
                    Tensor: &shared.Tensor{
                        Shape: []int{
                            788740,
                        },
                        Values: []float64{
                            2294.42,
                            7308.56,
                            8802.98,
                            2539.41,
                        },
                    },
                    Tftensor: &shared.TensorflowTensorProto{
                        BoolVal: []bool{
                            false,
                            false,
                        },
                        DcomplexVal: []float64{
                            9574.51,
                        },
                        DoubleVal: []float64{
                            4717.52,
                            256.62,
                            7115.84,
                        },
                        Dtype: shared.TensorflowDataTypeEnumDtInt64.ToPointer(),
                        FloatVal: []float32{
                            4246.85,
                        },
                        HalfVal: []int{
                            374170,
                            646265,
                            463575,
                        },
                        Int64Val: []string{
                            "incidunt",
                        },
                        IntVal: []int{
                            586784,
                        },
                        ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("pariatur"),
                                Device: sdk.String("soluta"),
                                HashCode: sdk.String("dicta"),
                                MaybeTypeName: sdk.String("laborum"),
                                Name: sdk.String("Randall Cole"),
                            },
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("facilis"),
                                Device: sdk.String("aliquid"),
                                HashCode: sdk.String("quam"),
                                MaybeTypeName: sdk.String("molestias"),
                                Name: sdk.String("Shawn Doyle"),
                            },
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("odio"),
                                Device: sdk.String("sunt"),
                                HashCode: sdk.String("ullam"),
                                MaybeTypeName: sdk.String("nam"),
                                Name: sdk.String("George Runolfsdottir"),
                            },
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("et"),
                                Device: sdk.String("saepe"),
                                HashCode: sdk.String("ipsum"),
                                MaybeTypeName: sdk.String("veritatis"),
                                Name: sdk.String("Isaac Reynolds DVM"),
                            },
                        },
                        ScomplexVal: []float32{
                            2921.47,
                        },
                        StringVal: []string{
                            "adipisci",
                            "dolorum",
                        },
                        TensorContent: sdk.String("architecto"),
                        TensorShape: &shared.TensorflowTensorShapeProto{
                            Dim: []shared.TensorShapeProtoDim{
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Miss Billie Ward"),
                                    Size: sdk.String("porro"),
                                },
                            },
                            UnknownRank: sdk.Bool(false),
                        },
                        Uint32Val: []int64{
                            281730,
                            703495,
                            586410,
                            181631,
                        },
                        Uint64Val: []string{
                            "laudantium",
                        },
                        VariantVal: []shared.TensorflowVariantTensorDataProto{
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("occaecati"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("quisquam"),
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("vero"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("quis"),
                            },
                        },
                        VersionNumber: sdk.Int(218403),
                    },
                },
                Meta: &shared.Meta{
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Key: sdk.String("voluptate"),
                            Type: shared.MetricTypeEnumCounter.ToPointer(),
                            Value: sdk.Float32(8788.7),
                        },
                        shared.Metric{
                            Key: sdk.String("tenetur"),
                            Type: shared.MetricTypeEnumGauge.ToPointer(),
                            Value: sdk.Float32(9413.78),
                        },
                        shared.Metric{
                            Key: sdk.String("distinctio"),
                            Type: shared.MetricTypeEnumTimer.ToPointer(),
                            Value: sdk.Float32(4861.6),
                        },
                        shared.Metric{
                            Key: sdk.String("similique"),
                            Type: shared.MetricTypeEnumTimer.ToPointer(),
                            Value: sdk.Float32(8742.88),
                        },
                    },
                    Puid: sdk.String("ducimus"),
                    RequestPath: map[string]string{
                        "quibusdam": "illum",
                        "sequi": "natus",
                    },
                    Routing: map[string]int{
                        "aut": 974259,
                        "exercitationem": 862310,
                        "fugit": 780427,
                        "maiores": 985033,
                    },
                    Tags: map[string]interface{}{
                        "eligendi": "ducimus",
                        "alias": "officia",
                    },
                },
                Status: &shared.Status{
                    Code: sdk.Int(269479),
                    Info: sdk.String("ipsam"),
                    Reason: sdk.String("ea"),
                    Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
                },
                StrData: sdk.String("vel"),
            },
            Reward: sdk.Float32(8221.18),
            Truth: &shared.SeldonMessage{
                BinData: sdk.String("magnam"),
                Data: &shared.DefaultData{
                    Names: []string{
                        "ex",
                    },
                    Ndarray: []interface{}{
                        "dicta",
                        "dolor",
                        "maiores",
                    },
                    Tensor: &shared.Tensor{
                        Shape: []int{
                            406120,
                        },
                        Values: []float64{
                            5692.11,
                            9729.2,
                            3436.05,
                            9608.35,
                        },
                    },
                    Tftensor: &shared.TensorflowTensorProto{
                        BoolVal: []bool{
                            false,
                            false,
                            false,
                            false,
                        },
                        DcomplexVal: []float64{
                            4113.72,
                            7740.48,
                            3592.71,
                            3331.45,
                        },
                        DoubleVal: []float64{
                            811.01,
                            3018.31,
                        },
                        Dtype: shared.TensorflowDataTypeEnumDtHalf.ToPointer(),
                        FloatVal: []float32{
                            2322.34,
                            9262.13,
                            1324.87,
                            3253.1,
                        },
                        HalfVal: []int{
                            952871,
                        },
                        Int64Val: []string{
                            "aut",
                            "aut",
                            "deleniti",
                        },
                        IntVal: []int{
                            304582,
                            146946,
                            882860,
                            79522,
                        },
                        ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("et"),
                                Device: sdk.String("dolorum"),
                                HashCode: sdk.String("laborum"),
                                MaybeTypeName: sdk.String("placeat"),
                                Name: sdk.String("Agnes Johnston"),
                            },
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("assumenda"),
                                Device: sdk.String("nulla"),
                                HashCode: sdk.String("voluptas"),
                                MaybeTypeName: sdk.String("libero"),
                                Name: sdk.String("Anita Gerhold"),
                            },
                        },
                        ScomplexVal: []float32{
                            4764.77,
                        },
                        StringVal: []string{
                            "odio",
                            "eius",
                        },
                        TensorContent: sdk.String("esse"),
                        TensorShape: &shared.TensorflowTensorShapeProto{
                            Dim: []shared.TensorShapeProtoDim{
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Blake Kihn"),
                                    Size: sdk.String("ut"),
                                },
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Yolanda Shields"),
                                    Size: sdk.String("quisquam"),
                                },
                            },
                            UnknownRank: sdk.Bool(false),
                        },
                        Uint32Val: []int64{
                            56848,
                        },
                        Uint64Val: []string{
                            "quidem",
                            "neque",
                            "quo",
                        },
                        VariantVal: []shared.TensorflowVariantTensorDataProto{
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("quo"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("eius"),
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("eos"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("ab"),
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("cupiditate"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("tempora"),
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("debitis"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("aspernatur"),
                            },
                        },
                        VersionNumber: sdk.Int(197054),
                    },
                },
                Meta: &shared.Meta{
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Key: sdk.String("esse"),
                            Type: shared.MetricTypeEnumTimer.ToPointer(),
                            Value: sdk.Float32(446.12),
                        },
                        shared.Metric{
                            Key: sdk.String("distinctio"),
                            Type: shared.MetricTypeEnumTimer.ToPointer(),
                            Value: sdk.Float32(4908.19),
                        },
                        shared.Metric{
                            Key: sdk.String("inventore"),
                            Type: shared.MetricTypeEnumGauge.ToPointer(),
                            Value: sdk.Float32(5188.35),
                        },
                        shared.Metric{
                            Key: sdk.String("accusamus"),
                            Type: shared.MetricTypeEnumCounter.ToPointer(),
                            Value: sdk.Float32(4884.1),
                        },
                    },
                    Puid: sdk.String("occaecati"),
                    RequestPath: map[string]string{
                        "sapiente": "dolores",
                        "deserunt": "molestiae",
                    },
                    Routing: map[string]int{
                        "porro": 430402,
                    },
                    Tags: map[string]interface{}{
                        "praesentium": "consequuntur",
                        "deleniti": "fugit",
                        "fuga": "mollitia",
                    },
                },
                Status: &shared.Status{
                    Code: sdk.Int(277596),
                    Info: sdk.String("atque"),
                    Reason: sdk.String("explicabo"),
                    Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
                },
                StrData: sdk.String("nisi"),
            },
        },
        Deployment: "fugit",
        Namespace: "sapiente",
    }, operations.SendFeedbackSecurity{
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
