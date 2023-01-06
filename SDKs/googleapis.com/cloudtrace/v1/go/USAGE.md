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
    
    req := operations.CloudtraceProjectsPatchTracesRequest{
        Security: operations.CloudtraceProjectsPatchTracesSecurity{
            Option1: &operations.CloudtraceProjectsPatchTracesSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudtraceProjectsPatchTracesPathParams{
            ProjectID: "atque",
        },
        QueryParams: operations.CloudtraceProjectsPatchTracesQueryParams{
            DollarXgafv: "1",
            AccessToken: "eos",
            Alt: "proto",
            Callback: "consectetur",
            Fields: "aut",
            Key: "voluptatem",
            OauthToken: "corporis",
            PrettyPrint: true,
            QuotaUser: "est",
            UploadType: "at",
            UploadProtocol: "ut",
        },
        Request: &shared.Traces{
            Traces: []shared.Trace{
                shared.Trace{
                    ProjectID: "sit",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "impedit",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "exercitationem": "dolores",
                                "molestias": "et",
                            },
                            Name: "iure",
                            ParentSpanID: "ea",
                            SpanID: "tempora",
                            StartTime: "cumque",
                        },
                        shared.TraceSpan{
                            EndTime: "id",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "eum": "libero",
                                "earum": "aut",
                                "nihil": "et",
                            },
                            Name: "odit",
                            ParentSpanID: "omnis",
                            SpanID: "repellendus",
                            StartTime: "dicta",
                        },
                    },
                    TraceID: "quidem",
                },
                shared.Trace{
                    ProjectID: "consequatur",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "qui",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "earum": "sunt",
                                "laborum": "quis",
                            },
                            Name: "blanditiis",
                            ParentSpanID: "recusandae",
                            SpanID: "placeat",
                            StartTime: "dolorem",
                        },
                        shared.TraceSpan{
                            EndTime: "corrupti",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "illum": "quod",
                                "qui": "dicta",
                                "eligendi": "eum",
                            },
                            Name: "voluptatem",
                            ParentSpanID: "labore",
                            SpanID: "a",
                            StartTime: "laudantium",
                        },
                        shared.TraceSpan{
                            EndTime: "porro",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "labore": "aut",
                                "a": "voluptatum",
                            },
                            Name: "repudiandae",
                            ParentSpanID: "accusamus",
                            SpanID: "est",
                            StartTime: "officia",
                        },
                    },
                    TraceID: "ipsum",
                },
            },
        },
    }
    
    res, err := s.Projects.CloudtraceProjectsPatchTraces(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->