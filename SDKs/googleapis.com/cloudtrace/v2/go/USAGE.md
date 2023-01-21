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
            Name: "sit",
        },
        QueryParams: operations.CloudtraceProjectsTracesBatchWriteQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.BatchWriteSpansRequest{
            Spans: []shared.Span{
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "voluptatum": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "ut",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 161231572858529631,
                                    Value: "et",
                                },
                            },
                        },
                        DroppedAttributesCount: 7373105480197164748,
                    },
                    ChildSpanCount: 3287288577352441706,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 3930927879439176946,
                        Value: "totam",
                    },
                    EndTime: "dolores",
                    Links: &shared.Links{
                        DroppedLinksCount: 1929546706668609706,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "odio": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "id",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 959367522974354090,
                                                Value: "accusantium",
                                            },
                                        },
                                        "totam": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "quis",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 3398579248012586914,
                                                Value: "aut",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 3317123977833389635,
                                },
                                SpanID: "non",
                                TraceID: "voluptas",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "aut",
                    ParentSpanID: "illo",
                    SameProcessAsParentSpan: false,
                    SpanID: "officiis",
                    SpanKind: "INTERNAL",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 8514850266767180993,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "odio",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 7699391924090763411,
                                        Value: "recusandae",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7561811714888168464,
                                        Value: "ipsum",
                                    },
                                    LineNumber: "eveniet",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 303089054982227392,
                                            Value: "sint",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 5392504858645185670,
                                            Value: "ut",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 406703151708498928,
                                        Value: "aut",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 5837486892148644279,
                                        Value: "tempore",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "maiores",
                    },
                    StartTime: "incidunt",
                    Status: &shared.Status{
                        Code: 7242748068272024738,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "in": "et",
                                "omnis": "ipsum",
                            },
                            map[string]interface{}{
                                "dolores": "placeat",
                            },
                            map[string]interface{}{
                                "rerum": "mollitia",
                                "voluptas": "quam",
                            },
                        },
                        Message: "reprehenderit",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 6056649900269286653,
                        DroppedMessageEventsCount: 8056746523676181822,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "autem": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "ut",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 8559453321117178323,
                                                    Value: "ab",
                                                },
                                            },
                                            "neque": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "et",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 4304520335772049496,
                                                    Value: "esse",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 5902760509050140210,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 9021104375654741729,
                                        Value: "velit",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "cumque",
                                    ID: "soluta",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "voluptates",
                                },
                                Time: "magni",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "optio": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "earum",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 4391202566038595699,
                                                    Value: "omnis",
                                                },
                                            },
                                            "ut": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "dolor",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 7945398411639602224,
                                                    Value: "error",
                                                },
                                            },
                                            "reprehenderit": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "nostrum",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 950400323440343118,
                                                    Value: "laboriosam",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 1937101031588528881,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 6604365855503062775,
                                        Value: "soluta",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "aut",
                                    ID: "quas",
                                    Type: "RECEIVED",
                                    UncompressedSizeBytes: "laudantium",
                                },
                                Time: "autem",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "expedita": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "perferendis",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 8497925768463229012,
                                                    Value: "ratione",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 3967212276624460248,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 1681876124477381252,
                                        Value: "ea",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "maxime",
                                    ID: "eum",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "et",
                                },
                                Time: "rerum",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "quis": shared.AttributeValue{
                                BoolValue: true,
                                IntValue: "minima",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 2333048574390956331,
                                    Value: "est",
                                },
                            },
                            "quis": shared.AttributeValue{
                                BoolValue: true,
                                IntValue: "labore",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 544981646038740619,
                                    Value: "impedit",
                                },
                            },
                            "ad": shared.AttributeValue{
                                BoolValue: true,
                                IntValue: "vel",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 5310832663795041070,
                                    Value: "modi",
                                },
                            },
                        },
                        DroppedAttributesCount: 8279128640960530079,
                    },
                    ChildSpanCount: 1011676084465510524,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 8764227983217623240,
                        Value: "eaque",
                    },
                    EndTime: "sunt",
                    Links: &shared.Links{
                        DroppedLinksCount: 157519078836327761,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "vel": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "placeat",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 3755969145755718156,
                                                Value: "nisi",
                                            },
                                        },
                                        "quis": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "porro",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 4230816687517220040,
                                                Value: "et",
                                            },
                                        },
                                        "accusamus": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "laborum",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 8958290475970215309,
                                                Value: "ut",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 4400124260933614083,
                                },
                                SpanID: "fugit",
                                TraceID: "quis",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "soluta",
                    ParentSpanID: "aperiam",
                    SameProcessAsParentSpan: true,
                    SpanID: "excepturi",
                    SpanKind: "PRODUCER",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 1377327594979300801,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "ipsa",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 8997481548049309375,
                                        Value: "animi",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 2606774689767964810,
                                        Value: "aliquam",
                                    },
                                    LineNumber: "fuga",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 7899896093082851758,
                                            Value: "sed",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 6464511094049078446,
                                            Value: "consequuntur",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 3308475210590835610,
                                        Value: "cupiditate",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 432317278959866118,
                                        Value: "molestiae",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "pariatur",
                    },
                    StartTime: "quasi",
                    Status: &shared.Status{
                        Code: 5534365872829545664,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "sit": "possimus",
                            },
                            map[string]interface{}{
                                "neque": "consequuntur",
                                "quia": "et",
                            },
                        },
                        Message: "est",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 6028661030721431741,
                        DroppedMessageEventsCount: 7949662743330369695,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "temporibus": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "quae",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 5042961816383320698,
                                                    Value: "ut",
                                                },
                                            },
                                            "necessitatibus": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "possimus",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 1123791776565256914,
                                                    Value: "dolorum",
                                                },
                                            },
                                            "doloribus": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "sunt",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 2676265675595725604,
                                                    Value: "et",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 6499763367080957833,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 1514803956160473307,
                                        Value: "et",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "est",
                                    ID: "ipsum",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "voluptas",
                                },
                                Time: "nihil",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "suscipit": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "non",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 2991421044203248760,
                                                    Value: "ut",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 3357930257403748968,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 371208508841907247,
                                        Value: "qui",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "quia",
                                    ID: "ipsam",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "enim",
                                },
                                Time: "blanditiis",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "delectus": shared.AttributeValue{
                                BoolValue: true,
                                IntValue: "dolore",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 7274936573655343394,
                                    Value: "velit",
                                },
                            },
                        },
                        DroppedAttributesCount: 1469755398674317289,
                    },
                    ChildSpanCount: 8230160685758639177,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 6225508190691823821,
                        Value: "voluptas",
                    },
                    EndTime: "amet",
                    Links: &shared.Links{
                        DroppedLinksCount: 8268186752735240934,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "excepturi": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "corporis",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 4588799179103092032,
                                                Value: "rem",
                                            },
                                        },
                                        "doloremque": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "nisi",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 7977311963062833636,
                                                Value: "qui",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 3553406609570696275,
                                },
                                SpanID: "et",
                                TraceID: "rerum",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "rem",
                    ParentSpanID: "eos",
                    SameProcessAsParentSpan: false,
                    SpanID: "reiciendis",
                    SpanKind: "SPAN_KIND_UNSPECIFIED",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 5683174242247563523,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "nihil",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 4897843869982862208,
                                        Value: "consequatur",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 3196051979344515342,
                                        Value: "accusantium",
                                    },
                                    LineNumber: "atque",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 1444501184389758573,
                                            Value: "nisi",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 1782404925332466934,
                                            Value: "est",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 9117043256905423229,
                                        Value: "vero",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 8663396966358647741,
                                        Value: "totam",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "deserunt",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 1958777829936408748,
                                        Value: "repellat",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7470170325123997143,
                                        Value: "omnis",
                                    },
                                    LineNumber: "totam",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 6110482739283003758,
                                            Value: "et",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 7167106058699817943,
                                            Value: "necessitatibus",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 4525004039791920848,
                                        Value: "culpa",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 8364267861508686372,
                                        Value: "voluptas",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "ut",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 2118949171484888039,
                                        Value: "architecto",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 9207329833049742865,
                                        Value: "rerum",
                                    },
                                    LineNumber: "quo",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 7465719782626729327,
                                            Value: "saepe",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 1215184329252422444,
                                            Value: "in",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 8590975497400104807,
                                        Value: "asperiores",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 5721519542403305305,
                                        Value: "ea",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "soluta",
                    },
                    StartTime: "tempora",
                    Status: &shared.Status{
                        Code: 5850174490929081658,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "in": "et",
                                "odit": "est",
                            },
                            map[string]interface{}{
                                "ipsum": "aut",
                                "perspiciatis": "et",
                                "vero": "voluptatem",
                            },
                        },
                        Message: "ex",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 1253678802066634880,
                        DroppedMessageEventsCount: 5185464786920936105,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "ea": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "non",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 930977177771307407,
                                                    Value: "beatae",
                                                },
                                            },
                                            "quae": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "magni",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 6901636176146439792,
                                                    Value: "sit",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 3696118768821457648,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 3450989031171849556,
                                        Value: "iusto",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "quia",
                                    ID: "repudiandae",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "autem",
                                },
                                Time: "odit",
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