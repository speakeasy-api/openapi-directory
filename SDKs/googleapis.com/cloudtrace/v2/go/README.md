# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudtrace/v2/go
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
    res, err := s.Projects.CloudtraceProjectsTracesBatchWrite(ctx, operations.CloudtraceProjectsTracesBatchWriteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchWriteSpansRequest: &shared.BatchWriteSpansRequest{
            Spans: []shared.Span{
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "quibusdam": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("unde"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(857946),
                                    Value: sdk.String("corrupti"),
                                },
                            },
                            "illum": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("vel"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(623564),
                                    Value: sdk.String("deserunt"),
                                },
                            },
                            "suscipit": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("iure"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(297534),
                                    Value: sdk.String("debitis"),
                                },
                            },
                        },
                        DroppedAttributesCount: sdk.Int(56713),
                    },
                    ChildSpanCount: sdk.Int(963663),
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: sdk.Int(272656),
                        Value: sdk.String("suscipit"),
                    },
                    EndTime: sdk.String("molestiae"),
                    Links: &shared.Links{
                        DroppedLinksCount: sdk.Int(791725),
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "iusto": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("excepturi"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(392785),
                                                Value: sdk.String("recusandae"),
                                            },
                                        },
                                        "temporibus": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("ab"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(337396),
                                                Value: sdk.String("veritatis"),
                                            },
                                        },
                                        "deserunt": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("perferendis"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(368241),
                                                Value: sdk.String("repellendus"),
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: sdk.Int(957156),
                                },
                                SpanID: sdk.String("quo"),
                                TraceID: sdk.String("odit"),
                                Type: shared.LinkTypeEnumParentLinkedSpan.ToPointer(),
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "maiores": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("molestiae"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(799159),
                                                Value: sdk.String("quod"),
                                            },
                                        },
                                        "esse": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("totam"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(780529),
                                                Value: sdk.String("dolorum"),
                                            },
                                        },
                                        "dicta": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("nam"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(639921),
                                                Value: sdk.String("occaecati"),
                                            },
                                        },
                                        "fugit": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("deleniti"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(944669),
                                                Value: sdk.String("optio"),
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: sdk.Int(521848),
                                },
                                SpanID: sdk.String("beatae"),
                                TraceID: sdk.String("commodi"),
                                Type: shared.LinkTypeEnumChildLinkedSpan.ToPointer(),
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "qui": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("impedit"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(736918),
                                                Value: sdk.String("esse"),
                                            },
                                        },
                                        "ipsum": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("excepturi"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(135218),
                                                Value: sdk.String("perferendis"),
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: sdk.Int(324141),
                                },
                                SpanID: sdk.String("natus"),
                                TraceID: sdk.String("sed"),
                                Type: shared.LinkTypeEnumChildLinkedSpan.ToPointer(),
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "natus": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("laboriosam"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(943749),
                                                Value: sdk.String("saepe"),
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: sdk.Int(681820),
                                },
                                SpanID: sdk.String("in"),
                                TraceID: sdk.String("corporis"),
                                Type: shared.LinkTypeEnumChildLinkedSpan.ToPointer(),
                            },
                        },
                    },
                    Name: sdk.String("Mr. Kerry Predovic"),
                    ParentSpanID: sdk.String("est"),
                    SameProcessAsParentSpan: sdk.Bool(false),
                    SpanID: sdk.String("mollitia"),
                    SpanKind: shared.SpanSpanKindEnumProducer.ToPointer(),
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: sdk.Int(170909),
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("corporis"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(128926),
                                        Value: sdk.String("nobis"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(315428),
                                        Value: sdk.String("omnis"),
                                    },
                                    LineNumber: sdk.String("nemo"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(325047),
                                            Value: sdk.String("excepturi"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(38425),
                                            Value: sdk.String("iure"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(634274),
                                        Value: sdk.String("doloribus"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(958950),
                                        Value: sdk.String("architecto"),
                                    },
                                },
                            },
                        },
                        StackTraceHashID: sdk.String("mollitia"),
                    },
                    StartTime: sdk.String("dolorem"),
                    Status: &shared.Status{
                        Code: sdk.Int(635059),
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "mollitia": "occaecati",
                                "numquam": "commodi",
                                "quam": "molestiae",
                                "velit": "error",
                            },
                        },
                        Message: sdk.String("quia"),
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: sdk.Int(338007),
                        DroppedMessageEventsCount: sdk.Int(110375),
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "enim": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("odit"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(778346),
                                                    Value: sdk.String("sequi"),
                                                },
                                            },
                                            "tenetur": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("ipsam"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(662527),
                                                    Value: sdk.String("possimus"),
                                                },
                                            },
                                            "aut": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("quasi"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(622846),
                                                    Value: sdk.String("temporibus"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(673660),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(96098),
                                        Value: sdk.String("reiciendis"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("voluptatibus"),
                                    ID: sdk.String("vero"),
                                    Type: shared.MessageEventTypeEnumSent.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("praesentium"),
                                },
                                Time: sdk.String("voluptatibus"),
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "omnis": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("voluptate"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(739264),
                                                    Value: sdk.String("perferendis"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(39187),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(441711),
                                        Value: sdk.String("ut"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("maiores"),
                                    ID: sdk.String("dicta"),
                                    Type: shared.MessageEventTypeEnumSent.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("dolore"),
                                },
                                Time: sdk.String("iusto"),
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "harum": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("enim"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(880476),
                                                    Value: sdk.String("commodi"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(918236),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(64147),
                                        Value: sdk.String("ipsum"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("quidem"),
                                    ID: sdk.String("molestias"),
                                    Type: shared.MessageEventTypeEnumSent.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("pariatur"),
                                },
                                Time: sdk.String("modi"),
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "rem": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("voluptates"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(93940),
                                    Value: sdk.String("repudiandae"),
                                },
                            },
                            "sint": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("veritatis"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(929297),
                                    Value: sdk.String("incidunt"),
                                },
                            },
                            "enim": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("consequatur"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(667411),
                                    Value: sdk.String("quibusdam"),
                                },
                            },
                        },
                        DroppedAttributesCount: sdk.Int(131797),
                    },
                    ChildSpanCount: sdk.Int(647174),
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: sdk.Int(716327),
                        Value: sdk.String("quibusdam"),
                    },
                    EndTime: sdk.String("labore"),
                    Links: &shared.Links{
                        DroppedLinksCount: sdk.Int(264730),
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "cupiditate": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("quos"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(20107),
                                                Value: sdk.String("magni"),
                                            },
                                        },
                                        "assumenda": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("ipsam"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(4695),
                                                Value: sdk.String("fugit"),
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: sdk.Int(677817),
                                },
                                SpanID: sdk.String("excepturi"),
                                TraceID: sdk.String("tempora"),
                                Type: shared.LinkTypeEnumParentLinkedSpan.ToPointer(),
                            },
                        },
                    },
                    Name: sdk.String("Francisco Windler"),
                    ParentSpanID: sdk.String("eligendi"),
                    SameProcessAsParentSpan: sdk.Bool(false),
                    SpanID: sdk.String("sint"),
                    SpanKind: shared.SpanSpanKindEnumServer.ToPointer(),
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: sdk.Int(592042),
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("sint"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(638921),
                                        Value: sdk.String("dolor"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(891555),
                                        Value: sdk.String("a"),
                                    },
                                    LineNumber: sdk.String("dolorum"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(447125),
                                            Value: sdk.String("in"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(846409),
                                            Value: sdk.String("maiores"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(699479),
                                        Value: sdk.String("dicta"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(297437),
                                        Value: sdk.String("cumque"),
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("facere"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(411820),
                                        Value: sdk.String("aliquid"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(675439),
                                        Value: sdk.String("accusamus"),
                                    },
                                    LineNumber: sdk.String("non"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(581273),
                                            Value: sdk.String("enim"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(881736),
                                            Value: sdk.String("delectus"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(692532),
                                        Value: sdk.String("provident"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(725255),
                                        Value: sdk.String("id"),
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("blanditiis"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(533206),
                                        Value: sdk.String("sapiente"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(230533),
                                        Value: sdk.String("deserunt"),
                                    },
                                    LineNumber: sdk.String("nisi"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(423855),
                                            Value: sdk.String("natus"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(606393),
                                            Value: sdk.String("molestiae"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(19193),
                                        Value: sdk.String("nihil"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(301575),
                                        Value: sdk.String("distinctio"),
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("id"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(287991),
                                        Value: sdk.String("labore"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(383462),
                                        Value: sdk.String("natus"),
                                    },
                                    LineNumber: sdk.String("nobis"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(428769),
                                            Value: sdk.String("vero"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(135474),
                                            Value: sdk.String("architecto"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(298282),
                                        Value: sdk.String("et"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(569965),
                                        Value: sdk.String("ullam"),
                                    },
                                },
                            },
                        },
                        StackTraceHashID: sdk.String("provident"),
                    },
                    StartTime: sdk.String("quos"),
                    Status: &shared.Status{
                        Code: sdk.Int(574325),
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "reiciendis": "mollitia",
                                "ad": "eum",
                                "dolor": "necessitatibus",
                            },
                        },
                        Message: sdk.String("odit"),
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: sdk.Int(367562),
                        DroppedMessageEventsCount: sdk.Int(97260),
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "debitis": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("eius"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(806194),
                                                    Value: sdk.String("deleniti"),
                                                },
                                            },
                                            "facilis": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("in"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(100226),
                                                    Value: sdk.String("architecto"),
                                                },
                                            },
                                            "repudiandae": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("ullam"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(714242),
                                                    Value: sdk.String("nihil"),
                                                },
                                            },
                                            "repellat": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("quibusdam"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(149448),
                                                    Value: sdk.String("saepe"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(868126),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(37559),
                                        Value: sdk.String("consequuntur"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("praesentium"),
                                    ID: sdk.String("natus"),
                                    Type: shared.MessageEventTypeEnumTypeUnspecified.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("sunt"),
                                },
                                Time: sdk.String("quo"),
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "pariatur": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("maxime"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(411397),
                                                    Value: sdk.String("excepturi"),
                                                },
                                            },
                                            "odit": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("ea"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(33222),
                                                    Value: sdk.String("ab"),
                                                },
                                            },
                                            "maiores": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("quidem"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(373291),
                                                    Value: sdk.String("voluptate"),
                                                },
                                            },
                                            "autem": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("nam"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(50588),
                                                    Value: sdk.String("pariatur"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(365496),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(975522),
                                        Value: sdk.String("perferendis"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("fugiat"),
                                    ID: sdk.String("amet"),
                                    Type: shared.MessageEventTypeEnumTypeUnspecified.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("cumque"),
                                },
                                Time: sdk.String("corporis"),
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "libero": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("nobis"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(171629),
                                    Value: sdk.String("quis"),
                                },
                            },
                            "totam": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("dignissimos"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(54338),
                                    Value: sdk.String("quis"),
                                },
                            },
                            "nesciunt": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("eos"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(18521),
                                    Value: sdk.String("dolores"),
                                },
                            },
                            "minus": shared.AttributeValue{
                                BoolValue: sdk.Bool(false),
                                IntValue: sdk.String("quam"),
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: sdk.Int(223924),
                                    Value: sdk.String("vero"),
                                },
                            },
                        },
                        DroppedAttributesCount: sdk.Int(345352),
                    },
                    ChildSpanCount: sdk.Int(944120),
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: sdk.Int(928082),
                        Value: sdk.String("omnis"),
                    },
                    EndTime: sdk.String("facilis"),
                    Links: &shared.Links{
                        DroppedLinksCount: sdk.Int(596656),
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "consequuntur": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("blanditiis"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(621479),
                                                Value: sdk.String("eaque"),
                                            },
                                        },
                                        "occaecati": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("rerum"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(237893),
                                                Value: sdk.String("asperiores"),
                                            },
                                        },
                                        "earum": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("modi"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(613966),
                                                Value: sdk.String("dolorum"),
                                            },
                                        },
                                        "deleniti": shared.AttributeValue{
                                            BoolValue: sdk.Bool(false),
                                            IntValue: sdk.String("pariatur"),
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: sdk.Int(589910),
                                                Value: sdk.String("nobis"),
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: sdk.Int(730122),
                                },
                                SpanID: sdk.String("delectus"),
                                TraceID: sdk.String("quaerat"),
                                Type: shared.LinkTypeEnumChildLinkedSpan.ToPointer(),
                            },
                        },
                    },
                    Name: sdk.String("Florence Ebert"),
                    ParentSpanID: sdk.String("ipsum"),
                    SameProcessAsParentSpan: sdk.Bool(false),
                    SpanID: sdk.String("hic"),
                    SpanKind: shared.SpanSpanKindEnumClient.ToPointer(),
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: sdk.Int(739551),
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("dignissimos"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(970237),
                                        Value: sdk.String("amet"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(680545),
                                        Value: sdk.String("numquam"),
                                    },
                                    LineNumber: sdk.String("veritatis"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(58029),
                                            Value: sdk.String("ipsa"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(434417),
                                            Value: sdk.String("odio"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(311796),
                                        Value: sdk.String("accusamus"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(696344),
                                        Value: sdk.String("voluptatibus"),
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: sdk.String("voluptas"),
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(617658),
                                        Value: sdk.String("eos"),
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(542499),
                                        Value: sdk.String("sit"),
                                    },
                                    LineNumber: sdk.String("fugiat"),
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(67249),
                                            Value: sdk.String("soluta"),
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: sdk.Int(679393),
                                            Value: sdk.String("iusto"),
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(453697),
                                        Value: sdk.String("dolorum"),
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(536579),
                                        Value: sdk.String("omnis"),
                                    },
                                },
                            },
                        },
                        StackTraceHashID: sdk.String("necessitatibus"),
                    },
                    StartTime: sdk.String("distinctio"),
                    Status: &shared.Status{
                        Code: sdk.Int(990339),
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "voluptate": "id",
                            },
                            map[string]interface{}{
                                "eius": "aspernatur",
                                "perferendis": "amet",
                                "optio": "accusamus",
                                "ad": "saepe",
                            },
                        },
                        Message: sdk.String("suscipit"),
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: sdk.Int(645785),
                        DroppedMessageEventsCount: sdk.Int(588317),
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "totam": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("similique"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(55),
                                                    Value: sdk.String("at"),
                                                },
                                            },
                                            "quaerat": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("tempora"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(425451),
                                                    Value: sdk.String("quod"),
                                                },
                                            },
                                            "officiis": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("qui"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(679880),
                                                    Value: sdk.String("a"),
                                                },
                                            },
                                            "esse": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("harum"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(483409),
                                                    Value: sdk.String("ipsum"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(788740),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(947371),
                                        Value: sdk.String("amet"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("tempore"),
                                    ID: sdk.String("accusamus"),
                                    Type: shared.MessageEventTypeEnumTypeUnspecified.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("enim"),
                                },
                                Time: sdk.String("dolorem"),
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "totam": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("nihil"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(25662),
                                                    Value: sdk.String("expedita"),
                                                },
                                            },
                                            "neque": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("sed"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(424685),
                                                    Value: sdk.String("libero"),
                                                },
                                            },
                                            "voluptas": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("deserunt"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(463575),
                                                    Value: sdk.String("ipsum"),
                                                },
                                            },
                                            "incidunt": shared.AttributeValue{
                                                BoolValue: sdk.Bool(false),
                                                IntValue: sdk.String("qui"),
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: sdk.Int(586784),
                                                    Value: sdk.String("maxime"),
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: sdk.Int(863856),
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: sdk.Int(747080),
                                        Value: sdk.String("dicta"),
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: sdk.String("laborum"),
                                    ID: sdk.String("totam"),
                                    Type: shared.MessageEventTypeEnumTypeUnspecified.ToPointer(),
                                    UncompressedSizeBytes: sdk.String("aspernatur"),
                                },
                                Time: sdk.String("dolores"),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("quam"),
        Key: sdk.String("molestias"),
        Name: "Shawn Doyle",
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("nam"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [CloudtraceProjectsTracesBatchWrite](docs/projects/README.md#cloudtraceprojectstracesbatchwrite) - Batch writes new spans to new or existing traces. You cannot update existing spans.
* [CloudtraceProjectsTracesSpansCreateSpan](docs/projects/README.md#cloudtraceprojectstracesspanscreatespan) - Creates a new span.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
