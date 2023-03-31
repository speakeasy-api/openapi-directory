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

    req := operations.CloudtraceProjectsPatchTracesRequest{
        DollarXgafv: "2",
        Traces: &shared.Traces{
            Traces: []shared.Trace{
                shared.Trace{
                    ProjectID: "distinctio",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "unde",
                            Kind: "RPC_CLIENT",
                            Labels: map[string]string{
                                "illum": "vel",
                                "error": "deserunt",
                                "suscipit": "iure",
                            },
                            Name: "magnam",
                            ParentSpanID: "debitis",
                            SpanID: "ipsa",
                            StartTime: "delectus",
                        },
                        shared.TraceSpan{
                            EndTime: "tempora",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "minus": "placeat",
                                "voluptatum": "iusto",
                            },
                            Name: "excepturi",
                            ParentSpanID: "nisi",
                            SpanID: "recusandae",
                            StartTime: "temporibus",
                        },
                        shared.TraceSpan{
                            EndTime: "ab",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "deserunt": "perferendis",
                            },
                            Name: "ipsam",
                            ParentSpanID: "repellendus",
                            SpanID: "sapiente",
                            StartTime: "quo",
                        },
                        shared.TraceSpan{
                            EndTime: "odit",
                            Kind: "RPC_CLIENT",
                            Labels: map[string]string{
                                "maiores": "molestiae",
                                "quod": "quod",
                                "esse": "totam",
                                "porro": "dolorum",
                            },
                            Name: "dicta",
                            ParentSpanID: "nam",
                            SpanID: "officia",
                            StartTime: "occaecati",
                        },
                    },
                    TraceID: "fugit",
                },
                shared.Trace{
                    ProjectID: "deleniti",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "optio",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "commodi": "molestiae",
                            },
                            Name: "modi",
                            ParentSpanID: "qui",
                            SpanID: "impedit",
                            StartTime: "cum",
                        },
                        shared.TraceSpan{
                            EndTime: "esse",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "aspernatur": "perferendis",
                                "ad": "natus",
                                "sed": "iste",
                            },
                            Name: "dolor",
                            ParentSpanID: "natus",
                            SpanID: "laboriosam",
                            StartTime: "hic",
                        },
                        shared.TraceSpan{
                            EndTime: "saepe",
                            Kind: "RPC_CLIENT",
                            Labels: map[string]string{
                                "corporis": "iste",
                                "iure": "saepe",
                            },
                            Name: "quidem",
                            ParentSpanID: "architecto",
                            SpanID: "ipsa",
                            StartTime: "reiciendis",
                        },
                        shared.TraceSpan{
                            EndTime: "est",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "dolores": "dolorem",
                                "corporis": "explicabo",
                                "nobis": "enim",
                            },
                            Name: "omnis",
                            ParentSpanID: "nemo",
                            SpanID: "minima",
                            StartTime: "excepturi",
                        },
                    },
                    TraceID: "accusantium",
                },
                shared.Trace{
                    ProjectID: "iure",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "doloribus",
                            Kind: "RPC_CLIENT",
                            Labels: map[string]string{
                                "mollitia": "dolorem",
                            },
                            Name: "culpa",
                            ParentSpanID: "consequuntur",
                            SpanID: "repellat",
                            StartTime: "mollitia",
                        },
                        shared.TraceSpan{
                            EndTime: "occaecati",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "quam": "molestiae",
                                "velit": "error",
                            },
                            Name: "quia",
                            ParentSpanID: "quis",
                            SpanID: "vitae",
                            StartTime: "laborum",
                        },
                        shared.TraceSpan{
                            EndTime: "animi",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "quo": "sequi",
                            },
                            Name: "tenetur",
                            ParentSpanID: "ipsam",
                            SpanID: "id",
                            StartTime: "possimus",
                        },
                    },
                    TraceID: "aut",
                },
            },
        },
        AccessToken: "quasi",
        Alt: "media",
        Callback: "temporibus",
        Fields: "laborum",
        Key: "quasi",
        OauthToken: "reiciendis",
        PrettyPrint: false,
        ProjectID: "voluptatibus",
        QuotaUser: "vero",
        UploadType: "nihil",
        UploadProtocol: "praesentium",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsPatchTraces(ctx, req, operations.CloudtraceProjectsPatchTracesSecurity{
        Option1: &operations.CloudtraceProjectsPatchTracesSecurityOption1{
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