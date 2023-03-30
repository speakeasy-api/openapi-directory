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
            Name: "corrupti",
        },
        QueryParams: operations.CloudtraceProjectsTracesBatchWriteQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.BatchWriteSpansRequest{
            Spans: []shared.Span{
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "magnam": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "debitis",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 56713,
                                    Value: "delectus",
                                },
                            },
                            "tempora": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "suscipit",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 477665,
                                    Value: "minus",
                                },
                            },
                        },
                        DroppedAttributesCount: 812169,
                    },
                    ChildSpanCount: 528895,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 479977,
                        Value: "excepturi",
                    },
                    EndTime: "nisi",
                    Links: &shared.Links{
                        DroppedLinksCount: 925597,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "quis": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "veritatis",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 648172,
                                                Value: "perferendis",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 368241,
                                },
                                SpanID: "repellendus",
                                TraceID: "sapiente",
                                Type: "PARENT_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "at": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "at",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 978619,
                                                Value: "molestiae",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 799159,
                                },
                                SpanID: "quod",
                                TraceID: "esse",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "dolorum": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "dicta",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 720633,
                                                Value: "officia",
                                            },
                                        },
                                        "occaecati": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "fugit",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 537373,
                                                Value: "hic",
                                            },
                                        },
                                        "optio": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "totam",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 105907,
                                                Value: "commodi",
                                            },
                                        },
                                        "molestiae": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "modi",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 186332,
                                                Value: "impedit",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 736918,
                                },
                                SpanID: "esse",
                                TraceID: "ipsum",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "perferendis": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "ad",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 617636,
                                                Value: "sed",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 612096,
                                },
                                SpanID: "dolor",
                                TraceID: "natus",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "hic",
                    ParentSpanID: "saepe",
                    SameProcessAsParentSpan: false,
                    SpanID: "fuga",
                    SpanKind: "SERVER",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 359508,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "iure",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 902349,
                                        Value: "quidem",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 99280,
                                        Value: "ipsa",
                                    },
                                    LineNumber: "reiciendis",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 666767,
                                            Value: "mollitia",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 670638,
                                            Value: "dolores",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 210382,
                                        Value: "corporis",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 128926,
                                        Value: "nobis",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "enim",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 607831,
                                        Value: "nemo",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 325047,
                                        Value: "excepturi",
                                    },
                                    LineNumber: "accusantium",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 438601,
                                            Value: "culpa",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 988374,
                                            Value: "sapiente",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 102044,
                                        Value: "mollitia",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 208876,
                                        Value: "culpa",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "consequuntur",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 995300,
                                        Value: "mollitia",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 581850,
                                        Value: "numquam",
                                    },
                                    LineNumber: "commodi",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 466311,
                                            Value: "molestiae",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 244425,
                                            Value: "error",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 158969,
                                        Value: "quis",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 110375,
                                        Value: "laborum",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "animi",
                    },
                    StartTime: "enim",
                    Status: &shared.Status{
                        Code: 138183,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "tenetur": "ipsam",
                            },
                            map[string]interface{}{
                                "possimus": "aut",
                                "quasi": "error",
                                "temporibus": "laborum",
                            },
                            map[string]interface{}{
                                "reiciendis": "voluptatibus",
                            },
                            map[string]interface{}{
                                "nihil": "praesentium",
                                "voluptatibus": "ipsa",
                                "omnis": "voluptate",
                                "cum": "perferendis",
                            },
                        },
                        Message: "doloremque",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 441711,
                        DroppedMessageEventsCount: 282807,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "corporis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "dolore",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 480894,
                                                    Value: "dicta",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 688661,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 317983,
                                        Value: "accusamus",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "commodi",
                                    ID: "repudiandae",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "ipsum",
                                },
                                Time: "quidem",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "excepturi": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "pariatur",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 265389,
                                                    Value: "praesentium",
                                                },
                                            },
                                            "rem": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "voluptates",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 93940,
                                                    Value: "repudiandae",
                                                },
                                            },
                                            "sint": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "veritatis",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 929297,
                                                    Value: "incidunt",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 318569,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 9356,
                                        Value: "est",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "quibusdam",
                                    ID: "explicabo",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "distinctio",
                                },
                                Time: "quibusdam",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "modi": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "qui",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 397821,
                                                    Value: "cupiditate",
                                                },
                                            },
                                            "quos": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "perferendis",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 164940,
                                                    Value: "assumenda",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 369808,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 4695,
                                        Value: "fugit",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "dolorum",
                                    ID: "excepturi",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "facilis",
                                },
                                Time: "tempore",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "delectus": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "eum",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 248753,
                                                    Value: "eligendi",
                                                },
                                            },
                                            "sint": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "aliquid",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 592042,
                                                    Value: "necessitatibus",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 572252,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 638921,
                                        Value: "dolor",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "debitis",
                                    ID: "a",
                                    Type: "RECEIVED",
                                    UncompressedSizeBytes: "in",
                                },
                                Time: "in",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "maiores": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "rerum",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 116202,
                                    Value: "magnam",
                                },
                            },
                            "cumque": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "facere",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 411820,
                                    Value: "aliquid",
                                },
                            },
                            "laborum": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "accusamus",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 249796,
                                    Value: "occaecati",
                                },
                            },
                            "enim": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "accusamus",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 965417,
                                    Value: "quidem",
                                },
                            },
                        },
                        DroppedAttributesCount: 588465,
                    },
                    ChildSpanCount: 725255,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 659669,
                        Value: "blanditiis",
                    },
                    EndTime: "deleniti",
                    Links: &shared.Links{
                        DroppedLinksCount: 956084,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "nisi": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "vel",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 618809,
                                                Value: "omnis",
                                            },
                                        },
                                        "molestiae": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "perferendis",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 470132,
                                                Value: "magnam",
                                            },
                                        },
                                        "distinctio": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "id",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 287991,
                                                Value: "labore",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 383462,
                                },
                                SpanID: "natus",
                                TraceID: "nobis",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "vero",
                    ParentSpanID: "aspernatur",
                    SameProcessAsParentSpan: false,
                    SpanID: "architecto",
                    SpanKind: "INTERNAL",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 92373,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "ullam",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 590873,
                                        Value: "quos",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 574325,
                                        Value: "accusantium",
                                    },
                                    LineNumber: "mollitia",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 968962,
                                            Value: "mollitia",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 320997,
                                            Value: "eum",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 221262,
                                        Value: "necessitatibus",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 141264,
                                        Value: "nemo",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "quasi",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 435865,
                                        Value: "doloribus",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 891924,
                                        Value: "eius",
                                    },
                                    LineNumber: "maxime",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 537023,
                                            Value: "facilis",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 447926,
                                            Value: "architecto",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 99569,
                                        Value: "repudiandae",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 352312,
                                        Value: "expedita",
                                    },
                                },
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
                            },
                        },
                        StackTraceHashID: "pariatur",
                    },
                    StartTime: "maxime",
                    Status: &shared.Status{
                        Code: 411397,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "ea": "accusantium",
                            },
                            map[string]interface{}{
                                "maiores": "quidem",
                            },
                            map[string]interface{}{
                                "voluptate": "autem",
                                "nam": "eaque",
                            },
                        },
                        Message: "pariatur",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 365496,
                        DroppedMessageEventsCount: 975522,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "amet": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "aut",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 764912,
                                                    Value: "corporis",
                                                },
                                            },
                                            "hic": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "libero",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 749999,
                                                    Value: "dolores",
                                                },
                                            },
                                            "quis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "totam",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 489549,
                                                    Value: "eaque",
                                                },
                                            },
                                            "quis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "nesciunt",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 179490,
                                                    Value: "perferendis",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 170986,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 793698,
                                        Value: "quam",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "dolor",
                                    ID: "vero",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "hic",
                                },
                                Time: "recusandae",
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsTracesBatchWrite(ctx, req)
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
## SDK Available Operations


### Projects

* `CloudtraceProjectsTracesBatchWrite` - Batch writes new spans to new or existing traces. You cannot update existing spans.
* `CloudtraceProjectsTracesSpansCreateSpan` - Creates a new span.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
