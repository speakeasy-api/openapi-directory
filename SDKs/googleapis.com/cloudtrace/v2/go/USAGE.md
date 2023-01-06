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
    
    req := operations.CloudtraceProjectsTracesBatchWriteRequest{
        Security: operations.CloudtraceProjectsTracesBatchWriteSecurity{
            Option1: &operations.CloudtraceProjectsTracesBatchWriteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudtraceProjectsTracesBatchWritePathParams{
            Name: "enim",
        },
        QueryParams: operations.CloudtraceProjectsTracesBatchWriteQueryParams{
            DollarXgafv: "1",
            AccessToken: "deserunt",
            Alt: "json",
            Callback: "sit",
            Fields: "quam",
            Key: "quod",
            OauthToken: "iste",
            PrettyPrint: true,
            QuotaUser: "qui",
            UploadType: "beatae",
            UploadProtocol: "impedit",
        },
        Request: &shared.BatchWriteSpansRequest{
            Spans: []shared.Span{
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "non": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "iusto",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 766177713780671023,
                                    Value: "nobis",
                                },
                            },
                            "veniam": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "ad",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 6709580761196811928,
                                    Value: "ratione",
                                },
                            },
                        },
                        DroppedAttributesCount: 40783378052372657,
                    },
                    ChildSpanCount: 1380460733186049654,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 6022974110687088585,
                        Value: "est",
                    },
                    EndTime: "quia",
                    Links: &shared.Links{
                        DroppedLinksCount: 6207443467076797378,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "labore": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "quidem",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 5822375358087136597,
                                                Value: "sit",
                                            },
                                        },
                                        "ut": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "et",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 4925089015365576484,
                                                Value: "voluptas",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 3739660730944009361,
                                },
                                SpanID: "tempora",
                                TraceID: "aperiam",
                                Type: "TYPE_UNSPECIFIED",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "est": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "sunt",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 1911744741587480210,
                                                Value: "similique",
                                            },
                                        },
                                        "aspernatur": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "nemo",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 9125994768307252921,
                                                Value: "et",
                                            },
                                        },
                                        "voluptas": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "esse",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 745743017957769288,
                                                Value: "fuga",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 2233142145543870823,
                                },
                                SpanID: "voluptas",
                                TraceID: "ullam",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "sapiente",
                    ParentSpanID: "numquam",
                    SameProcessAsParentSpan: true,
                    SpanID: "voluptatem",
                    SpanKind: "INTERNAL",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 7953637367785653521,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "atque",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 2409183316280065820,
                                        Value: "nesciunt",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 3383579096223763139,
                                        Value: "enim",
                                    },
                                    LineNumber: "asperiores",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 1613063649726771509,
                                            Value: "accusantium",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 2017855148544399816,
                                            Value: "dolore",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 3352827310578068192,
                                        Value: "porro",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 4062807240857027458,
                                        Value: "eum",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "est",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 6622838227975905907,
                                        Value: "rerum",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7386916455123441575,
                                        Value: "provident",
                                    },
                                    LineNumber: "quia",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 602725720974773922,
                                            Value: "rerum",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 7278689172350406277,
                                            Value: "recusandae",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 3663847910555717574,
                                        Value: "repudiandae",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 2481309397277863472,
                                        Value: "veniam",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "earum",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 8953023372169578025,
                                        Value: "non",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 2919420649047975783,
                                        Value: "aspernatur",
                                    },
                                    LineNumber: "aspernatur",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 8558404059627563028,
                                            Value: "pariatur",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 7264523768779121757,
                                            Value: "ipsum",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 6081911010884333899,
                                        Value: "qui",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 4951091129548843132,
                                        Value: "ut",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "dolorem",
                    },
                    StartTime: "consequuntur",
                    Status: &shared.Status{
                        Code: 3805229372718558956,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "qui": "deserunt",
                                "nihil": "rerum",
                                "ut": "et",
                            },
                            map[string]interface{}{
                                "ut": "eos",
                            },
                            map[string]interface{}{
                                "sint": "reiciendis",
                            },
                        },
                        Message: "possimus",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 283470174873009247,
                        DroppedMessageEventsCount: 5362140778889578478,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "ut": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "reiciendis",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 1962349661628545624,
                                                    Value: "excepturi",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 6418810496222707066,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 8023246232586362542,
                                        Value: "consequatur",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "nihil",
                                    ID: "assumenda",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "sint",
                                },
                                Time: "dolorem",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "quo": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "nulla",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 4451452191532729375,
                                                    Value: "deserunt",
                                                },
                                            },
                                            "porro": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "eius",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 6767116943109334658,
                                                    Value: "dolores",
                                                },
                                            },
                                            "enim": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "quos",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 5493160476973000081,
                                                    Value: "repudiandae",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 6028810783304602274,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 7209973335812237129,
                                        Value: "aut",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "eaque",
                                    ID: "cumque",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "sapiente",
                                },
                                Time: "est",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "sunt": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "ut",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 6330576106239719766,
                                    Value: "voluptate",
                                },
                            },
                        },
                        DroppedAttributesCount: 6157593743459274930,
                    },
                    ChildSpanCount: 2113715352113494624,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 2584184927986693965,
                        Value: "mollitia",
                    },
                    EndTime: "quasi",
                    Links: &shared.Links{
                        DroppedLinksCount: 1435201792920432992,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "at": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "accusamus",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 2000048680226503373,
                                                Value: "sit",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 6762528487471765161,
                                },
                                SpanID: "cum",
                                TraceID: "animi",
                                Type: "TYPE_UNSPECIFIED",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "ipsa": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "voluptas",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 3623278158885660331,
                                                Value: "quos",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 4254595327652117998,
                                },
                                SpanID: "repellendus",
                                TraceID: "id",
                                Type: "PARENT_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "qui": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "consequatur",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 1662028963754414686,
                                                Value: "ipsa",
                                            },
                                        },
                                        "quia": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "cumque",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 3631013103544494408,
                                                Value: "quo",
                                            },
                                        },
                                        "est": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "dolore",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 2928602490937354342,
                                                Value: "ipsum",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 4737561011899276699,
                                },
                                SpanID: "alias",
                                TraceID: "error",
                                Type: "PARENT_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "laborum",
                    ParentSpanID: "ipsum",
                    SameProcessAsParentSpan: true,
                    SpanID: "eligendi",
                    SpanKind: "CONSUMER",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 2641930462972828173,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "dolorem",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 3609853911835461761,
                                        Value: "et",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 4432124519039398811,
                                        Value: "explicabo",
                                    },
                                    LineNumber: "illo",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 1085831511807287253,
                                            Value: "velit",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 7965793567885554109,
                                            Value: "quia",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7015736323773734919,
                                        Value: "minima",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 1925352084401154406,
                                        Value: "dolores",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "fuga",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 7556396613817575449,
                                        Value: "ad",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 4418161570416446488,
                                        Value: "magnam",
                                    },
                                    LineNumber: "consequatur",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 555969204385761941,
                                            Value: "et",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 6883949483493295705,
                                            Value: "necessitatibus",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 1689075041812944168,
                                        Value: "voluptatem",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 6799008923466161745,
                                        Value: "id",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "reprehenderit",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 5002340075246258662,
                                        Value: "aut",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 1811523299021552666,
                                        Value: "dignissimos",
                                    },
                                    LineNumber: "aut",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 8401176224331061558,
                                            Value: "ea",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 4792277001154349441,
                                            Value: "eveniet",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 5031974790601463767,
                                        Value: "in",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 643168938875072399,
                                        Value: "vitae",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "ut",
                    },
                    StartTime: "magni",
                    Status: &shared.Status{
                        Code: 3179073957928220890,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "iure": "ut",
                            },
                            map[string]interface{}{
                                "architecto": "alias",
                                "minus": "adipisci",
                                "eligendi": "quisquam",
                            },
                        },
                        Message: "enim",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 1753630721642571452,
                        DroppedMessageEventsCount: 2864702070756372524,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "velit": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "voluptates",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 7566858703804923606,
                                                    Value: "neque",
                                                },
                                            },
                                            "iste": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "quae",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 2292519189254298492,
                                                    Value: "aut",
                                                },
                                            },
                                            "tempora": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "ipsam",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 7845399485490245197,
                                                    Value: "laboriosam",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 5714573894740407696,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 8284173967229907339,
                                        Value: "reprehenderit",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "iusto",
                                    ID: "ex",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "repellendus",
                                },
                                Time: "rerum",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "est": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "voluptas",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 3811086958972616797,
                                    Value: "sint",
                                },
                            },
                        },
                        DroppedAttributesCount: 8771783303261504860,
                    },
                    ChildSpanCount: 758968987727905180,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 3671406225631151673,
                        Value: "in",
                    },
                    EndTime: "aut",
                    Links: &shared.Links{
                        DroppedLinksCount: 2187810074585096974,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "et": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "aut",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 7269106834525423358,
                                                Value: "qui",
                                            },
                                        },
                                        "et": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "aut",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 8475919334839762193,
                                                Value: "non",
                                            },
                                        },
                                        "iusto": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "et",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 9085405979816689253,
                                                Value: "est",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 2377433486783115150,
                                },
                                SpanID: "pariatur",
                                TraceID: "dolores",
                                Type: "TYPE_UNSPECIFIED",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "provident": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "ex",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 3609640369103632839,
                                                Value: "asperiores",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 8109901239241100236,
                                },
                                SpanID: "earum",
                                TraceID: "harum",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "nostrum": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "rerum",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 5295013123126333471,
                                                Value: "quibusdam",
                                            },
                                        },
                                        "labore": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "odio",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 1541637701090670841,
                                                Value: "est",
                                            },
                                        },
                                        "aut": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "delectus",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 8570709823299790137,
                                                Value: "praesentium",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 6971633552496817570,
                                },
                                SpanID: "nam",
                                TraceID: "est",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "eos",
                    ParentSpanID: "et",
                    SameProcessAsParentSpan: false,
                    SpanID: "quam",
                    SpanKind: "INTERNAL",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 2366536198415328030,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "assumenda",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 7500881939967172001,
                                        Value: "soluta",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7332168525260495620,
                                        Value: "ea",
                                    },
                                    LineNumber: "ut",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 5391723929097199247,
                                            Value: "cumque",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 1915158358805809767,
                                            Value: "enim",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7511277425503615716,
                                        Value: "aut",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 2661474486170522897,
                                        Value: "voluptas",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "consectetur",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 447226788692757278,
                                        Value: "iste",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 3984027297480435169,
                                        Value: "architecto",
                                    },
                                    LineNumber: "reprehenderit",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 9072984896508799954,
                                            Value: "similique",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 7506638577532652023,
                                            Value: "omnis",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 5110446721818693427,
                                        Value: "voluptatem",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 7473095213131427606,
                                        Value: "accusamus",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "nostrum",
                    },
                    StartTime: "et",
                    Status: &shared.Status{
                        Code: 7341397483641711126,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "ut": "numquam",
                                "et": "facere",
                                "consequatur": "magni",
                            },
                            map[string]interface{}{
                                "cupiditate": "alias",
                                "deleniti": "id",
                            },
                        },
                        Message: "at",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 6938841779098188682,
                        DroppedMessageEventsCount: 7129035851956144194,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "impedit": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "consequatur",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 7081481948342983286,
                                                    Value: "ratione",
                                                },
                                            },
                                            "repellendus": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "quod",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 6224069907736523784,
                                                    Value: "et",
                                                },
                                            },
                                            "eos": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "velit",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 8650985596856857592,
                                                    Value: "deserunt",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 8708584292259985472,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 6972628339136989154,
                                        Value: "non",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "quam",
                                    ID: "assumenda",
                                    Type: "RECEIVED",
                                    UncompressedSizeBytes: "illum",
                                },
                                Time: "quo",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "ab": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "ut",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 4657572510679428972,
                                                    Value: "dolores",
                                                },
                                            },
                                            "dolore": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "dicta",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 2319552038199364213,
                                                    Value: "voluptatem",
                                                },
                                            },
                                            "optio": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "vitae",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 4850693092238233584,
                                                    Value: "tempore",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 3533777208493077309,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 8715559078414100735,
                                        Value: "atque",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "dolores",
                                    ID: "maiores",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "rerum",
                                },
                                Time: "tenetur",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "praesentium": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "aut",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 7947099057907674203,
                                                    Value: "nisi",
                                                },
                                            },
                                            "veritatis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "dignissimos",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 7133879316973652936,
                                                    Value: "sapiente",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 2683036339910950262,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 372161888652628027,
                                        Value: "et",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "velit",
                                    ID: "esse",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "architecto",
                                },
                                Time: "quidem",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.CloudtraceProjectsTracesBatchWrite(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->