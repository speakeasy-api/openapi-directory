# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Name: "sed",
        },
        QueryParams: operations.CloudtraceProjectsTracesBatchWriteQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptatem",
            Alt: "proto",
            Callback: "voluptatem",
            Fields: "sequi",
            Key: "fugiat",
            OauthToken: "rerum",
            PrettyPrint: false,
            QuotaUser: "illo",
            UploadType: "consequuntur",
            UploadProtocol: "distinctio",
        },
        Request: &shared.BatchWriteSpansRequest{
            Spans: []shared.Span{
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "quidem": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "aut",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 8715475418672385544,
                                    Value: "aliquam",
                                },
                            },
                            "voluptas": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "earum",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 8426579191464542008,
                                    Value: "officiis",
                                },
                            },
                        },
                        DroppedAttributesCount: 8701862092385727698,
                    },
                    ChildSpanCount: 1375510182566394480,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 2667853516496602622,
                        Value: "qui",
                    },
                    EndTime: "ut",
                    Links: &shared.Links{
                        DroppedLinksCount: 4889365166711756349,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "totam": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "aut",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 5173904636198102650,
                                                Value: "quod",
                                            },
                                        },
                                        "nemo": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "non",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 4098791226593642061,
                                                Value: "iusto",
                                            },
                                        },
                                        "qui": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "atque",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 3882091319042386722,
                                                Value: "fuga",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 4359438289431162146,
                                },
                                SpanID: "accusantium",
                                TraceID: "deserunt",
                                Type: "PARENT_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "quia": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "laudantium",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 8421933435429370482,
                                                Value: "veniam",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 5529399417018292483,
                                },
                                SpanID: "qui",
                                TraceID: "in",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "et": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "aut",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 5473806528995187397,
                                                Value: "assumenda",
                                            },
                                        },
                                        "voluptas": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "inventore",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 1489145555310145027,
                                                Value: "sit",
                                            },
                                        },
                                        "aliquam": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "delectus",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 8494194552799514182,
                                                Value: "voluptatum",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 6504184864662289257,
                                },
                                SpanID: "voluptas",
                                TraceID: "iste",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "natus",
                    ParentSpanID: "voluptatem",
                    SameProcessAsParentSpan: true,
                    SpanID: "quod",
                    SpanKind: "PRODUCER",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 2358920126147056983,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "debitis",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 8278747621504323425,
                                        Value: "commodi",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 2627235105381626935,
                                        Value: "aliquam",
                                    },
                                    LineNumber: "et",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 5466498657175269736,
                                            Value: "qui",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 2863387328857630046,
                                            Value: "sed",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 2827825157440231987,
                                        Value: "explicabo",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 3270159172791425179,
                                        Value: "et",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "quia",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 7323224768096393255,
                                        Value: "iste",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 9023388149142311413,
                                        Value: "voluptatem",
                                    },
                                    LineNumber: "in",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 6994506137373746828,
                                            Value: "quis",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 5408533498458557761,
                                            Value: "ut",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 2919099918776042889,
                                        Value: "in",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 3248081538846909880,
                                        Value: "voluptas",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "beatae",
                    },
                    StartTime: "et",
                    Status: &shared.Status{
                        Code: 8847373183400321540,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "est": "quia",
                                "voluptatibus": "quas",
                                "illum": "voluptas",
                            },
                        },
                        Message: "accusantium",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 1261618183671180042,
                        DroppedMessageEventsCount: 6271005194797273684,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "repudiandae": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "et",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 2227978087237540479,
                                                    Value: "alias",
                                                },
                                            },
                                            "sit": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "error",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 1147601219165276827,
                                                    Value: "et",
                                                },
                                            },
                                            "voluptatem": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "ipsa",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 1306744595110475852,
                                                    Value: "aliquam",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 4817872680905293471,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 3266479277466968158,
                                        Value: "eos",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "eius",
                                    ID: "quaerat",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "et",
                                },
                                Time: "officia",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "sint": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "ut",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 3799826807051379439,
                                                    Value: "quibusdam",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 3932272906123601688,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 7760242436643299824,
                                        Value: "fuga",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "est",
                                    ID: "explicabo",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "voluptas",
                                },
                                Time: "quis",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `CloudtraceProjectsTracesBatchWrite` - Batch writes new spans to new or existing traces. You cannot update existing spans.
* `CloudtraceProjectsTracesSpansCreateSpan` - Creates a new span.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
