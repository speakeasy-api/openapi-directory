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
            ProjectID: "unde",
        },
        QueryParams: operations.CloudtraceProjectsPatchTracesQueryParams{
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
        Request: &shared.Traces{
            Traces: []shared.Trace{
                shared.Trace{
                    ProjectID: "iusto",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "saepe",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "enim": "eum",
                                "voluptatum": "autem",
                                "vel": "non",
                                "deleniti": "similique",
                            },
                            Name: "reprehenderit",
                            ParentSpanID: "molestiae",
                            SpanID: "quo",
                            StartTime: "quasi",
                        },
                        shared.TraceSpan{
                            EndTime: "laboriosam",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "voluptatem": "consequatur",
                                "fugiat": "a",
                                "omnis": "eos",
                            },
                            Name: "accusamus",
                            ParentSpanID: "accusamus",
                            SpanID: "reiciendis",
                            StartTime: "rem",
                        },
                    },
                    TraceID: "quibusdam",
                },
                shared.Trace{
                    ProjectID: "et",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "occaecati",
                            Kind: "RPC_CLIENT",
                            Labels: map[string]string{
                                "sed": "quisquam",
                                "rerum": "culpa",
                                "qui": "sed",
                            },
                            Name: "rerum",
                            ParentSpanID: "possimus",
                            SpanID: "occaecati",
                            StartTime: "odit",
                        },
                        shared.TraceSpan{
                            EndTime: "esse",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "amet": "est",
                                "id": "blanditiis",
                            },
                            Name: "numquam",
                            ParentSpanID: "similique",
                            SpanID: "dolores",
                            StartTime: "sit",
                        },
                    },
                    TraceID: "quia",
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