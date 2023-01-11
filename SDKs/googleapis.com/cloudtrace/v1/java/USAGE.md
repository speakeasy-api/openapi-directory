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
                    projectId = "sit";
                }};
                queryParams = new CloudtraceProjectsPatchTracesQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new Traces() {{
                    traces = new openapisdk.models.shared.Trace[]() {{
                        add(new Trace() {{
                            projectId = "debitis";
                            spans = new openapisdk.models.shared.TraceSpan[]() {{
                                add(new TraceSpan() {{
                                    endTime = "et";
                                    kind = "RPC_CLIENT";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("et", "voluptate");
                                        put("iste", "vitae");
                                        put("totam", "dolores");
                                    }};
                                    name = "illum";
                                    parentSpanId = "debitis";
                                    spanId = "vel";
                                    startTime = "odio";
                                }}),
                            }};
                            traceId = "dolore";
                        }}),
                        add(new Trace() {{
                            projectId = "id";
                            spans = new openapisdk.models.shared.TraceSpan[]() {{
                                add(new TraceSpan() {{
                                    endTime = "accusantium";
                                    kind = "RPC_CLIENT";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("quis", "est");
                                        put("aut", "odit");
                                    }};
                                    name = "non";
                                    parentSpanId = "voluptas";
                                    spanId = "omnis";
                                    startTime = "aut";
                                }}),
                            }};
                            traceId = "illo";
                        }}),
                        add(new Trace() {{
                            projectId = "sed";
                            spans = new openapisdk.models.shared.TraceSpan[]() {{
                                add(new TraceSpan() {{
                                    endTime = "autem";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("odio", "qui");
                                    }};
                                    name = "recusandae";
                                    parentSpanId = "at";
                                    spanId = "ipsum";
                                    startTime = "eveniet";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "modi";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("ut", "exercitationem");
                                    }};
                                    name = "aut";
                                    parentSpanId = "reprehenderit";
                                    spanId = "tempore";
                                    startTime = "maiores";
                                }}),
                            }};
                            traceId = "incidunt";
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