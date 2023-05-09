# Internal

### Available Operations

* [Aggregate2](#aggregate2)
* [Route](#route)
* [SendFeedback](#sendfeedback)
* [TransformInput](#transforminput)
* [TransformInput3](#transforminput3)
* [TransformOutput](#transformoutput)

## Aggregate2

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
    res, err := s.Internal.Aggregate2(ctx, operations.Aggregate2RequestBody{
        JSON: &shared.SeldonMessageList{
            SeldonMessages: []shared.SeldonMessage{
                shared.SeldonMessage{
                    BinData: sdk.String("ab"),
                    Data: &shared.DefaultData{
                        Names: []string{
                            "dolorum",
                            "iusto",
                            "voluptate",
                        },
                        Ndarry: []interface{}{
                            "deleniti",
                            "omnis",
                            "necessitatibus",
                        },
                        Tensor: &shared.Tensor{
                            Shape: []int{
                                990339,
                                469497,
                                216897,
                            },
                            Values: []float64{
                                6630.78,
                                9064.18,
                            },
                        },
                        Tftensor: &shared.TensorflowTensorProto{
                            BoolVal: []bool{
                                false,
                                false,
                            },
                            DcomplexVal: []float64{
                                206.51,
                            },
                            DoubleVal: []float64{
                                7583.79,
                            },
                            Dtype: shared.TensorflowDataTypeEnumDtComplex128Ref.ToPointer(),
                            FloatVal: []float32{
                                9044.25,
                                3834.64,
                            },
                            HalfVal: []int{
                                588317,
                                324683,
                                831049,
                            },
                            Int64Val: []string{
                                "similique",
                                "alias",
                                "at",
                            },
                            IntVal: []int{
                                273542,
                                425451,
                            },
                            ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("officiis"),
                                    Device: sdk.String("qui"),
                                    HashCode: sdk.String("dolorum"),
                                    MaybeTypeName: sdk.String("a"),
                                    Name: sdk.String("Fannie Kub"),
                                },
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("tenetur"),
                                    Device: sdk.String("amet"),
                                    HashCode: sdk.String("tempore"),
                                    MaybeTypeName: sdk.String("accusamus"),
                                    Name: sdk.String("Darlene Effertz"),
                                },
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("nihil"),
                                    Device: sdk.String("sit"),
                                    HashCode: sdk.String("expedita"),
                                    MaybeTypeName: sdk.String("neque"),
                                    Name: sdk.String("Gina Renner"),
                                },
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("quam"),
                                    Device: sdk.String("ipsum"),
                                    HashCode: sdk.String("incidunt"),
                                    MaybeTypeName: sdk.String("qui"),
                                    Name: sdk.String("Simon Stracke MD"),
                                },
                            },
                            ScomplexVal: []float32{
                                2768.94,
                                1320.68,
                                1749.09,
                            },
                            StringVal: []string{
                                "facilis",
                                "aliquid",
                                "quam",
                            },
                            TensorContent: sdk.String("molestias"),
                            TensorShape: &shared.TensorflowTensorShapeProto{
                                Dim: []shared.TensorShapeProtoDim{
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Gladys Considine"),
                                        Size: sdk.String("sunt"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Miss Candice Weimann"),
                                        Size: sdk.String("nobis"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Miss Kerry Emmerich"),
                                        Size: sdk.String("tempore"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Kevin Willms"),
                                        Size: sdk.String("labore"),
                                    },
                                },
                                UnknownRank: sdk.Bool(false),
                            },
                            Uint32Val: []int64{
                                677263,
                            },
                            Uint64Val: []string{
                                "quae",
                            },
                            VariantVal: []shared.TensorflowVariantTensorDataProto{
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("quas"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("consequatur"),
                                },
                            },
                            VersionNumber: sdk.Int(669917),
                        },
                    },
                    Meta: &shared.Meta{
                        Metrics: []shared.Metric{
                            shared.Metric{
                                Key: sdk.String("porro"),
                                Type: shared.MetricTypeEnumTimer.ToPointer(),
                                Value: sdk.Float32(2817.3),
                            },
                            shared.Metric{
                                Key: sdk.String("facilis"),
                                Type: shared.MetricTypeEnumGauge.ToPointer(),
                                Value: sdk.Float32(1816.31),
                            },
                            shared.Metric{
                                Key: sdk.String("quae"),
                                Type: shared.MetricTypeEnumGauge.ToPointer(),
                                Value: sdk.Float32(4856.28),
                            },
                            shared.Metric{
                                Key: sdk.String("occaecati"),
                                Type: shared.MetricTypeEnumTimer.ToPointer(),
                                Value: sdk.Float32(7875.42),
                            },
                        },
                        Puid: sdk.String("vero"),
                        RequestPath: map[string]string{
                            "quis": "ipsum",
                            "delectus": "voluptate",
                            "consectetur": "vero",
                        },
                        Routing: map[string]int{
                            "dignissimos": 941378,
                            "distinctio": 799203,
                            "odio": 630448,
                            "facilis": 874288,
                        },
                        Tags: map[string]interface{}{
                            "dolore": "quibusdam",
                            "illum": "sequi",
                        },
                    },
                    Status: &shared.Status{
                        Code: sdk.Int(617877),
                        Info: sdk.String("impedit"),
                        Reason: sdk.String("aut"),
                        Status: shared.StatusStatusFlagEnumFailure.ToPointer(),
                    },
                    StrData: sdk.String("exercitationem"),
                },
                shared.SeldonMessage{
                    BinData: sdk.String("nulla"),
                    Data: &shared.DefaultData{
                        Names: []string{
                            "porro",
                        },
                        Ndarry: []interface{}{
                            "doloribus",
                            "iusto",
                            "eligendi",
                            "ducimus",
                        },
                        Tensor: &shared.Tensor{
                            Shape: []int{
                                639473,
                            },
                            Values: []float64{
                                3685.84,
                                4104.92,
                            },
                        },
                        Tftensor: &shared.TensorflowTensorProto{
                            BoolVal: []bool{
                                false,
                            },
                            DcomplexVal: []float64{
                                8221.18,
                                2978.42,
                            },
                            DoubleVal: []float64{
                                4011.32,
                            },
                            Dtype: shared.TensorflowDataTypeEnumDtFloatRef.ToPointer(),
                            FloatVal: []float32{
                                2243.17,
                            },
                            HalfVal: []int{
                                97844,
                                406120,
                                862192,
                                569211,
                            },
                            Int64Val: []string{
                                "nostrum",
                                "sapiente",
                                "quisquam",
                                "saepe",
                            },
                            IntVal: []int{
                                774048,
                                359271,
                            },
                            ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("aliquid"),
                                    Device: sdk.String("inventore"),
                                    HashCode: sdk.String("magnam"),
                                    MaybeTypeName: sdk.String("ea"),
                                    Name: sdk.String("Glenn Walter"),
                                },
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("eaque"),
                                    Device: sdk.String("a"),
                                    HashCode: sdk.String("libero"),
                                    MaybeTypeName: sdk.String("aut"),
                                    Name: sdk.String("Margie Russel"),
                                },
                            },
                            ScomplexVal: []float32{
                                795.22,
                                2506.22,
                                896.03,
                                6774.12,
                            },
                            StringVal: []string{
                                "placeat",
                                "velit",
                                "eum",
                            },
                            TensorContent: sdk.String("autem"),
                            TensorShape: &shared.TensorflowTensorShapeProto{
                                Dim: []shared.TensorShapeProtoDim{
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Mack Stoltenberg"),
                                        Size: sdk.String("quasi"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Carrie Cole IV"),
                                        Size: sdk.String("magnam"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Esther Koch"),
                                        Size: sdk.String("fuga"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Yvette Stehr"),
                                        Size: sdk.String("suscipit"),
                                    },
                                },
                                UnknownRank: sdk.Bool(false),
                            },
                            Uint32Val: []int64{
                                181151,
                                509342,
                                788546,
                                86377,
                            },
                            Uint64Val: []string{
                                "id",
                            },
                            VariantVal: []shared.TensorflowVariantTensorDataProto{
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("neque"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("illum"),
                                },
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
                            },
                            VersionNumber: sdk.Int(587600),
                        },
                    },
                    Meta: &shared.Meta{
                        Metrics: []shared.Metric{
                            shared.Metric{
                                Key: sdk.String("tempora"),
                                Type: shared.MetricTypeEnumTimer.ToPointer(),
                                Value: sdk.Float32(3708.53),
                            },
                        },
                        Puid: sdk.String("aspernatur"),
                        RequestPath: map[string]string{
                            "quo": "esse",
                        },
                        Routing: map[string]int{
                            "aperiam": 715179,
                            "quod": 490819,
                            "inventore": 469498,
                            "totam": 882710,
                        },
                        Tags: map[string]interface{}{
                            "odio": "occaecati",
                            "commodi": "sapiente",
                        },
                    },
                    Status: &shared.Status{
                        Code: sdk.Int(174112),
                        Info: sdk.String("deserunt"),
                        Reason: sdk.String("molestiae"),
                        Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
                    },
                    StrData: sdk.String("porro"),
                },
                shared.SeldonMessage{
                    BinData: sdk.String("eum"),
                    Data: &shared.DefaultData{
                        Names: []string{
                            "praesentium",
                            "consequuntur",
                            "deleniti",
                        },
                        Ndarry: []interface{}{
                            "fuga",
                        },
                        Tensor: &shared.Tensor{
                            Shape: []int{
                                277596,
                                539224,
                                128860,
                            },
                            Values: []float64{
                                3926.76,
                                1470.14,
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
                                1871.31,
                            },
                            DoubleVal: []float64{
                                9039.84,
                            },
                            Dtype: shared.TensorflowDataTypeEnumDtUint8Ref.ToPointer(),
                            FloatVal: []float32{
                                922.6,
                                4569.11,
                                9105.45,
                            },
                            HalfVal: []int{
                                82971,
                                458604,
                                800379,
                                724168,
                            },
                            Int64Val: []string{
                                "aliquid",
                                "quasi",
                                "saepe",
                                "vel",
                            },
                            IntVal: []int{
                                473221,
                                699622,
                                580197,
                            },
                            ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("distinctio"),
                                    Device: sdk.String("eligendi"),
                                    HashCode: sdk.String("sit"),
                                    MaybeTypeName: sdk.String("culpa"),
                                    Name: sdk.String("Chad Runolfsson DDS"),
                                },
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("quaerat"),
                                    Device: sdk.String("sapiente"),
                                    HashCode: sdk.String("consectetur"),
                                    MaybeTypeName: sdk.String("esse"),
                                    Name: sdk.String("Eduardo Wilkinson"),
                                },
                            },
                            ScomplexVal: []float32{
                                974.68,
                                9518.75,
                            },
                            StringVal: []string{
                                "sint",
                                "pariatur",
                                "possimus",
                            },
                            TensorContent: sdk.String("quia"),
                            TensorShape: &shared.TensorflowTensorShapeProto{
                                Dim: []shared.TensorShapeProtoDim{
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Carroll Bogan V"),
                                        Size: sdk.String("culpa"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Mandy Berge"),
                                        Size: sdk.String("in"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Jeannette Stanton II"),
                                        Size: sdk.String("sapiente"),
                                    },
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Marion Kihn"),
                                        Size: sdk.String("aut"),
                                    },
                                },
                                UnknownRank: sdk.Bool(false),
                            },
                            Uint32Val: []int64{
                                185232,
                                845358,
                                401259,
                            },
                            Uint64Val: []string{
                                "itaque",
                                "dolorum",
                                "architecto",
                            },
                            VariantVal: []shared.TensorflowVariantTensorDataProto{
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("tenetur"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("at"),
                                },
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("et"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("ipsa"),
                                },
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("minima"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("consectetur"),
                                },
                            },
                            VersionNumber: sdk.Int(237173),
                        },
                    },
                    Meta: &shared.Meta{
                        Metrics: []shared.Metric{
                            shared.Metric{
                                Key: sdk.String("temporibus"),
                                Type: shared.MetricTypeEnumCounter.ToPointer(),
                                Value: sdk.Float32(5223.71),
                            },
                            shared.Metric{
                                Key: sdk.String("aut"),
                                Type: shared.MetricTypeEnumGauge.ToPointer(),
                                Value: sdk.Float32(4287.96),
                            },
                            shared.Metric{
                                Key: sdk.String("mollitia"),
                                Type: shared.MetricTypeEnumCounter.ToPointer(),
                                Value: sdk.Float32(5445.91),
                            },
                        },
                        Puid: sdk.String("non"),
                        RequestPath: map[string]string{
                            "dolor": "occaecati",
                        },
                        Routing: map[string]int{
                            "impedit": 131055,
                            "voluptas": 12036,
                        },
                        Tags: map[string]interface{}{
                            "dicta": "maiores",
                            "natus": "velit",
                        },
                    },
                    Status: &shared.Status{
                        Code: sdk.Int(974257),
                        Info: sdk.String("voluptas"),
                        Reason: sdk.String("asperiores"),
                        Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
                    },
                    StrData: sdk.String("ea"),
                },
                shared.SeldonMessage{
                    BinData: sdk.String("quaerat"),
                    Data: &shared.DefaultData{
                        Names: []string{
                            "repellendus",
                        },
                        Ndarry: []interface{}{
                            "maxime",
                            "dignissimos",
                            "officia",
                        },
                        Tensor: &shared.Tensor{
                            Shape: []int{
                                368102,
                                65304,
                                312753,
                                783235,
                            },
                            Values: []float64{
                                2883.98,
                                704.47,
                                2414.18,
                                6835.73,
                            },
                        },
                        Tftensor: &shared.TensorflowTensorProto{
                            BoolVal: []bool{
                                false,
                                false,
                                false,
                            },
                            DcomplexVal: []float64{
                                2460.63,
                                6339.31,
                            },
                            DoubleVal: []float64{
                                9268.8,
                                5173.09,
                                8539.4,
                            },
                            Dtype: shared.TensorflowDataTypeEnumDtHalf.ToPointer(),
                            FloatVal: []float32{
                                5546.88,
                                4278.34,
                            },
                            HalfVal: []int{
                                822560,
                                706575,
                            },
                            Int64Val: []string{
                                "commodi",
                                "in",
                                "corporis",
                            },
                            IntVal: []int{
                                828657,
                                363161,
                                924967,
                                397533,
                            },
                            ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                shared.TensorflowResourceHandleProto{
                                    Container: sdk.String("cum"),
                                    Device: sdk.String("consectetur"),
                                    HashCode: sdk.String("in"),
                                    MaybeTypeName: sdk.String("exercitationem"),
                                    Name: sdk.String("Carroll Gerhold"),
                                },
                            },
                            ScomplexVal: []float32{
                                6971.42,
                                9049.49,
                                8970.71,
                                2965.56,
                            },
                            StringVal: []string{
                                "asperiores",
                            },
                            TensorContent: sdk.String("adipisci"),
                            TensorShape: &shared.TensorflowTensorShapeProto{
                                Dim: []shared.TensorShapeProtoDim{
                                    shared.TensorShapeProtoDim{
                                        Name: sdk.String("Heather Kuhn"),
                                        Size: sdk.String("consectetur"),
                                    },
                                },
                                UnknownRank: sdk.Bool(false),
                            },
                            Uint32Val: []int64{
                                689768,
                                385237,
                            },
                            Uint64Val: []string{
                                "voluptates",
                            },
                            VariantVal: []shared.TensorflowVariantTensorDataProto{
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("vitae"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("similique"),
                                },
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("tempora"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("voluptas"),
                                },
                                shared.TensorflowVariantTensorDataProto{
                                    Metadata: sdk.String("voluptas"),
                                    Tensors: []shared.TensorflowTensorProto{
                                        shared.TensorflowTensorProto{},
                                        shared.TensorflowTensorProto{},
                                    },
                                    TypeName: sdk.String("minima"),
                                },
                            },
                            VersionNumber: sdk.Int(748789),
                        },
                    },
                    Meta: &shared.Meta{
                        Metrics: []shared.Metric{
                            shared.Metric{
                                Key: sdk.String("adipisci"),
                                Type: shared.MetricTypeEnumTimer.ToPointer(),
                                Value: sdk.Float32(1718.53),
                            },
                            shared.Metric{
                                Key: sdk.String("blanditiis"),
                                Type: shared.MetricTypeEnumGauge.ToPointer(),
                                Value: sdk.Float32(2962.42),
                            },
                            shared.Metric{
                                Key: sdk.String("aliquam"),
                                Type: shared.MetricTypeEnumTimer.ToPointer(),
                                Value: sdk.Float32(8391.89),
                            },
                        },
                        Puid: sdk.String("ullam"),
                        RequestPath: map[string]string{
                            "cum": "blanditiis",
                        },
                        Routing: map[string]int{
                            "hic": 201517,
                            "culpa": 548519,
                            "pariatur": 519643,
                        },
                        Tags: map[string]interface{}{
                            "exercitationem": "nobis",
                            "sit": "rerum",
                            "sed": "reiciendis",
                            "explicabo": "asperiores",
                        },
                    },
                    Status: &shared.Status{
                        Code: sdk.Int(707918),
                        Info: sdk.String("voluptate"),
                        Reason: sdk.String("expedita"),
                        Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
                    },
                    StrData: sdk.String("iste"),
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

## Route

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
    res, err := s.Internal.Route(ctx, operations.RouteRequestBody{
        JSON: &shared.SeldonMessage{
            BinData: sdk.String("dolore"),
            Data: &shared.DefaultData{
                Names: []string{
                    "sed",
                    "in",
                    "commodi",
                },
                Ndarry: []interface{}{
                    "explicabo",
                    "voluptas",
                    "unde",
                },
                Tensor: &shared.Tensor{
                    Shape: []int{
                        382808,
                    },
                    Values: []float64{
                        8953.86,
                        724.34,
                        9677.95,
                        193,
                    },
                },
                Tftensor: &shared.TensorflowTensorProto{
                    BoolVal: []bool{
                        false,
                        false,
                        false,
                    },
                    DcomplexVal: []float64{
                        2748.23,
                        1484.78,
                        5922.31,
                        2587.02,
                    },
                    DoubleVal: []float64{
                        2155.29,
                        4067.33,
                        5799.12,
                        5520.78,
                    },
                    Dtype: shared.TensorflowDataTypeEnumDtUint32Ref.ToPointer(),
                    FloatVal: []float32{
                        2730.09,
                        4554.44,
                    },
                    HalfVal: []int{
                        401713,
                        25497,
                        248413,
                        888044,
                    },
                    Int64Val: []string{
                        "facilis",
                        "quaerat",
                        "incidunt",
                    },
                    IntVal: []int{
                        894864,
                        524970,
                    },
                    ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("nobis"),
                            Device: sdk.String("error"),
                            HashCode: sdk.String("veniam"),
                            MaybeTypeName: sdk.String("minima"),
                            Name: sdk.String("Van Stoltenberg PhD"),
                        },
                    },
                    ScomplexVal: []float32{
                        3299.35,
                        4461.35,
                    },
                    StringVal: []string{
                        "beatae",
                        "laudantium",
                        "exercitationem",
                        "praesentium",
                    },
                    TensorContent: sdk.String("cum"),
                    TensorShape: &shared.TensorflowTensorShapeProto{
                        Dim: []shared.TensorShapeProtoDim{
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Bob Mueller"),
                                Size: sdk.String("debitis"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Sonya Heaney"),
                                Size: sdk.String("corrupti"),
                            },
                        },
                        UnknownRank: sdk.Bool(false),
                    },
                    Uint32Val: []int64{
                        272683,
                        543678,
                        148268,
                        282699,
                    },
                    Uint64Val: []string{
                        "voluptatem",
                        "culpa",
                        "expedita",
                        "magnam",
                    },
                    VariantVal: []shared.TensorflowVariantTensorDataProto{
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("esse"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("sit"),
                        },
                    },
                    VersionNumber: sdk.Int(530537),
                },
            },
            Meta: &shared.Meta{
                Metrics: []shared.Metric{
                    shared.Metric{
                        Key: sdk.String("repudiandae"),
                        Type: shared.MetricTypeEnumGauge.ToPointer(),
                        Value: sdk.Float32(894.94),
                    },
                    shared.Metric{
                        Key: sdk.String("blanditiis"),
                        Type: shared.MetricTypeEnumGauge.ToPointer(),
                        Value: sdk.Float32(1536.27),
                    },
                    shared.Metric{
                        Key: sdk.String("sit"),
                        Type: shared.MetricTypeEnumGauge.ToPointer(),
                        Value: sdk.Float32(3426.11),
                    },
                },
                Puid: sdk.String("saepe"),
                RequestPath: map[string]string{
                    "consequatur": "incidunt",
                    "reiciendis": "dolorem",
                    "harum": "dicta",
                },
                Routing: map[string]int{
                    "occaecati": 289776,
                },
                Tags: map[string]interface{}{
                    "atque": "laborum",
                    "nam": "tenetur",
                    "laboriosam": "alias",
                },
            },
            Status: &shared.Status{
                Code: sdk.Int(227084),
                Info: sdk.String("deserunt"),
                Reason: sdk.String("voluptate"),
                Status: shared.StatusStatusFlagEnumFailure.ToPointer(),
            },
            StrData: sdk.String("reiciendis"),
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
    res, err := s.Internal.SendFeedback(ctx, operations.SendFeedbackRequestBody{
        JSON: &shared.Feedback{
            Request: &shared.SeldonMessage{
                BinData: sdk.String("provident"),
                Data: &shared.DefaultData{
                    Names: []string{
                        "delectus",
                        "voluptates",
                        "perferendis",
                        "est",
                    },
                    Ndarry: []interface{}{
                        "reprehenderit",
                        "facere",
                        "fuga",
                    },
                    Tensor: &shared.Tensor{
                        Shape: []int{
                            648598,
                            333965,
                            29100,
                        },
                        Values: []float64{
                            9195.32,
                            972.43,
                            5424.57,
                            4420.36,
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
                            3831.03,
                            6939.57,
                            8066.7,
                        },
                        DoubleVal: []float64{
                            4610.07,
                        },
                        Dtype: shared.TensorflowDataTypeEnumDtBool.ToPointer(),
                        FloatVal: []float32{
                            4103.01,
                            5391.18,
                            6232.95,
                            8872.65,
                        },
                        HalfVal: []int{
                            880107,
                            618826,
                            328303,
                            133461,
                        },
                        Int64Val: []string{
                            "maiores",
                            "corrupti",
                        },
                        IntVal: []int{
                            621693,
                            502721,
                            379356,
                            922348,
                        },
                        ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("atque"),
                                Device: sdk.String("sunt"),
                                HashCode: sdk.String("recusandae"),
                                MaybeTypeName: sdk.String("dolorum"),
                                Name: sdk.String("Dr. Leroy Wisoky Jr."),
                            },
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("beatae"),
                                Device: sdk.String("dolores"),
                                HashCode: sdk.String("enim"),
                                MaybeTypeName: sdk.String("laboriosam"),
                                Name: sdk.String("Elsa Maggio"),
                            },
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("consequuntur"),
                                Device: sdk.String("occaecati"),
                                HashCode: sdk.String("officiis"),
                                MaybeTypeName: sdk.String("perspiciatis"),
                                Name: sdk.String("Sylvia Upton"),
                            },
                        },
                        ScomplexVal: []float32{
                            6611.18,
                        },
                        StringVal: []string{
                            "reprehenderit",
                            "error",
                        },
                        TensorContent: sdk.String("illo"),
                        TensorShape: &shared.TensorflowTensorShapeProto{
                            Dim: []shared.TensorShapeProtoDim{
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Conrad Franey III"),
                                    Size: sdk.String("ipsa"),
                                },
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Frank Krajcik"),
                                    Size: sdk.String("cum"),
                                },
                            },
                            UnknownRank: sdk.Bool(false),
                        },
                        Uint32Val: []int64{
                            898063,
                            187552,
                        },
                        Uint64Val: []string{
                            "distinctio",
                            "voluptatum",
                            "rem",
                        },
                        VariantVal: []shared.TensorflowVariantTensorDataProto{
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("ad"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("alias"),
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("corporis"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("nihil"),
                            },
                        },
                        VersionNumber: sdk.Int(649078),
                    },
                },
                Meta: &shared.Meta{
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Key: sdk.String("alias"),
                            Type: shared.MetricTypeEnumTimer.ToPointer(),
                            Value: sdk.Float32(9702.22),
                        },
                        shared.Metric{
                            Key: sdk.String("dolores"),
                            Type: shared.MetricTypeEnumGauge.ToPointer(),
                            Value: sdk.Float32(3279.88),
                        },
                    },
                    Puid: sdk.String("dolore"),
                    RequestPath: map[string]string{
                        "nesciunt": "quae",
                        "recusandae": "omnis",
                        "quaerat": "molestiae",
                    },
                    Routing: map[string]int{
                        "ut": 633062,
                        "adipisci": 890653,
                    },
                    Tags: map[string]interface{}{
                        "eum": "nemo",
                        "recusandae": "esse",
                        "provident": "quis",
                    },
                },
                Status: &shared.Status{
                    Code: sdk.Int(431785),
                    Info: sdk.String("reiciendis"),
                    Reason: sdk.String("provident"),
                    Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
                },
                StrData: sdk.String("ullam"),
            },
            Response: &shared.SeldonMessage{
                BinData: sdk.String("quasi"),
                Data: &shared.DefaultData{
                    Names: []string{
                        "nostrum",
                        "mollitia",
                        "provident",
                    },
                    Ndarry: []interface{}{
                        "animi",
                        "ex",
                        "aliquid",
                        "accusantium",
                    },
                    Tensor: &shared.Tensor{
                        Shape: []int{
                            984632,
                            351893,
                            448143,
                            721407,
                        },
                        Values: []float64{
                            6375.83,
                            6720.41,
                            8130.54,
                            2666.97,
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
                            8897.94,
                            9569.33,
                            7645.62,
                        },
                        DoubleVal: []float64{
                            6982.49,
                        },
                        Dtype: shared.TensorflowDataTypeEnumDtQuint8.ToPointer(),
                        FloatVal: []float32{
                            820.57,
                            1476.85,
                        },
                        HalfVal: []int{
                            62636,
                            21688,
                            241901,
                            137251,
                        },
                        Int64Val: []string{
                            "eius",
                            "rem",
                        },
                        IntVal: []int{
                            773084,
                            179410,
                            958741,
                            433279,
                        },
                        ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("minima"),
                                Device: sdk.String("beatae"),
                                HashCode: sdk.String("cupiditate"),
                                MaybeTypeName: sdk.String("provident"),
                                Name: sdk.String("Ed Weimann DVM"),
                            },
                        },
                        ScomplexVal: []float32{
                            9834.27,
                            8918.01,
                            3998.02,
                        },
                        StringVal: []string{
                            "suscipit",
                            "dolorem",
                            "fugit",
                            "cumque",
                        },
                        TensorContent: sdk.String("fuga"),
                        TensorShape: &shared.TensorflowTensorShapeProto{
                            Dim: []shared.TensorShapeProtoDim{
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Mr. Santiago Stoltenberg IV"),
                                    Size: sdk.String("natus"),
                                },
                            },
                            UnknownRank: sdk.Bool(false),
                        },
                        Uint32Val: []int64{
                            382440,
                            241557,
                            96562,
                        },
                        Uint64Val: []string{
                            "doloribus",
                        },
                        VariantVal: []shared.TensorflowVariantTensorDataProto{
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("necessitatibus"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("tempora"),
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("nihil"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("dicta"),
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("iusto"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("praesentium"),
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("maiores"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("vel"),
                            },
                        },
                        VersionNumber: sdk.Int(99958),
                    },
                },
                Meta: &shared.Meta{
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Key: sdk.String("doloremque"),
                            Type: shared.MetricTypeEnumCounter.ToPointer(),
                            Value: sdk.Float32(4837.06),
                        },
                        shared.Metric{
                            Key: sdk.String("tempora"),
                            Type: shared.MetricTypeEnumGauge.ToPointer(),
                            Value: sdk.Float32(4037.93),
                        },
                        shared.Metric{
                            Key: sdk.String("consectetur"),
                            Type: shared.MetricTypeEnumGauge.ToPointer(),
                            Value: sdk.Float32(588.7),
                        },
                        shared.Metric{
                            Key: sdk.String("laborum"),
                            Type: shared.MetricTypeEnumCounter.ToPointer(),
                            Value: sdk.Float32(3447.18),
                        },
                    },
                    Puid: sdk.String("fugiat"),
                    RequestPath: map[string]string{
                        "aliquid": "officia",
                        "suscipit": "aliquid",
                        "perferendis": "eum",
                    },
                    Routing: map[string]int{
                        "iste": 661607,
                        "ab": 625358,
                    },
                    Tags: map[string]interface{}{
                        "voluptates": "mollitia",
                        "laborum": "libero",
                        "ad": "deleniti",
                        "enim": "vitae",
                    },
                },
                Status: &shared.Status{
                    Code: sdk.Int(833316),
                    Info: sdk.String("ex"),
                    Reason: sdk.String("quo"),
                    Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
                },
                StrData: sdk.String("ut"),
            },
            Reward: sdk.Float32(3210.43),
            Truth: &shared.SeldonMessage{
                BinData: sdk.String("expedita"),
                Data: &shared.DefaultData{
                    Names: []string{
                        "molestias",
                    },
                    Ndarry: []interface{}{
                        "aliquid",
                        "beatae",
                        "voluptatum",
                    },
                    Tensor: &shared.Tensor{
                        Shape: []int{
                            85233,
                            703218,
                            665678,
                        },
                        Values: []float64{
                            296.34,
                            9591.43,
                            8892.88,
                        },
                    },
                    Tftensor: &shared.TensorflowTensorProto{
                        BoolVal: []bool{
                            false,
                        },
                        DcomplexVal: []float64{
                            8671.68,
                            8913.15,
                            291.9,
                        },
                        DoubleVal: []float64{
                            5349.17,
                        },
                        Dtype: shared.TensorflowDataTypeEnumDtVariantRef.ToPointer(),
                        FloatVal: []float32{
                            9583.08,
                            5241.84,
                        },
                        HalfVal: []int{
                            365100,
                            992074,
                            190567,
                            355225,
                        },
                        Int64Val: []string{
                            "illum",
                        },
                        IntVal: []int{
                            770675,
                            842777,
                            720528,
                        },
                        ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("culpa"),
                                Device: sdk.String("dolor"),
                                HashCode: sdk.String("aliquam"),
                                MaybeTypeName: sdk.String("inventore"),
                                Name: sdk.String("Peter Goodwin Sr."),
                            },
                            shared.TensorflowResourceHandleProto{
                                Container: sdk.String("sit"),
                                Device: sdk.String("modi"),
                                HashCode: sdk.String("fugit"),
                                MaybeTypeName: sdk.String("ab"),
                                Name: sdk.String("Eric Fadel"),
                            },
                        },
                        ScomplexVal: []float32{
                            551.07,
                        },
                        StringVal: []string{
                            "eveniet",
                            "impedit",
                            "officiis",
                        },
                        TensorContent: sdk.String("esse"),
                        TensorShape: &shared.TensorflowTensorShapeProto{
                            Dim: []shared.TensorShapeProtoDim{
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Sally Dooley"),
                                    Size: sdk.String("vel"),
                                },
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Miss Oscar Heller"),
                                    Size: sdk.String("nobis"),
                                },
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Mrs. Kate Cronin"),
                                    Size: sdk.String("quasi"),
                                },
                                shared.TensorShapeProtoDim{
                                    Name: sdk.String("Teri Thiel"),
                                    Size: sdk.String("sequi"),
                                },
                            },
                            UnknownRank: sdk.Bool(false),
                        },
                        Uint32Val: []int64{
                            918092,
                            759283,
                            579681,
                            364544,
                        },
                        Uint64Val: []string{
                            "blanditiis",
                            "officia",
                        },
                        VariantVal: []shared.TensorflowVariantTensorDataProto{
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("numquam"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("quos"),
                            },
                            shared.TensorflowVariantTensorDataProto{
                                Metadata: sdk.String("eius"),
                                Tensors: []shared.TensorflowTensorProto{
                                    shared.TensorflowTensorProto{},
                                },
                                TypeName: sdk.String("ducimus"),
                            },
                        },
                        VersionNumber: sdk.Int(200516),
                    },
                },
                Meta: &shared.Meta{
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Key: sdk.String("laudantium"),
                            Type: shared.MetricTypeEnumCounter.ToPointer(),
                            Value: sdk.Float32(974.93),
                        },
                        shared.Metric{
                            Key: sdk.String("rem"),
                            Type: shared.MetricTypeEnumTimer.ToPointer(),
                            Value: sdk.Float32(1173.8),
                        },
                        shared.Metric{
                            Key: sdk.String("nisi"),
                            Type: shared.MetricTypeEnumCounter.ToPointer(),
                            Value: sdk.Float32(2330.78),
                        },
                    },
                    Puid: sdk.String("aperiam"),
                    RequestPath: map[string]string{
                        "reiciendis": "soluta",
                        "alias": "omnis",
                        "eos": "occaecati",
                    },
                    Routing: map[string]int{
                        "magni": 81369,
                        "fuga": 881897,
                        "voluptatibus": 719620,
                    },
                    Tags: map[string]interface{}{
                        "delectus": "minima",
                        "praesentium": "maxime",
                        "magnam": "temporibus",
                    },
                },
                Status: &shared.Status{
                    Code: sdk.Int(549501),
                    Info: sdk.String("commodi"),
                    Reason: sdk.String("itaque"),
                    Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
                },
                StrData: sdk.String("totam"),
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

## TransformInput

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
    res, err := s.Internal.TransformInput(ctx, operations.TransformInputRequestBody{
        JSON: &shared.SeldonMessage{
            BinData: sdk.String("earum"),
            Data: &shared.DefaultData{
                Names: []string{
                    "nam",
                    "vero",
                },
                Ndarry: []interface{}{
                    "ipsam",
                },
                Tensor: &shared.Tensor{
                    Shape: []int{
                        1383,
                        93894,
                    },
                    Values: []float64{
                        9785.48,
                    },
                },
                Tftensor: &shared.TensorflowTensorProto{
                    BoolVal: []bool{
                        false,
                        false,
                    },
                    DcomplexVal: []float64{
                        8587.78,
                        6436.78,
                        4585.03,
                    },
                    DoubleVal: []float64{
                        4445.87,
                        6677.15,
                    },
                    Dtype: shared.TensorflowDataTypeEnumDtQint16.ToPointer(),
                    FloatVal: []float32{
                        8806.79,
                        7746.84,
                        9450.27,
                    },
                    HalfVal: []int{
                        991891,
                        404306,
                        376741,
                        895346,
                    },
                    Int64Val: []string{
                        "quae",
                        "minus",
                        "fuga",
                        "laborum",
                    },
                    IntVal: []int{
                        244889,
                    },
                    ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("ipsum"),
                            Device: sdk.String("impedit"),
                            HashCode: sdk.String("magni"),
                            MaybeTypeName: sdk.String("soluta"),
                            Name: sdk.String("Alton Grimes"),
                        },
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("sequi"),
                            Device: sdk.String("dignissimos"),
                            HashCode: sdk.String("neque"),
                            MaybeTypeName: sdk.String("quo"),
                            Name: sdk.String("Ellis Kessler"),
                        },
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("vel"),
                            Device: sdk.String("magnam"),
                            HashCode: sdk.String("quibusdam"),
                            MaybeTypeName: sdk.String("inventore"),
                            Name: sdk.String("Wm Brakus"),
                        },
                    },
                    ScomplexVal: []float32{
                        3041.98,
                        2470.45,
                        753.59,
                        365.61,
                    },
                    StringVal: []string{
                        "ea",
                        "beatae",
                    },
                    TensorContent: sdk.String("vero"),
                    TensorShape: &shared.TensorflowTensorShapeProto{
                        Dim: []shared.TensorShapeProtoDim{
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Sheila Graham"),
                                Size: sdk.String("dicta"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Courtney Monahan III"),
                                Size: sdk.String("itaque"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Maggie Friesen"),
                                Size: sdk.String("sit"),
                            },
                        },
                        UnknownRank: sdk.Bool(false),
                    },
                    Uint32Val: []int64{
                        7468,
                    },
                    Uint64Val: []string{
                        "recusandae",
                        "ea",
                        "quidem",
                    },
                    VariantVal: []shared.TensorflowVariantTensorDataProto{
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("facilis"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("perspiciatis"),
                        },
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("expedita"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("a"),
                        },
                    },
                    VersionNumber: sdk.Int(455579),
                },
            },
            Meta: &shared.Meta{
                Metrics: []shared.Metric{
                    shared.Metric{
                        Key: sdk.String("unde"),
                        Type: shared.MetricTypeEnumTimer.ToPointer(),
                        Value: sdk.Float32(6540.82),
                    },
                    shared.Metric{
                        Key: sdk.String("impedit"),
                        Type: shared.MetricTypeEnumGauge.ToPointer(),
                        Value: sdk.Float32(3574.25),
                    },
                },
                Puid: sdk.String("est"),
                RequestPath: map[string]string{
                    "esse": "labore",
                    "veritatis": "vero",
                    "consectetur": "vitae",
                },
                Routing: map[string]int{
                    "dolorem": 322017,
                },
                Tags: map[string]interface{}{
                    "iste": "ex",
                },
            },
            Status: &shared.Status{
                Code: sdk.Int(367626),
                Info: sdk.String("soluta"),
                Reason: sdk.String("libero"),
                Status: shared.StatusStatusFlagEnumFailure.ToPointer(),
            },
            StrData: sdk.String("dolorum"),
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

## TransformInput3

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
    res, err := s.Internal.TransformInput3(ctx, operations.TransformInput3RequestBody{
        JSON: &shared.SeldonMessage{
            BinData: sdk.String("odio"),
            Data: &shared.DefaultData{
                Names: []string{
                    "alias",
                },
                Ndarry: []interface{}{
                    "vel",
                },
                Tensor: &shared.Tensor{
                    Shape: []int{
                        63553,
                    },
                    Values: []float64{
                        2082.53,
                        3483.57,
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
                        2153.98,
                    },
                    DoubleVal: []float64{
                        8583.38,
                        7143.76,
                        8028.94,
                    },
                    Dtype: shared.TensorflowDataTypeEnumDtString.ToPointer(),
                    FloatVal: []float32{
                        3421.37,
                    },
                    HalfVal: []int{
                        727250,
                        115661,
                        663318,
                    },
                    Int64Val: []string{
                        "fugiat",
                        "officia",
                        "quos",
                    },
                    IntVal: []int{
                        25756,
                        479385,
                        57320,
                        914864,
                    },
                    ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("aperiam"),
                            Device: sdk.String("totam"),
                            HashCode: sdk.String("dolore"),
                            MaybeTypeName: sdk.String("eligendi"),
                            Name: sdk.String("Kenneth Johnson"),
                        },
                    },
                    ScomplexVal: []float32{
                        1072.1,
                        6686.06,
                        8173.39,
                        5459.18,
                    },
                    StringVal: []string{
                        "provident",
                        "accusamus",
                    },
                    TensorContent: sdk.String("necessitatibus"),
                    TensorShape: &shared.TensorflowTensorShapeProto{
                        Dim: []shared.TensorShapeProtoDim{
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Angel Jones"),
                                Size: sdk.String("laudantium"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Cecelia Wiza"),
                                Size: sdk.String("alias"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Yvette Paucek MD"),
                                Size: sdk.String("officiis"),
                            },
                        },
                        UnknownRank: sdk.Bool(false),
                    },
                    Uint32Val: []int64{
                        844854,
                    },
                    Uint64Val: []string{
                        "praesentium",
                        "odit",
                    },
                    VariantVal: []shared.TensorflowVariantTensorDataProto{
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("corporis"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("earum"),
                        },
                    },
                    VersionNumber: sdk.Int(239337),
                },
            },
            Meta: &shared.Meta{
                Metrics: []shared.Metric{
                    shared.Metric{
                        Key: sdk.String("similique"),
                        Type: shared.MetricTypeEnumCounter.ToPointer(),
                        Value: sdk.Float32(6937.46),
                    },
                    shared.Metric{
                        Key: sdk.String("quis"),
                        Type: shared.MetricTypeEnumCounter.ToPointer(),
                        Value: sdk.Float32(6002.13),
                    },
                    shared.Metric{
                        Key: sdk.String("molestiae"),
                        Type: shared.MetricTypeEnumTimer.ToPointer(),
                        Value: sdk.Float32(5855.93),
                    },
                    shared.Metric{
                        Key: sdk.String("fugit"),
                        Type: shared.MetricTypeEnumCounter.ToPointer(),
                        Value: sdk.Float32(2569.16),
                    },
                },
                Puid: sdk.String("nesciunt"),
                RequestPath: map[string]string{
                    "officia": "dignissimos",
                    "optio": "necessitatibus",
                    "corporis": "qui",
                    "expedita": "voluptatum",
                },
                Routing: map[string]int{
                    "minima": 809594,
                    "enim": 204072,
                    "in": 796397,
                },
                Tags: map[string]interface{}{
                    "modi": "corporis",
                    "magnam": "voluptates",
                },
            },
            Status: &shared.Status{
                Code: sdk.Int(978173),
                Info: sdk.String("tempore"),
                Reason: sdk.String("aperiam"),
                Status: shared.StatusStatusFlagEnumFailure.ToPointer(),
            },
            StrData: sdk.String("ratione"),
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

## TransformOutput

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
    res, err := s.Internal.TransformOutput(ctx, operations.TransformOutputRequestBody{
        JSON: &shared.SeldonMessage{
            BinData: sdk.String("labore"),
            Data: &shared.DefaultData{
                Names: []string{
                    "occaecati",
                    "voluptas",
                    "quo",
                },
                Ndarry: []interface{}{
                    "minus",
                },
                Tensor: &shared.Tensor{
                    Shape: []int{
                        344530,
                        669237,
                        770873,
                    },
                    Values: []float64{
                        7358.94,
                        8786.01,
                        1415.06,
                        9974.37,
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
                        4413.21,
                        452.34,
                    },
                    DoubleVal: []float64{
                        3252.97,
                        4483.69,
                    },
                    Dtype: shared.TensorflowDataTypeEnumDtUint64.ToPointer(),
                    FloatVal: []float32{
                        1721.95,
                        6211.69,
                        850.76,
                    },
                    HalfVal: []int{
                        452729,
                        866789,
                    },
                    Int64Val: []string{
                        "similique",
                        "optio",
                        "ex",
                        "quaerat",
                    },
                    IntVal: []int{
                        888616,
                        810839,
                    },
                    ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("exercitationem"),
                            Device: sdk.String("quam"),
                            HashCode: sdk.String("dolorem"),
                            MaybeTypeName: sdk.String("modi"),
                            Name: sdk.String("Bobbie Terry"),
                        },
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("cum"),
                            Device: sdk.String("dicta"),
                            HashCode: sdk.String("earum"),
                            MaybeTypeName: sdk.String("veniam"),
                            Name: sdk.String("Mr. Todd Reilly"),
                        },
                        shared.TensorflowResourceHandleProto{
                            Container: sdk.String("nobis"),
                            Device: sdk.String("ipsa"),
                            HashCode: sdk.String("ducimus"),
                            MaybeTypeName: sdk.String("maiores"),
                            Name: sdk.String("Joyce Howe"),
                        },
                    },
                    ScomplexVal: []float32{
                        5782.1,
                        3679.17,
                        3063.82,
                    },
                    StringVal: []string{
                        "doloribus",
                        "eligendi",
                    },
                    TensorContent: sdk.String("sint"),
                    TensorShape: &shared.TensorflowTensorShapeProto{
                        Dim: []shared.TensorShapeProtoDim{
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Matt Macejkovic"),
                                Size: sdk.String("odio"),
                            },
                            shared.TensorShapeProtoDim{
                                Name: sdk.String("Gwen Braun"),
                                Size: sdk.String("assumenda"),
                            },
                        },
                        UnknownRank: sdk.Bool(false),
                    },
                    Uint32Val: []int64{
                        725574,
                        244032,
                        38557,
                    },
                    Uint64Val: []string{
                        "impedit",
                        "cum",
                        "ipsum",
                        "adipisci",
                    },
                    VariantVal: []shared.TensorflowVariantTensorDataProto{
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("deserunt"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("quis"),
                        },
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("veniam"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("architecto"),
                        },
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("cupiditate"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("eligendi"),
                        },
                        shared.TensorflowVariantTensorDataProto{
                            Metadata: sdk.String("possimus"),
                            Tensors: []shared.TensorflowTensorProto{
                                shared.TensorflowTensorProto{},
                                shared.TensorflowTensorProto{},
                            },
                            TypeName: sdk.String("magnam"),
                        },
                    },
                    VersionNumber: sdk.Int(932296),
                },
            },
            Meta: &shared.Meta{
                Metrics: []shared.Metric{
                    shared.Metric{
                        Key: sdk.String("asperiores"),
                        Type: shared.MetricTypeEnumCounter.ToPointer(),
                        Value: sdk.Float32(1645.32),
                    },
                },
                Puid: sdk.String("facere"),
                RequestPath: map[string]string{
                    "odit": "pariatur",
                    "amet": "exercitationem",
                    "ab": "velit",
                },
                Routing: map[string]int{
                    "tempore": 395233,
                    "voluptatibus": 310840,
                    "blanditiis": 718627,
                },
                Tags: map[string]interface{}{
                    "quis": "nisi",
                    "libero": "minus",
                },
            },
            Status: &shared.Status{
                Code: sdk.Int(815200),
                Info: sdk.String("facilis"),
                Reason: sdk.String("ipsum"),
                Status: shared.StatusStatusFlagEnumSuccess.ToPointer(),
            },
            StrData: sdk.String("voluptatibus"),
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
