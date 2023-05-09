# Projects

### Available Operations

* [CloudtraceProjectsTracesBatchWrite](#cloudtraceprojectstracesbatchwrite) - Batch writes new spans to new or existing traces. You cannot update existing spans.
* [CloudtraceProjectsTracesSpansCreateSpan](#cloudtraceprojectstracesspanscreatespan) - Creates a new span.

## CloudtraceProjectsTracesBatchWrite

Batch writes new spans to new or existing traces. You cannot update existing spans.

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
    res, err := s.Projects.CloudtraceProjectsTracesBatchWrite(ctx, operations.CloudtraceProjectsTracesBatchWriteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchWriteSpansRequest: &shared.BatchWriteSpansRequest{
            Spans: []shared.Span{
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "soluta": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("nobis"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(92596),
                                    Value: sdk.String("saepe"),
                                },
                            },
                            "ipsum": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("veritatis"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(749255),
                                    Value: sdk.String("quos"),
                                },
                            },
                            "tempore": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("cupiditate"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(45614),
                                    Value: sdk.String("delectus"),
                                },
                            },
                            "dolorem": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("dolore"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(286915),
                                    Value: sdk.String("adipisci"),
                                },
                            },
                        },
                        DroppedAttributesCount: sdk.Int(677263),
                    },
                    ChildSpanCount: sdk.Int(100294),
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: sdk.Int(63038),
                        Value: sdk.String("aut"),
                    },
                    EndTime: sdk.String("quas"),
                    Links: &shared.Links{
                        DroppedLinksCount: sdk.Int(929530),
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "repellendus": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("porro"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(984330),
                                                Value: sdk.String("ut"),
                                            },
                                        },
                                        "facilis": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("cupiditate"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(181631),
                                                Value: sdk.String("quae"),
                                            },
                                        },
                                        "laudantium": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("odio"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(580447),
                                                Value: sdk.String("voluptatibus"),
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: sdk.Int(787542),
                                },
                                SpanID: sdk.String("vero"),
                                TraceID: sdk.String("omnis"),
                                Type: shared.LinkTypeEnumChildLinkedSpan.ToPointer(),
                            },
                        },
                    },
                    Name: sdk.String("Dixie Klocko"),
                    ParentSpanID: sdk.String("tenetur"),
                    SameProcessAsParentSpan: sdk.Bool(false),
                    SpanID: sdk.String("dignissimos"),
                    SpanKind: shared.SpanSpanKindEnumConsumer.ToPointer(),
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: sdk.Int(715561),
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("odio"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(630448),
                                        Value: sdk.String("facilis"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(874288),
                                        Value: sdk.String("ducimus"),
                                    },
                                    LineNumber: sdk.String("dolore"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(844550),
                                            Value: sdk.String("illum"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(194342),
                                            Value: sdk.String("natus"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(773326),
                                        Value: sdk.String("aut"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(974259),
                                        Value: sdk.String("exercitationem"),
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("nulla"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(148141),
                                        Value: sdk.String("porro"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(981830),
                                        Value: sdk.String("doloribus"),
                                    },
                                    LineNumber: sdk.String("iusto"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(753570),
                                            Value: sdk.String("ducimus"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(4048),
                                            Value: sdk.String("officia"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(269479),
                                        Value: sdk.String("ipsam"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(410492),
                                        Value: sdk.String("aspernatur"),
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("vel"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(822118),
                                        Value: sdk.String("magnam"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(189848),
                                        Value: sdk.String("ex"),
                                    },
                                    LineNumber: sdk.String("laudantium"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(120657),
                                            Value: sdk.String("dolor"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(980700),
                                            Value: sdk.String("quasi"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(406120),
                                        Value: sdk.String("nulla"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(569211),
                                        Value: sdk.String("voluptatibus"),
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("nostrum"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(960835),
                                        Value: sdk.String("quisquam"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(906556),
                                        Value: sdk.String("ea"),
                                    },
                                    LineNumber: sdk.String("impedit"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(359271),
                                            Value: sdk.String("veniam"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(399499),
                                            Value: sdk.String("inventore"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(301831),
                                        Value: sdk.String("ea"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(775220),
                                        Value: sdk.String("consectetur"),
                                    },
                                },
                            },
                        },
                        StackTraceHashID: sdk.String("recusandae"),
                    },
                    StartTime: sdk.String("aspernatur"),
                    Status: &shared.Status{
                        Code: sdk.Int(325310),
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "libero": "aut",
                                "aut": "deleniti",
                                "impedit": "aliquam",
                                "fugit": "accusamus",
                            },
                        },
                        Message: sdk.String("inventore"),
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: sdk.Int(250622),
                        DroppedMessageEventsCount: sdk.Int(89603),
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "placeat": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("velit"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(432148),
                                                    Value: sdk.String("autem"),
                                                },
                                            },
                                            "nobis": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("quas"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(829603),
                                                    Value: sdk.String("nulla"),
                                                },
                                            },
                                            "voluptas": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("libero"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(96549),
                                                    Value: sdk.String("tempora"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(256139),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(131482),
                                        Value: sdk.String("provident"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("ipsa"),
                                    ID: sdk.String("molestiae"),
                                    Type: shared.MessageEventTypeEnumTypeUnspecified.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("odio"),
                                },
                                Time: sdk.String("eius"),
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "esse": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("rem"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(683282),
                                                    Value: sdk.String("reprehenderit"),
                                                },
                                            },
                                            "quidem": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("fugiat"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(283519),
                                                    Value: sdk.String("eum"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(379927),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(826871),
                                        Value: sdk.String("eos"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("praesentium"),
                                    ID: sdk.String("quisquam"),
                                    Type: shared.MessageEventTypeEnumTypeUnspecified.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("ipsa"),
                                },
                                Time: sdk.String("id"),
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "neque": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("quo"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(847276),
                                                    Value: sdk.String("quo"),
                                                },
                                            },
                                            "fuga": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("eius"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(178367),
                                                    Value: sdk.String("voluptas"),
                                                },
                                            },
                                            "ab": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("cupiditate"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(9688),
                                                    Value: sdk.String("tempora"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(892050),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(370853),
                                        Value: sdk.String("aspernatur"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("sequi"),
                                    ID: sdk.String("quo"),
                                    Type: shared.MessageEventTypeEnumSent.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("recusandae"),
                                },
                                Time: sdk.String("aperiam"),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("nihil"),
        Name: "Sheldon Hackett",
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.CloudtraceProjectsTracesBatchWriteSecurity{
        Option1: &operations.CloudtraceProjectsTracesBatchWriteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## CloudtraceProjectsTracesSpansCreateSpan

Creates a new span.

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
    res, err := s.Projects.CloudtraceProjectsTracesSpansCreateSpan(ctx, operations.CloudtraceProjectsTracesSpansCreateSpanRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Span: &shared.Span{
            Attributes: &shared.Attributes{
                AttributeMap: map[string]shared.AttributeValue{
                    "porro": shared.AttributeValue{
                        BoolValue: sdk.Bool(false),
                        IntValue: sdk.String("eum"),
                        StringValue: &shared.TruncatableString{
                            TruncatedByteCount: sdk.Int(556429),
                            Value: sdk.String("praesentium"),
                        },
                    },
                },
                DroppedAttributesCount: sdk.Int(159867),
            },
            ChildSpanCount: sdk.Int(536178),
            DisplayName: &shared.TruncatableString{
                TruncatedByteCount: sdk.Int(143829),
                Value: sdk.String("fuga"),
            },
            EndTime: sdk.String("mollitia"),
            Links: &shared.Links{
                DroppedLinksCount: sdk.Int(277596),
                Link: []shared.Link{
                    shared.Link{
                        Attributes: &shared.Attributes{
                            AttributeMap: map[string]shared.AttributeValue{
                                "minima": shared.AttributeValue{
                                    BoolValue: sdk.Bool(false),
                                    IntValue: sdk.String("nisi"),
                                    StringValue: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(147014),
                                        Value: sdk.String("sapiente"),
                                    },
                                },
                            },
                            DroppedAttributesCount: sdk.Int(159870),
                        },
                        SpanID: sdk.String("ratione"),
                        TraceID: sdk.String("explicabo"),
                        Type: shared.LinkTypeEnumParentLinkedSpan.ToPointer(),
                    },
                    shared.Link{
                        Attributes: &shared.Attributes{
                            AttributeMap: map[string]shared.AttributeValue{
                                "atque": shared.AttributeValue{
                                    BoolValue: sdk.Bool(false),
                                    IntValue: sdk.String("et"),
                                    StringValue: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(456911),
                                        Value: sdk.String("eveniet"),
                                    },
                                },
                                "accusamus": shared.AttributeValue{
                                    BoolValue: sdk.Bool(false),
                                    IntValue: sdk.String("veritatis"),
                                    StringValue: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(458604),
                                        Value: sdk.String("quod"),
                                    },
                                },
                                "nam": shared.AttributeValue{
                                    BoolValue: sdk.Bool(false),
                                    IntValue: sdk.String("vero"),
                                    StringValue: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(399025),
                                        Value: sdk.String("quasi"),
                                    },
                                },
                            },
                            DroppedAttributesCount: sdk.Int(904045),
                        },
                        SpanID: sdk.String("vel"),
                        TraceID: sdk.String("harum"),
                        Type: shared.LinkTypeEnumChildLinkedSpan.ToPointer(),
                    },
                    shared.Link{
                        Attributes: &shared.Attributes{
                            AttributeMap: map[string]shared.AttributeValue{
                                "occaecati": shared.AttributeValue{
                                    BoolValue: sdk.Bool(false),
                                    IntValue: sdk.String("minima"),
                                    StringValue: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(716244),
                                        Value: sdk.String("eligendi"),
                                    },
                                },
                                "sit": shared.AttributeValue{
                                    BoolValue: sdk.Bool(false),
                                    IntValue: sdk.String("culpa"),
                                    StringValue: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(731398),
                                        Value: sdk.String("adipisci"),
                                    },
                                },
                                "cumque": shared.AttributeValue{
                                    BoolValue: sdk.Bool(false),
                                    IntValue: sdk.String("consequuntur"),
                                    StringValue: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(9766),
                                        Value: sdk.String("minus"),
                                    },
                                },
                            },
                            DroppedAttributesCount: sdk.Int(308286),
                        },
                        SpanID: sdk.String("sapiente"),
                        TraceID: sdk.String("consectetur"),
                        Type: shared.LinkTypeEnumChildLinkedSpan.ToPointer(),
                    },
                },
            },
            Name: sdk.String("Eduardo Wilkinson"),
            ParentSpanID: sdk.String("esse"),
            SameProcessAsParentSpan: sdk.Bool(false),
            SpanID: sdk.String("quasi"),
            SpanKind: shared.SpanSpanKindEnumConsumer.ToPointer(),
            StackTrace: &shared.StackTrace{
                StackFrames: &shared.StackFrames{
                    DroppedFramesCount: sdk.Int(621679),
                    Frame: []shared.StackFrame{
                        shared.StackFrame{
                            ColumnNumber: sdk.String("pariatur"),
                            FileName: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(820767),
                                Value: sdk.String("quia"),
                            },
                            FunctionName: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(908844),
                                Value: sdk.String("asperiores"),
                            },
                            LineNumber: sdk.String("facere"),
                            LoadModule: &shared.Module{
                                BuildID: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(85001),
                                    Value: sdk.String("consequuntur"),
                                },
                                Module: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(94458),
                                    Value: sdk.String("similique"),
                                },
                            },
                            OriginalFunctionName: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(633608),
                                Value: sdk.String("aliquid"),
                            },
                            SourceVersion: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(949298),
                                Value: sdk.String("quae"),
                            },
                        },
                        shared.StackFrame{
                            ColumnNumber: sdk.String("earum"),
                            FileName: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(424032),
                                Value: sdk.String("in"),
                            },
                            FunctionName: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(258684),
                                Value: sdk.String("libero"),
                            },
                            LineNumber: sdk.String("illum"),
                            LoadModule: &shared.Module{
                                BuildID: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(742238),
                                    Value: sdk.String("accusantium"),
                                },
                                Module: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(306986),
                                    Value: sdk.String("sapiente"),
                                },
                            },
                            OriginalFunctionName: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(119771),
                                Value: sdk.String("ullam"),
                            },
                            SourceVersion: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(443879),
                                Value: sdk.String("ullam"),
                            },
                        },
                        shared.StackFrame{
                            ColumnNumber: sdk.String("nisi"),
                            FileName: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(16328),
                                Value: sdk.String("voluptatum"),
                            },
                            FunctionName: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(185232),
                                Value: sdk.String("quibusdam"),
                            },
                            LineNumber: sdk.String("ex"),
                            LoadModule: &shared.Module{
                                BuildID: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(536275),
                                    Value: sdk.String("itaque"),
                                },
                                Module: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(680270),
                                    Value: sdk.String("architecto"),
                                },
                            },
                            OriginalFunctionName: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(609178),
                                Value: sdk.String("tenetur"),
                            },
                            SourceVersion: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(98478),
                                Value: sdk.String("at"),
                            },
                        },
                    },
                },
                StackTraceHashID: sdk.String("et"),
            },
            StartTime: sdk.String("voluptate"),
            Status: &shared.Status{
                Code: sdk.Int(55965),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "consectetur": "adipisci",
                    },
                    map[string]interface{}{
                        "temporibus": "accusantium",
                        "rem": "aut",
                        "laudantium": "eum",
                    },
                },
                Message: sdk.String("mollitia"),
            },
            TimeEvents: &shared.TimeEvents{
                DroppedAnnotationsCount: sdk.Int(68074),
                DroppedMessageEventsCount: sdk.Int(544591),
                TimeEvent: []shared.TimeEvent{
                    shared.TimeEvent{
                        Annotation: &shared.Annotation{
                            Attributes: &shared.Attributes{
                                AttributeMap: map[string]shared.AttributeValue{
                                    "dolor": shared.AttributeValue{
                                        BoolValue: sdk.Bool(false),
                                        IntValue: sdk.String("occaecati"),
                                        StringValue: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(253191),
                                            Value: sdk.String("impedit"),
                                        },
                                    },
                                },
                                DroppedAttributesCount: sdk.Int(131055),
                            },
                            Description: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(376226),
                                Value: sdk.String("aut"),
                            },
                        },
                        MessageEvent: &shared.MessageEvent{
                            CompressedSizeBytes: sdk.String("dignissimos"),
                            ID: sdk.String("dicta"),
                            Type: shared.MessageEventTypeEnumReceived.ToPointer(),
                            UncompressedSizeBytes: sdk.String("natus"),
                        },
                        Time: sdk.String("velit"),
                    },
                    shared.TimeEvent{
                        Annotation: &shared.Annotation{
                            Attributes: &shared.Attributes{
                                AttributeMap: map[string]shared.AttributeValue{
                                    "voluptas": shared.AttributeValue{
                                        BoolValue: sdk.Bool(false),
                                        IntValue: sdk.String("asperiores"),
                                        StringValue: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(45659),
                                            Value: sdk.String("ea"),
                                        },
                                    },
                                    "quaerat": shared.AttributeValue{
                                        BoolValue: sdk.Bool(false),
                                        IntValue: sdk.String("consequuntur"),
                                        StringValue: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(831520),
                                            Value: sdk.String("officia"),
                                        },
                                    },
                                    "maxime": shared.AttributeValue{
                                        BoolValue: sdk.Bool(false),
                                        IntValue: sdk.String("dignissimos"),
                                        StringValue: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(640024),
                                            Value: sdk.String("asperiores"),
                                        },
                                    },
                                    "nemo": shared.AttributeValue{
                                        BoolValue: sdk.Bool(false),
                                        IntValue: sdk.String("quae"),
                                        StringValue: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(312753),
                                            Value: sdk.String("porro"),
                                        },
                                    },
                                },
                                DroppedAttributesCount: sdk.Int(801836),
                            },
                            Description: &shared.TruncatableString{
                                TruncatedByteCount: sdk.Int(288398),
                                Value: sdk.String("ab"),
                            },
                        },
                        MessageEvent: &shared.MessageEvent{
                            CompressedSizeBytes: sdk.String("adipisci"),
                            ID: sdk.String("fuga"),
                            Type: shared.MessageEventTypeEnumSent.ToPointer(),
                            UncompressedSizeBytes: sdk.String("suscipit"),
                        },
                        Time: sdk.String("velit"),
                    },
                },
            },
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("totam"),
        Key: sdk.String("fugiat"),
        Name: "Dora Luettgen",
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.CloudtraceProjectsTracesSpansCreateSpanSecurity{
        Option1: &operations.CloudtraceProjectsTracesSpansCreateSpanSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Span != nil {
        // handle response
    }
}
```
