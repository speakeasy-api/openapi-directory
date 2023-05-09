# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudtrace/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                    ProjectID: sdk.String("distinctio"),
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: sdk.String("unde"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "illum": "vel",
                                "error": "deserunt",
                                "suscipit": "iure",
                            },
                            Name: sdk.String("Raquel Bednar"),
                            ParentSpanID: sdk.String("suscipit"),
                            SpanID: sdk.String("molestiae"),
                            StartTime: sdk.String("minus"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("placeat"),
                            Kind: shared.TraceSpanKindEnumRPCServer.ToPointer(),
                            Labels: map[string]string{
                                "excepturi": "nisi",
                                "recusandae": "temporibus",
                            },
                            Name: sdk.String("Erica Bogisich III"),
                            ParentSpanID: sdk.String("repellendus"),
                            SpanID: sdk.String("sapiente"),
                            StartTime: sdk.String("quo"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("odit"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "maiores": "molestiae",
                                "quod": "quod",
                                "esse": "totam",
                                "porro": "dolorum",
                            },
                            Name: sdk.String("Antoinette Nikolaus"),
                            ParentSpanID: sdk.String("deleniti"),
                            SpanID: sdk.String("hic"),
                            StartTime: sdk.String("optio"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("totam"),
                            Kind: shared.TraceSpanKindEnumSpanKindUnspecified.ToPointer(),
                            Labels: map[string]string{
                                "molestiae": "modi",
                                "qui": "impedit",
                            },
                            Name: sdk.String("Cory Emmerich"),
                            ParentSpanID: sdk.String("perferendis"),
                            SpanID: sdk.String("ad"),
                            StartTime: sdk.String("natus"),
                        },
                    },
                    TraceID: sdk.String("sed"),
                },
                shared.Trace{
                    ProjectID: sdk.String("iste"),
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: sdk.String("natus"),
                            Kind: shared.TraceSpanKindEnumRPCServer.ToPointer(),
                            Labels: map[string]string{
                                "saepe": "fuga",
                                "in": "corporis",
                                "iste": "iure",
                                "saepe": "quidem",
                            },
                            Name: sdk.String("Brenda Wisozk"),
                            ParentSpanID: sdk.String("laborum"),
                            SpanID: sdk.String("dolores"),
                            StartTime: sdk.String("dolorem"),
                        },
                    },
                    TraceID: sdk.String("corporis"),
                },
                shared.Trace{
                    ProjectID: sdk.String("explicabo"),
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: sdk.String("enim"),
                            Kind: shared.TraceSpanKindEnumRPCServer.ToPointer(),
                            Labels: map[string]string{
                                "minima": "excepturi",
                                "accusantium": "iure",
                            },
                            Name: sdk.String("Miss Aubrey Williamson"),
                            ParentSpanID: sdk.String("culpa"),
                            SpanID: sdk.String("consequuntur"),
                            StartTime: sdk.String("repellat"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("mollitia"),
                            Kind: shared.TraceSpanKindEnumRPCServer.ToPointer(),
                            Labels: map[string]string{
                                "commodi": "quam",
                                "molestiae": "velit",
                            },
                            Name: sdk.String("Miss Eugene Hauck"),
                            ParentSpanID: sdk.String("enim"),
                            SpanID: sdk.String("odit"),
                            StartTime: sdk.String("quo"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("sequi"),
                            Kind: shared.TraceSpanKindEnumRPCClient.ToPointer(),
                            Labels: map[string]string{
                                "id": "possimus",
                                "aut": "quasi",
                            },
                            Name: sdk.String("Dr. Jake Pacocha"),
                            ParentSpanID: sdk.String("vero"),
                            SpanID: sdk.String("nihil"),
                            StartTime: sdk.String("praesentium"),
                        },
                        shared.TraceSpan{
                            EndTime: sdk.String("voluptatibus"),
                            Kind: shared.TraceSpanKindEnumSpanKindUnspecified.ToPointer(),
                            Labels: map[string]string{
                                "voluptate": "cum",
                                "perferendis": "doloremque",
                                "reprehenderit": "ut",
                            },
                            Name: sdk.String("Willie Hessel"),
                            ParentSpanID: sdk.String("dicta"),
                            SpanID: sdk.String("harum"),
                            StartTime: sdk.String("enim"),
                        },
                    },
                    TraceID: sdk.String("accusamus"),
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "excepturi",
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [CloudtraceProjectsPatchTraces](docs/projects/README.md#cloudtraceprojectspatchtraces) - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
* [CloudtraceProjectsTracesGet](docs/projects/README.md#cloudtraceprojectstracesget) - Gets a single trace by its ID.
* [CloudtraceProjectsTracesList](docs/projects/README.md#cloudtraceprojectstraceslist) - Returns a list of traces that match the specified filter conditions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
