# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Trace;
import org.openapis.openapi.models.shared.TraceSpan;
import org.openapis.openapi.models.shared.TraceSpanKindEnum;
import org.openapis.openapi.models.shared.Traces;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsPatchTracesRequest req = new CloudtraceProjectsPatchTracesRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                traces = new Traces() {{
                    traces = new org.openapis.openapi.models.shared.Trace[]{{
                        add(new Trace() {{
                            projectId = "quibusdam";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "nulla";
                                    kind = TraceSpanKindEnum.RPC_SERVER;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("vel", "error");
                                        put("deserunt", "suscipit");
                                        put("iure", "magnam");
                                        put("debitis", "ipsa");
                                    }};
                                    name = "Ricky Hoppe";
                                    parentSpanId = "placeat";
                                    spanId = "voluptatum";
                                    startTime = "iusto";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "excepturi";
                                    kind = TraceSpanKindEnum.RPC_SERVER;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("temporibus", "ab");
                                        put("quis", "veritatis");
                                        put("deserunt", "perferendis");
                                        put("ipsam", "repellendus");
                                    }};
                                    name = "Cedric Connelly";
                                    parentSpanId = "maiores";
                                    spanId = "molestiae";
                                    startTime = "quod";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "quod";
                                    kind = TraceSpanKindEnum.RPC_SERVER;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("porro", "dolorum");
                                        put("dicta", "nam");
                                        put("officia", "occaecati");
                                    }};
                                    name = "Cassandra Welch";
                                    parentSpanId = "beatae";
                                    spanId = "commodi";
                                    startTime = "molestiae";
                                }}),
                            }};
                            traceId = "modi";
                        }}),
                        add(new Trace() {{
                            projectId = "qui";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "cum";
                                    kind = TraceSpanKindEnum.RPC_SERVER;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("excepturi", "aspernatur");
                                    }};
                                    name = "Cathy Mosciski";
                                    parentSpanId = "dolor";
                                    spanId = "natus";
                                    startTime = "laboriosam";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "hic";
                                    kind = TraceSpanKindEnum.RPC_CLIENT;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("in", "corporis");
                                        put("iste", "iure");
                                        put("saepe", "quidem");
                                    }};
                                    name = "Brenda Wisozk";
                                    parentSpanId = "laborum";
                                    spanId = "dolores";
                                    startTime = "dolorem";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "corporis";
                                    kind = TraceSpanKindEnum.SPAN_KIND_UNSPECIFIED;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("enim", "omnis");
                                        put("nemo", "minima");
                                        put("excepturi", "accusantium");
                                        put("iure", "culpa");
                                    }};
                                    name = "Darrin Brakus";
                                    parentSpanId = "culpa";
                                    spanId = "consequuntur";
                                    startTime = "repellat";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "mollitia";
                                    kind = TraceSpanKindEnum.RPC_SERVER;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("commodi", "quam");
                                        put("molestiae", "velit");
                                    }};
                                    name = "Miss Eugene Hauck";
                                    parentSpanId = "enim";
                                    spanId = "odit";
                                    startTime = "quo";
                                }}),
                            }};
                            traceId = "sequi";
                        }}),
                        add(new Trace() {{
                            projectId = "tenetur";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "id";
                                    kind = TraceSpanKindEnum.RPC_CLIENT;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("quasi", "error");
                                    }};
                                    name = "Neal Boyer";
                                    parentSpanId = "vero";
                                    spanId = "nihil";
                                    startTime = "praesentium";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "voluptatibus";
                                    kind = TraceSpanKindEnum.SPAN_KIND_UNSPECIFIED;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("voluptate", "cum");
                                        put("perferendis", "doloremque");
                                        put("reprehenderit", "ut");
                                    }};
                                    name = "Willie Hessel";
                                    parentSpanId = "dicta";
                                    spanId = "harum";
                                    startTime = "enim";
                                }}),
                            }};
                            traceId = "accusamus";
                        }}),
                    }};
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            CloudtraceProjectsPatchTracesResponse res = sdk.projects.cloudtraceProjectsPatchTraces(req, new CloudtraceProjectsPatchTracesSecurity() {{
                option1 = new CloudtraceProjectsPatchTracesSecurityOption1("praesentium", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [cloudtraceProjectsPatchTraces](docs/projects/README.md#cloudtraceprojectspatchtraces) - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
* [cloudtraceProjectsTracesGet](docs/projects/README.md#cloudtraceprojectstracesget) - Gets a single trace by its ID.
* [cloudtraceProjectsTracesList](docs/projects/README.md#cloudtraceprojectstraceslist) - Returns a list of traces that match the specified filter conditions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
