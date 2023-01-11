<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CloudtraceProjectsPatchTracesRequest req = new CloudtraceProjectsPatchTracesRequest() {{
                security = new CloudtraceProjectsPatchTracesSecurity() {{
                    option1 = new CloudtraceProjectsPatchTracesSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudtraceProjectsPatchTracesPathParams() {{
                    projectId = "aut";
                }};
                queryParams = new CloudtraceProjectsPatchTracesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "error";
                    alt = "media";
                    callback = "sit";
                    fields = "maxime";
                    key = "est";
                    oauthToken = "natus";
                    prettyPrint = true;
                    quotaUser = "sed";
                    uploadType = "recusandae";
                    uploadProtocol = "saepe";
                }};
                request = new Traces() {{
                    traces = new openapisdk.models.shared.Trace[]() {{
                        add(new Trace() {{
                            projectId = "consequatur";
                            spans = new openapisdk.models.shared.TraceSpan[]() {{
                                add(new TraceSpan() {{
                                    endTime = "atque";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("ab", "exercitationem");
                                        put("rerum", "placeat");
                                        put("doloremque", "pariatur");
                                    }};
                                    name = "facilis";
                                    parentSpanId = "consequatur";
                                    spanId = "sit";
                                    startTime = "aut";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "illum";
                                    kind = "RPC_SERVER";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("nemo", "qui");
                                    }};
                                    name = "aut";
                                    parentSpanId = "voluptatum";
                                    spanId = "enim";
                                    startTime = "eos";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "adipisci";
                                    kind = "RPC_SERVER";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("nesciunt", "ipsum");
                                        put("magni", "exercitationem");
                                        put("voluptatem", "debitis");
                                    }};
                                    name = "non";
                                    parentSpanId = "aut";
                                    spanId = "dicta";
                                    startTime = "qui";
                                }}),
                            }};
                            traceId = "architecto";
                        }}),
                        add(new Trace() {{
                            projectId = "dolore";
                            spans = new openapisdk.models.shared.TraceSpan[]() {{
                                add(new TraceSpan() {{
                                    endTime = "laborum";
                                    kind = "RPC_SERVER";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("ex", "qui");
                                        put("incidunt", "debitis");
                                    }};
                                    name = "qui";
                                    parentSpanId = "culpa";
                                    spanId = "ea";
                                    startTime = "totam";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "non";
                                    kind = "RPC_CLIENT";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("repudiandae", "beatae");
                                    }};
                                    name = "dolorem";
                                    parentSpanId = "voluptas";
                                    spanId = "dolores";
                                    startTime = "quam";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "modi";
                                    kind = "RPC_CLIENT";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("earum", "asperiores");
                                        put("illo", "odit");
                                    }};
                                    name = "distinctio";
                                    parentSpanId = "rerum";
                                    spanId = "dolore";
                                    startTime = "corporis";
                                }}),
                            }};
                            traceId = "doloribus";
                        }}),
                        add(new Trace() {{
                            projectId = "ut";
                            spans = new openapisdk.models.shared.TraceSpan[]() {{
                                add(new TraceSpan() {{
                                    endTime = "explicabo";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("neque", "autem");
                                    }};
                                    name = "optio";
                                    parentSpanId = "et";
                                    spanId = "blanditiis";
                                    startTime = "architecto";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "natus";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("repellat", "et");
                                        put("accusamus", "est");
                                        put("et", "sit");
                                    }};
                                    name = "architecto";
                                    parentSpanId = "consequatur";
                                    spanId = "quo";
                                    startTime = "deleniti";
                                }}),
                            }};
                            traceId = "perferendis";
                        }}),
                    }};
                }};
            }};

            CloudtraceProjectsPatchTracesResponse res = sdk.projects.cloudtraceProjectsPatchTraces(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->