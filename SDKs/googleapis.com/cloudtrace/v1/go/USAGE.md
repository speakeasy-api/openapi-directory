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
            ProjectID: "corrupti",
        },
        QueryParams: operations.CloudtraceProjectsPatchTracesQueryParams{
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
        Request: &shared.Traces{
            Traces: []shared.Trace{
                shared.Trace{
                    ProjectID: "iure",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "debitis",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "tempora": "suscipit",
                                "molestiae": "minus",
                                "placeat": "voluptatum",
                                "iusto": "excepturi",
                            },
                            Name: "nisi",
                            ParentSpanID: "recusandae",
                            SpanID: "temporibus",
                            StartTime: "ab",
                        },
                        shared.TraceSpan{
                            EndTime: "quis",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "perferendis": "ipsam",
                                "repellendus": "sapiente",
                                "quo": "odit",
                            },
                            Name: "at",
                            ParentSpanID: "at",
                            SpanID: "maiores",
                            StartTime: "molestiae",
                        },
                    },
                    TraceID: "quod",
                },
                shared.Trace{
                    ProjectID: "quod",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "totam",
                            Kind: "RPC_CLIENT",
                            Labels: map[string]string{
                                "dicta": "nam",
                                "officia": "occaecati",
                                "fugit": "deleniti",
                            },
                            Name: "hic",
                            ParentSpanID: "optio",
                            SpanID: "totam",
                            StartTime: "beatae",
                        },
                        shared.TraceSpan{
                            EndTime: "commodi",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "qui": "impedit",
                                "cum": "esse",
                            },
                            Name: "ipsum",
                            ParentSpanID: "excepturi",
                            SpanID: "aspernatur",
                            StartTime: "perferendis",
                        },
                    },
                    TraceID: "ad",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsPatchTraces(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->