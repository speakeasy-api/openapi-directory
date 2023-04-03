<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurityOption2;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Traces;
import org.openapis.openapi.models.shared.Trace;
import org.openapis.openapi.models.shared.TraceSpanKindEnum;
import org.openapis.openapi.models.shared.TraceSpan;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsPatchTracesRequest req = new CloudtraceProjectsPatchTracesRequest() {{
                dollarXgafv = "2";
                traces = new Traces() {{
                    traces = new org.openapis.openapi.models.shared.Trace[]{{
                        add(new Trace() {{
                            projectId = "distinctio";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "unde";
                                    kind = "RPC_CLIENT";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("illum", "vel");
                                        put("error", "deserunt");
                                        put("suscipit", "iure");
                                    }};
                                    name = "magnam";
                                    parentSpanId = "debitis";
                                    spanId = "ipsa";
                                    startTime = "delectus";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "tempora";
                                    kind = "RPC_SERVER";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("minus", "placeat");
                                        put("voluptatum", "iusto");
                                    }};
                                    name = "excepturi";
                                    parentSpanId = "nisi";
                                    spanId = "recusandae";
                                    startTime = "temporibus";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "ab";
                                    kind = "RPC_SERVER";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("deserunt", "perferendis");
                                    }};
                                    name = "ipsam";
                                    parentSpanId = "repellendus";
                                    spanId = "sapiente";
                                    startTime = "quo";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "odit";
                                    kind = "RPC_CLIENT";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("maiores", "molestiae");
                                        put("quod", "quod");
                                        put("esse", "totam");
                                        put("porro", "dolorum");
                                    }};
                                    name = "dicta";
                                    parentSpanId = "nam";
                                    spanId = "officia";
                                    startTime = "occaecati";
                                }}),
                            }};
                            traceId = "fugit";
                        }}),
                        add(new Trace() {{
                            projectId = "deleniti";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "optio";
                                    kind = "RPC_SERVER";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("commodi", "molestiae");
                                    }};
                                    name = "modi";
                                    parentSpanId = "qui";
                                    spanId = "impedit";
                                    startTime = "cum";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "esse";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("aspernatur", "perferendis");
                                        put("ad", "natus");
                                        put("sed", "iste");
                                    }};
                                    name = "dolor";
                                    parentSpanId = "natus";
                                    spanId = "laboriosam";
                                    startTime = "hic";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "saepe";
                                    kind = "RPC_CLIENT";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("corporis", "iste");
                                        put("iure", "saepe");
                                    }};
                                    name = "quidem";
                                    parentSpanId = "architecto";
                                    spanId = "ipsa";
                                    startTime = "reiciendis";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "est";
                                    kind = "RPC_SERVER";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("dolores", "dolorem");
                                        put("corporis", "explicabo");
                                        put("nobis", "enim");
                                    }};
                                    name = "omnis";
                                    parentSpanId = "nemo";
                                    spanId = "minima";
                                    startTime = "excepturi";
                                }}),
                            }};
                            traceId = "accusantium";
                        }}),
                        add(new Trace() {{
                            projectId = "iure";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "doloribus";
                                    kind = "RPC_CLIENT";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("mollitia", "dolorem");
                                    }};
                                    name = "culpa";
                                    parentSpanId = "consequuntur";
                                    spanId = "repellat";
                                    startTime = "mollitia";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "occaecati";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("quam", "molestiae");
                                        put("velit", "error");
                                    }};
                                    name = "quia";
                                    parentSpanId = "quis";
                                    spanId = "vitae";
                                    startTime = "laborum";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "animi";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("quo", "sequi");
                                    }};
                                    name = "tenetur";
                                    parentSpanId = "ipsam";
                                    spanId = "id";
                                    startTime = "possimus";
                                }}),
                            }};
                            traceId = "aut";
                        }}),
                    }};
                }};
                accessToken = "quasi";
                alt = "media";
                callback = "temporibus";
                fields = "laborum";
                key = "quasi";
                oauthToken = "reiciendis";
                prettyPrint = false;
                projectId = "voluptatibus";
                quotaUser = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }}            

            CloudtraceProjectsPatchTracesResponse res = sdk.projects.cloudtraceProjectsPatchTraces(req, new CloudtraceProjectsPatchTracesSecurity() {{
                option1 = new CloudtraceProjectsPatchTracesSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->