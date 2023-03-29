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
            Name: "unde",
        },
        QueryParams: operations.CloudtraceProjectsTracesBatchWriteQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.BatchWriteSpansRequest{
            Spans: []shared.Span{
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "ullam": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "saepe",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 56713,
                                    Value: "sapiente",
                                },
                            },
                            "enim": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "eum",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 477665,
                                    Value: "autem",
                                },
                            },
                        },
                        DroppedAttributesCount: 812169,
                    },
                    ChildSpanCount: 528895,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 479977,
                        Value: "similique",
                    },
                    EndTime: "reprehenderit",
                    Links: &shared.Links{
                        DroppedLinksCount: 925597,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "laboriosam": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "dicta",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 648172,
                                                Value: "voluptatem",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 368241,
                                },
                                SpanID: "fugiat",
                                TraceID: "a",
                                Type: "PARENT_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "accusamus": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "accusamus",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 978619,
                                                Value: "rem",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 799159,
                                },
                                SpanID: "et",
                                TraceID: "praesentium",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "soluta": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "sed",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 720633,
                                                Value: "rerum",
                                            },
                                        },
                                        "culpa": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "qui",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 537373,
                                                Value: "rerum",
                                            },
                                        },
                                        "possimus": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "occaecati",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 105907,
                                                Value: "esse",
                                            },
                                        },
                                        "rem": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "voluptatem",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 186332,
                                                Value: "est",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 736918,
                                },
                                SpanID: "blanditiis",
                                TraceID: "numquam",
                                Type: "CHILD_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "sit": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "quia",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 617636,
                                                Value: "voluptatem",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 612096,
                                },
                                SpanID: "modi",
                                TraceID: "et",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "earum",
                    ParentSpanID: "ut",
                    SameProcessAsParentSpan: false,
                    SpanID: "soluta",
                    SpanKind: "SERVER",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 359508,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "iusto",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 902349,
                                        Value: "optio",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 99280,
                                        Value: "inventore",
                                    },
                                    LineNumber: "ut",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 666767,
                                            Value: "et",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 670638,
                                            Value: "ipsum",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 210382,
                                        Value: "ea",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 128926,
                                        Value: "placeat",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "ipsam",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 607831,
                                        Value: "commodi",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 325047,
                                        Value: "similique",
                                    },
                                    LineNumber: "eaque",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 438601,
                                            Value: "harum",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 988374,
                                            Value: "a",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 102044,
                                        Value: "et",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 208876,
                                        Value: "quidem",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "neque",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 995300,
                                        Value: "et",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 581850,
                                        Value: "aliquam",
                                    },
                                    LineNumber: "esse",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 466311,
                                            Value: "voluptatum",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 244425,
                                            Value: "fuga",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 158969,
                                        Value: "laboriosam",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 110375,
                                        Value: "cum",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "expedita",
                    },
                    StartTime: "ipsam",
                    Status: &shared.Status{
                        Code: 138183,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "hic": "consequatur",
                            },
                            map[string]interface{}{
                                "qui": "perferendis",
                                "aspernatur": "fuga",
                                "quo": "tempore",
                            },
                            map[string]interface{}{
                                "aut": "reiciendis",
                            },
                            map[string]interface{}{
                                "totam": "molestias",
                                "reiciendis": "illo",
                                "id": "qui",
                                "quod": "sit",
                            },
                        },
                        Message: "eaque",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 441711,
                        DroppedMessageEventsCount: 282807,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "ea": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "exercitationem",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 480894,
                                                    Value: "sed",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 688661,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 317983,
                                        Value: "aut",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "esse",
                                    ID: "sint",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "numquam",
                                },
                                Time: "eligendi",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "similique": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "et",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 265389,
                                                    Value: "molestias",
                                                },
                                            },
                                            "cupiditate": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "sint",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 93940,
                                                    Value: "et",
                                                },
                                            },
                                            "in": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "vitae",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 929297,
                                                    Value: "minima",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 318569,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 9356,
                                        Value: "libero",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "voluptas",
                                    ID: "magni",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "porro",
                                },
                                Time: "voluptas",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "voluptatem": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "sit",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 397821,
                                                    Value: "officia",
                                                },
                                            },
                                            "omnis": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "voluptatem",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 164940,
                                                    Value: "eum",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 369808,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 4695,
                                        Value: "ratione",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "cum",
                                    ID: "similique",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "nihil",
                                },
                                Time: "id",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "sapiente": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "et",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 248753,
                                                    Value: "possimus",
                                                },
                                            },
                                            "in": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "qui",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 592042,
                                                    Value: "eveniet",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 572252,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 638921,
                                        Value: "modi",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "necessitatibus",
                                    ID: "tenetur",
                                    Type: "RECEIVED",
                                    UncompressedSizeBytes: "ducimus",
                                },
                                Time: "ducimus",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "reiciendis": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "cumque",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 116202,
                                    Value: "ullam",
                                },
                            },
                            "voluptas": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "vel",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 411820,
                                    Value: "qui",
                                },
                            },
                            "cum": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "aut",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 249796,
                                    Value: "culpa",
                                },
                            },
                            "enim": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "aut",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 965417,
                                    Value: "eligendi",
                                },
                            },
                        },
                        DroppedAttributesCount: 588465,
                    },
                    ChildSpanCount: 725255,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 659669,
                        Value: "et",
                    },
                    EndTime: "provident",
                    Links: &shared.Links{
                        DroppedLinksCount: 956084,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "qui": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "nihil",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 618809,
                                                Value: "id",
                                            },
                                        },
                                        "voluptatum": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "sit",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 470132,
                                                Value: "corporis",
                                            },
                                        },
                                        "porro": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "distinctio",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 287991,
                                                Value: "nostrum",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 383462,
                                },
                                SpanID: "et",
                                TraceID: "placeat",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "debitis",
                    ParentSpanID: "dolores",
                    SameProcessAsParentSpan: false,
                    SpanID: "aut",
                    SpanKind: "INTERNAL",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 92373,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "ex",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 590873,
                                        Value: "omnis",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 574325,
                                        Value: "aperiam",
                                    },
                                    LineNumber: "et",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 968962,
                                            Value: "et",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 320997,
                                            Value: "et",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 221262,
                                        Value: "eveniet",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 141264,
                                        Value: "consequatur",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "aspernatur",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 435865,
                                        Value: "maiores",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 891924,
                                        Value: "quaerat",
                                    },
                                    LineNumber: "aut",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 537023,
                                            Value: "nihil",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 447926,
                                            Value: "aspernatur",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 99569,
                                        Value: "sint",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 352312,
                                        Value: "quo",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "totam",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 998848,
                                        Value: "voluptas",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 149448,
                                        Value: "et",
                                    },
                                    LineNumber: "accusamus",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 37559,
                                            Value: "neque",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 508315,
                                            Value: "et",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 166847,
                                        Value: "quia",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 779051,
                                        Value: "pariatur",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "et",
                    },
                    StartTime: "consequatur",
                    Status: &shared.Status{
                        Code: 411397,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "voluptate": "aperiam",
                            },
                            map[string]interface{}{
                                "voluptatibus": "optio",
                            },
                            map[string]interface{}{
                                "qui": "quam",
                                "quisquam": "ab",
                            },
                        },
                        Message: "et",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 365496,
                        DroppedMessageEventsCount: 975522,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "incidunt": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "aut",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 764912,
                                                    Value: "ea",
                                                },
                                            },
                                            "rerum": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "qui",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 749999,
                                                    Value: "ipsum",
                                                },
                                            },
                                            "laboriosam": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "occaecati",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 489549,
                                                    Value: "illo",
                                                },
                                            },
                                            "laboriosam": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "velit",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 179490,
                                                    Value: "sit",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 170986,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 793698,
                                        Value: "laudantium",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "modi",
                                    ID: "officiis",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "rerum",
                                },
                                Time: "non",
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
