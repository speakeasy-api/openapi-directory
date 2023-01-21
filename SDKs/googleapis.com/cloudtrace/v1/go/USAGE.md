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
            ProjectID: "sit",
        },
        QueryParams: operations.CloudtraceProjectsPatchTracesQueryParams{
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
        Request: &shared.Traces{
            Traces: []shared.Trace{
                shared.Trace{
                    ProjectID: "debitis",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "et",
                            Kind: "RPC_CLIENT",
                            Labels: map[string]string{
                                "et": "voluptate",
                                "iste": "vitae",
                                "totam": "dolores",
                            },
                            Name: "illum",
                            ParentSpanID: "debitis",
                            SpanID: "vel",
                            StartTime: "odio",
                        },
                    },
                    TraceID: "dolore",
                },
                shared.Trace{
                    ProjectID: "id",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "accusantium",
                            Kind: "RPC_CLIENT",
                            Labels: map[string]string{
                                "quis": "est",
                                "aut": "odit",
                            },
                            Name: "non",
                            ParentSpanID: "voluptas",
                            SpanID: "omnis",
                            StartTime: "aut",
                        },
                    },
                    TraceID: "illo",
                },
                shared.Trace{
                    ProjectID: "sed",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "autem",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "odio": "qui",
                            },
                            Name: "recusandae",
                            ParentSpanID: "at",
                            SpanID: "ipsum",
                            StartTime: "eveniet",
                        },
                        shared.TraceSpan{
                            EndTime: "modi",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "ut": "exercitationem",
                            },
                            Name: "aut",
                            ParentSpanID: "reprehenderit",
                            SpanID: "tempore",
                            StartTime: "maiores",
                        },
                    },
                    TraceID: "incidunt",
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