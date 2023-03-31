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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CloudtraceProjectsTracesBatchWriteRequest{
        DollarXgafv: "2",
        BatchWriteSpansRequest: &shared.BatchWriteSpansRequest{
            Spans: []shared.Span{
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "quibusdam": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "unde",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 857946,
                                    Value: "corrupti",
                                },
                            },
                            "illum": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "vel",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 623564,
                                    Value: "deserunt",
                                },
                            },
                            "suscipit": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "iure",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 297534,
                                    Value: "debitis",
                                },
                            },
                        },
                        DroppedAttributesCount: 56713,
                    },
                    ChildSpanCount: 963663,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 272656,
                        Value: "suscipit",
                    },
                    EndTime: "molestiae",
                    Links: &shared.Links{
                        DroppedLinksCount: 791725,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "iusto": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "excepturi",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 392785,
                                                Value: "recusandae",
                                            },
                                        },
                                        "temporibus": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "ab",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 337396,
                                                Value: "veritatis",
                                            },
                                        },
                                        "deserunt": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "perferendis",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 368241,
                                                Value: "repellendus",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 957156,
                                },
                                SpanID: "quo",
                                TraceID: "odit",
                                Type: "PARENT_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "maiores": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "molestiae",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 799159,
                                                Value: "quod",
                                            },
                                        },
                                        "esse": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "totam",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 780529,
                                                Value: "dolorum",
                                            },
                                        },
                                        "dicta": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "nam",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 639921,
                                                Value: "occaecati",
                                            },
                                        },
                                        "fugit": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "deleniti",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 944669,
                                                Value: "optio",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 521848,
                                },
                                SpanID: "beatae",
                                TraceID: "commodi",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "qui": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "impedit",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 736918,
                                                Value: "esse",
                                            },
                                        },
                                        "ipsum": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "excepturi",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 135218,
                                                Value: "perferendis",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 324141,
                                },
                                SpanID: "natus",
                                TraceID: "sed",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "natus": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "laboriosam",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 943749,
                                                Value: "saepe",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 681820,
                                },
                                SpanID: "in",
                                TraceID: "corporis",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "iure",
                    ParentSpanID: "saepe",
                    SameProcessAsParentSpan: false,
                    SpanID: "quidem",
                    SpanKind: "SPAN_KIND_UNSPECIFIED",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 60225,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "est",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 653140,
                                        Value: "laborum",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 170909,
                                        Value: "dolorem",
                                    },
                                    LineNumber: "corporis",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 128926,
                                            Value: "nobis",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 315428,
                                            Value: "omnis",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 363711,
                                        Value: "minima",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 570197,
                                        Value: "accusantium",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "iure",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 634274,
                                        Value: "doloribus",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 958950,
                                        Value: "architecto",
                                    },
                                    LineNumber: "mollitia",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 208876,
                                            Value: "culpa",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 161309,
                                            Value: "repellat",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 653108,
                                        Value: "occaecati",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 253291,
                                        Value: "commodi",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "quam",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 474697,
                                        Value: "velit",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 623510,
                                        Value: "quia",
                                    },
                                    LineNumber: "quis",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 110375,
                                            Value: "laborum",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 656330,
                                            Value: "enim",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 138183,
                                        Value: "quo",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 196582,
                                        Value: "tenetur",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "ipsam",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 662527,
                                        Value: "possimus",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 13571,
                                        Value: "quasi",
                                    },
                                    LineNumber: "error",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 837945,
                                            Value: "laborum",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 96098,
                                            Value: "reiciendis",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 976460,
                                        Value: "vero",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 468651,
                                        Value: "praesentium",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "voluptatibus",
                    },
                    StartTime: "ipsa",
                    Status: &shared.Status{
                        Code: 604846,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "perferendis": "doloremque",
                                "reprehenderit": "ut",
                                "maiores": "dicta",
                            },
                            map[string]interface{}{
                                "dolore": "iusto",
                                "dicta": "harum",
                            },
                        },
                        Message: "enim",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 880476,
                        DroppedMessageEventsCount: 414263,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "ipsum": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "quidem",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 565189,
                                                    Value: "excepturi",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 865103,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 265389,
                                        Value: "praesentium",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "rem",
                                    ID: "voluptates",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "repudiandae",
                                },
                                Time: "sint",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "itaque": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "incidunt",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 318569,
                                                    Value: "consequatur",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 667411,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 842342,
                                        Value: "explicabo",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "deserunt",
                                    ID: "distinctio",
                                    Type: "RECEIVED",
                                    UncompressedSizeBytes: "labore",
                                },
                                Time: "modi",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "aliquid": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "cupiditate",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 552822,
                                                    Value: "perferendis",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 164940,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 828940,
                                        Value: "ipsam",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "alias",
                                    ID: "fugit",
                                    Type: "RECEIVED",
                                    UncompressedSizeBytes: "excepturi",
                                },
                                Time: "tempora",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "tempore": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "labore",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 962189,
                                                    Value: "eum",
                                                },
                                            },
                                            "non": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "eligendi",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 576157,
                                                    Value: "aliquid",
                                                },
                                            },
                                            "provident": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "necessitatibus",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 572252,
                                                    Value: "officia",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 223081,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 891555,
                                        Value: "a",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "dolorum",
                                    ID: "in",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "illum",
                                },
                                Time: "maiores",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "dicta": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "magnam",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 767024,
                                    Value: "facere",
                                },
                            },
                            "ea": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "aliquid",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 675439,
                                    Value: "accusamus",
                                },
                            },
                            "non": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "occaecati",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 313218,
                                    Value: "accusamus",
                                },
                            },
                        },
                        DroppedAttributesCount: 965417,
                    },
                    ChildSpanCount: 692532,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 588465,
                        Value: "nam",
                    },
                    EndTime: "id",
                    Links: &shared.Links{
                        DroppedLinksCount: 501324,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "amet": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "deserunt",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 394869,
                                                Value: "vel",
                                            },
                                        },
                                        "natus": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "omnis",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 474867,
                                                Value: "perferendis",
                                            },
                                        },
                                        "nihil": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "magnam",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 716075,
                                                Value: "id",
                                            },
                                        },
                                        "labore": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "labore",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 383462,
                                                Value: "natus",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 749170,
                                },
                                SpanID: "eum",
                                TraceID: "vero",
                                Type: "TYPE_UNSPECIFIED",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "magnam": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "et",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 569965,
                                                Value: "ullam",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 590873,
                                },
                                SpanID: "quos",
                                TraceID: "sint",
                                Type: "TYPE_UNSPECIFIED",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "reiciendis": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "mollitia",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 320997,
                                                Value: "eum",
                                            },
                                        },
                                        "dolor": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "necessitatibus",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 141264,
                                                Value: "nemo",
                                            },
                                        },
                                        "quasi": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "iure",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 984043,
                                                Value: "debitis",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 260341,
                                },
                                SpanID: "maxime",
                                TraceID: "deleniti",
                                Type: "PARENT_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "in",
                    ParentSpanID: "architecto",
                    SameProcessAsParentSpan: false,
                    SpanID: "architecto",
                    SpanKind: "CONSUMER",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 352312,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "nihil",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 998848,
                                        Value: "quibusdam",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 149448,
                                        Value: "saepe",
                                    },
                                    LineNumber: "pariatur",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 37559,
                                            Value: "consequuntur",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 508315,
                                            Value: "natus",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 166847,
                                        Value: "sunt",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 779051,
                                        Value: "illum",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "pariatur",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 807319,
                                        Value: "ea",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 569101,
                                        Value: "odit",
                                    },
                                    LineNumber: "ea",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 33222,
                                            Value: "ab",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 982575,
                                            Value: "quidem",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 373291,
                                        Value: "voluptate",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 420075,
                                        Value: "nam",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "eaque",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 866383,
                                        Value: "nemo",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 975522,
                                        Value: "perferendis",
                                    },
                                    LineNumber: "fugiat",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 230742,
                                            Value: "aut",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 764912,
                                            Value: "corporis",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 944124,
                                        Value: "libero",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 749999,
                                        Value: "dolores",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "quis",
                    },
                    StartTime: "totam",
                    Status: &shared.Status{
                        Code: 489549,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "nesciunt": "eos",
                                "perferendis": "dolores",
                            },
                        },
                        Message: "minus",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 463451,
                        DroppedMessageEventsCount: 223924,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "hic": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "recusandae",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 608253,
                                                    Value: "facilis",
                                                },
                                            },
                                            "perspiciatis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "voluptatem",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 783645,
                                                    Value: "consequuntur",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 500026,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 621479,
                                        Value: "eaque",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "occaecati",
                                    ID: "rerum",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "asperiores",
                                },
                                Time: "earum",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "iste": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "dolorum",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 535633,
                                                    Value: "pariatur",
                                                },
                                            },
                                            "provident": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "nobis",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 730122,
                                                    Value: "delectus",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 311945,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 554242,
                                        Value: "aliquid",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "dolorem",
                                    ID: "dolorem",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "qui",
                                },
                                Time: "ipsum",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "excepturi": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "cum",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 452109,
                                                    Value: "dignissimos",
                                                },
                                            },
                                            "reiciendis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "amet",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 680545,
                                                    Value: "numquam",
                                                },
                                            },
                                            "veritatis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "ipsa",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 56418,
                                                    Value: "iure",
                                                },
                                            },
                                            "odio": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "quaerat",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 881005,
                                                    Value: "quidem",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 976405,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 377752,
                                        Value: "natus",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "eos",
                                    ID: "atque",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "fugiat",
                                },
                                Time: "ab",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "dolorum": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "iusto",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 453697,
                                                    Value: "dolorum",
                                                },
                                            },
                                            "deleniti": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "omnis",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 896672,
                                                    Value: "distinctio",
                                                },
                                            },
                                            "asperiores": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "nihil",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 216897,
                                                    Value: "voluptate",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 663078,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 906418,
                                        Value: "eius",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "aspernatur",
                                    ID: "perferendis",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "optio",
                                },
                                Time: "accusamus",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "saepe": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "suscipit",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 645785,
                                    Value: "provident",
                                },
                            },
                            "minima": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "repellendus",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 519711,
                                    Value: "similique",
                                },
                            },
                        },
                        DroppedAttributesCount: 55,
                    },
                    ChildSpanCount: 872651,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 311860,
                        Value: "tempora",
                    },
                    EndTime: "vel",
                    Links: &shared.Links{
                        DroppedLinksCount: 798047,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "dolorum": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "a",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 456130,
                                                Value: "harum",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 483409,
                                },
                                SpanID: "ipsum",
                                TraceID: "quisquam",
                                Type: "PARENT_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "tempore": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "accusamus",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 253941,
                                                Value: "enim",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 213312,
                                },
                                SpanID: "sapiente",
                                TraceID: "totam",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "expedita": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "neque",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 153694,
                                                Value: "vel",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 730442,
                                },
                                SpanID: "voluptas",
                                TraceID: "deserunt",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "incidunt": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "qui",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 586784,
                                                Value: "maxime",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 863856,
                                },
                                SpanID: "soluta",
                                TraceID: "dicta",
                                Type: "PARENT_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "totam",
                    ParentSpanID: "incidunt",
                    SameProcessAsParentSpan: false,
                    SpanID: "aspernatur",
                    SpanKind: "INTERNAL",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 716860,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "aliquid",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 463150,
                                        Value: "molestias",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 840429,
                                        Value: "qui",
                                    },
                                    LineNumber: "neque",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 144847,
                                            Value: "magni",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 488056,
                                            Value: "sunt",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 355613,
                                        Value: "nam",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 940432,
                                        Value: "voluptatem",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "cumque",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 746994,
                                        Value: "nobis",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 92596,
                                        Value: "saepe",
                                    },
                                    LineNumber: "ipsum",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 83422,
                                            Value: "nobis",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 552193,
                                            Value: "tempore",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 584476,
                                        Value: "aperiam",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 961937,
                                        Value: "dolorem",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "dolore",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 286915,
                                        Value: "adipisci",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 677263,
                                        Value: "architecto",
                                    },
                                    LineNumber: "quae",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 16429,
                                            Value: "quas",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 929530,
                                            Value: "consequatur",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 669917,
                                        Value: "repellendus",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 785153,
                                        Value: "doloribus",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "ut",
                    },
                    StartTime: "facilis",
                    Status: &shared.Status{
                        Code: 586410,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "laudantium": "odio",
                            },
                        },
                        Message: "occaecati",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 977496,
                        DroppedMessageEventsCount: 787542,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "quis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "ipsum",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 961571,
                                                    Value: "voluptate",
                                                },
                                            },
                                            "consectetur": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "vero",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 949319,
                                                    Value: "dignissimos",
                                                },
                                            },
                                            "hic": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "distinctio",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 799203,
                                                    Value: "odio",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 630448,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 708548,
                                        Value: "vero",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "ducimus",
                                    ID: "dolore",
                                    Type: "RECEIVED",
                                    UncompressedSizeBytes: "illum",
                                },
                                Time: "sequi",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "impedit": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "aut",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 974259,
                                                    Value: "exercitationem",
                                                },
                                            },
                                            "nulla": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "fugit",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 780427,
                                                    Value: "maiores",
                                                },
                                            },
                                            "doloribus": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "iusto",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 753570,
                                                    Value: "ducimus",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 4048,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 639473,
                                        Value: "tempora",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "ipsam",
                                    ID: "ea",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "vel",
                                },
                                Time: "possimus",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "ratione": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "ex",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 511319,
                                                    Value: "dicta",
                                                },
                                            },
                                            "dolor": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "maiores",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 97844,
                                                    Value: "ex",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 862192,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 569211,
                                        Value: "voluptatibus",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "nostrum",
                                    ID: "sapiente",
                                    Type: "RECEIVED",
                                    UncompressedSizeBytes: "saepe",
                                },
                                Time: "ea",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "corporis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "veniam",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 399499,
                                                    Value: "inventore",
                                                },
                                            },
                                            "magnam": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "ea",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 775220,
                                                    Value: "consectetur",
                                                },
                                            },
                                            "recusandae": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "aspernatur",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 325310,
                                                    Value: "eaque",
                                                },
                                            },
                                            "a": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "libero",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 13948,
                                                    Value: "aut",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 533466,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 770581,
                                        Value: "aliquam",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "fugit",
                                    ID: "accusamus",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "non",
                                },
                                Time: "et",
                            },
                        },
                    },
                },
            },
        },
        AccessToken: "dolorum",
        Alt: "proto",
        Callback: "placeat",
        Fields: "velit",
        Key: "eum",
        Name: "autem",
        OauthToken: "nobis",
        PrettyPrint: false,
        QuotaUser: "quas",
        UploadType: "assumenda",
        UploadProtocol: "nulla",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsTracesBatchWrite(ctx, req, operations.CloudtraceProjectsTracesBatchWriteSecurity{
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


### Projects

* `CloudtraceProjectsTracesBatchWrite` - Batch writes new spans to new or existing traces. You cannot update existing spans.
* `CloudtraceProjectsTracesSpansCreateSpan` - Creates a new span.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
