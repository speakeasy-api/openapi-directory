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
            ProjectID: "enim",
        },
        QueryParams: operations.CloudtraceProjectsPatchTracesQueryParams{
            DollarXgafv: "2",
            AccessToken: "quibusdam",
            Alt: "proto",
            Callback: "harum",
            Fields: "aliquid",
            Key: "voluptatum",
            OauthToken: "doloremque",
            PrettyPrint: true,
            QuotaUser: "dolorum",
            UploadType: "vel",
            UploadProtocol: "quibusdam",
        },
        Request: &shared.Traces{
            Traces: []shared.Trace{
                shared.Trace{
                    ProjectID: "ullam",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "hic",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "modi": "sapiente",
                            },
                            Name: "voluptatem",
                            ParentSpanID: "maiores",
                            SpanID: "ipsum",
                            StartTime: "natus",
                        },
                        shared.TraceSpan{
                            EndTime: "omnis",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "nam": "recusandae",
                                "et": "nostrum",
                                "repellat": "dolor",
                            },
                            Name: "rem",
                            ParentSpanID: "et",
                            SpanID: "ducimus",
                            StartTime: "et",
                        },
                        shared.TraceSpan{
                            EndTime: "nam",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "beatae": "nisi",
                            },
                            Name: "corrupti",
                            ParentSpanID: "id",
                            SpanID: "cum",
                            StartTime: "voluptas",
                        },
                    },
                    TraceID: "iusto",
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