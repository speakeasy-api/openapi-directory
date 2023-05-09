# Projects

### Available Operations

* [CloudtraceProjectsPatchTraces](#cloudtraceprojectspatchtraces) - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
* [CloudtraceProjectsTracesGet](#cloudtraceprojectstracesget) - Gets a single trace by its ID.
* [CloudtraceProjectsTracesList](#cloudtraceprojectstraceslist) - Returns a list of traces that match the specified filter conditions.

## CloudtraceProjectsPatchTraces

Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsPatchTraces(ctx, operations.CloudtraceProjectsPatchTracesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Traces: &shared.Traces{
            Traces: []shared.Trace{
                shared.Trace{
                    ProjectID: sdk.String("quasi"),
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: sdk.String("sint"),
                            Kind: shared.TraceSpanKindEnumSpanKindUnspecified.ToPointer(),
                            Labels: map[string]string{
                                "incidunt": "enim",
                                "consequatur": "est",
                                "quibusdam": "explicabo",
                                "deserunt": "distinctio",
                            },
                            Name: sdk.String("Francisco Gleason"),
                            ParentSpanID: sdk.String("cupiditate"),
                            SpanID: sdk.String("quos"),
                            StartTime: sdk.String("perferendis"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("magni"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "alias": "fugit",
                                "dolorum": "excepturi",
                            },
                            Name: sdk.String("Olivia Rice"),
                            ParentSpanID: sdk.String("eum"),
                            SpanID: sdk.String("non"),
                            StartTime: sdk.String("eligendi"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("sint"),
                            Kind: shared.TraceSpanKindEnumRPCServer.ToPointer(),
                            Labels: map[string]string{
                                "necessitatibus": "sint",
                                "officia": "dolor",
                                "debitis": "a",
                            },
                            Name: sdk.String("Arnold Kirlin"),
                            ParentSpanID: sdk.String("rerum"),
                            SpanID: sdk.String("dicta"),
                            StartTime: sdk.String("magnam"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("cumque"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "aliquid": "laborum",
                                "accusamus": "non",
                            },
                            Name: sdk.String("Jon Tillman"),
                            ParentSpanID: sdk.String("provident"),
                            SpanID: sdk.String("nam"),
                            StartTime: sdk.String("id"),
                        },
                    },
                    TraceID: sdk.String("blanditiis"),
                },
                shared.Trace{
                    ProjectID: sdk.String("deleniti"),
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: sdk.String("amet"),
                            Kind: shared.TraceSpanKindEnumRPCServer.ToPointer(),
                            Labels: map[string]string{
                                "vel": "natus",
                                "omnis": "molestiae",
                            },
                            Name: sdk.String("Marcia Gutkowski"),
                            ParentSpanID: sdk.String("labore"),
                            SpanID: sdk.String("labore"),
                            StartTime: sdk.String("suscipit"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("natus"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "vero": "aspernatur",
                                "architecto": "magnam",
                            },
                            Name: sdk.String("Miriam Hermann"),
                            ParentSpanID: sdk.String("sint"),
                            SpanID: sdk.String("accusantium"),
                            StartTime: sdk.String("mollitia"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("reiciendis"),
                            Kind: shared.TraceSpanKindEnumRPCServer.ToPointer(),
                            Labels: map[string]string{
                                "eum": "dolor",
                                "necessitatibus": "odit",
                            },
                            Name: sdk.String("Joyce Kertzmann"),
                            ParentSpanID: sdk.String("eius"),
                            SpanID: sdk.String("maxime"),
                            StartTime: sdk.String("deleniti"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("facilis"),
                            Kind: shared.TraceSpanKindEnumRPCServer.ToPointer(),
                            Labels: map[string]string{
                                "architecto": "repudiandae",
                            },
                            Name: sdk.String("Lola Koss"),
                            ParentSpanID: sdk.String("sed"),
                            SpanID: sdk.String("saepe"),
                            StartTime: sdk.String("pariatur"),
                        },
                    },
                    TraceID: sdk.String("accusantium"),
                },
                shared.Trace{
                    ProjectID: sdk.String("consequuntur"),
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: sdk.String("natus"),
                            Kind: shared.TraceSpanKindEnumSpanKindUnspecified.ToPointer(),
                            Labels: map[string]string{
                                "quo": "illum",
                            },
                            Name: sdk.String("Simon Jenkins"),
                            ParentSpanID: sdk.String("ea"),
                            SpanID: sdk.String("accusantium"),
                            StartTime: sdk.String("ab"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("maiores"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "voluptate": "autem",
                                "nam": "eaque",
                            },
                            Name: sdk.String("Dr. Herman Wolf"),
                            ParentSpanID: sdk.String("aut"),
                            SpanID: sdk.String("cumque"),
                            StartTime: sdk.String("corporis"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("hic"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "dolores": "quis",
                                "totam": "dignissimos",
                                "eaque": "quis",
                            },
                            Name: sdk.String("Ruby Auer"),
                            ParentSpanID: sdk.String("quam"),
                            SpanID: sdk.String("dolor"),
                            StartTime: sdk.String("vero"),
                        },
                    },
                    TraceID: sdk.String("nostrum"),
                },
                shared.Trace{
                    ProjectID: sdk.String("hic"),
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: sdk.String("omnis"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "voluptatem": "porro",
                                "consequuntur": "blanditiis",
                                "error": "eaque",
                            },
                            Name: sdk.String("Jean Ferry"),
                            ParentSpanID: sdk.String("modi"),
                            SpanID: sdk.String("iste"),
                            StartTime: sdk.String("dolorum"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("deleniti"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "nobis": "libero",
                                "delectus": "quaerat",
                                "quos": "aliquid",
                            },
                            Name: sdk.String("Dawn Fadel"),
                            ParentSpanID: sdk.String("hic"),
                            SpanID: sdk.String("excepturi"),
                            StartTime: sdk.String("cum"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("voluptate"),
                            Kind: shared.TraceSpanKindEnumRPCServer.ToPointer(),
                            Labels: map[string]string{
                                "amet": "dolorum",
                                "numquam": "veritatis",
                                "ipsa": "ipsa",
                                "iure": "odio",
                            },
                            Name: sdk.String("Sophia Predovic"),
                            ParentSpanID: sdk.String("natus"),
                            SpanID: sdk.String("eos"),
                            StartTime: sdk.String("atque"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("sit"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "soluta": "dolorum",
                            },
                            Name: sdk.String("Colleen Pagac"),
                            ParentSpanID: sdk.String("necessitatibus"),
                            SpanID: sdk.String("distinctio"),
                            StartTime: sdk.String("asperiores"),
                        },
                    },
                    TraceID: sdk.String("nihil"),
                },
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "perferendis",
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.CloudtraceProjectsPatchTracesSecurity{
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

## CloudtraceProjectsTracesGet

Gets a single trace by its ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsTracesGet(ctx, operations.CloudtraceProjectsTracesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("provident"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "totam",
        QuotaUser: sdk.String("similique"),
        TraceID: "alias",
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.CloudtraceProjectsTracesGetSecurity{
        Option1: &operations.CloudtraceProjectsTracesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Trace != nil {
        // handle response
    }
}
```

## CloudtraceProjectsTracesList

Returns a list of traces that match the specified filter conditions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsTracesList(ctx, operations.CloudtraceProjectsTracesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        EndTime: sdk.String("qui"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("a"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("harum"),
        OrderBy: sdk.String("iusto"),
        PageSize: sdk.Int64(215507),
        PageToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "tenetur",
        QuotaUser: sdk.String("amet"),
        StartTime: sdk.String("tempore"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("numquam"),
        View: operations.CloudtraceProjectsTracesListViewEnumMinimal.ToPointer(),
    }, operations.CloudtraceProjectsTracesListSecurity{
        Option1: &operations.CloudtraceProjectsTracesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTracesResponse != nil {
        // handle response
    }
}
```
